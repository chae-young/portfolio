# LeeChaeng Portfolio

Next.js 14, TypeScript, styled-components로 구축된 포트폴리오 웹사이트입니다.

## 📚 목차

- [기술 스택](#기술-스택)
- [마이그레이션 계획](#마이그레이션-계획)
- [사이드 이펙트 분석](#사이드-이펙트-분석)
- [개발 환경 설정](#개발-환경-설정)
- [빌드 및 배포](#빌드-및-배포)
- [프로젝트 구조](#프로젝트-구조)

---

## 🛠 기술 스택

### ~~현재~~ 이전 (v1.0.0)

- **Framework**: Next.js 12.3.4 (Pages Router)
- **Language**: JavaScript
- **Styling**: styled-components 6.1.8
- **Animations**: Framer Motion 11.0.28
- **React**: 18.2.0

### 목표 (v2.0.0)

- **Framework**: Next.js 15.1.0 (Pages Router)
- **Language**: TypeScript 5.3
- **Styling**: styled-components 6.1.8
- **Animations**: Framer Motion 11.0.28
- **React**: 18.3.1

---

## 🚀 마이그레이션 계획

### 개요

Next.js 12 → 15로의 메이저 업그레이드와 JavaScript → TypeScript 전환을 수행합니다.

**전략**: 점진적 업그레이드 (12 → 13 → 14 → 15)
**기간**: 약 24-31시간 예상

~~### Phase 1: TypeScript 기초 작업~~

**목표**: Next.js 업그레이드 전 TypeScript 인프라 구축

#### 작업 내용

1. **TypeScript 설치**

   ```bash
   npm install --save-dev typescript @types/react@18.3 @types/react-dom@18.3 @types/node
   ```

2. **설정 파일 생성**

   - `tsconfig.json` - TypeScript 설정
   - `types/index.ts` - 핵심 인터페이스 정의
   - `types/styled.d.ts` - styled-components 테마 타입

3. **주요 타입 정의**
   - Project 인터페이스 (data/index.js - 153줄)
   - Theme 인터페이스 (styles/theme.js)
   - API 응답 타입 (RSSResponse)
   - 컴포넌트 Props 타입

~~### Phase 2: Next.js 13 마이그레이션~~

**목표**: 주요 호환성 깨짐 해결

#### 중요 변경사항

1. **package.json 업데이트**

   ```json
   {
     "dependencies": {
       "next": "^13.5.6",
       "react": "^18.3.1",
       "react-dom": "^18.3.1"
     }
   }
   ```

2. **next.config.js 수정** ⚠️ 필수

   ```javascript
   module.exports = {
     reactStrictMode: true,
     output: "export", // 'next export' 대체
     images: {
       unoptimized: true, // 'akamai' 로더 대체
     },
     compiler: {
       styledComponents: true, // Babel 대체
     },
     trailingSlash: true,
   }
   ```

3. **제거할 패키지**

   - `next-compose-plugins` (더 이상 불필요)
   - `next-images` (Next.js 내장 지원)
   - `prop-types` (TypeScript로 대체)
   - `.babelrc` 파일 삭제 (SWC 사용)

4. **스크립트 업데이트**
   ```json
   {
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "type-check": "tsc --noEmit",
       "lint": "next lint"
     }
   }
   ```

~~### Phase 3: TypeScript 전환~~

**목표**: 모든 JavaScript 파일을 TypeScript로 전환

#### 전환 순서

**우선순위 1: 설정 및 데이터**

1. `styles/theme.js` → `theme.ts`
2. `data/index.js` → `index.ts` (153줄, 복잡한 구조)
3. `styles/GlobalStyle.js` → `GlobalStyle.ts`

**우선순위 2: Hooks** 4. `hooks/useWidth.js` → `useWidth.ts` ⚠️ 무한 루프 버그 수정

**우선순위 3: Pages** 5. `pages/_app.js` → `_app.tsx` 6. `pages/_document.js` → `_document.tsx` ⚠️ SSR 유지 필수 7. `pages/index.js` → `index.tsx` 8. `pages/about.js` → `about.tsx` 9. `pages/projects/[id].js` → `[id].tsx`

**우선순위 4: 컴포넌트** 10. 20개 컴포넌트 전체 전환

#### 주요 개선사항

**1. useWidth Hook 버그 수정**

```typescript
// ❌ 이전: 무한 루프 발생
useEffect(() => {
  handleResize()
  window.addEventListener("resize", handleResize)
  return () => window.removeEventListener("resize", handleResize)
}, [width]) // 버그!

// ✅ 수정 후
useEffect(() => {
  handleResize()
  window.addEventListener("resize", handleResize)
  return () => window.removeEventListener("resize", handleResize)
}, []) // 빈 배열
```

**2. Styled-components Transient Props**

```typescript
// ❌ 이전: DOM 경고 발생
<Title ftSize={20} mFtSize={6}>

// ✅ 수정 후
<Title $ftSize={20} $mFtSize={6}>

const Title = styled.h2<{ $ftSize: number; $mFtSize: number }>`
  font-size: ${props => props.$ftSize}rem;
`
```

**3. Framer Motion 타입 지정**

```typescript
import { Variants } from "framer-motion"

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
```

~~### Phase 4: Next.js 14 마이그레이션~~

```json
{
  "dependencies": {
    "next": "^14.2.20"
  }
}
```

- Image 컴포넌트 props 업데이트 (`layout="fill"` → `fill`)

### Phase 5: Next.js 15 마이그레이션

```json
{
  "dependencies": {
    "next": "^15.1.0"
  }
}
```

- `next.config.js` → `next.config.ts` 변환

### Phase 6: 최종 검증

```bash
npm run type-check  # 0개 에러
npm run lint        # 치명적 에러 없음
npm run build       # 정적 export 성공
```

---

## ⚠️ 사이드 이펙트 분석

### 치명적 영향 (HIGH)

| 이슈                      | 설명                                            | 해결 방안                              |
| ------------------------- | ----------------------------------------------- | -------------------------------------- |
| **이미지 로더 제거**      | `loader: "akamai"` 옵션이 Next.js 15에서 제거됨 | `unoptimized: true`로 변경             |
| **정적 export 변경**      | `next export` 명령어 deprecated                 | `output: 'export'` 설정으로 변경       |
| **Styled-components SSR** | SSR 설정이 잘못되면 FOUC 발생                   | `compiler.styledComponents: true` 유지 |

### 중간 영향 (MEDIUM)

| 이슈                     | 설명                             | 해결 방안                |
| ------------------------ | -------------------------------- | ------------------------ |
| **React 버전 불일치**    | react 18.2.0 vs react-dom 18.0.0 | 둘 다 18.3.1로 동기화    |
| **useWidth 무한 루프**   | dependency 배열 오류             | 배열에서 `width` 제거    |
| **복잡한 데이터 타이핑** | 153줄 PROJECTS 배열              | 인터페이스 신중하게 정의 |

### 낮은 영향 (LOW)

- PropTypes 제거 (TypeScript로 대체)
- Babel → SWC 전환 (성능 향상)
- ESLint 버전 업그레이드
- Polyfill.io 스크립트 제거

### 호환성 깨짐 요약

**Next.js 12 → 13**

- ❌ `next export` → ✅ `output: 'export'`
- ❌ Akamai 로더 → ✅ `unoptimized: true`
- ❌ Babel → ✅ SWC
- ❌ next-images → ✅ 내장 지원

**Next.js 13 → 14**

- ❌ `layout="fill"` → ✅ `fill` prop

**Next.js 14 → 15**

- 사소한 설정 변경만 (Pages Router 유지)

### 성능 개선 예상

| 항목        | 이전    | 이후             | 개선율 |
| ----------- | ------- | ---------------- | ------ |
| 빌드 시간   | 30-45초 | 15-25초          | ~40%   |
| 타입 안정성 | 없음    | 컴파일 타임 체크 | -      |
| IDE 지원    | 제한적  | 완전한 자동완성  | -      |

### 리스크 평가

- **중간 리스크**: Styled-components SSR 설정 (적절한 설정으로 완화)
- **낮은 리스크**: TypeScript 전환 (`allowJs: true`로 점진적 전환)
- **낮은 리스크**: 버전 점프 (단계별 테스트로 안정성 확보)

---

## 💻 개발 환경 설정

### 사전 요구사항

- Node.js 18.18.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 사용 가능한 스크립트

```bash
npm run dev         # 개발 서버 실행
npm run build       # 프로덕션 빌드 (정적 export 포함)
npm run start       # 프로덕션 서버 실행
npm run lint        # ESLint 실행
npm run type-check  # TypeScript 타입 체크 (마이그레이션 후)
```

---

## 🏗 빌드 및 배포

### 빌드

```bash
npm run build
```

출력 디렉토리: `/out`

### 로컬 테스트

```bash
npx serve out
```

### 배포

정적 사이트로 export되므로 다음 플랫폼에 배포 가능:

- **Vercel**: GitHub 레포지토리 연결 (자동 배포)
- **Netlify**: `/out` 폴더 업로드 또는 레포 연결
- **GitHub Pages**: `/out` 내용 업로드
- **AWS S3**: S3 버킷에 `/out` 동기화

**빌드 설정**:

- 빌드 명령어: `npm run build`
- 출력 디렉토리: `out`
- Node.js 버전: 18.x 이상

---

## 📁 프로젝트 구조

```
portfolio/
├── components/          # React 컴포넌트
│   ├── Layout.js
│   ├── Header.js
│   ├── Footer.js
│   ├── Intro/
│   ├── Profile.js
│   ├── Career/
│   ├── ProjectSection/
│   ├── Projects/
│   ├── BlogPost/
│   ├── Contact/
│   └── ...
├── data/               # 정적 데이터
│   └── index.js        # 프로젝트 데이터 (153줄)
├── hooks/              # 커스텀 React Hooks
│   └── useWidth.js
├── pages/              # Next.js Pages Router
│   ├── _app.js         # App 컴포넌트
│   ├── _document.js    # Document (SSR)
│   ├── index.js        # 홈페이지
│   ├── about.js        # About 페이지
│   └── projects/
│       └── [id].js     # 프로젝트 상세 페이지
├── public/             # 정적 파일
│   ├── favicon.ico
│   └── images/
├── styles/             # 전역 스타일
│   ├── GlobalStyle.js
│   └── theme.js        # 테마 설정
├── .babelrc           # Babel 설정
├── .eslintrc          # ESLint 설정
├── .gitignore
├── next.config.js     # Next.js 설정
├── package.json
└── README.md
```

### 마이그레이션 후 구조

```
portfolio/
├── components/          # TypeScript 컴포넌트
├── data/
│   └── index.ts        # 타입 정의된 데이터
├── hooks/
│   └── useWidth.ts     # 타입 정의된 Hook
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── about.tsx
│   └── projects/
│       └── [id].tsx
├── styles/
│   ├── GlobalStyle.ts
│   └── theme.ts
├── types/              # TypeScript 타입 정의
│   ├── index.ts        # 핵심 인터페이스
│   └── styled.d.ts     # styled-components 테마
├── .eslintrc
├── .gitignore
├── next.config.ts      # TypeScript 설정
├── tsconfig.json       # TypeScript 설정
└── package.json
```

---

## 📊 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **애니메이션**: Framer Motion 기반 스크롤 애니메이션
- **프로젝트 쇼케이스**: 동적 라우팅으로 프로젝트 상세 페이지
- **블로그 RSS**: Tistory 블로그 최신 글 자동 가져오기
- **정적 사이트**: 빠른 로딩과 SEO 최적화

---

## 🔧 기술 세부사항

### Styled-components SSR

서버 사이드 렌더링을 위한 설정이 `pages/_document.js`에 구현되어 있습니다.

```javascript
static async getInitialProps(ctx) {
  const sheet = new ServerStyleSheet()
  // ... SSR 설정
}
```

마이그레이션 시 이 설정을 반드시 유지해야 FOUC(Flash of Unstyled Content)를 방지할 수 있습니다.

### 테마 시스템

`styles/theme.js`에 정의된 테마:

- **Colors**: 색상 팔레트
- **Fonts**: 폰트 설정
- **Device**: 반응형 브레이크포인트

```javascript
const theme = {
  colors: { black, white, gray, green_1, purple },
  fonts: { subEng },
  deviceSizes: { mobileS, tablet, desktop, maxSize },
  device: { mobileL, tabletL, desktop, ... }
}
```

---

## ✅ 마이그레이션 성공 기준

1. ✅ TypeScript 컴파일 0 에러
2. ✅ ESLint 통과
3. ✅ 빌드 성공 (정적 export)
4. ✅ 모든 페이지 정상 렌더링
5. ✅ Styled-components SSR 작동 (FOUC 없음)
6. ✅ Framer Motion 애니메이션 작동
7. ✅ 블로그 RSS 가져오기 작동
8. ✅ 반응형 디자인 유지
9. ✅ 콘솔 에러 없음
10. ✅ Lighthouse 성능 점수 90 이상

---

## 🐛 알려진 이슈

### 현재 버전 (v1.0.0)

1. **useWidth Hook 무한 루프**: dependency 배열 오류 (마이그레이션 시 수정 예정)
2. **React 버전 불일치**: react 18.2.0 vs react-dom 18.0.0 (마이그레이션 시 수정)
3. **PropTypes 사용**: TypeScript로 전환 시 제거 예정

### 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- ❌ IE11 지원 안 함

---

## 📝 라이선스

ISC

---

## 👤 Author

**Lee Chaeyoung**

- Blog: [chaeyoung2.tistory.com](https://chaeyoung2.tistory.com)
- Portfolio: [현재 사이트]

---

## 📅 버전 히스토리

~~- **v1.0.0** (현재): Next.js 12 + JavaScript~~
- **v2.0.0** (예정): Next.js 15 + TypeScript (24-31시간 예상)

---

## 🔗 참고 자료

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Next.js 12 to 13 Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-13)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [styled-components Documentation](https://styled-components.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
