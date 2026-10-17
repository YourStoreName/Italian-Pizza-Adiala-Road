const C = RESTAURANT_CONFIG;
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const money = (n) => `${C.currencySymbol} ${Number(n).toLocaleString('en-PK')}`;
const tel = 'tel:' + C.phone.replace(/[^\d+]/g, '');

let category = 'all', query = '', currentItem = '';

// ---------- Static text ----------
$('tagline').textContent = C.tagline;
$('urdu').textContent = C.taglineUrdu || '';
$('callbar').href = tel;
$('foot').textContent = `© ${new Date().getFullYear()} ${C.businessName} — ${C.fullAddress} · ${C.phone}`;
$('hoursNote').textContent = C.openingHours.note;
$('hours').innerHTML = C.openingHours.schedule.map((d) => `<li><b>${esc(d.day)}</b><span>${esc(d.hours)}</span></li>`).join('');
$('info').innerHTML = `
  <h3>${esc(C.businessName)}</h3>
  <p>📍 ${esc(C.fullAddress)}</p>
  <p>📞 <a href="${tel}">${esc(C.phone)}</a></p>
  <p>🛵 ${esc(C.services.homeDelivery.status)}</p>
  <p>🥡 ${esc(C.services.takeaway.status)}</p>
  <p>🍽️ ${esc(C.services.dineIn.status)}</p>
  <a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.plusCode)}">Get directions</a>`;

// ---------- Menu ----------
$('cats').innerHTML = MENU_CATEGORIES.map((c) => `<button class="chip${c.id === 'all' ? ' on' : ''}" data-cat="${c.id}">${esc(c.name)}</button>`).join('');
$('cats').addEventListener('click', (e) => {
  const b = e.target.closest('[data-cat]');
  if (!b) return;
  category = b.dataset.cat;
  document.querySelectorAll('.chip').forEach((x) => x.classList.toggle('on', x === b));
  renderMenu();
});
$('search').addEventListener('input', (e) => { query = e.target.value.trim().toLowerCase(); renderMenu(); });

function renderMenu() {
  const items = MENU_ITEMS.filter((i) =>
    (category === 'all' || i.category.toLowerCase() === category) &&
    (!query || (i.name + i.description).toLowerCase().includes(query)));
  $('grid').innerHTML = items.length ? items.map((i) => `
    <article class="card"><img loading="lazy" src="${esc(i.image)}" alt="${esc(i.name)}">
      <div class="body">
        <div class="tags">${i.isPopular ? '<span class="tag hot">Popular</span>' : ''}${i.isChefSpecial ? '<span class="tag hot">Chef Special</span>' : ''}${(i.dietaryNotes || []).map((n) => `<span class="tag">${esc(n)}</span>`).join('')}</div>
        <h3>${esc(i.name)}</h3><p>${esc(i.description)}</p>
        ${i.sizes ? `<select data-id="${i.id}">${i.sizes.map((s) => `<option value="${s.price}">${esc(s.name)} — ${money(s.price)}</option>`).join('')}</select>` : `<p>${esc(i.portionOrSize)}</p>`}
        <div class="foot"><span class="price" id="pr-${i.id}">${money(i.price)}</span>
          <button class="btn" data-add="${i.id}">Order</button></div>
      </div></article>`).join('') : '<p>No items match your search.</p>';
}
$('grid').addEventListener('change', (e) => {
  if (e.target.matches('select')) $('pr-' + e.target.dataset.id).textContent = money(e.target.value);
});
$('grid').addEventListener('click', (e) => {
  const b = e.target.closest('[data-add]');
  if (!b) return;
  const item = MENU_ITEMS.find((i) => i.id === b.dataset.add);
  const sel = b.closest('.card').querySelector('select');
  openModal(item.name + (sel ? ` (${sel.options[sel.selectedIndex].text})` : ` — ${money(item.price)}`));
});

// ---------- Deals ----------
$('dealGrid').innerHTML = DEALS_OFFERS.map((d) => `
  <article class="card"><div class="body">
    <div class="tags"><span class="tag hot">${esc(d.tag)}</span><span class="tag">${esc(d.category)}</span></div>
    <h3>${esc(d.title)}</h3><p>${esc(d.shortDescription)}</p>
    <ul class="plain">${d.applicableProducts.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    <p class="note">${esc(d.discountNote)}</p>
    <div class="foot"><span class="price">${d.pricePKR ? money(d.pricePKR) : ''}</span>
      <button class="btn" data-deal="${d.id}">Order</button></div>
  </div></article>`).join('');
$('dealGrid').addEventListener('click', (e) => {
  const b = e.target.closest('[data-deal]');
  if (b) openModal(DEALS_OFFERS.find((d) => d.id === b.dataset.deal).title);
});

// ---------- Order modal ----------
function openModal(item) {
  currentItem = item || '';
  $('mItem').textContent = currentItem ? 'Selected: ' + currentItem : 'Call us to place your order.';
  $('mCall').href = tel;
  $('mCall').textContent = '📞 Call ' + C.phone;
  $('mSvc').textContent = C.delivery.coverageAreas;
  $('mStatus').textContent = '';
  $('modal').hidden = false;
}
const closeModal = () => { $('modal').hidden = true; };
document.querySelectorAll('[data-order]').forEach((b) => b.addEventListener('click', () => openModal()));
$('close').addEventListener('click', closeModal);
$('modal').addEventListener('click', (e) => { if (e.target === $('modal')) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
$('mCopy').addEventListener('click', async () => {
  const text = `Hello ${C.businessName}, I would like to order: ${currentItem || '(please share menu)'}`;
  try { await navigator.clipboard.writeText(text); $('mStatus').textContent = 'Copied! Paste it in WhatsApp/SMS or read it out on the call.'; }
  catch { $('mStatus').textContent = text; }
});

renderMenu();
