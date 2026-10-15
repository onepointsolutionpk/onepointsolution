import electricFenceImage from "@/assets/IMG_20260808_170309_172.jpg";
import cctvCamerasImage from "@/assets/diy-camera-vs-professional-installation.jpeg";
import gateAutomationImage from "@/assets/1791916171446.jpg";
import fireAlarmImage from "@/assets/fire-alarm-system-installation.jpg";

// Detail-page content only; homepage cards and their image mappings remain untouched.
export const serviceDetails = {
  "electric-fencing": {
    image: electricFenceImage,
    alt: "Electric fence wires and posts installed along a property boundary",
    heading: "A considered first line of perimeter deterrence",
    intro: "Electric fencing adds a visible deterrent along a property's boundary. One Point Solution plans the fence around wall conditions, gates and everyday access, with device and monitoring options discussed before installation.",
    overview: "An electric fence uses an energizer connected to an insulated wire system. Fence monitoring and an alarm can help identify a disturbance where the selected device supports those functions. The layout, earthing, wire tension and separation from normal access areas all need careful consideration. It is a layer of security, not a guarantee against intrusion, and should be considered alongside cameras and controlled entry.",
    features: [
      { title: "Residential boundary planning", copy: "A layout can follow suitable boundary walls around villas, homes and other residential plots. Gates, corners, adjacent structures and areas accessible to people are assessed rather than treated as a standard package." },
      { title: "Alarm and mobile monitoring", copy: "Alarm integration and Android or iPhone access are available where supported by the selected device, Wi-Fi connection and app. The quotation should identify what is included and what requires an additional component." },
      { title: "Installation and upkeep", copy: "Post positioning, insulation, tension and earthing are important parts of the installation. Periodic checks help identify loose wires, vegetation contact, worn components or a change in the boundary layout." },
    ],
    benefits: ["Visible perimeter deterrence", "Boundary coverage planned around property layout", "Alarm notification where supported", "Mobile monitoring with compatible equipment and connectivity", "Can complement CCTV and gate access"],
    applications: ["Residential: boundary walls and gates, with consideration for everyday family access.", "Commercial: offices, business premises and storage yards with suitable perimeter structures.", "Industrial: larger compounds and facility boundaries, planned around operational access."],
    faqs: [
      { question: "What determines electric fence installation pricing?", answer: "The perimeter length, wall and gate conditions, post layout, selected Tongher or Nemtek device, wiring, power supply and monitoring requirements all affect the quotation. Share your location and boundary details for a property-specific quote." },
      { question: "Are Wi-Fi, UPS and mobile access included in every installation?", answer: "Not necessarily. The supplied component list describes equipment options for the proposed system. Device selection and configuration determine which features are included; standard and optional items should be confirmed in the written quotation." },
      { question: "Does the voltage rating describe the actual shock output?", answer: "No. The listed 12,000 DC and 9,000 DC voltage figures are owner-supplied device specifications, not independently verified shock-output measurements or a performance guarantee. Device documentation and installation requirements should be checked before selection." },
      { question: "Can an electric fence prevent every intrusion?", answer: "No single system can prevent every intrusion or be described as completely safe. Appropriate placement, warning signs, installation and maintenance matter, and fencing works best as part of a wider property-security plan." },
      { question: "What warranty and battery backup can I expect?", answer: "Warranty terms depend on the selected equipment and must be confirmed with your quotation; no fixed duration is stated here. The supplied lithium-battery specification is 5–6 hours of backup, with actual duration dependent on load, battery condition and configuration." },
    ],
  },
  "cctv-cameras": {
    image: cctvCamerasImage,
    alt: "CCTV camera equipment and professional installation comparison",
    heading: "Useful surveillance starts with the right camera positions",
    intro: "A CCTV system should make important activity easier to review, not simply add cameras to a building. One Point Solution considers entrances, boundaries, movement routes and your viewing requirements when discussing a camera layout.",
    overview: "Cameras capture images from selected positions and send them to a compatible recording or viewing system. The result depends on lens choice, image resolution, lighting, mounting position and recorder settings. Camera count alone does not determine coverage: identifying blind spots and the level of detail needed at each location is essential.",
    features: [
      { title: "Placement and visibility", copy: "Entrances, driveways, counters, corridors and yards each need a different viewing angle. Mounting height, lighting and obstructions are reviewed so the layout addresses the activity you want to observe while respecting neighbouring and private areas." },
      { title: "Live viewing and recording", copy: "Compatible systems can provide live viewing and recorded playback. Storage duration varies with camera count, resolution, recording schedule and drive capacity; these requirements should be agreed before equipment selection." },
      { title: "Night vision and mobile access", copy: "Infrared or low-light viewing is available on equipment that supports it, with results depending on lighting and installation conditions. Remote mobile access requires compatible cameras or a recorder, configuration and a suitable internet connection." },
    ],
    benefits: ["Coverage focused on priority activity areas", "Live oversight with compatible equipment", "Recorded footage for later review where configured", "Night-time viewing with suitable camera models", "Remote access where supported and connected"],
    applications: ["Residential: entrances, driveways and shared access areas, with privacy considered.", "Commercial: shops, offices, reception areas and storage spaces.", "Industrial: loading bays, movement routes, warehouses and compound access points."],
    faqs: [
      { question: "How many cameras does my property need?", answer: "The number depends on the layout and the areas you need to see. A review of entrances, movement routes, blind spots and desired image detail is more useful than choosing a fixed camera count." },
      { question: "Can I view cameras on my phone?", answer: "Remote viewing is possible with supported equipment and the correct network setup. Availability depends on the selected camera or recorder, app compatibility and internet connectivity." },
      { question: "How long will recordings be retained?", answer: "Retention depends on storage capacity, camera resolution, frame rate, compression and recording schedule. Your intended playback period should be discussed when the system is specified." },
      { question: "Will cameras record clearly at night?", answer: "That depends on the model, its infrared or low-light capability, available light and placement. Night vision is not a universal feature and does not guarantee the same detail in every environment." },
    ],
  },
  "gate-automation": {
    image: gateAutomationImage,
    alt: "Gate automation installation at a property entrance",
    heading: "Controlled entry, matched to the gate and its surroundings",
    intro: "Gate automation offers convenient vehicle access without manually moving a suitable gate each time. One Point Solution considers the existing gate, available movement space and access needs before discussing an automation arrangement.",
    overview: "A gate operator uses a motor and control unit to move a compatible gate. Sliding and swing arrangements require different equipment and installation conditions. Gate weight, dimensions, mechanical condition, usage frequency and power availability influence selection; an existing gate is not automatically suitable for conversion.",
    features: [
      { title: "Sliding and swing options", copy: "Sliding operators require a suitable travel path and mechanical arrangement. Swing operators need appropriate hinges, support and opening clearance. Suitability is assessed against the selected manufacturer's requirements." },
      { title: "Access controls", copy: "Remote controls and other access devices may be available with compatible equipment. Any keypad, intercom or wider access-control connection should be confirmed for the chosen operator rather than assumed." },
      { title: "Professional installation planning", copy: "Gate movement, mounting positions, cabling, power and the areas used by people are considered together. Detection accessories, manual release and backup arrangements depend on the selected system and must be specified explicitly." },
    ],
    benefits: ["Convenient opening for a suitable gate", "Access controls matched to entry requirements", "Less need for manual gate movement during normal powered operation", "Options for assessed sliding or swing gates", "Installation planned around site traffic and clearance"],
    applications: ["Residential: driveway and home entrances with suitable gate construction.", "Commercial: office entrances and parking access with defined usage needs.", "Industrial: vehicle entry points, subject to gate suitability and duty requirements."],
    faqs: [
      { question: "Can my existing gate be automated?", answer: "Possibly, but its weight, size, hinges or track, movement, supporting structure and condition need assessment. Some gates require mechanical work or are unsuitable for the proposed operator." },
      { question: "Do you offer sliding and swing gate automation?", answer: "Both arrangements can be discussed. Equipment selection depends on the gate construction, available clearance, usage pattern and manufacturer specifications." },
      { question: "What happens during a power outage?", answer: "Manual release and backup-power options vary by operator and configuration. These should be confirmed in the quotation, along with the procedure for accessing the property when power is unavailable." },
      { question: "Are safety sensors and intercom connections standard?", answer: "Do not assume they are. Available sensors, accessories and integrations depend on the chosen equipment and site layout. The installation plan should identify supported features and any optional additions." },
    ],
  },
  "fire-alarm-systems": {
    image: fireAlarmImage,
    alt: "Fire alarm system equipment being installed in a building",
    heading: "Early warning begins with thoughtful detection planning",
    intro: "Fire alarm systems help alert occupants to signs of a developing fire so they can follow the building's response procedures. One Point Solution discusses the premises, occupied areas and environment before planning detection and notification coverage.",
    overview: "A typical arrangement connects suitable detectors and, where specified, manual call points to a control panel and alarm notification devices. The system is intended to provide warning, not prevent or extinguish a fire. Detector choice and positioning must reflect the building's use, environmental conditions and the requirements established for the project.",
    features: [
      { title: "Suitable detector types", copy: "Smoke and heat detectors serve different environments. Dust, steam, cooking activity, temperature and airflow affect suitability. Detector selection should be based on an assessment rather than using the same type throughout every space." },
      { title: "Alarm notification and coverage", copy: "Sounders and any supported visual notification devices are planned around occupied areas and the agreed system design. Panel type, zoning and compatible devices depend on the selected equipment and building requirements." },
      { title: "Testing and maintenance", copy: "Routine inspection, testing and attention to faults help maintain system readiness. Maintenance arrangements, battery checks and any service schedule should be discussed for the equipment installed and the premises involved." },
    ],
    benefits: ["Supports early warning of detected fire conditions", "Detector choice suited to the environment", "Notification planned around occupied spaces", "Coverage discussed before quotation", "Maintenance needs identified for the installed system"],
    applications: ["Residential: homes and shared residential areas where the proposed system is suitable.", "Commercial: offices, shops and other occupied business premises.", "Industrial: warehouses and facilities, with detection chosen for local operating conditions."],
    faqs: [
      { question: "Should I choose smoke detectors or heat detectors?", answer: "The right choice depends on each area's environment and intended detection needs. Dust, steam, cooking and temperature conditions should be assessed before detector types and positions are selected." },
      { question: "Does a fire alarm prevent fires?", answer: "No. It provides warning when specified detection conditions are recognised. It does not replace fire prevention, evacuation planning, firefighting equipment or appropriate building management." },
      { question: "Will the installation be certified or compliant with a particular regulation?", answer: "No certification or regulatory-compliance claim is made here. Any applicable project requirements, approvals or documentation must be established and verified separately before work is agreed." },
      { question: "Does a fire alarm need ongoing maintenance?", answer: "Yes. Inspection, testing, battery checks and fault attention are important. The appropriate schedule and responsibilities depend on the installed equipment and the building's requirements." },
    ],
  },
} as const;

export const electricFenceComponents = [
  "Brand devices: Tongher and Nemtek (also supplied as ‘Nemtec’).",
  "Tongher: 12,000 DC voltage, as supplied.",
  "Nemtek/Nemtec: 9,000 DC voltage, as supplied.",
  "1.6 mm stainless-steel wires, Grade 316.",
  "0.75 × 0.75 stainless-steel posts.",
  "1.1 mm round-shaped post supports.",
  "Jurassic insulators and L-shaped screws.",
  "High-tension springs and stainless-steel hooks.",
  "Safety caps for posts.",
  "Built-in alarm system.",
  "Built-in UPS.",
  "Built-in Wi-Fi card.",
  "Lithium battery with 5–6 hours of backup, as supplied.",
  "Remote access through Android and iPhone.",
  "Distribution box.",
  "Industrial light plug.",
  "Power 3/29 cable.",
  "High-tension wire.",
  "6 mm tube thimble.",
  "Warning sign plates.",
  "Mobile app.",
  "Indication light.",
  "Earthing/grounding rod for lightning protection.",
] as const;
