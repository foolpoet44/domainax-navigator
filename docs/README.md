# Domain AX 인증 제도 웹사이트

## 개요

LG전자 Domain AX 인증 제도에 대한 종합 안내 웹사이트입니다. 기존 Domain DX에서 Domain AX로의 전환 계획, 레벨별 요구사항, 교육과정 정보를 제공합니다.

## 주요 기능

### 🏠 홈페이지 (/)
- Domain AX 제도 소개
- 프로그램 요약 및 역량 정의
- 담당자 정보

### 📊 레벨 안내 (/levels)
- AX Starter (Level 1)
- AX Enabler (Level 2) 
- AX CDS (Level 3)
- 레벨별 필수 역량 및 가이드

### 📅 전환 계획 (/transition-plan)
- DX → AX 전환 타임라인
- 단계별 일정 안내
- Upskill 조건표
- 학습 이력 확인 방법

### 📚 과정 목록 (/courses)
- 전체 교육과정 목록
- 검색 및 필터링 기능
- 레벨별 인정 과정 표시
- 수강 시간 정보

## 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router v6
- **State Management**: React Query
- **Icons**: Lucide React

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
├── components/
│   ├── ui/           # shadcn/ui 컴포넌트
│   ├── LevelCard.tsx
│   ├── Timeline.tsx
│   ├── UpskillTable.tsx
│   └── CourseTable.tsx
├── data/
│   └── domain-ax.json  # 메인 데이터
├── lib/
│   ├── types.ts      # TypeScript 타입 정의
│   ├── utils.ts      # 유틸리티 함수
│   └── data-loader.ts # 데이터 로더
├── pages/
│   ├── Index.tsx     # 홈페이지
│   ├── Levels.tsx    # 레벨 안내
│   ├── TransitionPlan.tsx  # 전환 계획
│   ├── Courses.tsx   # 과정 목록
│   └── NotFound.tsx  # 404 페이지
└── App.tsx           # 메인 앱 컴포넌트
```

## 데이터 관리

모든 컨텐츠는 `src/data/domain-ax.json` 파일에서 중앙 관리됩니다:

- 레벨 정보 및 필수 역량
- 전환 계획 및 일정
- 교육과정 목록 및 인정 시간
- 담당자 정보

## 인쇄 기능

- **PDF 저장** 버튼을 통한 인쇄 지원
- 인쇄 전용 CSS 스타일 적용
- 페이지 나눔 최적화

## 접근성

- 키보드 네비게이션 지원
- ARIA 레이블 적용
- 명도 대비 준수
- 의미있는 HTML 구조

## 브라우저 지원

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 배포

Vercel을 통한 자동 배포 설정:

1. Vercel 계정 연결
2. GitHub 레포지토리 연결
3. 빌드 명령: `npm run build`
4. 출력 디렉터리: `dist`

## 문의

**담당자**: 조대근 책임  
**소속**: 생산기술육성파트  
**이메일**: domain-ax@lge.com