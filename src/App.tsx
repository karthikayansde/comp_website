import { useState, useEffect, useRef, useCallback } from "react"
import ideaLeft from "./imports/1788170052365_1.png"
import appsRight from "./imports/1788170052365_2.png"
import card1Img from "./imports/original-7e13fde445196bf456a9ad6111398f9a.webp"
import card2Loading from "./imports/vectorby-gradient-5812.gif"
import card2Img from "./imports/Group 9304 (1).png"
import card3Video from "./imports/large-thumbnail20260723-1152397-47uxz4.mp4"
import logoImg from "./imports/logo.png"
import pinpointMockup from "./imports/pinpoint-mockup.png"
import androidSvg from "./imports/ant-design_android-filled.svg"
import appleSvg from "./imports/ant-design_apple-filled.svg"
import webSvg from "./imports/streamline-plump_web.svg"
import phoneSvg from "./imports/bi_phone.svg"
import mailSvg from "./imports/codicon_mail.svg"
import locationSvg from "./imports/basil_location-outline.svg"
import linkedinSvg from "./imports/circum_linkedin.svg"
import twitterSvg from "./imports/codicon_twitter.svg"
import instaSvg from "./imports/lets-icons_insta-light.svg"
import behanceSvg from "./imports/basil_behance-outline.svg"
import pinterestSvg from "./imports/ant-design_pinterest-outlined.svg"
import redditSvg from "./imports/ion_logo-reddit.svg"
import { CASE_STUDIES } from "./data/caseStudiesData"
import ProjectDetailPageTemplate from "./components/ProjectDetailPageTemplate"

/* ---------- shared bits ---------- */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-flutter">
      <span className="h-1.5 w-1.5 rounded-full bg-flutter" />
      {children}
    </span>
  )
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-xs text-mist">{index}</span>
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist">
        {title}
      </span>
    </div>
  )
}

function RevealCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "800ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all will-change-transform ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-[0.98]"
      } ${className}`}
    >
      {children}
    </div>
  )
}

/* ---------- header ---------- */

const NAV = [
  { label: "Home", href: "#top", id: "top" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Why Us", href: "#why", id: "why" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
]

function Logo({ loop = true, className = "" }: { loop?: boolean; className?: string }) {
  const [cycleKey, setCycleKey] = useState(0)

  const handleNextCycle = useCallback(() => {
    setCycleKey((k) => k + 1)
  }, [])

  return (
    <div className={`w-[175px] sm:w-[210px] xl:w-[225px] h-8 sm:h-10 xl:h-11 flex items-center justify-center shrink-0 ${className}`}>
      <LogoInstance key={cycleKey} loop={loop} onCycleEnd={handleNextCycle} />
    </div>
  )
}

function LogoInstance({ loop, onCycleEnd }: { loop: boolean; onCycleEnd: () => void }) {
  const [step, setStep] = useState<0 | 1 | 2>(0)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    // 1. Smoothly fade in the single starting image (0 -> 100% over 500ms)
    const t0 = setTimeout(() => {
      setOpacity(1)
    }, 40)

    // 2. Double & rotate to opposite sides in place (Step 1) at 750ms
    const t1 = setTimeout(() => {
      setStep(1)
    }, 750)

    // 3. Move apart & reveal text (Step 2) at 1500ms
    const t2 = setTimeout(() => {
      setStep(2)
    }, 1500)

    let t3: ReturnType<typeof setTimeout>
    let t4: ReturnType<typeof setTimeout>

    if (loop) {
      // 4. Hold completed logo lockup for 10 seconds, then smoothly fade out (11500ms)
      t3 = setTimeout(() => {
        setOpacity(0)
      }, 11500)

      // 5. Once fully hidden at 12150ms, trigger next cycle with smooth fade-in
      t4 = setTimeout(() => {
        onCycleEnd()
      }, 12150)
    }

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      if (t3) clearTimeout(t3)
      if (t4) clearTimeout(t4)
    }
  }, [loop, onCycleEnd])

  return (
    <a
      href="#top"
      aria-label="Appswayan Home"
      className={`group inline-flex flex-row items-center justify-center p-0 shrink-0 select-none transition-opacity duration-600 ease-in-out ${
        opacity === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative inline-flex items-center justify-center">
        {/* Left / Base Logo: Rotates to -90deg in place */}
        <div
          className={`flex items-center justify-center shrink-0 transition-all duration-700 ease-out z-10 ${
            step === 0
              ? "rotate-0"
              : "-rotate-90 group-hover:scale-110"
          }`}
        >
          <img
            src={logoImg}
            alt="Logo Left"
            className="h-8 w-8 sm:h-10 sm:w-10 xl:h-11 xl:w-11 select-none object-contain"
          />
        </div>

        {/* Center Gap & Brand Text: Expands only in step 2 */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-out flex items-center justify-center ${
            step < 2
              ? "max-w-0 opacity-0 px-0"
              : "max-w-[220px] opacity-100 px-1 sm:px-1.5"
          }`}
        >
          <span className="p-0 font-display text-xs sm:text-sm xl:text-base font-bold tracking-[0.16em] sm:tracking-[0.2em] text-paper whitespace-nowrap transition-colors group-hover:text-flutter sm:font-extrabold">
            APPSWAYAN
          </span>
        </div>

        {/* Right / Duplicate Logo: In step 0 & 1 stays stacked in exact same spot rotating to +90deg, in step 2 moves right */}
        <div
          className={`flex items-center justify-center shrink-0 transition-all duration-700 ease-out ${
            step < 2
              ? "absolute inset-0 pointer-events-none z-20"
              : "relative z-10"
          }`}
        >
          <img
            src={logoImg}
            alt="Logo Right"
            className={`h-8 w-8 sm:h-10 sm:w-10 xl:h-11 xl:w-11 select-none object-contain transition-all duration-700 ease-out ${
              step === 0
                ? "rotate-0"
                : "rotate-90 group-hover:scale-110"
            }`}
          />
        </div>
      </div>
    </a>
  )
}

function StaticLogo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Appswayan Home"
      className={`group inline-flex flex-row items-center justify-center p-0 shrink-0 select-none ${className}`}
    >
      <div className="relative inline-flex items-center justify-center">
        {/* Left Logo Icon */}
        <div className="flex items-center justify-center shrink-0 -rotate-90">
          <img
            src={logoImg}
            alt="Logo Left"
            className="h-6 w-6 sm:h-7 sm:w-7 select-none object-contain"
          />
        </div>

        {/* Brand Text */}
        <div className="flex items-center justify-center px-1 sm:px-1.5">
          <span className="p-0 font-display text-[11px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.18em] text-paper whitespace-nowrap transition-colors group-hover:text-flutter sm:font-extrabold">
            APPSWAYAN
          </span>
        </div>

        {/* Right Logo Icon */}
        <div className="flex items-center justify-center shrink-0 rotate-90">
          <img
            src={logoImg}
            alt="Logo Right"
            className="h-6 w-6 sm:h-7 sm:w-7 select-none object-contain"
          />
        </div>
      </div>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("top")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const sectionIds = ["top", "services", "why", "projects", "faq", "contact"]
      const scrollPosition = currentScrollY + 220

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
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none px-3 sm:px-5 md:px-6 pt-1.5 sm:pt-2 md:pt-2.5">
        <div className="pointer-events-auto flex w-full max-w-[1360px] flex-col squircle overflow-hidden ios-glass border border-white/85 shadow-lg shadow-slate-900/5 transition-all">
          <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-2.5">
            <Logo />

            {/* centered nav with dynamic scroll highlighting */}
            <nav className="hidden items-center justify-center gap-4 lg:gap-6 xl:gap-8 lg:flex">
              {NAV.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`text-xs xl:text-[13px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
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

            {/* right CTA button and hamburger */}
            <div className="flex items-center justify-end gap-2 sm:gap-2.5">
              <a
                href="#contact"
                className="hidden squircle bg-flutter px-3.5 py-1.5 sm:px-4 sm:py-2 xl:px-5 xl:py-2 font-mono text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-flutter-deep hover:shadow-md md:inline-flex whitespace-nowrap"
              >
                Book Free Consultation
              </a>

              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 place-items-center rounded-xl border border-line lg:hidden hover:bg-white/10 active:scale-95 transition-all"
              >
                <div className="space-y-1.5">
                  <span
                    className={`block h-0.5 w-4 bg-paper transition-transform duration-300 ${
                      open ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-4 bg-paper transition-opacity duration-300 ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-4 bg-paper transition-transform duration-300 ${
                      open ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Overlapping Window (Outside & Below the Appbar) */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px] lg:hidden animate-fade-in"
          />

          {/* Floating Card Outside & Below Appbar */}
          <div className="fixed inset-x-3 sm:inset-x-5 top-[64px] sm:top-[72px] md:top-[78px] z-45 mx-auto max-w-[1360px] lg:hidden animate-fade-in pointer-events-auto">
            <div className="w-full flex flex-col squircle-card ios-glass border border-white/85 shadow-2xl shadow-slate-950/20 p-5 sm:p-6 space-y-4">
              {/* Navigation Links (No Numbers) */}
              <div className="flex flex-col py-1 space-y-1">
                {NAV.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between py-2.5 px-3 rounded-xl transition-all ${
                        isActive 
                          ? "text-flutter font-extrabold bg-flutter/10" 
                          : "text-paper font-bold hover:text-flutter hover:bg-white/40"
                      }`}
                    >
                      <span className="font-display text-base sm:text-lg uppercase tracking-wide">
                        {item.label}
                      </span>
                      <span className={`font-mono text-sm transition-transform group-hover:translate-x-1 ${isActive ? "text-flutter" : "text-mist"}`}>
                        →
                      </span>
                    </a>
                  )
                })}
              </div>

              {/* Bottom Actions inside overlapping window */}
              <div className="pt-2 border-t border-line/40">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block squircle w-full bg-flutter py-3 text-center font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-flutter-deep"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
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
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6 md:px-12">
          <h1
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.25rem)" }}
          >
            <span className="block">
              <span className="text-mist">Stop delays.</span>{" "}
              <span className="text-flutter">Launch</span>
            </span>
            <span className="block">
              <span className="text-flutter">faster.</span>{" "}
              <span className="text-paper">We build robust,</span>
            </span>
            <span className="block text-paper">
              scalable apps
            </span>
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl leading-relaxed text-mist sm:mt-5"
            style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
          >
            Elite devs &amp; pre-built components use AI speed to help startups &amp; SMEs build secure apps.
          </p>
        </div>

        {/* CTA row — hands reaching straight at the buttons with scalable max-widths */}
        <div className="relative z-10 mt-2.5 flex w-full max-w-[1400px] mx-auto items-center justify-between p-0 sm:-mt-4 md:-mt-6">
          <div className="flex flex-1 min-w-0 items-center justify-end p-0 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
            <img
              src={ideaLeft}
              alt="Tangled thoughts, confusion and an idea reaching out"
              className="pointer-events-none w-full max-w-[170px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[340px] xl:max-w-[420px] object-contain sm:-translate-y-4 md:-translate-y-7 lg:-translate-y-10"
            />
          </div>
          <div className="flex shrink-0 flex-col items-stretch sm:flex-row sm:items-center justify-center gap-2.5 px-2 sm:gap-3 sm:px-0">
            <a
              href="#projects"
              className="squircle bg-panel px-4 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-paper shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-xs md:px-6 md:py-3 whitespace-nowrap"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="squircle bg-flutter px-4 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-flutter-deep hover:shadow-md sm:px-5 sm:py-2.5 sm:text-xs md:px-6 md:py-3 whitespace-nowrap"
            >
              Get a Quote
            </a>
          </div>
          <div className="flex flex-1 min-w-0 items-center justify-start p-0 pl-2 sm:pl-4 md:pl-6 lg:pl-8">
            <img
              src={appsRight}
              alt="Apps running on phone, tablet, laptop and desktop"
              className="pointer-events-none w-full max-w-[170px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[340px] xl:max-w-[420px] object-contain sm:-translate-y-4 md:-translate-y-7 lg:-translate-y-10"
            />
          </div>
        </div>
      </div>

      {/* Angled running trusted companies separator between Hero and 2nd section */}
      <div className="relative z-30 -mt-8 w-[120vw] -ml-[10vw] origin-center -rotate-[3.5deg] border-y border-line bg-panel pb-3.5 pt-2.5 shadow-sm sm:-mt-10 sm:pb-4 sm:pt-3 md:-mt-14 md:pb-5 md:pt-3.5">
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
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-line/70 bg-[#C7C4BC] p-2 sm:p-3">
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
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-line/70 bg-ink-2/80 px-3 py-4 sm:py-5">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={card2Loading}
            alt="Loading animation"
            className="h-28 w-28 sm:h-45 sm:w-45 object-contain opacity-75"
          />
        </div>
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
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-line/70 bg-[#CFD6DF]">
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
        {SERVICES.map((s, idx) => (
          <RevealCard key={s.id} delay={idx * 120} className="flex flex-col">
            <div className="group ios-glass-card flex flex-1 flex-col overflow-hidden rounded-2xl sm:rounded-3xl">
              {s.media}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl text-paper">
                  {s.t}
                </h3>
                <p className="mt-3 leading-relaxed text-mist">{s.d}</p>
              </div>
            </div>
          </RevealCard>
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
    height: "h-44 sm:h-52 md:h-56 lg:h-64 min-h-[175px] sm:min-h-[210px] md:min-h-[230px] lg:min-h-[260px]",
    isWinner: false,
  },
  {
    num: "25+",
    label: "Projects shipped",
    height: "h-56 sm:h-64 md:h-72 lg:h-80 min-h-[225px] sm:min-h-[260px] md:min-h-[290px] lg:min-h-[330px]",
    isWinner: true,
  },
  {
    num: "4+",
    label: "Years experience",
    height: "h-36 sm:h-44 md:h-48 lg:h-52 min-h-[145px] sm:min-h-[180px] md:min-h-[195px] lg:min-h-[215px]",
    isWinner: false,
  },
]

function WhyUs() {
  return (
    <section id="why" className="border-y border-line bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.2fr] lg:items-center">
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
          <div className="flex items-end justify-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 pt-4">
            {PODIUM_STATS.map((s, idx) => (
              <RevealCard key={s.label} delay={idx * 120} className={`flex-1 flex flex-col ${s.height}`}>
                <div
                  className={`relative flex h-full w-full flex-col justify-between rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300 ios-glass-card ${
                    s.isWinner
                      ? "border-2 border-flutter/80 shadow-xl shadow-flutter/15 -translate-y-2 sm:-translate-y-3"
                      : ""
                  }`}
                >
                  <div className="my-auto text-center px-1">
                    <div
                      className={`font-display font-black leading-none text-flutter ${
                        s.isWinner
                          ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                          : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                      }`}
                    >
                      {s.num}
                    </div>
                    <div className="mt-1.5 font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider text-mist leading-tight">
                      {s.label}
                    </div>
                  </div>

                  <div
                    className={`h-1 w-full rounded-full ${
                      s.isWinner ? "bg-flutter/40" : "bg-line"
                    }`}
                  />
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- process ---------- */

const PROCESS_STEPS = [
  {
    title: "Discovery Call",
    desc: "We map goals, scope, and the fastest route to a live, production-ready product.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "UI/UX Design",
    desc: "Wireframes to polished UI — clickable, on-brand, intuitive, and user-tested.",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Development",
    desc: "Clean Flutter code, scalable backends, and AI features built in agile sprints.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Testing & QA",
    desc: "Automated and manual QA across devices so nothing breaks on launch day.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Deployment",
    desc: "App Store and Google Play Store submission handled seamlessly end to end.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
  },
]

function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28"
    >
      {/* Centered Section Header */}
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="font-display font-black leading-[1.05] tracking-tight uppercase"
          style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.25rem)" }}
        >
          HOW IT <span className="text-flutter">WORKS</span>
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl leading-relaxed text-mist sm:mt-5"
          style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
        >
          A seamless process with proper communication, sprint-based updates, and complete transparency — turning your idea into a high-performing live project.
        </p>
      </div>

      {/* Cards Grid: 5 Process Steps + 1 Matching CTA Card */}
      <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS_STEPS.map((s, idx) => (
          <RevealCard key={s.title} delay={idx * 90} className="flex flex-col">
            <div className="group ios-glass-card flex flex-1 flex-col overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line/70 bg-ink-2">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                <h3 className="font-display text-lg font-bold leading-tight sm:text-xl lg:text-2xl text-paper">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
              </div>
            </div>
          </RevealCard>
        ))}

        {/* 6th Card: Entire Card Clickable CTA with Stacked Button */}
        <RevealCard delay={PROCESS_STEPS.length * 90} className="flex flex-col">
          <a
            href="#contact"
            className="group ios-glass-card flex flex-1 flex-col overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-flutter/60 cursor-pointer"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line/70 bg-flutter/10">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop&auto=format"
                alt="Ready to ship"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3.5 sm:p-4">
                <span className="squircle inline-flex w-full items-center justify-center gap-2 bg-flutter px-4 py-2.5 sm:py-3 text-center font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-all group-hover:bg-flutter-deep group-hover:shadow-xl">
                  Book Free Consultation →
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
              <h3 className="font-display text-lg font-bold leading-tight sm:text-xl lg:text-2xl text-paper transition-colors group-hover:text-flutter">
                Ready to Ship?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Have a concept in mind? Let's define the scope, map out the sprints, and bring your product to life.
              </p>
            </div>
          </a>
        </RevealCard>
      </div>
    </section>
  )
}

/* ---------- icons ---------- */

function WebIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <img src={webSvg} alt="Web" className={`${className} object-contain`} />
}

function AppleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <img src={appleSvg} alt="App Store" className={`${className} object-contain`} />
}

function PlayStoreIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <img src={androidSvg} alt="Play Store" className={`${className} object-contain`} />
}

/* ---------- projects ---------- */

const PROJECTS = [
  {
    slug: "pinpoint",
    name: "PINPOINT",
    title: "PINPOINT – FIND PEOPLE & THINGS, EFFORTLESSLY",
    webUrl: "https://pinpointconnect.app",
    iosUrl: "#contact",
    androidUrl: "#contact",
    deliverables:
      "Location-Based Pin System, Real-Time Discovery Engine, Secure Match Flow, Complete App Design & Development",
    industry: "Social Networking / Geo-Social Technology",
    desc: "Real-time geo-social discovery platform connecting users with interactive location pins, live proximity radar, and instant match requests.",
    img: pinpointMockup,
    tags: ["Flutter", "Maps & Geo", "WebSockets", "iOS & Android"],
  },
  {
    slug: "atoon",
    name: "ATOON",
    title: "ATOON – NEXT-GEN ANIMATION & SOUND STREAMING",
    webUrl: "https://atoon.app",
    iosUrl: "#contact",
    androidUrl: "#contact",
    deliverables:
      "Custom HLS Video Player, On-Device AI Recommendations, In-App Subscriptions, Offline Downloads",
    industry: "Social Networking / Music Streaming",
    desc: "Cross-platform wellness & streaming app featuring somatic emotion quadrant maps, lossless audio, and transparent in-app trial flows.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1000&h=700&fit=crop&auto=format",
    tags: ["Flutter", "Audio Engine", "Firebase", "RevenueCat"],
  },
  {
    slug: "al-hind",
    name: "Al-Hind Institute",
    title: "AL-HIND – INTERACTIVE LEARNING ECOSYSTEM",
    webUrl: "https://alhindinstitute.edu",
    iosUrl: "#contact",
    androidUrl: "#contact",
    deliverables:
      "Live Classroom Streaming, Offline Lesson Sync, Progress Analytics, Payment Gateway Integration",
    industry: "EdTech / Learning Management",
    desc: "Full-cycle LMS mobile app powering live classrooms, course delivery, and student progress tracking for over 12K+ active learners.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=700&fit=crop&auto=format",
    tags: ["Flutter", "LMS & Video", "Payments", "Offline Sync"],
  },
  {
    slug: "facemax",
    name: "FaceMax",
    title: "FACEMAX – ON-DEVICE AI DERMATOLOGY & SKINCARE",
    webUrl: "https://facemax.ai",
    iosUrl: "#contact",
    androidUrl: "#contact",
    deliverables:
      "TensorFlow Vision Pipeline, On-Device Camera Frame Analysis, Guided Routine Engine, Stripe Subscriptions",
    industry: "Health / Beauty / Artificial Intelligence",
    desc: "On-device AI facial analysis with a guided skincare routine engine, progress photo comparison, and personalized dermatological recommendations.",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1000&h=700&fit=crop&auto=format",
    tags: ["Flutter", "ML & Vision", "Camera", "Subscriptions"],
  },
  {
    slug: "ladakh-tempo",
    name: "Ladakh Tempo",
    title: "LADAKH TEMPO – HIGH-ALTITUDE FLEET & TOUR BOOKING",
    webUrl: "https://ladakhtempo.com",
    iosUrl: "#contact",
    androidUrl: "#contact",
    deliverables:
      "Offline-First Caching, Live GPS Dispatch, Multi-Currency Wallet, Driver Route Tracking",
    industry: "Travel / Mobility / Offline Tech",
    desc: "Ride and tour booking mobile platform engineered with offline-first architecture for mountain connectivity across high-altitude Himalayan corridors.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&h=700&fit=crop&auto=format",
    tags: ["Flutter", "Offline First", "Live Tracking", "Maps & GPS"],
  },
]

function Projects({ onOpenProject }: { onOpenProject?: (slug: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [progress, setProgress] = useState(0)

  // Direct swipe & drag state
  const isDragging = useRef(false)
  const startX = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight
      if (totalScroll <= 0) return

      // Current distance scrolled into the container
      const scrolled = -rect.top
      const p = Math.min(Math.max(scrolled / totalScroll, 0), 1)
      setProgress(p)

      // Calculate maximum horizontal travel based on parent container width
      const parentWidth = trackRef.current.parentElement?.clientWidth || window.innerWidth
      const maxScrollX = Math.max(
        0,
        trackRef.current.scrollWidth - parentWidth + 32
      )
      setTranslateX(p * maxScrollX)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const handleDragStart = (clientX: number) => {
    isDragging.current = true
    startX.current = clientX
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current || !trackRef.current) return
    const delta = startX.current - clientX
    startX.current = clientX

    const totalScroll = containerRef.current.offsetHeight - window.innerHeight
    const parentWidth = trackRef.current.parentElement?.clientWidth || window.innerWidth
    const maxScrollX = Math.max(
      0,
      trackRef.current.scrollWidth - parentWidth + 32
    )
    if (maxScrollX <= 0) return

    const scrollDelta = (delta / maxScrollX) * totalScroll
    window.scrollBy({ top: scrollDelta, behavior: "instant" })
  }

  const handleDragEnd = () => {
    isDragging.current = false
  }

  return (
    <section id="projects" ref={containerRef} className="relative h-[450vh] bg-ink-2">
      <div className="sticky top-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden border-t border-line px-5 pb-6 pt-20 md:px-10 md:pb-8 md:pt-28 select-none">
        {/* Top Header Row */}
        <div className="mx-auto flex w-full max-w-[1400px] shrink-0 flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4 md:gap-6 mb-2 sm:mb-3">
          <div className="max-w-2xl">
            <h2
              className="font-display font-black leading-[1.05] tracking-tight uppercase whitespace-nowrap"
              style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.25rem)" }}
            >
              FEATURED <span className="text-flutter">PROJECTS</span>
            </h2>
            <p
              className="mt-3 sm:mt-4 leading-relaxed text-mist"
              style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
            >
              Experience how targeted engineering converts plans into market-ready platforms.
            </p>
          </div>

          {/* Progress Indicator & CTA: below summary on phone, right-aligned on desktop */}
          <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-3 sm:gap-6 shrink-0 pb-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-[10px] sm:text-xs text-mist font-semibold">
                {Math.min(
                  PROJECTS.length,
                  Math.floor(progress * PROJECTS.length) + 1
                )
                  .toString()
                  .padStart(2, "0")}{" "}
                / {PROJECTS.length.toString().padStart(2, "0")}
              </span>
              <div className="h-1.5 w-20 sm:w-24 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full bg-flutter transition-all duration-75"
                  style={{ width: `${Math.max(10, progress * 100)}%` }}
                />
              </div>
            </div>

            <a
              href="#contact"
              className="squircle bg-flutter px-4 py-2 sm:px-5 sm:py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-flutter-deep hover:shadow-md whitespace-nowrap"
            >
              Start yours →
            </a>
          </div>
        </div>

        {/* Balanced Card Showcase Track */}
        <div
          className="mx-auto w-full max-w-[1400px] flex-1 min-h-0 flex items-center py-1 sm:py-2 cursor-grab active:cursor-grabbing overflow-visible"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-6 md:gap-8 will-change-transform items-center"
            style={{
              transform: `translate3d(-${translateX}px, 0, 0)`,
            }}
          >
            {PROJECTS.map((p, idx) => (
              <div
                key={p.name}
                className="group relative flex w-[86vw] sm:w-[82vw] max-w-[1080px] shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl ios-glass-card select-none h-[390px] sm:h-[420px] md:h-[440px] lg:h-[470px] max-h-[calc(100dvh-250px)]"
              >
                <div className="flex flex-col md:grid md:grid-cols-[1fr_1.15fr] w-full h-full">
                  {/* Left (Desktop) / Top (Phone): App Showcase Visual */}
                  <div className="relative h-[40%] md:h-full w-full bg-ink-2/60 overflow-hidden border-b md:border-b-0 md:border-r border-line/70 flex items-center justify-center shrink-0">
                    <img
                      src={p.img}
                      alt={p.name}
                      draggable={false}
                      className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none ${
                        p.name === "PINPOINT" ? "object-left" : "object-center"
                      }`}
                    />
                  </div>

                  {/* Right (Desktop) / Bottom (Phone): Project Details */}
                  <div className="flex flex-1 min-h-0 flex-col justify-between p-3.5 sm:p-4 md:p-5 lg:p-6">
                    <div>
                      {/* 1. Title */}
                      <h3 className="font-display font-black text-sm sm:text-base md:text-lg lg:text-xl text-paper uppercase tracking-tight leading-tight">
                        {p.title}
                      </h3>

                      {/* Industry below title without label */}
                      <p className="mt-1 font-mono text-[8.5px] sm:text-[9.5px] md:text-[10px] lg:text-[11px] uppercase tracking-wider text-flutter font-semibold">
                        {p.industry}
                      </p>
                    </div>

                    {/* Deliverables (Left) & Live on (Right) strictly in a row */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5 items-start border-t border-line/50 pt-2 sm:pt-2.5">
                      <div className="min-w-0">
                        <span className="font-mono text-[8.5px] sm:text-[9px] md:text-[10px] uppercase tracking-wider text-mist block font-semibold">
                          Deliverables:
                        </span>
                        <span className="mt-1 block text-[9px] sm:text-[10px] md:text-[11px] text-mist leading-relaxed line-clamp-3 sm:line-clamp-4">
                          {p.deliverables}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <span className="font-mono text-[8.5px] sm:text-[9px] md:text-[10px] uppercase tracking-wider text-mist block font-semibold">
                          Live on:
                        </span>
                        <div className="mt-1.5 flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2">
                          <a
                            href={p.webUrl || "#contact"}
                            target={p.webUrl?.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg bg-white text-black px-1.5 py-0.5 sm:px-2 sm:py-1 font-mono text-[8px] sm:text-[9px] md:text-[10px] font-bold shadow-xs transition-all hover:bg-slate-200"
                          >
                            <WebIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" />
                            <span className="text-black">Web</span>
                          </a>

                          <a
                            href={p.iosUrl || "#contact"}
                            target={p.iosUrl?.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg bg-white text-black px-1.5 py-0.5 sm:px-2 sm:py-1 font-mono text-[8px] sm:text-[9px] md:text-[10px] font-bold shadow-xs transition-all hover:bg-slate-200"
                          >
                            <AppleIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" />
                            <span className="truncate text-black">App Store</span>
                          </a>

                          <a
                            href={p.androidUrl || "#contact"}
                            target={p.androidUrl?.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg bg-white text-black px-1.5 py-0.5 sm:px-2 sm:py-1 font-mono text-[8px] sm:text-[9px] md:text-[10px] font-bold shadow-xs transition-all hover:bg-slate-200"
                          >
                            <PlayStoreIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" />
                            <span className="truncate text-black">Play Store</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Stacks (Left) & View Details (Right) split into 2 columns matching above */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5 items-center border-t border-line/50 pt-2 sm:pt-2.5">
                      <div className="min-w-0 font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider text-mist leading-relaxed truncate">
                        {p.tags.join(" - ")}
                      </div>

                      <div className="min-w-0 flex items-center">
                        <button
                          onClick={() => onOpenProject?.(p.slug || "atoon")}
                          className="squircle inline-flex items-center justify-center bg-flutter px-3 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[8.5px] sm:text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-flutter-deep hover:shadow-md shrink-0 whitespace-nowrap cursor-pointer"
                        >
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format",
    rating: 5,
  },
  {
    q: "Genuinely senior engineers. Clear communication, clean code, and they hit every single milestone.",
    name: "Ashish Sharma",
    role: "Director, Al-Hind Institute",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    rating: 5,
  },
  {
    q: "From design to App Store, the whole thing was painless. We'd hire them again in a heartbeat.",
    name: "Anurag Bezboruah",
    role: "CEO, PinPoint",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden border-t border-line bg-ink py-20 md:py-28">
      {/* Background Logo Watermark (25% opacity, spans from bottom to top, right side with 52% visible) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 translate-x-[48%] z-0 flex items-center justify-center opacity-25 select-none py-4">
        <img
          src={logoImg}
          alt=""
          className="h-full w-auto max-w-none object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Centered Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="font-display font-black leading-[1.05] tracking-tight uppercase text-paper"
            style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.25rem)" }}
          >
            TESTIMONIALS
          </h2>
          <p
            className="mx-auto mt-3 sm:mt-4 max-w-2xl leading-relaxed text-mist"
            style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
          >
            {"Real growth stories from partners we’ve taken live and scaled up."}
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, idx) => (
            <RevealCard key={r.name} delay={idx * 120} className="flex flex-col">
              <figure className="ios-glass-card-clear flex flex-1 flex-col justify-between rounded-2xl sm:rounded-3xl p-6 sm:p-7">
                <div>
                  {/* 1st Row: Profile Image, Name and Role */}
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="h-12 w-12 sm:h-13 sm:w-13 rounded-full object-cover border border-line ring-2 ring-flutter/20 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-paper text-sm sm:text-base leading-tight truncate">
                        {r.name}
                      </div>
                      <div className="mt-0.5 font-mono text-[11px] sm:text-xs text-flutter font-medium tracking-wide truncate">
                        {r.role}
                      </div>
                    </div>
                  </div>

                  {/* Below: Review Data / Quote */}
                  <blockquote className="mt-5 font-display text-base sm:text-lg font-medium leading-relaxed text-paper/90">
                    &ldquo;{r.q}&rdquo;
                  </blockquote>
                </div>

                {/* Below: Star Rating */}
                <div className="mt-6 flex items-center gap-1 border-t border-line/60 pt-4 text-flutter">
                  {[...Array(r.rating || 5)].map((_, i) => (
                    <span key={i} className="text-base sm:text-lg">★</span>
                  ))}
                </div>
              </figure>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- faq ---------- */

const FAQS = [
  {
    q: "How fast can you build and launch an MVP?",
    a: "Typically, we deliver a production-ready MVP to the Apple App Store and Google Play Store within 4 to 6 weeks. Our battle-tested modular components, agile development sprints, and automated CI/CD pipelines allow us to skip boilerplate setup and focus directly on high-impact business features.",
  },
  {
    q: "Why do you specialize exclusively in Flutter?",
    a: "Flutter compiles directly to native ARM machine code with Skia & Impeller GPU hardware acceleration. This gives you authentic 60–120fps performance on both iOS and Android from a single codebase, reducing engineering costs by up to 40% while eliminating platform inconsistencies.",
  },
  {
    q: "Can you integrate custom On-Device AI or LLMs into mobile apps?",
    a: "Yes. We specialize in both on-device edge ML (TensorFlow Lite, CoreML, Onnx) and real-time streaming LLM APIs (OpenAI, Gemini, Claude). We architect low-latency, battery-conscious AI pipelines with offline caching and seamless user interactions.",
  },
  {
    q: "What do your engagement and pricing models look like?",
    a: "We offer clear, transparent structures: Fixed-Scope Sprints for rapid MVP builds with guaranteed deliverables, or Dedicated Engineering Squads for fast-growing scale-ups needing continuous iteration. All contracts are milestone-driven with zero hidden fees.",
  },
  {
    q: "Do I own 100% of the code and intellectual property?",
    a: "Yes, absolutely. From day one, all Git repositories, source code, Figma UI/UX designs, architectural diagrams, and intellectual property belong 100% to you and your company.",
  },
  {
    q: "How do you handle App Store approvals and post-launch support?",
    a: "We manage the entire submission lifecycle—certificates, provisioning profiles, privacy manifests, and store review guidelines—until full approval. Post-launch, we provide SLA-backed maintenance, OS update compatibility, and crash-monitoring support.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="border-t border-line bg-ink-2 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Centered Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="font-display font-black leading-[1.05] tracking-tight uppercase text-paper"
            style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.25rem)" }}
          >
            FREQUENTLY ASKED <span className="text-flutter">QUESTIONS</span>
          </h2>
          <p
            className="mx-auto mt-3 sm:mt-4 max-w-2xl leading-relaxed text-mist"
            style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
          >
            Everything you need to know about our process, timelines, pricing, and Flutter development.
          </p>
        </div>

        {/* Accordions */}
        <div className="mx-auto mt-12 max-w-3xl space-y-3.5 sm:mt-16 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <RevealCard key={idx} delay={idx * 60}>
                <div
                  className={`overflow-hidden rounded-2xl ios-glass-card transition-all duration-300 ${
                    isOpen
                      ? "border-flutter/80 ring-2 ring-flutter/20 !bg-white/80"
                      : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg md:text-xl font-bold text-paper leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-flutter bg-flutter text-white rotate-45"
                          : "border-line bg-ink-2 text-mist"
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-line/50 px-5 pb-6 pt-4 sm:px-6 sm:pb-7">
                      <p className="text-sm sm:text-base leading-relaxed text-mist">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </RevealCard>
            )
          })}
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
      {/* Centered Section Header */}
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="font-display font-black leading-[1.05] tracking-tight uppercase"
          style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.25rem)" }}
        >
          CONTACT <span className="text-flutter">US</span>
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl leading-relaxed text-mist sm:mt-5"
          style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
        >
          No more delays! Build your product now and transform your vision into reality.
        </p>
      </div>

      <div className="mt-12 sm:mt-14 grid gap-8 lg:gap-10 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.1fr_1fr] lg:items-start">
        {/* Left Column: Headline, subtext, button & timeline */}
        <RevealCard delay={0} className="flex flex-col justify-between pt-2">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase leading-[1.05] tracking-tight text-paper">
              Let&apos;s build something <br />
              <span className="text-flutter">amazing</span> together
            </h3>
            <p className="mt-4 sm:mt-5 max-w-lg text-sm leading-relaxed text-mist sm:text-base">
              Ready to bring your app idea to life? Book a free consultation with our experts.
            </p>

            <div className="mt-6 sm:mt-8">
              <a
                href="#contact-form"
                onClick={() => {
                  document.getElementById("contact-name")?.focus()
                }}
                className="inline-flex squircle bg-flutter px-5 sm:px-7 py-3 sm:py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-flutter-deep hover:shadow-md whitespace-nowrap"
              >
                Book Free Consultation
              </a>
            </div>
          </div>

          {/* 3-Step Connected Timeline */}
          <div className="relative mt-10 sm:mt-12 space-y-5 sm:space-y-6">
            {/* Vertical dashed connector line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-px border-l-2 border-dashed border-line" />

            {[
              ["01", "Share your app idea with us"],
              ["02", "Get a free project assessment"],
              ["03", "Receive a tailored development plan"],
            ].map(([step, text]) => (
              <div key={step} className="relative z-10 flex items-center gap-3.5 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-panel font-mono text-xs font-bold text-paper shadow-sm">
                  {step}
                </div>
                <span className="font-display text-xs sm:text-sm md:text-base font-semibold text-paper">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </RevealCard>

        {/* Right Column: GET IN TOUCH card + interactive contact channels + text inputs */}
        <RevealCard delay={120} className="w-full">
          <div
            id="contact-form"
            className="ios-glass-card rounded-3xl p-5 sm:p-7 lg:p-8"
          >
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-paper">
              GET IN TOUCH
            </h3>
            <div className="mt-3 sm:mt-4 border-b border-dashed border-line pb-2" />

            {/* Clickable Contact Channels */}
            <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-3.5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919754352051"
                target="_blank"
                rel="noopener noreferrer"
                className="group ios-glass flex items-center gap-3.5 sm:gap-4 rounded-2xl p-3 sm:p-3.5 transition-all hover:border-flutter hover:bg-white/85"
              >
                <div className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl border border-line bg-panel text-paper transition-colors group-hover:border-flutter/50 group-hover:text-flutter">
                  <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.52 0-3-.41-4.3-1.18l-.31-.18-3.19.84.85-3.11-.2-.32a8.21 8.21 0 01-1.26-4.29c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.69 8.23-8.27 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1.01 2.55.12.17 1.74 2.66 4.22 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.18-.47-.3z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-mist">
                    WhatsApp
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-paper transition-colors group-hover:text-flutter truncate">
                    +91 9754352051
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919754352051"
                className="group ios-glass flex items-center gap-3.5 sm:gap-4 rounded-2xl p-3 sm:p-3.5 transition-all hover:border-flutter hover:bg-white/85"
              >
                <div className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl border border-line bg-panel text-paper transition-colors group-hover:border-flutter/50 group-hover:text-flutter">
                  <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Phone
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-paper transition-colors group-hover:text-flutter truncate">
                    +91 9754352051
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@flutteryourway.com"
                className="group ios-glass flex items-center gap-3.5 sm:gap-4 rounded-2xl p-3 sm:p-3.5 transition-all hover:border-flutter hover:bg-white/85"
              >
                <div className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl border border-line bg-panel text-paper transition-colors group-hover:border-flutter/50 group-hover:text-flutter">
                  <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Email
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-paper transition-colors group-hover:text-flutter truncate">
                    info@flutteryourway.com
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="ios-glass flex items-center gap-3.5 sm:gap-4 rounded-2xl p-3 sm:p-3.5">
                <div className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl border border-line bg-panel text-paper">
                  <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-paper truncate">
                    Working remotely worldwide
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 border-b border-dashed border-line pb-2" />

            {/* Direct Form Inputs */}
            {sent ? (
              <div className="rounded-2xl border border-flutter/40 bg-flutter/10 p-6 text-center">
                <div className="font-display text-lg font-bold text-flutter">Message Sent!</div>
                <p className="mt-1 text-xs text-mist">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4"
              >
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-mist">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="e.g. John Doe"
                    className="mt-1.5 w-full rounded-xl border border-line bg-ink/60 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-paper placeholder-mist/60 outline-none transition-all focus:border-flutter focus:bg-panel focus:ring-2 focus:ring-flutter/20"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-mist">
                    Company Name
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="e.g. Acme Innovations"
                    className="mt-1.5 w-full rounded-xl border border-line bg-ink/60 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-paper placeholder-mist/60 outline-none transition-all focus:border-flutter focus:bg-panel focus:ring-2 focus:ring-flutter/20"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-mist">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="e.g. john@company.com"
                    className="mt-1.5 w-full rounded-xl border border-line bg-ink/60 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-paper placeholder-mist/60 outline-none transition-all focus:border-flutter focus:bg-panel focus:ring-2 focus:ring-flutter/20"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-mist">
                    Project Details *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="Tell us about your app concept, timeline, and goals..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-line bg-ink/60 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-paper placeholder-mist/60 outline-none transition-all focus:border-flutter focus:bg-panel focus:ring-2 focus:ring-flutter/20"
                  />
                </div>

                <button
                  type="submit"
                  className="squircle w-full bg-flutter py-3 sm:py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-flutter-deep hover:shadow-md cursor-pointer"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </RevealCard>
      </div>
    </section>
  )
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-14">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[210px_1fr] xl:grid-cols-[230px_1fr] items-start">
          {/* Brand Column (Reduced width & compact logo) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[210px] sm:max-w-[230px] mx-auto lg:mx-0">
            <div className="flex justify-center lg:justify-start w-full">
              <StaticLogo className="justify-center lg:justify-start" />
            </div>
            <p className="mt-2.5 text-[10px] sm:text-[11px] leading-relaxed text-mist text-center lg:text-left">
              AI-powered Flutter apps that go live fast. Built by a senior, remote-first team.
            </p>
          </div>

          {/* Parallel Pairs: [Product & Services] and [Contact Info & Social] */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {/* Pair 1: Product & Services parallel */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              {/* Product Column */}
              <div>
                <div className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-flutter">
                  Product
                </div>
                <ul className="mt-2.5 space-y-1.5 sm:space-y-2">
                  {[
                    { label: "Home", href: "#top" },
                    { label: "Why Us", href: "#why" },
                    { label: "Services", href: "#services" },
                    { label: "Projects", href: "#projects" },
                    { label: "Contact Us", href: "#contact" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[10px] sm:text-[11px] text-mist transition-colors hover:text-paper"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <div className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-flutter">
                  Services
                </div>
                <ul className="mt-2.5 space-y-1.5 sm:space-y-2">
                  {[
                    "Flutter Development",
                    "UX/ UI Design",
                    "App Maintenance",
                    "Backend Development",
                    "App Store Submission",
                  ].map((s) => (
                    <li key={s}>
                      <a
                        href="#services"
                        className="text-[10px] sm:text-[11px] text-mist transition-colors hover:text-paper"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pair 2: Contact Info & Social parallel */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              {/* Contact Info Column */}
              <div>
                <div className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-flutter">
                  Contact Info
                </div>
                <ul className="mt-2.5 space-y-1.5 sm:space-y-2">
                  <li>
                    <a
                      href="tel:+919754352051"
                      className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-mist transition-colors hover:text-paper font-medium"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white shrink-0">
                        <img src={phoneSvg} alt="Phone" className="h-2.5 w-2.5 object-contain" />
                      </span>
                      <span>+91 9754352051</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@flutteryourway.com"
                      className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-mist transition-colors hover:text-paper break-all font-medium"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white shrink-0">
                        <img src={mailSvg} alt="Email" className="h-2.5 w-2.5 object-contain" />
                      </span>
                      <span>info@flutteryourway.com</span>
                    </a>
                  </li>
                  <li className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-mist leading-relaxed font-medium">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white shrink-0">
                      <img src={locationSvg} alt="Location" className="h-2.5 w-2.5 object-contain" />
                    </span>
                    <span>Working remotely worldwide</span>
                  </li>
                </ul>
              </div>

              {/* Social Column with crisp black SVG icons */}
              <div>
                <div className="font-mono text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-flutter">
                  Social
                </div>
                <ul className="mt-2.5 space-y-1.5 sm:space-y-2">
                  {[
                    { name: "LinkedIn", url: "https://www.linkedin.com/company/flutter-your-way", icon: linkedinSvg },
                    { name: "Twitter / X", url: "https://x.com/flutteryourway", icon: twitterSvg },
                    { name: "Instagram", url: "https://www.instagram.com/flutteryourway", icon: instaSvg },
                    { name: "Behance", url: "https://www.behance.net", icon: behanceSvg },
                    { name: "Pinterest", url: "https://www.pinterest.com", icon: pinterestSvg },
                    { name: "Reddit", url: "https://www.reddit.com", icon: redditSvg },
                  ].map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-mist transition-colors hover:text-paper"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110 shrink-0">
                          <img src={s.icon} alt={s.name} className="h-2.5 w-2.5 object-contain" />
                        </span>
                        <span>{s.name}</span>
                        <span className="text-mist/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-flutter text-[8.5px]">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="mt-14 sm:mt-16 space-y-3.5 border-t border-line/70 pt-6 font-mono text-xs text-mist">
          {/* 1st Line: Copyright */}
          <div>
            © {new Date().getFullYear()} APPSWAYAN Studio. All rights reserved.
          </div>

          {/* 2nd Line: Back to top on right side */}
          <div className="flex w-full justify-end">
            <a
              href="#top"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line bg-panel/80 px-3.5 py-1.5 font-mono text-xs font-semibold text-flutter hover:border-flutter hover:bg-flutter/10 hover:text-white transition-all shadow-xs"
            >
              <span>Back to top</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------- app ---------- */

export default function App() {
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null)
  const homeScrollPos = useRef<number>(0)

  // Listen to hash changes (e.g. #projects/pinpoint) and browser popstate (Back button)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash.startsWith("#projects/") || hash.startsWith("#project/")) {
        const slug = hash.replace("#projects/", "").replace("#project/", "")
        if (CASE_STUDIES[slug]) {
          setSelectedProjectSlug(slug)
          window.scrollTo({ top: 0, behavior: "instant" })
          return
        }
      }

      // If user navigated back to Home, close project and restore exact scroll position
      setSelectedProjectSlug(null)
      if (homeScrollPos.current > 0) {
        setTimeout(() => {
          window.scrollTo({ top: homeScrollPos.current, behavior: "instant" })
        }, 20)
      }
    }

    handleHash()
    window.addEventListener("hashchange", handleHash)
    window.addEventListener("popstate", handleHash)
    return () => {
      window.removeEventListener("hashchange", handleHash)
      window.removeEventListener("popstate", handleHash)
    }
  }, [])

  const handleOpenProject = (slug: string) => {
    // Save current scroll position on the home page before opening project
    homeScrollPos.current = window.scrollY
    setSelectedProjectSlug(slug)
    window.location.hash = `projects/${slug}`
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const handleBackToProjects = () => {
    setSelectedProjectSlug(null)
    // Clean hash from URL without reloading
    if (window.location.hash.startsWith("#projects/")) {
      window.history.pushState(null, "", window.location.pathname + window.location.search)
    }
    setTimeout(() => {
      window.scrollTo({ top: homeScrollPos.current, behavior: "instant" })
    }, 20)
  }

  const handleTrackEvent = (eventName: string, meta?: Record<string, any>) => {
    console.log(`[CaseStudy Analytics] ${eventName}`, meta)
  }

  if (selectedProjectSlug && CASE_STUDIES[selectedProjectSlug]) {
    return (
      <div className="min-h-full w-full bg-ink text-paper">
        <Header />
        <ProjectDetailPageTemplate
          project={CASE_STUDIES[selectedProjectSlug]}
          onBack={handleBackToProjects}
          onSelectProject={handleOpenProject}
          onTrackEvent={handleTrackEvent}
        />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-full w-full bg-ink text-paper">
      <Header />
      <main className="w-full">
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Projects onOpenProject={handleOpenProject} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
