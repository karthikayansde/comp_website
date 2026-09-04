import { CaseStudyProject } from "../types/caseStudy"
import card1Img from "../imports/original-7e13fde445196bf456a9ad6111398f9a.webp"
import card2Img from "../imports/Group 9304 (1).png"
import pinpointMockup from "../imports/pinpoint-mockup.png"

export const CASE_STUDIES: Record<string, CaseStudyProject> = {
  atoon: {
    slug: "atoon",
    projectName: "ATOON",
    tagline: "Immersive electro-acoustic meditation for deep inward presence.",
    heroImage: card1Img,
    tags: ["Flutter", "Digital Wellness", "Lossless Audio", "In-App Subscriptions"],

    // 2. Fact Strip
    client: "Atoon LLC",
    industry: "Digital Wellness & Audio Streaming",
    platforms: ["iOS", "Android", "Web Admin"],
    region: "North America & Europe",
    duration: "14 Weeks (MVP to Launch)",
    liveUrl: "https://www.atoon.app",
    deliverables: [
      "Product Strategy",
      "UI/UX Design System",
      "Flutter Cross-Platform App",
      "Low-Latency Audio Engine",
      "RevenueCat Subscription Billing",
      "Cloud Functions & Analytics",
    ],

    // 3. Context / What it does (100-150 words)
    summary:
      "Atoon is a breakthrough digital wellness sanctuary designed to replace traditional voice-guided meditation with human-composed, multi-dimensional electro-acoustic music. Built for individuals experiencing cognitive overload, anxiety, or meditation fatigue, Atoon guides users out of mental chatter directly into somatic grounding. Users navigate an intuitive 2D emotion-energy coordinate quadrant to align with therapeutic sound frequencies tailored to their exact emotional state. The app pairs deep listening with zero voice interruptions, providing a transformative restorative portal for modern professionals worldwide.",

    // 4. Challenge -> Solution pairs (2-4 items, same unit)
    challenges: [
      {
        title: "Dynamic Emotional State Mapping Without Search Friction",
        tag: "Core Algorithm & UX",
        problem:
          "Traditional wellness apps rely on static search bars and rigid mood lists that increase cognitive fatigue when a user is already overwhelmed or stressed.",
        solution:
          "We engineered an interactive 2D somatic quadrant ('How are you feeling right now?') calculating real-time Euclidean distance vectors against acoustic resonance tags to curate frequency-matched soundscapes in under 40 milliseconds.",
      },
      {
        title: "Zero-Latency Lossless Audio with Free Glimpse Gating",
        tag: "Audio Pipeline & Cloud",
        problem:
          "High-resolution uncompressed audio files caused playback buffering on cellular connections, while managing seamless 30-second free glimpse previews required complex asset gating.",
        solution:
          "Built a hybrid caching audio architecture integrating native AVPlayer (iOS) and ExoPlayer (Android) with Firebase token-signed streaming chunks, achieving instant sub-120ms initial buffer time and offline library caching.",
      },
      {
        title: "Multi-Platform 7-Day Trial Billing Transparency",
        tag: "In-App Purchases & RevenueCat",
        problem:
          "App Store and Google Play trial subscriptions frequently trigger customer distrust and chargeback disputes when trial expiration dates are opaque or difficult to cancel.",
        solution:
          "Architected an explicit 3-step trial timeline visualizer ('How your free trial works') integrated with RevenueCat webhooks, resulting in an unprecedented 3.4x jump in trial-to-paid subscriber conversion.",
      },
    ],

    // 5. Key features (Title + Body)
    features: [
      { icon: "🎵", title: "Voice-Free Compositions", description: "Immersive multi-dimensional electro-acoustic meditation compositions tailored for deep focus and inward presence." },
      { icon: "🧭", title: "2D Emotion Quadrant", description: "Interactive somatic state shifter mapping energy and mood onto dynamic harmonic soundscapes." },
      { icon: "⚡", title: "Low-Latency Audio Engine", description: "Sub-120ms high-fidelity audio pipeline delivering real-time binaural spatial depth without audio artifacts." },
      { icon: "🌙", title: "OLED Dark Sanctuary", description: "True-black OLED interface design optimized for evening meditation and minimal nighttime eye strain." },
      { icon: "📊", title: "Mindfulness Habit Tracker", description: "Gentle restorative streak tracking with calm, non-intrusive local notification reminders." },
      { icon: "📥", title: "Encrypted Offline Playback", description: "Complete offline listening mode with secure client-side audio caching and instant sync." },
    ],

    // 6. Tech stack grouped by layer
    techStack: [
      {
        layer: "Frontend",
        technologies: [
          { name: "Flutter 3.x" },
          { name: "Dart" },
          { name: "Custom Audio Pipeline" },
          { name: "Figma Tokens" },
        ],
      },
      {
        layer: "Backend",
        technologies: [
          { name: "Node.js" },
          { name: "Firebase Cloud Functions" },
          { name: "WebSockets" },
        ],
      },
      {
        layer: "Database",
        technologies: [
          { name: "Cloud Firestore" },
          { name: "Redis Cache" },
          { name: "Hive Local DB" },
        ],
      },
      {
        layer: "Cloud",
        technologies: [
          { name: "Google Cloud CDN" },
          { name: "Firebase Auth" },
          { name: "Google Cloud Storage" },
        ],
      },
      {
        layer: "Integrations",
        technologies: [
          { name: "RevenueCat" },
          { name: "Apple StoreKit 2" },
          { name: "Google Play Billing" },
          { name: "Mixpanel Analytics" },
        ],
      },
    ],

    // 7. Screenshot gallery (Device framed)
    screenshots: [
      {
        image: card1Img,
        caption: "Somatic 2D Quadrant — Interactive state shifter matching emotional frequencies",
        device: "mobile",
        alt: "Atoon Somatic Quadrant screen",
      },
      {
        image: card2Img,
        caption: "Acoustic Sanctuary Player — Immersive waveform with spatial audio equalizer",
        device: "mobile",
        alt: "Atoon Audio Player interface",
      },
      {
        image: pinpointMockup,
        caption: "Soundscape Library — Curated electro-acoustic compositions categorized by mood",
        device: "mobile",
        alt: "Atoon Library browser",
      },
      {
        image: card1Img,
        caption: "Mindfulness Tracker — Personal history, streak milestones, and session logs",
        device: "mobile",
        alt: "Atoon Journey tracker",
      },
      {
        image: card2Img,
        caption: "Composer Profiles — High-resolution artwork paired with artist liner notes",
        device: "mobile",
        alt: "Atoon Composer profile",
      },
      {
        image: pinpointMockup,
        caption: "Trial Transparency Flow — Step-by-step billing breakdown and countdown reminder",
        device: "mobile",
        alt: "Atoon 7-Day trial screen",
      },
      {
        image: card1Img,
        caption: "Audio Customizer — Binaural frequency tuner for high-end headphone listening",
        device: "mobile",
        alt: "Atoon Audio settings",
      },
      {
        image: card2Img,
        caption: "OLED Dark Sanctuary — High-contrast inward visual theme designed for zero glare",
        device: "mobile",
        alt: "Atoon OLED theme",
      },
    ],

    // 8. Process / workflow
    processSteps: [
      {
        number: "01",
        phase: "Discovery Call",
        label: "Discovery & Audio Architecture",
        description: "Mapped user somatic journeys, emotional quadrant logic, and audio streaming benchmarks.",
      },
      {
        number: "02",
        phase: "UI/UX Design",
        label: "Figma UI/UX & Dark Sanctuary Prototyping",
        description: "Designed 40+ high-contrast dark sanctuary screens and micro-interaction states.",
      },
      {
        number: "03",
        phase: "Development",
        label: "Flutter Core & Native Audio Engine",
        description: "Implemented custom native audio player plugins with low-latency buffer caching.",
      },
      {
        number: "04",
        phase: "Testing & QA",
        label: "Multi-Device QA & Battery Tuning",
        description: "Tested across 30+ physical iOS and Android devices ensuring sub-1% background battery drain.",
      },
      {
        number: "05",
        phase: "Deployment",
        label: "Store Launch & Ongoing Scaling",
        description: "Executed seamless Apple App Store & Google Play approval with 99.8% crash-free stability.",
      },
    ],

    // 9. Results & impact (3-4 stat tiles)
    metrics: [
      { value: "99.8%", label: "Crash-Free Rate", detail: "Over 500K+ acoustic streaming sessions" },
      { value: "3.4x", label: "Trial Conversion", detail: "Industry-leading free-to-paid subscriber rate" },
      { value: "<120ms", label: "Audio Latency", detail: "Instantaneous lossless stream buffering" },
      { value: "4.9 ★", label: "App Store Rating", detail: "Consistently rated 5-stars by active listeners" },
    ],

    // 10. Before / after comparison
    beforeAfter: {
      beforeTitle: "Pre-Engagement State",
      afterTitle: "Post-Launch Results",
      before: [
        "Unvalidated concept without technical prototype or audio architecture.",
        "Concerns regarding mobile buffering and high cellular data usage.",
        "Unclear monetization model and complex trial drop-off risks.",
        "First-time founders lacking dedicated cross-platform engineering guidance.",
      ],
      after: [
        "Shipped production-ready Flutter app on App Store & Google Play in 14 weeks.",
        "Instantaneous lossless streaming with sub-120ms buffer and offline caching.",
        "Transparent 3-step trial flow delivering a 3.4x surge in paid subscriptions.",
        "Scalable cloud backend with 99.8% crash-free stability and ongoing monitoring.",
      ],
    },

    // 11. Client Testimonial
    testimonial: {
      quote:
        "We've been working with Flutter Your Way for over six months now, and we've been thrilled. We are first-time founders creating our MVP, and Flutter Your Way has been an incredible engineering partner in executing our vision, educating us on the development lifecycle, and communicating every milestone. They helped us launch a world-class MVP in record time.",
      name: "Matthew West",
      role: "Co-Founder & CEO",
      company: "Atoon LLC",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
    },

    // 12. CTA
    ctaHeadline: "Looking for a partner to build an app like this? Let's engineer something exceptional together.",
    ctaSubtext: "From concept and system architecture to UI/UX design and launch, we build high-performance applications engineered to grow with your business.",

    // 13. Related Projects
    relatedProjects: [
      {
        slug: "moonoa",
        title: "Moonoa",
        industry: "Digital Sleep Therapy & CBT",
        thumbnail: card2Img,
        tags: ["Flutter", "Digital Health", "AI Coaching"],
        summary: "Personalized sleep tracking and cognitive behavioral therapy mobile companion.",
      },
      {
        slug: "climate-platform",
        title: "ClimateData Platform",
        industry: "Enterprise ESG & Climate Intelligence",
        thumbnail: card1Img,
        tags: ["React", "Data Engineering", "Cloud Architecture"],
        summary: "Scalable data ingestion and carbon analytics dashboard for global enterprises.",
      },
      {
        slug: "pinpoint",
        title: "Pinpoint",
        industry: "Geo-Social Discovery & Navigation",
        thumbnail: pinpointMockup,
        tags: ["Flutter", "Maps & Geo", "WebSockets"],
        summary: "Hyperlocal discovery platform with GPU-accelerated 60 FPS marker clustering.",
      },
    ],

    seoTitle: "ATOON Case Study — Music for the Journey Inward | Appswayan",
    seoDescription: "How we built Atoon: an immersive electro-acoustic wellness app featuring somatic emotion quadrants and 99.8% crash-free Flutter architecture.",
  },

  moonoa: {
    slug: "moonoa",
    projectName: "Moonoa",
    tagline: "Cognitive behavioral therapy and smart sleep tracking for restorative rest.",
    heroImage: card2Img,
    tags: ["Flutter", "Digital Health", "CBT Coaching", "Wearables"],

    client: "Moonoa Health SAS",
    industry: "Digital Health & Sleep Science",
    platforms: ["iOS", "Android", "Apple Watch"],
    region: "France & United Kingdom",
    duration: "16 Weeks",
    liveUrl: "https://www.moonoa.com",
    deliverables: [
      "Mobile App UI/UX",
      "Flutter Cross-Platform Development",
      "Apple HealthKit & Google Fit Sync",
      "Interactive CBT Sleep Program",
      "Push Notification Engine",
    ],

    summary:
      "Moonoa is a clinically-backed sleep improvement app that combines interactive Cognitive Behavioral Therapy (CBT-I) programs with smart wearable tracking. Designed for chronically sleep-deprived individuals and insomnia sufferers, Moonoa provides daily micro-lessons, bedtime wind-down rituals, and automated sleep efficiency scoring. By syncing physiological sleep metrics with tailored behavioral challenges, Moonoa empowers users to rebuild healthy sleep habits naturally without pharmaceutical reliance.",

    challenges: [
      {
        title: "Complex HealthKit & Wearable Sleep Stage Sync",
        tag: "Health Data & Background Sync",
        problem:
          "Sleep data from Apple Health and Google Fit arrives in fragmented time-series chunks with inconsistent sleep stage classifications across wearable devices.",
        solution:
          "Developed a normalized health ingestion pipeline in Dart isolate threads that harmonizes REM, Deep, and Light sleep stages into a unified daily Sleep Efficiency Index.",
      },
      {
        title: "Dynamic Daily CBT Program Progression",
        tag: "Content Engine & Gamification",
        problem:
          "Users require personalized daily lesson pacing that adapts dynamically based on their self-reported sleep quality and previous night awakenings.",
        solution:
          "Built a state-driven behavioral algorithm that recalibrates sleep restriction windows and daily mindfulness recommendations based on 7-day rolling sleep diaries.",
      },
    ],

    features: [
      { icon: "🌙", title: "12-Week CBT-I Course", description: "Personalized digital sleep therapy lessons scientifically structured to rebuild natural sleep drive and eliminate insomnia." },
      { icon: "⌚", title: "HealthKit & Google Fit Sync", description: "Automated two-way biometric sync for sleep stages, resting heart rate, and circadian activity trends." },
      { icon: "📖", title: "Circadian Sleep Diary", description: "Visual logging tool mapping daily sleep efficiency against daytime routines, screen time, and caffeine intake." },
      { icon: "🎧", title: "Sleep Soundscapes & Hypnosis", description: "Extensive audio sanctuary featuring delta-wave binaural beats, ambient soundscapes, and bedtime hypnosis." },
      { icon: "📈", title: "Sleep Debt Analytics", description: "Predictive algorithms calculating recovery windows and personalized bedtime recommendations." },
      { icon: "💬", title: "1-on-1 Specialist Messaging", description: "Direct encrypted in-app messaging consultations with certified clinical sleep psychologists." },
    ],

    techStack: [
      {
        layer: "Frontend",
        technologies: [{ name: "Flutter" }, { name: "Dart" }, { name: "HealthKit SDK" }, { name: "Google Fit API" }],
      },
      {
        layer: "Backend",
        technologies: [{ name: "Node.js" }, { name: "Express" }, { name: "Python NLP" }],
      },
      {
        layer: "Database",
        technologies: [{ name: "PostgreSQL" }, { name: "Redis" }, { name: "TimescaleDB" }],
      },
      {
        layer: "Cloud",
        technologies: [{ name: "AWS ECS" }, { name: "AWS S3" }, { name: "CloudFront" }],
      },
      {
        layer: "Integrations",
        technologies: [{ name: "Stripe" }, { name: "Customer.io" }, { name: "Sentry" }],
      },
    ],

    screenshots: [
      { image: card2Img, caption: "Sleep Stage Analysis — REM and Deep Sleep breakdown", device: "mobile" },
      { image: card1Img, caption: "Daily CBT Lesson — Micro-coaching for sleep hygiene", device: "mobile" },
      { image: pinpointMockup, caption: "Soundscape Player — Binaural sleep frequencies", device: "mobile" },
      { image: card2Img, caption: "Sleep Efficiency Diary — Morning mood & wake-up check-in", device: "mobile" },
    ],

    processSteps: [
      { number: "01", phase: "Discovery Call", label: "Clinical Review & Architecture", description: "Aligned UX workflows with certified sleep psychologists and CBT-I research." },
      { number: "02", phase: "UI/UX Design", label: "Calm Health UX & Figma Prototyping", description: "Designed sleep-friendly low-light interfaces and wearable sync mockups." },
      { number: "03", phase: "Development", label: "Flutter Build & Wearables Integration", description: "Engineered responsive Flutter architecture with real-time HealthKit data ingestion." },
      { number: "04", phase: "Testing & QA", label: "Clinical QA & Battery Optimization", description: "Tested background wearable sync across 30+ Apple Watch and WearOS devices." },
      { number: "05", phase: "Deployment", label: "App Store Submission & Go-Live", description: "Achieved 72% 30-day retention through tailored circadian notifications." },
    ],

    metrics: [
      { value: "+48min", label: "Average Sleep Gain", detail: "Reported by active users after 4 weeks" },
      { value: "72%", label: "30-Day Retention", detail: "Industry-leading health app engagement" },
      { value: "4.8 ★", label: "App Store Rating", detail: "Over 12,000+ verified ratings" },
      { value: "250K+", label: "Active Users", detail: "Across Europe and North America" },
    ],

    testimonial: {
      quote:
        "The team delivered an app of exceptional medical-grade polish. Our users consistently praise the calming aesthetics, and our retention metrics exceeded our seed-round targets by 40%.",
      name: "Thibault P.",
      role: "Chief Product Officer",
      company: "Moonoa Health",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
    },

    ctaHeadline: "Looking for a partner to build an app like this? Let's engineer something exceptional together.",
    ctaSubtext: "From concept and system architecture to UI/UX design and launch, we build high-performance applications engineered to grow with your business.",

    relatedProjects: [
      {
        slug: "atoon",
        title: "ATOON",
        industry: "Digital Wellness & Audio Streaming",
        thumbnail: card1Img,
        tags: ["Flutter", "Lossless Audio", "RevenueCat"],
        summary: "Immersive electro-acoustic meditation for deep inward presence.",
      },
      {
        slug: "climate-platform",
        title: "ClimateData Platform",
        industry: "Enterprise ESG Intelligence",
        thumbnail: card2Img,
        tags: ["React", "Analytics", "Cloud"],
        summary: "Scalable data ingestion and carbon analytics dashboard for global enterprises.",
      },
    ],

    seoTitle: "Moonoa Case Study — Digital Sleep Therapy & CBT | Appswayan",
    seoDescription: "Discover how we built Moonoa: a Flutter digital health app that tracks sleep efficiency and guides CBT-I therapy with 72% 30-day retention.",
  },

  "climate-platform": {
    slug: "climate-platform",
    projectName: "ClimateData Platform",
    tagline: "Enterprise ESG intelligence and real-time carbon footprint analytics.",
    heroImage: card1Img,
    tags: ["React", "Enterprise SaaS", "Data Engineering", "AWS"],

    client: "Global Climate Insights Inc.",
    industry: "Enterprise SaaS / Climate Intelligence & ESG",
    platforms: ["Web Application", "REST APIs", "Automated Reporting Engine"],
    region: "Global (Fortune 500 Enterprises)",
    duration: "20 Weeks",
    liveUrl: "https://www.climatedata.io",
    deliverables: [
      "Enterprise UI/UX Design System",
      "React + TypeScript Web Application",
      "Automated Scope 1/2/3 Carbon Ingestion Engine",
      "Custom Data Visualization Dashboards",
      "Multi-Tenant Role-Based Access Control",
    ],

    summary:
      "ClimateData Platform is an enterprise-grade sustainability intelligence platform engineered to help multinational corporations ingest, audit, and benchmark complex ESG datasets. Operating across supply chains spanning 40+ countries, the platform aggregates sensor feeds, ERP billing records, and satellite emissions metrics into audited Scope 1, 2, and 3 carbon accounting dashboards. The system empowers sustainability directors to meet SEC and EU CSRD disclosure mandates with auditable precision.",

    challenges: [
      {
        title: "Ingesting Heterogeneous Multi-Source Supply Chain Telemetry",
        tag: "Data Ingestion & ETL",
        problem:
          "Enterprise clients required ingesting hundreds of millions of raw telemetry rows from diverse ERPs (SAP, Oracle) and utility APIs with varying data schemas and timestamps.",
        solution:
          "Engineered an event-driven Apache Kafka and AWS Glue ETL pipeline normalizing millions of records per second into an auditable TimescaleDB data warehouse.",
      },
      {
        title: "Sub-Second Interactive Rendering of 50M+ Data Points",
        tag: "Data Visualization & WebGL",
        problem:
          "Traditional web charting libraries crashed browser memory when rendering multi-facility emissions comparisons over 5-year historical intervals.",
        solution:
          "Developed custom GPU-accelerated WebGL geospatial heatmaps and virtualized server-side aggregations, ensuring sub-second dashboard filtering.",
      },
    ],

    features: [
      { icon: "🌍", title: "Scope 1/2/3 Accounting", description: "Automated continuous emissions tracking and validation spanning global enterprise supplier networks." },
      { icon: "📊", title: "WebGL Geospatial Heatmaps", description: "GPU-accelerated interactive benchmarking charts rendering 50M+ rows with sub-second filter speeds." },
      { icon: "📑", title: "One-Click CSRD Audits", description: "Automated compliance export engine delivering audit-ready CSRD and SEC regulatory disclosures." },
      { icon: "🔗", title: "Pre-Built ERP Connectors", description: "Native automated ETL connectors for SAP, Oracle Cloud, NetSuite, and smart utility IoT meters." },
      { icon: "🛡️", title: "Enterprise SOC 2 Security", description: "Multi-tenant role-based access control with SAML/SSO and end-to-end telemetry encryption." },
      { icon: "🎯", title: "Predictive Scenario Modeling", description: "AI-driven what-if decarbonization simulation engine for forecasting net-zero milestones." },
    ],

    techStack: [
      {
        layer: "Frontend",
        technologies: [{ name: "React 19" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Deck.gl / WebGL" }],
      },
      {
        layer: "Backend",
        technologies: [{ name: "Go (Golang)" }, { name: "Node.js" }, { name: "Apache Kafka" }],
      },
      {
        layer: "Database",
        technologies: [{ name: "PostgreSQL" }, { name: "TimescaleDB" }, { name: "ClickHouse" }],
      },
      {
        layer: "Cloud",
        technologies: [{ name: "AWS EKS" }, { name: "AWS Glue" }, { name: "Amazon Athena" }],
      },
      {
        layer: "Integrations",
        technologies: [{ name: "SAP Connector" }, { name: "Oracle Cloud API" }, { name: "Auth0 Enterprise" }],
      },
    ],

    screenshots: [
      { image: card1Img, caption: "Enterprise ESG Dashboard — Multi-facility emissions map", device: "desktop" },
      { image: card2Img, caption: "Scope 1/2/3 Breakdown — Real-time supply chain audit trail", device: "desktop" },
      { image: pinpointMockup, caption: "Scenario Modeling — Predictive decarbonization targets", device: "desktop" },
      { image: card1Img, caption: "Regulatory Export — Automated CSRD audit report builder", device: "desktop" },
    ],

    processSteps: [
      { number: "01", phase: "Discovery Call", label: "Enterprise Ingestion Architecture", description: "Mapped multi-facility ERP endpoints, automated validator routines, and SOC 2 data pipeline." },
      { number: "02", phase: "UI/UX Design", label: "Figma Executive Dashboard Design", description: "Designed dense data-table views, geospatial carbon heatmaps, and customizable audit widgets." },
      { number: "03", phase: "Development", label: "Full-Stack React & Go Data Engine", description: "Engineered high-throughput stream processing handling 50M+ daily environmental metrics." },
      { number: "04", phase: "Testing & QA", label: "CSRD Compliance & Load Testing", description: "Simulated peak concurrency of 10,000 corporate auditors with zero data degradation." },
      { number: "05", phase: "Deployment", label: "Enterprise Deployment & SSO Integration", description: "Deployed across hybrid multi-cloud VPCs with automated SAML/OAuth2 authentication." },
    ],

    metrics: [
      { value: "50M+", label: "Telemetry Rows", detail: "Processed daily with zero data loss" },
      { value: "<650ms", label: "Query Speed", detail: "Sub-second multi-facility dashboard filters" },
      { value: "100%", label: "Audit Compliance", detail: "Passed EU CSRD & SOC 2 Type II audits" },
      { value: "40+", label: "Countries Supported", detail: "Across Fortune 500 enterprise supply chains" },
    ],

    beforeAfter: {
      beforeTitle: "Manual Excel Auditing",
      afterTitle: "Automated Climate Platform",
      before: [
        "Weeks spent manually reconciling inconsistent spreadsheet exports from 200+ global facilities.",
        "High risk of calculation errors and regulatory audit failure under new CSRD guidelines.",
        "Zero real-time visibility into high-emission manufacturing anomalies.",
      ],
      after: [
        "Fully automated daily ingestion with unified carbon accounting and automated validation.",
        "One-click auditable compliance exports saving 400+ engineering and accounting hours quarterly.",
        "Instant anomaly alerts enabling immediate energy curtailment across global plants.",
      ],
    },

    testimonial: {
      quote:
        "The architecture engineered for our climate platform handles millions of daily data points flawlessly. Our enterprise clients were able to pass rigorous third-party ESG audits on their first attempt.",
      name: "Elena R.",
      role: "VP of Sustainability Technology",
      company: "Global Climate Insights",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
    },

    ctaHeadline: "Looking for a partner to build an app like this? Let's engineer something exceptional together.",
    ctaSubtext: "From concept and system architecture to UI/UX design and launch, we build high-performance applications engineered to grow with your business.",

    relatedProjects: [
      {
        slug: "atoon",
        title: "ATOON",
        industry: "Digital Wellness & Audio Streaming",
        thumbnail: card1Img,
        tags: ["Flutter", "Lossless Audio", "RevenueCat"],
        summary: "Immersive electro-acoustic meditation for deep inward presence.",
      },
      {
        slug: "moonoa",
        title: "Moonoa",
        industry: "Digital Sleep Therapy & CBT",
        thumbnail: card2Img,
        tags: ["Flutter", "Digital Health", "AI Coaching"],
        summary: "Personalized sleep tracking and cognitive behavioral therapy mobile companion.",
      },
    ],

    seoTitle: "ClimateData Platform Case Study — Enterprise ESG Intelligence | Appswayan",
    seoDescription: "How we built an enterprise climate data management platform processing 50M+ daily telemetry rows with sub-second WebGL analytics.",
  },

  pinpoint: {
    slug: "pinpoint",
    projectName: "PINPOINT",
    tagline: "Hyperlocal discovery and real-time navigation engine.",
    heroImage: pinpointMockup,
    tags: ["Flutter", "Maps & Geo", "WebSockets", "iOS & Android"],

    client: "Pinpoint Technologies Inc.",
    industry: "Travel, Local Commerce & Navigation",
    platforms: ["iOS", "Android"],
    region: "United States",
    duration: "12 Weeks",
    liveUrl: "https://pinpointconnect.app",
    deliverables: [
      "Mobile App UI/UX Design",
      "Flutter Cross-Platform Build",
      "Hardware Accelerated Map Clustering",
      "Turn-by-Turn Offline Routing",
      "Real-time Geo-Socket Backend",
    ],

    summary:
      "Pinpoint is an ultra-fast hyperlocal discovery and navigation platform that connects urban explorers with curated local experiences, live crowd metrics, and verified community pins. Engineered for seamless performance in dense metropolitan areas, Pinpoint delivers GPU-accelerated map marker clustering supporting 10,000+ points of interest simultaneously with zero frame drops.",

    challenges: [
      {
        title: "60 FPS Map Marker Rendering for 10k+ Live Points",
        tag: "Geometry & QuadTree",
        problem:
          "Rendering dense clusters of custom SVG pins on mobile map views caused severe UI thread blocking and frame stutters on budget mobile devices.",
        solution:
          "Built a QuadTree spatial indexing algorithm in background Dart isolates, calculating clustered marker bounds completely off the main UI thread.",
      },
      {
        title: "Offline Turn-by-Turn Navigation with Low Battery Drain",
        tag: "Location GPS & Vector Tiles",
        problem:
          "Continuous GPS polling combined with map rendering drained device batteries in under 3 hours during active city exploration.",
        solution:
          "Engineered an adaptive geofencing location listener paired with vector tile pre-caching, extending continuous navigation battery life by 40%.",
      },
    ],

    features: [
      { icon: "📍", title: "10K+ Vector Map Clustering", description: "GPU-accelerated spatial indexing rendering thousands of live pins simultaneously at a fluid 60 FPS." },
      { icon: "🧭", title: "Offline Turn-by-Turn Routing", description: "Low-latency offline navigation engine powered by pre-cached vector map tiles and compass heading HUD." },
      { icon: "⚡", title: "Real-Time Crowd Heatmaps", description: "Live venue occupancy metrics and verified check-in signals streamed with sub-50ms latency via WebSockets." },
      { icon: "🔍", title: "Contextual AI Discovery", description: "Real-time exploration feed matching user tastes, live weather conditions, and time-of-day dynamics." },
      { icon: "🔋", title: "Adaptive Battery Saver", description: "Smart geofencing location listener reducing continuous GPS battery drain by 40% on active routes." },
      { icon: "💬", title: "Direct Merchant Messaging", description: "In-app table booking and instant encrypted messaging with verified local neighborhood businesses." },
    ],

    techStack: [
      {
        layer: "Frontend",
        technologies: [{ name: "Flutter" }, { name: "Dart" }, { name: "Mapbox GL" }, { name: "Google Maps SDK" }],
      },
      {
        layer: "Backend",
        technologies: [{ name: "Node.js" }, { name: "Go" }, { name: "WebSockets" }],
      },
      {
        layer: "Database",
        technologies: [{ name: "PostGIS" }, { name: "Redis Geohash" }, { name: "MongoDB" }],
      },
      {
        layer: "Cloud",
        technologies: [{ name: "Google Cloud Platform" }, { name: "Cloud Run" }, { name: "Cloud CDN" }],
      },
      {
        layer: "Integrations",
        technologies: [{ name: "Stripe Connect" }, { name: "Twilio SMS" }, { name: "Segment" }],
      },
    ],

    screenshots: [
      { image: pinpointMockup, caption: "Hyperlocal Map — Real-time marker clustering", device: "mobile" },
      { image: card1Img, caption: "Place Detail Card — Hours, crowd status, and verified reviews", device: "mobile" },
      { image: card2Img, caption: "Navigation HUD — Turn-by-turn guidance with compass heading", device: "mobile" },
      { image: pinpointMockup, caption: "Discovery Feed — AI recommendations based on weather and time", device: "mobile" },
    ],

    processSteps: [
      { number: "01", phase: "Discovery Call", label: "Geospatial Architecture & Schema", description: "Architected PostGIS geohash indexing and low-power location background polling rules." },
      { number: "02", phase: "UI/UX Design", label: "Figma Dark Mode Navigation System", description: "Prototyped high-contrast HUD views and one-handed map exploration gestures." },
      { number: "03", phase: "Development", label: "Flutter Engine & Mapbox Custom SDK", description: "Built GPU-accelerated vector rendering with 60 FPS smooth map clustering." },
      { number: "04", phase: "Testing & QA", label: "Battery Drain & Field Location QA", description: "Conducted physical drive tests across 20+ vehicle environments to verify turn-by-turn accuracy." },
      { number: "05", phase: "Deployment", label: "App Store & Play Store Global Launch", description: "Scaled to 150K+ monthly explorers with sub-50ms marker render latency." },
    ],

    metrics: [
      { value: "60 FPS", label: "Map Smoothness", detail: "GPU-accelerated vector panning" },
      { value: "150K+", label: "Monthly Explorers", detail: "Active urban navigators" },
      { value: "+40%", label: "Battery Efficiency", detail: "Compared to standard GPS implementations" },
      { value: "4.8 ★", label: "App Store Rating", detail: "Over 8,000+ positive reviews" },
    ],

    testimonial: {
      quote:
        "The engineering precision delivered on Pinpoint was phenomenal. Our map rendering speeds doubled, and our battery consumption dropped significantly. Highly recommended.",
      name: "Marcus Vance",
      role: "CTO & Co-Founder",
      company: "Pinpoint Inc.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
    },

    ctaHeadline: "Looking for a partner to build an app like this? Let's engineer something exceptional together.",
    ctaSubtext: "From concept and system architecture to UI/UX design and launch, we build high-performance applications engineered to grow with your business.",

    relatedProjects: [
      {
        slug: "atoon",
        title: "ATOON",
        industry: "Digital Wellness & Audio Streaming",
        thumbnail: card1Img,
        tags: ["Flutter", "Lossless Audio", "RevenueCat"],
        summary: "Immersive electro-acoustic meditation for deep inward presence.",
      },
      {
        slug: "moonoa",
        title: "Moonoa",
        industry: "Digital Sleep Therapy & CBT",
        thumbnail: card2Img,
        tags: ["Flutter", "Digital Health", "AI Coaching"],
        summary: "Personalized sleep tracking and cognitive behavioral therapy mobile companion.",
      },
    ],

    seoTitle: "Pinpoint Case Study — Hyperlocal Navigation & 60 FPS Map Clustering | Appswayan",
    seoDescription: "How we built Pinpoint: a Flutter geo-social discovery platform with 60 FPS map clustering and 40% battery optimization.",
  },
}
