/**
 * @license
 * Luxury Villa Technologies (LVT)
 * Official Site Recreation & Strategic Transformation Data
 */

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  region: string;
  country: string;
  startDate: string;
  completionDate: string;
  thumbnail: string;
  descriptionParagraphs: string[];
  testimonial?: string;
  images: string[];
  category?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  iconUrl: string;
  heroHeadline: string;
  introParagraph: string;
  brochureText: string;
  features: {
    title: string;
    description: string;
  }[];
  images: string[];
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    full: string;
    googleMapsUrl: string;
  };
  phones: {
    label: string;
    number: string;
    tel: string;
  }[];
  email: string;
  offices: string[];
  sisterCompany: {
    name: string;
    founded: string;
    focus: string;
  };
  founders: {
    name: string;
    role: string;
    bio: string;
    yearArrived: string;
  }[];
  milestones: {
    year: string;
    title: string;
    description: string;
  }[];
  partnerLogos: {
    name: string;
    logoUrl: string;
    category: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Luxury Villa Technologies",
  legalName: "Luxury Villa Technologies (LVT)",
  tagline: "The Caribbean’s Premier Expert in Integrated Villa Solutions",
  description: "Your ultimate partner for Caribbean luxury villa technology, home automation, and comprehensive systems engineering. From initial MEP design and fiber infrastructure to 24/7 proactive maintenance.",
  address: {
    line1: "5 Rue du Général de Gaulle",
    line2: "Immueble Le Colibri #8",
    line3: "PO Box 1081, Marigot 97150, Saint Martin FWI",
    full: "5 Rue du Général de Gaulle, Immueble Le Colibri #8, PO Box 1081, Marigot 97150, Saint Martin FWI",
    googleMapsUrl: "https://maps.google.com/?q=5+Rue+du+Général+de+Gaulle+Marigot+97150+Saint+Martin"
  },
  phones: [
    { label: "French Side / Saint Martin", number: "+590 (690) 886671", tel: "+590690886671" },
    { label: "Dutch Side / Sint Maarten", number: "+1 (721) 553-1660", tel: "+17215531660" },
    { label: "North America / US Direct", number: "+1 (310) 916-9490", tel: "+13109169490" }
  ],
  email: "info@lvt.sx",
  offices: ["Saint Martin / Sint Maarten (HQ)", "Dominican Republic", "Fort Lauderdale (USA)", "Jamaica"],
  sisterCompany: {
    name: "Luxury Villa Care (LVC)",
    founded: "July 2024",
    focus: "Full-scope technical facility management company focused on ensuring the quality, uptime, and proactive maintenance of technical installations for villas and hotels."
  },
  founders: [
    {
      name: "Michel Maduro",
      role: "Co-Founder & Chief Technology Officer",
      yearArrived: "1989",
      bio: "Michel’s career as a network and systems engineer began 35 years ago in Sint Maarten, managing the island’s first computer-controlled conference center. He co-founded Network IDL, the first ISP serving both Dutch and French sides and neighboring islands, which quickly grew into the first wireless ISP in the Caribbean. Expanding his expertise, he designed and launched global ISP and VoIP solutions for US carriers and later oversaw inter-island data communications for the Social Security of the Netherlands Antilles and SZV."
    },
    {
      name: "Hans de Bruyne",
      role: "Co-Founder & Managing Director",
      yearArrived: "2010",
      bio: "Hans founded his first consultancy, Total Quality Management (ATQ), while studying Commercial Electrical Engineering at Haagse Hoge School in The Hague. Over 20 years, he built extensive expertise in business, organizational consultancy, change management, OSHAH, and QS/QA for over 60 companies. In 2010, he relocated to Sint Maarten, partnering with Michel to pioneer luxury home automation across the Caribbean."
    }
  ],
  milestones: [
    { year: "2010", title: "Relocation to St. Maarten", description: "Hans de Bruyne relocates to Sint Maarten after 20 years leading European engineering and quality consultancy." },
    { year: "2016", title: "Joining Forces as IMCS", description: "Michel Maduro and Hans de Bruyne combine forces to establish IMCS, an IT & Management Consultancy in Saint Martin." },
    { year: "2018", title: "Luxury Automation Niche Identified", description: "Exploration and pilot smart home implementations for beachfront estates in Terres Basses and Pelican Keys." },
    { year: "2022", title: "LVT Officially Established", description: "Luxury Villa Technologies is founded to deliver dedicated high-end engineering, automation, and MEP integration for luxury villas and five-star resorts." },
    { year: "2024", title: "Expansion to Luxury Villa Care (LVC)", description: "Launch of Luxury Villa Care in July 2024 to provide 24/7 technical facility management and SLA support." }
  ],
  partnerLogos: [
    { name: "Panduit", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7a3eb23c2300514a66_panduit.svg", category: "Network & Structured Cabling" },
    { name: "JBL Synthesis", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d76ed57e7727eea0ab9822_jbl.svg", category: "Cinema & Architectural Audio" },
    { name: "Vantage Controls", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7aa79e1478e477302a_vantage.webp", category: "Architectural Lighting Automation" },
    { name: "Control4", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d76ed5c9f6389995283561_control.svg", category: "Smart Home Control OS" },
    { name: "Triad", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d76ed52cc5ce32cec0e876_triad.svg", category: "High-End Architectural Sound" },
    { name: "Savant", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7a1f8c542db367d45f_savant.webp", category: "Luxury Automation & Smart Power" },
    { name: "Legrand", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d76ed513385435ac1ff43a_legrand.svg", category: "Electrical & Low Voltage Infrastructure" },
    { name: "Signify / Philips", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7a657ad0bb59e885af_signify.svg", category: "Tunable LED Systems & Lighting" },
    { name: "Pakedge", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7aeb9d6a7d0ee038ce_pakedge.webp", category: "Enterprise AV-over-IP Networks" },
    { name: "Josh.ai", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d76ed539289a77424244d2_josh.svg", category: "Private Architectural Voice AI" },
    { name: "Sonos", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7a8ff79ac6becfdad0_sonos.svg", category: "Multi-Zone Streaming Audio" },
    { name: "Ubiquiti UniFi", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7a45078df6e722302a_ubiquity.webp", category: "Enterprise Wi-Fi & Surveillance" },
    { name: "Pentair", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7aa1c78b16ebbea42c_pentair.svg", category: "Pool & Water Management" },
    { name: "Somfy", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7a648e1ca342b2d3b5_somfy.svg", category: "Motorized Shading & Hurricane Shutters" },
    { name: "Sunpal", logoUrl: "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66feee7a005e3cf85695fa30_sunpal.webp", category: "Solar Energy Storage Systems" }
  ]
};

export const FOUNDERS = [
  {
    name: "Michel Maduro",
    role: "Co-Founder & Chief Technology Officer",
    yearArrived: "1989",
    bio: "Michel’s career as a network and systems engineer began 35 years ago in Sint Maarten, managing the island’s first computer-controlled conference center. He co-founded Network IDL, the first ISP serving both Dutch and French sides and neighboring islands, which quickly grew into the first wireless ISP in the Caribbean. Expanding his expertise, he designed and launched global ISP and VoIP solutions for US carriers and later oversaw inter-island data communications for the Social Security of the Netherlands Antilles and SZV.",
    specialties: ["Carrier Telecom Networks", "Armored Fiber-Optics", "VoIP & Satellite Redundancy", "HVAC / ATS Telemetry"]
  },
  {
    name: "Hans de Bruyne",
    role: "Co-Founder & Managing Director",
    yearArrived: "2010",
    bio: "Hans founded his first consultancy, Total Quality Management (ATQ), while studying Commercial Electrical Engineering at Haagse Hoge School in The Hague. Over 20 years, he built extensive expertise in business, organizational consultancy, change management, OSHAH, and QS/QA for over 60 companies. In 2010, he relocated to Sint Maarten, partnering with Michel to pioneer luxury home automation across the Caribbean.",
    specialties: ["Commercial Electrical Engineering", "Lead MEP Project Coordination", "Lutron & Crestron Integration", "ISO/OSHA Quality Assurance"]
  }
];

export const ALL_PROJECTS: ProjectData[] = [
  {
    "slug": "aqua-resort",
    "title": "Aqua Resort",
    "subtitle": "LVT designed Conceptual MEP, Electrical &amp; HVAC Design",
    "region": "Caribbean",
    "country": "Cupecoy, Sint Maarten DWI",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d09a3d5e2d88ed4115a_Aqua%20Resort%202.webp",
    "descriptionParagraphs": [
      "Luxury Villa Technologies (LVT) was engaged to deliver the conceptual MEP design along with the electrical and HVAC system designs for Agua Resort, a luxury destination focused on guest comfort, sustainability, and operational excellence",
      "Aqua Resort is a real estate complex under construction in Cupecoy, Sint Maarten. Situated along the Caribbean Sea, the development includes a variety of residential options such as studios, condos, apartments, and high-end penthouses. The location offers views of Cupecoy&#x27;s sandy beaches and access to nearby amenities and activities. The project also includes facilities like boat berths to enhance convenience and functionality for residents.",
      "Designed the MEP conceptional designs, electrical design and HVAC. Plumbing was kept inhouse. The complete electrical design was based on a 3MW power consumption. Furthermore, LVT was contracted to execute the MEP bidding based on the RFPs.",
      "All plans were delivered in April 2024, in according with specifications an requirements."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d09a3d5e2d88ed4115a_Aqua%20Resort%202.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d09a3d5e2d88ed4115a_Aqua%20Resort%202-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d09a3d5e2d88ed4115a_Aqua%20Resort%202-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d09a3d5e2d88ed4115a_Aqua%20Resort%202-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d67ff98c0b0b09a03ae_Aqua%20Resort%203%20First%20Pour.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d67ff98c0b0b09a03ae_Aqua%20Resort%203%20First%20Pour-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d67ff98c0b0b09a03ae_Aqua%20Resort%203%20First%20Pour-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d63c89927e9851b3fb6_Aqua%20Resort%206.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d8325795e33968492ed_Aqua%20Resort%208.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d7572f867e069f1d4e9_Aqua%20Resort%2012.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d7df33fd582972b739a_Aqua%20Resort%2011.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d89952703dc6f1795b6_Aqua%20Resort%2014.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d56e75eb074ca7f0568_Aqua%20Resort%207.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d56e75eb074ca7f0568_Aqua%20Resort%207-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d56e75eb074ca7f0568_Aqua%20Resort%207-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d63c89927e9851b3fb6_Aqua%20Resort%206-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d63c89927e9851b3fb6_Aqua%20Resort%206-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d7572f867e069f1d4e9_Aqua%20Resort%2012-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d7572f867e069f1d4e9_Aqua%20Resort%2012-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d7df33fd582972b739a_Aqua%20Resort%2011-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d7df33fd582972b739a_Aqua%20Resort%2011-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d8325795e33968492ed_Aqua%20Resort%208-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d8325795e33968492ed_Aqua%20Resort%208-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d89952703dc6f1795b6_Aqua%20Resort%2014-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d89952703dc6f1795b6_Aqua%20Resort%2014-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "grey-cliff-ashville",
    "title": "Grey Cliff, Ashville",
    "subtitle": "Where LVT Integration Brings Innovation to Country Living.",
    "region": "Caribbean",
    "country": "Network Infrastructure &amp; Engineering",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f19e4579cdc0da7783030_Top%20view.webp",
    "descriptionParagraphs": [
      "Once completed, the property will feature a comprehensive technology overhaul, including a full network upgrade to Wi-Fi 6 for enhanced connectivity. The internet service provider was upgraded to Starlink, ensuring high-speed, reliable internet access. Additionally, the gate and garage doors were modernized with advanced automation for seamless functionality and improved convenience.",
      "This stunning property features 4 spacious bedrooms, 4 modern bathrooms, and 5,000 square feet of luxurious living space. Enjoy an all-year-round heated pool with a covered design, complemented by an exterior jacuzzi for ultimate relaxation. The estate also boasts a 4-car garage and offers breathtaking views of the Black Mountain, with complete privacy and no neighbors in sight. Perfectly blending serenity and sophistication, it delivers the ambiance of a high-end luxury country estate.",
      "As part of the upgrade, we installed the latest Wi-Fi 6 network infrastructure to enhance connectivity throughout the property. This included upgrading existing access points to provide faster speeds, improved coverage, and better support for multiple devices. Additionally, we modernized the gate and garage opening systems, integrating advanced automation technology for secure and seamless operation. These upgrades not only improve functionality and convenience but also ensure the property is equipped with the latest technology for a smarter and more efficient home.",
      "To be updated once the project has been completed"
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f19e4579cdc0da7783030_Top%20view.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f19e4579cdc0da7783030_Top%20view-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f19e4579cdc0da7783030_Top%20view-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f19dbdb79dad09e55a88a_Entrance.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "infinity-villas",
    "title": "Infinity Villas",
    "subtitle": "LVT designed the MEP and installed electrical and low-voltage systems.",
    "region": "Caribbean",
    "country": "Indigo Bay, Sint Maarten",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf439d3cb71cda94385f_Infinity%20Project%20Rendering.webp",
    "descriptionParagraphs": [
      "Luxury Villa Technologies (LVT) is responsible for the complete design and implementation of electrical systems, home automation, and security solutions for Infinity Villas at Indigo Bay, scheduled for completion in 2026. LVT oversees project management, MEP design, and the installation of high and low-voltage systems. Our scope includes fully integrated automation, covering lighting, climate control, blinds, access control, and seamless integration with the pool and sound systems. We have also designed the security and surveillance systems for the entire property, including an AI-powered gate attendant at the main entrance. Through our expertise, LVT ensures a sophisticated, efficient, and secure living environment within this exclusive development.",
      "Infinity Villas is an exclusive luxury development within the gated Indigo Bay community, spanning 12,750 m\u00b2 (3.128 acres). Construction began in 2023, featuring 12 high-end villas with private driveways, two-car garages, and glass elevators. Each villa offers over 400 m\u00b2 (4,200 sqft) of interior space, including two four-bedroom en-suite villas with private pools. Villa A has four en-suite bedrooms, while Villa B offers three. Both include a gym and entertainment room. The open-plan living area showcases Italian B&amp;B Italia and Aclines kitchens with Miele appliances, seamlessly extending to 120 m\u00b2 (1,300 sqft) of covered terraces, a heated infinity pool, and a jacuzzi overlooking the Caribbean Sea. Designed with premium materials and exclusive interiors by ELIE SAAB Maison, Infinity Villas offers an unparalleled blend of luxury, privacy, and sustainability in the heart of the Caribbean.",
      "Luxury Villa Technologies (LVT) played a pivotal role in the Infinity Villas project, delivering cutting-edge technology and seamless integration to enhance luxury living. LVT managed the project and designed the complete electrical installation, covering both high and low-voltage systems. The team developed and implemented a comprehensive home automation and system integration plan, including lighting design, climate control, motorized blinds and curtains, access control, and seamless integration with the pool and sound systems. Security and surveillance solutions were meticulously designed for the entire property, featuring an AI-powered gate attendant for the main entrance.",
      "Through innovation and precision, LVT will ensure that Infinity Villas offers an unparalleled blend of comfort, security, and smart luxury living. Scheduled to be completed 2026."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf439d3cb71cda94385f_Infinity%20Project%20Rendering.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf439d3cb71cda94385f_Infinity%20Project%20Rendering-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf74a60c08dd49b5ee3f_Villa%20Infinity%20-%20Pool%20Deck.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf74a60c08dd49b5ee3f_Villa%20Infinity%20-%20Pool%20Deck-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf74a60c08dd49b5ee3f_Villa%20Infinity%20-%20Pool%20Deck-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf74a60c08dd49b5ee3f_Villa%20Infinity%20-%20Pool%20Deck-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e9910c26fefa269be0c3b0_Construction%20Infinity%20Model%20-%20Hans%2C%20Bret%20and%20Erik.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8307ae315daf0016fc_Villa%20Infinity%20-%20Kitchen%20%26%20Dining.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8d19bb00b9b5339298_Villa%20Infinity%20-%20Pool%20seating.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf9fa342d10bf2884db9_Infinity%20garage.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacfacc9aff195028c3eef_Villa%20Infinity%20-%20Bathroom.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ead01107ae315daf00d7f0_Villa%20Infinity%20-%20Exterior.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e9910c26fefa269be0c3b0_Construction%20Infinity%20Model%20-%20Hans%2C%20Bret%20and%20Erik-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e9910c26fefa269be0c3b0_Construction%20Infinity%20Model%20-%20Hans%2C%20Bret%20and%20Erik-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e9910c26fefa269be0c3b0_Construction%20Infinity%20Model%20-%20Hans%2C%20Bret%20and%20Erik-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8307ae315daf0016fc_Villa%20Infinity%20-%20Kitchen%20%26%20Dining-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8307ae315daf0016fc_Villa%20Infinity%20-%20Kitchen%20%26%20Dining-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8307ae315daf0016fc_Villa%20Infinity%20-%20Kitchen%20%26%20Dining-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8d19bb00b9b5339298_Villa%20Infinity%20-%20Pool%20seating-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8d19bb00b9b5339298_Villa%20Infinity%20-%20Pool%20seating-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8d19bb00b9b5339298_Villa%20Infinity%20-%20Pool%20seating-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf9fa342d10bf2884db9_Infinity%20garage-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ead01107ae315daf00d7f0_Villa%20Infinity%20-%20Exterior-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ead01107ae315daf00d7f0_Villa%20Infinity%20-%20Exterior-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ead01107ae315daf00d7f0_Villa%20Infinity%20-%20Exterior-p-1080.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "la-samanna",
    "title": "La Samanna",
    "subtitle": "Post-Hurricane Irma Recovery - Telecommunication &amp; Infrastructure",
    "region": "Caribbean",
    "country": "Terres Basses, Saint Martin FWI",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e4d8933cfdc9d406cf9d_La%20Samanna%204.jpg",
    "descriptionParagraphs": [
      "In the aftermath of Hurricane Irma, La Semanna faced a critical challenge. The property needed to be fully operational within 7 days, yet nothing was in place. LVT stepped in, taking full control of the project, and ensured that everything was ready within one week, enabling the resort to reopen on time.",
      "La Samanna is a five-star beach resort in St. Martin, featuring 83 rooms and 8 villas. The resort offers direct beach access, multiple dining options, a spa, and recreational facilities. The villas provide additional space, private pools, and terraces. The property is designed to accommodate guests seeking both privacy and access to resort amenities.",
      "Our team first managed the entire project with a focus on efficiency and urgency. We designed and installed the fiber optic backbone, essential for supporting the resort\u2019s core infrastructure. After fusing and testing the network, we set up and configured multiple Intermediate Distribution Frames (IDFs) to ensure smooth data flow across the property. The next step was the deployment of over 100 IP-TV systems and more than 100 VoIP phones, restoring crucial entertainment and communication services to guests and staff alike. The Wi-Fi network required extensive verification and troubleshooting, and our team successfully repaired and optimized the network to deliver reliable connectivity throughout the property. We also made significant improvements to the server room, enhancing the overall performance and security of the infrastructure.",
      "Despite the immense challenges posed by post-hurricane conditions, LVT\u2019s expertise and commitment ensured that La Semana was able to open its doors in record time, fully equipped with modern, robust technology. This project demonstrated our ability to execute under pressure and deliver exceptional results."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e4d8933cfdc9d406cf9d_La%20Samanna%204.jpg",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e4d8933cfdc9d406cf9d_La%20Samanna%204-p-500.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e4d8933cfdc9d406cf9d_La%20Samanna%204-p-800.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e84d2ba2b03551fb881a_La%20Samanna%202.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e84d2ba2b03551fb881a_La%20Samanna%202-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cb68a1e551e426a4cf96_La%20Samanna%201.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e8ebbcfb31eb040322f4_La%20Samanna%203.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e860685d673047bc3321_La%20Samanna%206.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e8e4a855926ad43502d3_La%20Samanna%207.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e98a54dbfccf5ee6f7ba00_La%20Samanna%207.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205-p-500.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205-p-800.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205-p-1080.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cb68a1e551e426a4cf96_La%20Samanna%201-p-500.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cb68a1e551e426a4cf96_La%20Samanna%201-p-800.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cb68a1e551e426a4cf96_La%20Samanna%201-p-1080.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e98a54dbfccf5ee6f7ba00_La%20Samanna%207-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "palapa-marina",
    "title": "Palapa Marina",
    "subtitle": "LVT designed and installed high-speed, secure wired and wireless network infrastructure.",
    "region": "Caribbean",
    "country": "Simpson Bay, Sint Maarten DWI",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f861201e8ffb8f1376c2aa_Palapa%20Marina%2011.webp",
    "descriptionParagraphs": [
      "As part of Palapa Marina\u2019s commitment to delivering top-tier facilities and services, enhancing connectivity and infrastructure was a key priority. Luxury Villa Technologies (LVT) installed a high-performance network backbone across the Marina and upgraded our operational offices with an advanced network and billing platform, improving efficiency and service capabilities. To provide seamless connectivity, they deployed a comprehensive Wi-Fi blanket covering the entire Marina, extending from La Palapa to the far end, including 300 feet into the Simpson Bay Lagoon. Additionally, they established a dedicated Wi-Fi signal, enabling yachts to connect via fiber or copper for reliable, high-speed internet access. These upgrades significantly enhance the experience for both our team and valued yacht owners, ensuring a state-of-the-art, future-ready network.",
      "Palapa Marina is a premier yachting destination offering 20 mega yacht slips with state-of-the-art facilities. Designed to accommodate sailing and mega yachts ranging from 65\u2019 to 250\u2019, the marina supports vessels with a maximum draft of 17\u2019. Amenities include a fuel facility at every slip, freshwater supply, and electricity options of 220V, 380V, and 480V in single or three-phase configurations. Guests also benefit from high-speed Wi-Fi, ensuring seamless connectivity throughout the marina.",
      "Luxury Villa Technologies (LVT) played a pivotal role in enhancing the Marina\u2019s infrastructure by deploying a high-performance network backbone throughout the Marina and its operational offices. As part of this upgrade, LVT modernized the offices with an advanced network and optimized billing platform, improving overall efficiency. To ensure seamless connectivity, LVT installed a comprehensive Wi-Fi blanket covering the entire Marina, extending from the beginning of La Palapa to the far end, including 300 feet into the Simpson Bay Lagoon. Additionally, a dedicated Wi-Fi signal was established, providing yachts with the flexibility to connect via fiber or copper, ensuring reliable and high-speed internet access. Through these enhancements, LVT has equipped the Marina with a cutting-edge, scalable, and resilient network infrastructure, supporting both operational needs and yacht owners&#x27; connectivity demands.",
      "The upgrades at Palapa Marina have transformed the connectivity experience for both yacht owners and marina guests. With the newly installed high-performance network backbone and seamless Wi-Fi coverage, users now enjoy reliable, high-speed internet access throughout the entire Marina, including 300 feet into the Simpson Bay Lagoon. Whether onboard a yacht, at the docks, or in the operational offices, connectivity is fast, stable, and uninterrupted. The option to connect via fiber or copper ensures flexibility, catering to different needs and vessel requirements. These enhancements make remote work, streaming, and online communication effortless, allowing users to stay connected, conduct business, and enjoy their time at the Marina without connectivity concerns."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f861201e8ffb8f1376c2aa_Palapa%20Marina%2011.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f861201e8ffb8f1376c2aa_Palapa%20Marina%2011-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f861201e8ffb8f1376c2aa_Palapa%20Marina%2011-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f861201e8ffb8f1376c2aa_Palapa%20Marina%2011-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856cd6df191d8394133bd_Palapa%20Marina%204.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856cd6df191d8394133bd_Palapa%20Marina%204-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856e69778c4edc0292af8_Palapa%20Marina%203.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856ea0f46624a72140945_Palapa%20Marina%205.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856d7611297fd901cf99f_Palapa%20Marina%202.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856e00f46624a7213f52a_Palapa%20Marina%207.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856d3e0b8866162af1c24_Palapa%20Marina%208.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8603254c439c7c3ea06cd_Palapa%20Marina%2010.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f861c8b23d615192175ef9_Palapa%20Marina%2012.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856d3e0b8866162af1c24_Palapa%20Marina%208-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856d3e0b8866162af1c24_Palapa%20Marina%208-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8603254c439c7c3ea06cd_Palapa%20Marina%2010-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8603254c439c7c3ea06cd_Palapa%20Marina%2010-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8603254c439c7c3ea06cd_Palapa%20Marina%2010-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856d7611297fd901cf99f_Palapa%20Marina%202-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856e00f46624a7213f52a_Palapa%20Marina%207-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856e69778c4edc0292af8_Palapa%20Marina%203-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856ea0f46624a72140945_Palapa%20Marina%205-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "parliament-building-st-maarten",
    "title": "Parliament Building St. Maarten",
    "subtitle": "Integral Role in Tender Compilation: Expertly Shaping Technical &amp; Operational Framework",
    "region": "Caribbean",
    "country": "Sint Maarten, DWI",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f0e20f40c5b2ae6b7bb65_Parliament%20Building%201.jpg",
    "descriptionParagraphs": [
      "The St. Maarten Government\u2019s Ministry of Finance served as the principal entity for this project, with the primary objective of optimizing tax fund utilization by centralizing government offices for greater efficiency. The project adopted a comprehensive approach encompassing design, financing, construction, maintenance, and long-term sustainability. It aimed to support the future growth of Parliament operations while ensuring a zero-emission, environmentally sustainable building.\nAdditionally, the development sought to enhance parking capacity in Philipsburg with a 7-story parking garage, reducing reliance on third-party rental spaces for government offices and improving overall infrastructure efficiency.",
      "The project was designed to create a modern, centralized government hub in Sint Maarten, improving efficiency and accessibility. It includes the construction of a purpose-built Parliament Building to house the country&#x27;s legislative body, along with a dedicated parking garage to accommodate government officials, staff, and visitors. With a focus on expanding office space with additional government office buildings on both the Ocean Side and Pond Side, further centralizing operations. Finally, it introduces a Bus &amp; Taxi Terminal, enhancing public transportation access and connectivity. The phased approach ensures a sustainable, well-integrated infrastructure to support effective governance and public service.",
      "Luxury Villa Technology played a pivotal role in this project, offering expertise across multiple key areas. The team was responsible for developing the technical, financial, and operational specifications, ensuring the design met all project requirements. Additionally, LVT prepared comprehensive tender documentation and efficiently managed the entire tender process, ensuring a seamless and transparent procurement phase. Their expertise also extended to advising the Council of Ministers, providing strategic insights and recommendations to support informed decision-making throughout the project&#x27;s development.",
      "The project is still in progress and we look forward to its completion."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f0e20f40c5b2ae6b7bb65_Parliament%20Building%201.jpg",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f0e20f40c5b2ae6b7bb65_Parliament%20Building%201-p-500.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f0e20f40c5b2ae6b7bb65_Parliament%20Building%201-p-800.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f0ed4ff01e57af148b145_Parliament%20Building%202.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67af77c33e13dcff4515bfab_SXM%20Flag.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f0ed4ff01e57af148b145_Parliament%20Building%202-p-500.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f0ed4ff01e57af148b145_Parliament%20Building%202-p-800.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67af77c33e13dcff4515bfab_SXM%20Flag-p-500.jpg",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "silcott-meadow-place",
    "title": "Silcott Meadow Place",
    "subtitle": "LVT System Integration: Transforming Country Homes with Technology",
    "region": "Caribbean",
    "country": "Home Automation &amp; System Integration",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f1f424f844575ced70840_Main%20building.webp",
    "descriptionParagraphs": [
      "In 2020, we were honored to bring our expertise to Silcott Meadow Estate in Virginia after successfully delivering a comprehensive technical integration for the client\u2019s villa in Sint Maarten, Villa Bella Vita. Impressed by our work in creating a seamless entertainment and automation system in their vacation property, the client entrusted us with upgrading their primary residence.",
      "Amazing custom estate home on 3+ acres w/views, 7316 fin sq ft. 5 bedrooms, 4.5 bathrooms, 3-car garage, Brazilian cherry hardwood. Marble foyer, Gourmet kitchen, sprinkler system, fencing, custom lighting &amp;landscaping, dual staircases,1st floor study,&amp; sun rm, luxury master suite with 2 walk in closets, wet bar, fireplace, sitting room, wine room, media room, Plantation shutters.",
      "We delivered a tailored solution by: Enhancing the network infrastructure with Quality of Service (QoS) for optimal streaming performance. Balancing internet traffic across dual 1 Gbps fiber ISL connections to ensure uninterrupted 4K streaming. Automating media management for an intuitive and unified experience.",
      "The project successfully delivered a high-performance, scalable media system tailored to the client&#x27;s needs. With the ability to handle 12 simultaneous 4K streams from a custom Plex server, the solution seamlessly integrates the client\u2019s extensive media library and preferred streaming platforms. The result is a smooth, uninterrupted entertainment experience across the estate, ensuring all users can access high-quality content without lag or buffering. Additionally, this project showcases the ability to replicate and scale innovative solutions across multiple properties, guaranteeing a consistent, top-tier experience tailored to the client&#x27;s lifestyle and entertainment demands."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f1f424f844575ced70840_Main%20building.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f1f424f844575ced70840_Main%20building-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "sint-maarten-government-building",
    "title": "SXM Government Building",
    "subtitle": "Optimizing Facility Functionality and User Experience",
    "region": "Caribbean",
    "country": "Philipsburg, Sint Maarten DWI",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f851ed128fd1a90f1fc270_SXM_regering%204.webp",
    "descriptionParagraphs": [
      "The scope of work included the full design, implementation, and finalization of Mechanical, Electrical, and Plumbing (MEP) systems to ensure operational reliability and compliance with industry standards. The ICT backbone network was upgraded to ensure connectivity and support advanced technology solutions. Vendor and contractor management was conducted throughout the project to ensure seamless integration and timely delivery of services. Additionally, the parking lot was finalized, enhancing accessibility and usability for visitors and staff. A secure document handling system was installed to manage sensitive documents, ensuring data protection and operational efficiency. Efficient logistics and operational workflows were designed for the Public Service Center to optimize service delivery and resource utilization. End-to-end project management was provided to ensure the project was completed on time, within budget, and to the highest quality standards. This turnkey solution reflects our commitment to delivering professional, innovative, and sustainable services tailored to our clients&#x27; needs.",
      "Office building for 600 fulltime employees housing the Government of Sint Maarten. The building was partially finished 8 years ago and stood empty. Financed by the new owner of the building, with intense input from the users. The mandate was to finish the New Government Building to be used in 4 months.",
      "Luxury Villa Technologies served as the Project Director, leading a dedicated 5-member team to successfully complete the project. The team finalized all outstanding systems, construction, paving, and interior work, ensuring the facility was fully operational. Additionally, we designed an efficient customer flow for the Public Service Center to enhance functionality and user experience. Critical systems, including the electrical network, IT backbone, fire suppression systems, plumbing, and access management, were thoroughly verified, repaired, and upgraded. Our comprehensive approach ensured the project was completed to the highest standards of quality and efficiency.",
      "This turnkey solution reflects our commitment to delivering professional, innovative, and sustainable services tailored to our clients&#x27; needs."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f851ed128fd1a90f1fc270_SXM_regering%204.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f851ed128fd1a90f1fc270_SXM_regering%204-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f851ed128fd1a90f1fc270_SXM_regering%204-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f851ed128fd1a90f1fc270_SXM_regering%204-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f851ed128fd1a90f1fc270_SXM_regering%204-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f851ed128fd1a90f1fc270_SXM_regering%204-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f851ed128fd1a90f1fc270_SXM_regering%204-p-2600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f851ed128fd1a90f1fc270_SXM_regering%204-p-3200.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85233cb12092b580e6dac_SXM_regering%207.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85233cb12092b580e6dac_SXM_regering%207-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85233cb12092b580e6dac_SXM_regering%207-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f852a62cc7181d1517b1bd_SXM_regering%2012.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85248bb30b6b06e6ba3d4_SXM_regering%208.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85250611297fd901810f8_SXM_regering%206.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8525786a40d13edb54d11_SXM_regering%205.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85260a695fae68bb2845d_SXM_regering%2010.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f852659778c4edc0245c0d_SXM_regering%2011.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f852a62cc7181d1517b1bd_SXM_regering%2012-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f852a62cc7181d1517b1bd_SXM_regering%2012-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85248bb30b6b06e6ba3d4_SXM_regering%208-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85260a695fae68bb2845d_SXM_regering%2010-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f852659778c4edc0245c0d_SXM_regering%2011-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f852659778c4edc0245c0d_SXM_regering%2011-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "the-lake-house-lake-james",
    "title": "The Lake House / Lake James",
    "subtitle": "LVT Integration: Bringing the Future to a Country Retreat.",
    "region": "Caribbean",
    "country": "Lights, Access, Security, Sound &amp; Video",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f159613a54e5fa5b2930c_Main%20building%20OLD%201.jpg",
    "descriptionParagraphs": [
      "As part of the extensive landscaping project, LVT was hired to create a lighting design, taking into account local and home-owners association&#x27;s light pollution restrictions. In addition, we installed High-speed Starlink Internet and property-wide Wi-Fi 6 coverage. Last but not least, we integrated Alexa voice for light controls.",
      "This 4-bedroom, 3-bathroom home, covering 3,050 square feet, is tucked away in the peaceful Black Mountains. Offering stunning views of Lake James, the property includes a private boat pier and provides a secluded setting, combining privacy with natural beauty.",
      "As part of an extensive landscaping project, LVT was engaged to design and implement a comprehensive outdoor lighting solution, carefully adhering to local regulations and homeowners&#x27; association restrictions on light pollution. In addition, we provided high-speed connectivity by installing Starlink Internet and delivering seamless property-wide Wi-Fi 6 coverage. To enhance convenience and functionality, we also integrated Alexa voice control for effortless management of the lighting system.",
      "Unfortunately, on September 29th, 2024, Hurricane Helene caused significant damage to the property due to torrential rains. The project is set to resume and is expected to be completed by spring 2025. Unfortunately, on September 29th, 2024, Hurricane Helene caused significant damage to the property due to torrential rains. The project is set to resume and is expected to be completed by Summer 2025."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f159613a54e5fa5b2930c_Main%20building%20OLD%201.jpg",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f159613a54e5fa5b2930c_Main%20building%20OLD%201-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678c16c6575c4b6f1de0f27b_The%20Lake%20House%20construction%201.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678c16c6575c4b6f1de0f27b_The%20Lake%20House%20construction%201-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678c16c6575c4b6f1de0f27b_The%20Lake%20House%20construction%201-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678c16c6575c4b6f1de0f27b_The%20Lake%20House%20construction%201-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f15fe07ce7a6ac51cb49c_Fire%20pit%20old.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f15d7792fa1f83bb3f16d_The%20Lake%20House%20entrance%201.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954b79aaf57ddaa335d732_The%20Lake%20House%20Construction%203.jpeg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954be7373c442b196622d3_The%20Lake%20House%20Waterfall.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954c9602db75d797e5d858_The%20Lake%20House%20Driveway%20completed.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954d1ef2c0ba98f9a03642_The%20Lake%20House%20Jetty.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67dd8892e6a7910526c6d515_Entrance%20from%20above.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954b79aaf57ddaa335d732_The%20Lake%20House%20Construction%203-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954b79aaf57ddaa335d732_The%20Lake%20House%20Construction%203-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954b79aaf57ddaa335d732_The%20Lake%20House%20Construction%203-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954b79aaf57ddaa335d732_The%20Lake%20House%20Construction%203-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954b79aaf57ddaa335d732_The%20Lake%20House%20Construction%203-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954b79aaf57ddaa335d732_The%20Lake%20House%20Construction%203-p-2600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954b79aaf57ddaa335d732_The%20Lake%20House%20Construction%203-p-3200.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f15cd135844d5a6d30852_The%20Lake%20House%20Driveway%201%20May%202024.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f15cd135844d5a6d30852_The%20Lake%20House%20Driveway%201%20May%202024-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f15cd135844d5a6d30852_The%20Lake%20House%20Driveway%201%20May%202024-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/674f15cd135844d5a6d30852_The%20Lake%20House%20Driveway%201%20May%202024-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954be7373c442b196622d3_The%20Lake%20House%20Waterfall-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954be7373c442b196622d3_The%20Lake%20House%20Waterfall-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954be7373c442b196622d3_The%20Lake%20House%20Waterfall-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67dd8892e6a7910526c6d515_Entrance%20from%20above-p-500.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67dd8892e6a7910526c6d515_Entrance%20from%20above-p-800.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67dd8892e6a7910526c6d515_Entrance%20from%20above-p-1080.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954c9602db75d797e5d858_The%20Lake%20House%20Driveway%20completed-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954c9602db75d797e5d858_The%20Lake%20House%20Driveway%20completed-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954c9602db75d797e5d858_The%20Lake%20House%20Driveway%20completed-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954d1ef2c0ba98f9a03642_The%20Lake%20House%20Jetty-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67954d1ef2c0ba98f9a03642_The%20Lake%20House%20Jetty-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "villa-amanzi",
    "title": "Villa Amanzi",
    "subtitle": "Experience the Height of Luxury Living in the Caribbean, Smarter.",
    "region": "Caribbean",
    "country": "Baie Rouge, Saint Martin FWI",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678c25698f30e8e89ce8adca_Final%20rendering%20Villa%20Amanzi.jpeg",
    "descriptionParagraphs": [
      "LVT delivered a cutting-edge solution tailored to the owners&#x27; requests, including a state-of-the-art security system, sound systems throughout common areas, and SONOS audio paired with Samsung Smart TVs in the bathrooms. A surround-sound system was installed for the living room TV area, enhancing entertainment. To ensure high-speed and reliable connectivity, we integrated two Starlink connections alongside a local wireless ISP for redundancy, complemented by full property-wide Wi-Fi 6E coverage. Exterior doors were secured with advanced access control, seamlessly integrated for effortless management and a luxurious living experience.",
      "Gorgeous 6-bedroom with ensuite bathrooms, Gym and Sauna, Jacuzzi, free-form negative-edge swimming pool, and private natural well.",
      "For this luxury villa, LVT delivered seamless home automation and system integration using Control4. A state-of-the-art security system, multi-zone sound in common areas, SONOS audio with Samsung Smart TVs in bathrooms, and a living room surround-sound system were unified into one platform. High-speed connectivity was ensured with dual Starlink connections, a local ISP for redundancy, and full-property Wi-Fi 6E. Exterior doors were secured with advanced access control, all centrally managed for a secure, connected, and luxurious living experience.",
      "Once completed, all technical system will be controllable and accessible via the Control 4 app, from anywhere in the world as long as there is Internet access.",
      "Continuous upgrades are taking place as we come closer to the delivery date, such as the change from Apple TV to Amazon Firesticks 4K+ to provide enhanced control and user experience."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678c25698f30e8e89ce8adca_Final%20rendering%20Villa%20Amanzi.jpeg",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678c25698f30e8e89ce8adca_Final%20rendering%20Villa%20Amanzi-p-500.jpeg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678c25698f30e8e89ce8adca_Final%20rendering%20Villa%20Amanzi-p-800.jpeg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678c25698f30e8e89ce8adca_Final%20rendering%20Villa%20Amanzi-p-1080.jpeg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e98e1eda2413181d151584_Villa%20Amanzi%20Construction%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "villa-avanti",
    "title": "Villa Avanti",
    "subtitle": "LVT installed a high-speed Starlink internet system for reliable connectivity.",
    "region": "Caribbean",
    "country": "Terres Basses, Saint Martin FWI",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e99deb1d3c3a715604a717_Villa%20Avanti%20Internet.webp",
    "descriptionParagraphs": [
      "Luxury Villa Technologies enhanced Villa Avanti with a fully integrated Building Management System, ensuring seamless control over all technical installations, from lighting and climate to security and entertainment. By integrating these systems into the existing Home Automation platform, residents can effortlessly manage their environment through a centralized interface. To ensure fast and reliable connectivity, Starlink high-speed internet was installed, providing uninterrupted access for work, streaming, and communication. This integration elevates Villa Avanti\u2019s functionality, offering a refined living experience where comfort, efficiency, and technology blend seamlessly.",
      "Villa Avanti is a five-bedroom residence in Terres Basses, Saint Martin, featuring a gated entrance, ocean views, and an L-shaped saltwater pool with a poolside gazebo. The interior showcases contemporary African-themed d\u00e9cor, Manutti and Roche Bobois furnishings, and a fully equipped kitchen with Wolf and Sub Zero appliances. An outdoor dining area with a gas grill complements the space. Each king-size bedroom has an en-suite bathroom with rain showers, while the master suite includes a private terrace and jacuzzi. One bedroom is wheelchair accessible. Additional features include a two-car garage, desalination plant, purified water dispensers, a cooling misting system, and ocean views from every room.",
      "Luxury Villa Technologies played a key role in enhancing Villa Avanti by implementing a comprehensive Building Management System that oversees all technical installations, ensuring seamless operation and energy efficiency. The company integrated these systems into the existing Home Automation platform, allowing for centralized control of lighting, climate, security, and entertainment features. Additionally, Luxury Villa Technologies provided Starlink high-speed internet, ensuring reliable and fast connectivity throughout the property, essential for both remote work and entertainment. This integration enhances Villa Avanti\u2019s functionality, convenience, and overall luxury living experience.",
      "Residents and guests of Villa Avanti experience seamless control over their environment, with all technical installations managed effortlessly through a centralized system. Lighting, climate, security, and entertainment settings adjust intuitively to their preferences, creating a comfortable and efficient living space. High-speed Starlink internet ensures uninterrupted connectivity for work, streaming, and communication, no matter where they are on the property. The integration of these systems enhances convenience, allowing users to enjoy a luxurious, fully connected home with minimal effort."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e99deb1d3c3a715604a717_Villa%20Avanti%20Internet.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e99deb1d3c3a715604a717_Villa%20Avanti%20Internet-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e99deb1d3c3a715604a717_Villa%20Avanti%20Internet-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e99deb1d3c3a715604a717_Villa%20Avanti%20Internet-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e99deb1d3c3a715604a717_Villa%20Avanti%20Internet-p-1600.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "villa-bella-vita",
    "title": "Villa Bella Vita",
    "subtitle": "First SMART home on St. Maarten and in the Caribbean",
    "region": "Caribbean",
    "country": "Pelican Keys, Sint Maarten",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp",
    "descriptionParagraphs": [
      "This project involved the complete renovation of a 25-year-old villa, transforming it into a modern, minimalistic, yet warm and inviting space. Designed primarily as a high-end rental property, the villa is now fully self-sufficient, energy-efficient, and equipped with cutting-edge automation. A dedicated mini data center and advanced power management systems are integrated into the design, all centrally managed through a Building Management System (BMS).",
      "This 10,000 sq. ft. residence spans six floors and features seven en-suite bedrooms, along with a gym, sauna, movie theater, and a caretaker\u2019s residence. Its energy systems include 35kWh solar production, 135kWh Tesla Powerwalls, and a 65kWh 2-phase backup generator, all Tesla-powered for efficient energy management. Additional highlights include a temperature-controlled pool, outdoor kitchen, and a security office. The design and technology integration were contributed by LVT, ensuring a modern, high-performance living space.",
      "LVT implemented state-of-the-art fiber optic infrastructure, ensuring top-tier internet speeds and seamless automation of daily functions. The villa is equipped with energy-efficient solutions aimed at reducing its carbon footprint, such as solar production and Tesla Powerwalls for sustainable power storage. Entertainment enhancements include a SONOS sound system, IP-TV, and PLEX for a fully immersive home theater experience. Our 24/7/365 Service Level Agreement (SLA) ensures ongoing, reliable maintenance and support, keeping the villa&#x27;s operations smooth and efficient.",
      "The villa is now an energy-efficient, fully automated, luxurious retreat that meets the needs of high-end rental guests. Its modern yet inviting design, combined with advanced technology, ensures self-sufficiency, sustainability, and exceptional comfort for all occupants. LVT\u2019s technology integration has positioned the property as a premier rental with cutting-edge entertainment and energy systems, while minimizing environmental impact through smart energy management.",
      "Since the initial system integration in January 2019, we have continually enhanced Villa Bella Vita\u2019s technological capabilities. In 2024, a significant upgrade was implemented, focusing on networking, security, access control, surveillance, and internet connectivity to elevate the overall experience for both guests and the villa owner. The latest UniFi Enterprise system was deployed, introducing cutting edge solutions in access control, surveillance, and enterprise networking. This comprehensive upgrade ensures that the villa remains secure, highly connected, and optimized for all users Access Control with UniFi AI The villa\u2019s access control system was upgraded with UniFi AI technology, which offers biometric recognition and AI powered facial detection for streamlined entry management. This system intelligently monitors access points and adapts security protocols based on user behavior patterns, providing enhanced protection while maintaining convenience for authorized guests and staff. Surveillance Systems UniFi\u2019s AI powered camera systems were installed, featuring high-definition video monitoring with intelligent detection and tracking capabilities. The system provides real time alerts for unusual activity, ensuring constant security across the property. Enterprise Networking The villa\u2019s network infrastructure was updated with UniFi\u2019s enterprise grade networking solutions, delivering high speed, seamless Wi Fi coverage across all areas. Advanced features such as load balancing and network isolation ensure optimal performance during large events and heavy usage periods. Internet Connectivity The internet system was significantly upgraded with the installation of two Starlink V3 dishes. These high-speed satellite internet connections offer reliable, fast internet access for all villa occupants, whether for streaming, video conferencing, or daily online activities. The dual Starlink setup guarantees uninterrupted connectivity, even during peak usage times or large events. This 2024 technology upgrade reinforces Villa Bella Vita\u2019s position as a leader in luxury living, providing a secure, connected, and high-performance environment for both owners and guests."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28-p-2600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28-p-3200.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66dc8eb816867a4fff9055df_Image-6.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66dc8eb8b1ddeddd0bcbd1c2_Image-5.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66dc8eb8e1e99fbb3947a059_Image-4.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66dc8eb823132c83a8b8f525_Image-3.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66dc8eb881bf97e670d0664d_Image-2.jpg",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66dc8eb8f5bef4188126df75_Image-1.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66dc8eb894e5c39337223645_Image.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca79a7388431918c7a45_drone%20bella%20vita-42a.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca79a7388431918c7a45_drone%20bella%20vita-42a-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca79a7388431918c7a45_drone%20bella%20vita-42a-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca79a7388431918c7a45_drone%20bella%20vita-42a-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca79a7388431918c7a45_drone%20bella%20vita-42a-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca79a7388431918c7a45_drone%20bella%20vita-42a-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca79a7388431918c7a45_drone%20bella%20vita-42a-p-2600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca79a7388431918c7a45_drone%20bella%20vita-42a-p-3200.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf05b97cf81a368f6af9_Bella%20Vita-144.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf05b97cf81a368f6af9_Bella%20Vita-144-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf05b97cf81a368f6af9_Bella%20Vita-144-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf05b97cf81a368f6af9_Bella%20Vita-144-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf05b97cf81a368f6af9_Bella%20Vita-144-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf05b97cf81a368f6af9_Bella%20Vita-144-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf05b97cf81a368f6af9_Bella%20Vita-144-p-2600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf05b97cf81a368f6af9_Bella%20Vita-144-p-3200.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf262842e78e7a263186_Bella%20Vita-141.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf262842e78e7a263186_Bella%20Vita-141-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf262842e78e7a263186_Bella%20Vita-141-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf262842e78e7a263186_Bella%20Vita-141-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf262842e78e7a263186_Bella%20Vita-141-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf262842e78e7a263186_Bella%20Vita-141-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf262842e78e7a263186_Bella%20Vita-141-p-2600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf262842e78e7a263186_Bella%20Vita-141-p-3200.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6-p-2600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6-p-3200.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5d86ccb452a771a3ef727_Bella%20Vita-37.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5d86ccb452a771a3ef727_Bella%20Vita-37-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5d86ccb452a771a3ef727_Bella%20Vita-37-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5d86ccb452a771a3ef727_Bella%20Vita-37-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5d86ccb452a771a3ef727_Bella%20Vita-37-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5d86ccb452a771a3ef727_Bella%20Vita-37-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5d86ccb452a771a3ef727_Bella%20Vita-37-p-2600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5d86ccb452a771a3ef727_Bella%20Vita-37-p-3200.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf35bdb59a765024f95c_Bella%20Vita-111.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf35bdb59a765024f95c_Bella%20Vita-111-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf35bdb59a765024f95c_Bella%20Vita-111-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf35bdb59a765024f95c_Bella%20Vita-111-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf35bdb59a765024f95c_Bella%20Vita-111-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf35bdb59a765024f95c_Bella%20Vita-111-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf35bdb59a765024f95c_Bella%20Vita-111-p-2600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf35bdb59a765024f95c_Bella%20Vita-111-p-3200.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "villa-cest-la-vie",
    "title": "Villa C&#x27;est La Vie",
    "subtitle": "LVT redesigned the local area network and implemented remote monitoring capabilities.",
    "region": "Caribbean",
    "country": "Terres Basses, Saint Martin FWI",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23552e4f0552797acae2_C%27est%20la%20Vie%2017.webp",
    "descriptionParagraphs": [
      "Enhancement of the Wi-Fi coverage and network capacity across the entire property, ensuring seamless connectivity, reliability, and future-proof performance. The upgrade set to eliminate dead zones, support high-demand applications, and integrate advanced security and scalable bandwidth for evolving needs. Designed to support uninterrupted smart automation, entertainment, and remote work, the new infrastructure set to deliver cutting-edge speed and efficiency.",
      "Luxurious beachfront property located in the exclusive Terres Basses area of St. Martin. 6 spacious bedrooms, each with an ensuite bathroom, including outdoor showers. An expansive open-plan living area that blends indoor and outdoor spaces. Heated pool with an in-pool bar and Jacuzzi, direct beach access to the pristine shores of Plum Bay. State-of-the-art kitchen, media room providing a cinematic experience, and fully equipped fitness room.",
      "LVT played a pivotal role in ensuring network redundancy, reliability, and scalability for the property. To achieve this, we designed and installed a fiber ring, creating a flexible and future-proof infrastructure that allows for seamless expansion, including additional cameras, IoT devices, and smart automation systems. Our team handled the design, installation, fusion, and testing of a high-performance fiber optic backbone and Wi-Fi network, ensuring seamless coverage and uninterrupted connectivity. We also installed, configured, and deployed Intermediate Distribution Frames (IDFs) to optimize network performance across the estate. Further improvements included enhancing the server room to support increased capacity and integrating Starlink high-speed internet, ensuring fast, reliable connectivity even in remote locations.",
      "Following the comprehensive network upgrade, the property owner and guests now enjoy seamless, high-speed Wi-Fi coverage across the entire estate. The enhanced fiber optic backbone ensures reliable, uninterrupted connectivity, supporting smart home automation, entertainment systems, and IoT devices with ease. With the integration of Starlink high-speed internet, the property now benefits from fast and stable connectivity, even in remote locations. Whether for streaming, remote work, or high-bandwidth applications, the upgraded infrastructure provides a future-proof, high-performance network designed for ultimate convenience and flexibility.",
      "An additional upgrade integrated Starlink high-speed internet and enhanced Wi-Fi coverage for the property manager&#x27;s cottage, ensuring seamless connectivity. Ongoing support and maintenance are provided on an on-call basis for optimal performance and reliability."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23552e4f0552797acae2_C%27est%20la%20Vie%2017.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23552e4f0552797acae2_C%27est%20la%20Vie%2017-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23552e4f0552797acae2_C%27est%20la%20Vie%2017-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23552e4f0552797acae2_C%27est%20la%20Vie%2017-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ea23f040ff9b1259547_C%27est%20la%20Vie%2010.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ea23f040ff9b1259547_C%27est%20la%20Vie%2010-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ea23f040ff9b1259547_C%27est%20la%20Vie%2010-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ea23f040ff9b1259547_C%27est%20la%20Vie%2010-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0e94adb5cd6dda451e32_C%27est%20la%20Vie%2012.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0f71dbe2c0cec884248b_C%27est%20la%20Vie%2015.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0efc3f040ff9b1261668_C%27est%20la%20Vie%2014.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef22fdf39426af38e8cb92_C%27est%20la%20Vie%2016.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0eb12a628c4b8d915122_C%27est%20la%20Vie%2013.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef115cedf971dd894feea7_C%27est%20la%20Vie%2011.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef115cedf971dd894feea7_C%27est%20la%20Vie%2011-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef115cedf971dd894feea7_C%27est%20la%20Vie%2011-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef115cedf971dd894feea7_C%27est%20la%20Vie%2011-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef115cedf971dd894feea7_C%27est%20la%20Vie%2011-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0f71dbe2c0cec884248b_C%27est%20la%20Vie%2015-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0f71dbe2c0cec884248b_C%27est%20la%20Vie%2015-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0f71dbe2c0cec884248b_C%27est%20la%20Vie%2015-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef22fdf39426af38e8cb92_C%27est%20la%20Vie%2016-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef22fdf39426af38e8cb92_C%27est%20la%20Vie%2016-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef22fdf39426af38e8cb92_C%27est%20la%20Vie%2016-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0eb12a628c4b8d915122_C%27est%20la%20Vie%2013-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0efc3f040ff9b1261668_C%27est%20la%20Vie%2014-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0efc3f040ff9b1261668_C%27est%20la%20Vie%2014-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0efc3f040ff9b1261668_C%27est%20la%20Vie%2014-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0efc3f040ff9b1261668_C%27est%20la%20Vie%2014-p-1600.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "villa-loliver",
    "title": "Villa L&#x27;Oliver",
    "subtitle": "Smart Automation and Integration for a Seamless, Luxurious, and Energy-Efficient Villa.",
    "region": "Caribbean",
    "country": "Terres Basses, Saint Martin",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5f7f8b0053255d978314_Villa%20Oliver%20updated%20construction%202.webp",
    "descriptionParagraphs": [
      "At Villa L&#x27;Oliver, we are providing a comprehensive turnkey solution, integrating smart home automation, dynamic lighting control, advanced security and surveillance, multi-room audio/video systems, and high-performance Wi-Fi. Our work also included smart climate control and custom user interfaces, allowing the homeowner to effortlessly manage all systems, creating a seamless, luxurious, and energy-efficient living environment tailored to their lifestyle.",
      "Complete home automation integration Dynamic lighting control with energy efficiency Advanced security and surveillance systems Multi-room audio/video distribution High-performance Wi-Fi network across the property Smart climate control with remote access Custom user interfaces for effortless control of all systems Seamless, luxurious experience tailored to the homeowner&#x27;s lifestyle",
      "Full home automation integration for seamless control, custom lighting design with energy efficiency and ambiance settings, advanced security system with real-time surveillance and mobile alerts, multi-room audio/video system for personalized entertainment, high-performance Wi-Fi and network infrastructure for reliable connectivity, smart climate control for optimal comfort and energy savings, custom control interfaces for easy system management, and tailored luxury solutions to enhance lifestyle and living experience.",
      "The Villa L&#x27;Oliver project is set to be completed in the 3rd quarter of 2025. Upon completion, the villa will feature a fully integrated luxury smart home system, offering seamless control over lighting, security, entertainment, climate, and connectivity. The result will be a sophisticated, energy-efficient, and effortlessly managed living space tailored to the homeowner&#x27;s vision and lifestyle."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5f7f8b0053255d978314_Villa%20Oliver%20updated%20construction%202.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5f7f8b0053255d978314_Villa%20Oliver%20updated%20construction%202-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5f7f8b0053255d978314_Villa%20Oliver%20updated%20construction%202-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f866225b55a933ccca37ab_Biological%20Pond%20with%20Creative%20Paevers.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86644072fa1c002b5ce1f_Utility%20trench%203%20of%204.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f865cbf62844f52c4276bb_Villa%20L%27Oliver%20cut.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f866190d6c43de98964713_Villa%20Oliver%202.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f866225b55a933ccca37ab_Biological%20Pond%20with%20Creative%20Paevers-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f866225b55a933ccca37ab_Biological%20Pond%20with%20Creative%20Paevers-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f866225b55a933ccca37ab_Biological%20Pond%20with%20Creative%20Paevers-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f865cbf62844f52c4276bb_Villa%20L%27Oliver%20cut-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f865cbf62844f52c4276bb_Villa%20L%27Oliver%20cut-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5fafaf3d058460ac3828_Villa%20Oliver%20updated%20construction%201.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5fafaf3d058460ac3828_Villa%20Oliver%20updated%20construction%201-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5fafaf3d058460ac3828_Villa%20Oliver%20updated%20construction%201-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8663a18d76f980d01d600_Villa%20Oliver%203.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8663a18d76f980d01d600_Villa%20Oliver%203-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8663a18d76f980d01d600_Villa%20Oliver%203-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8663a18d76f980d01d600_Villa%20Oliver%203-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86644072fa1c002b5ce1f_Utility%20trench%203%20of%204-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86644072fa1c002b5ce1f_Utility%20trench%203%20of%204-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5fced1dad70d60be43f5_Villa%20Oliver%20updated%20construction%203.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5fced1dad70d60be43f5_Villa%20Oliver%20updated%20construction%203-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/678e5fced1dad70d60be43f5_Villa%20Oliver%20updated%20construction%203-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "villa-parsons",
    "title": "Villa Parsons",
    "subtitle": "LVT provided full property high-speed internet Wi-Fi and surveillance system",
    "region": "Caribbean",
    "country": "Little Bay, Sint Maarten DWI",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ab5286510d6f56da547_Villa%20Parson%2010.webp",
    "descriptionParagraphs": [
      "As part of a comprehensive rebuilding and remodeling project, Luxury Villa Technologies provided a fully integrated technology solution, enhancing the villa\u2019s network, security, and entertainment systems. A high-speed network infrastructure was installed, featuring Starlink internet to ensure seamless connectivity throughout the property. To enhance security and access control, LVT implemented a surveillance system, smart locks, a gate intercom, and RFID access control, providing both safety and convenience. The entertainment experience was upgraded with a theater-quality sound system in the living room and a pool underwater sound system for immersive audio. Additionally, a hybrid pool and jacuzzi heating system was installed to optimize temperature control while maintaining energy efficiency.",
      "Villa Parson is a private residence with panoramic views of Indigo Bay. The property consists of a four-bedroom main villa, each bedroom featuring an ensuite bathroom. Additionally, there is a two-bedroom guest house and a one-bedroom ensuite suite for additional accommodations. The villa includes a gym, a pool with an integrated jacuzzi, and a pickleball court. Designed for comfort and functionality, the property offers a balance of indoor and outdoor living spaces with modern amenities.",
      "A full network infrastructure was designed and installed to support high-speed Starlink internet, enabling reliable connectivity across all indoor and outdoor spaces. Smart locks and access control, along with a gate intercom and Smart RFID system, enhance security and provide convenient, keyless entry. The surveillance and security system ensures 24/7 monitoring, offering peace of mind with strategically placed cameras and remote access capabilities. For entertainment, a theater-quality sound system was integrated into the living room, while the pool features an underwater sound system, creating a unique audio experience. The hybrid pool and jacuzzi heating system was installed to optimize energy efficiency and maintain ideal water temperatures.",
      "Luxury Villa Technologies delivered a fully connected, secure, and entertainment-ready environment, enhancing the overall functionality and experience of Villa Parson."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ab5286510d6f56da547_Villa%20Parson%2010.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ab5286510d6f56da547_Villa%20Parson%2010-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ab5286510d6f56da547_Villa%20Parson%2010-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ab5286510d6f56da547_Villa%20Parson%2010-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85acb16ce4f8e30fc5e05_Villa%20Parson%20Pool%201.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85acb16ce4f8e30fc5e05_Villa%20Parson%20Pool%201-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85acb16ce4f8e30fc5e05_Villa%20Parson%20Pool%201-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ad31af1d6cc79bcae8a_Villa%20Parson%201.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ade0da90629503b0032_Villa%20Parson%205.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ad816ce4f8e30fc6623_Villa%20Parson%206.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85af816ce4f8e30fc8531_Villa%20Parson%20Pool%202.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85af1b79368c8eb47d580_Villa%20Parson%208.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85aeb16ce4f8e30fc7b29_Villa%20Parson%207.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ad31af1d6cc79bcae8a_Villa%20Parson%201-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ad31af1d6cc79bcae8a_Villa%20Parson%201-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ad816ce4f8e30fc6623_Villa%20Parson%206-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ad816ce4f8e30fc6623_Villa%20Parson%206-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ad816ce4f8e30fc6623_Villa%20Parson%206-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ade0da90629503b0032_Villa%20Parson%205-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ade0da90629503b0032_Villa%20Parson%205-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85ade0da90629503b0032_Villa%20Parson%205-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85aeb16ce4f8e30fc7b29_Villa%20Parson%207-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85aeb16ce4f8e30fc7b29_Villa%20Parson%207-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85aeb16ce4f8e30fc7b29_Villa%20Parson%207-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85af1b79368c8eb47d580_Villa%20Parson%208-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85af1b79368c8eb47d580_Villa%20Parson%208-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85af1b79368c8eb47d580_Villa%20Parson%208-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85af816ce4f8e30fc8531_Villa%20Parson%20Pool%202-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85af816ce4f8e30fc8531_Villa%20Parson%20Pool%202-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f85af816ce4f8e30fc8531_Villa%20Parson%20Pool%202-p-1080.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  },
  {
    "slug": "windward-roads",
    "title": "Windward Roads",
    "subtitle": "LVT installed solar with storage to meet the 2024 corporate energy mandate.",
    "region": "Caribbean",
    "country": "Philipsburg, Sint Maarten",
    "startDate": "Ongoing",
    "completionDate": "Completed",
    "thumbnail": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23e39389eecbbdaa84a7_WWR%20Solar%20Panels%20video%20shot.png",
    "descriptionParagraphs": [
      "This project focused on reducing the carbon footprint and ensuring adherence to corporate environmental compliance standards. The scope included the installation of two electric vehicle (EV) chargers, a 54 kWh solar energy production system, and a 100 kWh battery storage system to support sustainable energy usage and efficiency.",
      "Windward Roads is a prominent construction company based in Sint Maarten, established in 1986. As part of Janssen de Jong Caribbean, the company operates not only in Sint Maarten but also extends its services to Saba and St. Eustatius. The company boasts an extensive fleet of machinery, enabling them to undertake diverse projects across the Windward Islands. Since its inception, Windward Roads has grown to employ over 60 individuals. In terms of sustainability, Windward Roads is committed to minimizing environmental impact. They emphasize safety, education, and employee commitment while striving to reduce their ecological footprint.",
      "Luxury Villa Technologies played a key role in the design, delivery, and installation of a 52 kWh solar panel system and a 100 kW battery storage solution, ensuring sustainable energy production and efficiency. The team conducted detailed hurricane resilience calculations to enhance system durability and reliability in extreme weather conditions. In collaboration with the installation team, we ensured seamless integration of all components, optimizing performance and longevity. Additionally, we implemented a solar production monitoring system to track energy generation and efficiency, providing real-time insights for operational management and sustainability compliance.",
      "The successful implementation of the solar energy system resulted in a reliable and sustainable power solution, significantly reducing the facility\u2019s carbon footprint while ensuring operational efficiency. The 52 kWh solar panels and 100 kW battery storage system provide consistent renewable energy, contributing to long-term cost savings and energy independence. With hurricane resilience calculations integrated into the design, the system is built to withstand extreme weather conditions, enhancing durability and reliability. The inclusion of a solar production monitoring system allows for real-time tracking of energy generation and usage, ensuring optimal performance and maintenance efficiency. This project supports corporate environmental compliance while reinforcing a commitment to sustainability and energy resilience."
    ],
    "testimonial": "",
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23e39389eecbbdaa84a7_WWR%20Solar%20Panels%20video%20shot.png",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f075ea5daccc7aea9ea212_LVT%20Clipart.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23e39389eecbbdaa84a7_WWR%20Solar%20Panels%20video%20shot-p-500.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23e39389eecbbdaa84a7_WWR%20Solar%20Panels%20video%20shot-p-800.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef23e39389eecbbdaa84a7_WWR%20Solar%20Panels%20video%20shot-p-1080.png",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26a177cf66ba76aa8df0_WWR%20Solar%20Panels%202.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26a177cf66ba76aa8df0_WWR%20Solar%20Panels%202-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26a177cf66ba76aa8df0_WWR%20Solar%20Panels%202-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f943484c973506f7e8_WWR%20EV%201.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f2b229fd1f72460488_WWR%20EV%202.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef27106614e57c393c6205_WWR%20poster.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26a8c3be0c8487f36f38_WWR%20Solar%20Panels%203.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef271a122f963b4ac997ab_WWR%20Solar%20Panels%204.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26a8c3be0c8487f36f38_WWR%20Solar%20Panels%203-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26a8c3be0c8487f36f38_WWR%20Solar%20Panels%203-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f2b229fd1f72460488_WWR%20EV%202-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f2b229fd1f72460488_WWR%20EV%202-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f2b229fd1f72460488_WWR%20EV%202-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f2b229fd1f72460488_WWR%20EV%202-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f2b229fd1f72460488_WWR%20EV%202-p-2000.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f943484c973506f7e8_WWR%20EV%201-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f943484c973506f7e8_WWR%20EV%201-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f943484c973506f7e8_WWR%20EV%201-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef26f943484c973506f7e8_WWR%20EV%201-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef27106614e57c393c6205_WWR%20poster-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef27106614e57c393c6205_WWR%20poster-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef27106614e57c393c6205_WWR%20poster-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef271a122f963b4ac997ab_WWR%20Solar%20Panels%204-p-500.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef271a122f963b4ac997ab_WWR%20Solar%20Panels%204-p-800.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef271a122f963b4ac997ab_WWR%20Solar%20Panels%204-p-1080.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef271a122f963b4ac997ab_WWR%20Solar%20Panels%204-p-1600.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef271a122f963b4ac997ab_WWR%20Solar%20Panels%204-p-2000.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-500.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef13047bc1a63e04026cd2_Picture%20Michel%20Maduro%201-p-800.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312.webp",
      "https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66ef12eb02fd06fbc22c977c_Screenshot%202023-08-01%20111312-p-500.webp"
    ]
  }
];

export const ALL_SERVICES: ServiceData[] = [
  {
    "slug": "design-engineering",
    "title": "Design & Engineering",
    "shortDescription": "We design, engineer, and integrate advanced technology systems that enhance both functionality and aesthetics, creating seamless, intelligent solutions tailored to your villa\u2019s unique needs and vision.",
    "iconUrl": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ea7df4cf782057fc56d438_Design%20%26%20engineering.svg",
    "heroHeadline": "Design & Engineering",
    "introParagraph": "Luxury Villa Technologies provide a full-scope design and engineering service for luxury villas and boutique resorts throughout the Caribbean and the Americas. Home Automation and System Integration being the platform to control all technical installations, it represents the heart of modern villa design.",
    "brochureText": "Feel free to download our informative brochure to discover more details!",
    "features": [
      {
        "title": "Home automation designs",
        "description": "Comprehensive system architecture coordinating lighting, climate, audiovisual, and security under one intuitive interface."
      },
      {
        "title": "Front end-user designs",
        "description": "Custom graphic interfaces for on-wall touchscreens, iPads, and mobile devices tailored to villa owners and guests."
      },
      {
        "title": "User scenes and scenario designs",
        "description": "Curated lighting and entertainment presets such as Entertaining, Sunset Cocktails, Movie Night, and Away Mode."
      },
      {
        "title": "Light designs",
        "description": "Architectural illumination planning, Kelvin color temperature tuning, fixture positioning, and art accent lighting."
      },
      {
        "title": "Technical installation designs",
        "description": "Schematics for rack layouts, conduit pathways, electrical panel coordination, and mechanical equipment interfacing."
      },
      {
        "title": "Solar & generator designs",
        "description": "Clean energy integration, microgrid management, automatic transfer switches, and battery energy storage systems."
      },
      {
        "title": "Mechanical engineering",
        "description": "HVAC zoning, chilled water systems, energy recovery ventilation, and humidity mitigation in tropical climates."
      },
      {
        "title": "Electrical Engineering",
        "description": "High and low-voltage distribution, load calculation, surge suppression, and clean power isolation for sensitive AV gear."
      },
      {
        "title": "Plumbing engineering",
        "description": "Smart water leak detection, automatic main shutoff valves, cistern water level monitoring, and pool heating systems."
      },
      {
        "title": "Network engineering",
        "description": "Fiber optic backbone rings, multi-gigabit switches, enterprise Wi-Fi coverage, and cellular failover."
      },
      {
        "title": "Project management",
        "description": "End-to-end site supervision, vendor coordination, contractor liaison, milestone scheduling, and quality assurance."
      },
      {
        "title": "Consultancy",
        "description": "Independent technology assessments for property developers, architects, and estate managers during feasibility and design phases."
      },
      {
        "title": "Carbon footprint reduction",
        "description": "Optimized energy sequencing that lowers utility expenses and promotes sustainable luxury living in island ecosystems."
      }
    ],
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6703901b089c16262904c6be_DSC04295-0026-70.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6703f2e1c944747eb4862590_Aqua%20Resort-12.webp"
    ]
  },
  {
    "slug": "home-automation-system-integration",
    "title": "Home Automation & System Integration",
    "shortDescription": "We seamlessly integrate smart technologies into your home, offering intuitive control and automation of lighting, climate, security, and entertainment, engineered for ultimate comfort, efficiency, and luxury.",
    "iconUrl": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66db6c5d5c21453c00d352a6_Frame%20115.svg",
    "heroHeadline": "Home Automation & System Integration",
    "introParagraph": "Enjoy seamless control of your entire Caribbean estate with a unified operating system. We handle the full spectrum of technology services for your dream villa\u2014from design and installation to configuration and ongoing management.",
    "brochureText": "Feel free to download our informative brochure to discover more details!",
    "features": [
      {
        "title": "Single point of control",
        "description": "Manage your entire property via elegant wall keypads, custom touchscreens, or a secure mobile app from anywhere in the world."
      },
      {
        "title": "Scenes and scenarios",
        "description": "One-touch commands activate tailored lighting, temperature, motorized shades, and audio settings across the entire villa."
      },
      {
        "title": "Climate control",
        "description": "Intelligent multi-zone VRF/HVAC management maintaining optimal comfort and humidity control while reducing energy waste."
      },
      {
        "title": "Light control",
        "description": "Architectural dimming, circadian lighting cycles, and scheduled illumination creating the perfect evening ambience."
      },
      {
        "title": "Security solutions",
        "description": "Comprehensive intrusion detection, biometric access, AI gate attendants, and integrated perimeter monitoring."
      },
      {
        "title": "Access management",
        "description": "Keyless entry for family, guests, and estate staff with time-restricted RFID cards and digital smartphone keys."
      },
      {
        "title": "Internet of Things (IoT)",
        "description": "Harmonious communication between appliances, smart mirrors, leak sensors, and outdoor amenities."
      },
      {
        "title": "Pool, spa, gym & tennis courts",
        "description": "Remote control of water temperature, jets, color-changing lights, court lighting, and dedicated audio zones."
      },
      {
        "title": "Sound & video",
        "description": "Lossless multi-room high-resolution audio and 4K/8K video distribution delivered invisibly throughout the estate."
      },
      {
        "title": "Window dressing controls",
        "description": "Whisper-quiet motorized draperies, blackout shades, and automated hurricane shutters responding to sun angles."
      },
      {
        "title": "Sun, rain & garden",
        "description": "Weather-synchronized irrigation, automated retractable pergolas, and protective awning closure upon rainfall."
      }
    ],
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6703901b089c16262904c6be_DSC04295-0026-70.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67040523e429944d18ec3357_Bella%20Vita-7.webp"
    ]
  },
  {
    "slug": "lights-access-security-sound-video",
    "title": "Lights, Access, Security, Sound & Video",
    "shortDescription": "We integrate advanced lighting, access control, security, sound, and video systems, delivering a seamless, connected experience that enhances both safety and entertainment in your home.",
    "iconUrl": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ea7ddb37db4d05a0538f22_Lights.svg",
    "heroHeadline": "Lights, Access, Security, Sound & Video",
    "introParagraph": "Advanced lighting, high-fidelity sound, private cinema, and uncompromised security. Enhance your lifestyle with cutting-edge lighting, secure access, robust security, and immersive sound and video solutions.",
    "brochureText": "Feel free to download our informative brochure to discover more details!",
    "features": [
      {
        "title": "Light designs, controls and scenarios",
        "description": "Lutron and Vantage lighting systems providing smooth dimming, circadian Kelvin adjustments, and path-of-light safety."
      },
      {
        "title": "Access control",
        "description": "Discreet electronic deadbolts, RFID credentials, and video intercoms linked directly to your smartphones."
      },
      {
        "title": "Surveillance systems",
        "description": "Ultra-HD night-vision cameras with optical zoom, AI vehicle/person detection, and secure local encrypted recording."
      },
      {
        "title": "CO2 detection",
        "description": "Environmental air quality monitoring ensuring healthy indoor airflow throughout bedrooms and living suites."
      },
      {
        "title": "PLEX Media Servers",
        "description": "Centralized private movie and music servers delivering 4K Blu-ray quality to any TV without internet buffering."
      },
      {
        "title": "IP TV distribution",
        "description": "Ultra-low-latency high-definition broadcast and satellite television distributed seamlessly to every screen."
      },
      {
        "title": "Sound & Video",
        "description": "Audiophile-grade architectural in-ceiling speakers and discreet subwoofers blending invisible acoustics with interior luxury."
      },
      {
        "title": "Movie theater",
        "description": "Custom private cinema rooms featuring laser projection, Dolby Atmos 3D immersive sound, and acoustic treatment."
      },
      {
        "title": "Pool & outdoor sound",
        "description": "Weatherproof landscape audio arrays delivering balanced, concert-quality acoustic coverage across terraces and beaches."
      }
    ],
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/670404fa9d020d53cbf9ba73_Bella%20Vita-5.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67040523e429944d18ec3357_Bella%20Vita-7.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6703901b089c16262904c6be_DSC04295-0026-70.webp"
    ]
  },
  {
    "slug": "network-infrastructure-engineering",
    "title": "Network Infrastructure & Engineering",
    "shortDescription": "We design and implement robust, high-performance network infrastructures, ensuring seamless connectivity, reliability, and security for all integrated systems, enhancing your villa\u2019s communication and technology capabilities.",
    "iconUrl": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e999e63241c53e708ad99b_Information%20Communication%20Technology%20(ICT).webp",
    "heroHeadline": "Network Infrastructure & Engineering",
    "introParagraph": "The foundation of every smart villa is an ultra-reliable network. Unlock the full potential of your estate with LVT\u2019s cutting-edge Information Communication Technology (ICT) and enterprise-grade networking solutions.",
    "brochureText": "Feel free to download our informative brochure to discover more details!",
    "features": [
      {
        "title": "Network infrastructure, design and installation",
        "description": "Armored fiber-optic backbones, Cat6A shielded cabling, and enterprise Wi-Fi 6/7 access points engineered for tropical heat and concrete construction."
      },
      {
        "title": "Server rooms & climate-controlled racks",
        "description": "Commercial rack builds with redundant power (UPS), neat cable dressing, temperature monitoring, and ventilation."
      },
      {
        "title": "IP Service and Support",
        "description": "Remote network monitoring with automated threat isolation, dual-WAN failover (Starlink + local fiber), and zero dead-zones."
      }
    ],
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/67040523e429944d18ec3357_Bella%20Vita-7.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6703901b089c16262904c6be_DSC04295-0026-70.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6703f2e1c944747eb4862590_Aqua%20Resort-12.webp"
    ]
  },
  {
    "slug": "sustainability-maintenance-and-support",
    "title": "Sustainability, Maintenance and Support",
    "shortDescription": "We offer eco-friendly solutions with proactive, preventive maintenance and ongoing support to ensure your systems remain efficient, sustainable, and reliable throughout their lifecycle. Our focus is on long-term performance.",
    "iconUrl": "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ea7dcf303636637962db9c_Maintanance.svg",
    "heroHeadline": "Sustainability, Maintenance and Support",
    "introParagraph": "LVT delivers eco-friendly solutions to reduce energy costs and environmental impact, paired with proactive maintenance and 24/7 technical support through our dedicated facility management partner, Luxury Villa Care (LVC).",
    "brochureText": "Feel free to download our informative brochure to discover more details!",
    "features": [
      {
        "title": "Solar, wind, and back-up power generation",
        "description": "Grid-tied and off-grid solar arrays paired with lithium-iron phosphate battery storage and automatic generator switching."
      },
      {
        "title": "24/7 Help desk & emergency dispatch",
        "description": "Around-the-clock remote diagnosis and priority on-site emergency dispatch across Sint Maarten and Saint Martin."
      },
      {
        "title": "Preventive and corrective maintenance",
        "description": "Scheduled quarterly inspections, firmware updates, battery health tests, and salt-air corrosion mitigation."
      },
      {
        "title": "Service Level Agreements (SLA)",
        "description": "Custom annual maintenance tiers with guaranteed response times, remote telemetry, and replacement warranties."
      },
      {
        "title": "Proactive system monitoring",
        "description": "Automated heartbeat sensors notify our engineering operations center immediately if internet drops or equipment overheats."
      }
    ],
    "images": [
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6703901b089c16262904c6be_DSC04295-0026-70.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp",
      "https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/670404fa9d020d53cbf9ba73_Bella%20Vita-5.webp"
    ]
  }
];
