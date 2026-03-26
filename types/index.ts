export interface CareerItem {
  period: string
  company: string
  description: string
  projects: {
    title: string
    period: string
    tech: string[]
    highlights: string[]
  }[]
}

export interface ProjectItem {
  id: number
  title: string
  image: string
  href: string
  tags: string[]
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface ProjectCardItem {
  id: string
  title: string
  image: string
  tags: string[]
  large: boolean
  metric: string
}