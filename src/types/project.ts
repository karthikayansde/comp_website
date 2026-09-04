export interface ProjectMetric {
  label: string
  value: string
  description: string
}

export interface ProblemSolution {
  title: string
  problem: string
  solution: string
  tag?: string
}

export interface ScreenCategory {
  title: string
  description?: string
  screens: {
    name: string
    highlight: string
    description?: string
  }[]
}

export interface ProjectData {
  id: string
  slug: string
  title: string
  tagline: string
  client: string
  industry: string
  deliverables: string[]
  liveUrl: string
  appStoreUrl?: string
  playStoreUrl?: string
  techStack: string[]
  overview: string
  corePillars: {
    title: string
    description: string
    iconName?: string
  }[]
  screenCategories: ScreenCategory[]
  challenges: ProblemSolution[]
  testimonial: {
    quote: string
    author: string
    role: string
    company: string
    rating: number
  }
  metrics: ProjectMetric[]
  accentColor?: string
  nextProjectSlug?: string
  nextProjectTitle?: string
}
