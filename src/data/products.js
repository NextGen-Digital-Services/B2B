export const products = [
  {
    id: 'sovereign-handbag',
    category_id: 'handbags',
    serial: 'ZC-001',
    name: 'Sovereign Full-Grain Handbag',
    slug: 'sovereign-full-grain-handbag',
    description: 'A masterpiece of classic geometry and structural integrity. Built for high-end boutique retail, the Sovereign features hand-painted edges, a padded tablet divider, and reinforced handle mounts designed for premium service life.',
    material: 'Vesta Top-Grain Calfskin Leather',
    moq: 100,
    price_tiers: [
      { min_qty: 100, max_qty: 249, unit_price: 85.00 },
      { min_qty: 100, max_qty: 249, unit_price: 75.00 },
      { min_qty: 250, max_qty: 999, unit_price: 65.00 }
    ],
    specifications: {
      dimensions: '32cm (W) x 24cm (H) x 12cm (D)',
      weight: '0.85 kg',
      hardware: 'Antique Solid Brass (Corrosion Resistant)',
      lining: 'Premium 10 oz Cotton Canvas'
    },
    customization_options: {
      colors: ['Oxblood Burgundy', 'Cognac Tan', 'Charcoal Noir'],
      logo_branding: true,
      custom_packaging: true
    },
    images: ['#4A1420', '#A9683B', '#241812'], // Oxblood, Cognac, Charcoal colors represent the bags
    lead_time_days: 35,
    is_featured: true,
    created_at: '2026-01-15T08:00:00Z'
  },
  {
    id: 'toscana-tote',
    category_id: 'totes',
    serial: 'ZC-002',
    name: 'Toscana Executive Tote',
    slug: 'toscana-executive-tote',
    description: 'Designed for the modern professional. The Toscana features high-tensile dual handles, flat-bottom design with protective brass feet, and an integrated padded compartment fitting laptops up to 15.6 inches.',
    material: 'Tuscan Vegetable-Tanned Cowhide',
    moq: 100,
    price_tiers: [
      { min_qty: 100, max_qty: 249, unit_price: 65.00 },
      { min_qty: 250, max_qty: 499, unit_price: 55.00 },
      { min_qty: 500, max_qty: 999, unit_price: 45.00 }
    ],
    specifications: {
      dimensions: '40cm (W) x 35cm (H) x 15cm (D)',
      weight: '0.95 kg',
      hardware: 'Brushed Gold Zinc Alloy',
      lining: 'Suede-effect Premium Microfiber'
    },
    customization_options: {
      colors: ['Saddle Tan', 'Oxblood Burgundy', 'Forest Green'],
      logo_branding: true,
      custom_packaging: true
    },
    images: ['#A9683B', '#4A1420', '#6B5A4E'], // Cognac, Oxblood, Taupe
    lead_time_days: 40,
    is_featured: true,
    created_at: '2026-02-10T08:00:00Z'
  },
  {
    id: 'vanguard-wallet',
    category_id: 'wallets',
    serial: 'ZC-003',
    name: 'Vanguard Saffiano Wallet',
    slug: 'vanguard-saffiano-wallet',
    description: 'A sleek, cross-grain scratch-resistant wallet designed for high volume distribution. Incorporates 6 card slots, a cash slot, and a military-grade RFID blocking internal mesh.',
    material: 'Saffiano Textured Leather',
    moq: 200,
    price_tiers: [
      { min_qty: 200, max_qty: 499, unit_price: 18.00 },
      { min_qty: 500, max_qty: 999, unit_price: 15.00 },
      { min_qty: 1000, max_qty: 4999, unit_price: 12.00 }
    ],
    specifications: {
      dimensions: '11cm (W) x 9cm (H) x 1.5cm (D)',
      weight: '0.08 kg',
      hardware: 'Stitched Edge Construction',
      lining: 'RFID-Blocking German Silk Lining'
    },
    customization_options: {
      colors: ['Midnight Black', 'Cognac Tan', 'Navy Blue'],
      logo_branding: true,
      custom_packaging: true
    },
    images: ['#241812', '#A9683B', '#2E0D14'], // Charcoal, Cognac, Dark Burgundy
    lead_time_days: 30,
    is_featured: true,
    created_at: '2026-03-01T08:00:00Z'
  },
  {
    id: 'metropolitan-backpack',
    category_id: 'backpacks',
    serial: 'ZC-004',
    name: 'Metropolitan Tech Backpack',
    slug: 'metropolitan-tech-backpack',
    description: 'An premium backpack balancing classic heritage with modern functionality. Highlights include heavy-duty YKK zippers, hidden anti-theft back pocket, and a multi-layered padded harness system for comfort during travel.',
    material: 'Full-Grain Pull-Up Harness Leather',
    moq: 100,
    price_tiers: [
      { min_qty: 100, max_qty: 249, unit_price: 95.00 },
      { min_qty: 100, max_qty: 249, unit_price: 85.00 },
      { min_qty: 250, max_qty: 999, unit_price: 75.00 }
    ],
    specifications: {
      dimensions: '45cm (W) x 30cm (H) x 18cm (D)',
      weight: '1.20 kg',
      hardware: 'Gunmetal YKK Japan Zippers',
      lining: 'Water-Resistant Ripstop Nylon (420D)'
    },
    customization_options: {
      colors: ['Charcoal Noir', 'Saddle Tan', 'Deep Navy'],
      logo_branding: true,
      custom_packaging: true
    },
    images: ['#241812', '#A9683B', '#6B5A4E'], // Charcoal, Cognac, Taupe
    lead_time_days: 45,
    is_featured: false,
    created_at: '2026-03-12T08:00:00Z'
  },
  {
    id: 'heritage-duffel',
    category_id: 'travel',
    serial: 'ZC-005',
    name: 'Heritage Cabin Duffel',
    slug: 'heritage-cabin-duffel',
    description: 'The ultimate weekender. Sized strictly to meet standard international flight carry-on dimensions. Reinforced handles extend all the way under the base for load bearing support, paired with thick brass buckles.',
    material: 'Thick Full-Grain Cowhide (Crazy Horse Finish)',
    moq: 100,
    price_tiers: [
      { min_qty: 100, max_qty: 249, unit_price: 120.00 },
      { min_qty: 50, max_qty: 99, unit_price: 110.00 },
      { min_qty: 100, max_qty: 499, unit_price: 95.00 }
    ],
    specifications: {
      dimensions: '52cm (W) x 28cm (H) x 26cm (D)',
      weight: '1.70 kg',
      hardware: 'Solid Sand-Cast Brass Fittings',
      lining: 'Heavy-Duty 14 oz Duck Canvas'
    },
    customization_options: {
      colors: ['Chocolate Brown', 'Saddle Tan', 'Oxblood Burgundy'],
      logo_branding: true,
      custom_packaging: true
    },
    images: ['#6B5A4E', '#A9683B', '#4A1420'], // Taupe, Cognac, Oxblood
    lead_time_days: 45,
    is_featured: true,
    created_at: '2026-03-18T08:00:00Z'
  },
  {
    id: 'classic-portfolio',
    category_id: 'corporate',
    serial: 'ZC-006',
    name: 'Classic A4 Leather Portfolio',
    slug: 'classic-a4-leather-portfolio',
    description: 'Perfect for executive gifting and high-level corporate distributions. Features a standard A4 notepad slot, leather pen loop, integrated business card pockets, and a tablet pocket.',
    material: 'Premium Nappa Leather',
    moq: 100,
    price_tiers: [
      { min_qty: 100, max_qty: 249, unit_price: 32.00 },
      { min_qty: 250, max_qty: 499, unit_price: 28.00 },
      { min_qty: 500, max_qty: 1999, unit_price: 24.00 }
    ],
    specifications: {
      dimensions: '34cm (W) x 25cm (H) x 3cm (D)',
      weight: '0.45 kg',
      hardware: 'Polished Brass Snap Button closure',
      lining: 'Bonded Nappa Backing'
    },
    customization_options: {
      colors: ['Charcoal Noir', 'Cognac Tan', 'Classic Navy'],
      logo_branding: true,
      custom_packaging: true
    },
    images: ['#241812', '#A9683B', '#2E0D14'], // Charcoal, Cognac, Primary Dark
    lead_time_days: 25,
    is_featured: false,
    created_at: '2026-04-02T08:00:00Z'
  }
];
