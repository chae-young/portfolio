import { ProjectDetailData } from "@/app/new-projects/_types"

export interface CareerProjectDesc {
  title: string
  detail: string[]
}

export interface CareerProject {
  name: string
  date: string
  skill: string
  desc: CareerProjectDesc[]
}

export interface CareerData {
  id: number
  status: boolean
  year: string
  company: string
  companyInfo: string
  projects: CareerProject[]
}

export const PROJECTS = [
  {
    id: 1,
    title: "LG Uplus — 서비스 운영",
    src: "./images/project/lg.png",
    color: "#D62E88",
    desc: "통신사 웹사이트 운영 프로젝트입니다. Vue.js 기반 서비스 환경에서 공통 컴포넌트와 기존 구조를 유지하며, 서비스 안정성을 우선으로 두고 정책변경 및 UI 개편에 따른 기능 개발과 운영 이슈 대응을 수행했습니다. 홈가입 상품 페이지, 마이페이지 등 사용자 접점이 되는 화면을 중심으로 UI와 비즈니스 로직을 점진적으로 개선했으며, 신규 기능 추가 시에도 기존 코드에 미치는 영향을 최소화 하는 방향으로 구현했습니다.",
    overview: [
      {
        title: "홈 가입신청 페이지 리뉴얼 프론트엔드 개발 및 로직 개선",
        details: null,
      },
      {
        title:
          "단통법 폐지에 따른 통신 상품 관련 UI/데이터 처리 로직 개선 및 신규 API 연동",
        details: null,
      },
      {
        title: "Vue.js 기반의 유지보수 및 운영 이슈 대응",
        details: null,
      },
    ],
    detailImg: ["./images/project/lg-home.png"],
    date: "2025.05 ~ 진행중",
    skill: ["Vue.js", "Nuxt"],
  },
  {
    id: 2,
    title: "한양대학교 인터칼리지 - 신규 구축",
    src: "./images/project/hanyang.png",
    desc: "한양대학교 학생을 대상으로 한 맞춤형 학업계획 설계 서비스로, React 기반 신규 서비스의 프론트엔드 개발을 리딩했습니다. 서비스 전반의 UI 구조를 설계하고 공유 컴포넌트와 템플릿을 정의해 개발 효율성을 높였으며, 퍼블리셔와 협업하여 반복적으로 사용되는 컴포넌트의 CSS 패턴을 표준화함으로써 일관된 마크업 구조를 확립하고 개발 시간을 단축했습니다. 또한 기능별 우선순위를 설정하고 Jira 기반의 업무 분담 및 이슈 트래킹을 통해 팀 단위 일정 관리와 개발 진행 상황을 조율했습니다.",
    color: "#fff",
    overview: [
      {
        title: "API 요청 우선순위 최적화",
        details: [
          "페이지 로드시 통계수집 API가 핵심 데이터보다 먼저 요청되어 초기 로딩 병목 발생",
          "사용자에게 보이지 않는 통계는 백그라운드 처리가 적합하다고 판단",
          "requestIdleCallback으로 우선순위 조정 → LCP 54% 개선",
        ],
      },
      {
        title: "TanStack Query 키 관리 개선",
        details: [
          "프로젝트 전반에 하드코딩된 쿼리 키로 인한 중복, 오타, 유지보수 어려움 발생",
          "PREFIX 기반 상수 관리와 함수형 쿼리 키 생성 패턴 사용으로 네임스페이스 분리",
          "쿼리 키 일관성 유지 및 TanStack Query 캐시 관리 효율성 개선",
        ],
      },
      {
        title: "공통컴포넌트 아키텍처 설계",
        details: [
          "반복적인 UI 패턴의 개별 개발로 인한 코드 중복 및 유지보수 복잡도 증가",
          "합성컴포넌트 패턴과 Slot 패턴을 활용한 유연하고 재사용 가능한 컴포넌트 구축",
          "코드 재사용성 향상 및 개발 효율성 향상",
        ],
      },
      {
        title: "빌드 용량 최적화",
        details: [
          "빌드 시 용량 초과로 인한 배포 문제 발생",
          "Tree Shaking 활성화로 사용되지 않는 export 제거",
          "빌드 용량 75% 감소 및 배포 안정화",
        ],
      },
      {
        title: "상태관리 저장 최적화",
        details: [
          "상태 데이터 쿠키 과다 저장으로 인한 HTTP 헤더 용량 증가",
          "Zustand persist 저장 방식 개선 제안 및 구현",
          "인증 관련 상태만 쿠키에 저장, 나머지는 로컬스토리지로 분리",
          "네트워크 트래픽 감소 및 요청 속도 개선",
        ],
      },
      {
        title: "외부 인증 시스템 연동",
        details: ["SSO 통합 로그인 구현", "PASS 본인인증 연동"],
      },
    ],
    // detailImg: ["./images/project/lg-home.png"],
    date: "2024.09 ~ 2025.03",
    skill: ["React", "Tanstack Query", "Zustand", "Radix UI"],
  },
  {
    id: 3,
    title: "패션 커머스 플랫폼 · 프로모션",
    src: "./images/project/wc.png",
    desc: "비주얼 디자인팀 내 퍼블리싱 파트로 근무하며, 이벤트·프로모션·기획전 페이지 퍼블리싱을 담당했습니다. 디자이너, 기획자, 개발팀, MD 등 다양한 유관부서와 협업해 요구사항을 정리하고 CSS와 JS를 활용해 프로모션 무드에 맞는 인터랙션과 모션을 구현했습니다. 또한 이벤트와 빅프로모션에 반복적으로 사용되는 모션과 퍼블리싱 코드를 APP UI에 자연스럽게 적용할수 있도록 개발했으며, 디자이너들이 직접 활용할 수 있는 퍼블리싱 코드 구조를 구축, 유지보수하고 관련 이슈 대응 및 문서화를 진행했습니다.",
    color: "#fff",
    overview: [
      {
        title:
          "시즌/브랜드 컨셉에 맞춘 프로모션 페이지 퍼블리싱 (월 평균 10~15건)",
        details: [
          "캐주얼, 모던 등 브랜드 무드에 따라 차별화된 인터랙션 및 애니메이션 적용",
        ],
      },
      {
        title: "디자이너용 모션 탬플릿 개발",
        details: [
          "디자이너의 개별 모션 요청으로 인한 작업지연 및 일관성 부족",
          "자주 쓰는 모션 패턴 정리 해서 JS로 템플릿화 및 가이드 제작",
          "디자이너 작업 시간 단축, 프로모션 제작 속도 향상",
        ],
      },
    ],
    detailImg: [
      "./images/project/wc1.gif",
      "./images/project/wc2.gif",
      "./images/project/wc3.gif",
      "./images/project/wc4.gif",
    ],
    detailImgHalf: true,
    date: "2022.02 ~ 2023.08",
    skill: ["HTML", "CSS", "Scroll Animation"],
  },
  {
    id: 4,
    title: "패션 브랜드 — UI 구축",
    src: "./images/project/styleship.png",
    desc: "패션 브랜드 웹사이트를 전문으로 제작하는 웹에이전시에서 UI팀 퍼블리셔로 3년간 근무하며, 다양한 브랜드의 웹사이트 구축과 운영을 담당했습니다. 신규 사이트 구축(퍼블리싱), 리뉴얼, 이벤트 및 프로모션 페이지 제작, 반응형 웹 구현과 유지보수 등 전반적인 퍼블리싱 업무를 수행했으며,주요 패션 브랜드를 포함해 20여 개 이상의 웹사이트를 구축·운영하며 다양한 프로젝트 환경에서 퍼블리싱 역량을 쌓았습니다.",
    color: "#fff",
    overview: [
      {
        title:
          "FILA ,라이카, 골든구스, 콜럼비아 브랜드 포함 20여개 사이트 구축 및 유지보수",
        details: null,
      },
      {
        title:
          "CSS Animation 기반 모션 패턴 정의와 함께 HTML 구조 및 클래스 네이밍 규칙 설계를 담당",
        details: null,
      },
      {
        title: "프로모션 페이지 다수 제작",
        details: null,
      },
      {
        title: "반응형 UI, 크로스 브라우징 대응",
        details: null,
      },
    ],
    detailImg: [
      "./images/project/fila.jpg",
      "./images/project/gg.jpg",
      "./images/project/leica.jpg",
      "./images/project/pandora.jpg",
    ],
    detailImgHalf: true,
    date: "2022.02 ~ 2023.08",
    skill: ["HTML", "CSS", "Jquery", "Scroll Animation"],
  },
]

export const CAREER_DATA: CareerData[] = [
  {
    id: 1,
    status: true,
    year: "2025.05 - 재직중",
    company: "(주)디플루이드",
    companyInfo:
      "다양한 클라이언트의 웹 서비스 운영,구축을 담당하는 프론트엔드 전문 에이전시",
    projects: [
      {
        name: "LG Uplus — 서비스 운영",
        date: "2025.04 - 진행중",
        skill: "Vue, Nuxt",
        desc: [
          {
            title:
              "홈 가입신청 페이지 리뉴얼 개발 참여하며 사용자 가입 플로우 변경에 따른 UI 구조 및 상태 흐름 개선",
            detail: [
              "데이터 응답 스펙 변경에 대응하여 기존 비즈니스 로직 재설계",
            ],
          },
          {
            title:
              "정책(단통법 폐지) 변경에 따라 요금제/혜택 노출 방식이 달라지는 UI 컴포넌트 재설계 및 신규 API 연동을 포함한 비즈니스 로직 개선",
            detail: [],
          },
        ],
      },
      {
        name: "한양대학교 학생 맞춤형 학업계획 설계 서비스 구축",
        date: "2024.09 - 2025.03",
        skill: "Next.js, Tanstack query, Zustand, Radix UI",
        desc: [
          {
            title: "API 요청 우선순위 최적화",
            detail: [
              "페이지 로드시 통계수집 API가 핵심 데이터보다 먼저 요청되어 초기 로딩 병목 발생",
              "사용자에게 보이지 않는 통계는 백그라운드 처리가 적합하다고 판단",
              "requestIdleCallback으로 우선순위 조정 → LCP 54% 개선",
            ],
          },
          {
            title: "TanStack Query 키 관리 개선",
            detail: [
              "프로젝트 전반에 하드코딩된 쿼리 키로 인한 중복, 오타, 유지보수 어려움 발생",
              "PREFIX 기반 상수 관리와 함수형 쿼리 키 생성 패턴 사용으로 네임스페이스 분리",
              "쿼리 키 일관성 유지 및 TanStack Query 캐시 관리 효율성 개선",
            ],
          },
          {
            title: "공통컴포넌트 아키텍처 설계",
            detail: [
              "반복적인 UI 패턴의 개별 개발로 인한 코드 중복 및 유지보수 복잡도 증가",
              "합성컴포넌트 패턴과 Slot 패턴을 활용한 유연하고 재사용 가능한 컴포넌트 구축",
              "코드 재사용성 향상 및 개발 효율성 향상",
            ],
          },
          {
            title: "빌드 용량 최적화",
            detail: [
              "빌드 시 용량 초과로 인한 배포 문제 발생",
              "Tree Shaking 활성화로 사용되지 않는 export 제거",
              "빌드 용량 75% 감소 및 배포 안정화",
            ],
          },
          {
            title: "외부 인증 시스템 연동",
            detail: ["SSO 통합 로그인 구현", "PASS 본인인증 연동"],
          },
        ],
      },
      {
        name: "LG CNS 아테네 ABT 시스템 - 앱 기반 서비스의 웹 반응형 전환",
        date: "2024.08 - 2024.09",
        skill: "Vue, Nuxt, TailwindCSS, SCSS",
        desc: [
          {
            title:
              "Vue.js 기반 기존 APP 전용 UI를 분석하여 반응형 스타일로 구축(1인 전담)",
            detail: [],
          },
          {
            title:
              "타이트한 프로젝트 일정속에 기간 내(1개월내 앱→ 웹 반응형 전환) 작업 완수",
            detail: [],
          },
        ],
      },
      {
        name: "구강암 예방을 돕는 헬스케어 앱 개선",
        date: "2024.06 - 2024.07",
        skill: "React, Typescript, Zustand, Chakra UI",
        desc: [
          {
            title:
              "런칭 전 내부 기능테스트 및 코드 분석을 통해 10건 이상의 이슈 사전 발견 및 수정으로 안정적 런칭 기여",
            detail: [],
          },
          {
            title:
              "중복 코드 제거 및 안티 패턴 코드 리팩토링으로 코드 안정성 개선",
            detail: [],
          },
          {
            title: "API 중복 호출 이슈 분석 단일 요청으로 페이지 로딩 최적화",
            detail: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    status: false,
    year: "2022.02 - 2023.08",
    company: "(주)더블유컨셉코리아",
    companyInfo: "누적 가입자수 수백만명의 패션 플랫폼",
    projects: [
      {
        name: "대규모 프로모션 UI 구축 및 운영",
        date: "2022.02 - 2023.08",
        skill: "HTML, CSS, Javascript, Scroll Animation",
        desc: [
          {
            title: "디자이너 협업을 고려한 UI 규칙 및 인터랙션 가이드 정립",
            detail: [
              "재사용 가능한 모션 템플릿을 개발하여 디자이너 협업 효율 및 프로모션 제작 속도 개선",
            ],
          },
          {
            title:
              "브랜드 무드에 최적화된 인터랙션 구현으로 사용자 경험(UX) 향상",
            detail: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    status: false,
    year: "2018.02 - 2021.02",
    company: "(주)스타일쉽",
    companyInfo: "24년 업력의 브랜드 커머스 전문 에이전시",
    projects: [
      {
        name: "대형 브랜드(FILA, 라이카, 골든구스, 콜럼비아 등) 20여 개 브랜드 커머스 사이트 UI 구축 및 유지보수",
        date: "2022.02 - 2023.08",
        skill: "HTML, CSS, Javascript, Scroll Animation",
        desc: [
          {
            title:
              "시맨틱 마크업과 BEM 방법론을 적용한 유지보수성 높은 마크업 구조 설계",
            detail: ["스네이크 케이스 클래스에서 BEM 방식으로 개선 및 문서화"],
          },
          {
            title: "반응형 UI 구현 및 크로스 브라우징 대응",
            detail: [],
          },
        ],
      },
    ],
  },
]

export const projectData: Array<ProjectDetailData> = [
  {
    id: "1",
    num: "01 / 04",
    category: "통신 · B2C · 운영",
    title: "LG Uplus — 서비스 운영",
    subtitle:
      "Vue.js 기반 대기업 통신 서비스 운영 프로젝트 입니다. 홈 가입신청 페이지 리뉴얼, 단통법 폐지 대응 UI 개편, 레거시 코드 유지보수까지 — 사용자 접점이 되는 화면의 비즈니스 로직을 안정적으로 개선했습니다.",
    tags: [
      { label: "Vue.js" },
      { label: "Nuxt" },
      { label: "Frontend 운영", outline: true },
      { label: "운영 이슈 대응", outline: true },
    ],
    stats: [
      { label: "프로젝트 기간", value: "2025.05 —", sub: "현재 진행중" },
      { label: "역할", value: "Frontend", sub: "5명 규모 팀(자사 내)" },
    ],
    // 이미지 1~4장
    website: "https://www.lguplus.com",
    images: [
      { src: "/images/project/lg-preview1.png", alt: "LG 유플러스 미리보기 이미지1" },
      { src: "/images/project/lg-preview2.png", alt: "LG 유플러스 미리보기 이미지2" },
    ],
    coverFallback: "LG U+",
    overview:
      "Vue.js 기반의 LG Uplus 통신 서비스 환경에서 공통 컴포넌트와 기존 구조를 유지하며, <strong>서비스 안정성을 최우선</strong>으로 두고 정책 변경 및 UI 개편에 따른 기능 개발과 운영 이슈를 대응했습니다. 홈 가입신청 페이지, 마이페이지 등 사용자 접점이 높은 화면을 중심으로 UI와 비즈니스 로직을 점진적으로 개선했습니다.",

    issueItems: [
      {
        title: "UI 개편(팝업 → Select Box)에 따른 API 응답 구조 변경 대응, 기존 수정·삭제 로직을 재사용 가능하도록 유지하면서 신규 UI 구조로 마이그레이션",
        groups: [
          {
            label: "이슈",
            items: [
              "홈 가입 페이지 전면 개편으로 UI(팝업 → Select Box)와 API 응답 구조가 동시에 변경됨",
              "기존 삭제·수정 로직을 변경할 경우, 관련된 여러 기능에 영향이 커 재사용이 어려운 상황 발생",
            ],
          },
          {
            label: "해결",
            items: [
              "API 응답을 공통 데이터 형태로 한 번 가공하는 레이어를 두고, Select·수정·삭제 컴포넌트가 동일한 구조를 사용하도록 개선",
              "UI가 변경되더라도 데이터 처리 로직을 다시 작성할 필요가 없도록 했고, 기존 수정·삭제 로직은 인터페이스를 유지한 채 참조 데이터만 새 모델 기준으로 교체해 재사용",
            ],
          },
        ],
        website: "https://www.lguplus.com/signup/package?isPhoneDiscount=Y&urcHmProdGrpKwrdProdNo=12"
      },
      {
        title: "가입 플로우 내 2~3개 컴포넌트에 분산된 ValidationObserver 호출 로직을 ref기반 공통 함수로 통합 → 가입 완료 시점의 유효성 검사를 한곳에서 제어, 이후 validation 추가 및 수정시 변경 지점 1곳으로 축소",
        groups: [
          {
            label: "이슈",
            items: [
              "가입 플로우 내 각 컴포넌트에서 Validation 로직이 개별적으로 처리되고 있었고, 인풋 하단 에러 메시지 방식으로 UX가 구성되어 있어 가입 완료 시 전체 유효성 검사를 한 번에 제어하기 어려운 구조.",
              "이로 인해 검증 누락 가능성이 있었고, validation 변경 시 여러 컴포넌트를 함께 수정해야 하는 문제가 있었음.",
            ],
          },
          {
            label: "해결",
            items: [
              "알럿 기반 UX로 변경되면서, ref를 활용해 전체 validation을 한 번에 실행하는 공통 함수를 구성. 이를 통해 가입 완료 시점의 유효성 검사를 단일 진입점에서 제어하도록 개선",
              "이후 validation 정책이나 UX 변경도 해당 함수 한 곳만 수정하면 반영되도록 구조를 단순화",
            ],
          },
        ],
        website: ""
      },
      {
        title: "신규 서비스 출시 전 예외 케이스 사전 발견 및 스펙 재설계 제안",
        groups: [
          {
            label: "구현",
            items: [
             "가입 플로우 전반을 검토하여 기획 단계에서 누락된 예외 케이스 발견",
             "기획서 수정 및 API 스펙 재설계 제안으로 출시 후 오류 사전 차단"
            ],
          },
        ],
        website: "https://www.lguplus.com/mobile/plan/addon/addon-digitalcontent/LRZ1007311?tab=INTRODUCE"
      },
    ],

    etc: [
      // "레거시 코드베이스에서 사이드 이펙트를 최소화하며 기능을 개선하는 실전 감각을 키웠습니다.",
      // "대기업 B2C 서비스 특성상 빠른 정책 변경에 대응하는 코드 리딩 능력이 크게 향상됐습니다.",
      // "공통 컴포넌트를 유지하면서 UI 구조를 점진적으로 개선하는 전략의 중요성을 체감했습니다.",
    ],

    techStack: ["Vue.js", "Nuxt", "JavaScript", "SCSS"],
    roles: [
      "프론트엔드 개발 전담",
      "UI 컴포넌트 재설계",
      "API 연동 및 비즈니스 로직",
    ],
    period: "2025년 5월 — 현재",
  },
  {
    id: "2",
    num: "02 / 04",
    category: "교육 · 신규 구축",
    title: "한양대학교 인터칼리지 - 신규 구축",
    subtitle:
      "React 기반 학업계획 설계 서비스의 프론트엔드를 리딩. 공통 컴포넌트 아키텍처 설계부터 성능 최적화, 외부 인증 연동까지 — 서비스 안정성 및 품질과 개발 생산성 향상에 기여했습니다.",
    tags: [
      { label: "React" },
      { label: "TanStack Query" },
      { label: "Zustand" },
      { label: "Frontend 리딩", outline: true },
      { label: "성능 최적화", outline: true },
    ],
    stats: [
      { label: "프로젝트 기간", value: "2024.09 — 2025.03", sub: "7개월" },
      { label: "역할", value: "Frontend Lead", sub: "팀 리딩" },
    ],
    website: "",
    images: [
      { src: "/images/project/hy-preview2.png", alt: "한양대 인터칼리지 미리보기1" },
      { src: "/images/project/hy-preview1.png", alt: "한양대 인터칼리지 미리보기2" },
    ],
    coverFallback: "HY",

    overview:
      "한양대학교 학생을 대상으로 한 맞춤형 학업계획 설계 서비스의 프론트엔드 개발을 <strong>리딩</strong>했습니다. 서비스 전반의 UI 구조 설계와 공통 컴포넌트·커스텀 훅·템플릿 정의를 주도해 팀 개발 효율성을 높였으며, Jira 기반의 이슈 트래킹과 업무 분담을 통해 일정 관리 및 개발 진행 상황을 조율했습니다.",

    issueItems: [
      {
        title: "사용자 화면 렌더링보다 통계성 API가 먼저 호출되는 구조를 분석, requestIdleCallback 기반 후순위 처리로 전환 → LCP 54% 개선",
        groups: [
          {
            label: "이슈",
            items: [
              "페이지 진입 시 사용자 화면 렌더링에 필요한 API보다 통계성 API가 먼저 호출되는 구조",
              "사용자에게 불필요한 통계 API가 렌더링 리소스를 선점하면서 LCP 지연 발생"
            ],
          },
          {
            label: "해결",
            items: [
              "통계성 API는 사용자가 직접 보는 데이터가 아니므로 렌더링 완료 후 호출해도 무방하다고 판단",
              "requestIdleCallback으로 브라우저 유휴 시점에 후순위 처리하도록 전환 → LCP 54% 개선",
            ],
          },
        ],
      },
      {
        title: "반복되는 UI 컴포넌트를 합성 컴포넌트 패턴으로 추상화하고, 5~6개 페이지에 공통 적용되는 레이아웃을 Slot 패턴으로 구조화 → 중복 컴포넌트 제거 및 레이아웃 확장성 증가",
        groups: [
          {
            label: "이슈",
            items: [
              "버튼 종류(링크, 다운로드 등)마다 별도 컴포넌트로 분리되어 있어 중복 코드가 누적되고, 신규 버튼 추가 시 매번 컴포넌트를 새로 만들어야 하는 구조",
              "5~6개 페이지에 게시판 테이블이 별도 구현되어 있어, UI는 동일한데 기능만 다른 컴포넌트가 반복 생성되는 문제",
              "공통 레이아웃(nav, lnb 등)이 각 페이지에 직접 작성되어 구조 파악이 어려운 상태"
            ],
          },
          {
            label: "해결",
            items: [
              "Button 컴포넌트를 합성 컴포넌트 패턴으로 설계해 <Button.Link>, <Button.Download> 형태로 역할을 명시적으로 분리, 신규 타입 추가 시 기존 컴포넌트 수정 없이 확장 가능하도록 구성",
              "게시판 테이블도 동일하게 합성 컴포넌트로 추상화해 UI는 공유하되 페이지별 기능은 조합으로 주입 가능하도록 설계",
              "공통 레이아웃은 Slot 패턴으로 구조화해 nav, lnb 등 영역을 직관적으로 주입할 수 있도록 개선 → 레이아웃 구조를 코드에서 바로 파악 가능"
            ],
          },
        ],
      },
      {
        title: "외부 라이브러리 전체 import로 인한 빌드 용량 초과 이슈를 Tree Shaking 적용으로 해결 → 빌드 용량 75% 감소",
        groups: [
          {
            label: "이슈",
            items: [
              "외부 라이브러리를 전체 import하는 구조로 인해 빌드 용량이 4GB를 초과",
              "Docker 배포 시 용량 한계로 빌드 에러 발생"
            ],
          },
          {
            label: "해결",
            items: [
              "Webpack config에 usedExports: true 설정으로 실제 사용되는 모듈만 번들에 포함되도록 Tree Shaking 적용",
              "빌드 용량 75% 감소, Docker 배포 정상화",
            ],
          },
        ],
      },
      {
        title: "Client Component 전환 과정에서 모든 상태가 쿠키에 저장되던 구조를 개선, 인증 스토어와 일반 스토어를 분리하여 불필요한 쿠키 전송 제거 → 팀 전체 공유 및 적용",
        groups: [
          {
            label: "이슈",
            items: [
              "초기 SSR 기반 설계로 Zustand persist가 모든 상태를 쿠키에 저장하도록 설정",
              "이후 Client Component로 전환했음에도 기존 구조가 그대로 유지",
              "불필요한 상태까지 쿠키에 누적되어 HTTP 헤더 용량 초과 → 네트워크 전송 속도 저하"
            ],
          },
          {
            label: "해결",
            items: [
              "쿠키 저장이 필요한 인증 상태와 일반 상태를 별도 스토어로 분리",
              "Zustand createStore의 persist storage 설정을 스토어 목적에 맞게 각각 적용 (인증 → 쿠키 / 일반 → 로컬스토리지)",
              "불필요한 쿠키 전송 제거 → 네트워크 최적화",
              "개선 사항 팀 전체 공유 및 적용"
            ],
          },
        ],
      },
    ],

    etc: [
      {
        label: "주요 구현",
        items: [
          "Input, Button 등 공통 컴포넌트 부터 게시판 템플릿 컴포넌트를 계층적으로 설계, 재사용성과 일관성을 고려하여 팀 전체 적용",
          "SSO 통합 로그인 및 PASS 본인인증 연동 구현",
        ],
      },
      {
        label: "팀 리딩 / 협업",
        items: [
          "공통 기능(게시판 필터 등)의 페이지별 동작 불일치를 개발 단계에서 선제 발견하고 기획과 협의하여 기능 동작 표준화",
          "기획 요구사항 불명확으로 인한 개발 이슈 발생 시 기획과 직접 협의하여 요구사항 정리 및 개발 방향 조율",
          "openapi-typescript 팀 도입시 가이드 작성 및 온보딩 주도",
        ],
      },
    ],
    techStack: ["React", "TanStack Query", "Zustand", "Radix UI", "TypeScript"],
    roles: [
      "프론트엔드 개발 리딩",
      "공통 컴포넌트 아키텍처 설계",
      "성능 최적화 (LCP, 빌드 용량, 상태 저장)",
      "Jira 기반 일정 관리 및 이슈 트래킹",
      "SSO / PASS 외부 인증 연동",
    ],
    period: "2024년 9월 — 2025년 3월",
  },
  {
    id: "3",
    num: "03 / 04",
    category: "패션 커머스 플랫폼 · 프로모션",
    title: "커머스 플랫폼 · 프로모션 운영 제작",
    subtitle:
      "W concept 패션 커머스 플랫폼에서 월 평균 10~15건의 프로모션 페이지를 퍼블리싱. 브랜드 무드에 맞는 인터랙션을 구현하고, 모션 템플릿을 개발해 팀 전체 제작 속도를 높였습니다.",
    tags: [
      { label: "HTML/CSS" },
      { label: "JavaScript" },
      { label: "Scroll Animation" },
      { label: "프로모션 퍼블리싱", outline: true },
      { label: "모션 템플릿", outline: true },
    ],
    stats: [
      { label: "프로젝트 기간", value: "2022.02 — 2023.08", sub: "18개월" },
      { label: "역할", value: "Publisher", sub: "퍼블리싱 파트" },
    ],
    website: "",
    images: [
      { src: "/images/project/wc1.gif", alt: "프로모션 예시 1" },
      { src: "/images/project/wc2.gif", alt: "프로모션 예시 2" },
      { src: "/images/project/wc3.gif", alt: "프로모션 예시 3" },
      { src: "/images/project/wc4.gif", alt: "프로모션 예시 4" },
    ],
    coverFallback: "WC",

    overview:
      "패션 커머스 W Concept 비주얼 디자인팀 내 퍼블리싱 파트로 근무하며, <strong>월 평균 10~15건</strong>의 이벤트·프로모션·기획전 페이지 퍼블리싱을 담당했습니다. 디자이너·기획자·개발팀·MD 등 다양한 유관부서와 협업해 브랜드 무드에 맞는 인터랙션과 모션을 구현했으며, 반복 사용 모션 패턴을 템플릿화해 팀 전체 제작 속도를 향상시켰습니다.",

    issueItems: [
      // {
      //   title: "시즌·브랜드 컨셉에 맞춘 프로모션 페이지 퍼블리싱",
      //   groups: [
      //     {
      //       label: "구현",
      //       items: [
      //         "캐주얼, 모던 등 브랜드 무드에 따라 차별화된 인터랙션과 스크롤 애니메이션을 적용",
      //         "배너 및 프로모션 인트로에 목적별 모션 리서치 후 직접 구현 (사용자의 탐색 유도 및 시각적 흥미 유도)",
      //         "APP UI에도 자연스럽게 적용될 수 있도록 모션과 퍼블리싱 코드 개발",
      //       ],
      //     },
      //   ],
      // },
      {
        title: "디자이너 요청 시 즉시 적용 가능한 재사용 모션 구축, 프로모션 제작 속도 개선",
        groups: [
          {
            label: "이슈",
            items: [
              "디자이너마다 개별 모션을 요청하면서 작업 지연 및 품질 일관성 부족 문제 반복",
            ],
          },
          {
            label: "해결",
            items: [
              "자주 쓰이는 모션 패턴을 JS 템플릿으로 정리하고 사용 가이드를 제작",
              "디자이너가 직접 활용할 수 있는 코드 구조를 구축·유지보수",
            ],
          },
        ],
      },
    ],


    techStack: ["HTML", "CSS", "JavaScript", "Scroll Animation"],
    roles: [
      "프로모션·이벤트 페이지 퍼블리싱 (월 평균 10~15건)",
      "브랜드 무드 기반 인터랙션 및 모션 구현",
      "디자이너용 모션 JS 템플릿 개발 및 문서화",
      "APP UI 적용을 위한 모션 코드 최적화",
    ],
    period: "2022년 2월 — 2023년 8월",
  },
  {
    id: "4",
    num: "04 / 04",
    category: "패션 커머스 · 구축",
    title: "대형 커머스 UI 구축 및 인터랙션 제작",
    subtitle:
      "패션 브랜드 전문 웹에이전시에서 3년간 20여 개 사이트를 구축·운영. FILA·골든구스·라이카 등 주요 브랜드의 UI를 담당하며 인터랙션을 구현했습니다",
    tags: [
      { label: "HTML/CSS" },
      { label: "JavaScript" },
      { label: "시맨틱 마크업 / 웹표준 / 웹접근성", outline: true },
      { label: "반응형", outline: true },
      { label: "크로스브라우징", outline: true },
    ],
    stats: [
      { label: "프로젝트 기간", value: "2018 — 2021", sub: "3년" },
      { label: "역할", value: "Publisher", sub: "UI팀" },
    ],
    website: "",
    images: [
      { src: "/images/project/fila.jpg", alt: "FILA" },
      { src: "/images/project/columbia.jpg", alt: "columbia" },
      { src: "/images/project/gg.jpg", alt: "Golden Goose" },
      { src: "/images/project/leica.jpg", alt: "Leica" },
    ],
    coverFallback: "Agency",

    overview:
      "패션 브랜드 전문 웹에이전시에서 3년간 20여 개 사이트를 구축·운영하며, FILA·골든구스·라이카 등 주요 브랜드의 UI 구현과 인터랙션 개발을 담당했습니다. 다양한 프로젝트를 통해 UI 구조와 사용자 경험에 대한 기반을 쌓았습니다.",

    issueItems: [
      {
        title: "FILA 메인페이지 모션 효과 구조 설계",
        // date: "2021.01 — 2021.02",
        contribution: "100%",
        groups: [
          {
            label: "구현",
            items: [
              "Admin에서 모션 스타일을 가변적으로 변경할 수 있도록 슬라이더·배너 HTML 구조 설계",
              "CSS BEM 방식으로 직관적인 animation 클래스를 설계하여 클래스 변경만으로 스타일이 적용되는 구조 구축",
            ],
          },
        ],
      },
      {
        title: "CSS animation 클래스 문서화 및 스타일 전면 개편",
        // date: "2018.04 — 2018.08",
        contribution: "100%",
        groups: [
          {
            label: "구현",
            items: [
              "CSS animation 클래스를 문서화하고 공통 체계를 수립하여 팀 내 재사용성 향상",
            ],
          },
        ],
      },
    ],


    techStack: ["HTML", "CSS", "jQuery", "Scroll Animation"],
    roles: [
      "브랜드 웹사이트 신규 구축 및 리뉴얼",
      "반응형 UI 및 크로스 브라우징 대응",
      "CSS Animation 기반 모션 패턴 설계",
      "프로모션·이벤트 페이지 제작",
    ],
    period: "2018년 — 2021년",
  },
]
