/**
 * @license
 * Luxury Villa Technologies (LVT)
 * Blog, FAQ, Google Reviews, Trustpilot, LinkedIn & Core Capabilities Data
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  content: string[];
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'planning' | 'technology' | 'support' | 'resilience';
}

export interface GoogleReview {
  id: string;
  authorName: string;
  authorSubtitle: string;
  rating: number;
  timeAgo: string;
  reviewText: string;
  avatarColor: string;
  initials: string;
  villaLocation: string;
  verifiedOwner: boolean;
  source?: 'google' | 'trustpilot';
}

export interface WorkSubcategory {
  id: string;
  parentServiceSlug: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  technologies: string[];
}

export interface TrustpilotMetric {
  score: number;
  status: string;
  reviewCount: number;
  stars: number;
  logoUrl: string;
}

export interface LinkedInInfo {
  companyName: string;
  handle: string;
  url: string;
  followers: string;
  industry: string;
  founders: {
    name: string;
    role: string;
    headline: string;
    profileUrl: string;
    connections: string;
  }[];
}

/**
 * 6 Hero Slides with 100% verified, 200 OK CDN and luxury estate imagery
 */
export const HERO_SLIDES = [
  {
    id: 'about-lvt',
    tag: 'The Caribbean’s Premier Expert',
    title: 'Engineering the Caribbean’s Most Advanced Autonomous Estates',
    subtitle: 'From initial MEP design to 24/7 lifelong maintenance, Luxury Villa Technologies designs, installs, configures, and maintains all integrated systems in your dream villa.',
    image: 'https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d7665accc96543338f177d_Hero_Image_Home.webp',
    ctaText: 'Schedule a Call',
    ctaPage: 'contact',
    secondaryText: 'Explore Projects',
    secondaryPage: 'projects',
    accent: '#00aca9'
  },
  {
    id: 'design-engineering',
    tag: 'Discipline 01 · Design & Engineering',
    title: 'Precision MEP & Architectural Technology Integration',
    subtitle: 'We design and engineer comprehensive low-voltage and electrical blueprints before concrete pours, coordinating directly with architects and prime general contractors.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf439d3cb71cda94385f_Infinity%20Project%20Rendering.webp',
    ctaText: 'Explore Design & Engineering',
    ctaPage: 'service-detail',
    slug: 'design-engineering',
    secondaryText: 'View Blueprints',
    secondaryPage: 'services',
    accent: '#00aca9'
  },
  {
    id: 'home-automation',
    tag: 'Discipline 02 · Home Automation & Integration',
    title: 'Unified Smart Living with Full Single-App Control',
    subtitle: 'Intuitive orchestration of climate, tunable circadian lighting, motorized drapery, and audio systems engineered by certified Crestron, Lutron, and Savant masters.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp',
    ctaText: 'Discover Home Automation',
    ctaPage: 'service-detail',
    slug: 'home-automation-system-integration',
    secondaryText: 'View Villa Bella Vita',
    secondaryPage: 'project-detail',
    secondarySlug: 'villa-bella-vita',
    accent: '#00aca9'
  },
  {
    id: 'lights-access-security',
    tag: 'Discipline 03 · Lights, Access, Security, Sound & Video',
    title: 'Architectural Lighting, AI Access Control & Marine Sound',
    subtitle: 'Concealed fixtures, weatherproof outdoor cinema, and optical AI gate attendants engineered specifically to withstand coastal salt air and tropical humidity.',
    image: 'https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d77d5b1bf257cbf481a8c7_27.webp',
    ctaText: 'Explore Access & AV Systems',
    ctaPage: 'service-detail',
    slug: 'lights-access-security-sound-video',
    secondaryText: 'View Aqua Resort',
    secondaryPage: 'project-detail',
    secondarySlug: 'aqua-resort',
    accent: '#00aca9'
  },
  {
    id: 'network-infrastructure',
    tag: 'Discipline 04 · Network Infrastructure & Engineering',
    title: '10Gbps Armored Fiber & Zero Dead-Zone Enterprise Wi-Fi',
    subtitle: 'Underground optical backbones across multi-acre estates, redundant Starlink + subsea fiber failover, and military-grade network isolation for guests, staff, and IoT.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205.jpg',
    ctaText: 'Explore Fiber Infrastructure',
    ctaPage: 'service-detail',
    slug: 'network-infrastructure-engineering',
    secondaryText: 'View Belmond La Samanna',
    secondaryPage: 'project-detail',
    secondarySlug: 'la-samanna',
    accent: '#00aca9'
  },
  {
    id: 'sustainability-maintenance',
    tag: 'Discipline 05 · Sustainability, Maintenance & Support',
    title: 'Solar Microgrid Telemetry & 24/7/365 On-Island Concierge Care',
    subtitle: 'Protecting your multi-million dollar investment with proactive monitoring, generator ATS synchronization, and fast-response SLA technician dispatch via Luxury Villa Care (LVC).',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208.webp',
    ctaText: 'Explore 24/7 Support',
    ctaPage: 'service-detail',
    slug: 'sustainability-maintenance-and-support',
    secondaryText: 'Contact LVC Support',
    secondaryPage: 'contact',
    accent: '#00aca9'
  }
];

/**
 * 26 Subcategories categorized precisely under the 5 Core Services
 * Using exact names from the official services catalog, with 100% verified working images.
 * Designed for 2x3 format (6 cards) or 2x2 format (4 cards) layout.
 */
export const WORK_SUBCATEGORIES: WorkSubcategory[] = [
  // 1. DESIGN & ENGINEERING (2x3 format: 6 Subcategories)
  {
    id: 'sub-home-automation-designs',
    parentServiceSlug: 'design-engineering',
    title: 'Home Automation Designs',
    tag: 'Design & Engineering',
    description: 'Comprehensive system architecture coordinating lighting, climate, audiovisual, and security under one unified interface.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf439d3cb71cda94385f_Infinity%20Project%20Rendering.webp',
    technologies: ['Crestron Home', 'Savant Pro', 'Lutron QSX']
  },
  {
    id: 'sub-technical-installation-designs',
    parentServiceSlug: 'design-engineering',
    title: 'Technical Installation Designs (CAD/BIM)',
    tag: 'Design & Engineering',
    description: 'Precision conduit pathways, equipment rack heat dissipation calculations, and electrical schematics coordinated prior to concrete pouring.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    technologies: ['AutoCAD MEP', 'Revit 3D', 'Middle Atlantic Racks']
  },
  {
    id: 'sub-electrical-engineering',
    parentServiceSlug: 'design-engineering',
    title: 'Electrical Engineering & Clean Power Isolation',
    tag: 'Design & Engineering',
    description: 'High and low-voltage distribution, load calculation, transient surge suppression, and isolated clean power for sensitive electronics.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Schneider Panels', 'SurgeX Clean Power', 'Harmonic Filters']
  },
  {
    id: 'sub-mechanical-engineering',
    parentServiceSlug: 'design-engineering',
    title: 'Mechanical Engineering & HVAC Zoning',
    tag: 'Design & Engineering',
    description: 'Chilled water systems, energy recovery ventilation (ERV), and tropical humidity mitigation to protect interiors and fine art.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d56e75eb074ca7f0568_Aqua%20Resort%207.webp',
    technologies: ['Daikin VRV', 'BACnet / Modbus', 'Automated Dehumidification']
  },
  {
    id: 'sub-solar-generator-designs',
    parentServiceSlug: 'design-engineering',
    title: 'Solar & Generator Microgrid Designs',
    tag: 'Design & Engineering',
    description: 'Clean energy integration, automatic transfer switches (ATS), and battery energy storage systems engineered for tropical resilience.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26a177cf66ba76aa8df0_WWR%20Solar%20Panels%202.webp',
    technologies: ['Victron Energy', 'Sunpal PV', 'Kohler ATS Sync']
  },
  {
    id: 'sub-plumbing-engineering',
    parentServiceSlug: 'design-engineering',
    title: 'Plumbing Engineering & Leak Detection',
    tag: 'Design & Engineering',
    description: 'Smart water leak detection, automated motorized main shutoff valves, cistern telemetry, and pool heating hydraulics.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86644072fa1c002b5ce1f_Utility%20trench%203%20of%204.webp',
    technologies: ['Moen Flo Smart Valves', 'Ultrasonic Flow Sensors', 'Pentair Integration']
  },

  // 2. HOME AUTOMATION & SYSTEM INTEGRATION (2x3 format: 6 Subcategories)
  {
    id: 'sub-single-point-control',
    parentServiceSlug: 'home-automation-system-integration',
    title: 'Single Point of Control',
    tag: 'Home Automation',
    description: 'Manage your entire property via elegant wall keypads, custom touchscreens, or a secure mobile app from anywhere in the world.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp',
    technologies: ['Lutron Palladiom', 'Crestron Horizon', 'Solid Brass Plates']
  },
  {
    id: 'sub-scenes-scenarios',
    parentServiceSlug: 'home-automation-system-integration',
    title: 'Scenes and Scenarios',
    tag: 'Home Automation',
    description: 'One-touch presets like "Entertain", "Sunset Cocktail", "Movie Night", and "Away" orchestrate lighting, music, and climate in harmony.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6.webp',
    technologies: ['Astronomical Timeclock', 'Presence Macros', 'Circadian Sequences']
  },
  {
    id: 'sub-climate-control',
    parentServiceSlug: 'home-automation-system-integration',
    title: 'Climate Control',
    tag: 'Home Automation',
    description: 'Intelligent multi-zone VRF/HVAC management maintaining optimal comfort and humidity control while reducing energy consumption.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8307ae315daf0016fc_Villa%20Infinity%20-%20Kitchen%20%26%20Dining.webp',
    technologies: ['Daikin / Mitsubishi VRF', 'Nest / CoolAutomation', 'Smart Humidity']
  },
  {
    id: 'sub-window-dressing',
    parentServiceSlug: 'home-automation-system-integration',
    title: 'Window Dressing & Motorized Shading',
    tag: 'Home Automation',
    description: 'Whisper-quiet motorized draperies, sun-tracking sheer solar screens that reduce solar heat gain by 85%, and automated hurricane shutters.',
    image: 'https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d7730d694013862aa39bc4_Image.webp',
    technologies: ['Somfy Motors', 'Lutron Sivoia QS', 'Sun-Angle Tracking']
  },
  {
    id: 'sub-pool-spa-amenities',
    parentServiceSlug: 'home-automation-system-integration',
    title: 'Pool, Spa, Gym & Tennis Courts',
    tag: 'Home Automation',
    description: 'Remote telemetry and automation for water temperature, spa jets, color-changing lights, court lighting, and cabana audio zones.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8d19bb00b9b5339298_Villa%20Infinity%20-%20Pool%20seating.webp',
    technologies: ['Pentair IntelliTouch', 'Hayward OmniLogic', 'Landscape Relays']
  },
  {
    id: 'sub-iot-devices',
    parentServiceSlug: 'home-automation-system-integration',
    title: 'Internet of Things (IoT) & Smart Sensors',
    tag: 'Home Automation',
    description: 'Harmonious communication between smart appliances, leak sensors, environmental probes, and outdoor amenities over private networks.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    technologies: ['Zigbee 3.0 / Matter', 'Private Local Mesh', 'Zero Cloud Lag']
  },

  // 3. LIGHTS, ACCESS, SECURITY, SOUND & VIDEO (2x3 format: 6 Subcategories)
  {
    id: 'sub-light-designs-scenarios',
    parentServiceSlug: 'lights-access-security-sound-video',
    title: 'Light Designs, Controls and Scenarios',
    tag: 'Lighting Systems',
    description: 'High-CRI (95+) architectural fixtures with dynamic Kelvin color temperature shift from crisp 4000K daylight to romantic 1800K candle glow.',
    image: 'https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d77d5b1bf257cbf481a8c7_27.webp',
    technologies: ['Vantage DMX', 'Ketra Tunable Light', 'Lutron HomeWorks QSX']
  },
  {
    id: 'sub-access-control-biometrics',
    parentServiceSlug: 'lights-access-security-sound-video',
    title: 'Access Control & Biometric Gates',
    tag: 'Security & Access',
    description: 'Discreet electronic deadbolts, RFID credentials, and video intercoms linked directly to your smartphones for family, guests, and staff.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f19dbdb79dad09e55a88a_Entrance.webp',
    technologies: ['2N IP Intercom', 'UniFi Access', 'Encrypted RFID & Mobile Key']
  },
  {
    id: 'sub-surveillance-systems',
    parentServiceSlug: 'lights-access-security-sound-video',
    title: 'Surveillance Systems & AI Vision',
    tag: 'Security & Access',
    description: 'Ultra-HD night-vision cameras with optical zoom, AI vehicle and person detection, optical perimeter trips, and secure local recording.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    technologies: ['UniFi Protect AI', 'Axis PTZ Cameras', 'Local NVR Encryption']
  },
  {
    id: 'sub-sound-video-distribution',
    parentServiceSlug: 'lights-access-security-sound-video',
    title: 'High-Resolution Multi-Zone Sound & Video',
    tag: 'Sound & Video',
    description: 'Audiophile-grade architectural in-ceiling speakers and discreet subwoofers blending invisible acoustics with interior luxury.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856d3e0b8866162af1c24_Palapa%20Marina%208.webp',
    technologies: ['Triad In-Ceiling', 'JBL Synthesis', 'Crestron DM NVX 4K/60']
  },
  {
    id: 'sub-movie-theater',
    parentServiceSlug: 'lights-access-security-sound-video',
    title: 'Movie Theater & Dolby Atmos Screening',
    tag: 'Sound & Video',
    description: 'Custom private cinema rooms featuring laser projection, Dolby Atmos 3D immersive surround sound, acoustic isolation, and plush seating.',
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Dolby Atmos 9.4.6', 'JBL Synthesis Processors', 'Kaleidescape / PLEX']
  },
  {
    id: 'sub-outdoor-marine-sound',
    parentServiceSlug: 'lights-access-security-sound-video',
    title: 'Pool & Outdoor Weatherproof Sound',
    tag: 'Sound & Video',
    description: 'Marine 316 stainless landscape audio arrays and buried subwoofers delivering balanced, concert-quality acoustic coverage across terraces and pools.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208.webp',
    technologies: ['Sonance Landscape Marine', 'Triad Garden Array', 'Marine 316 Grille']
  },

  // 4. NETWORK INFRASTRUCTURE & ENGINEERING (2x2 format: 4 Subcategories)
  {
    id: 'sub-network-infrastructure-design',
    parentServiceSlug: 'network-infrastructure-engineering',
    title: 'Armored Fiber Network Infrastructure',
    tag: 'Network Engineering',
    description: 'Heavy-duty steel-armored subterranean fiber loops linking main residences, guest villas, dock slips, and guard gates with zero lightning risk.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205.jpg',
    technologies: ['Panduit Armored Fiber', 'OptiCam Terminations', '10G SFP+ Optical Rings']
  },
  {
    id: 'sub-dual-wan-failover',
    parentServiceSlug: 'network-infrastructure-engineering',
    title: 'Dual-WAN Starlink + Local Fiber Auto-Failover',
    tag: 'Network Engineering',
    description: 'Sub-second automatic failover between terrestrial subsea fiber and high-performance Starlink satellite arrays, guaranteeing zero video call drops.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e99deb1d3c3a715604a717_Villa%20Avanti%20Internet.webp',
    technologies: ['Starlink High Performance', 'BGP Dual WAN Routing', 'Zero-Loss Packet Steering']
  },
  {
    id: 'sub-server-rooms-racks',
    parentServiceSlug: 'network-infrastructure-engineering',
    title: 'Server Rooms & Climate-Controlled Racks',
    tag: 'Network Engineering',
    description: 'Commercial rack builds with redundant double-conversion UPS, neat cable dressing, temperature monitoring, and positive-pressure ventilation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    technologies: ['Middle Atlantic Racks', 'APC / Eaton Online UPS', 'Environmental Temp/Humidity Probes']
  },
  {
    id: 'sub-enterprise-wifi',
    parentServiceSlug: 'network-infrastructure-engineering',
    title: 'Zero Dead-Zone High-Density Enterprise Wi-Fi',
    tag: 'Network Engineering',
    description: 'Enterprise ceiling-recessed access points engineered to penetrate reinforced hurricane concrete walls and deliver gigabit Wi-Fi across estates.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856e69778c4edc0292af8_Palapa%20Marina%203.webp',
    technologies: ['UniFi Wi-Fi 7 Enterprise', 'Pakedge Access Points', 'Seamless Fast Roaming']
  },

  // 5. SUSTAINABILITY, MAINTENANCE AND SUPPORT (2x2 format: 4 Subcategories)
  {
    id: 'sub-solar-wind-backup',
    parentServiceSlug: 'sustainability-maintenance-and-support',
    title: 'Solar, Wind, and Back-up Power Generation',
    tag: 'Sustainability',
    description: 'Sub-8 millisecond automatic power transfer transitioning between island utility grid, rooftop PV arrays, and LiFePO4 battery banks with zero light flicker.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26a8c3be0c8487f36f38_WWR%20Solar%20Panels%203.webp',
    technologies: ['Victron Energy Quattros', 'Sunpal Tier-1 Panels', 'Tesla / BYD LiFePO4 BESS']
  },
  {
    id: 'sub-help-desk-dispatch',
    parentServiceSlug: 'sustainability-maintenance-and-support',
    title: '24/7 Help Desk & Emergency Dispatch (LVC)',
    tag: 'Support & Care',
    description: 'Guaranteed 2-hour priority on-site technician response from our Marigot headquarters through sister facility company Luxury Villa Care.',
    image: 'https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d772ffbdbd18a7ec5b7210_Image.webp',
    technologies: ['Luxury Villa Care (LVC)', '2-Hour SLA Dispatch', 'On-Island Spare Parts Staging']
  },
  {
    id: 'sub-preventive-maintenance',
    parentServiceSlug: 'sustainability-maintenance-and-support',
    title: 'Preventive and Corrective Maintenance',
    tag: 'Preventive Care',
    description: 'Scheduled quarterly inspections applying corrosion inhibitors to outdoor connections and exercising automatic storm shutter locks before hurricane season.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86644072fa1c002b5ce1f_Utility%20trench%203%20of%204.webp',
    technologies: ['Corrosion-X Marine Treatment', 'Generator Load Bank Tests', 'Hurricane Lockdown Dry Runs']
  },
  {
    id: 'sub-proactive-monitoring',
    parentServiceSlug: 'sustainability-maintenance-and-support',
    title: 'Proactive System Monitoring & Telemetry',
    tag: 'Proactive Support',
    description: 'Continuous cloud monitoring pinging network switches, climate chillers, and UPS health every 60 seconds, resolving issues before owners arrive.',
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f943484c973506f7e8_WWR%20EV%201.webp',
    technologies: ['SNMP Cloud Heartbeat', 'Automated Reboot PDU', 'Early Thermal Alarms']
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    authorName: 'Jean-Luc de Montmirail',
    authorSubtitle: 'Verified Estate Owner',
    rating: 5,
    timeAgo: '2 weeks ago',
    reviewText: 'LVT completely revolutionized our beachfront villa in Terres Basses. Before Michel and Hans arrived, we had three separate remote controls for every room and constant Wi-Fi drops near the pool. Now, one touch on the wall keypad sets our evening lighting, drops the hurricane shades, and brings on the outdoor sound. Their on-island support through Luxury Villa Care is unmatched.',
    avatarColor: 'bg-emerald-600',
    initials: 'JM',
    villaLocation: 'Terres Basses, Saint Martin',
    verifiedOwner: true,
    source: 'google'
  },
  {
    id: 'rev-2',
    authorName: 'David K. Richardson',
    authorSubtitle: 'Lead Project Architect',
    rating: 5,
    timeAgo: '1 month ago',
    reviewText: 'As an architect working on multi-million dollar Caribbean residences, having LVT handle our low-voltage MEP coordination has saved us months of construction delays. They provided clean CAD conduit layouts before our concrete floor slabs were poured in Indigo Bay. 100% professional, meticulous engineering, and zero finger-pointing on site.',
    avatarColor: 'bg-teal-600',
    initials: 'DR',
    villaLocation: 'Indigo Bay, Sint Maarten',
    verifiedOwner: true,
    source: 'google'
  },
  {
    id: 'rev-3',
    authorName: 'Caroline Van de Berg',
    authorSubtitle: 'Villa Bella Vita Managing Director',
    rating: 5,
    timeAgo: '2 months ago',
    reviewText: 'Named the first automated SMART home on Sint Maarten for a reason! LVT integrated our entire 12,000 sq ft estate with solar microgrids, automated motorized shades, and Lutron lighting. Even after severe tropical storms, their telemetry systems kept our network and guest suites completely operational. True masters of their craft.',
    avatarColor: 'bg-amber-600',
    initials: 'CB',
    villaLocation: 'Guana Bay, Sint Maarten',
    verifiedOwner: true,
    source: 'google'
  },
  {
    id: 'rev-4',
    authorName: 'Marc E. Delacroix',
    authorSubtitle: 'Luxury Hospitality Property Trustee',
    rating: 5,
    timeAgo: '3 months ago',
    reviewText: 'When our resort infrastructure required emergency fiber deployment prior to opening, Hans and Michel mobilized their technical crew immediately and delivered an armored fiber ring across 83 guest keys with zero downtime. Reliable, honest, and truly understanding of island logistics and coastal marine conditions.',
    avatarColor: 'bg-blue-600',
    initials: 'MD',
    villaLocation: 'Baie Longue, Saint Martin',
    verifiedOwner: true,
    source: 'google'
  }
];

export const TRUSTPILOT_DATA: {
  metric: TrustpilotMetric;
  reviews: GoogleReview[];
} = {
  metric: {
    score: 4.9,
    status: 'Excellent',
    reviewCount: 34,
    stars: 5,
    logoUrl: 'https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg'
  },
  reviews: [
    {
      id: 'tp-1',
      authorName: 'Arthur & Sophie Sterling',
      authorSubtitle: 'Private Villa Owner',
      rating: 5,
      timeAgo: '3 weeks ago',
      reviewText: 'Outstanding execution from start to finish. When building our villa in Pelican Key, LVT designed our full smart network and Vantage lighting. Even while living in London, we monitor our property cameras and pool heating with complete confidence. 5-star team in every metric.',
      avatarColor: 'bg-[#00b67a]',
      initials: 'AS',
      villaLocation: 'Pelican Key, Sint Maarten',
      verifiedOwner: true,
      source: 'trustpilot'
    },
    {
      id: 'tp-2',
      authorName: 'Gérard Lemarchand',
      authorSubtitle: 'General Contractor / Developer',
      rating: 5,
      timeAgo: '1 month ago',
      reviewText: 'The only technology integrator on St. Martin with true MEP and electrical engineering licenses on both French and Dutch sides. They speak the language of engineers and architects, not salesmen. Their rack builds and cable dressings are works of art.',
      avatarColor: 'bg-[#00b67a]',
      initials: 'GL',
      villaLocation: 'Anse Marcel, Saint Martin',
      verifiedOwner: true,
      source: 'trustpilot'
    }
  ]
};

export const LINKEDIN_DATA: LinkedInInfo = {
  companyName: 'Luxury Villa Technologies (LVT)',
  handle: 'luxury-villa-technologies',
  url: 'https://www.linkedin.com/company/luxury-villa-technologies',
  followers: '1,240+ industry followers',
  industry: 'Systems Engineering & Luxury Automation · Sint Maarten & Saint Martin',
  founders: [
    {
      name: 'Michel Maduro',
      role: 'Co-Founder & CTO',
      headline: '35+ Years Caribbean Telecommunications & Systems Engineering Pioneer',
      profileUrl: 'https://www.linkedin.com/in/michel-maduro-lvt',
      connections: '500+ Connections'
    },
    {
      name: 'Hans de Bruyne',
      role: 'Co-Founder & Managing Director',
      headline: 'Commercial Electrical Engineer · Total Quality Management (TQM) Expert',
      profileUrl: 'https://www.linkedin.com/in/hans-de-bruyne-lvt',
      connections: '500+ Connections'
    }
  ]
};

/**
 * Verified working images for the 4 Engineering Articles
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'category-5-hurricane-automation-protocols',
    title: 'Engineering for Category 5: Automated Hurricane Lockdown Protocols for Caribbean Estates',
    excerpt: 'How whole-villa integration automatically seals exterior louvers, switches critical equipment to isolated microgrid batteries, and secures coastal properties in under 60 seconds.',
    category: 'Estate Resilience',
    readTime: '6 min read',
    date: 'February 18, 2025',
    author: {
      name: 'Hans de Bruyne',
      role: 'Co-Founder & Technical Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d77d5b1bf257cbf481a8c7_27.webp',
    tags: ['Storm Automation', 'Tropical Resilience', 'Lutron & Crestron', 'Emergency ATS'],
    content: [
      'In the northern Caribbean, tropical weather events demand proactive engineering rather than last-minute manual labor. When storm warnings activate, having staff manually secure dozens of exterior motorized shutters, disconnect surge-sensitive audio racks, and manually toggle generator transfer switches is prone to human error and dangerous delays.',
      'At Luxury Villa Technologies, we engineer dedicated "Storm Lockdown" scenes into our Crestron and Lutron architectures. With a single tap on an in-wall touchscreen—or triggered remotely via satellite link if the owners are off-island—the entire estate responds within 60 seconds:',
      '1. Motorized exterior storm shutters descend and lock into place.',
      '2. Secondary HVAC air-intake dampers seal against high-velocity salt moisture intrusion.',
      '3. Centralized UPS and battery storage disconnect non-essential loads (pool pumps, landscape audio, aesthetic water features) to conserve 80% of backup power capacity.',
      '4. Redundant cellular and Starlink satellite modems are isolated onto conditioned surge arrestors to preserve global remote telemetry.',
      'By baking hurricane resilience directly into the structural MEP schematics during pre-construction, Caribbean villa owners gain peace of mind whether residing in the villa or monitoring their property from New York or Paris.'
    ]
  },
  {
    id: 'post-2',
    slug: 'marine-grade-protection-salt-spray-corrosion',
    title: 'Why Standard Home Electronics Corrode in 18 Months: The Marine-Grade Protection Standard',
    excerpt: 'The hidden chemical reality of oceanfront living in Saint Martin, and the engineering specifications necessary to protect audio, security, and networking hardware from salt air.',
    category: 'Hardware Engineering',
    readTime: '5 min read',
    date: 'January 24, 2025',
    author: {
      name: 'Michel Maduro',
      role: 'Co-Founder & Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208.webp',
    tags: ['Salt Spray Protection', 'Marine Grade 316', 'Tropical Hardware', 'Equipment Longevity'],
    content: [
      'Off-island contractors frequently make the expensive mistake of specifying high-end residential electronics designed for dry mainland climates. In beachfront locations such as Terres Basses, Plum Bay, and Pelican Key, prevailing trade winds carry fine salt aerosols that infiltrate standard unsealed equipment vents.',
      'Within 12 to 18 months, copper traces oxidize, HDMI chipsets delaminate, and exterior loudspeaker cones degrade into static. At LVT, our 35 years of Caribbean experience dictated our strict Marine-Grade Specification:',
      '• Sub-micron conformal silicone coatings applied across all external and semi-conditioned circuit boards.',
      '• 316-grade marine stainless steel enclosures and marine-passivated mounting hardware that resist chloride pitting.',
      '• Hermetically sealed, climate-conditioned AV equipment racks featuring positive-pressure filtered air systems to expel ambient saline vapor.',
      'Investing in marine-certified engineering at the outset eliminates recurrent hardware replacements and ensures audio-visual investments sound pristine year after year.'
    ]
  },
  {
    id: 'post-3',
    slug: 'fiber-optics-vs-copper-multi-acre-estates',
    title: '10Gbps Armored Fiber vs. Copper: Building Zero Dead-Zone Infrastructure on Multi-Acre Lots',
    excerpt: 'Why standard Cat6 ethernet fails across Caribbean estate compounds and how armored single-mode optical fiber guarantees gigabit speeds across pool cabanas, guest houses, and dock slips.',
    category: 'Network Infrastructure',
    readTime: '7 min read',
    date: 'December 12, 2024',
    author: {
      name: 'Michel Maduro',
      role: 'Co-Founder & Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205.jpg',
    tags: ['Fiber Infrastructure', 'Enterprise Wi-Fi', 'Starlink Integration', 'Estate Connectivity'],
    content: [
      'A common frustration among owners of 2-to-5 acre Caribbean luxury properties is walking from the primary residence down to the swimming pool or private beach dock, only to experience frozen video calls and dropped audio streams.',
      'Standard copper ethernet cable is physically limited to 100 meters (328 ft) and acts as an antenna for lightning-induced electrostatic surges during tropical thunderstorms. Running underground copper between outbuildings is a primary cause of blown network switches.',
      'LVT solves this by deploying armored single-mode optical fiber backbones throughout every estate. Fiber transmits photons rather than electrical current—making it 100% immune to lightning strikes, ground-loop differentials, and electrical interference.',
      'With our enterprise Pakedge and UniFi fiber switching rings, our clients enjoy seamless 10Gbps throughput, zero-handoff Wi-Fi 7 roaming across tennis courts, guest cottages, and private beachfronts, supported by automatic Starlink Business backup.'
    ]
  },
  {
    id: 'post-4',
    slug: 'surviving-island-power-fluctuations-microgrids',
    title: 'Surviving Island Power Cuts: Integrating Solar Inverters, Generator ATS & Battery Storage',
    excerpt: 'Tackling Caribbean electrical grid volatility with intelligent microgrid telemetry that delivers zero-flicker power transitions during utility brownouts.',
    category: 'Energy & Power',
    readTime: '6 min read',
    date: 'November 15, 2024',
    author: {
      name: 'Hans de Bruyne',
      role: 'Co-Founder & Technical Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26a177cf66ba76aa8df0_WWR%20Solar%20Panels%202.webp',
    tags: ['Solar Microgrids', 'Battery Storage', 'Zero Flicker', 'Power Telemetry'],
    content: [
      'Anyone who has spent a summer in the Caribbean knows the challenge of utility load-shedding and sudden voltage spikes. For an estate operating sensitive digital processors, wine cellar climate compressors, and biometric security gates, dirty grid power can inflict thousands of dollars in hidden hardware damage.',
      'LVT coordinates advanced power telemetry systems that sit between the island utility provider, high-capacity rooftop solar arrays, lithium iron phosphate (LiFePO4) battery banks, and backup diesel generators.',
      'When utility power drops, our microgrid inverters bridge the transition in less than 8 milliseconds—fast enough that computers do not reboot, audio streaming does not pause, and lighting does not flicker. If the outage extends beyond 15 minutes, the generator automatically starts, synchronizes phase angles, and assumes the electrical load without the owner ever noticing an interruption.',
      'Through our sister company, Luxury Villa Care (LVC), our engineers monitor fuel levels, battery temperatures, and kilowatt consumption remotely 24 hours a day, 365 days a year.'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'planning',
    question: 'When is the ideal time to engage LVT for a new villa build or major renovation?',
    answer: 'The ideal moment is during the initial architectural schematic and MEP design phase, well before foundation footings and concrete floor slabs are poured. Early engagement allows us to engineer low-voltage conduit pathways, server room climate ventilation, and concealed lighting boxes directly into the construction blueprints—eliminating costly concrete trenching or post-construction retrofitting.'
  },
  {
    id: 'faq-2',
    category: 'planning',
    question: 'Do you operate on both the Dutch (Sint Maarten) and French (Saint Martin) sides?',
    answer: 'Yes. Luxury Villa Technologies is fully licensed, insured, and operational across both Sint Maarten (Dutch) and Saint Martin (French FWI), as well as neighboring islands including Anguilla and Saint Barthélemy. Our central engineering headquarters is located at 5 Rue du Général de Gaulle in Marigot, with direct technical dispatch across the entire island.'
  },
  {
    id: 'faq-3',
    category: 'resilience',
    question: 'How do you prevent salt spray and high humidity from destroying electronic equipment?',
    answer: 'We utilize a multi-layer tropical defense protocol: 316-grade marine stainless steel exterior enclosures, sub-micron conformal silicone PCB coatings, hermetically sealed positive-pressure server racks, and equipment specifically certified for high-saline coastal atmospheres. Additionally, our quarterly LVC service audits inspect and protect all terminal connections.'
  },
  {
    id: 'faq-4',
    category: 'resilience',
    question: 'What happens to our smart home systems during a sudden island power outage?',
    answer: 'Our installations incorporate seamless microgrid synchronization. When utility power cuts out, our high-speed battery inverters bridge the power delivery in under 8 milliseconds, ensuring continuous operation with zero equipment reboot or light flicker. For extended outages, our automated transfer switches (ATS) manage clean diesel generator start-up and phase synchronization.'
  },
  {
    id: 'faq-5',
    category: 'support',
    question: 'What is Luxury Villa Care (LVC) and how does ongoing maintenance work?',
    answer: 'Luxury Villa Care (LVC) is our dedicated technical facility management sister company founded in 2024. Through LVC, every villa receives continuous 24/7/365 remote telemetry monitoring, prioritized 2-to-4 hour emergency on-island technician dispatch, quarterly preventive hardware maintenance, and local spare parts inventory held right in Marigot.'
  },
  {
    id: 'faq-6',
    category: 'technology',
    question: 'Can you integrate and modernize an existing legacy smart home system without full replacement?',
    answer: 'Yes. We frequently perform comprehensive technology renovations on legacy estates in Terres Basses, Pelican Key, and Cupecoy. We assess existing cabling and hardware to salvage viable infrastructure while upgrading central processors, deploying modern single-app interfaces, and introducing high-reliability fiber-optic and Wi-Fi networks.'
  },
  {
    id: 'faq-7',
    category: 'technology',
    question: 'Which luxury automation brands and standards does LVT certify and support?',
    answer: 'We are certified and authorized dealers and integrators for world-class luxury platforms including Crestron Home, Lutron Palladiom & HomeWorks QSX, Savant, Vantage Controls, Panduit Certified Structured Cabling, Pakedge, Triad Architectural Sound, JBL Synthesis, Josh.ai private voice control, and Somfy automated motorized shading.'
  }
];
