export interface BulletGroup {
    label: string // '이슈' | '해결' | '결과' | 자유롭게
    items: string[]
  }
  
  export interface IssueItem {
    title: string
    date?: string
    contribution?: string
    groups: BulletGroup[],
    website?: string
  }
  
  export interface GalleryImage {
    src: string
    alt?: string
  }
  
  export interface ProjectDetailData {
    id: string
    num: string
    category: string
    title: string
    subtitle: string
    tags: { label: string; outline?: boolean }[]
    stats: { label: string; value: string; sub?: string }[]
    images?: GalleryImage[]
    coverFallback?: string
    overview: string
    issueItems: IssueItem[]
    etc?: { label: string; items: string[] }[]
    techStack: string[]
    roles: string[]
    period: string
    nextProject?: { title: string; href: string },
    website?: string
  }
  