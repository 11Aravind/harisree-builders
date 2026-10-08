export interface ServiceItem {
  id: string;
  titleEn: string;
  description: string;
  iconName: string;
  imageUrl: string;
  features: string[];
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'elevations' | 'interiors' | 'landscaping' | 'completed';
  categoryLabel: string;
  imageUrl: string;
  location: string;
  area: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  titleEn: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_INFO = {
  nameEn: "Harisree Builders & Interiors",
  taglineEn: "Premier Architectural Planning, Construction & Vastu Studio",
  phone: "+91 96334 79993",
  phoneRaw: "9633479993",
  whatsappUrl: "https://wa.me/919633479993",
  facebookUrl: "https://www.facebook.com/p/Hari-sree-builders-100063819617740/",
  googleMapsUrl: "https://share.google/XlSvlOJBD1u7jdgXA",
  location: "Muthupilakkadu, Sasthamcotta, Kollam, Kerala 690520",
  shortLocation: "Sasthamcotta, Kollam",
  email: "hareesreebuilders@gmail.com",
  workingHours: "Mon – Sat: 9:00 AM – 7:00 PM",
  experienceYears: "15+",
  projectsCompleted: "250+",
  vastuPercentage: "100%"
};

export const WHY_CHOOSE_US = [
  {
    id: "supervision",
    titleEn: "Expert Supervision from Planning to Handover",
    description: "Every phase of foundation, structural casting, masonry, and finishing is rigorously monitored on-site by qualified senior engineers.",
    icon: "ShieldCheck",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "architects",
    titleEn: "Certified Architects & Seasoned Engineers",
    description: "Licensed architectural drafting, structural load calculations, and sanction-ready municipality & panchayat blueprints.",
    icon: "DraftingCompass",
    color: "from-orange-600 to-red-600"
  },
  {
    id: "interiors",
    titleEn: "In-House Interior Styling & Modular Craft",
    description: "Bespoke modular kitchens, false ceiling concepts, customized wardrobe solutions, and premium lighting layouts under one roof.",
    icon: "Palette",
    color: "from-stone-600 to-amber-700"
  },
  {
    id: "vastu",
    titleEn: "Traditional Vastu Shastra Compliance",
    description: "Harmonizing energy flow, room orientation, main door placements, and kitchen angles strictly according to authentic Vastu principles.",
    icon: "Compass",
    color: "from-amber-600 to-yellow-600"
  },
  {
    id: "budget",
    titleEn: "Modern Amenities on an Optimized Budget",
    description: "Cost-transparent material estimations with zero hidden charges, maximizing space, aesthetic value, and durability within your limit.",
    icon: "Coins",
    color: "from-emerald-600 to-teal-700"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "vastu",
    titleEn: "Vastu Consultation & Layout Planning",
    description: "Scientific & traditional Vastu Shastra alignment for plot position, main entryway, bedroom positioning, water sources, and kitchen.",
    iconName: "Compass",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    features: [
      "Authentic Vastu Purusha Mandala Alignment",
      "Directional Energy Balance Analysis",
      "Customized Floorplan Adjustment",
      "Plot & Site Contour Evaluation"
    ]
  },
  {
    id: "site-supervision",
    titleEn: "On-Site Supervision & Quality Auditing",
    description: "Dedicated resident engineers conducting concrete mix testing, steel reinforcement audits, brickwork alignment, and waterproofing checks.",
    iconName: "Eye",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    badge: "Core Guarantee",
    features: [
      "Daily Construction Progress Logs",
      "Concrete Compressive Strength Audits",
      "Waterproofing & Plumbing Leak Checks",
      "Material Grade Verification"
    ]
  },
  {
    id: "architectural-drafting",
    titleEn: "2D Architectural Drafting & 3D Elevation",
    description: "Photorealistic 3D external renders, walk-through visualizations, and ergonomic 2D architectural spatial designs.",
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    badge: "High Demand",
    features: [
      "Ultra High-Res 3D Architectural Exterior",
      "Night Lighting & Landscape Renderings",
      "Full Working Structural Drawings",
      "Electrical & Plumbing Circuit Schematics"
    ]
  },
  {
    id: "interior-design",
    titleEn: "Custom Interior Design & Execution",
    description: "Turnkey luxury interior execution: factory-finished marine ply modular kitchens, TV units, gypsum ceilings, and custom woodwork.",
    iconName: "Armchair",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    features: [
      "Marine Ply & Acrylic Modular Kitchens",
      "Custom Gypsum & LED Ambient Ceiling",
      "Living Room Feature Wall Concepts",
      "Bespoke Bedroom Wardrobes & Storage"
    ]
  },
  {
    id: "landscape-design",
    titleEn: "Landscape Design & Exterior Green Spaces",
    description: "Courtyard gardens, modern paving stone driveways, natural lawn turfing, outdoor lighting, and decorative compound wall designs.",
    iconName: "Trees",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Traditional Kerala Courtyard (Nadumuttam)",
      "Interlocking Paving & Granite Driveways",
      "Exterior Accent Lighting & Fountains",
      "Low-Maintenance Tropical Greenery"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "proj-1",
    title: "Contemporary Tropical Villa",
    category: "elevations",
    categoryLabel: "3D Elevation",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    location: "Sasthamcotta, Kollam",
    area: "2,850 sq ft",
    description: "Slanted clay-tile roof lines merged with modern glass curtain walls and warm wood accent louvers."
  },
  {
    id: "proj-2",
    title: "Minimalist Dual-Tone Residence",
    category: "elevations",
    categoryLabel: "3D Elevation",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    location: "Karunagappally, Kollam",
    area: "2,200 sq ft",
    description: "Clean linear geometry, cantilevered balconies, and terraced greenery designed for optimal natural ventilation."
  },
  {
    id: "proj-3",
    title: "Luxury Open-Plan Living & Dining",
    category: "interiors",
    categoryLabel: "Interior Design",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    location: "Adoor, Pathanamthitta",
    area: "Living Suite",
    description: "Warm neutral tones, custom teak accents, cove ceiling lighting, and plush Italian marble flooring."
  },
  {
    id: "proj-4",
    title: "Acrylic Modular Kitchen & Breakfast Bar",
    category: "interiors",
    categoryLabel: "Interior Design",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    location: "Kottarakkara, Kollam",
    area: "Kitchen Suite",
    description: "BWP Marine plywood structure with soft-close Blum hardware, quartz countertop, and integrated profile lights."
  },
  {
    id: "proj-5",
    title: "Minimalist Master Bedroom & Walk-in Wardrobe",
    category: "interiors",
    categoryLabel: "Interior Design",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    location: "Kunnathur, Kollam",
    area: "Bedroom Suite",
    description: "Upholstered headboard wall, hidden LED backlighting, matte finish wardrobe shutters, and acoustic wood paneling."
  },
  {
    id: "proj-6",
    title: "Kerala Nadumuttam & Paved Courtyard",
    category: "landscaping",
    categoryLabel: "Landscaping",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    location: "Muthupilakkadu, Sasthamcotta",
    area: "Exterior & Courtyard",
    description: "Natural granite stone pathways, indoor rainwater courtyard, and accent tropical flora."
  },
  {
    id: "proj-7",
    title: "Turnkey Handover: Traditional Heritage Residence",
    category: "completed",
    categoryLabel: "Completed Home",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    location: "Sasthamcotta, Kollam",
    area: "3,100 sq ft",
    description: "Full site supervision, Vastu compliant execution, finished ahead of scheduled timeline on fixed budget."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    titleEn: "Site Visit & Vastu Analysis",
    description: "Our senior engineers and Vastu specialists visit your plot in Kollam/Pathanamthitta to examine ground orientation, soil type, and road access.",
    deliverables: ["Plot Measurement", "Vastu Compatibility Report", "Design Direction Brief"],
    icon: "MapPin"
  },
  {
    step: "02",
    titleEn: "2D Layout & 3D Architectural Modeling",
    description: "We draft high-precision 2D floor plans and 3D elevations, refining room dimensions until you get the exact aesthetic and space utilization you desire.",
    deliverables: ["2D Architectural Blueprint", "Ultra 3D Exterior Elevation", "Internal Furniture Layout"],
    icon: "Box"
  },
  {
    step: "03",
    titleEn: "Budget Estimation & Loan Permit Approval",
    description: "We issue itemized BOQ costings with material specs and handle all Panchayat/Municipality sanction drawings & bank loan documentation.",
    deliverables: ["Itemized BOQ Cost Sheet", "Panchayat Sanction Plan", "Bank Loan Certificate"],
    icon: "FileCheck2"
  },
  {
    step: "04",
    titleEn: "Supervised Ground Execution & Key Handover",
    description: "Our dedicated site engineering team executes foundation work, masonry, roofing, interior fit-outs, and handovers your pristine home on time.",
    deliverables: ["Quality Audit Certificates", "Stage-wise Inspection Reports", "Turnkey Key Handover"],
    icon: "KeyRound"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Ananthakrishnan & Family",
    location: "Sasthamcotta, Kollam",
    role: "Homeowner (2,600 sq ft Villa)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Full Turnkey Construction",
    quote: "Harisree Builders handled our house from plot sanction to key handover. Their strict site supervision and Vastu alignment gave us complete peace of mind. The cost estimation was 100% accurate without any mid-way surprises!"
  },
  {
    id: "test-2",
    name: "Raji & Suresh Kumar (NRI)",
    location: "Karunagappally, Kollam",
    role: "NRI Homeowners (3,200 sq ft Residence)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "3D Elevation & Modular Interior",
    quote: "Being based in Dubai, managing home construction in Kerala was our biggest fear. Harisree sent weekly site videos, WhatsApp logs, and executed our marine-ply modular kitchen & living interior flawlessly!"
  },
  {
    id: "test-3",
    name: "Mathew Varghese",
    location: "Adoor, Pathanamthitta",
    role: "Homeowner (1,950 sq ft Modern Home)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Architectural Planning & Civil Execution",
    quote: "The team's budget planning is unmatched. They optimized our floor plan so smartly that we got a spacious 4-BHK with high ceilings within our tight budget limit. Highly recommended in Sasthamcotta!"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "Permits & Legal",
    question: "Do you handle panchayat/municipal building permit sanctions?",
    answer: "Yes, absolutely. We prepare Kerala Building Rules (KBR) compliant architectural drawings, obtain licensed engineer stamps, and coordinate directly with local Panchayat or Municipality offices to secure building permit approval."
  },
  {
    category: "Financing",
    question: "Can you help secure a home construction loan with public/private banks?",
    answer: "Yes. We supply bank-ready stage estimates, official quantity surveys, approved blueprints, and valuation certificates required by banks like SBI, HDFC, Canara, and Federal Bank for quick home loan disbursement."
  },
  {
    category: "Vastu Shastra",
    question: "Is Vastu compliance integrated into modern minimalist house designs?",
    answer: "100% yes. We combine contemporary architectural aesthetics with traditional Vastu Shastra principles. Key zones like the kitchen (Agni Kona), master bedroom (Nirruthi Kona), and main entryway are precisely oriented without sacrificing modern layout functionality."
  },
  {
    category: "Services",
    question: "Can I hire Harisree only for interior design or 3D elevations?",
    answer: "Yes! While we excel in full turnkey construction, you can hire us independently for 2D floor planning, 3D architectural elevations, or custom modular interior execution (kitchens, wardrobes, false ceilings)."
  },
  {
    category: "Budgeting",
    question: "How do you ensure projects stay within the estimated budget?",
    answer: "Before starting construction, we provide an itemized Bill of Quantities (BOQ) covering every material grade, brand, and labor stage. We sign a transparent agreement with zero hidden escalations."
  },
  {
    category: "Quality",
    question: "Do you provide warranties on interior works and materials?",
    answer: "Yes, we use BWP (Boiling Water Proof) Marine Plywood for modular kitchens and interior joinery with up to 10-15 year material manufacturer warranties, along with post-handover structural inspection support."
  }
];

export const ESTIMATOR_PACKAGES = [
  {
    id: "standard",
    name: "Standard Structural & Basic Turnkey",
    ratePerSqFt: 1850,
    description: "Ideal for budget-conscious families desiring solid engineered construction with standard branded materials.",
    highlights: ["Grade 53 Cement & Vizag/JSW TMT Steel", "Red Brick / High-density AAC Masonry", "Standard Vitrified Tiles (₹60/sqft range)", "Asian Paints Apex Finish", "Standard Vastu Plan Included"]
  },
  {
    id: "premium",
    name: "Premium Architectural Turnkey",
    ratePerSqFt: 2350,
    isPopular: true,
    description: "Our most popular package with premium architectural touches, teak door accents, and elevated finishings.",
    highlights: ["JSW/Tata Tiscon TMT Steel & UltraTech Cement", "Premium Vitrified 4x2 Tiles / Granite accents", "Teakwood Main Entrance Door & Frames", "Jaguar / Kohler Sanitary Fittings", "Modular Kitchen Shell & Full Site Supervision"]
  },
  {
    id: "luxury",
    name: "Luxury Bespoke & Full Interior",
    ratePerSqFt: 2950,
    description: "Comprehensive luxury living experience with complete custom interior woodwork, false ceilings, and landscaping.",
    highlights: ["Full Bespoke Marine-Ply Interior Fit-out", "Gypsum Ambient Ceiling & Designer Lighting", "Italian Marble / Large Slab GVT Flooring", "Grohe / Kohler Luxury Bath Fixtures", "Complete Paved Driveway & Courtyard Garden"]
  }
];
