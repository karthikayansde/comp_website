import { useState, useEffect } from "react"
import ideaLeft from "./imports/1788170052365_1.png"
import appsRight from "./imports/1788170052365_2.png"
import card1Img from "./imports/original-7e13fde445196bf456a9ad6111398f9a.webp"
import card2Loading from "./imports/vectorby-gradient-5812.gif"
import card2Img from "./imports/Group 9304 (1).png"
import card3Video from "./imports/large-thumbnail20260723-1152397-47uxz4.mp4"

/* ---------- shared bits ---------- */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-flutter">
      <span className="h-1.5 w-1.5 rounded-full bg-flutter" />
      {children}
    </span>
  )
}

function SectionLabel({ index, title }: { index: string title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-xs text-mist">{index}</span>
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist">
        {title}
      </span>
    </div>
  )
}

/* ---------- header ---------- */

const NAV = [
  { label: "Home", href: "#top", id: "top" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Why Us", href: "#why", id: "why" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Blog", href: "#blog", id: "blog" },
  { label: "Contact", href: "#contact", id: "contact" },
]

function Logo() {
  return (
    <a href="#top" aria-label="Appswayan Home" className="flex items-center">
      <span className="font-display text-xl font-medium tracking-[0.22em] text-paper sm:text-2xl">
        APPSWAYAN
      </span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("top")

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["top", "services", "why", "projects", "blog", "contact"]
      const scrollPosition = window.scrollY + 220

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-panel/95 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-5 py-3.5 md:px-10">
        <Logo />

        {/* centered nav with dynamic scroll highlighting */}
        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {NAV.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-[13px] font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-flutter"
                    : "text-mist hover:text-flutter"
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* right CTA button matching get a quote squircle style */}
        <div className="flex items-center justify-end gap-3">
          <a
            href="#contact"
            className="hidden squircle bg-flutter px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-flutter-deep hover:shadow-md md:inline-flex"
          >
            Book Free Consultation
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-line lg:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-paper transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-paper transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-paper transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-panel px-5 py-6 lg:hidden">
          <div className="grid gap-1">
            {NAV.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-line py-3 font-display text-lg font-bold uppercase tracking-wider transition-colors ${
                    isActive ? "text-flutter" : "text-paper"
                  }`}
                >
                  {item.label}
                  <span className="font-mono text-xs text-mist">→</span>
                </a>
              )
            })}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block squircle bg-flutter px-5 py-3 text-center font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-sm"
          >
            Book Free Consultation
          </a>
        </div>
      )}
    </header>
  )
}

/* ---------- dummy company logos (replace with your own logos anytime) ---------- */
const DUMMY_LOGOS = [
  {
    name: "ACME AI",
    icon: (
      <svg className="h-7 w-7 shrink-0 text-flutter sm:h-8 sm:w-8 md:h-9 md:w-9" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11.5h-13L12 6.5z" />
      </svg>
    ),
  },
  {
    name: "VERTEX",
    icon: (
      <svg className="h-7 w-7 shrink-0 text-paper sm:h-8 sm:w-8 md:h-9 md:w-9" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l10 6v8l-10 6-10-6V8l10-6zm0 3.2L4.5 9.4v5.2L12 18.8l7.5-4.2V9.4L12 5.2z" />
      </svg>
    ),
  },
  {
    name: "NEXUS LABS",
    icon: (
      <svg className="h-7 w-7 shrink-0 text-pop-orange sm:h-8 sm:w-8 md:h-9 md:w-9" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "PULSEFLOW",
    icon: (
      <svg className="h-7 w-7 shrink-0 text-flutter sm:h-8 sm:w-8 md:h-9 md:w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: "HORIZON OS",
    icon: (
      <svg className="h-7 w-7 shrink-0 text-pop-purple sm:h-8 sm:w-8 md:h-9 md:w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="8" />
        <line x1="12" y1="4" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    name: "SPECTRA",
    icon: (
      <svg className="h-7 w-7 shrink-0 text-paper sm:h-8 sm:w-8 md:h-9 md:w-9" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
      </svg>
    ),
  },
  {
    name: "QUANTUM PAY",
    icon: (
      <svg className="h-7 w-7 shrink-0 text-flutter sm:h-8 sm:w-8 md:h-9 md:w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    name: "KINETIX",
    icon: (
      <svg className="h-7 w-7 shrink-0 text-pop-teal sm:h-8 sm:w-8 md:h-9 md:w-9" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h4v16H4V4zm6 0h4v16h-4V4zm6 0h4v16h-4V4z" />
      </svg>
    ),
  },
]

/* ---------- hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip">
      {/* Full-bleed solid hero box */}
      <div className="relative flex min-h-[60vh] flex-col items-center justify-center bg-hero-box pb-14 pt-24 sm:pb-16 sm:pt-28 md:pb-20 md:pt-30">
        {/* content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center md:px-12">
          <h1
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.25rem)" }}
          >
            <span className="block whitespace-nowrap">
              <span className="text-mist">Stop delays.</span>{" "}
              <span className="text-flutter">Launch</span>
            </span>
            <span className="block whitespace-nowrap">
              <span className="text-flutter">faster.</span>{" "}
              <span className="text-paper">We build robust,</span>
            </span>
            <span className="block whitespace-nowrap text-paper">
              scalable apps
            </span>
          </h1>
          <p
            className="mx-auto mt-4 leading-relaxed text-mist sm:mt-5"
            style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
          >
            <span className="block whitespace-nowrap">
              Elite devs &amp; pre-built components use AI speed
            </span>
            <span className="block whitespace-nowrap">
              to help startups &amp; SMEs build secure apps.
            </span>
          </p>
        </div>

        {/* CTA row — hands reaching straight at the buttons with 0 overall image padding */}
        <div className="relative z-10 mt-2.5 flex w-full items-center justify-between p-0 sm:-mt-4 md:-mt-6">
          <div className="flex flex-1 items-center justify-end p-0 pr-3 sm:pr-6 md:pr-8">
            <img
              src={ideaLeft}
              alt="Tangled thoughts, confusion and an idea reaching out"
              className="pointer-events-none w-full max-w-[220px] object-contain sm:-translate-y-4 sm:max-w-[280px] md:-translate-y-7 md:max-w-[360px] lg:-translate-y-10 lg:max-w-[440px]"
            />
          </div>
          <div className="flex shrink-0 flex-col items-stretch sm:flex-row sm:items-center justify-center gap-2.5 px-2 sm:gap-3 sm:px-0">
            <a
              href="#projects"
              className="squircle bg-panel px-4 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-paper shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-xs md:px-6 md:py-3"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="squircle bg-flutter px-4 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-flutter-deep hover:shadow-md sm:px-5 sm:py-2.5 sm:text-xs md:px-6 md:py-3"
            >
              Get a Quote
            </a>
          </div>
          <div className="flex flex-1 items-center justify-start p-0 pl-3 sm:pl-6 md:pl-8">
            <img
              src={appsRight}
              alt="Apps running on phone, tablet, laptop and desktop"
              className="pointer-events-none w-full max-w-[220px] object-contain sm:-translate-y-4 sm:max-w-[280px] md:-translate-y-7 md:max-w-[360px] lg:-translate-y-10 lg:max-w-[440px]"
            />
          </div>
        </div>
      </div>

      {/* Angled running trusted companies separator between Hero and 2nd section */}
      <div className="relative z-30 -mt-8 w-[120vw] -ml-[10vw] origin-center -rotate-[3.5deg] border-y border-line bg-panel pb-3.5 pt-2.5 shadow-sm sm:-mt-10 sm:pb-4 sm:pt-3 md:-mt-14 md:w-[120vw] md:-ml-[10vw] md:pb-5 md:pt-3.5">
        <div className="mb-2.5 text-center sm:mb-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-mist sm:text-xs">
            Companies trusted us
          </span>
        </div>
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-14 pr-14">
            {[...DUMMY_LOGOS, ...DUMMY_LOGOS].map((company, i) => (
              <div
                key={i}
                className="flex items-center gap-3 opacity-80 transition-opacity hover:opacity-100 sm:gap-3.5"
              >
                {company.icon}
                <span className="font-display text-sm font-black tracking-wider text-paper sm:text-base md:text-lg">
                  {company.name}
                </span>
                <span className="ml-8 font-mono text-sm text-mist/40 sm:ml-10">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- services ---------- */

const SERVICES = [
  {
    id: "startup-mvp",
    t: "Startup & MVP",
    d: "Rapid, market-ready MVPs to validate your concept with real users before you burn the runway.",
    media: (
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-line bg-[#C7C4BC] p-2 sm:p-3">
        <img
          src={card1Img}
          alt="Startup and MVP preview"
          className="relative z-10 max-h-full max-w-full object-contain animate-floaty"
        />
      </div>
    ),
  },
  {
    id: "full-cycle",
    t: "Full-Cycle Build",
    d: "End-to-end delivery — from product design through backend, QA and store deployment. One team, zero handoffs.",
    media: (
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-line bg-ink-2/80 px-3 py-4 sm:py-5">
        {/* Loading in the bottom layer of the stack */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={card2Loading}
            alt="Loading animation"
            className="h-28 w-28 sm:h-45 sm:w-45 object-contain opacity-75"
          />
        </div>
        {/* Group 9304 (1) on top of the loading */}
        <img
          src={card2Img}
          alt="Full-Cycle build illustration"
          className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl"
        />
      </div>
    ),
  },
  {
    id: "custom-solutions",
    t: "Custom Solutions",
    d: "Tailored apps for specific business needs — AI features, integrations and dashboards built to spec.",
    media: (
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-line bg-[#CFD6DF]">
        <video
          src={card3Video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full border-0 border-none object-contain outline-none ring-0 shadow-none pointer-events-none"
          style={{ outline: "none", border: "none" }}
        />
      </div>
    ),
  },
]

function Services() {
  return (
    <section
      id="services"
      className="relative z-10 mx-auto max-w-[1400px] px-5 pb-20 pt-20 sm:pt-28 md:px-10 md:pb-28 md:pt-36"
    >
      {/* Centered bold header with description */}
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="font-display font-black leading-[1.05] tracking-tight uppercase"
          style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.25rem)" }}
        >
          <span className="text-flutter">Services</span>{" "}
          <span className="text-paper">We Provide</span>
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl leading-relaxed text-mist sm:mt-5"
          style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
        >
          From rapid MVP launches to end-to-end full cycle builds and bespoke AI-driven mobile solutions, we engineer top-tier Flutter applications.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-300 hover:border-flutter hover:shadow-lg"
          >
            {s.media}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                {s.t}
              </h3>
              <p className="mt-3 leading-relaxed text-mist">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- why us / stats ---------- */

const PODIUM_STATS = [
  {
    num: "15+",
    label: "Happy clients",
    height: "h-44 sm:h-52 md:h-56",
    isWinner: false,
  },
  {
    num: "25+",
    label: "Projects shipped",
    height: "h-56 sm:h-64 md:h-72",
    isWinner: true,
  },
  {
    num: "4+",
    label: "Years experience",
    height: "h-36 sm:h-44 md:h-48",
    isWinner: false,
  },
]

function WhyUs() {
  return (
    <section id="why" className="border-y border-line bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2
              className="font-display font-black leading-[1.05] tracking-tight uppercase"
              style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.25rem)" }}
            >
              Why teams <span className="text-flutter">pick us</span>
            </h2>
            <p
              className="mt-4 max-w-lg leading-relaxed text-mist sm:mt-5"
              style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
            >
              A tight, senior team that treats your product like our own. We
              obsess over speed-to-market without cutting the corners that break
              apps in production.
            </p>
          </div>

          {/* Winner podium stool */}
          <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5 pt-4">
            {PODIUM_STATS.map((s) => (
              <div
                key={s.label}
                className={`relative flex flex-1 flex-col justify-between rounded-2xl p-4 sm:p-6 transition-all duration-300 ${s.height} ${
                  s.isWinner
                    ? "border-2 border-flutter bg-panel shadow-xl shadow-flutter/10 -translate-y-2 sm:-translate-y-3"
                    : "border border-line bg-panel/75"
                }`}
              >

                <div className="my-auto text-center">
                  <div
                    className={`font-display font-black leading-none ${
                      s.isWinner
                        ? "text-4xl sm:text-5xl md:text-6xl text-flutter"
                        : "text-3xl sm:text-4xl md:text-5xl text-paper"
                    }`}
                  >
                    {s.num}
                  </div>
                  <div className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-mist">
                    {s.label}
                  </div>
                </div>

                <div
                  className={`h-1 w-full rounded-full ${
                    s.isWinner ? "bg-flutter/40" : "bg-line"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- process ---------- */

const STEPS = [
  [
    "Discovery Call",
    "We map goals, scope and the fastest route to a live product.",
  ],
  ["Design", "Wireframes to polished UI — clickable, on-brand, user-tested."],
  [
    "Development",
    "Clean Flutter code, AI features and backend, built in sprints.",
  ],
  [
    "Testing",
    "Automated + manual QA across devices so nothing breaks on launch.",
  ],
  ["Deployment", "App Store + Play Store submission handled end to end."],
]

function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28"
    >
      <SectionLabel index="03 —" title="How it works" />
      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
        {STEPS.map(([t, d], i) => (
          <div
            key={t}
            className="group relative bg-ink p-7 transition-colors hover:bg-panel"
          >
            <div className="font-mono text-sm text-flutter">0{i + 1}</div>
            <div className="mt-6 h-px w-full bg-line" />
            <h3 className="mt-6 font-display text-xl font-bold">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist">{d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- projects ---------- */

const PROJECTS = [
  {
    name: "ATOON",
    industry: "Media / Streaming",
    desc: "Animation streaming platform with personalized AI recommendations.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&auto=format",
    tags: ["iOS", "Android", "AI"],
  },
  {
    name: "Al-Hind Institute",
    industry: "Education",
    desc: "Course delivery, live classes and progress tracking for 12K+ students.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format",
    tags: ["LMS", "Video", "Payments"],
  },
  {
    name: "FaceMax",
    industry: "Health / Beauty",
    desc: "On-device AI facial analysis with a guided skincare routine engine.",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=600&fit=crop&auto=format",
    tags: ["ML", "Camera", "Subscriptions"],
  },
  {
    name: "Ladakh Tempo",
    industry: "Travel / Booking",
    desc: "Ride and tour booking built for offline-first mountain connectivity.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format",
    tags: ["Maps", "Offline", "Booking"],
  },
]

function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="w-full max-w-2xl">
            <SectionLabel index="04 —" title="Featured projects" />
            <h2 className="mt-8 font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
              Real apps, live
              <br />
              in the stores.
            </h2>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-mist transition-colors hover:border-flutter hover:text-flutter"
          >
            Start yours →
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href="#contact"
              className="group overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-flutter"
            >
              <div className="aspect-[16/10] overflow-hidden bg-panel">
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.industry} Flutter app`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-extrabold">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-flutter">
                    {p.industry}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-mist">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-mist"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- testimonials ---------- */

const REVIEWS = [
  {
    q: "They shipped our MVP in six weeks and it just worked. The AI features felt like magic to our users.",
    name: "Matthew West",
    role: "Founder, ATOON",
  },
  {
    q: "Genuinely senior engineers. Clear communication, clean code, and they hit every single milestone.",
    name: "Ashish Sharma",
    role: "Director, Al-Hind Institute",
  },
  {
    q: "From design to App Store, the whole thing was painless. We'd hire them again in a heartbeat.",
    name: "Anurag Bezboruah",
    role: "CEO, PinPoint",
  },
]

function Testimonials() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionLabel index="05 —" title="What clients say" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col justify-between rounded-2xl border border-line bg-panel p-7"
          >
            <div className="font-mono text-flutter">★★★★★</div>
            <blockquote className="mt-5 font-display text-xl font-medium leading-snug">
              &ldquo;{r.q}&rdquo;
            </blockquote>
            <figcaption className="mt-8 border-t border-line pt-5">
              <div className="font-semibold">{r.name}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-mist">
                {r.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

/* ---------- blog ---------- */

const POSTS = [
  ["Flutter", "Why Flutter is still the fastest way to two app stores in 2026"],
  ["AI", "Adding on-device AI to your app without wrecking battery life"],
  ["MVP", "The 6-week MVP playbook we use with every new startup"],
]

function Blog() {
  return (
    <section id="blog" className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionLabel index="06 —" title="From our blog" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {POSTS.map(([cat, title], i) => (
            <a
              key={i}
              href="#blog"
              className="group flex flex-col justify-between bg-ink-2 p-7 transition-colors hover:bg-panel"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-flutter">
                {cat}
              </span>
              <h3 className="mt-16 font-display text-2xl font-bold leading-snug">
                {title}
              </h3>
              <span className="mt-6 font-mono text-xs uppercase tracking-widest text-mist transition-colors group-hover:text-paper">
                Read article →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- contact ---------- */

function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28"
    >
      <div className="grid gap-12 rounded-3xl border border-line bg-panel p-8 md:p-14 lg:grid-cols-2">
        <div>
          <Tag>Let's build</Tag>
          <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
            Book a free
            <br />
            <span className="text-flutter">consultation.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-mist">
            Tell us about your idea. We'll come back within one business day
            with a plan, a timeline and a straight answer on cost.
          </p>
          <div className="mt-10 space-y-4 font-mono text-sm">
            {[
              ["Email", "hello@appswayan.com"],
              ["WhatsApp", "+1 (555) 014-2277"],
              ["Working", "Remotely, worldwide"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between border-b border-line pb-3"
              >
                <span className="uppercase tracking-widest text-mist">{k}</span>
                <span className="text-paper">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
          className="flex flex-col gap-4"
        >
          {[
            ["Full name", "text", "Jane Cooper"],
            ["Email", "email", "jane@company.com"],
            ["Company", "text", "Acme Inc."],
          ].map(([label, type, ph]) => (
            <label key={label} className="block">
              <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
                {label}
              </span>
              <input
                required
                type={type}
                placeholder={ph}
                className="mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-paper outline-none transition-colors placeholder:text-mist/50 focus:border-flutter"
              />
            </label>
          ))}
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-widest text-mist">
              What are you building?
            </span>
            <textarea
              rows={4}
              placeholder="A fitness app with AI coaching..."
              className="mt-2 w-full resize-none rounded-xl border border-line bg-ink px-4 py-3 text-paper outline-none transition-colors placeholder:text-mist/50 focus:border-flutter"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-flutter px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-white transition-transform hover:scale-[1.02]"
          >
            {sent ? "Thanks — we'll be in touch ✓" : "Send request"}
          </button>
        </form>
      </div>
    </section>
  )
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-flutter text-ink">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M14.3 2 5 11.3l3 3L20.3 2h-6Zm0 9.4L9.7 16l4.6 4.6h6L15.7 16l4.6-4.6h-6Z" />
                </svg>
              </span>
              <span className="font-display text-lg font-medium uppercase tracking-[0.2em] text-paper">
                APPSWAYAN
              </span>
            </div>
            <p className="mt-5 max-w-xs leading-relaxed text-mist">
              AI-powered Flutter apps that go live fast. Built by a senior,
              remote-first team.
            </p>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-mist">
              Explore
            </div>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-mist transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-mist">
              Social
            </div>
            <ul className="mt-5 space-y-3">
              {["LinkedIn", "X / Twitter", "Instagram", "Dribbble"].map((s) => (
                <li key={s}>
                  <a
                    href="#top"
                    className="text-mist transition-colors hover:text-paper"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest text-mist md:flex-row md:items-center">
          <span>© 2026 Appswayan Studio</span>
          <span>Made with Flutter + care</span>
        </div>
      </div>
    </footer>
  )
}

/* ---------- app ---------- */

export default function App() {
  return (
    <div className="min-h-full bg-ink text-paper">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
