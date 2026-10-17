// Auto-converted from the original TypeScript data files
const MENU_CATEGORIES = [
  { id: "all", name: "All Categories", icon: "Sparkles" },
  { id: "pizza", name: "Pizza", icon: "Pizza" },
  { id: "burgers", name: "Burgers", icon: "Sandwich" },
  { id: "chinese", name: "Chinese", icon: "Utensils" },
  { id: "sides", name: "Sides & Appetizers", icon: "Flame" },
  { id: "beverages", name: "Beverages", icon: "CupSoda" }
];
const MENU_ITEMS = [
  // PIZZAS
  {
    id: "p-1",
    name: "Italian Supreme Pizza",
    category: "Pizza",
    description: "Generous chicken chunks, smoked sausages, black olives, bell peppers, mushrooms, and melted 100% mozzarella on golden crust.",
    portionOrSize: 'Small (8") / Medium (10") / Large (13")',
    sizes: [
      { name: 'Small (8")', price: 650 },
      { name: 'Medium (10")', price: 1150 },
      { name: 'Large (13")', price: 1650 }
    ],
    price: 1150,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isPopular: true,
    isVerified: false,
    dietaryNotes: ["Halal", "Spiced To Order"]
  },
  {
    id: "p-2",
    name: "Fajita Sicilian Pizza",
    category: "Pizza",
    description: "Spicy marinated fajita chicken, sweet onions, crunchy green peppers, and rich tomato sauce with aromatic herbs.",
    portionOrSize: 'Small (8") / Medium (10") / Large (13")',
    sizes: [
      { name: 'Small (8")', price: 600 },
      { name: 'Medium (10")', price: 1100 },
      { name: 'Large (13")', price: 1600 }
    ],
    price: 1100,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isPopular: true,
    isVerified: false,
    dietaryNotes: ["Spicy", "Halal"]
  },
  {
    id: "p-3",
    name: "Chicken Tikka Pizza",
    category: "Pizza",
    description: "Traditional Pakistani spiced chicken tikka morsels, rings of red onions, and fresh coriander over mozzarella cheese blend.",
    portionOrSize: 'Small (8") / Medium (10") / Large (13")',
    sizes: [
      { name: 'Small (8")', price: 600 },
      { name: 'Medium (10")', price: 1100 },
      { name: 'Large (13")', price: 1550 }
    ],
    price: 1100,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isPopular: false,
    isVerified: false,
    dietaryNotes: ["Local Favorite", "Halal"]
  },
  {
    id: "p-4",
    name: "Cheese Lover Margherita",
    category: "Pizza",
    description: "Classic rich tomato herb sauce layered with double mozzarella cheese, oregano sprinkles, and a drizzle of olive oil.",
    portionOrSize: 'Small (8") / Medium (10") / Large (13")',
    sizes: [
      { name: 'Small (8")', price: 500 },
      { name: 'Medium (10")', price: 950 },
      { name: 'Large (13")', price: 1350 }
    ],
    price: 950,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Vegetarian", "Mild"]
  },
  // BURGERS
  {
    id: "b-1",
    name: "Crispy Zinger Chicken Burger",
    category: "Burgers",
    description: "Golden fried chicken breast fillet coated in crunchy seasoning, topped with crisp iceberg lettuce and garlic mayo in a toasted sesame bun.",
    portionOrSize: "Standard Single / Combo with Fries",
    price: 520,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isPopular: true,
    isVerified: false,
    dietaryNotes: ["Halal", "Crispy"]
  },
  {
    id: "b-2",
    name: "Special Double Patty Beef / Chicken Burger",
    category: "Burgers",
    description: "Double grilled patties layered with cheddar cheese slice, caramelized onions, house burger relish, and pickled gherkins.",
    portionOrSize: "Double Patty",
    price: 680,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Halal", "Hearty"]
  },
  {
    id: "b-3",
    name: "Classic Chicken Chapli Burger",
    category: "Burgers",
    description: "Adiala road local fusion favorite: spiced chicken patty with mint raita drizzle, tomato slice, and fresh onions.",
    portionOrSize: "Standard Single",
    price: 390,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Halal", "Spiced"]
  },
  // CHINESE
  {
    id: "c-1",
    name: "Special Chicken Chow Mein",
    category: "Chinese",
    description: "Stir-fried egg noodles with shredded chicken strips, crunchy cabbage, bell peppers, carrots, and savory dark soy garlic sauce.",
    portionOrSize: "Serves 1\u20132 persons",
    price: 750,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isPopular: true,
    isVerified: false,
    dietaryNotes: ["Halal", "Wok Fresh"]
  },
  {
    id: "c-2",
    name: "Chicken Manchurian with Egg Fried Rice",
    category: "Chinese",
    description: "Crispy chicken cubes tossed in sweet and tangy tomato-garlic glaze, served with fragrant egg-fried basmati rice.",
    portionOrSize: "Single Meal Platter",
    price: 850,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Halal", "Combo Bowl"]
  },
  {
    id: "c-3",
    name: "Hot & Sour Soup",
    category: "Chinese",
    description: "Warming broth loaded with shredded chicken, black mushrooms, egg ribbons, vinegar, and white pepper kick.",
    portionOrSize: "Single Bowl / Family Bowl",
    price: 450,
    image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Halal", "Comfort Food"]
  },
  // SIDES
  {
    id: "s-1",
    name: "Crispy French Fries (Plain / Masala)",
    category: "Sides",
    description: "Golden potato fries seasoned with traditional chaat masala or classic salt, served with garlic mayo dipping sauce.",
    portionOrSize: "Regular / Large box",
    price: 250,
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Vegetarian"]
  },
  {
    id: "s-2",
    name: "Spicy Buffalo Wings (6 pcs)",
    category: "Sides",
    description: "Fried chicken wings glazed in hot pepper garlic sauce, served fresh and piping hot.",
    portionOrSize: "6 Pieces",
    price: 490,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Halal", "Spicy"]
  },
  {
    id: "s-3",
    name: "Garlic Herb Bread with Cheese",
    category: "Sides",
    description: "Toasted baguette slices infused with butter, crushed garlic, parsley, and melted mozzarella top.",
    portionOrSize: "4 Slices",
    price: 350,
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Vegetarian"]
  },
  // BEVERAGES
  {
    id: "bv-1",
    name: "Chilled Soft Drinks (Can / 1.5L)",
    category: "Beverages",
    description: "Assorted refreshing sodas: Pepsi, 7Up, Mirinda, or Mountain Dew.",
    portionOrSize: "345ml Can / 1.5 Litre Bottle",
    price: 120,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Chilled"]
  },
  {
    id: "bv-2",
    name: "Mineral Water (Small / Large)",
    category: "Beverages",
    description: "Pure sealed drinking water.",
    portionOrSize: "500ml / 1500ml",
    price: 80,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
    isAvailable: true,
    isVerified: false,
    dietaryNotes: ["Refreshing"]
  }
];
const DEALS_OFFERS = [
  {
    id: "deal-1",
    title: "Adiala Family Feast",
    category: "Family Deal",
    shortDescription: "Ideal for weekend family dinners in Munawar Colony. Includes 2 Large Pizzas, 1 Regular Fries & 1.5L Beverage.",
    applicableProducts: ["2 Large Pizzas (Any Flavors)", "Large French Fries", "1.5 Litre Soft Drink"],
    pricePKR: 3200,
    discountNote: "Contact restaurant to verify current promotional bundle price",
    validityText: "Available daily \u2014 Please verify with restaurant staff at 051-5574288",
    terms: [
      "Flavor selections subject to kitchen availability",
      "Delivery charges apply based on distance along Adiala Road",
      "Prices subject to confirmation upon order placement"
    ],
    isVerified: false,
    tag: "Popular Group Choice"
  },
  {
    id: "deal-2",
    title: "Student & Youth Solo Saver",
    category: "Student Offer",
    shortDescription: "Budget-friendly quick meal crafted for students and quick bites. 1 Small Pizza or Zinger Burger with drink.",
    applicableProducts: ["1 Small Pizza OR 1 Crispy Zinger Burger", "1 Regular Fries", "1 Soft Drink Can"],
    pricePKR: 750,
    discountNote: "Special pricing subject to confirmation",
    validityText: "Valid for takeaway and phone delivery orders",
    terms: [
      "Mention Student Saver when calling 051-5574288",
      "Cannot be combined with other unverified coupons"
    ],
    isVerified: false,
    tag: "Quick Meal"
  },
  {
    id: "deal-3",
    title: "Twin Cravings Duo Deal",
    category: "Combo Deal",
    shortDescription: "Perfect combination for two: 1 Medium Pizza, 1 Zinger Burger, and 2 Soft Drink cans.",
    applicableProducts: ["1 Medium Pizza (Supreme or Fajita)", "1 Crispy Zinger Burger", "2 Soft Drinks (345ml)"],
    pricePKR: 1650,
    discountNote: "Combo value placeholder pending confirmation",
    validityText: "Lunch & Dinner hours",
    terms: [
      "Takeaway and delivery available",
      "Confirm exact availability with telephone operator"
    ],
    isVerified: false,
    tag: "Duo Special"
  },
  {
    id: "deal-4",
    title: "Midnight Hunger Buster",
    category: "Late Night Combo",
    shortDescription: "Late evening craving pack. 1 Medium Pizza and 6 Spicy Buffalo Wings.",
    applicableProducts: ["1 Medium Pizza", "6 Buffalo Wings", "Garlic Mayo Dip"],
    pricePKR: 1450,
    discountNote: "Estimated deal placeholder",
    validityText: "Subject to confirmed late night kitchen hours",
    terms: [
      "Operating hours pending final verification (research reports ~12:45 AM close)",
      "Confirm late night delivery cutoff by calling 051-5574288"
    ],
    isVerified: false,
    tag: "Late Craving"
  }
];
const RESTAURANT_CONFIG = {
  businessName: "Italian Pizza",
  tagline: "Your Next Pizza Craving Starts Here",
  taglineUrdu: "\u0622\u067E \u06A9\u06CC \u067E\u0633\u0646\u062F\u06CC\u062F\u06C1 \u067E\u06CC\u0632\u0627 \u06A9\u06CC \u0645\u0646\u0632\u0644 \u2014 \u0627\u0688\u06CC\u0627\u0644\u06C1 \u0631\u0648\u0688\u060C \u0631\u0627\u0648\u0644\u067E\u0646\u0688\u06CC",
  locationName: "Adiala Road, Rawalpindi",
  fullAddress: "G3X4+X74, Adiyala Rd, Munawar Colony, Rawalpindi, 46000, Pakistan",
  plusCode: "G3X4+X74 Rawalpindi",
  city: "Rawalpindi",
  postalCode: "46000",
  country: "Pakistan",
  phone: "051-5574288",
  phoneInternational: "+92 51 5574288",
  primaryCategory: "Pizza Restaurant",
  reportedCategories: ["Pizza", "Burgers", "Chinese Food", "Fast Food", "Sides", "Beverages"],
  currency: "PKR",
  currencySymbol: "Rs.",
  // Unverified links & contacts
  officialDomain: "[CONFIRM_OFFICIAL_DOMAIN]",
  whatsappNumber: "[CONFIRM_WHATSAPP_NUMBER]",
  foodpandaUrl: "[ADD_VERIFIED_FOODPANDA_URL]",
  facebookUrl: "[ADD_VERIFIED_FACEBOOK_URL]",
  instagramUrl: "[ADD_VERIFIED_INSTAGRAM_URL]",
  openingHours: {
    status: "unverified_estimate",
    note: "Initial research reports operating hours around 11:00 AM \u2013 12:45 AM daily. Pending restaurant owner verification.",
    schedule: [
      { day: "Monday", hours: "11:00 AM \u2013 12:45 AM (Pending confirmation)", isConfirmed: false },
      { day: "Tuesday", hours: "11:00 AM \u2013 12:45 AM (Pending confirmation)", isConfirmed: false },
      { day: "Wednesday", hours: "11:00 AM \u2013 12:45 AM (Pending confirmation)", isConfirmed: false },
      { day: "Thursday", hours: "11:00 AM \u2013 12:45 AM (Pending confirmation)", isConfirmed: false },
      { day: "Friday", hours: "11:00 AM \u2013 12:45 AM (Pending confirmation)", isConfirmed: false },
      { day: "Saturday", hours: "11:00 AM \u2013 12:45 AM (Pending confirmation)", isConfirmed: false },
      { day: "Sunday", hours: "11:00 AM \u2013 12:45 AM (Pending confirmation)", isConfirmed: false }
    ]
  },
  delivery: {
    status: "pending_confirmation",
    coverageAreas: "Munawar Colony, Adiala Road neighborhoods & nearby sectors (Please call to verify exact street coverage)",
    deliveryFee: "Subject to delivery distance / Please confirm by telephone",
    minOrder: "Contact restaurant to confirm minimum order amount",
    estimatedTime: "30 \u2013 45 mins (Estimated typical prep and transit)"
  },
  services: {
    takeaway: {
      available: true,
      status: "Available \u2014 Call 051-5574288 to place pickup order in advance"
    },
    dineIn: {
      available: false,
      status: "Pending owner confirmation \u2014 please call 051-5574288 before visiting for dine-in"
    },
    homeDelivery: {
      available: true,
      status: "Available via direct telephone call: 051-5574288"
    }
  },
  ownerChecklist: [
    {
      id: "phone",
      label: "Landline Phone Number",
      field: "phone",
      currentValue: "051-5574288",
      isVerified: true,
      instructions: "Supplied directly in project brief. Active telephone link configured on all pages."
    },
    {
      id: "address",
      label: "Full Address & Plus Code",
      field: "fullAddress",
      currentValue: "G3X4+X74, Adiyala Rd, Munawar Colony, Rawalpindi, 46000",
      isVerified: true,
      instructions: "Supplied in project brief. Directions link directly to Adiala Rd / Munawar Colony."
    },
    {
      id: "hours",
      label: "Weekly Opening Hours",
      field: "openingHours",
      currentValue: "[CONFIRM_OPENING_HOURS] (Reported ~11:00 AM \u2013 12:45 AM)",
      isVerified: false,
      instructions: "Owner needs to confirm exact opening and closing times for weekdays and weekends."
    },
    {
      id: "whatsapp",
      label: "WhatsApp Ordering Number",
      field: "whatsappNumber",
      currentValue: "[CONFIRM_WHATSAPP_NUMBER]",
      isVerified: false,
      instructions: "Supply official mobile WhatsApp business number to enable 1-tap WhatsApp chat ordering."
    },
    {
      id: "foodpanda",
      label: "Foodpanda Restaurant URL",
      field: "foodpandaUrl",
      currentValue: "[ADD_VERIFIED_FOODPANDA_URL]",
      isVerified: false,
      instructions: "Provide exact Foodpanda outlet link once verified."
    },
    {
      id: "social",
      label: "Facebook & Instagram Links",
      field: "facebookUrl / instagramUrl",
      currentValue: "[ADD_VERIFIED_FACEBOOK_URL] / [ADD_VERIFIED_INSTAGRAM_URL]",
      isVerified: false,
      instructions: "Add verified social accounts to display official links in header and footer."
    },
    {
      id: "menu_prices",
      label: "Official Menu Items & Prices",
      field: "menuItems",
      currentValue: "Initial representative preview (clearly labeled)",
      isVerified: false,
      instructions: "Review PKR prices and size portions with the kitchen team to verify before printing or online ordering launch."
    }
  ]
};
