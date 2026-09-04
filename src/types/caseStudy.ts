export type DeviceType = "mobile" | "desktop"

export interface ChallengeSolution {
  title: string
  problem: string
  solution: string
  image?: string
  tag?: string
}

export interface FeatureItem {
  icon?: string
  title?: string
  label?: string
  description?: string
}

export interface TechStackGroup {
  layer: "Frontend" | "Backend" | "Database" | "Cloud" | "Integrations"
  technologies: {
    name: string
    icon?: string
  }[]
}

export interface ScreenshotItem {
  image: string
  caption?: string
  device: DeviceType
  alt?: string
}

export interface ProcessStep {
  number: string
  phase?: string
  label: string
  description: string
}

export interface MetricTile {
  value: string
  label: string
  detail?: string
}

export interface BeforeAfterComparison {
  beforeTitle?: string
  afterTitle?: string
  before: string[]
  after: string[]
}

export interface CaseStudyTestimonial {
  quote: string
  name: string
  role: string
  company: string
  photo?: string
  rating?: number
}

export interface RelatedProject {
  slug: string
  title: string
  industry: string
  thumbnail: string
  tags: string[]
  summary?: string
}

export interface CaseStudyProject {
  slug: string
  projectName: string
  tagline: string // <= 10 words
  heroImage: string // 16:9 aspect ratio target
  tags: string[]
  
  // Fact strip (Must)
  client: string
  industry: string
  platforms: string[]
  region: string
  duration: string
  liveUrl?: string
  deliverables: string[]

  // Context (Should - 100-150 words)
  summary: string

  // Challenge -> Solution pairs (Must, 2-4 items)
  challenges: ChallengeSolution[]

  // Key features (Should, 6-12 items)
  features?: FeatureItem[]

  // Tech stack grouped by layer (Must)
  techStack: TechStackGroup[]

  // Screenshot gallery (Must, device framed)
  screenshots: ScreenshotItem[]

  // Process / workflow (Optional)
  processSteps?: ProcessStep[]

  // Results & impact (Must, 3-4 stat tiles)
  metrics: MetricTile[]

  // Before / After contrast (Optional)
  beforeAfter?: BeforeAfterComparison

  // Testimonial (Should)
  testimonial?: CaseStudyTestimonial

  // Call to action custom headline (Must)
  ctaHeadline?: string
  ctaSubtext?: string

  // Related projects (Should, 2-3 items)
  relatedProjects?: RelatedProject[]

  // SEO metadata
  seoTitle?: string
  seoDescription?: string
  ogImage?: string
}
