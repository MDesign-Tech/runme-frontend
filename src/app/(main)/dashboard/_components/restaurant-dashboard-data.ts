import type { LucideIcon } from "lucide-react";

export type ScreenTemplate = "overview" | "queue" | "catalog" | "people" | "finance" | "insights" | "settings";

export type ScreenConfig = {
  slug: string;
  title: string;
  description: string;
  template: ScreenTemplate;
  eyebrow: string;
  action: string;
  metrics: { label: string; value: string; change: string; trend: "up" | "down" | "neutral" }[];
  rows: { primary: string; secondary: string; detail: string; status: string; amount: string }[];
  highlights: { label: string; value: string; note: string }[];
  features: string[];
  focus: "setup" | "staff" | "crm" | "menu" | "qr" | "sales" | "operations" | "inventory" | "finance" | "insights" | "support";
};

type Metric = ScreenConfig["metrics"][number];
type Row = ScreenConfig["rows"][number];

const restaurantMetrics: Metric[] = [
  { label: "Sales this month", value: "RWF 18.42M", change: "+14.6%", trend: "up" },
  { label: "Open orders", value: "34", change: "+8 orders", trend: "up" },
  { label: "Average spend", value: "RWF 18,240", change: "+6.8%", trend: "up" },
  { label: "Table utilization", value: "78%", change: "On target", trend: "neutral" },
];

const orderRows: Row[] = [
  { primary: "#ORD-2841 · Table 12", secondary: "Chicken burger, fries, fresh juice", detail: "2 min ago · Kitchen", status: "In preparation", amount: "RWF 18,500" },
  { primary: "#ORD-2840 · Table 4", secondary: "Beef pizza, 2 cappuccino", detail: "8 min ago · Grill + Bar", status: "Ready", amount: "RWF 32,000" },
  { primary: "#ORD-2839 · QR Table 8", secondary: "Veggie bowl, sparkling water", detail: "12 min ago · Mobile order", status: "Awaiting payment", amount: "RWF 14,000" },
  { primary: "#ORD-2838 · Takeaway", secondary: "Chicken combo, extra cheese", detail: "18 min ago · Counter", status: "Completed", amount: "RWF 11,500" },
  { primary: "#ORD-2837 · Table 19", secondary: "Family platter, 4 sodas", detail: "24 min ago · Kitchen", status: "In preparation", amount: "RWF 48,000" },
  { primary: "#ORD-2836 · Delivery", secondary: "Pasta Alfredo, juice, dessert", detail: "31 min ago · Kigali delivery", status: "Out for delivery", amount: "RWF 26,500" },
];

const menuRows: Row[] = [
  { primary: "Chicken Burger", secondary: "Lunch · chicken, brioche, lettuce, sauce", detail: "15 min · 650 kcal · Milk, wheat, eggs", status: "Available", amount: "RWF 5,000" },
  { primary: "Beef Pizza", secondary: "Dinner · tomato, mozzarella, beef, herbs", detail: "20 min · 880 kcal · Milk, wheat", status: "Available", amount: "RWF 12,000" },
  { primary: "Chicken Combo", secondary: "Combo · burger, fries, soft drink", detail: "Saves RWF 1,000 · Popular", status: "Available", amount: "RWF 8,000" },
  { primary: "Fresh Passion Juice", secondary: "Drinks · fresh passion fruit", detail: "5 min · Vegan · 180 kcal", status: "Available", amount: "RWF 2,000" },
  { primary: "Cappuccino", secondary: "Drinks · espresso, steamed milk, foam", detail: "4 min · 120 kcal · Milk", status: "Happy hour", amount: "RWF 2,500" },
  { primary: "Chocolate Cake", secondary: "Desserts · cocoa, cream, vanilla", detail: "8 min · 420 kcal · Milk, eggs, wheat", status: "Low stock", amount: "RWF 3,500" },
];

const tableRows: Row[] = [
  { primary: "Table 12", secondary: "Indoor · 4 seats · QR active", detail: "Updated 2 min ago", status: "Occupied", amount: "RWF 18,500 open" },
  { primary: "Table 4", secondary: "Indoor · 2 seats · window", detail: "Order ready to serve", status: "Occupied", amount: "RWF 32,000 open" },
  { primary: "Table 8", secondary: "Outdoor · 6 seats · QR active", detail: "Reservation at 19:30", status: "Reserved", amount: "Tonight" },
  { primary: "VIP Room", secondary: "Private · 12 seats", detail: "Available for booking", status: "Available", amount: "RWF 25,000 min." },
  { primary: "Table 19", secondary: "Indoor · 8 seats", detail: "Family order in kitchen", status: "Occupied", amount: "RWF 48,000 open" },
  { primary: "Table 2", secondary: "Terrace · 2 seats", detail: "Clean and ready", status: "Available", amount: "Walk-in" },
];

const peopleRows: Row[] = [
  { primary: "Jean Habimana", secondary: "VIP Gold · 18 visits · favorite: Chicken Alfredo", detail: "Last visit today · 8,400 points", status: "VIP customer", amount: "RWF 1.25M lifetime" },
  { primary: "Sarah Uwase", secondary: "Silver · 8 visits this month", detail: "Birthday in 12 days", status: "Frequent visitor", amount: "RWF 420K lifetime" },
  { primary: "Mutesi Family", secondary: "Family profile · 6 members", detail: "Prefers outdoor tables", status: "Active customer", amount: "RWF 680K lifetime" },
  { primary: "Eric Niyonzima", secondary: "Regular · vegetarian preference", detail: "No visit for 45 days", status: "At risk", amount: "RWF 210K lifetime" },
  { primary: "Amina Irakoze", secondary: "New customer · Instagram referral", detail: "First visit yesterday", status: "New customer", amount: "RWF 32K lifetime" },
  { primary: "Corporate lunch group", secondary: "Business account · 22 guests monthly", detail: "Invoice terms: 15 days", status: "Active customer", amount: "RWF 2.8M lifetime" },
];

const kitchenRows: Row[] = [
  { primary: "#ORD-2841 · Chicken burger", secondary: "Table 12 · fries + juice", detail: "Ticket opened 2 min ago", status: "Grill", amount: "15 min target" },
  { primary: "#ORD-2840 · Beef pizza", secondary: "Table 4 · two cappuccino", detail: "Pizza ready; drinks pending", status: "Bar", amount: "RWF 32,000" },
  { primary: "#ORD-2839 · Veggie bowl", secondary: "QR Table 8 · no dairy", detail: "Dietary note displayed", status: "Main kitchen", amount: "12 min target" },
  { primary: "#ORD-2837 · Family platter", secondary: "Table 19 · four sodas", detail: "Large order queued", status: "Main kitchen", amount: "20 min target" },
  { primary: "#ORD-2835 · Chocolate cake", secondary: "Table 6 · birthday note", detail: "Add candle before pass", status: "Desserts", amount: "8 min target" },
];

const inventoryRows: Row[] = [
  { primary: "Chicken breast", secondary: "Protein · recipe: chicken burger", detail: "Reorder below 8 kg", status: "Low stock", amount: "6.4 kg" },
  { primary: "Mozzarella", secondary: "Dairy · pizza and pasta recipes", detail: "Supplier delivery tomorrow", status: "Reorder soon", amount: "4.2 kg" },
  { primary: "Brioche buns", secondary: "Bakery · burger variants", detail: "Par level 120 units", status: "In stock", amount: "184 units" },
  { primary: "Passion fruit", secondary: "Produce · fresh juice", detail: "Seasonal price increased 8%", status: "Monitor", amount: "12 kg" },
  { primary: "Coffee beans", secondary: "Beverage · espresso bar", detail: "Roaster: Kigali Coffee Co.", status: "In stock", amount: "18 kg" },
  { primary: "Takeaway packaging", secondary: "Packaging · delivery and counter", detail: "Next PO due Friday", status: "Reorder soon", amount: "420 sets" },
];

const financeRows: Row[] = [
  { primary: "#ORD-2841 · Table 12", secondary: "Mobile Money payment", detail: "Today · MTN MoMo", status: "Settled", amount: "RWF 18,500" },
  { primary: "#ORD-2839 · QR Table 8", secondary: "Online card payment", detail: "Awaiting confirmation", status: "Awaiting payment", amount: "RWF 14,000" },
  { primary: "Corporate lunch group", secondary: "Monthly invoice", detail: "Due in 8 days", status: "Partial", amount: "RWF 420,000" },
  { primary: "Kigali Coffee Co.", secondary: "Coffee bean purchase", detail: "Supplier bill · today", status: "Paid", amount: "RWF 680,000" },
  { primary: "Monthly operating costs", secondary: "Rent, wages, utilities, marketing", detail: "Budget tracking", status: "On plan", amount: "RWF 8.6M" },
  { primary: "VAT collected", secondary: "Tax-inclusive sales", detail: "This reporting period", status: "Healthy", amount: "RWF 2.8M" },
];

const insightRows: Row[] = [
  { primary: "Weekend family combo", secondary: "Chicken combo + fresh juice", detail: "Best conversion on Fridays", status: "Performing", amount: "RWF 1.48M sales" },
  { primary: "At-risk customer win-back", secondary: "86 customers inactive 30+ days", detail: "AI segment ready for WhatsApp", status: "Ready", amount: "RWF 2.4M value" },
  { primary: "Dinner service wait time", secondary: "Average increased 18% this month", detail: "Kitchen bottleneck: Grill", status: "Monitor", amount: "26 min average" },
  { primary: "VIP Gold membership", secondary: "Benefits: 15% off and priority seating", detail: "32 members active", status: "Healthy", amount: "RWF 4.2M sales" },
  { primary: "Google Business reviews", secondary: "Food, service, cleanliness", detail: "4.6 average rating", status: "Performing", amount: "148 reviews" },
];

const setupRows: Row[] = [
  { primary: "Mugenzi Restaurant", secondary: "Resto · Bar · Coffee Shop · Kigali", detail: "Profile and logo configured", status: "Active", amount: "Live" },
  { primary: "Business hours", secondary: "Mon–Sun · 07:00–23:00", detail: "Holiday schedule reviewed", status: "Active", amount: "7 days" },
  { primary: "Kitchen routing", secondary: "Grill, Bar, Desserts, Main kitchen", detail: "Printer mapping tested", status: "Active", amount: "4 stations" },
  { primary: "Tax and service charge", secondary: "VAT 18% · Service charge 10%", detail: "Prices shown tax-inclusive", status: "Active", amount: "Configured" },
  { primary: "Subscription", secondary: "Professional plan", detail: "POS, CRM, inventory, analytics", status: "Active", amount: "RWF 89K/mo" },
];

const staffRows: Row[] = [
  { primary: "Nadine Mukamana", secondary: "General Manager · Front of house", detail: "Clocked in 06:52", status: "On shift", amount: "94% performance" },
  { primary: "Patrick Nshimiyimana", secondary: "Chef · Main kitchen", detail: "Clocked in 07:04", status: "On shift", amount: "97% performance" },
  { primary: "Aurore Ingabire", secondary: "Cashier · POS", detail: "Shift starts 10:00", status: "Scheduled", amount: "12 shifts" },
  { primary: "Dieudonne Hakizimana", secondary: "Bartender · Bar", detail: "Leave request submitted", status: "Leave request", amount: "2 days" },
  { primary: "Mugisha Eric", secondary: "Waiter · Terrace", detail: "Clocked in 11:02", status: "On shift", amount: "91% performance" },
];

const definitions: Omit<ScreenConfig, "metrics" | "rows" | "highlights">[] = [
  { slug: "dashboard", title: "Good afternoon, Maya", description: "Mugenzi Restaurant is on track. See sales, table utilization, kitchen flow, customer loyalty, and the tasks that need attention today.", template: "overview", eyebrow: "Tuesday, August 18 · Kigali", action: "New order", focus: "sales", features: ["Live sales snapshot", "Table utilization", "Kitchen alerts", "AI recommendations"] },
  { slug: "pos", title: "Point of sale", description: "Take dine-in, takeaway, delivery, and QR orders with table context, modifiers, discounts, VAT, service charge, split bills, and receipts.", template: "queue", eyebrow: "Sales workspace", action: "Start order", focus: "sales", features: ["Dine-in and takeaway", "Modifiers and extras", "Discounts and combos", "Split bill and pay later"] },
  { slug: "orders", title: "Orders", description: "Track every order from QR menu, waiter POS, counter, and delivery through kitchen preparation, payment, and feedback.", template: "queue", eyebrow: "Order lifecycle", action: "New order", focus: "sales", features: ["Order status timeline", "Table and customer context", "Kitchen routing", "Payment status"] },
  { slug: "delivery", title: "Delivery", description: "Coordinate delivery zones, driver assignments, customer addresses, preparation estimates, payment status, and proof of delivery.", template: "queue", eyebrow: "Delivery operations", action: "New delivery", focus: "sales", features: ["Delivery zones", "Driver dispatch", "ETA tracking", "Cash and online payment"] },
  { slug: "payments", title: "Payments", description: "Review MTN MoMo, Airtel Money, card, bank, QR payment, pay-at-counter, refunds, split bills, receipts, VAT, and service charge.", template: "finance", eyebrow: "Revenue collection", action: "Record payment", focus: "finance", features: ["Payment providers", "Split bills", "Refunds", "Tax-ready receipts"] },
  { slug: "menu", title: "Menu management", description: "Manage categories, images, descriptions, translations, prices, sizes, variants, extras, recipes, allergens, nutrition, availability, discounts, combos, and AI content tools.", template: "catalog", eyebrow: "Menu operations", action: "Add menu item", focus: "menu", features: ["Categories and variants", "Price types and sizes", "Recipes and allergens", "Availability and promotions"] },
  { slug: "qr-menu", title: "QR digital menu", description: "Publish dynamic table QR codes with mobile-first browsing, search, filters, nutrition, cart customization, waiter calls, online payment, reviews, and table context.", template: "catalog", eyebrow: "Customer ordering", action: "Generate QR code", focus: "qr", features: ["Dynamic table QR", "Search and dietary filters", "Cart and modifiers", "Waiter calls and bill requests"] },
  { slug: "tables", title: "Tables & floor plan", description: "Design indoor, outdoor, VIP, and private-room layouts while tracking available, occupied, reserved, and cleaning states in real time.", template: "overview", eyebrow: "Front of house", action: "Add table", focus: "operations", features: ["Floor plan designer", "Table status", "QR assignment", "Reservation context"] },
  { slug: "reservations", title: "Reservations", description: "Manage bookings, guest counts, preferred areas, customer history, reminders, no-shows, waitlists, and special occasions.", template: "queue", eyebrow: "Bookings", action: "New reservation", focus: "operations", features: ["Calendar and waitlist", "Guest preferences", "Birthday reminders", "Automated confirmations"] },
  { slug: "kitchen", title: "Kitchen display system", description: "Route burgers to Grill, drinks to Bar, desserts to Desserts, and meals to Main kitchen while tracking preparation times and customer ETAs.", template: "queue", eyebrow: "Kitchen workflow", action: "Open KDS", focus: "operations", features: ["Station routing", "Mobile KDS", "Prep timers", "Printer settings"] },
  { slug: "inventory", title: "Inventory", description: "Track ingredients, packaging, stock levels, units, par levels, expiry dates, wastage, transfers, adjustments, and automatic deductions from sold recipes.", template: "catalog", eyebrow: "Stock control", action: "Add ingredient", focus: "inventory", features: ["Recipe deductions", "Low-stock alerts", "Expiry tracking", "Stock counts and waste"] },
  { slug: "recipes", title: "Recipes & food cost", description: "Connect menu items to ingredients, quantities, allergens, nutrition, preparation time, and food cost for accurate margin decisions.", template: "catalog", eyebrow: "Cost control", action: "Add recipe", focus: "inventory", features: ["Ingredient quantities", "Food cost", "Allergen warnings", "Nutrition facts"] },
  { slug: "suppliers", title: "Suppliers", description: "Manage supplier contacts, prices, lead times, payment terms, purchase history, and preferred vendors for food, drinks, packaging, and equipment.", template: "people", eyebrow: "Procurement", action: "Add supplier", focus: "inventory", features: ["Supplier directory", "Price history", "Lead times", "Purchase terms"] },
  { slug: "procurement", title: "Procurement", description: "Create purchase orders from low-stock alerts, approve deliveries, compare supplier quotes, and keep inventory replenishment organized.", template: "queue", eyebrow: "Purchasing", action: "New purchase order", focus: "inventory", features: ["Purchase orders", "Approvals", "Receiving", "Supplier comparison"] },
  { slug: "customers", title: "Customer management", description: "Connect profiles, phones, emails, bookings, orders, payments, loyalty points, favorite dishes, visit history, spending, reviews, dietary preferences, allergies, notes, and consent.", template: "people", eyebrow: "CRM", action: "Add customer", focus: "crm", features: ["Unified customer profiles", "Visit and spend history", "Dietary and allergy notes", "Authorized blacklist controls"] },
  { slug: "loyalty", title: "Loyalty & memberships", description: "Reward purchases and engagement with points, Silver, Gold, and VIP levels, personalized offers, benefits, referrals, and birthday rewards.", template: "people", eyebrow: "Retention", action: "Create reward", focus: "crm", features: ["Points rules", "Membership tiers", "Personalized offers", "Birthday rewards"] },
  { slug: "marketing", title: "Marketing", description: "Build campaigns across Facebook, Instagram, TikTok, LinkedIn, WhatsApp, SMS, email, Google Business, signage, referrals, and partnerships.", template: "insights", eyebrow: "Customer growth", action: "New campaign", focus: "crm", features: ["AI audience segments", "Campaign scheduling", "Offer codes", "Channel performance"] },
  { slug: "feedback", title: "Feedback & reviews", description: "Collect food, service, cleanliness, waiting-time, and overall ratings, then let AI summarize themes and suggest operational improvements.", template: "people", eyebrow: "Guest experience", action: "Review feedback", focus: "crm", features: ["Review inbox", "Rating breakdown", "AI theme analysis", "Response workflows"] },
  { slug: "staff", title: "Staff management", description: "Manage owners, managers, cashiers, waiters, kitchen staff, chefs, bartenders, store managers, drivers, accountants, and marketing roles.", template: "people", eyebrow: "People & permissions", action: "Add employee", focus: "staff", features: ["Attendance", "Shift scheduling", "Clock in/out", "Performance and payroll export"] },
  { slug: "accounting", title: "Accounting & reports", description: "Track sales, VAT, service charge, expenses, payouts, invoices, refunds, profit, cash flow, payroll exports, and branch reporting.", template: "finance", eyebrow: "Back office", action: "Create report", focus: "finance", features: ["VAT reports", "Expense tracking", "Payout reconciliation", "Profit and loss"] },
  { slug: "branches", title: "Branches & business setup", description: "Configure restaurant profiles, logos, branches, business hours, holidays, timezone, RWF currency, VAT, service charge, table layouts, stations, printers, roles, and subscriptions.", template: "settings", eyebrow: "Business setup", action: "Add branch", focus: "setup", features: ["Branch management", "Hours and holidays", "Tax and currency", "Stations and printers"] },
  { slug: "analytics", title: "Analytics", description: "Understand sales, best-selling dishes, table utilization, peak hours, kitchen performance, food cost, customer segments, loyalty, staff performance, and marketing ROI.", template: "insights", eyebrow: "Business intelligence", action: "Customize report", focus: "insights", features: ["Sales analytics", "Menu analytics", "Kitchen timing", "Customer value"] },
  { slug: "ai-assistant", title: "AI assistant", description: "Ask RUNME which customers to target, why wait times increased, which dishes are profitable, what to reorder, and what action to take next.", template: "insights", eyebrow: "RUNME intelligence", action: "Ask RUNME", focus: "insights", features: ["VIP and at-risk segments", "Natural-language analysis", "Menu recommendations", "Operational answers"] },
  { slug: "automations", title: "Automations", description: "Automate booking reminders, birthday messages, proof-like order updates, low-stock alerts, payment nudges, review requests, and win-back campaigns.", template: "settings", eyebrow: "Workflow automation", action: "Create automation", focus: "insights", features: ["Triggers and conditions", "Local-time schedules", "Multi-channel messages", "Approval controls"] },
  { slug: "notifications", title: "Notifications", description: "Manage alerts for new orders, waiter calls, kitchen delays, reservations, low stock, unpaid bills, leave requests, reviews, and automation activity.", template: "settings", eyebrow: "Notification center", action: "Mark all read", focus: "support", features: ["Order alerts", "Staff alerts", "Inventory alerts", "Customer communications"] },
  { slug: "settings", title: "Settings", description: "Manage workspace details, branches, timezone, currency, VAT, service charge, payment providers, roles, printers, subscriptions, integrations, and notification preferences.", template: "settings", eyebrow: "Workspace configuration", action: "Save settings", focus: "setup", features: ["General settings", "Roles and permissions", "Subscription plans", "API and integrations"] },
  { slug: "help", title: "Help & support", description: "Find practical help for menu setup, QR ordering, POS, kitchen routing, inventory, CRM, loyalty, reports, AI, and automation workflows.", template: "settings", eyebrow: "Support center", action: "Start conversation", focus: "support", features: ["Guides and checklists", "Contact support", "Feature requests", "System status"] },
];

function rowsFor(screen: Omit<ScreenConfig, "metrics" | "rows" | "highlights">): Row[] {
  if (screen.focus === "menu" || screen.focus === "qr") return menuRows;
  if (screen.focus === "crm") return peopleRows;
  if (screen.focus === "staff") return staffRows;
  if (screen.focus === "finance") return financeRows;
  if (screen.focus === "inventory") return inventoryRows;
  if (screen.focus === "operations") return screen.slug === "tables" ? tableRows : kitchenRows;
  if (screen.focus === "setup") return setupRows;
  if (screen.focus === "insights") return insightRows;
  return orderRows;
}

function metricsFor(screen: Omit<ScreenConfig, "metrics" | "rows" | "highlights">): Metric[] {
  if (screen.focus === "menu" || screen.focus === "qr") return [
    { label: "Menu items", value: "86", change: "+12 this month", trend: "up" },
    { label: "Available now", value: "79", change: "92% live", trend: "neutral" },
    { label: "Best seller", value: "Chicken combo", change: "+24.8%", trend: "up" },
    { label: "Menu conversion", value: "18.6%", change: "+3.2%", trend: "up" },
  ];
  if (screen.focus === "crm") return [
    { label: "Customer profiles", value: "2,486", change: "+184 this month", trend: "up" },
    { label: "VIP members", value: "124", change: "+18", trend: "up" },
    { label: "Repeat visit rate", value: "68%", change: "+7.4%", trend: "up" },
    { label: "At-risk guests", value: "86", change: "Win-back ready", trend: "down" },
  ];
  if (screen.focus === "staff") return [
    { label: "Team members", value: "32", change: "+3 this month", trend: "up" },
    { label: "On shift now", value: "18", change: "Across 4 stations", trend: "neutral" },
    { label: "Attendance", value: "96%", change: "+2.1%", trend: "up" },
    { label: "Leave requests", value: "4", change: "Needs review", trend: "down" },
  ];
  if (screen.focus === "inventory") return [
    { label: "Tracked ingredients", value: "248", change: "+26 this month", trend: "up" },
    { label: "Low-stock items", value: "12", change: "Review today", trend: "down" },
    { label: "Food cost", value: "31.4%", change: "-1.8%", trend: "up" },
    { label: "Waste this week", value: "RWF 184K", change: "-8.6%", trend: "up" },
  ];
  if (screen.focus === "finance") return [
    { label: "Sales this month", value: "RWF 18.42M", change: "+14.6%", trend: "up" },
    { label: "Outstanding bills", value: "RWF 1.24M", change: "8 invoices", trend: "down" },
    { label: "Gross margin", value: "58.6%", change: "+3.8%", trend: "up" },
    { label: "VAT collected", value: "RWF 2.8M", change: "Tax period", trend: "neutral" },
  ];
  return restaurantMetrics;
}

function highlightsFor(screen: Omit<ScreenConfig, "metrics" | "rows" | "highlights">) {
  if (screen.focus === "menu" || screen.focus === "qr") return [
    { label: "Popular today", value: "Chicken burger", note: "124 orders · 650 kcal" },
    { label: "Upsell opportunity", value: "Extra cheese", note: "Suggested on 42% of burgers" },
    { label: "Needs attention", value: "7 unavailable", note: "Review stock and schedules" },
  ];
  if (screen.focus === "operations") return [
    { label: "Busiest station", value: "Grill", note: "26 min average wait" },
    { label: "Next reservation", value: "Table 8 · 19:30", note: "6 guests · outdoor" },
    { label: "Guest request", value: "Table 12", note: "Needs assistance" },
  ];
  if (screen.focus === "crm") return [
    { label: "VIP opportunity", value: "Jean Habimana", note: "18 visits · RWF 1.25M" },
    { label: "Win-back segment", value: "86 customers", note: "Inactive 30+ days" },
    { label: "Birthday reminder", value: "Sarah Uwase", note: "In 12 days" },
  ];
  if (screen.focus === "inventory") return [
    { label: "Critical ingredient", value: "Chicken breast", note: "6.4 kg remaining" },
    { label: "Next delivery", value: "Kigali Coffee Co.", note: "Tomorrow by 10:00" },
    { label: "Cost opportunity", value: "Bulk mozzarella", note: "Save RWF 72K" },
  ];
  if (screen.focus === "finance") return [
    { label: "Top channel", value: "Dine-in", note: "62% of sales" },
    { label: "Payment mix", value: "MoMo 48%", note: "Card 27% · cash 25%" },
    { label: "Needs attention", value: "8 invoices", note: "Outstanding balances" },
  ];
  if (screen.focus === "staff") return [
    { label: "Coverage today", value: "18 on shift", note: "4 kitchen stations" },
    { label: "Top performer", value: "Patrick N.", note: "97% kitchen SLA" },
    { label: "Needs review", value: "4 leave requests", note: "Manager approval" },
  ];
  return [
    { label: "Revenue target", value: "RWF 20M", note: "Professional plan target" },
    { label: "Top segment", value: "VIP Gold", note: "RWF 4.2M this month" },
    { label: "Needs attention", value: "Grill wait time", note: "Up 18% this week" },
  ];
}

export const restaurantScreens: ScreenConfig[] = definitions.map((definition) => ({
  ...definition,
  metrics: metricsFor(definition),
  rows: rowsFor(definition),
  highlights: highlightsFor(definition),
}));

export function getRestaurantScreen(slug: string) {
  return restaurantScreens.find((screen) => screen.slug === slug);
}

export const restaurantSlugs = restaurantScreens.map((screen) => screen.slug);

export const businessPlanFacts = {
  location: "Kigali, Rwanda",
  brand: "Mugenzi Restaurant",
  currency: "RWF",
  timezone: "Africa/Kigali",
  vat: "18%",
  serviceCharge: "10%",
  plan: "Professional",
};

export type LucideIconMap = Record<string, LucideIcon>;
