# 방과후 매니저 — Claude Code 지침서

## 프로젝트 개요
항공·드론 방과후 수업 강사를 위한 **단일 페이지 웹앱**. 
4개 초등학교의 수업 일정, 교구 스케줄, 남은 교구 보관고를 통합 관리한다.

**GitHub**: https://github.com/junghyun871008/afterschool-manager  
**배포**: GitHub Pages (또는 로컬에서 직접 실행)

---

## 기술 스택
- **순수 바닐라 JS / HTML / CSS** — 프레임워크 없음, npm 빌드 없음
- **저장소**: `localStorage` (기기별 독립 저장)
- **외부 의존성**: Google Fonts만 사용 (CDN)
- 파일 3개로 구성: `index.html`, `app.js`, `styles.css`

---

## 학교·요일 매핑
| 학교 | 요일 | 색상 |
|------|------|------|
| 증산초 | 월요일 | 파랑 (#3b82f6) |
| 신도초 | 화요일 | 초록 (#10b981) |
| 삼성초 | 목요일 | 주황 (#f59e0b) |
| 연서초 | 금요일 | 핑크 (#ec4899) |

---

## 수업 구조
- **총 48차시**, 3월~2월 (1년 과정)
- 월 4차시 기준, 매월 1~4주차 배정
- 5주차 슬롯은 보충/조율용
- 기본 교구 데이터: `defaultMasterKits` 배열 (app.js 상단)

---

## 주요 기능
1. **대시보드** — 이번 주 4개 학교 수업 현황 카드, 준비 체크, 메모, 결석 관리
2. **학사 일정 관리** — 월별 달력, 공휴일·공개수업·방학 등록, .ics 파일 가져오기
3. **교구 스케줄러** — 학교별 월간 교구 배치 (1~5주차 슬롯), 48차시 마스터 목록
4. **교구 보관고** — 남은 교구 수량 관리, 보관 사유 기록

---

## 데이터 동기화 (모바일 ↔ PC)
`localStorage`는 기기·브라우저 별로 분리되어 자동 동기화가 안 됨.  
현재 구현된 해결책: **내보내기/불러오기** (헤더의 아이콘 버튼)
- 📤 내보내기: `afterschool_backup_YYYYMMDD.json` 다운로드
- 📥 불러오기: 다른 기기에서 저장한 JSON 파일 선택 → 전체 덮어쓰기

완전 자동 동기화가 필요하면 **Firebase Realtime Database** 연동 가능 (미구현).

---

## 로컬 개발 방법

### 서버 실행 (프리뷰 테스트용)
```
npx serve -l 3000 .
```
또는 브라우저에서 `index.html`을 직접 열어도 대부분 동작함.

### GitHub 반영
```bat
push.bat    ← 변경사항 자동 커밋 + 푸시
pull.bat    ← 최신 버전 가져오기
```

---

## 코드 작업 시 주의사항

### 날짜 처리
- **절대로** `new Date(YYYY, M, D)` 하드코딩 금지 → 항상 `new Date()` 사용
- `currentMonth`는 **0-indexed** (JavaScript Date 기준)
- 달력 표시: `currentMonth + 1`로 출력

### 상태(State) 관리
- `state` 전역 객체가 유일한 데이터 소스
- 변경 시 반드시 `saveState()` 호출
- 로드 시 `loadState()`가 localStorage에서 복원하며 defaultSchedules와 병합

### 렌더링 패턴
```js
saveState() → renderDashboard() + renderCalendar() + renderInventory()
```
수정 후 관련 render 함수를 모두 호출해야 UI가 반영됨.

### CSS 반응형 브레이크포인트
- `>768px`: PC 레이아웃 (사이드바 고정, margin-left: 280px)
- `≤768px`: 모바일 (사이드바 숨김, 하단 네비게이션 표시)
- `≤1024px`: 태블릿 (2열 → 1열 전환)

### 모달 패턴
```js
modalEl.classList.add('active')    // 열기
modalEl.classList.remove('active') // 닫기
```

---

## 알려진 이슈 / TODO
- [ ] Firebase 연동으로 자동 크로스기기 동기화 (선택사항)
- [ ] 연간계획서 Google Sheets와 교구 데이터 연동 검토
- [ ] 브리핑 섹션의 주차 계산: 현재 `Math.ceil(date/7)` 방식 (대략적)

---

## 연간 계획서 참고
Google Sheets: https://docs.google.com/spreadsheets/d/12MwGFOdlT86ewpOsuNnx2slJZRJGQEEzRuotrestpv8/edit?gid=1063684995#gid=1063684995
