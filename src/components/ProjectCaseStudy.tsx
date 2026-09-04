import React, { useState } from "react"
import { ProjectData } from "../types/project"
import card1Img from "../imports/original-7e13fde445196bf456a9ad6111398f9a.webp"
import card2Img from "../imports/Group 9304 (1).png"
import logoImg from "../imports/logo.png"

interface ProjectCaseStudyProps {
  project: ProjectData
  onBack: () => void
  onSelectProject: (slug: string) => void
}

export default function ProjectCaseStudy({
  project,
  onBack,
  onSelectProject,
}: ProjectCaseStudyProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const [playingAudio, setPlayingAudio] = useState(false)

  const activeCategory = project.screenCategories[activeCategoryIndex] || project.screenCategories[0]

  return (
    <div className="min-h-screen w-full bg-ink text-paper antialiased">
      {/* Top Floating Sticky Breadcrumb Bar */}
      <nav className="sticky top-0 z-50 flex justify-center px-3 sm:px-5 md:px-6 pt-2 pointer-events-none">
        <div className="pointer-events-auto flex w-full max-w-[1360px] items-center justify-between squircle ios-glass border border-white/85 px-4 py-2.5 sm:px-6 sm:py-3 shadow-lg shadow-slate-900/10">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel/70 px-3 py-1.5 font-mono text-xs font-semibold text-flutter hover:border-flutter hover:bg-flutter/10 hover:text-white transition-all active:scale-95 shadow-xs cursor-pointer"
            >
              <span>←</span>
              <span>All Projects</span>
            </button>
            <span className="hidden sm:inline font-mono text-xs text-mist">/</span>
            <span className="hidden sm:inline font-display text-xs font-bold uppercase tracking-wider text-paper">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-mist hover:text-flutter transition-colors"
              >
                <span>Live Web</span>
                <span className="text-[10px]">↗</span>
              </a>
            )}
            <a
              href="#contact"
              className="squircle bg-flutter px-3.5 py-1.5 sm:px-4 sm:py-2 font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-flutter-deep hover:shadow-md"
            >
              Build Similar App
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 pb-24 space-y-16 sm:space-y-24">
        {/* ================= 1. HERO & METADATA SECTION ================= */}
        <section className="space-y-8 sm:space-y-12">
          {/* Eyebrow & Title */}
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-flutter">
              <span className="h-1.5 w-1.5 rounded-full bg-flutter" />
              CASE STUDY • {project.industry.toUpperCase()}
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-paper leading-[1.05]">
              {project.title} — {project.tagline}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-mist leading-relaxed font-sans max-w-3xl">
              {project.overview}
            </p>
          </div>

          {/* Metadata Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Client */}
            <div className="ios-glass-card rounded-2xl p-5 space-y-1.5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-mist">Client</div>
              <div className="font-display text-base sm:text-lg font-bold text-paper">{project.client}</div>
              <div className="font-mono text-xs text-mist">{project.industry}</div>
            </div>

            {/* Deliverables */}
            <div className="ios-glass-card rounded-2xl p-5 space-y-1.5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-mist">Deliverables</div>
              <div className="flex flex-wrap gap-1.5">
                {project.deliverables.slice(0, 3).map((d) => (
                  <span
                    key={d}
                    className="inline-block rounded-md border border-line bg-panel/40 px-2 py-0.5 font-mono text-[10px] text-paper"
                  >
                    {d}
                  </span>
                ))}
                {project.deliverables.length > 3 && (
                  <span className="font-mono text-[10px] text-mist self-center">
                    +{project.deliverables.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Live Stores */}
            <div className="ios-glass-card rounded-2xl p-5 space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-mist">Live Platforms</div>
              <div className="flex flex-col gap-1.5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-mono font-semibold text-flutter hover:underline"
                >
                  <span>{project.liveUrl.replace("https://", "")}</span>
                  <span>↗</span>
                </a>
                <div className="flex items-center gap-2 pt-0.5">
                  <span className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-paper">
                    iOS App
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-paper">
                    Android App
                  </span>
                </div>
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div className="ios-glass-card rounded-2xl p-5 space-y-1.5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-mist">Tech Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-md bg-flutter/10 border border-flutter/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-flutter"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. INTERACTIVE DEVICE SHOWCASE ================= */}
        <section className="relative overflow-hidden rounded-3xl ios-glass border border-white/85 p-6 sm:p-10 md:p-14 shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-flutter/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Mockup Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-flutter/40 bg-flutter/10 px-3 py-1 font-mono text-xs font-semibold text-flutter">
                <span className="h-2 w-2 rounded-full bg-flutter animate-pulse" />
                Live Acoustic Experience
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-paper">
                Sound Over Speech: Meditation Reimagined
              </h2>
              <p className="text-sm sm:text-base text-mist leading-relaxed font-sans">
                Atoon replaces spoken meditation instructions with multi-dimensional human-composed electro-acoustic soundscapes. Users recalibrate their nervous system by interacting with a somatic 2D emotion coordinate map.
              </p>

              {/* Interactive Sound Wave Playback Simulator */}
              <div className="rounded-2xl border border-line bg-panel/60 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setPlayingAudio((v) => !v)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-flutter text-white hover:bg-flutter-deep transition-all active:scale-95 cursor-pointer shadow-sm"
                      aria-label={playingAudio ? "Pause session preview" : "Play session preview"}
                    >
                      {playingAudio ? (
                        <span className="text-xs">❚❚</span>
                      ) : (
                        <span className="text-xs ml-0.5">▶</span>
                      )}
                    </button>
                    <div>
                      <div className="text-xs font-bold text-paper">Deep Resonance (432Hz)</div>
                      <div className="text-[10px] font-mono text-mist">Composed by Atoon Studio</div>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-flutter font-semibold">
                    {playingAudio ? "03:42 / 12:00" : "Preview"}
                  </span>
                </div>

                {/* Animated Waveform Bars */}
                <div className="flex items-center gap-1 h-6 pt-1">
                  {[40, 75, 55, 90, 30, 85, 60, 95, 45, 70, 100, 65, 80, 50, 90, 35, 60, 85, 40, 70].map(
                    (h, i) => (
                      <div
                        key={i}
                        style={{ height: playingAudio ? `${Math.max(20, (h * (i % 2 === 0 ? 1 : 0.6)))}%` : `${h * 0.3}%` }}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          playingAudio ? "bg-flutter" : "bg-white/20"
                        }`}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Visual Device Mockup Frame */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-panel">
                <img
                  src={card1Img}
                  alt={`${project.title} Interface Showcase`}
                  className="w-full h-auto object-cover select-none"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-6 pt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-flutter font-semibold">
                        Somatic 2D Map
                      </span>
                      <h4 className="font-display text-base font-bold text-paper">
                        Real-Time Emotional Coordinate Filter
                      </h4>
                    </div>
                    <span className="rounded-full bg-flutter/20 border border-flutter/40 px-3 py-1 font-mono text-[11px] text-flutter">
                      60 FPS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. CORE PILLARS / VALUE PROPOSITIONS ================= */}
        <section className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-flutter">Core Architecture</div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-paper">
              The 4 Pillars That Power {project.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.corePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="ios-glass-card rounded-2xl p-6 sm:p-8 space-y-4 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-flutter/10 border border-flutter/20 font-mono text-sm font-bold text-flutter">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-mist">
                    Feature Pillar
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-paper">
                  {pillar.title}
                </h3>
                <p className="text-sm text-mist leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. CATEGORIZED SCREEN WALKTHROUGH ================= */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-flutter">Experience Anatomy</div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-paper">
                Categorized UX & Screen Walkthrough
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {project.screenCategories.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`rounded-xl px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategoryIndex === idx
                      ? "bg-flutter text-white shadow-md"
                      : "bg-panel/70 text-mist hover:text-paper border border-line"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Display */}
          <div className="rounded-3xl ios-glass border border-white/85 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-paper">
                  {activeCategory.title}
                </h3>
                {activeCategory.description && (
                  <p className="text-xs sm:text-sm text-mist">{activeCategory.description}</p>
                )}
              </div>
              <span className="font-mono text-xs text-flutter font-semibold">
                {activeCategory.screens.length} Dedicated Screens
              </span>
            </div>

            {/* Screen Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeCategory.screens.map((screen, sIdx) => (
                <div
                  key={screen.name}
                  className="rounded-2xl border border-line bg-panel/40 p-4 space-y-2 hover:border-flutter/40 hover:bg-panel transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-flutter">
                      SCREEN {sIdx + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-flutter" />
                  </div>
                  <h4 className="font-display text-base font-bold text-paper">{screen.name}</h4>
                  <div className="font-mono text-xs text-flutter/90">{screen.highlight}</div>
                  {screen.description && (
                    <p className="text-xs text-mist leading-relaxed font-sans">{screen.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 5. ENGINEERING CHALLENGES & SOLUTIONS ================= */}
        <section className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-flutter">Technical Deep-Dive</div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-paper">
              Key Engineering Hurdles & Solutions
            </h2>
            <p className="text-sm sm:text-base text-mist">
              Developing {project.title} required overcoming sophisticated audio rendering, state synchronization, and native purchase hurdles.
            </p>
          </div>

          <div className="space-y-6">
            {project.challenges.map((ch, idx) => (
              <div
                key={ch.title}
                className="ios-glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/85 shadow-lg"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-flutter/10 border border-flutter/20 font-mono text-xs font-bold text-flutter">
                      #{idx + 1}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-paper">
                      {ch.title}
                    </h3>
                  </div>
                  {ch.tag && (
                    <span className="rounded-md bg-white/10 px-2.5 py-1 font-mono text-[11px] text-mist w-fit">
                      {ch.tag}
                    </span>
                  )}
                </div>

                {/* Problem vs Solution Side-by-Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Problem Card */}
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-red-400">
                      <span>⚠️</span>
                      <span>The Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-mist leading-relaxed font-sans">
                      {ch.problem}
                    </p>
                  </div>

                  {/* Solution Card */}
                  <div className="rounded-2xl border border-flutter/30 bg-flutter/5 p-5 space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-flutter">
                      <span>⚡</span>
                      <span>Engineered Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-paper leading-relaxed font-sans">
                      {ch.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 6. STRUCTURED DEVELOPMENT PROCESS ================= */}
        <section className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-flutter">Workflow Framework</div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-paper">
              The 6-Phase Execution Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "Defined user journeys, music categorization logic, and product milestones to shape a bulletproof MVP roadmap.",
              },
              {
                step: "02",
                title: "UI/UX & Sound Prototyping",
                desc: "Crafted high-contrast Dark Mode interfaces and interactive 2D emotion coordinate prototypes in Figma.",
              },
              {
                step: "03",
                title: "Flutter Core Engineering",
                desc: "Implemented low-latency audio player engines, dynamic state filters, and Firebase backend synchronization.",
              },
              {
                step: "04",
                title: "In-App Purchases & RevenueCat",
                desc: "Configured Apple StoreKit and Google Play Billing with transparent 7-day free trial timeline mechanisms.",
              },
              {
                step: "05",
                title: "QA & Multi-Device Testing",
                desc: "Tested across 25+ real iOS & Android devices ensuring 99.8% crash-free stability and responsive audio scaling.",
              },
              {
                step: "06",
                title: "App Store Launch & Growth",
                desc: "Managed end-to-end Apple App Store & Google Play approval with continuous post-launch performance monitoring.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="ios-glass-card rounded-2xl p-6 space-y-3 hover:-translate-y-1 transition-all"
              >
                <div className="font-mono text-sm font-bold text-flutter">{p.step} / PHASE</div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-paper">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-mist leading-relaxed font-sans">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 7. CLIENT TESTIMONIAL ================= */}
        {project.testimonial && (
          <section className="rounded-3xl ios-glass border border-white/85 p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="flex items-center gap-1 text-pop-orange text-lg">
                {"★".repeat(project.testimonial.rating)}
              </div>
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-paper leading-snug">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="pt-2">
                <div className="font-display text-base font-bold text-paper">{project.testimonial.author}</div>
                <div className="font-mono text-xs text-flutter">
                  {project.testimonial.role} • {project.testimonial.company}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= 8. MEASURABLE IMPACT & METRICS ================= */}
        <section className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-flutter">Quantifiable Impact</div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-paper">
              Key Metrics & Production Results
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="ios-glass-card rounded-2xl p-6 space-y-2 text-center hover:-translate-y-1 transition-all"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-flutter">
                  {m.value}
                </div>
                <div className="font-display text-sm font-bold uppercase tracking-wider text-paper">
                  {m.label}
                </div>
                <div className="text-[11px] font-mono text-mist">{m.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 9. NEXT PROJECT SWITCHER & CTA ================= */}
        <section className="rounded-3xl ios-glass border border-white/85 p-8 sm:p-12 space-y-8 shadow-xl text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-flutter">Start Your Project</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-paper">
              Ready to build your Flutter app or MVP?
            </h2>
            <p className="text-sm sm:text-base text-mist font-sans">
              We design, build, and ship senior-engineered Flutter mobile applications with top-tier speed and precision.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="squircle bg-flutter px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-flutter-deep transition-all"
            >
              Book Free Consultation
            </a>
            {project.nextProjectSlug && (
              <button
                onClick={() => onSelectProject(project.nextProjectSlug!)}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-6 py-3.5 font-mono text-xs font-semibold text-paper hover:text-flutter hover:border-flutter transition-all cursor-pointer"
              >
                <span>Next Case Study: {project.nextProjectTitle || "Next Project"}</span>
                <span>→</span>
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
