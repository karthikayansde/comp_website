import React, { useState, useEffect, useRef } from "react"
import { CaseStudyProject, ScreenshotItem } from "../types/caseStudy"
import { CASE_STUDIES } from "../data/caseStudiesData"
import androidSvg from "../imports/ant-design_android-filled.svg"
import appleSvg from "../imports/ant-design_apple-filled.svg"
import webSvg from "../imports/streamline-plump_web.svg"
import locationSvg from "../imports/basil_location-outline.svg"
import mailSvg from "../imports/codicon_mail.svg"

interface ProjectDetailPageProps {
  project: CaseStudyProject
  onBack: () => void
  onSelectProject: (slug: string) => void
  onTrackEvent?: (eventName: string, properties?: Record<string, any>) => void
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

    // Immediately trigger if already in viewport on mount (prevents blank page on load)
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.01, rootMargin: "60px 0px 60px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all will-change-transform ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-[0.99]"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default function ProjectDetailPageTemplate({
  project,
  onBack,
  onSelectProject,
  onTrackEvent,
}: ProjectDetailPageProps) {
  const [activeAnchor, setActiveAnchor] = useState<string>("overview")
  const [showStickyNav, setShowStickyNav] = useState(false)
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0)

  // Scroll to top immediately when a project opens or changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
  }, [project.slug])

  // 1. Dynamic SEO Metadata Update
  useEffect(() => {
    const originalTitle = document.title
    if (project.seoTitle) {
      document.title = project.seoTitle
    }
    const metaDesc = document.querySelector('meta[name="description"]')
    const originalDesc = metaDesc ? metaDesc.getAttribute("content") : ""
    if (metaDesc && project.seoDescription) {
      metaDesc.setAttribute("content", project.seoDescription)
    }

    return () => {
      document.title = originalTitle
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute("content", originalDesc)
      }
    }
  }, [project])

  const [pastHero, setPastHero] = useState(false)
  const tabNavRef = useRef<HTMLElement | null>(null)
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  // Auto-scroll the sticky tab bar so the active tab is centered in view
  useEffect(() => {
    if (activeAnchor && tabRefs.current[activeAnchor] && tabNavRef.current) {
      const activeEl = tabRefs.current[activeAnchor]
      const navEl = tabNavRef.current
      if (activeEl && navEl) {
        const navRect = navEl.getBoundingClientRect()
        const activeRect = activeEl.getBoundingClientRect()
        const targetScrollLeft =
          navEl.scrollLeft + (activeRect.left - navRect.left) - navRect.width / 2 + activeRect.width / 2
        navEl.scrollTo({ left: Math.max(0, targetScrollLeft), behavior: "smooth" })
      }
    }
  }, [activeAnchor])

  // 2. Sticky Anchor Navigation Scroll Listener (Smoothly appears when past hero)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setPastHero(scrollY > 350)

      // Exact physical visual DOM order of the sections
      const tabIds = [
        "overview",
        "features",
        "tech-stack",
        "gallery",
        "challenges",
        "process",
        "results",
      ]

      let currentTab = "overview"
      for (let i = tabIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(tabIds[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 240) {
            currentTab = tabIds[i]
            break
          }
        }
      }
      setActiveAnchor(currentTab)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Tracking Helper
  const track = (action: string, meta?: Record<string, any>) => {
    if (onTrackEvent) {
      onTrackEvent(action, { project: project.slug, ...meta })
    }
  }

  // Horizontal Gallery Scroll Helper
  const galleryScrollRef = useRef<HTMLDivElement | null>(null)
  const scrollGallery = (direction: "left" | "right") => {
    if (galleryScrollRef.current) {
      const scrollAmount = Math.max(320, galleryScrollRef.current.clientWidth * 0.75)
      galleryScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const projectSlugs = Object.keys(CASE_STUDIES)
  const currentIndex = projectSlugs.indexOf(project.slug)
  const nextSlug =
    currentIndex >= 0 && currentIndex < projectSlugs.length - 1
      ? projectSlugs[currentIndex + 1]
      : projectSlugs[0]
  const nextProject = CASE_STUDIES[nextSlug]

  return (
    <div className="min-h-screen w-full bg-ink text-paper antialiased selection:bg-flutter selection:text-white pb-24">
      {/* 14. STICKY IN-PAGE ANCHOR NAV (Appears when scrolled past hero, sits stably below fixed appbar) */}
      <div
        className={`fixed top-[62px] sm:top-[72px] md:top-[78px] inset-x-0 z-40 flex justify-center pointer-events-none transition-all duration-300 ease-in-out px-3 sm:px-5 md:px-6 ${
          pastHero ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <nav
          ref={tabNavRef}
          aria-label="Case study section jump-list"
          className="pointer-events-auto flex items-center gap-1.5 sm:gap-2.5 squircle ios-glass border border-white/85 px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg shadow-slate-900/10 max-w-[95vw] overflow-x-auto no-scrollbar scroll-smooth"
        >
          <button
            onClick={() => {
              onBack()
              track("click_back_to_projects_nav")
            }}
            className="inline-flex items-center gap-1 rounded-full border border-line bg-panel/70 px-2.5 py-1 font-mono text-[10px] sm:text-xs font-semibold text-flutter hover:border-flutter hover:bg-flutter/10 hover:text-white transition-all cursor-pointer shrink-0"
          >
            ← Back
          </button>

          <span className="h-4 w-px bg-line/80 shrink-0" />

          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {[
              { id: "overview", label: "Overview" },
              { id: "features", label: "Features", condition: (project.features?.length ?? 0) > 0 },
              { id: "tech-stack", label: "Tech Stack", condition: project.techStack?.length > 0 },
              { id: "gallery", label: "Gallery", condition: project.screenshots?.length > 0 },
              { id: "challenges", label: "Challenges & Solutions", condition: project.challenges?.length > 0 },
              { id: "process", label: "Process", condition: (project.processSteps?.length ?? 0) > 0 },
              { id: "results", label: "Results", condition: project.metrics?.length > 0 },
            ]
              .filter((item) => item.condition !== false)
              .map((item) => {
                const isActive = activeAnchor === item.id
                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      tabRefs.current[item.id] = el as any
                    }}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.getElementById(item.id)
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" })
                      }
                      track("click_anchor_nav", { section: item.id })
                    }}
                    className={`rounded-full px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-flutter text-white shadow-xs"
                        : "text-mist hover:text-paper hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
          </div>
        </nav>
      </div>

      {/* Main Case Study Container */}
      <main className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24">
        {/* ===================================================================
            1ST LINE BELOW APPBAR: BREADCRUMBS (Home > Projects > Current Project)
        =================================================================== */}
        <div className="border-b border-line/40 pb-3 sm:pb-3.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-mist">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                onBack()
                window.location.hash = "top"
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="hover:text-flutter transition-colors cursor-pointer"
            >
              Home
            </a>
            <span className="text-mist/50 font-bold">&gt;</span>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                onBack()
              }}
              className="hover:text-flutter transition-colors cursor-pointer"
            >
              Projects
            </a>
            <span className="text-mist/50 font-bold">&gt;</span>
            <span className="font-bold text-paper uppercase tracking-wider truncate">
              {project.projectName}
            </span>
          </nav>
        </div>

        {/* Content Sections Container with tight top margin below breadcrumbs */}
        <div className="mt-4 sm:mt-5 md:mt-6 space-y-10 sm:space-y-14 md:space-y-16">
          {/* ===================================================================
              SECTION 1: HERO (MUST)
              Project name, one-line tagline (<=10 words), hero visual (16:9), category tags.
              Sized to content, not full-viewport height.
          =================================================================== */}
          <section id="overview" className="space-y-4 sm:space-y-5 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
            {/* Project Name & One-Line Tagline (<=10 words) - Centered */}
            <RevealCard delay={0}>
              <div className="space-y-2 max-w-3xl mx-auto text-center">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-paper leading-[1.1]">
                  {project.projectName}
                </h1>
                <p className="font-display text-sm sm:text-base md:text-lg font-bold text-mist tracking-tight leading-snug">
                  {project.tagline}
                </p>
              </div>
            </RevealCard>

          {/* Hero Visual: Fixed 16:9 Aspect Ratio Target (Cleanly sized on desktop/web) */}
          <RevealCard delay={120}>
            <div className="relative w-full max-w-3xl lg:max-w-[860px] xl:max-w-[920px] mx-auto aspect-[16/9] squircle-card overflow-hidden border border-line shadow-md bg-panel">
              <img
                src={project.heroImage}
                alt={`${project.projectName} Hero Visual`}
                className="w-full h-full object-cover object-center select-none"
                loading="eager"
              />
            </div>
          </RevealCard>
        </section>

        {/* ===================================================================
            SECTION 2: PROJECT FACT STRIP (MUST)
            Compact card row directly under hero: client, industry, platforms, region, duration, live URL, deliverables.
        =================================================================== */}
        <section id="fact-strip" className="!mt-3 sm:!mt-4 md:!mt-5 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
          <RevealCard delay={150}>
            <div className="w-full max-w-3xl lg:max-w-[860px] xl:max-w-[920px] mx-auto py-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4">
              {/* Client */}
              <div className="space-y-1">
                <div className="font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-mist">
                  Client
                </div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-paper leading-snug">
                  {project.client}
                </div>
              </div>

              {/* Industry */}
              <div className="space-y-1">
                <div className="font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-mist">
                  Industry
                </div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-paper leading-snug">
                  {project.industry}
                </div>
              </div>

              {/* Platforms with Icons */}
              <div className="space-y-1">
                <div className="font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-mist">
                  Platforms
                </div>
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  {project.platforms.map((p) => {
                    const isApple = p.toLowerCase().includes("ios") || p.toLowerCase().includes("apple")
                    const isAndroid = p.toLowerCase().includes("android")
                    const isWeb = p.toLowerCase().includes("web")
                    return (
                      <span
                        key={p}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white text-black px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold shadow-xs border border-white/60"
                      >
                        {isApple && <img src={appleSvg} alt="" className="h-3.5 w-3.5 object-contain" />}
                        {isAndroid && <img src={androidSvg} alt="" className="h-3.5 w-3.5 object-contain" />}
                        {isWeb && <img src={webSvg} alt="" className="h-3.5 w-3.5 object-contain" />}
                        <span className="text-black font-medium">{p}</span>
                      </span>
                    )
                  })}
                </div>
              </div>

              {/* Region */}
              <div className="space-y-1">
                <div className="font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-mist">
                  Region
                </div>
                <div className="flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-paper">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white shrink-0">
                    <img src={locationSvg} alt="" className="h-2.5 w-2.5 object-contain" />
                  </span>
                  <span>{project.region}</span>
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-1">
                <div className="font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-mist">
                  Timeline
                </div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-paper leading-snug">
                  {project.duration}
                </div>
              </div>

              {/* Deliverables tags subrow (Center Aligned) */}
              <div className="col-span-2 sm:col-span-3 lg:col-span-5 pt-3 border-t border-line/40 flex flex-wrap items-center justify-center gap-2 text-center">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-flutter font-semibold mr-1">
                  Deliverables:
                </span>
                {project.deliverables.map((deliv) => (
                  <span
                    key={deliv}
                    className="rounded-lg border border-line bg-panel/50 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-paper/90 font-medium"
                  >
                    {deliv}
                  </span>
                ))}
              </div>
            </div>
          </RevealCard>
        </section>

        {/* ===================================================================
            SECTION 3: CONTEXT / WHAT IT DOES (SHOULD)
            100–150 words of plain narrative prose. Only prose section on the page.
        =================================================================== */}
        {project.summary && (
          <section id="context" className="space-y-3.5 max-w-3xl lg:max-w-[860px] xl:max-w-[920px] mx-auto scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
            <RevealCard delay={100}>
              <div className="space-y-3 text-center">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-paper text-center">
                  What It Is & Why It Exists
                </h2>
                <div className="ios-glass-card squircle-card p-5 sm:p-7 border border-white/85 shadow-sm text-center">
                  <p className="text-xs sm:text-sm md:text-base text-paper/90 leading-relaxed font-sans font-normal">
                    {project.summary}
                  </p>
                </div>
              </div>
            </RevealCard>
          </section>
        )}

        {/* ===================================================================
            SECTION 4: KEY FEATURES (SHOULD)
            Title + Body card grid.
            [VERTICAL LINE: LEFT]
        =================================================================== */}
        {project.features && project.features.length > 0 && (
          <section id="features" className="relative space-y-5 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
            {/* Vertical blue line on LEFT end side reaching full extent of section */}
            <div className="absolute -left-3.5 sm:-left-5 md:-left-6 top-0 -bottom-2 sm:-bottom-3 w-1 sm:w-1.5 rounded-full bg-flutter pointer-events-none" />

            <RevealCard delay={0}>
              <div className="space-y-1.5 max-w-2xl">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-paper">
                  Key Features
                </h2>
              </div>
            </RevealCard>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {project.features.map((feat, idx) => {
                const title = feat.title || feat.label || ""
                const description = feat.description || ""
                return (
                  <RevealCard key={title + idx} delay={idx * 60} className="h-full">
                    <div className="ios-glass-card squircle-card p-5 sm:p-6 flex flex-col justify-between space-y-3 border border-white/85 shadow-xs hover:border-flutter/35 transition-all h-full group">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-3">
                          {feat.icon && (
                            <span
                              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-flutter/10 border border-flutter/20 text-base sm:text-lg shrink-0 group-hover:scale-105 transition-transform"
                              aria-hidden="true"
                            >
                              {feat.icon}
                            </span>
                          )}
                          <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight text-paper">
                            {title}
                          </h3>
                        </div>
                        {description && (
                          <p className="text-xs text-mist leading-relaxed font-sans">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                  </RevealCard>
                )
              })}
            </div>
          </section>
        )}

        {/* ===================================================================
            SECTION 5: TECH STACK (MUST)
            Grouped by layer: Frontend / Backend / Database / Cloud / Integrations.
            [VERTICAL LINE: RIGHT]
        =================================================================== */}
        {project.techStack && project.techStack.length > 0 && (
          <section id="tech-stack" className="relative space-y-6 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
            {/* Vertical blue line on RIGHT end side reaching full extent of section */}
            <div className="absolute -right-3.5 sm:-right-5 md:-right-6 top-0 -bottom-2 sm:-bottom-3 w-1 sm:w-1.5 rounded-full bg-flutter pointer-events-none" />

            <RevealCard delay={0}>
              <div className="space-y-1.5 max-w-2xl">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-paper">
                  Tech Stack by Architectural Layer
                </h2>
              </div>
            </RevealCard>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.techStack.map((group, idx) => (
                <RevealCard key={group.layer} delay={idx * 90} className="h-full">
                  <div className="ios-glass-card squircle-card p-5 sm:p-6 space-y-3.5 border border-white/85 shadow-sm h-full">
                    <div className="flex items-center justify-between border-b border-line/60 pb-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-flutter">
                        {group.layer}
                      </span>
                      <span className="font-mono text-[10px] text-mist">
                        {group.technologies.length} components
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-panel/70 px-2.5 py-1 font-mono text-[11px] sm:text-xs font-semibold text-paper shadow-xs"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-flutter" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealCard>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            SECTION 6: SCREENSHOT GALLERY (MUST)
            Horizontal scrollable showcase track with natural mousewheel, touch scroll, and button controls.
            [VERTICAL LINE: LEFT]
        =================================================================== */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section
            id="gallery"
            aria-label="Screenshot gallery horizontal scroll"
            className="relative space-y-5 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36"
          >
            {/* Vertical blue line on LEFT end side reaching full extent of section */}
            <div className="absolute -left-3.5 sm:-left-5 md:-left-6 top-0 -bottom-2 sm:-bottom-3 w-1 sm:w-1.5 rounded-full bg-flutter pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <RevealCard delay={0}>
                <div className="space-y-1.5 max-w-2xl">
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-paper">
                    Visual Interface Showcase
                  </h2>
                  <p className="text-xs sm:text-sm text-mist font-sans">
                    Scroll through high-fidelity application screens and key interaction flows.
                  </p>
                </div>
              </RevealCard>

              {/* Scroll Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => scrollGallery("left")}
                  aria-label="Scroll gallery left"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center text-center rounded-full border border-line bg-panel/70 text-paper hover:bg-flutter hover:text-white transition-all active:scale-95 cursor-pointer shadow-xs"
                >
                  <span className="text-sm sm:text-base leading-none select-none font-bold">←</span>
                </button>
                <button
                  onClick={() => scrollGallery("right")}
                  aria-label="Scroll gallery right"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center text-center rounded-full border border-line bg-panel/70 text-paper hover:bg-flutter hover:text-white transition-all active:scale-95 cursor-pointer shadow-xs"
                >
                  <span className="text-sm sm:text-base leading-none select-none font-bold">→</span>
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Screenshots Track */}
            <RevealCard delay={120}>
              <div
                ref={galleryScrollRef}
                tabIndex={0}
                className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth scrollbar-thin select-none outline-none focus-visible:ring-1 focus-visible:ring-flutter/50 rounded-2xl"
              >
                {project.screenshots.map((item, idx) => (
                  <div
                    key={item.image + idx}
                    className="w-[85vw] sm:w-[500px] md:w-[600px] lg:w-[680px] shrink-0 snap-start space-y-2.5 group"
                  >
                    <div className="relative w-full aspect-[16/9] squircle-card overflow-hidden bg-panel border border-line shadow-md group-hover:border-flutter/40 transition-all">
                      <img
                        src={item.image}
                        alt={item.alt || `Screenshot ${idx + 1}`}
                        className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-102"
                      />
                      <span className="absolute top-3 left-3 rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-white border border-white/20">
                        {idx + 1} / {project.screenshots.length}
                      </span>
                    </div>
                    {item.caption && (
                      <p className="font-display text-xs sm:text-sm font-semibold text-paper px-1">
                        {item.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </RevealCard>
          </section>
        )}

        {/* ===================================================================
            SECTION 7: CHALLENGE -> SOLUTION PAIRS (MUST - HIGHEST PRIORITY)
            Placed directly next to Visual Interface Showcase.
            [VERTICAL LINE: RIGHT]
        =================================================================== */}
        {project.challenges && project.challenges.length > 0 && (
          <section id="challenges" className="relative space-y-6 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
            {/* Vertical blue line on RIGHT end side reaching full extent of section */}
            <div className="absolute -right-3.5 sm:-right-5 md:-right-6 top-0 -bottom-2 sm:-bottom-3 w-1 sm:w-1.5 rounded-full bg-flutter pointer-events-none" />

            <RevealCard delay={0}>
              <div className="space-y-1.5 max-w-3xl">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-paper">
                  Challenges & Solutions
                </h2>
                <p className="text-xs sm:text-sm text-mist font-sans">
                  Each obstacle paired directly with its technical implementation.
                </p>
              </div>
            </RevealCard>

            <div className="space-y-5">
              {project.challenges.map((item, idx) => (
                <RevealCard key={item.title} delay={idx * 120}>
                  <div className="ios-glass-card squircle-card p-5 sm:p-7 space-y-5 border border-white/85 shadow-sm transition-all">
                    {/* Pair Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-line/60 pb-3.5">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center min-w-[36px] h-8 px-2.5 rounded-xl bg-flutter/10 border border-flutter/25 font-mono text-xs font-bold text-flutter shrink-0 shadow-xs">
                          #{idx + 1}
                        </span>
                        <h3 className="font-display text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight text-paper">
                          {item.title}
                        </h3>
                      </div>
                      {item.tag && (
                        <span className="rounded-md bg-white/10 px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold text-mist uppercase tracking-wider w-fit">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Unified Visual Unit: Problem & Solution Side-by-Side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
                      {/* Problem Block */}
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4 sm:p-5 space-y-2 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-red-400">
                            <span>⚠️</span>
                            <span>The Challenge</span>
                          </div>
                          <p className="text-xs sm:text-sm text-mist leading-relaxed font-sans">
                            {item.problem}
                          </p>
                        </div>
                      </div>

                      {/* Solution Block */}
                      <div className="rounded-2xl border border-flutter/30 bg-flutter/5 p-4 sm:p-5 space-y-2 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-flutter">
                            <span>⚡</span>
                            <span>Engineered Solution</span>
                          </div>
                          <p className="text-xs sm:text-sm text-paper leading-relaxed font-sans font-medium">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Optional Supporting Image */}
                    {item.image && (
                      <div className="rounded-2xl overflow-hidden border border-white/20 aspect-[16/9] max-h-60">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </RevealCard>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            CALL TO ACTION (Placed below Challenges & Solutions)
            [NO VERTICAL LINE]
        =================================================================== */}
        <section id="cta" className="scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
          <RevealCard delay={100}>
            <div className="ios-glass-card squircle-card p-6 sm:p-10 md:p-12 !border-2 !border-flutter shadow-md text-center space-y-5 max-w-3xl mx-auto">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-paper leading-tight">
                Looking for a partner to build an app like this? <br className="hidden sm:inline" />
                Let&apos;s engineer something exceptional together.
              </h2>
              <p className="text-xs sm:text-sm text-mist font-sans max-w-xl mx-auto leading-relaxed">
                From concept and system architecture to UI/UX design and launch, <br className="hidden sm:inline" />
                we build high-performance applications engineered to grow with your business.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    onBack()
                    setTimeout(() => {
                      const contactEl = document.getElementById("contact")
                      if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" })
                    }, 50)
                    track("click_cta_button")
                  }}
                  className="squircle inline-flex items-center justify-center bg-flutter px-7 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-flutter-deep transition-all cursor-pointer"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </RevealCard>
        </section>

        {/* ===================================================================
            SECTION 8: PROCESS / WORKFLOW (OPTIONAL)
            Numbered steps. Collapses cleanly if omitted.
            [VERTICAL LINE: LEFT]
        =================================================================== */}
        {project.processSteps && project.processSteps.length > 0 && (
          <section id="process" className="relative space-y-6 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
            {/* Vertical blue line on LEFT end side reaching full extent of section */}
            <div className="absolute -left-3.5 sm:-left-5 md:-left-6 top-0 -bottom-2 sm:-bottom-3 w-1 sm:w-1.5 rounded-full bg-flutter pointer-events-none" />

            <RevealCard delay={0}>
              <div className="space-y-1.5 max-w-2xl">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-paper">
                  The Delivery Roadmap
                </h2>
              </div>
            </RevealCard>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
              {project.processSteps.map((step, idx) => {
                const defaultPhases = [
                  "Discovery Call",
                  "UI/UX Design",
                  "Development",
                  "Testing & QA",
                  "Deployment",
                  "Support",
                ]
                const phaseLabel = step.phase || defaultPhases[idx % defaultPhases.length]

                return (
                  <RevealCard key={step.number} delay={idx * 100} className="h-full">
                    <div className="ios-glass-card squircle-card p-5 sm:p-6 space-y-3 border border-white/85 shadow-sm transition-all flex flex-col justify-between group h-full">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center justify-center min-w-[34px] h-6 px-2 rounded-xl bg-flutter/10 border border-flutter/25 font-mono text-[11px] font-bold text-flutter shadow-xs">
                            #{step.number}
                          </span>
                          <span className="rounded-md bg-panel/70 border border-line px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-flutter">
                            {phaseLabel}
                          </span>
                        </div>
                        <h3 className="font-display text-xs sm:text-sm md:text-base font-bold uppercase tracking-tight text-paper">
                          {step.label}
                        </h3>
                        <p className="text-xs text-mist leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </RevealCard>
                )
              })}
            </div>
          </section>
        )}

        {/* ===================================================================
            SECTION 9: RESULTS & IMPACT (MUST)
            3–4 large stat tiles (value + one-line label). Numbers only.
            [VERTICAL LINE: RIGHT]
        =================================================================== */}
        {project.metrics && project.metrics.length > 0 && (
          <section id="results" className="relative space-y-6 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
            {/* Vertical blue line on RIGHT end side reaching full extent of section */}
            <div className="absolute -right-3.5 sm:-right-5 md:-right-6 top-0 -bottom-2 sm:-bottom-3 w-1 sm:w-1.5 rounded-full bg-flutter pointer-events-none" />

            <RevealCard delay={0}>
              <div className="space-y-1.5 max-w-2xl">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-paper">
                  Results & Measurable Outcomes
                </h2>
              </div>
            </RevealCard>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {project.metrics.map((m, idx) => (
                <RevealCard key={m.label} delay={idx * 90} className="h-full">
                  <div className="ios-glass-card squircle-card p-5 space-y-1.5 text-center border border-white/85 shadow-sm transition-all h-full">
                    <div className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-flutter">
                      {m.value}
                    </div>
                    <div className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-paper">
                      {m.label}
                    </div>
                    {m.detail && (
                      <div className="text-[10px] sm:text-[11px] font-mono text-mist">
                        {m.detail}
                      </div>
                    )}
                  </div>
                </RevealCard>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            SECTION 10: BEFORE / AFTER (OPTIONAL)
            Two-column contrast of client's state pre/post engagement. Collapses cleanly if omitted.
            [VERTICAL LINE: LEFT]
        =================================================================== */}
        {project.beforeAfter && (
          <section id="before-after" className="relative space-y-6 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
            {/* Vertical blue line on LEFT end side reaching full extent of section */}
            <div className="absolute -left-3.5 sm:-left-5 md:-left-6 top-0 -bottom-2 sm:-bottom-3 w-1 sm:w-1.5 rounded-full bg-flutter pointer-events-none" />

            <RevealCard delay={0}>
              <div className="space-y-1.5 max-w-2xl">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-paper">
                  Before & After Contrast
                </h2>
              </div>
            </RevealCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Before Column */}
              <RevealCard delay={80}>
                <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-5 sm:p-7 space-y-3.5 h-full">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-red-400 border-b border-red-500/20 pb-2.5">
                    <span>✕</span>
                    <span>{project.beforeAfter.beforeTitle || "Pre-Engagement State"}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {project.beforeAfter.before.map((bItem, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-mist leading-relaxed font-sans">
                        <span className="text-red-400 shrink-0 font-bold">•</span>
                        <span>{bItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealCard>

              {/* After Column */}
              <RevealCard delay={180}>
                <div className="rounded-3xl border border-flutter/30 bg-flutter/5 p-5 sm:p-7 space-y-3.5 h-full">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-flutter border-b border-flutter/20 pb-2.5">
                    <span>✓</span>
                    <span>{project.beforeAfter.afterTitle || "Post-Launch Result"}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {project.beforeAfter.after.map((aItem, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-paper leading-relaxed font-sans font-medium">
                        <span className="text-flutter shrink-0 font-bold">✓</span>
                        <span>{aItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealCard>
            </div>
          </section>
        )}

        {/* ===================================================================
            SECTION 11: CLIENT TESTIMONIAL (SHOULD)
            Matching the authentic Testimonials card design system (Center Aligned).
            [NO VERTICAL LINE]
        =================================================================== */}
        {project.testimonial && (
          <section id="testimonial" className="scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
            <div className="max-w-3xl lg:max-w-[860px] xl:max-w-[920px] mx-auto">
              <RevealCard delay={100}>
                <figure className="ios-glass-card squircle-card p-5 sm:p-7 md:p-8 border border-white/85 shadow-md flex flex-col justify-between">
                  <div>
                    {/* 1st Row: Profile Image, Name and Role */}
                    <div className="flex items-center gap-3 sm:gap-3.5">
                      {project.testimonial.photo ? (
                        <img
                          src={project.testimonial.photo}
                          alt={project.testimonial.name}
                          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-line ring-2 ring-flutter/20 shrink-0"
                        />
                      ) : (
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-flutter/10 border border-flutter/20 text-flutter font-mono font-bold text-sm shrink-0">
                          {project.testimonial.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="font-semibold text-paper text-sm sm:text-base leading-tight">
                          {project.testimonial.name}
                        </div>
                        <div className="mt-0.5 font-mono text-xs text-flutter font-medium tracking-wide">
                          {project.testimonial.role} • {project.testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Below: Review Quote */}
                    <blockquote className="mt-4 font-display text-sm sm:text-base md:text-lg font-medium leading-relaxed text-paper/90">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Below: Star Rating */}
                  <div className="mt-4 flex items-center gap-1 border-t border-line/60 pt-3 text-flutter">
                    {[...Array(project.testimonial.rating || 5)].map((_, i) => (
                      <span key={i} className="text-sm sm:text-base">
                        ★
                      </span>
                    ))}
                  </div>
                </figure>
              </RevealCard>
            </div>
          </section>
        )}

        {/* Dual Bottom Action Buttons: Equal Width (Start Yours + Next Project) */}
        <div className="max-w-3xl lg:max-w-[860px] xl:max-w-[920px] mx-auto pt-2">
          <RevealCard delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Button 1: Start Yours */}
              <button
                type="button"
                onClick={() => {
                  onBack()
                  setTimeout(() => {
                    const contactEl = document.getElementById("contact")
                    if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" })
                  }, 50)
                  track("click_start_yours_button")
                }}
                className="group flex items-center justify-between squircle bg-flutter px-5 py-3.5 shadow-sm hover:bg-flutter-deep transition-all cursor-pointer w-full text-left"
              >
                <div>
                  <div className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/80">
                    Ready to build?
                  </div>
                  <div className="font-display text-sm sm:text-base font-extrabold uppercase tracking-tight text-white">
                    Start Yours
                  </div>
                </div>
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/20 text-white font-bold text-sm shadow-xs group-hover:bg-white group-hover:text-flutter group-hover:translate-x-0.5 transition-all">
                  →
                </div>
              </button>

              {/* Button 2: Next Project */}
              {nextProject ? (
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    onSelectProject(nextProject.slug)
                    track("click_next_project", { targetSlug: nextProject.slug })
                  }}
                  className="group flex items-center justify-between squircle ios-glass px-5 py-3.5 border border-white/85 shadow-sm hover:border-flutter/50 hover:bg-white/95 transition-all cursor-pointer w-full text-left"
                >
                  <div className="min-w-0 pr-2">
                    <div className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-mist group-hover:text-flutter transition-colors">
                      Next Project
                    </div>
                    <div className="font-display text-sm sm:text-base font-extrabold uppercase tracking-tight text-paper truncate">
                      {nextProject.projectName}
                    </div>
                  </div>
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-flutter text-white font-bold text-sm shadow-xs group-hover:bg-flutter-deep group-hover:translate-x-0.5 transition-all shrink-0">
                    →
                  </div>
                </button>
              ) : (
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    onBack()
                  }}
                  className="group flex items-center justify-between squircle ios-glass px-5 py-3.5 border border-white/85 shadow-sm hover:border-flutter/50 hover:bg-white/95 transition-all cursor-pointer w-full text-left"
                >
                  <div>
                    <div className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-mist">
                      Portfolio
                    </div>
                    <div className="font-display text-sm sm:text-base font-extrabold uppercase tracking-tight text-paper">
                      All Projects
                    </div>
                  </div>
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-flutter text-white font-bold text-sm shadow-xs group-hover:bg-flutter-deep group-hover:translate-x-0.5 transition-all shrink-0">
                    →
                  </div>
                </a>
              )}
            </div>
          </RevealCard>
        </div>
        </div>
      </main>
    </div>
  )
}
