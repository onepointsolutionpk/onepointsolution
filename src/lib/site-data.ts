import {
  BellRing,
  Cctv,
  Fence,
  House,
  Factory,
  Building2,
  DoorOpen,
  type LucideIcon,
} from "lucide-react";

import { media } from "@/lib/media";

export const site = {
  name: "One Point Solution",
  domain: "https://onepointsolutionpk.com",
  phoneDisplay: "03265284800",
  phoneHref: "tel:+923265284800",
  whatsapp: "https://wa.me/923265284800",
  facebook: "https://www.facebook.com/profile.php?id=61567149481360",
  logo: media["one-point-solution-logo.png"],
  displayImage: media["installation-display.jpg"],
  heroImage: media["hero-security.webp"],
} as const;

// Only the owner-supplied carousel image belongs here; display photography is separate.
export const heroSlides = [
  { src: site.heroImage, alt: "Owner-supplied One Point Solution security installation banner" },
  { src: media["electric-fence-banner.jpg"], alt: "Electric fencing above a residential gate and boundary wall" },
];

export const offices = [
  { city: "Lahore", address: "Office No. 204, 2nd Floor, Corporate Plaza, Gulberg III, Lahore, Pakistan." },
  { city: "Islamabad", address: "Office No. 307, 3rd Floor, Business Centre, Blue Area, Islamabad, Pakistan." },
  { city: "Bahawalpur", address: "Office No. 12, 1st Floor, Commercial Plaza, Model Town, Bahawalpur, Pakistan." },
] as const;

export type Service = {
  slug: string;
  path: "/services/electric-fencing" | "/services/cctv-cameras" | "/services/gate-automation" | "/services/fire-alarm-systems";
  title: string;
  short: string;
  intro: string;
  description: string;
  benefits: readonly string[];
  applications: readonly string[];
  icon: LucideIcon;
  image?: string;
};

export const services = [
  {
    slug: "electric-fencing",
    path: "/services/electric-fencing",
    title: "Electric Fencing",
    short: "A visible perimeter security layer for homes, businesses and industrial facilities.",
    intro: "Professionally planned electric fencing for stronger perimeter control.",
    description: "We plan electric fencing around the property boundary, taking access points, wall conditions and day-to-day use into account. The aim is a clean installation that supports the wider security plan without making unsupported promises about a single product or system.",
    benefits: ["Visible perimeter deterrence", "Suitable for varied property boundaries", "Can complement cameras and access control", "Planned around gates and entry points"],
    applications: ["Residential boundary walls", "Commercial premises", "Warehouses and yards", "Industrial facilities"],
    icon: Fence,
    image: site.displayImage,
  },
  {
    slug: "cctv-cameras",
    path: "/services/cctv-cameras",
    title: "CCTV Cameras",
    short: "Thoughtful camera coverage for entrances, boundaries and important activity areas.",
    intro: "CCTV layouts shaped around visibility, access routes and property use.",
    description: "A useful CCTV system begins with the property rather than a box of cameras. We consider entrances, blind spots, movement routes and monitoring needs so camera positions support practical oversight for residential, commercial and industrial settings.",
    benefits: ["Coverage planned around key areas", "Options for varied property sizes", "Clearer oversight of access points", "Can support a layered security approach"],
    applications: ["Homes and apartment buildings", "Offices and retail sites", "Warehouses", "Industrial compounds"],
    icon: Cctv,
  },
  {
    slug: "gate-automation",
    path: "/services/gate-automation",
    title: "Gate Automation",
    short: "Convenient controlled access for suitable sliding and swing gate arrangements.",
    intro: "Automatic gate solutions planned for practical access and everyday reliability.",
    description: "Gate automation should match the gate type, available space, traffic pattern and access expectations. We assess those practical factors before recommending an approach for a residence, business entrance or industrial access point.",
    benefits: ["Convenient vehicle access", "Controlled entry and exit", "Solutions for suitable gate types", "Can connect with broader access planning"],
    applications: ["Residential gates", "Office entrances", "Commercial parking access", "Industrial entry points"],
    icon: DoorOpen,
  },
  {
    slug: "fire-alarm-systems",
    path: "/services/fire-alarm-systems",
    title: "Fire Alarm Systems",
    short: "Alarm planning that supports early warning across occupied commercial and industrial spaces.",
    intro: "Fire alarm systems considered around the layout and use of your premises.",
    description: "A fire alarm arrangement should reflect how a building is occupied and divided. We discuss the premises, usage and coverage requirements before preparing a quotation, without inventing compliance claims or specifications that need a site assessment.",
    benefits: ["Supports early warning", "Planning based on premises layout", "Suitable for different occupied spaces", "Clear discussion before quotation"],
    applications: ["Commercial buildings", "Offices", "Warehouses", "Industrial facilities"],
    icon: BellRing,
  },
] as const satisfies readonly Service[];

export const industries = [
  { title: "Residential Security", copy: "Layered protection designed around family homes, boundary walls, entrances and everyday access.", icon: House },
  { title: "Commercial Security", copy: "Practical systems for offices, retail environments and other business premises.", icon: Building2 },
  { title: "Industrial Security", copy: "Perimeter, monitoring and alert solutions considered for larger sites, yards and facilities.", icon: Factory },
] as const;

export const brands = [
  { name: "Nemtek", image: media["nemtek-logo.png"], category: "Electric fencing" },
  { name: "Tongher", image: media["tongher-logo.jpg"], category: "Electric fencing" },
  { name: "GateXpert", image: media["gatexpert-logo.jpeg"], category: "Gate automation" },
  { name: "Centurion", image: media["centurion-logo.png"], category: "Gate automation" },
  { name: "Dahua", image: media["dahua-logo.png"], category: "CCTV" },
  { name: "Hikvision", image: media["hikvision-logo.png"], category: "CCTV" },
  { name: "Pollo", image: media["pollo-logo.png"], category: "CCTV" },
] as const;

export const clients = [
  { name: "Bahria Town", image: media["bahria-town-logo.png"] },
  { name: "Park View City Islamabad", image: media["park-view-city-logo.jpg"] },
  { name: "DHA Lahore", image: media["dha-lahore-logo.jpg"] },
  { name: "Syed Brother Builders", image: media["syed-brother-builders-logo.png"] },
  { name: "Coca-Cola, Raiwind Road", image: media["coca-cola-logo.png"] },
] as const;

// Client relationships and media were explicitly supplied by the owner.
// Never combine these with equipment manufacturers or invent missing logos.
export const clientLogos = clients.flatMap((item) =>
  "image" in item ? [{ name: item.name, image: item.image }] : [],
);
export const brandLogos = brands.flatMap((item) =>
  "image" in item ? [{ name: item.name, image: item.image }] : [],
);

export const articles = [
  {
    slug: "electric-fencing-for-homes-in-pakistan",
    path: "/blog/electric-fencing-for-homes-in-pakistan",
    title: "Electric Fencing for Homes in Pakistan: Benefits, Safety and Installation",
    excerpt: "What homeowners should consider when adding electric fencing to a wider residential security plan.",
    service: "Electric Fencing",
  },
  {
    slug: "choosing-the-right-cctv-camera-system",
    path: "/blog/choosing-the-right-cctv-camera-system",
    title: "How to Choose the Right CCTV Camera System for Your Property",
    excerpt: "A practical look at coverage, camera placement, image needs and everyday monitoring.",
    service: "CCTV Cameras",
  },
  {
    slug: "gate-automation-installation-considerations",
    path: "/blog/gate-automation-installation-considerations",
    title: "Gate Automation: What to Consider Before Installing an Automatic Gate",
    excerpt: "Gate type, available movement, traffic patterns and controls all shape a suitable installation.",
    service: "Gate Automation",
  },
  {
    slug: "fire-alarm-systems-for-commercial-buildings",
    path: "/blog/fire-alarm-systems-for-commercial-buildings",
    title: "Fire Alarm Systems for Commercial Buildings: A Practical Guide",
    excerpt: "Key questions for businesses preparing to discuss fire detection and alarm coverage.",
    service: "Fire Alarm Systems",
  },
] as const;

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "3296+", label: "Projects Completed" },
  { value: "24/7", label: "Availability" },
  { value: "3", label: "Physical Offices" },
] as const;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Projects", to: "/projects" },
  { label: "Blogs", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const projects = [
  { image: site.displayImage, title: "Residential perimeter fencing", description: "Electric fencing installed along a residential property boundary.", alt: "Genuine residential electric fencing installation" },
  { image: media["electric-fence-banner.jpg"], title: "Boundary wall & gate fencing", description: "A supplied installation showing fencing above a boundary wall and entrance.", alt: "Electric fencing above a boundary wall and gate at night" },
] as const;

export const serviceDetails: Record<string, { considerations: readonly string[]; steps: readonly { title: string; copy: string }[]; faqs: readonly { question: string; answer: string }[] }> = {
  "electric-fencing": {
    considerations: ["Boundary length, wall condition and corners", "Gate access and areas within public reach", "Power supply, energizer location and maintenance access", "Integration with existing cameras and alarms"],
    steps: [{ title: "Review the perimeter", copy: "Discuss the boundary layout, entrances and areas that need additional protection." }, { title: "Plan the arrangement", copy: "Consider wire runs, supports, power and safe access before confirming equipment." }, { title: "Installation & checks", copy: "Agree the installation scope, system checks and operating guidance as part of your quotation." }],
    faqs: [{ question: "Is electric fencing suitable for every boundary?", answer: "Suitability depends on wall condition, available space, public access and local requirements. A property assessment helps identify the right approach." }, { question: "Can it work alongside CCTV?", answer: "Yes. Fencing provides a perimeter layer while cameras help monitor access points and activity. The exact arrangement depends on your property." }, { question: "How is the price calculated?", answer: "Boundary length, corners, gates, equipment and installation conditions affect the quotation. Share photos and approximate measurements for an initial discussion." }],
  },
  "cctv-cameras": {
    considerations: ["Entrances, blind spots and important activity areas", "Lighting conditions during the day and at night", "Recording needs, storage and monitoring access", "Cable routes, power and network availability"],
    steps: [{ title: "Map the coverage", copy: "Identify entrances, movement routes and the areas you need to see clearly." }, { title: "Select the system", copy: "Discuss camera placement, recording and viewing requirements suited to the site." }, { title: "Installation & review", copy: "Include positioning, recording checks and viewing setup in the agreed project scope." }],
    faqs: [{ question: "How many cameras will I need?", answer: "The right number depends on the layout and coverage you need, not simply the size of the property. Entrances, blind spots and camera viewing angles all matter." }, { question: "Can I view cameras on my phone?", answer: "Remote viewing depends on the selected equipment, network access and configuration. Discuss this requirement before finalizing a system." }, { question: "How much recording can be stored?", answer: "Retention depends on storage capacity, resolution, recording settings and the number of cameras. Your quotation can be planned around your preferred recording needs." }],
  },
  "gate-automation": {
    considerations: ["Sliding or swing gate type, weight and condition", "Clearance, movement space and daily traffic", "Power supply and access control preferences", "Safety devices and access during power interruptions"],
    steps: [{ title: "Assess the gate", copy: "Review the existing gate, movement space and how vehicles enter and leave." }, { title: "Plan controls & safety", copy: "Discuss suitable drive equipment, access controls and safety requirements." }, { title: "Installation & operation", copy: "Agree the installation, operating checks and user guidance before work begins." }],
    faqs: [{ question: "Can my existing gate be automated?", answer: "Possibly. Gate condition, weight, alignment and available space must be assessed before recommending automation." }, { question: "What happens during a power cut?", answer: "Manual release or backup options depend on the selected equipment. Confirm the preferred arrangement during the quotation discussion." }, { question: "Are remote controls the only option?", answer: "Control options vary by system and may include remotes or other access devices. We discuss how you want to manage everyday entry before proposing an arrangement." }],
  },
  "fire-alarm-systems": {
    considerations: ["Building layout, occupancy and room use", "Areas requiring detection and audible warning", "Panel location, cable routes and power requirements", "Inspection, maintenance and applicable safety requirements"],
    steps: [{ title: "Understand the premises", copy: "Review how the building is occupied and which areas require alarm coverage." }, { title: "Plan detection & alerts", copy: "Discuss the alarm arrangement and coverage alongside applicable building requirements." }, { title: "Installation & testing", copy: "Confirm equipment, testing, handover and maintenance expectations in the agreed scope." }],
    faqs: [{ question: "Which alarm arrangement does my building need?", answer: "Building size, layout, occupancy and applicable requirements determine the suitable approach. A site-specific review is needed before selecting equipment." }, { question: "Can an existing system be expanded?", answer: "Expansion depends on the existing panel, available capacity and device compatibility. Share the current system details for a discussion." }, { question: "Does the system need regular checks?", answer: "Yes. Inspection and maintenance should follow the equipment guidance and applicable requirements. Confirm the maintenance scope before installation." }],
  },
};
