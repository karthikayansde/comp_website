import { ProjectData } from "../types/project"

export const PROJECTS_DATA: Record<string, ProjectData> = {
  atoon: {
    id: "atoon",
    slug: "atoon",
    title: "ATOON",
    tagline: "Music for the journey inward",
    client: "Atoon LLC",
    industry: "Social Networking / Music Streaming & Digital Wellness",
    deliverables: [
      "UI/UX Designing",
      "Mobile App Development (iOS & Android)",
      "Marketing Website",
      "Backend Architecture",
      "In-App Subscription Infrastructure",
    ],
    liveUrl: "https://www.atoon.app",
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "RevenueCat",
      "Node.js",
      "WebSockets",
      "Figma",
      "StoreKit",
      "Google Play Billing",
    ],
    overview:
      "Atoon is a revolutionary digital wellness application that redefines meditation by using immersive, human-composed, electro-acoustic music as the core guide. Its mission is to help users transcend mental chatter and feel more alive by guiding them out of distraction and directly into somatic presence.",
    corePillars: [
      {
        title: "Immersive Music Over Spoken Word",
        description:
          "Sessions are guided entirely by multi-dimensional soundscapes and electro-acoustic compositions rather than spoken guides, enabling a deeper, uninterrupted journey inward.",
        iconName: "music",
      },
      {
        title: "Somatic Presence & Deep Listening",
        description:
          "The experience is engineered around somatic awareness, sensory grounding, and recalibrating the nervous system through focused frequency resonance.",
        iconName: "presence",
      },
      {
        title: "Personalized Emotional State Shifting",
        description:
          "Music is categorized not merely by generic tags, but through a dynamic emotional quadrant map (Pleasant/Unpleasant vs. Low/High Energy) for real-time mood regulation.",
        iconName: "matrix",
      },
      {
        title: "Transparent 7-Day Free Trial Flow",
        description:
          "A non-committal, friction-free onboarding journey with clear timeline communication that dramatically increased trial-to-paid conversion rates.",
        iconName: "trial",
      },
    ],
    screenCategories: [
      {
        title: "Meditation & Audio Player",
        description: "The core acoustic sanctuary and playback control center.",
        screens: [
          {
            name: "Home Dashboard",
            highlight: "Daily energy quadrant check-in & quick session launcher",
            description: "Personalized daily welcome with dynamic background ambient shifts.",
          },
          {
            name: "Featured Soundscapes",
            highlight: "Curated multi-layered acoustic compositions",
            description: "High-resolution artwork paired with composer liner notes.",
          },
          {
            name: "State Shifter Quadrant",
            highlight: "Interactive 2D mood coordinate selector",
            description: "Allows users to pinpoint emotional state and match frequencies.",
          },
          {
            name: "Immersive Audio Player",
            highlight: "Zero-latency audio engine with waveform visualization",
            description: "Gesture-based volume dynamics and sleep timer controls.",
          },
          {
            name: "Multi-Dimensional Audio Settings",
            highlight: "Binaural frequency tuning & spatial acoustic depth",
            description: "Custom equalizer tailored for premium headphone listening.",
          },
        ],
      },
      {
        title: "Journey & Personal Growth",
        description: "Tracking mindfulness streaks and emotional evolution over time.",
        screens: [
          {
            name: "Daily Mindfulness Streak",
            highlight: "Streak counter with gentle restorative reminders",
            description: "Celebrates micro-consistency without toxic gamification.",
          },
          {
            name: "Meditation History & Logs",
            highlight: "Detailed timeline of completed acoustic sessions",
            description: "Reflective mood logs before and after each sound journey.",
          },
          {
            name: "State Shift Analytics",
            highlight: "Weekly & monthly emotional transition insights",
            description: "Interactive visual graphs showing calm vs energy trends.",
          },
          {
            name: "Milestone Badges",
            highlight: "Minimalist ceramic achievement tokens",
            description: "Rewarding deep listening milestones and consistency.",
          },
        ],
      },
      {
        title: "Community & Discovery",
        description: "Connecting users to visionary composers and community playlists.",
        screens: [
          {
            name: "Explore Composers",
            highlight: "Curated profiles of global electro-acoustic artists",
            description: "Discover the human stories behind each immersive piece.",
          },
          {
            name: "Curated Mood Playlists",
            highlight: "Hand-crafted flows for Deep Focus, Rest, and Release",
            description: "Categorized continuous mixes for extended sessions.",
          },
          {
            name: "User Favorites & Collections",
            highlight: "Offline caching and customized track libraries",
            description: "Instant access to saved tracks without internet connection.",
          },
        ],
      },
      {
        title: "Settings & Premium Access",
        description: "Transparent subscription controls and audio preferences.",
        screens: [
          {
            name: "7-Day Free Trial Timeline",
            highlight: "Interactive 3-step billing transparency guide",
            description: "Clear countdown showing exact charge date with 1-tap cancel.",
          },
          {
            name: "Audio Preferences",
            highlight: "Lossless audio streaming toggle & download management",
            description: "Ensures optimal balance between mobile data and fidelity.",
          },
          {
            name: "Inward Dark Theme",
            highlight: "OLED-optimized high-contrast night sanctuary mode",
            description: "Engineered to minimize eye strain and melatonin suppression.",
          },
        ],
      },
    ],
    challenges: [
      {
        title: "Mapping Real-Time Emotions to Dynamic Music Library",
        tag: "Algorithm & UX",
        problem:
          "Traditional meditation apps use static search bars. Atoon required a fluid 2D quadrant ('How are you feeling right now?') that instantly maps multi-axis emotional coordinates to acoustic frequency tags without latency.",
        solution:
          "We engineered a custom state-mapping algorithm in Flutter that dynamically calculates Euclidean distance across the music catalog, returning personalized track recommendations instantaneously upon touch interaction.",
      },
      {
        title: "Zero-Latency Audio Streaming & Free Sample Gating",
        tag: "Audio Engine & Cloud",
        problem:
          "Delivering continuous lossless audio streaming while managing instant 30-second 'Glimpse' previews for guest users and strict gating for premium subscribers without playback stuttering.",
        solution:
          "Built a hybrid caching audio pipeline using native iOS AVPlayer / Android ExoPlayer integrated with Firebase Cloud Functions and token-based signed streaming URLs, eliminating stutter and achieving sub-120ms initial buffer time.",
      },
      {
        title: "Complex 7-Day In-App Trial & StoreKit Synchronization",
        tag: "In-App Purchases & RevenueCat",
        problem:
          "Handling multi-platform trial subscriptions with grace periods, timezone synchronization across Apple App Store and Google Play Billing, and preventing accidental billing disputes.",
        solution:
          "Integrated RevenueCat SDK with custom backend webhooks and designed an interactive visual timeline ('How your free trial works') that communicates transparency, resulting in a 3.4x surge in user trust and trial conversion.",
      },
    ],
    testimonial: {
      quote:
        "We've been working with Flutter Your Way for over six months now, and we've been thrilled. We are first-time founders creating our MVP, and Flutter Your Way has been an incredible engineering partner in executing our vision, educating us on the development lifecycle, and communicating every milestone. They helped us launch a world-class MVP in record time.",
      author: "Founder & CEO",
      role: "Co-Founder",
      company: "Atoon LLC",
      rating: 5,
    },
    metrics: [
      {
        label: "Crash-Free Rate",
        value: "99.8%",
        description: "Exceptional runtime stability across iOS & Android",
      },
      {
        label: "Trial Conversion",
        value: "3.4x",
        description: "Industry-leading trial-to-paid subscriber conversion",
      },
      {
        label: "Audio Latency",
        value: "<120ms",
        description: "Instantaneous streaming buffer time",
      },
      {
        label: "App Store Rating",
        value: "4.9 ★",
        description: "Overwhelmingly positive user feedback and reviews",
      },
    ],
    accentColor: "#2F8FFF",
    nextProjectSlug: "pinpoint",
    nextProjectTitle: "Pinpoint — Hyperlocal Discovery & AI Navigation",
  },
  pinpoint: {
    id: "pinpoint",
    slug: "pinpoint",
    title: "PINPOINT",
    tagline: "Hyperlocal Discovery & AI Navigation",
    client: "Pinpoint Technologies",
    industry: "Travel, Navigation & Local Commerce",
    deliverables: [
      "Flutter Cross-Platform App",
      "Custom Map Clustering Engine",
      "Real-time Geo-Tracking",
      "Cloud Infrastructure",
    ],
    liveUrl: "https://www.pinpoint.app",
    techStack: ["Flutter", "Dart", "Google Maps SDK", "Mapbox", "Firebase", "Node.js", "Redis"],
    overview:
      "Pinpoint is an ultra-fast hyperlocal discovery platform that enables users to locate, navigate, and discover curated local experiences with zero-lag map rendering and offline support.",
    corePillars: [
      {
        title: "60 FPS Map Clustering",
        description: "Custom GPU-accelerated marker clustering supporting 10,000+ points of interest simultaneously.",
      },
      {
        title: "Offline Routing Engine",
        description: "Pre-cached vector tiles allowing seamless turn-by-turn navigation even in low-signal areas.",
      },
      {
        title: "AI-Powered Recommendations",
        description: "Contextual discovery matching user habits, time of day, and current weather conditions.",
      },
      {
        title: "Live Verified Status",
        description: "Real-time crowd metrics and live business check-ins powered by WebSockets.",
      },
    ],
    screenCategories: [
      {
        title: "Exploration & Map Views",
        screens: [
          { name: "Interactive Map", highlight: "Hardware accelerated vector clustering" },
          { name: "Spot Details", highlight: "Dynamic rich media cards & live hours" },
          { name: "Turn-by-Turn Guide", highlight: "Compass tracking & audio prompts" },
        ],
      },
    ],
    challenges: [
      {
        title: "Smooth Map Performance with 10k+ Live Markers",
        tag: "Rendering & Geometry",
        problem: "Rendering thousands of custom styled pins on Flutter maps caused frame drops on low-end devices.",
        solution: "Built a QuadTree spatial index algorithm in Dart isolate threads to calculate clustered bounds off the main UI thread.",
      },
    ],
    testimonial: {
      quote: "The engineering precision delivered on Pinpoint was phenomenal. Our map rendering speeds doubled.",
      author: "CTO",
      role: "Chief Technology Officer",
      company: "Pinpoint Inc.",
      rating: 5,
    },
    metrics: [
      { label: "Rendering Speed", value: "60 FPS", description: "Silky smooth map panning" },
      { label: "Active Navigators", value: "150K+", description: "Monthly active users" },
      { label: "Battery Efficiency", value: "+40%", description: "Optimized background location" },
      { label: "App Store Rating", value: "4.8 ★", description: "Global user satisfaction" },
    ],
    accentColor: "#00C9A7",
    nextProjectSlug: "atoon",
    nextProjectTitle: "ATOON — Music for the journey inward",
  },
}
