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
2. **학사 일정 관리** — 월별 달력, 공휴일·공개수업·방학·기타 등록, 시트 동기화
3. **교구 스케줄러** — 학교별 월간 교구 배치 (1~5주차 슬롯), 48차시 마스터 목록
4. **교구 보관고** — 남은 교구 수량 관리, 보관 사유 기록

---

## 데이터 동기화 (모바일 ↔ PC)
`localStorage`는 기기·브라우저 별로 분리되어 자동 동기화가 안 됨.  
현재 구현된 해결책: **내보내기/불러오기** (헤더의 아이콘 버튼)
- 📤 내보내기: `afterschool_backup_YYYYMMDD.json` 다운로드
- 📥 불러오기: 다른 기기에서 저장한 JSON 파일 선택 → 전체 덮어쓰기

완전 자동 동기화가 필요하면 **Firebase Realtime Database** 연동 가능.  
실제 URL과 동기화 키는 **MY_CONFIG.md** 파일에 저장됨 (gitignore로 GitHub에 올라가지 않음).  
앱에서: ☁️ 버튼 → URL + 키 입력 → 연결하기 (기기당 1회)

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

### 문법 검사 (배포 전 필수)
```
node --check app.js
```
syntax error가 있으면 GitHub Pages에서 앱 전체가 로딩 실패한다.

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

## ⚠️ 치명적 버그 패턴 (반드시 숙지)

### 1. HTML 요소 제거 시 JS null guard 필수
HTML에서 element를 제거하면 JS에서도 반드시 null 체크해야 한다.  
`null.addEventListener()` 는 TypeError → DOMContentLoaded 전체가 멈춤 → 앱 로딩 실패.

```js
// ❌ 위험: HTML에서 해당 element가 없으면 앱 전체 죽음
document.getElementById('btn-xyz').addEventListener('click', handler);

// ✅ 올바른 패턴
const el = document.getElementById('btn-xyz');
if (el) el.addEventListener('click', handler);
```

### 2. let 선언 순서 (TDZ 버그)
`let` 변수는 선언 전에 사용할 수 없다 (Temporal Dead Zone).  
재고가 비어있으면 앱 전체 상태가 리셋되는 버그였음.

```js
// ❌ 버그: mergedAny 사용이 let 선언보다 먼저
if (someCondition) {
  mergedAny = true;  // ReferenceError!
}
let mergedAny = false;

// ✅ 수정: let 선언을 먼저
let mergedAny = false;
if (someCondition) {
  mergedAny = true;
}
```

### 3. 스케줄러 select 변경 이벤트
`addEventListener('change', ...)` 만으로는 불안정할 수 있음.  
HTML에 `onchange` 인라인을 함께 달아야 확실히 동작한다.

```html
<!-- ✅ 올바른 패턴: 인라인 onchange + addEventListener 이중 보장 -->
<select id="sched-month-select" onchange="renderSchedulerSlots()">
```

---

## 학사 일정 데이터 관리

### 이벤트 타입
| 타입 | 색상 | 용도 | 달력 표시 |
|------|------|------|----------|
| `national-holiday` | 날짜 빨간색 | 공휴일·기념일 (school: '') | 날짜숫자 빨간색 + 텍스트 |
| `openclass` | 보라 (#7c3aed) | 학부모 공개수업 | ★ 배지 + 보라 배경 |
| `school-vacation` | 빨간 점 (#dc2626) | 학교 재량휴업·공휴일 휴강 | 빨간 점 + 연빨간 배경 |
| `vacation` | 주황 점 (#d97706) | 방과후 방학 | 주황 점 |
| `other` | 청록 (#0891b2) | 기타 학교 관련 일정 | 텍스트 라벨 (짧게 truncate) |

### 기타(other) 이벤트
- 시트 동기화 시 학교명 포함 비수업 항목 자동 분류
- 달력 셀에 점(dot) 대신 **텍스트 라벨**로 표시 (학교명 접두어 제거, PC 13자/모바일 7자)
- 예: "증산초 하삼동커피" → "하삼동커피" 로 달력에 표시
- CSS 클래스: `.cell-other-label`

### 한국 공휴일 등록 방식
`defaultSchedules` 배열 하단에 `national-holiday` 타입으로 등록.  
`school: ''` (빈 문자열)로 설정해야 전체 달력에 표시됨.  
로드 시 `loadState()`가 자동 병합. 이미 등록된 공휴일:
- 삼일절(3/1), 어린이날(5/5), 부처님오신날(5/25)
- 전국동시지방선거(6/3, 2026년), 현충일(6/6), 6·25 한국전쟁 기념일(6/25)
- 광복절(8/15), 추석(9/25), 개천절(10/3), 한글날(10/9)
- 크리스마스(12/25), 신정(1/1)

### 잘못된 이벤트 차단 패턴 (중요)
Google Sheets 자동 동기화(`syncSchedulesFromSheet`)가 잘못된 데이터를 재추가할 수 있음.  
**반드시 두 곳 모두 수정해야 함:**

1. **`loadState()` 내 `removeByDateSchool` 배열** — 앱 시작 시 localStorage에서 제거  
2. **`syncSchedulesFromSheet()` 내 `syncBlocklist` 배열** — 시트 재동기화 시 차단

```js
// 올바른 패턴: type 불문, date+school 조합으로만 차단
{ date: '2026-XX-XX', school: '학교명' }
// 잘못된 패턴: type까지 포함하면 다른 type으로 들어올 때 차단 안 됨
{ date: '2026-XX-XX', school: '학교명', type: 'openclass' }  // ❌
```

### 공개수업 확정 일정 (2026년)
- 6/15 증산초, 6/18 삼성초, 10/20 신도초 (연서초 미정)

---

## Google Sheets 연동

### 나의 디지털 트윈 시트 (학사일정 동기화 소스)
- **Sheet ID**: `1hEawF0B3Gz7ZYiQbqh4FnKJc5c-FZNMkz5pQWUOBq3w`
- URL: https://docs.google.com/spreadsheets/d/1hEawF0B3Gz7ZYiQbqh4FnKJc5c-FZNMkz5pQWUOBq3w
- 용도: 강사의 일상 활동 기록 → 학교명 포함 항목을 학사일정 달력에 자동 연동
- 범위: 6000~7500행 (3개 범위 분할 fetch)

### 이벤트 분류 로직 (`classifyScheduleEvent`)
```js
'공개수업' → openclass
'방학' or '휴강' → vacation
'재량휴업' or '개교기념' or '공휴일' or '대체공휴일' → school-vacation
학교명(증산초/신도초/삼성초/연서초) 포함 → other (기타)
그 외 → null (달력에 추가 안 함)
```

### 연간 계획서 시트 (교구 참고)
- URL: https://docs.google.com/spreadsheets/d/12MwGFOdlT86ewpOsuNnx2slJZRJGQEEzRuotrestpv8

### 대시보드 인원 현황 시트
- `SHEET_ID` = `1JutjMvwsc9O8Db6kilySSsFGBd5HB-j0xYsJHCk3vAA`
- `DASHBOARD_GID` = `1344548639`

---

## 달력 UI 패턴

### 가로 스크롤 구조
```html
<div class="calendar-card">
  <div class="calendar-scroll-wrapper">  <!-- overflow-x: auto -->
    <div class="calendar-weekdays">...</div>  <!-- min-width: 490px(모바일)/560px(PC) -->
    <div class="calendar-days">...</div>
  </div>
</div>
```
- `.calendar-card`: `min-width: 0` 필수 (grid 팽창 방지)
- 모바일 `min-width: 490px`, PC `min-width: 560px` (CSS specificity로 분기)

### 달력 셀 클릭 동작
PC와 모바일 모두 동일: 클릭 → **상세 팝업** 먼저 표시  
팝업 내 "일정 등록" 버튼으로 등록 모달 진입  
(기존: PC는 바로 등록 모달 → 내용 확인 불가 문제)

```js
cell.addEventListener('click', () => {
  openDayDetailPopup(dateStr, regularSchool); // PC/모바일 공통
});
```

---

## 교구 스케줄러 (2026년 6월 배치 기준)

### 현재 배치 (복원 완료)
| 주차 | 증산초(월)/신도초(화) | 삼성초(목)/연서초(금) |
|------|---------------------|---------------------|
| 1주차 | 11차: 유니콘드론 | 16차: 다빈치와투석기 |
| 2주차 | 16차: 다빈치와투석기 | 13차: 앵무새글라이더(전동) |
| 3주차 | 13차: 앵무새글라이더(전동) | 14차: 잠수함비행기(슈팅) |
| 4주차 | 14차: 잠수함비행기(슈팅) | 16차(연서초) / 휴강(삼성초, 6.25) |
| 5주차 | 미정 | 미정 |

### 스케줄러 월 선택 버그 방지
`renderScheduler()` 진입 시 현재 월을 자동 선택.  
select 요소에 반드시 `onchange="renderSchedulerSlots()"` 인라인 추가.

---

## 알려진 이슈 / TODO
- [ ] Firebase 연동으로 자동 크로스기기 동기화 (선택사항)
- [ ] 연간계획서 Google Sheets와 교구 데이터 연동 검토
- [ ] 브리핑 섹션의 주차 계산: 현재 `Math.ceil(date/7)` 방식 (대략적)
- [ ] 기타(other) 이벤트가 너무 많으면 달력이 복잡해질 수 있음 → 필터 조건 조정 가능
