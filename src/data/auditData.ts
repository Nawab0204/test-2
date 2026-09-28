/**
 * @license
 * Luxury Villa Technologies (LVT)
 * Strategic Website Improvement Audit & Business Transformation Data
 */

export interface AuditItem {
  id: string;
  category: string;
  title: string;
  current: string;
  problem: string;
  proposed: string;
  businessBenefit: string;
  metricImpact: string;
  status: 'critical' | 'high' | 'strategic';
  icon: string;
}

export interface SocialPillar {
  pillarNumber: string;
  title: string;
  focus: string;
  contentTypes: string[];
  repurposingFormula: {
    primaryAsset: string;
    derivedAssets: string[];
  };
}

export interface DigitalPresenceAudit {
  channel: string;
  currentState: string;
  priority: 'Immediate' | 'High' | 'Medium';
  recommendedActions: string[];
  projectedOutcome: string;
}

export const AUDIT_ITEMS: AuditItem[] = [
  {
    id: 'positioning',
    category: 'Brand Positioning',
    title: 'Smart Home Installer vs. Luxury Systems Integrator',
    current: 'The live website frequently uses basic consumer terminology like "SMART home" and focuses on single-gadget conveniences, creating confusion with entry-level consumer smart plugs and DIY setups.',
    problem: 'Multi-million dollar villa owners, architects, and luxury developers require deep MEP (Mechanical, Electrical, Plumbing) engineering, resilient fiber networks, and mission-critical hurricane recovery—not retail smart-home gadgetry. Consumer positioning depresses contract size and leaves lucrative commercial contracts on the table.',
    proposed: 'Reposition LVT as "The Caribbean’s Premier Luxury Property Technology & Systems Integration Firm", leading with architectural engineering, MEP coordination, 10Gbps fiber-optic backbones, and bespoke Building Management Systems (BMS).',
    businessBenefit: 'Justifies 5x to 10x higher engineering retainers, positions LVT as an essential peer to leading architects and MEP contractors, and attracts 7-figure estate master-integration contracts.',
    metricImpact: '+320% average contract value & prime MEP contractor inclusion',
    status: 'critical',
    icon: 'ShieldCheck'
  },
  {
    id: 'template_residue',
    category: 'Content Integrity',
    title: 'Unedited Webflow Template Remnants',
    current: 'Multiple live pages contain visible Webflow starter text: "Link Five Link Six Link Seven", Latin placeholder text ("Lorem ipsum dolor sit amet..."), spelling typos like "Meat the team" and "Country / Sate", and empty placeholder quote cards ("Name Surname").',
    problem: 'Ultra-high-net-worth clients paying $20,000 to $150,000+ for estate automation perceive unfinished template text as a sign of technical carelessness, directly damaging trust before any phone call takes place.',
    proposed: 'Complete eradication of all template residue; replacement with rigorously vetted engineering copy, verified client testimonials (e.g., La Samanna resort opening crisis, Infinity Villas ELIE SAAB integration), and exact Caribbean credentials.',
    businessBenefit: 'Restores instant institutional credibility and eliminates immediate bounce among discerning estate managers and European/American clients.',
    metricImpact: 'Reduces high-intent bounce rate from ~62% to <28%',
    status: 'critical',
    icon: 'AlertTriangle'
  },
  {
    id: 'audience_routing',
    category: 'Navigation & Architecture',
    title: 'Dual-Persona Routing: Villa Owners vs. Architects & Developers',
    current: 'A single flat navigation menu lumps all visitors together, forcing both private villa owners and technical general contractors through the same generic text.',
    problem: 'Private owners care about lifestyle, intuitive single-app control, climate management from abroad, and vacation rental reliability. Architects, MEP engineers, and developers care about Revit/BIM drawings, conduit schematics, load calculations, and tender compliance.',
    proposed: 'Introduce dedicated audience routing right from the top navigation and hero: "For Villa Owners" (lifestyle, peace of mind, remote monitoring) vs. "For Architects & Developers" (MEP engineering, BIM/CAD specs, tender support, commercial certifications).',
    businessBenefit: 'Increases conversion for both audiences by speaking their exact language and cutting discovery time in half.',
    metricImpact: '+185% conversion on architectural partnership inquiries',
    status: 'high',
    icon: 'GitFork'
  },
  {
    id: 'case_studies',
    category: 'Proof of Work',
    title: 'Photo Galleries vs. High-Stakes Case Studies',
    current: 'Current project pages feature a raw dump of uncaptioned photos with minimal text explaining what was actually built, the hurdles overcome, or the technologies deployed.',
    problem: 'Visitors cannot see the technical brilliance behind projects like Villa Bella Vita (first smart home in the Caribbean), La Samanna (emergency 6-week fiber overhaul before resort opening), or Infinity Villas (AI gate attendants & ELIE SAAB design).',
    proposed: 'Transform every project into an architectural case study structured around: (1) Executive Overview, (2) Client Challenge & Site Constraints, (3) LVT Engineering & Technology Scope, (4) Deployed Hardware Matrix (Lutron, Savant, Ubiquiti, Starlink), (5) Quantifiable Results, and (6) High-resolution interactive lightbox gallery.',
    businessBenefit: 'Provides irrefutable proof of capability, overcomes price objections before sales meetings, and enables viral sharing among luxury architects and real estate brokers.',
    metricImpact: 'Doubles on-site dwell time (avg. 4m 12s) and accelerates sales cycle by 40%',
    status: 'high',
    icon: 'Layers'
  },
  {
    id: 'lead_generation',
    category: 'Conversion Optimization',
    title: 'Bare Contact Box vs. Interactive Villa Readiness Audit',
    current: 'The only conversion mechanism is a generic 4-field contact box ("First Name, Last Name, Email, Message") with an unstyled submit button.',
    problem: 'High-net-worth estate owners and busy developers rarely type long custom messages into generic forms. LVT receives unqualified, vague inquiries with no project scope, budget, or timeline data.',
    proposed: 'Deploy an interactive "Villa Technology & Infrastructure Readiness Audit" that guides visitors through selecting their property type (Beachfront Villa, Cliffside Estate, Boutique Resort), project phase (New Construction, Major Renovation, Upgrade), required subsystems, and preferred timeline, delivering a personalized preliminary integration brief.',
    businessBenefit: 'Pre-qualifies inbound leads, collects critical engineering parameters before the discovery call, and dramatically increases form completions by providing immediate perceived value.',
    metricImpact: '+240% qualified inbound lead volume & complete pre-qualification data',
    status: 'critical',
    icon: 'Compass'
  },
  {
    id: 'technical_seo',
    category: 'Search Engine Optimization',
    title: 'Unoptimized Meta Data vs. Island-Wide Regional Authority',
    current: 'Basic Webflow auto-generated meta titles and missing structured data (JSON-LD), with no localized keyword architecture for French Saint-Martin, Dutch Sint Maarten, Saint Barthélemy, or Anguilla.',
    problem: 'LVT is invisible for lucrative regional searches like "smart villa automation Sint Maarten", "MEP engineer St Martin", "Crestron Lutron installer Caribbean", and "villa Starlink installation Terres Basses".',
    proposed: 'Implement complete Schema.org LocalBusiness & Organization structured data, geo-targeted landing page strategies, hreflang tags for English/French audiences, and keyword-optimized case studies targeting high-intent island queries.',
    businessBenefit: 'Captures organic search traffic from villa owners and international buyers purchasing property in the Caribbean.',
    metricImpact: 'Establishes #1 organic position for Caribbean luxury automation keywords',
    status: 'high',
    icon: 'Search'
  },
  {
    id: 'social_presence',
    category: 'Digital Footprint',
    title: 'Dormant Channels vs. "1 Project = 8 Assets" Content Engine',
    current: 'Minimal social media integration, sporadic posts, no video reels of completed villas, and no systematic distribution of LVT’s world-class installations.',
    problem: 'Luxury villa owners, interior designers, and architects spend hours on Instagram and LinkedIn researching luxury lifestyle and architectural technology. Competitors or overseas integrators win contracts simply through visual visibility.',
    proposed: 'Deploy a sustainable 12-pillar social media framework that turns every completed villa installation into 8 distinct marketing assets: architectural case study, LinkedIn engineering breakdown, Instagram luxury reel, YouTube technical walkthrough, founder interview snippet, and newsletter feature.',
    businessBenefit: 'Builds omnipresent regional brand authority, attracts passive luxury villa owners, and creates an evergreen pipeline of inbound architect partnerships.',
    metricImpact: 'Generates 15,000+ targeted Caribbean & US luxury impressions monthly',
    status: 'strategic',
    icon: 'Share2'
  }
];

export const SOCIAL_PILLARS: SocialPillar[] = [
  {
    pillarNumber: '01',
    title: 'Completed Villa Showcases',
    focus: 'Cinematic walk-throughs of completed estates (Villa Bella Vita, Villa C’est La Vie, Villa Avanti) showcasing the seamless intersection of architecture and hidden technology.',
    contentTypes: ['Instagram 4K Reels', 'LinkedIn Photo Carousels', 'YouTube Villa Tour'],
    repurposingFormula: {
      primaryAsset: 'Master 4K Video Walkthrough & Photography Shoot (1 Day Onsite)',
      derivedAssets: [
        '60s Architectural Instagram Reel (Sunset scene activation)',
        'LinkedIn Case Study highlighting MEP coordination with architects',
        'Website Featured Project update with client quote',
        'Short YouTube Short focusing on "Invisible Audio & Ocean Views"',
        'Instagram Carousel breaking down the 5 smart features',
        'Founder LinkedIn post on overcoming hurricane-rated engineering hurdles',
        'Email newsletter blast to regional architects and realtors',
        'High-resolution PDF case study for sales meetings'
      ]
    }
  },
  {
    pillarNumber: '02',
    title: 'Behind-the-Scenes Engineering & Rack Craftsmanship',
    focus: 'Pristine server rack cabling, enterprise fiber terminations, and climate-controlled rack builds demonstrating uncompromised technical craftsmanship.',
    contentTypes: ['Cable Porn / Rack Showcase Reels', 'Technical Whitepaper', 'LinkedIn Engineering Posts'],
    repurposingFormula: {
      primaryAsset: 'High-Res Server Room & Rack Photography',
      derivedAssets: [
        'Before & After Rack Clean-up Reel (satisfying transformations)',
        'Technical carousel: "Why Caribbean villas need commercial cooling in server closets"',
        'LinkedIn post highlighting Panduit & Araknis partnership'
      ]
    }
  },
  {
    pillarNumber: '03',
    title: 'Tropical Resilience & Hurricane Readiness',
    focus: 'Educating estate owners on salt-air corrosion mitigation, dual-WAN Starlink failover, solar battery storage, and automated storm shutter protocols.',
    contentTypes: ['Checklists', 'Educational Carousels', 'Expert Commentary Videos'],
    repurposingFormula: {
      primaryAsset: 'LVT Hurricane Technology Preparedness Guide (PDF)',
      derivedAssets: [
        'Infographic: "How your smart villa survives a Category 5 hurricane"',
        'Starlink Maritime & Estate Connectivity test during island power outages',
        'Owner checklist: 7 things to automate before leaving the island for summer'
      ]
    }
  },
  {
    pillarNumber: '04',
    title: 'Founder Wisdom & Caribbean Pioneer Authority',
    focus: 'Leveraging Michel Maduro’s 35-year telecom pioneer heritage and Hans de Bruyne’s European quality management expertise to establish unmatched regional trust.',
    contentTypes: ['Thought Leadership Articles', 'Podcast / Interview Clips', 'Founder Reflections'],
    repurposingFormula: {
      primaryAsset: 'Monthly Founder Video Q&A with Michel & Hans',
      derivedAssets: [
        'LinkedIn long-form post on 35 years of Caribbean telecommunication evolution',
        'Story reel: "Building the first wireless ISP in the Caribbean in the 90s"',
        'Consultancy tips for developers planning beachfront master-planned communities'
      ]
    }
  }
];

export const DIGITAL_PRESENCE_AUDIT: DigitalPresenceAudit[] = [
  {
    channel: 'Google Business Profile (Sint Maarten & Saint Martin)',
    currentState: 'Unclaimed or fragmented listings across Marigot and Philipsburg with missing service catalogs, sparse photos, and zero review collection strategy.',
    priority: 'Immediate',
    recommendedActions: [
      'Verify and optimize primary GBP profile in Marigot and secondary service-area profile in Philipsburg.',
      'Upload 40+ professional high-resolution photos of completed villas (Villa Bella Vita, Aqua Resort, etc.).',
      'Publish detailed service menus: MEP Engineering, Starlink Business Installation, Lutron Lighting, Home Automation.',
      'Implement an automated review acquisition flow for luxury villa owners and estate managers.'
    ],
    projectedOutcome: 'Top 3 Map Pack ranking for "smart home Sint Maarten" and "home automation Saint Martin", capturing 80% of local search volume.'
  },
  {
    channel: 'LinkedIn Company & Executive Profiles',
    currentState: 'Basic company profile with minimal activity; founders’ immense 35-year telecom and engineering heritage under-leveraged.',
    priority: 'High',
    recommendedActions: [
      'Revamp LVT LinkedIn page with enterprise branding, partner badges, and project highlights.',
      'Position Michel Maduro and Hans de Bruyne as the definitive Caribbean authorities on MEP and villa technology integration.',
      'Publish bi-weekly B2B case studies tagging architects, builders, and developers involved in Caribbean hospitality.'
    ],
    projectedOutcome: 'Direct relationship building with high-value Caribbean architectural firms, MEP contractors, and luxury developers.'
  },
  {
    channel: 'Instagram (@luxuryvillatechnologies)',
    currentState: 'Low post cadence, lack of video reels, static graphics rather than luxury cinematic lifestyle and engineering art.',
    priority: 'High',
    recommendedActions: [
      'Shift aesthetic to ultra-luxury architectural editorial (travertine, infinity pools, twilight lighting, invisible speakers).',
      'Publish weekly Reels demonstrating one-touch villa scenarios (e.g., "Welcome to Saint Martin" scene activation).',
      'Tag interior designers, architects, and luxury rental agencies (e.g. St. Martin Sotheby’s, Luxury Retreats).'
    ],
    projectedOutcome: 'Attracts high-net-worth second-home buyers and villa renters who subsequently inquire about retrofitting their properties.'
  },
  {
    channel: 'YouTube Video Case Studies',
    currentState: 'Zero structured video archive showcasing LVT’s multi-million dollar flagship projects.',
    priority: 'Medium',
    recommendedActions: [
      'Produce 3-5 minute cinematic documentary case studies for marquee projects (Infinity Villas, Villa Bella Vita).',
      'Create 60-second technical shorts answering common villa owner questions (e.g., "Starlink vs Fiber in the Caribbean").'
    ],
    projectedOutcome: 'High-ranking video results in Google search for specific villa names, establishing unquestioned technical mastery.'
  }
];
