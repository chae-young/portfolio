export const PROJECTS = [
  {
    id: 1,
    title: "LG uplus",
    src: "./images/project/lg.png",
    color: "#D62E88",
    desc: "통신사 웹사이트 운영 프로젝트입니다. 레거시 Vue.js 기반 서비스 환경에서 공통 컴포넌트와 기존 구조를 유지하며, 서비스 안정성을 우선으로 두고 정책변경 및 UI 개편에 따른 기능 개발과 운영 이슈 대응을 수행했습니다. 홈가입 상품 페이지, 마이페이지 등 사용자 접점이 되는 화면을 중심으로 UI와 비즈니스 로직을 점진적으로 개선했으며, 신규 기능 추가 시에도 기존 코드에 미치는 영향을 최소화 하는 방향으로 구현했습니다.",
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
        title: "레거시 Vue.js 기반의 유지보수 및 운영 이슈 대응",
        details: null,
      },
    ],
    detailImg: ["./images/project/lg-home.png"],
    date: "2025.05 ~ 2025.12",
    skill: ["vue.js", "Nuxt"],
  },
  {
    id: 2,
    title: "한양대학교 인터칼리지 구축",
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
    title: "W concept 프로모션 제작",
    src: "./images/project/wc.png",
    desc: "비주얼 디자인팀 내 퍼블리싱 파트로 근무하며, 이벤트·프로모션·기획전 페이지 퍼블리싱을 담당했습니다. 디자이너, 기획자, 개발팀, MD 등 다양한 유관부서와 협업해 요구사항을 정리하고 CSS와 JS를 활용해 프로모션 무드에 맞는 인터랙션과 모션을 구현했습니다. 또한 이벤트와 빅프로모션에 반복적으로 사용되는 모션과 퍼블리싱 코드를 자사 앱 UI에 자연스럽게 적용할수 있도록 개발했으며, 디자이너들이 직접 활용할 수 있는 퍼블리싱 코드 구조를 구축, 유지보수하고 관련 이슈 대응 및 문서화를 진행했습니다.",
    color: "#000",
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
      "./images/project/프리쇼.gif",
      "./images/project/프리쇼오리지날.gif",
      "./images/project/스프링페스타.gif",
      "./images/project/오해피.gif",
    ],
    detailImgHalf: true,
    date: "2022.02 ~ 2023.08",
    skill: ["HTML", "CSS", "Scroll Animation"],
  },
  {
    id: 4,
    title: "커머스 UI 구현",
    src: "./images/project/styleship.png",
    desc: "패션 브랜드 웹사이트를 전문으로 제작하는 웹에이전시에서 UI팀 퍼블리셔로 3년간 근무하며, 다양한 브랜드의 웹사이트 구축과 운영을 담당했습니다. 신규 사이트 구축(퍼블리싱), 리뉴얼, 이벤트 및 프로모션 페이지 제작, 반응형 웹 구현과 유지보수 등 전반적인 퍼블리싱 업무를 수행했으며,주요 패션 브랜드를 포함해 20여 개 이상의 웹사이트를 구축·운영하며 다양한 프로젝트 환경에서 퍼블리싱 역량을 쌓았습니다.",
    color: "#000",
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
