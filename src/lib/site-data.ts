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

import logoAsset from "@/assets/one-point-solution-logo.png.asset.json";
import displayAsset from "@/assets/installation-display.jpg.asset.json";
import heroAsset from "@/assets/hero-security.webp.asset.json";
import nemtekAsset from "@/assets/nemtek-logo.png.asset.json";
import tongherAsset from "@/assets/tongher-logo.jpg.asset.json";
import gatexpertAsset from "@/assets/gatexpert-logo.jpeg.asset.json";
import centurionAsset from "@/assets/centurion-logo.png.asset.json";
import bahriaAsset from "@/assets/bahria-town-logo.png.asset.json";
import parkviewAsset from "@/assets/park-view-city-logo.jpg.asset.json";
import dhaAsset from "@/assets/dha-lahore-logo.jpg.asset.json";

export const site = {
  name: "One Point Solution",
  domain: "https://onepointsolutionpk.com",
  phoneDisplay: "03265284800",
  phoneHref: "tel:+923265284800",
  whatsapp: "https://wa.me/923265284800",
  facebook: "https://www.facebook.com/profile.php?id=61567149481360",
  logo: logoAsset.url,
  displayImage: displayAsset.url,
  heroImage: heroAsset.url,
} as const;

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
  { name: "Nemtek", image: nemtekAsset.url, category: "Electric fencing" },
  { name: "Tongher", image: tongherAsset.url, category: "Electric fencing" },
  { name: "GateXpert", image: gatexpertAsset.url, category: "Gate automation" },
  { name: "Centurion", image: centurionAsset.url, category: "Gate automation" },
  { name: "Dahua", category: "CCTV" },
  { name: "Hikvision", category: "CCTV" },
  { name: "Pollo", category: "CCTV" },
] as const;

export const clients = [
  { name: "Bahria Town", image: bahriaAsset.url },
  { name: "Park View City Islamabad", image: parkviewAsset.url },
  { name: "DHA Lahore", image: dhaAsset.url },
  { name: "Syed Brother Builders" },
  { name: "Coca-Cola, Raiwind Road" },
] as const;

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
  { value: "1,000+", label: "Projects Completed" },
  { value: "24/7", label: "Availability" },
  { value: "3", label: "Physical Offices" },
] as const;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
] as const;
