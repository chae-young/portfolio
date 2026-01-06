// 프로젝트 관련 타입
export interface ProjectOverviewItem {
  title: string;
  details: string[] | null;
}

export interface Project {
  id: number;
  title: string;
  src: string;
  color: string;
  desc: string;
  overview: ProjectOverviewItem[];
  detailImg?: string[];
  detailImgHalf?: boolean;
  date: string;
  skill: string[];
}

// 블로그 포스트 관련 타입
export interface BlogPost {
  link: string;
  title: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

// 컴포넌트 Props 타입
export interface MoreBtnProps {
  to: string;
  text: string;
  dark?: boolean;
}

export interface SubSectionProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export interface ContentBoxProps {
  children: React.ReactNode;
  className?: string;
}

// 레이아웃 관련 타입
export type Breakpoint = 'mobileS' | 'mobileL' | 'tablet' | 'tabletL' | 'desktop';

export interface LayoutProps {
  children: React.ReactNode;
}
