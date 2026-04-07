/**
 * seed-categories.mjs
 * -------------------
 * Populates the Sanity CMS with every category / subcategory from
 * https://www.lubecontrol.com.au/ **and** creates matching Category Pages
 * so the Next.js front-end can resolve them.
 *
 * Usage:
 *   node scripts/seed-categories.mjs
 *
 * Requires SANITY_API_WRITE_TOKEN in a .env or .env.local file
 * (the token already lives in the Next.js project's .env.local).
 */

import { createClient } from '@sanity/client';

// ──────────────────────────────────────────────
// 1. Sanity Client
// ──────────────────────────────────────────────
const client = createClient({
  projectId: '92q6lqnu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN ||
    'skA95sOvTsJjmA8dfhAOujJgXduZDH0QoSaJ6RYB0l3o89PkS1CTKYB1ruDef3H3bXyfJTQVWNMYY5HmNvG2ilMBOFBWR4joaP2XZfpcEeDC13nOhUbG1GVIfZJB3ytPvMlUNZpLA4yS4s42ekfC1u45qGu2R82nvtkwjpIscsbJJOv0k8LP',
  useCdn: false,
});

// ──────────────────────────────────────────────
// 2. Deterministic ID helpers
// ──────────────────────────────────────────────
const catId   = (path) => `cat-${path.replace(/^\//, '').replace(/\//g, '-')}`;
const pageId  = (path) => `page-${path.replace(/^\//, '').replace(/\//g, '-')}`;
const pdfId   = (key)  => `pdf-${key}`;

// ──────────────────────────────────────────────
// 3. Full category tree (matches lubecontrol.com.au exactly)
// ──────────────────────────────────────────────
const categories = [
  // ═══════════════════════════════════════════
  // FLUID HANDLING
  // ═══════════════════════════════════════════
  {
    title: 'Fluid Handling',
    slug: 'fluid-handling',
    path: '/fluid-handling',
    parent: null,
    description: 'Complete range of fluid handling equipment including oil, grease, fuel and waste oil transfer solutions for industrial and automotive applications.',
    seoTitle: 'Fluid Handling Equipment | Oil, Grease & Fuel | Lube Control',
    seoDescription: 'Browse our comprehensive range of fluid handling equipment. Oil pumps, grease transfer systems, fuel dispensing and waste oil solutions from leading Australian brands.',
  },
  // --- Oil Handling Equipment ---
  {
    title: 'Oil Handling Equipment',
    slug: 'oil-handling-equipment',
    path: '/fluid-handling/oil-handling-equipment',
    parent: '/fluid-handling',
    description: 'Professional oil handling equipment for workshop, industrial and mobile applications. From manual pumps to fully pneumatic systems.',
    seoTitle: 'Oil Handling Equipment | Pumps, Reels & Kits | Lube Control',
    seoDescription: 'Shop oil handling equipment including oil guns, manual & electric pumps, pneumatic pump kits and oil hose reels for professional lubrication applications.',
  },
  {
    title: 'Oil Guns and Oil Jug',
    slug: 'oil-guns-and-oil-jug',
    path: '/fluid-handling/oil-handling-equipment/oil-guns-and-oil-jug',
    parent: '/fluid-handling/oil-handling-equipment',
    description: 'Precision oil guns and graduated oil jugs for controlled dispensing in workshop and maintenance environments.',
    seoTitle: 'Oil Guns & Oil Jugs | Precision Dispensing | Lube Control',
    seoDescription: 'High-quality oil guns and oil jugs for precise, mess-free oil dispensing. Ideal for automotive workshops and industrial maintenance.',
  },
  {
    title: 'Manual Oil Pumps',
    slug: 'oil-pumps-manual',
    path: '/fluid-handling/oil-handling-equipment/oil-pumps-manual',
    parent: '/fluid-handling/oil-handling-equipment',
    description: 'Hand-operated oil pumps for transferring oils from drums and containers. Reliable, cost-effective solutions for low-volume applications.',
    seoTitle: 'Manual Oil Pumps | Hand Operated | Lube Control',
    seoDescription: 'Browse manual oil pumps for transferring lubricants from drums and containers. Durable hand-operated pumps for workshop and field use.',
  },
  {
    title: 'Electric Oil Pumps & Kits',
    slug: 'oil-drum-pumps',
    path: '/fluid-handling/oil-handling-equipment/oil-drum-pumps',
    parent: '/fluid-handling/oil-handling-equipment',
    description: 'Electric oil pumps and complete kits for efficient, high-volume oil transfer from drums, IBCs and bulk tanks.',
    seoTitle: 'Electric Oil Pumps & Kits | Drum Pumps | Lube Control',
    seoDescription: 'Electric oil drum pumps and complete transfer kits. 12V, 24V and 240V options for efficient oil dispensing from drums and bulk containers.',
  },
  {
    title: 'Pneumatic Pumps & Kits',
    slug: 'air-operated-pumps',
    path: '/fluid-handling/oil-handling-equipment/air-operated-pumps',
    parent: '/fluid-handling/oil-handling-equipment',
    description: 'Air-operated oil pumps and kits for heavy-duty oil transfer applications. Suitable for drums, IBCs and bulk containers.',
    seoTitle: 'Pneumatic Oil Pumps & Kits | Air Operated | Lube Control',
    seoDescription: 'Air operated oil pumps and kits for 20L, 205L drums and IBC containers. Heavy-duty pneumatic pumps for professional lubrication.',
  },
  {
    title: '20L Oil Drum Pumps',
    slug: 'oil-drum-pumps-air',
    path: '/fluid-handling/oil-handling-equipment/air-operated-pumps/oil-drum-pumps-air',
    parent: '/fluid-handling/oil-handling-equipment/air-operated-pumps',
    description: 'Air operated pumps designed specifically for 20-litre oil drums. Compact and portable for workshop use.',
    seoTitle: '20L Oil Drum Pumps | Air Operated | Lube Control',
    seoDescription: 'Air operated oil pumps designed for 20L drums. Compact, portable pneumatic pumps for small-volume oil transfer.',
  },
  {
    title: '205L Oil Pumps',
    slug: '205l-oil-pumps-air',
    path: '/fluid-handling/oil-handling-equipment/air-operated-pumps/205l-oil-pumps-air',
    parent: '/fluid-handling/oil-handling-equipment/air-operated-pumps',
    description: 'Air operated pumps for 205-litre (44-gallon) oil drums. Industrial-grade pumps for standard drum sizes.',
    seoTitle: '205L Oil Drum Pumps | Air Operated | Lube Control',
    seoDescription: 'Air operated oil pumps for 205L drums. Heavy-duty pneumatic pumps for standard 44-gallon drum oil transfer.',
  },
  {
    title: 'Stub Oil Pumps',
    slug: 'stub-oil-pumps-air',
    path: '/fluid-handling/oil-handling-equipment/air-operated-pumps/stub-oil-pumps-air',
    parent: '/fluid-handling/oil-handling-equipment/air-operated-pumps',
    description: 'Stub-style air operated oil pumps for wall or post mounting. Space-saving design for permanent installations.',
    seoTitle: 'Stub Oil Pumps | Air Operated | Lube Control',
    seoDescription: 'Stub-style pneumatic oil pumps for permanent installation. Wall and post mount options for workshop lubrication setups.',
  },
  {
    title: 'Heavy Duty Oil Drum Pumps',
    slug: 'heavy-duty-oil-drum-pumps-air',
    path: '/fluid-handling/oil-handling-equipment/air-operated-pumps/heavy-duty-oil-drum-pumps-air',
    parent: '/fluid-handling/oil-handling-equipment/air-operated-pumps',
    description: 'Heavy-duty air operated oil drum pumps for high-viscosity oils and demanding industrial environments.',
    seoTitle: 'Heavy Duty Oil Drum Pumps | Air Operated | Lube Control',
    seoDescription: 'Heavy-duty pneumatic oil drum pumps for thick oils and industrial applications. Built for continuous, high-demand operation.',
  },
  {
    title: 'Air Operated Oil Transfer Kits',
    slug: 'air-operated-oil-transfer-pumps',
    path: '/fluid-handling/oil-handling-equipment/air-operated-pumps/air-operated-oil-transfer-pumps',
    parent: '/fluid-handling/oil-handling-equipment/air-operated-pumps',
    description: 'Complete air operated oil transfer kits including pump, hose, meter and nozzle for ready-to-use installations.',
    seoTitle: 'Air Operated Oil Transfer Kits | Lube Control',
    seoDescription: 'Complete pneumatic oil transfer kits with pump, hose, meter and nozzle. Ready-to-install solutions for oil dispensing.',
  },
  {
    title: 'Air Operated 1000L/IBC/Pallecon Kits',
    slug: 'air-operated-ibcpallecon-kits',
    path: '/fluid-handling/oil-handling-equipment/air-operated-pumps/air-operated-ibcpallecon-kits',
    parent: '/fluid-handling/oil-handling-equipment/air-operated-pumps',
    description: 'Air operated pump kits for 1000L IBC and Pallecon containers. Complete systems for bulk oil transfer.',
    seoTitle: 'IBC & Pallecon Oil Pump Kits | Air Operated | Lube Control',
    seoDescription: 'Air operated oil pump kits for 1000L IBC and Pallecon containers. Complete bulk oil transfer solutions.',
  },
  {
    title: 'Oil Hose Reels',
    slug: 'oil-hose-reels',
    path: '/fluid-handling/oil-handling-equipment/oil-hose-reels',
    parent: '/fluid-handling/oil-handling-equipment',
    description: 'Retractable and fixed oil hose reels for clean, organized workshop setups. Spring-rewind and open-style options available.',
    seoTitle: 'Oil Hose Reels | Retractable & Fixed | Lube Control',
    seoDescription: 'Oil hose reels for workshop organisation. Retractable spring-rewind and open-style reels for oil dispensing systems.',
  },

  // --- Grease Transfer Equipment ---
  {
    title: 'Grease Transfer Equipment',
    slug: 'grease-transfer-equipment',
    path: '/fluid-handling/grease-transfer-equipment',
    parent: '/fluid-handling',
    description: 'Complete grease transfer and dispensing equipment. From hand-operated grease guns to bulk grease pumping systems.',
    seoTitle: 'Grease Transfer Equipment | Pumps, Guns & Kits | Lube Control',
    seoDescription: 'Professional grease transfer equipment including grease guns, pumps, hose reels, meters and bulk greasing solutions.',
  },
  {
    title: '2.5kg Grease Kits',
    slug: '2-5kg-grease-kits',
    path: '/fluid-handling/grease-transfer-equipment/2-5kg-grease-kits',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: 'Portable 2.5kg grease kits for field maintenance and mobile greasing applications.',
    seoTitle: '2.5kg Grease Kits | Portable Greasing | Lube Control',
    seoDescription: 'Portable 2.5kg grease kits for field service and mobile maintenance. Compact greasing solutions.',
  },
  {
    title: '400g and 450g Grease Guns',
    slug: 'grease-guns',
    path: '/fluid-handling/grease-transfer-equipment/grease-guns',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: 'Professional 400g and 450g grease guns for precision greasing. Lever, pistol grip and air-operated models.',
    seoTitle: '400g & 450g Grease Guns | Professional Grade | Lube Control',
    seoDescription: 'Professional grease guns in 400g and 450g cartridge sizes. Lever, pistol grip and pneumatic models for all maintenance needs.',
  },
  {
    title: 'Grease Hose Reels',
    slug: 'grease-hose-reels',
    path: '/fluid-handling/grease-transfer-equipment/grease-hose-reels',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: 'High-pressure grease hose reels for organised workshop greasing setups. Spring-rewind and manual rewind options.',
    seoTitle: 'Grease Hose Reels | High Pressure | Lube Control',
    seoDescription: 'High-pressure grease hose reels for workshop greasing systems. Spring-rewind and manual options for clean, organised setups.',
  },
  {
    title: 'Grease Control Valves',
    slug: 'grease-control-valves',
    path: '/fluid-handling/grease-transfer-equipment/grease-control-valves',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: 'Grease control valves and dispensing handles for measured grease application. Prevents over-greasing and reduces waste.',
    seoTitle: 'Grease Control Valves | Dispensing Handles | Lube Control',
    seoDescription: 'Grease control valves for measured dispensing. Precision handles to prevent over-greasing and reduce lubricant waste.',
  },
  {
    title: '20kg Greasing Kits',
    slug: '20kg-greasing-kits',
    path: '/fluid-handling/grease-transfer-equipment/20kg-greasing-kits',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: 'Complete 20kg grease pump kits for medium-volume greasing. Includes pump, hose and dispensing handle.',
    seoTitle: '20kg Greasing Kits | Complete Systems | Lube Control',
    seoDescription: '20kg grease pump kits with pump, hose and control valve. Ready-to-use greasing solutions for workshops.',
  },
  {
    title: '180Kg Grease Pumps & Kits',
    slug: '180kg-grease-kits-2',
    path: '/fluid-handling/grease-transfer-equipment/180kg-grease-kits-2',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: '180kg drum grease pumps and complete kits for high-volume industrial greasing applications.',
    seoTitle: '180kg Grease Pumps & Kits | Industrial Grade | Lube Control',
    seoDescription: '180kg drum grease pumps and complete kits. Heavy-duty greasing solutions for industrial and mining operations.',
  },
  {
    title: 'Bulk Grease Vessels',
    slug: 'bulk-grease-vessels',
    path: '/fluid-handling/grease-transfer-equipment/bulk-grease-vessels',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: 'Bulk grease storage vessels and pressure pots for centralised greasing systems.',
    seoTitle: 'Bulk Grease Vessels | Storage & Pressure Pots | Lube Control',
    seoDescription: 'Bulk grease storage vessels and pressure pots for centralised greasing systems in industrial facilities.',
  },
  {
    title: 'Grease Meters',
    slug: 'grease-meters',
    path: '/fluid-handling/grease-transfer-equipment/grease-meters',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: 'Grease flow meters for accurate measurement and monitoring of grease consumption.',
    seoTitle: 'Grease Meters | Flow Measurement | Lube Control',
    seoDescription: 'Grease meters for accurate flow measurement. Monitor and control grease consumption in maintenance operations.',
  },
  {
    title: 'Manual Grease Monitoring – Lube Right',
    slug: 'manual-grease-monitoring-lube-right',
    path: '/fluid-handling/grease-transfer-equipment/manual-grease-monitoring-lube-right',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: 'Lube Right manual grease monitoring systems. Track and verify greasing tasks with visual confirmation markers.',
    seoTitle: 'Lube Right Manual Grease Monitoring | Lube Control',
    seoDescription: 'Lube Right grease monitoring systems for visual verification of greasing tasks. Ensure all lube points are serviced correctly.',
  },
  {
    title: 'Electric Grease Pump 16kg 20kg 55kg and 180kg',
    slug: 'electric-grease-pump-16kg-20kg-55kg-and-180kg',
    path: '/fluid-handling/grease-transfer-equipment/electric-grease-pump-16kg-20kg-55kg-and-180kg',
    parent: '/fluid-handling/grease-transfer-equipment',
    description: 'Electric grease pumps available in 16kg, 20kg, 55kg and 180kg configurations for battery or mains-powered greasing.',
    seoTitle: 'Electric Grease Pumps | 16kg to 180kg | Lube Control',
    seoDescription: 'Electric grease pumps from 16kg to 180kg capacity. Battery and mains-powered options for efficient greasing.',
  },

  // --- Fuel Handling Equipment ---
  {
    title: 'Fuel Handling Equipment',
    slug: 'fuel-handling-equipment',
    path: '/fluid-handling/fuel-handling-equipment',
    parent: '/fluid-handling',
    description: 'Comprehensive fuel handling equipment for diesel, petrol and other fuels. Pumps, nozzles, meters and complete dispensing systems.',
    seoTitle: 'Fuel Handling Equipment | Pumps, Nozzles & Meters | Lube Control',
    seoDescription: 'Fuel handling equipment including pumps, nozzles, meters, hose reels and complete fuel dispensing systems for all fuel types.',
  },
  {
    title: 'Fuel Nozzles',
    slug: 'fuel-nozzles',
    path: '/fluid-handling/fuel-handling-equipment/fuel-nozzles',
    parent: '/fluid-handling/fuel-handling-equipment',
    description: 'Automatic and manual fuel nozzles for diesel and petrol dispensing. Auto shut-off and high-flow models available.',
    seoTitle: 'Fuel Nozzles | Auto & Manual | Lube Control',
    seoDescription: 'Fuel dispensing nozzles for diesel and petrol. Automatic shut-off, manual and high-flow nozzle options.',
  },
  {
    title: 'Fuel Hose Reels',
    slug: 'fuel-hose-reels',
    path: '/fluid-handling/fuel-handling-equipment/fuel-hose-reels',
    parent: '/fluid-handling/fuel-handling-equipment',
    description: 'Fuel-rated hose reels for diesel and petrol dispensing installations. Spring-rewind retractable and open-style models.',
    seoTitle: 'Fuel Hose Reels | Diesel & Petrol | Lube Control',
    seoDescription: 'Fuel-rated hose reels for diesel and petrol dispensing. Retractable spring-rewind and open-style models.',
  },
  {
    title: 'Fuel Meters',
    slug: 'fuel-meters',
    path: '/fluid-handling/fuel-handling-equipment/fuel-meters',
    parent: '/fluid-handling/fuel-handling-equipment',
    description: 'Mechanical and digital fuel flow meters for accurate fuel consumption tracking and inventory management.',
    seoTitle: 'Fuel Meters | Digital & Mechanical | Lube Control',
    seoDescription: 'Fuel flow meters for accurate measurement and tracking. Digital and mechanical options for fuel management.',
  },
  {
    title: 'Fuel Management Systems',
    slug: 'fuel-management-systems',
    path: '/fluid-handling/fuel-handling-equipment/fuel-management-systems',
    parent: '/fluid-handling/fuel-handling-equipment',
    description: 'Electronic fuel management systems for controlling access, tracking usage and managing fuel inventory across fleets.',
    seoTitle: 'Fuel Management Systems | Fleet Tracking | Lube Control',
    seoDescription: 'Electronic fuel management systems for fleet fuel tracking, access control and inventory management.',
  },
  {
    title: 'Fuel Accessories',
    slug: 'fuel-accessories',
    path: '/fluid-handling/fuel-handling-equipment/fuel-accessories',
    parent: '/fluid-handling/fuel-handling-equipment',
    description: 'Fuel dispensing accessories including filters, swivels, breakaway couplings, check valves and fittings.',
    seoTitle: 'Fuel Accessories | Filters, Fittings & More | Lube Control',
    seoDescription: 'Fuel dispensing accessories including filters, swivels, breakaway couplings, check valves and fittings.',
  },
  {
    title: 'Fuel Storage and Dispensing Kits',
    slug: 'fuel-storage',
    path: '/fluid-handling/fuel-handling-equipment/fuel-storage',
    parent: '/fluid-handling/fuel-handling-equipment',
    description: 'Fuel storage tanks and complete dispensing kits for on-site fuel management. Self-bunded and portable options.',
    seoTitle: 'Fuel Storage & Dispensing Kits | Lube Control',
    seoDescription: 'Fuel storage tanks and dispensing kits. Self-bunded and portable fuel storage solutions for on-site refuelling.',
  },
  {
    title: 'Fuel Pumps',
    slug: 'fuel-pumps',
    path: '/fluid-handling/fuel-handling-equipment/fuel-pumps',
    parent: '/fluid-handling/fuel-handling-equipment',
    description: 'Fuel transfer pumps in manual, electric and air-operated configurations for diesel, petrol and other fuels.',
    seoTitle: 'Fuel Pumps | Electric, Manual & Air Operated | Lube Control',
    seoDescription: 'Fuel transfer pumps for all applications. Manual, electric and pneumatic fuel pumps for diesel and petrol.',
  },
  {
    title: 'Fuel Pumps – Air Operated',
    slug: 'fuel-transfer-pumps-refuelling-kits',
    path: '/fluid-handling/fuel-handling-equipment/fuel-pumps/fuel-transfer-pumps-refuelling-kits',
    parent: '/fluid-handling/fuel-handling-equipment/fuel-pumps',
    description: 'Air operated fuel transfer pumps and refuelling kits for diesel and other fuel types.',
    seoTitle: 'Air Operated Fuel Pumps & Refuelling Kits | Lube Control',
    seoDescription: 'Air operated fuel transfer pumps and complete refuelling kits for diesel and fuel applications.',
  },
  {
    title: 'Fuel Pumps – Manual',
    slug: 'manual-fuel-pumps',
    path: '/fluid-handling/fuel-handling-equipment/fuel-pumps/manual-fuel-pumps',
    parent: '/fluid-handling/fuel-handling-equipment/fuel-pumps',
    description: 'Manual hand-operated fuel pumps for transferring diesel and other fuels from drums and tanks.',
    seoTitle: 'Manual Fuel Pumps | Hand Operated | Lube Control',
    seoDescription: 'Manual hand-operated fuel pumps for diesel and fuel transfer from drums and tanks.',
  },
  {
    title: 'Fuel Pumps – Electric',
    slug: 'fuel-pumps-electric',
    path: '/fluid-handling/fuel-handling-equipment/fuel-pumps/fuel-pumps-electric',
    parent: '/fluid-handling/fuel-handling-equipment/fuel-pumps',
    description: 'Electric fuel transfer pumps in 12V, 24V and 240V configurations for high-flow fuel dispensing.',
    seoTitle: 'Electric Fuel Pumps | 12V, 24V & 240V | Lube Control',
    seoDescription: 'Electric fuel pumps for diesel and fuel transfer. 12V, 24V and 240V options for various applications.',
  },
  {
    title: 'Mobile And Stationary Fuel Dispensers',
    slug: 'mobile-and-stationary-fuel-dispensers',
    path: '/fluid-handling/fuel-handling-equipment/mobile-and-stationary-fuel-dispensers',
    parent: '/fluid-handling/fuel-handling-equipment',
    description: 'Mobile and fixed fuel dispensing units for on-site refuelling. Bowser-style and cabinet dispensers.',
    seoTitle: 'Mobile & Stationary Fuel Dispensers | Lube Control',
    seoDescription: 'Mobile and stationary fuel dispensers for on-site refuelling operations. Bowser and cabinet-style units.',
  },

  // --- Waste Oil ---
  {
    title: 'Waste Oil',
    slug: 'waste-oil',
    path: '/fluid-handling/waste-oil',
    parent: '/fluid-handling',
    description: 'Waste oil collection and handling equipment. Drains, evacuators and storage solutions for used oil management.',
    seoTitle: 'Waste Oil Equipment | Collection & Storage | Lube Control',
    seoDescription: 'Waste oil collection and handling equipment. Oil drains, evacuators and storage tanks for proper used oil management.',
  },

  // ═══════════════════════════════════════════
  // LUBRICANTS
  // ═══════════════════════════════════════════
  {
    title: 'Lubricants',
    slug: 'lubricants',
    path: '/lubricants',
    parent: null,
    description: 'Premium lubricants from Australia\'s leading brands. Engine oils, gear oils, hydraulic fluids, greases and specialty products.',
    seoTitle: 'Lubricants | Premium Oils & Greases | Lube Control',
    seoDescription: 'Premium lubricants from leading brands including Castrol, Anglomoil, Inox and more. Engine oils, greases, hydraulic fluids.',
  },
  {
    title: 'Anglomoil Lubricants',
    slug: 'anglomoil',
    path: '/lubricants/anglomoil',
    parent: '/lubricants',
    description: 'Anglomoil lubricant products — Australian-made engine oils, gear oils, hydraulic fluids and specialty lubricants.',
    seoTitle: 'Anglomoil Lubricants | Australian Made Oils | Lube Control',
    seoDescription: 'Anglomoil lubricants — Australian-made engine oils, gear oils, hydraulic fluids and specialty lubricants for all applications.',
  },
  {
    title: 'Blaster Products',
    slug: 'blaster-products',
    path: '/lubricants/blaster-products',
    parent: '/lubricants',
    description: 'B\'laster penetrating oils, lubricants and specialty chemical products for maintenance and repair.',
    seoTitle: 'Blaster Products | Penetrating Oils & Lubricants | Lube Control',
    seoDescription: 'B\'laster penetrating oils, lubricants and specialty chemical products for maintenance and industrial applications.',
  },
  {
    title: 'Castrol Performance Lubricants',
    slug: 'castrol-performance-lubricants',
    path: '/lubricants/castrol-performance-lubricants',
    parent: '/lubricants',
    description: 'Castrol performance lubricant range including engine oils, transmission fluids, gear oils and industrial lubricants.',
    seoTitle: 'Castrol Performance Lubricants | Lube Control',
    seoDescription: 'Castrol performance lubricants — engine oils, transmission fluids, gear oils and industrial lubricants from a trusted global brand.',
  },
  {
    title: 'Imperial Oils & Chemicals',
    slug: 'imperial-oils-chemicals',
    path: '/lubricants/imperial-oils-chemicals',
    parent: '/lubricants',
    description: 'Imperial Oils & Chemicals — industrial and commercial lubricant products for diverse applications.',
    seoTitle: 'Imperial Oils & Chemicals | Industrial Lubricants | Lube Control',
    seoDescription: 'Imperial Oils & Chemicals lubricant range for industrial, commercial and automotive applications.',
  },
  {
    title: 'Inox Lubricants',
    slug: 'inox-lubricants',
    path: '/lubricants/inox-lubricants',
    parent: '/lubricants',
    description: 'Inox lubricants — high-performance Australian lubricant brand. MX3, MX5, MX8 and specialty products.',
    seoTitle: 'Inox Lubricants | MX3, MX5 & More | Lube Control',
    seoDescription: 'Inox lubricants — Australian-made high-performance lubricants including MX3, MX5, MX8 and specialty products.',
  },
  {
    title: 'Lubrication Engineers',
    slug: 'lubrication-engineers',
    path: '/lubricants/lubrication-engineers',
    parent: '/lubricants',
    description: 'Lubrication Engineers (LE) — premium synthetic and conventional lubricants engineered for extreme conditions.',
    seoTitle: 'Lubrication Engineers (LE) | Premium Lubricants | Lube Control',
    seoDescription: 'Lubrication Engineers (LE) premium lubricants — synthetic and conventional oils and greases for extreme operating conditions.',
  },

  // ═══════════════════════════════════════════
  // LUBE SERVICES
  // ═══════════════════════════════════════════
  {
    title: 'Lube Services',
    slug: 'services',
    path: '/services',
    parent: null,
    description: 'Professional lubrication services including system design, installation, commissioning and ongoing maintenance support.',
    seoTitle: 'Lube Services | Installation & Maintenance | Lube Control',
    seoDescription: 'Professional lubrication services — system design, equipment installation, commissioning and ongoing maintenance support.',
  },

  // ═══════════════════════════════════════════
  // AUTO LUBE SYSTEMS
  // ═══════════════════════════════════════════
  {
    title: 'Auto Lube Systems',
    slug: 'auto-lube-systems',
    path: '/auto-lube-systems',
    parent: null,
    description: 'Automatic lubrication systems for continuous, reliable greasing of bearings, chains and machinery components.',
    seoTitle: 'Auto Lube Systems | Automatic Lubrication | Lube Control',
    seoDescription: 'Automatic lubrication systems including single-point, multi-point and centralised auto lube solutions from leading brands.',
  },
  {
    title: 'Simalube',
    slug: 'simalube',
    path: '/auto-lube-systems/simalube',
    parent: '/auto-lube-systems',
    description: 'Simalube single-point automatic lubricators. Swiss-made, maintenance-free lubrication for bearings and machinery.',
    seoTitle: 'Simalube Automatic Lubricators | Single Point | Lube Control',
    seoDescription: 'Simalube single-point automatic lubricators — Swiss-made, maintenance-free solutions for continuous bearing lubrication.',
  },
  {
    title: 'Pulsarlube',
    slug: '2225-2',
    path: '/auto-lube-systems/2225-2',
    parent: '/auto-lube-systems',
    description: 'Pulsarlube automatic lubricators — electro-mechanical single-point lubricators for precise grease dispensing.',
    seoTitle: 'Pulsarlube Automatic Lubricators | Lube Control',
    seoDescription: 'Pulsarlube electro-mechanical automatic lubricators for precise, controlled grease dispensing at each lube point.',
  },
  {
    title: 'Grease Metering and Grease Monitoring',
    slug: '2486-2',
    path: '/auto-lube-systems/2486-2',
    parent: '/auto-lube-systems',
    description: 'Grease metering valves and monitoring systems for precise measurement and verification of grease delivery.',
    seoTitle: 'Grease Metering & Monitoring Systems | Lube Control',
    seoDescription: 'Grease metering valves and monitoring systems for precise measurement and verification of grease delivery to each point.',
  },
  {
    title: 'Grease Bomb 120 Single Point Lubricator',
    slug: 'grease-bomb-120-single-point-lubricator',
    path: '/auto-lube-systems/grease-bomb-120-single-point-lubricator',
    parent: '/auto-lube-systems',
    description: 'Grease Bomb 120 — gas-powered single-point automatic lubricator for reliable, continuous greasing.',
    seoTitle: 'Grease Bomb 120 | Single Point Lubricator | Lube Control',
    seoDescription: 'Grease Bomb 120 gas-powered single-point automatic lubricator for reliable, maintenance-free greasing.',
  },
  {
    title: 'Perma Lube',
    slug: 'perma-lube',
    path: '/auto-lube-systems/perma-lube',
    parent: '/auto-lube-systems',
    description: 'Perma Lube automatic lubrication systems — German-engineered single-point and multi-point lubricators.',
    seoTitle: 'Perma Lube | Automatic Lubrication Systems | Lube Control',
    seoDescription: 'Perma Lube automatic lubrication — German-engineered single and multi-point lubricators for all industries.',
  },
  {
    title: 'Memolub HPS Lubricator',
    slug: 'memolub-lubricator',
    path: '/auto-lube-systems/memolub-lubricator',
    parent: '/auto-lube-systems',
    description: 'Memolub HPS electro-mechanical single-point lubricator. Programmable, reusable and reliable auto lubrication.',
    seoTitle: 'Memolub HPS Lubricator | Programmable | Lube Control',
    seoDescription: 'Memolub HPS electro-mechanical lubricator — programmable, reusable single-point automatic lubrication system.',
  },
  {
    title: 'Purgex Lube Systems',
    slug: 'oil-rite-lube-systems',
    path: '/auto-lube-systems/oil-rite-lube-systems',
    parent: '/auto-lube-systems',
    description: 'Purgex automated lubrication systems for continuous oil and grease dispensing in industrial machinery.',
    seoTitle: 'Purgex Lube Systems | Automated Lubrication | Lube Control',
    seoDescription: 'Purgex automated lubrication systems for continuous oil and grease dispensing in industrial applications.',
  },
  {
    title: 'Oil Rite Lubrication Systems',
    slug: 'oil-rite-lubrication-systems',
    path: '/auto-lube-systems/oil-rite-lubrication-systems',
    parent: '/auto-lube-systems',
    description: 'Oil Rite lubrication systems — precision oil metering and dispensing for machinery and equipment.',
    seoTitle: 'Oil Rite Lubrication Systems | Lube Control',
    seoDescription: 'Oil Rite precision lubrication systems for accurate oil metering and dispensing in machinery applications.',
  },
  {
    title: 'ILC Auto Lubrication Systems',
    slug: 'ilc-autolubrication-systems',
    path: '/auto-lube-systems/ilc-autolubrication-systems',
    parent: '/auto-lube-systems',
    description: 'ILC automatic lubrication systems — centralised auto lube solutions for heavy equipment and industrial machinery.',
    seoTitle: 'ILC Auto Lubrication Systems | Centralised | Lube Control',
    seoDescription: 'ILC centralised automatic lubrication systems for heavy equipment, mining, construction and industrial machinery.',
  },
  {
    title: 'Multi Line and Rotary Lube Pumps',
    slug: 'multi-line-and-rotary-lube-pumps',
    path: '/auto-lube-systems/multi-line-and-rotary-lube-pumps',
    parent: '/auto-lube-systems',
    description: 'Multi-line and rotary lube pumps for centralised lubrication systems serving multiple grease points simultaneously.',
    seoTitle: 'Multi Line & Rotary Lube Pumps | Lube Control',
    seoDescription: 'Multi-line and rotary lube pumps for centralised lubrication systems. Serve multiple grease points simultaneously.',
  },

  // ═══════════════════════════════════════════
  // MORE LUBRICATION
  // ═══════════════════════════════════════════
  {
    title: 'More Lubrication',
    slug: 'more-lubrication',
    path: '/more-lubrication',
    parent: null,
    description: 'Additional lubrication products and accessories including storage, sampling, breathers, oilers, spill containment and filtration.',
    seoTitle: 'More Lubrication Products | Accessories & Storage | Lube Control',
    seoDescription: 'Additional lubrication products — oil storage, sampling, breathers, level gauges, oilers, spill containment and filter carts.',
  },
  {
    title: 'Lubrication Storage',
    slug: 'lubrication-storage',
    path: '/more-lubrication/lubrication-storage',
    parent: '/more-lubrication',
    description: 'Lubricant storage solutions including colour-coded containers, stackable tanks and drum storage systems.',
    seoTitle: 'Lubrication Storage | Containers & Tanks | Lube Control',
    seoDescription: 'Lubricant storage solutions — colour-coded containers, stackable tanks and drum storage for organised oil management.',
  },
  {
    title: 'Oil Sampling',
    slug: 'oil-sampling',
    path: '/more-lubrication/oil-sampling',
    parent: '/more-lubrication',
    description: 'Oil sampling equipment and kits for predictive maintenance. Vacuum pumps, sample bottles and accessories.',
    seoTitle: 'Oil Sampling Equipment | Predictive Maintenance | Lube Control',
    seoDescription: 'Oil sampling equipment for predictive maintenance — vacuum pumps, sample bottles and fluid analysis accessories.',
  },
  {
    title: 'Remote Grease Lines and Fittings',
    slug: 'remote-greasing-equipment',
    path: '/more-lubrication/remote-greasing-equipment',
    parent: '/more-lubrication',
    description: 'Remote grease lines, fittings and accessories for extending grease points to accessible locations. Reduces downtime and improves safety.',
    seoTitle: 'Remote Grease Lines & Fittings | Lube Control',
    seoDescription: 'Remote grease lines and fittings to extend lube points to accessible locations. Improve safety and reduce downtime.',
  },
  {
    title: 'Breathers',
    slug: 'breathers',
    path: '/more-lubrication/breathers',
    parent: '/more-lubrication',
    description: 'Desiccant breathers and air filters for gearboxes, hydraulic tanks and oil reservoirs. Prevents moisture and particle contamination.',
    seoTitle: 'Breathers | Desiccant & Air Filters | Lube Control',
    seoDescription: 'Desiccant breathers and filters for gearboxes and hydraulic tanks. Prevent moisture and particle contamination of oils.',
  },
  {
    title: 'Liquid Level Gauges',
    slug: 'liquid-level-gauges',
    path: '/more-lubrication/liquid-level-gauges',
    parent: '/more-lubrication',
    description: 'Visual liquid level gauges for monitoring oil and fluid levels in tanks, reservoirs and gearboxes.',
    seoTitle: 'Liquid Level Gauges | Oil Level Indicators | Lube Control',
    seoDescription: 'Liquid level gauges for visual monitoring of oil and fluid levels in tanks, reservoirs and gearboxes.',
  },
  {
    title: 'Vent Plugs',
    slug: 'vent-plugs',
    path: '/more-lubrication/vent-plugs',
    parent: '/more-lubrication',
    description: 'Vent plugs for equalising pressure in gearboxes and oil-filled housings while filtering incoming air.',
    seoTitle: 'Vent Plugs | Pressure Relief | Lube Control',
    seoDescription: 'Vent plugs for pressure equalisation in gearboxes and oil-filled housings. Filtered air intake prevents contamination.',
  },
  {
    title: 'Constant Level Oilers',
    slug: 'constant-level-oilers',
    path: '/more-lubrication/constant-level-oilers',
    parent: '/more-lubrication',
    description: 'Constant level oilers for maintaining consistent oil levels in bearings, pumps and rotating equipment.',
    seoTitle: 'Constant Level Oilers | Bearing Lubrication | Lube Control',
    seoDescription: 'Constant level oilers for maintaining consistent oil levels in bearings, pumps and rotating equipment.',
  },
  {
    title: 'Oil Spill Containment',
    slug: 'oil-spill-containment',
    path: '/more-lubrication/oil-spill-containment',
    parent: '/more-lubrication',
    description: 'Oil spill containment products including bunding, absorbents, drip trays and spill kits for environmental compliance.',
    seoTitle: 'Oil Spill Containment | Bunding & Absorbents | Lube Control',
    seoDescription: 'Oil spill containment products — bunding, absorbents, drip trays and spill kits for environmental compliance.',
  },
  {
    title: 'Vibration Greasing Device',
    slug: 'vibration-greasing-device',
    path: '/more-lubrication/vibration-greasing-device',
    parent: '/more-lubrication',
    description: 'Vibration-powered greasing devices for automatic lubrication of bearings in vibrating equipment and machinery.',
    seoTitle: 'Vibration Greasing Device | Auto Lube | Lube Control',
    seoDescription: 'Vibration-powered automatic greasing devices for bearings in vibrating equipment. No power source required.',
  },
  {
    title: 'Filter Carts',
    slug: 'filter-carts',
    path: '/more-lubrication/filter-carts',
    parent: '/more-lubrication',
    description: 'Portable filter carts for offline oil filtration and kidney-loop filtering. Extend oil life and reduce contamination.',
    seoTitle: 'Filter Carts | Portable Oil Filtration | Lube Control',
    seoDescription: 'Portable filter carts for offline oil filtration. Kidney-loop filtering to extend oil life and reduce contamination.',
  },
];

// ──────────────────────────────────────────────
// 4. Known PDF documents from the website
// ──────────────────────────────────────────────
const pdfDocuments = [
  {
    key: 'remote-grease-lines-fittings-catalogue',
    title: 'Remote Grease Lines & Automatic Lubrication Fittings',
    label: 'Catalogue',
    externalUrl: 'https://drive.google.com/file/d/18xRnobRF9GMzWbo4Kqi8_C5gPAx7M3Xl/view?usp=sharing',
    relatedCategoryPath: '/more-lubrication/remote-greasing-equipment',
  },
];

// ──────────────────────────────────────────────
// 5. Build & run the transaction
// ──────────────────────────────────────────────
async function run() {
  console.log('🚀  Starting Lube Control category seed…\n');

  let tx = client.transaction();

  // — Product Categories ——————————————————
  for (const cat of categories) {
    const id = catId(cat.path);
    const doc = {
      _id: id,
      _type: 'productCategory',
      title: cat.title,
      slug: { _type: 'slug', current: cat.slug },
      description: cat.description,
      routePath: { _type: 'slug', current: cat.path },
    };
    if (cat.parent) {
      doc.parent = { _type: 'reference', _ref: catId(cat.parent) };
    }
    tx = tx.createOrReplace(doc);
  }
  console.log(`   ✅  ${categories.length} productCategory documents queued`);

  // — Category Pages ————————————————————
  for (const cat of categories) {
    const id = pageId(cat.path);
    const doc = {
      _id: id,
      _type: 'categoryPage',
      path: cat.path,
      title: cat.title,
      intro: [
        {
          _type: 'block',
          _key: `intro-${cat.slug}`,
          style: 'normal',
          markDefs: [],
          children: [
            {
              _type: 'span',
              _key: `span-${cat.slug}`,
              text: cat.description,
              marks: [],
            },
          ],
        },
      ],
      productCategory: { _type: 'reference', _ref: catId(cat.path) },
      seoTitle: cat.seoTitle,
      seoDescription: cat.seoDescription,
    };

    // Attach PDFs that belong to this page
    const pagePdfs = pdfDocuments.filter(
      (p) => p.relatedCategoryPath === cat.path,
    );
    if (pagePdfs.length) {
      doc.pdfDownloads = pagePdfs.map((p) => ({
        _type: 'object',
        _key: p.key,
        title: p.title,
        externalUrl: p.externalUrl,
      }));
    }

    tx = tx.createOrReplace(doc);
  }
  console.log(`   ✅  ${categories.length} categoryPage documents queued`);

  // — Standalone PDF Documents ——————————————————
  for (const pdf of pdfDocuments) {
    const id = pdfId(pdf.key);
    const doc = {
      _id: id,
      _type: 'pdfDocument',
      title: pdf.title,
      label: pdf.label,
      externalUrl: pdf.externalUrl,
      relatedCategory: {
        _type: 'reference',
        _ref: catId(pdf.relatedCategoryPath),
      },
    };
    tx = tx.createOrReplace(doc);
  }
  console.log(`   ✅  ${pdfDocuments.length} pdfDocument documents queued`);

  // — Commit ————————————————————————————
  console.log('\n⏳  Committing transaction to Sanity…');
  const result = await tx.commit();
  console.log(`\n🎉  Done!  Transaction ID: ${result.transactionId}`);
  console.log(`   Total documents created/updated: ${categories.length * 2 + pdfDocuments.length}`);
}

run().catch((err) => {
  console.error('❌  Seed failed:', err.message || err);
  process.exit(1);
});
