// ==========================================================================
// Afterschool Manager - Application Logic (Step 3 Completed)
// ==========================================================================

// --- Default 48-Session Master Kit Database ---
const defaultMasterKits = [
  // 3월
  { session: 1, name: '에어스타즈 2', topic: '우주기상이 항공기에 미치는 영향', content: '우주기상이 항공기에 미치는 영향 알아보기' },
  { session: 2, name: '에어로켓', topic: '로켓의 종류', content: '로켓의 종류를 알아보자' },
  { session: 3, name: '3D 블레리오', topic: '비행의 꿈을 꾸다', content: '비행과 관련된 위대한 인물들 알아보기' },
  { session: 4, name: 'T50', topic: '전투기 계기판', content: '전투기 계기판 TOP5 알아보기 (속도계, 고도계, 방향지시계, 연료계, 엔진계기)' },
  // 4월
  { session: 5, name: '관성 비행기', topic: '관성이란?', content: '관성을 이용하는 다양한 기구들을 알아보자' },
  { session: 6, name: '에어워즈 A-wing', topic: '우주에서 살아남기 : 우주복', content: '우주에서 살아남는 방법을 알아보자' },
  { session: 7, name: '리턴스카이 6', topic: '대기권이란?', content: '항공기가 다니는 대기권에 대해 알아보자' },
  { session: 8, name: '복복이', topic: '항공기의 날개 개수', content: '날개 개수에 따른 항공기의 분류' },
  // 5월
  { session: 9, name: '유니콘 드론', topic: '드론조종안전교육', content: '드론 조종 안전 교육에 대해 알아보자' },
  { session: 10, name: '유니콘 드론', topic: '드론 안전 수칙', content: '드론 안전 수칙에 대해 알아보자' },
  { session: 11, name: '유니콘 드론', topic: '드론의 구조와 원리', content: '드론의 구조와 원리를 알아보자' },
  { session: 12, name: '유니콘 드론', topic: '유니콘 드론 조종법', content: '유니콘 드론 조종법을 알아보자' },
  // 6월
  { session: 13, name: '앵무새글라이더(전동)', topic: '새의 구조', content: '새의 구조와 역할을 알아보자' },
  { session: 14, name: '잠수함비행기(슈팅)', topic: '잠수함의 원리와 구조', content: '잠수함의 원리와 구조 알아보기' },
  { session: 15, name: '스카이볼트(슈팅)', topic: '제임스 망원경과 새로운 발견', content: '우주의 첫 빛을 만난 제임스웹 우주망원경의 새로운 발견들 알아보기' },
  { session: 16, name: '다빈치와 투석기', topic: '투석기3', content: '다빈치와 투석기에 대해 알아보자' },
  // 7월
  { session: 17, name: 'RC 비행기', topic: '무선통신의 원리', content: '조종기와 비행기가 어떻게 보이지 않는 선에 연결되어 있을까?' },
  { session: 18, name: 'RC 비행기', topic: '항공관제와 무선 통신', content: '관제사와 조종사가 주고받는 특수한 언어 배워보기' },
  { session: 19, name: 'RC 비행기', topic: '배터리 안전 관리', content: 'RC 비행기의 심장, 배터리의 위험성과 올바른 충전 및 관리방법' },
  { session: 20, name: 'RC 비행기', topic: 'RC 비행기 조종법', content: 'RC 비행기 조종법을 직접 실습하며 익히기' },
  // 8월
  { session: 21, name: 'AI 센서 탐사차', topic: '자율주행 센서', content: '자율주행차의 센서들을 알아보기' },
  { session: 22, name: 'AI 센서 탐사차', topic: '우리주변의 자율주행', content: '자율주행이 사용되는 우리주변의 물건들 알아보기' },
  { session: 23, name: '양뚜아네트', topic: '항공기의 발달', content: '초창기 항공발달 역사(랭스비행대회)를 알아보자' },
  { session: 24, name: 'F-117 나이트호크', topic: '스텔스 전투기', content: '스텔스 전투기에 대해 알아보자' },
  // 9월
  { session: 25, name: 'KF-16 슈팅', topic: '항공기 레이더 시스템', content: '항공기 레이더 시스템과 항공통신에 대해 알아보기' },
  { session: 26, name: '홀로그램', topic: '홀로그램 우주탐험', content: '홀로그램으로 할 수 있는 다양한 일들을 알아보기' },
  { session: 27, name: '앵무새 글라이더', topic: '새의 특징', content: '새와 관련된 특징들을 입체적으로 알아보기' },
  { session: 28, name: '블랙위도우', topic: '항공기의 속도경쟁', content: '항공기의 속도 변천사에 대해 알아보기' },
  // 10월
  { session: 29, name: '캐릭터 가면 비행기', topic: '우주 영화 속 비행체', content: '우주 관련 영화에 등장하는 다양한 비행물체들 알아보기' },
  { session: 30, name: '전동비행기', topic: '항공기의 복합재료', content: '항공기는 어떤 특수한 재료로 만들어질까?' },
  { session: 31, name: '석궁', topic: '탄성의 원리', content: '탄성의 원리와 역사 속 석궁 발사의 원리 알아보기' },
  { session: 32, name: '공기력실험장치', topic: '공기대포의 원리', content: '눈에 보이지 않는 공기 압력을 어떻게 이용하는지 알아보기' },
  // 11월
  { session: 33, name: '조립드론', topic: '드론의 구조와 원리', content: '드론의 구조와 하드웨어 원리에 대해 알아보기' },
  { session: 34, name: '조립드론', topic: '드론의 다양한 활용', content: '산업 현장과 실생활에서 드론을 활용하는 방법 알아보기' },
  { session: 35, name: '조립드론', topic: '재난 구조용 드론', content: '재난 상황 및 인명 구조용 특수 드론에 대해 알아보기' },
  { session: 36, name: '조립드론', topic: '무인항공기의 역사', content: '무인항공기의 태동과 역사적 흐름 알아보기' },
  // 12월
  { session: 37, name: 'B-29 글라이더(전동X)', topic: '항공기의 빅 윙', content: '거대한 날개를 가진 폭격기와 비행기들 알아보기' },
  { session: 38, name: '로봇 라디오', topic: '라디오의 원리와 활용', content: '라디오 전파의 기본 송수신 원리를 알아보기' },
  { session: 39, name: '로봇 라디오', topic: '다양한 무선 통신 기술', content: '현대 생활 속 무선 주파수 및 통신 기술 알아보기' },
  { session: 40, name: '델타포스써클', topic: '공기의 성질 알아보기', content: '비행기를 띄우는 양력과 공기의 성질 알아보기' },
  // 1월
  { session: 41, name: 'AI 탐사 로버', topic: '감각과 로봇의 센서', content: '사람의 감각기관과 로봇의 센서는 어떻게 다른가?' },
  { session: 42, name: 'AI 탐사 로버', topic: '소리와 AI 센서', content: '소리의 발생 원리와 음향 AI 센서의 역할 알아보기' },
  { session: 43, name: 'AI 탐사 로버', topic: '기초 미션 수행', content: '장애물 회피 및 코딩 교구 활용 기초 미션 수행' },
  { session: 44, name: 'AI 탐사 로버', topic: '응용 미션 수행', content: '로버를 제어하여 복합 응용 과제를 해결하는 미션 수행' },
  // 2월
  { session: 45, name: '미로찾기 구슬', topic: '수평과 균형 조종', content: '조종사가 비행기의 수평과 균형을 유지하는 물리적 원리 학습' },
  { session: 46, name: '스핏파이어', topic: '비행혁신의 역사', content: '세계대전 속 활약한 전투기와 항공 혁신 시대 알아보기' },
  { session: 47, name: '플라이어호', topic: '최초의 동력비행', content: '라이트 형제와 최초의 유인 동력비행 성공 역사 알아보기' },
  { session: 48, name: '슈퍼히어로', topic: '우주의 멋진 사진들', content: '망원경을 통해 본 우주의 신비로운 성운과 은하 사진 탐색' }
];

// --- App State ---
let state = {
  // Master kit database
  masterKits: [],
  // Dashboard school states (Prepared & Override info)
  schools: {
    '증산초': { lesson: null, kit: '', memo: '', prepared: false, absentTodos: [], prepTodos: [] },
    '신도초': { lesson: null, kit: '', memo: '', prepared: false, absentTodos: [], prepTodos: [] },
    '삼성초': { lesson: null, kit: '', memo: '', prepared: false, absentTodos: [], prepTodos: [] },
    '연서초': { lesson: null, kit: '', memo: '', prepared: false, absentTodos: [], prepTodos: [] }
  },
  // Academic schedules
  schedules: [],
  // Inventory (leftover kits) - Empty by default
  inventory: [],
  // Customized school sequence: schoolMonthlyPlans[school][yearMonth] = [session, session, ...] (index = week - 1)
  schoolMonthlyPlans: {}
};

// --- Initial Academic Schedules ---
const defaultSchedules = [
  // 삼일절 대체공휴일 (월)
  { id: 'sc-h1', date: '2026-03-02', school: '증산초', type: 'school-vacation', memo: '삼일절 대체공휴일 휴강' },
  // 어린이날 징검다리 휴강 (월) 및 어린이날 당일 (화)
  { id: 'sc-h2', date: '2026-05-04', school: '증산초', type: 'school-vacation', memo: '어린이날 대체휴강 / 재량휴업일' },
  { id: 'sc-h3', date: '2026-05-05', school: '신도초', type: 'school-vacation', memo: '어린이날 공휴일 휴강' },
  // 석가탄신일 대체공휴일 (월)
  { id: 'sc-h4', date: '2026-05-25', school: '증산초', type: 'school-vacation', memo: '석가탄신일 대체공휴일 휴강' },
  // 광복절 대체공휴일 (월)
  { id: 'sc-h5', date: '2026-08-17', school: '증산초', type: 'school-vacation', memo: '광복절 대체공휴일 휴강' },
  // 추석 연휴 (목, 금) 및 대체공휴일 (월)
  { id: 'sc-h6', date: '2026-09-24', school: '삼성초', type: 'school-vacation', memo: '추석 연휴 휴강' },
  { id: 'sc-h7', date: '2026-09-25', school: '연서초', type: 'school-vacation', memo: '추석 공휴일 휴강' },
  { id: 'sc-h8', date: '2026-09-28', school: '증산초', type: 'school-vacation', memo: '추석 대체공휴일 휴강' },
  // 개천절 대체공휴일 (월)
  { id: 'sc-h9', date: '2026-10-05', school: '증산초', type: 'school-vacation', memo: '개천절 대체공휴일 휴강' },
  // 한글날 (금)
  { id: 'sc-h10', date: '2026-10-09', school: '연서초', type: 'school-vacation', memo: '한글날 공휴일 휴강' },
  // 성탄절 (금)
  { id: 'sc-h11', date: '2026-12-25', school: '연서초', type: 'school-vacation', memo: '성탄절 공휴일 휴강' },
  // 신정 (금)
  { id: 'sc-h12', date: '2027-01-01', school: '연서초', type: 'school-vacation', memo: '신정 공휴일 휴강' },
  // 설 연휴 (월) 및 대체공휴일 (화)
  { id: 'sc-h13', date: '2027-02-08', school: '증산초', type: 'school-vacation', memo: '설날 연휴 휴강' },
  { id: 'sc-h14', date: '2027-02-09', school: '신도초', type: 'school-vacation', memo: '설날 대체공휴일 휴강' },

  // 기존 기본 학사 일정
  { id: 'sc-1', date: '2026-06-08', school: '증산초', type: 'school-vacation', memo: '증산초 재량휴업일 휴강' },
  { id: 'sc-2', date: '2026-06-16', school: '신도초', type: 'openclass', memo: '학부모 공개 수업 (15:00~)' },
  { id: 'sc-3', date: '2026-06-25', school: '삼성초', type: 'school-vacation', memo: '삼성초 개교기념일 휴강' }
];

// --- Global Variables ---
let currentYear = 2026;
let currentMonth = 5; // 0-indexed (5 = June, anchor date is May 31, 2026)
const dayOfWeekMap = { 0: '일요일', 1: '월요일', 2: '화요일', 3: '수요일', 4: '목요일', 5: '금요일', 6: '토요일' };
const schoolDayOfWeek = { '월': '증산초', '화': '신도초', '목': '삼성초', '금': '연서초' };
const weekDaysKorean = ['일', '월', '화', '수', '목', '금', '토'];

// --- Init Application ---
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initCalendarDate();
  setupNavigation();
  setupDashboardEventListeners();
  setupCalendarEventListeners();
  setupInventoryEventListeners();
  setupSchedulerEventListeners();
  
  // Hook the clear inventory button directly
  const clearInvBtn = document.getElementById('btn-clear-inventory');
  if (clearInvBtn) {
    clearInvBtn.addEventListener('click', () => {
      if (confirm('보관고에 있는 모든 교구 정보를 비우시겠습니까?')) {
        state.inventory = [];
        saveState();
        renderInventory();
        renderDashboard();
      }
    });
  }

  // Render views
  updateDateTimeDisplay();
  renderDashboard();
  renderCalendar();
  renderInventory();
  renderScheduler();
});

// --- State Management ---
function loadState() {
  const stored = localStorage.getItem('afterschool_manager_state');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      state.masterKits = parsed.masterKits && parsed.masterKits.length > 0 ? parsed.masterKits : [...defaultMasterKits];
      state.schools = parsed.schools || state.schools;
      state.schedules = parsed.schedules || [];
      state.inventory = parsed.inventory || []; // Start empty or load saved inventory
      state.schoolMonthlyPlans = parsed.schoolMonthlyPlans || {};

      // Wiped due to '드론' keyword cleanup filter bug recovery
      if (!state.inventory || state.inventory.length === 0) {
        state.inventory = [
          {
            id: 'inv-auto-recovery-' + Date.now(),
            name: '12차시 교구 - 유니콘 드론',
            school: '증산초',
            quantity: 1,
            reason: '5월 대체공휴일(5/4, 5/25) 휴강으로 인한 진도 지연 교구 이월 보관',
            memo: '대시보드 수업 취소 이체 건 (복구됨)',
            dateAdded: '2026-05-25'
          }
        ];
        mergedAny = true;
      }

      // Merge new public holiday schedules (sc-h prefixed) into existing user schedule state without duplicate dates for same school
      let mergedAny = false;
      defaultSchedules.forEach(defaultEv => {
        const exists = state.schedules.some(s => s.date === defaultEv.date && s.school === defaultEv.school);
        if (!exists) {
          state.schedules.push(defaultEv);
          mergedAny = true;
        }
      });

      // Correct old type for 6/8 event if present
      const oldZsEvent = state.schedules.find(s => s.date === '2026-06-08' && s.school === '증산초');
      if (oldZsEvent && oldZsEvent.type === 'vacation') {
        oldZsEvent.type = 'school-vacation';
        oldZsEvent.memo = '증산초 재량휴업일 휴강';
        mergedAny = true;
      }

      // 보정: 2026년 5월 연서초의 5주차(5/29) 수업에 다른 학교와 동일한 12차시(유니콘 드론) 교구 배정
      if (!state.schoolMonthlyPlans['연서초']) {
        state.schoolMonthlyPlans['연서초'] = {};
      }
      if (!state.schoolMonthlyPlans['연서초']['2026-05']) {
        state.schoolMonthlyPlans['연서초']['2026-05'] = [9, 10, 11, 12, 12];
        mergedAny = true;
      } else if (state.schoolMonthlyPlans['연서초']['2026-05'][4] === 0 || !state.schoolMonthlyPlans['연서초']['2026-05'][4]) {
        state.schoolMonthlyPlans['연서초']['2026-05'][4] = 12;
        mergedAny = true;
      }

      // To-Do 필드가 누락되어 있다면 안전 초기화
      for (const school of ['증산초', '신도초', '삼성초', '연서초']) {
        if (!state.schools[school].absentTodos) state.schools[school].absentTodos = [];
        if (!state.schools[school].prepTodos) state.schools[school].prepTodos = [];
      }

      if (mergedAny) {
        saveState();
      }
    } catch (e) {
      console.error('Failed to parse local storage state, resetting to defaults', e);
      resetToDefaults();
    }
  } else {
    resetToDefaults();
  }
}

function resetToDefaults() {
  state.masterKits = [...defaultMasterKits];
  state.schedules = [...defaultSchedules];
  state.inventory = []; // Empty inventory by default
  state.schoolMonthlyPlans = {};
  saveState();
}

function saveState() {
  localStorage.setItem('afterschool_manager_state', JSON.stringify(state));
}

// --- Initialize Calendar View Date ---
function initCalendarDate() {
  const today = new Date(2026, 4, 31); // May 31, 2026
  currentYear = today.getFullYear();
  currentMonth = today.getMonth() + 1; // June 2026
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
}

// --- Navigation / Tab Controller ---
function setupNavigation() {
  const menuItems = document.querySelectorAll('.menu-item');
  const panels = document.querySelectorAll('.tab-panel');

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = item.getAttribute('data-tab');

      menuItems.forEach(mi => {
        if (mi.getAttribute('data-tab') === targetTab) {
          mi.classList.add('active');
        } else {
          mi.classList.remove('active');
        }
      });

      panels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `tab-${targetTab}-content`) {
          panel.classList.add('active');
        }
      });

      if (targetTab === 'calendar') {
        renderCalendar();
      } else if (targetTab === 'inventory') {
        renderInventory();
      } else if (targetTab === 'dashboard') {
        renderDashboard();
      } else if (targetTab === 'scheduler') {
        renderScheduler();
      }
    });
  });
}

// --- Helper: Date & Week Calculations ---
function updateDateTimeDisplay() {
  const today = new Date(2026, 4, 31); // May 31, 2026
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const dayName = dayOfWeekMap[today.getDay()];

  const dateStr = `${year}년 ${month}월 ${date}일 ${dayName}`;
  document.getElementById('current-date-display').textContent = dateStr;

  const todaySchoolName = document.getElementById('today-school-name');
  const todaySchoolDetail = document.getElementById('today-school-detail');
  
  const currentDay = today.getDay(); // Sunday (0)
  
  if (currentDay === 1) {
    todaySchoolName.textContent = '증산초등학교';
    todaySchoolDetail.textContent = '월요일 출강일 (교구 준비 완료 확인)';
  } else if (currentDay === 2) {
    todaySchoolName.textContent = '신도초등학교';
    todaySchoolDetail.textContent = '화요일 출강일 (교구 준비 완료 확인)';
  } else if (currentDay === 4) {
    todaySchoolName.textContent = '삼성초등학교';
    todaySchoolDetail.textContent = '목요일 출강일 (교구 준비 완료 확인)';
  } else if (currentDay === 5) {
    todaySchoolName.textContent = '연서초등학교';
    todaySchoolDetail.textContent = '금요일 출강일 (교구 준비 완료 확인)';
  } else if (currentDay === 3) {
    todaySchoolName.textContent = '공식 출강 없음';
    todaySchoolDetail.textContent = '수업 계획 및 교구 연구의 날';
  } else {
    todaySchoolName.textContent = '즐거운 주말';
    todaySchoolDetail.textContent = '새로운 주간 교구 배치를 조율하세요!';
  }
}

// Get the Monday-Sunday date range of the current week (based on May 31, 2026)
function getCurrentWeekDateRange() {
  const today = new Date(2026, 4, 31); // Anchor date: 2026-05-31 (Sunday)
  const day = today.getDay();
  
  let baseDate = new Date(today);
  
  // If it's Saturday (6) or Sunday (0), show the upcoming week (Monday to Sunday)
  if (day === 0) {
    baseDate.setDate(today.getDate() + 1); // Sunday -> tomorrow Monday
  } else if (day === 6) {
    baseDate.setDate(today.getDate() + 2); // Saturday -> Monday in 2 days
  } else {
    // If weekday, show current week starting Monday
    const mondayOffset = 1 - day;
    baseDate.setDate(today.getDate() + mondayOffset);
  }
  
  const monday = new Date(baseDate);
  const weekDates = {};
  const schoolDays = { '증산초': 0, '신도초': 1, '삼성초': 3, '연서초': 4 };
  
  for (const [school, offset] of Object.entries(schoolDays)) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + offset);
    
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    weekDates[school] = `${yyyy}-${mm}-${dd}`;
  }
  
  return weekDates;
}

// Find all calendar class dates for a school in a month
function getMonthClassDates(school, yearMonthStr) {
  const [yyyy, mm] = yearMonthStr.split('-').map(Number);
  const targetDay = school === '증산초' ? 1 : (school === '신도초' ? 2 : (school === '삼성초' ? 4 : 5));
  
  const dates = [];
  const totalDays = new Date(yyyy, mm, 0).getDate(); // Total days in month mm
  for (let d = 1; d <= totalDays; d++) {
    const cellDate = new Date(yyyy, mm - 1, d);
    if (cellDate.getDay() === targetDay) {
      const dateString = `${yyyy}-${String(mm).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      dates.push(dateString);
    }
  }
  return dates;
}

// Retrieve standard plan for a month (Default sequences: March => 1..4, June => 13..16)
function getStandardMonthlyPlan(yearMonthStr) {
  const month = parseInt(yearMonthStr.split('-')[1]);
  let idx = month - 3;
  if (idx < 0) idx += 12;
  const startSession = idx * 4 + 1;
  // Pre-configured 5 weeks
  return [startSession, startSession + 1, startSession + 2, startSession + 3, 0];
}

// Map session index to its standard month/week
function getStandardMonthAndWeekForSession(session) {
  if (session === 0) return '없음';
  const idx = session - 1;
  const mIdx = Math.floor(idx / 4);
  let m = mIdx + 3;
  if (m > 12) m -= 12;
  const w = (idx % 4) + 1;
  return `${m}월 ${w}주차`;
}

// Retrieve custom/calculated kit for a school date
function getScheduledKitForDate(school, dateStr) {
  const dateObj = new Date(dateStr);
  const yearMonth = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
  
  if (!state.schoolMonthlyPlans[school]) {
    state.schoolMonthlyPlans[school] = {};
  }
  if (!state.schoolMonthlyPlans[school][yearMonth]) {
    state.schoolMonthlyPlans[school][yearMonth] = getStandardMonthlyPlan(yearMonth);
  }
  
  const classDates = getMonthClassDates(school, yearMonth);
  const idx = classDates.indexOf(dateStr);
  
  if (idx !== -1 && idx < 5) {
    const sessionNum = state.schoolMonthlyPlans[school][yearMonth][idx];
    if (sessionNum && sessionNum > 0) {
      return state.masterKits.find(k => k.session === sessionNum) || null;
    }
  }
  return null;
}

function renderDashboard() {
  const weekDates = getCurrentWeekDateRange();
  
  let totalActiveClasses = 0;
  let preparedClasses = 0;
  
  const timetables = {
    '증산초': '⏰ 1부 1:10~2:40 / 2부 2:50~4:20',
    '신도초': '⏰ 1부 2:00~2:50 / 2부 3:00~3:50',
    '삼성초': '⏰ 1부 2:00~2:40 / 2부 2:50~3:30 / 3부 3:40~4:20',
    '연서초': '⏰ 1부 1:40~2:20 / 2부 2:30~3:10 / 3부 3:20~4:00'
  };

  const daysKorean = {
    '증산초': '월',
    '신도초': '화',
    '삼성초': '목',
    '연서초': '금'
  };

  for (const school of ['증산초', '신도초', '삼성초', '연서초']) {
    const schoolDateStr = weekDates[school];
    const schoolEvent = state.schedules.find(e => e.date === schoolDateStr && e.school === school);
    const cardEl = document.querySelector(`.school-card[data-school="${school}"]`);
    
    if (!cardEl) continue;
    
    cardEl.classList.remove('status-vacation', 'status-openclass', 'disabled-card');
    
    // Date label & Timetable badge binding
    const dateLabel = document.getElementById(`school-date-${school}`);
    if (dateLabel) {
      const d = new Date(schoolDateStr);
      dateLabel.textContent = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${daysKorean[school]})`;
    }
    
    const timetableEl = document.getElementById(`timetable-${school}`);
    if (timetableEl) {
      timetableEl.textContent = timetables[school];
    }

    // Read-only planned kit display elements
    const sessionBadge = document.getElementById(`planned-session-badge-${school}`);
    const kitNameEl = document.getElementById(`planned-kit-name-${school}`);
    const kitDescEl = document.getElementById(`planned-kit-desc-${school}`);
    const memoInput = document.getElementById(`memo-input-${school}`);
    const prepCheckbox = document.getElementById(`prep-checkbox-${school}`);
    
    // Fetch automatically scheduled kit for this week's class date from Custom Scheduler
    const scheduledKit = getScheduledKitForDate(school, schoolDateStr);
    
    if (scheduledKit) {
      state.schools[school].lesson = scheduledKit.session;
      state.schools[school].kit = `${scheduledKit.session}차시: ${scheduledKit.name} (${scheduledKit.topic})`;
      
      if (sessionBadge) sessionBadge.textContent = `${scheduledKit.session}차시`;
      if (kitNameEl) kitNameEl.textContent = scheduledKit.name;
      if (kitDescEl) kitDescEl.textContent = `${scheduledKit.topic} - ${scheduledKit.content}`;
    } else {
      state.schools[school].lesson = 0;
      state.schools[school].kit = '수업 예정 없음 / 휴강';
      
      if (sessionBadge) sessionBadge.textContent = '휴강';
      if (kitNameEl) kitNameEl.textContent = '수업 예정 없음';
      if (kitDescEl) kitDescEl.textContent = '스케줄러 또는 학사 일정을 확인해 주세요.';
    }
    
    memoInput.value = state.schools[school].memo || '';
    prepCheckbox.checked = state.schools[school].prepared;
    
    memoInput.disabled = false;
    prepCheckbox.disabled = false;
    
    const headerEl = cardEl.querySelector('.school-card-header');
    const existingBadge = headerEl.querySelector('.event-header-badge');
    if (existingBadge) existingBadge.remove();

    if (schoolEvent) {
      if (schoolEvent.type === 'vacation' || schoolEvent.type === 'school-vacation') {
        cardEl.classList.add('status-vacation', 'disabled-card');
        
        memoInput.disabled = true;
        prepCheckbox.disabled = true;
        prepCheckbox.checked = false;
        
        if (sessionBadge) sessionBadge.textContent = '휴강';
        if (kitNameEl) kitNameEl.textContent = '수업 없음';
        if (kitDescEl) kitDescEl.textContent = schoolEvent.type === 'vacation' ? '방과후 방학 기간입니다.' : '학교 방학 기간입니다.';
        
        const badge = document.createElement('span');
        badge.className = 'event-header-badge item-badge-vacation';
        badge.style.alignSelf = 'flex-start';
        badge.style.marginTop = '0.25rem';
        badge.textContent = schoolEvent.type === 'vacation' ? '방과후 휴강' : '학교 휴강';
        headerEl.appendChild(badge);
        
        memoInput.value = `[휴강일] ${schoolEvent.memo}`;
      } else if (schoolEvent.type === 'openclass') {
        cardEl.classList.add('status-openclass');
        
        const badge = document.createElement('span');
        badge.className = 'event-header-badge item-badge-openclass';
        badge.style.alignSelf = 'flex-start';
        badge.style.marginTop = '0.25rem';
        badge.textContent = '★ 학부모 공개수업 ★';
        headerEl.appendChild(badge);
        
        if (!memoInput.value.includes('공개수업')) {
          memoInput.value = `[공개수업 주간!] ${memoInput.value}`;
        }
        
        totalActiveClasses++;
        if (state.schools[school].prepared) preparedClasses++;
      }
    } else {
      if (state.schools[school].lesson > 0) {
        totalActiveClasses++;
        if (state.schools[school].prepared) preparedClasses++;
      }
    }

    // Render segment To-Do lists
    renderSchoolTodos(school);
  }

  // Stats widgets
  document.getElementById('weekly-classes-count').textContent = `${totalActiveClasses}개 학교`;
  
  const totalLeftovers = state.inventory.reduce((sum, item) => sum + parseInt(item.quantity), 0);
  document.getElementById('inventory-alert-count').textContent = `${totalLeftovers}개 보관 중`;
  
  const progressPercent = totalActiveClasses > 0 ? Math.round((preparedClasses / totalActiveClasses) * 100) : 100;
  document.getElementById('weekly-prep-percentage').textContent = `${progressPercent}%`;
  document.getElementById('weekly-prep-bar').style.width = `${progressPercent}%`;

  // Update assistant briefing
  generateWeeklyBriefing();
}

// Helper to render segmented checklists on the dashboard cards
function renderSchoolTodos(school) {
  const absentList = document.getElementById(`absent-list-${school}`);
  const prepList = document.getElementById(`prep-list-${school}`);
  
  if (absentList) {
    absentList.innerHTML = '';
    const todos = state.schools[school].absentTodos || [];
    if (todos.length === 0) {
      absentList.innerHTML = `<li style="font-size: 0.75rem; color: var(--text-muted); padding: 0.2rem 0.5rem; text-align: center;">등록된 결석 학생 없음</li>`;
    } else {
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
          <input type="checkbox" class="todo-checkbox-el absent-todo-chk" data-school="${school}" data-id="${todo.id}" ${todo.completed ? 'checked' : ''}>
          <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
          <button class="btn-todo-delete absent-todo-del" data-school="${school}" data-id="${todo.id}" title="삭제">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        `;
        absentList.appendChild(li);
      });
    }
  }
  
  if (prepList) {
    prepList.innerHTML = '';
    const todos = state.schools[school].prepTodos || [];
    if (todos.length === 0) {
      prepList.innerHTML = `<li style="font-size: 0.75rem; color: var(--text-muted); padding: 0.2rem 0.5rem; text-align: center;">등록된 준비물 없음</li>`;
    } else {
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
          <input type="checkbox" class="todo-checkbox-el prep-todo-chk" data-school="${school}" data-id="${todo.id}" ${todo.completed ? 'checked' : ''}>
          <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
          <button class="btn-todo-delete prep-todo-del" data-school="${school}" data-id="${todo.id}" title="삭제">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        `;
        prepList.appendChild(li);
      });
    }
  }
}

function setupDashboardEventListeners() {
  // Input event triggers
  document.querySelectorAll('.memo-input').forEach(textarea => {
    textarea.addEventListener('input', () => {
      const card = textarea.closest('.school-card');
      const school = card.getAttribute('data-school');
      state.schools[school].memo = textarea.value;
      saveState();
      generateWeeklyBriefing();
    });
  });

  document.querySelectorAll('.prep-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const card = cb.closest('.school-card');
      const school = card.getAttribute('data-school');
      state.schools[school].prepared = cb.checked;
      saveState();
      updatePrepProgress();
      generateWeeklyBriefing();
    });
  });

  // To-Do Checklist adding buttons
  document.querySelectorAll('.btn-todo-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const school = btn.getAttribute('data-school');
      const type = btn.getAttribute('data-type'); // 'absent' or 'prep'
      const inputEl = document.getElementById(`${type}-input-${school}`);
      const text = inputEl.value.trim();
      
      if (!text) return;
      
      const newTodo = {
        id: Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        text: text,
        completed: false
      };
      
      if (type === 'absent') {
        state.schools[school].absentTodos.push(newTodo);
      } else {
        state.schools[school].prepTodos.push(newTodo);
      }
      
      inputEl.value = '';
      saveState();
      renderSchoolTodos(school);
      generateWeeklyBriefing();
    });
  });

  // Enter key support for todo input fields
  document.querySelectorAll('.todo-input-field').forEach(input => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const card = input.closest('.school-card');
        const school = card.getAttribute('data-school');
        const type = input.id.startsWith('absent') ? 'absent' : 'prep';
        const addBtn = card.querySelector(`.btn-todo-add[data-type="${type}"]`);
        if (addBtn) addBtn.click();
      }
    });
  });

  // Checklist delegated handlers (toggling completed, deleting)
  const schoolContainer = document.querySelector('.school-grid');
  if (schoolContainer) {
    // Checkbox toggles
    schoolContainer.addEventListener('change', (e) => {
      if (e.target.classList.contains('todo-checkbox-el')) {
        const school = e.target.getAttribute('data-school');
        const id = e.target.getAttribute('data-id');
        const isAbsent = e.target.classList.contains('absent-todo-chk');
        
        const list = isAbsent ? state.schools[school].absentTodos : state.schools[school].prepTodos;
        const todo = list.find(t => t.id === id);
        if (todo) {
          todo.completed = e.target.checked;
          saveState();
          renderSchoolTodos(school);
          generateWeeklyBriefing();
        }
      }
    });

    // Delete buttons
    schoolContainer.addEventListener('click', (e) => {
      const delBtn = e.target.closest('.btn-todo-delete');
      if (delBtn) {
        const school = delBtn.getAttribute('data-school');
        const id = delBtn.getAttribute('data-id');
        const isAbsent = delBtn.classList.contains('absent-todo-del');
        
        if (isAbsent) {
          state.schools[school].absentTodos = state.schools[school].absentTodos.filter(t => t.id !== id);
        } else {
          state.schools[school].prepTodos = state.schools[school].prepTodos.filter(t => t.id !== id);
        }
        saveState();
        renderSchoolTodos(school);
        generateWeeklyBriefing();
      }
    });
  }

  // Archive leftover kit button logic
  document.querySelectorAll('.btn-archive-kit').forEach(btn => {
    btn.addEventListener('click', () => {
      const school = btn.getAttribute('data-school');
      const weekDates = getCurrentWeekDateRange();
      const schoolDateStr = weekDates[school];
      const scheduledKit = getScheduledKitForDate(school, schoolDateStr);
      
      if (!scheduledKit) {
        alert('이체할 활성화된 수업 교구가 없습니다.');
        return;
      }

      const currentKitName = `${scheduledKit.session}차시: ${scheduledKit.name}`;
      const lessonNum = scheduledKit.session;

      const qty = prompt(`[${school}] ${currentKitName}\n이체하여 창고에 보관할 교구 수량을 입력하세요:`, '1');
      if (qty === null) return;

      const quantity = parseInt(qty);
      if (isNaN(quantity) || quantity <= 0) {
        alert('올바른 수량을 입력해 주세요.');
        return;
      }

      const reason = prompt('보관 사유를 작성해 주세요:', '공휴일/임시 휴강으로 인한 수업 밀림 잔여분');
      if (reason === null) return;

      const newItem = {
        id: 'inv-auto-' + Date.now(),
        name: `${lessonNum}차시 교구 - ${scheduledKit.name}`,
        school: school,
        quantity: quantity,
        reason: reason,
        memo: '대시보드 수업 취소 이체 건',
        dateAdded: schoolDateStr
      };

      state.inventory.push(newItem);
      saveState();
      
      alert(`[보관 완료] '${newItem.name}'이 교구 보관고에 ${quantity}개 추가되었습니다.`);
      
      renderInventory();
      renderDashboard();
    });
  });
}

// --- AI 주간 브리핑 비서 요약 엔진 ---
function generateWeeklyBriefing() {
  const weekDates = getCurrentWeekDateRange();
  
  let briefingHTML = ``;
  briefingHTML += `<h4>📅 이번 주 출강 정보 브리핑</h4>`;
  briefingHTML += `<p><strong>2026년 6월 1주차</strong> 수업 및 교구 준비 가이드입니다.</p>`;
  
  let alertEvents = [];
  let kitList = [];
  
  const schoolDays = [
    { school: '증산초', day: '월요일', date: weekDates['증산초'] },
    { school: '신도초', day: '화요일', date: weekDates['신도초'] },
    { school: '삼성초', day: '목요일', date: weekDates['삼성초'] },
    { school: '연서초', day: '금요일', date: weekDates['연서초'] }
  ];
  
  schoolDays.forEach(({ school, day, date }) => {
    const scheduledKit = getScheduledKitForDate(school, date);
    const event = state.schedules.find(e => e.date === date && e.school === school);
    
    // Segment checklist items parsing
    const pendingAbsents = (state.schools[school].absentTodos || []).filter(t => !t.completed);
    const pendingPreps = (state.schools[school].prepTodos || []).filter(t => !t.completed);
    
    let extraNotes = [];
    if (pendingAbsents.length > 0) {
      extraNotes.push(`👤 결석생 교구(${pendingAbsents.length}건): ${pendingAbsents.map(t => t.text).join(', ')}`);
    }
    if (pendingPreps.length > 0) {
      extraNotes.push(`🔧 준비물(${pendingPreps.length}건): ${pendingPreps.map(t => t.text).join(', ')}`);
    }
    let extraStr = extraNotes.length > 0 ? ` <br><span style="font-size:0.75rem; color:#a5b4fc; padding-left:1.1rem; display:inline-block; margin-top:2px;">↳ ${extraNotes.join(' / ')}</span>` : '';
    
    if (event) {
      if (event.type === 'vacation' || event.type === 'school-vacation') {
        let typeText = event.type === 'vacation' ? '방과후 휴강' : '학교 재량 휴업일 휴강';
        alertEvents.push(`⚠️ <strong>${day} (${school})</strong>: ${event.memo || typeText}으로 인해 <strong>휴강</strong>됩니다. 교구를 챙기실 필요가 없습니다.`);
      } else if (event.type === 'openclass') {
        alertEvents.push(`✨ <strong>${day} (${school})</strong>: <strong>학부모 공개수업</strong>이 예정되어 있습니다. 수업 계획안과 배포 자료를 최종 점검하세요!`);
        if (scheduledKit) {
          kitList.push(`📦 <strong>${school} (${day})</strong>: ${scheduledKit.session}차시 - <strong>${scheduledKit.name}</strong> (${scheduledKit.topic})${extraStr}`);
        }
      }
    } else {
      if (scheduledKit) {
        let prepText = state.schools[school].prepared ? '✅ 준비완료' : '⬜ 미완료';
        kitList.push(`📦 <strong>${school} (${day})</strong>: ${scheduledKit.session}차시 - <strong>${scheduledKit.name}</strong> [${prepText}]${extraStr}`);
      } else {
        kitList.push(`⚪ <strong>${school} (${day})</strong>: 스케줄러에 수업 교구가 배정되지 않았습니다. (휴강 또는 미지정)${extraStr}`);
      }
    }
  });
  
  if (alertEvents.length > 0) {
    briefingHTML += `<h4>🚨 학사 특이사항</h4><ul>`;
    alertEvents.forEach(evt => {
      briefingHTML += `<li>${evt}</li>`;
    });
    briefingHTML += `</ul>`;
  }
  
  briefingHTML += `<h4>🛠️ 요일별 챙겨야 할 교구</h4><ul>`;
  kitList.forEach(kit => {
    briefingHTML += `<li>${kit}</li>`;
  });
  briefingHTML += `</ul>`;
  
  // Inventory status
  const totalLeftovers = state.inventory.reduce((sum, item) => sum + parseInt(item.quantity), 0);
  briefingHTML += `<h4>📦 창고 보관고 현황</h4>`;
  if (totalLeftovers > 0) {
    briefingHTML += `<p>현재 보관고에 <strong>총 ${totalLeftovers}개</strong>의 남은 교구가 보관되어 있습니다. 진도 지연 보충 시 적극 활용하세요.</p>`;
  } else {
    briefingHTML += `<p>보관고가 깨끗이 비어있습니다. 정상 진도로 진행 중입니다.</p>`;
  }
  
  const contentArea = document.getElementById('briefing-content-area');
  if (contentArea) {
    contentArea.innerHTML = briefingHTML;
  }
  
  const timestampEl = document.getElementById('briefing-timestamp');
  if (timestampEl) {
    timestampEl.textContent = `마지막 분석: 2026년 5월 31일 02:06`;
  }
}

function updatePrepProgress() {
  const weekDates = getCurrentWeekDateRange();
  let totalActiveClasses = 0;
  let preparedClasses = 0;

  for (const school of ['증산초', '신도초', '삼성초', '연서초']) {
    const schoolDateStr = weekDates[school];
    const schoolEvent = state.schedules.find(e => e.date === schoolDateStr && e.school === school);
    
    if (schoolEvent && (schoolEvent.type === 'vacation' || schoolEvent.type === 'school-vacation')) {
      continue;
    }
    totalActiveClasses++;
    if (state.schools[school].prepared) {
      preparedClasses++;
    }
  }

  const progressPercent = totalActiveClasses > 0 ? Math.round((preparedClasses / totalActiveClasses) * 100) : 100;
  document.getElementById('weekly-prep-percentage').textContent = `${progressPercent}%`;
  document.getElementById('weekly-prep-bar').style.width = `${progressPercent}%`;
}



// --- Academic Calendar Engine ---
function renderCalendar() {
  const calendarTitle = document.getElementById('calendar-title');
  const daysGrid = document.getElementById('calendar-days-grid');
  
  calendarTitle.textContent = `${currentYear}년 ${currentMonth + 1}월`;
  daysGrid.innerHTML = '';

  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevMonthTotalDays = new Date(currentYear, currentMonth, 0).getDate();
  
  const today = new Date(2026, 4, 31);

  // Prev month offset
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const dayNum = prevMonthTotalDays - i;
    const cell = createCalendarCell(dayNum, true);
    daysGrid.appendChild(cell);
  }

  // Current month days
  for (let d = 1; d <= totalDays; d++) {
    const cell = createCalendarCell(d, false);
    if (currentYear === today.getFullYear() && currentMonth === today.getMonth() && d === today.getDate()) {
      cell.classList.add('today');
    }
    daysGrid.appendChild(cell);
  }

  // Next month offset
  const renderedCount = firstDayIndex + totalDays;
  const nextMonthDaysNeeded = 42 - renderedCount;
  for (let d = 1; d <= nextMonthDaysNeeded; d++) {
    const cell = createCalendarCell(d, true);
    daysGrid.appendChild(cell);
  }

  renderScheduleList();
}

function createCalendarCell(dayNum, isOtherMonth) {
  const cell = document.createElement('div');
  cell.className = 'day-cell';
  
  const numSpan = document.createElement('span');
  numSpan.className = 'day-number';
  numSpan.textContent = dayNum;
  cell.appendChild(numSpan);

  if (isOtherMonth) {
    cell.classList.add('other-month');
    return cell;
  }

  const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
  cell.setAttribute('data-date', dateStr);

  const cellDate = new Date(currentYear, currentMonth, dayNum);
  const weekday = cellDate.getDay();
  
  let regularSchool = '';
  if (weekday === 1) regularSchool = '증산초';
  else if (weekday === 2) regularSchool = '신도초';
  else if (weekday === 4) regularSchool = '삼성초';
  else if (weekday === 5) regularSchool = '연서초';

  if (regularSchool) {
    const schoolLabel = document.createElement('span');
    schoolLabel.className = 'cell-school-label';
    schoolLabel.style.fontSize = '1.2rem';
    schoolLabel.style.fontWeight = '800';
    schoolLabel.style.marginTop = '2px';
    schoolLabel.style.color = weekday === 1 ? '#3b82f6' : (weekday === 2 ? '#10b981' : (weekday === 4 ? '#f59e0b' : '#ec4899'));
    schoolLabel.textContent = regularSchool;
    cell.appendChild(schoolLabel);

    // Load custom scheduled kit badge for this day
    const scheduledKit = getScheduledKitForDate(regularSchool, dateStr);
    if (scheduledKit) {
      const kitBadge = document.createElement('div');
      kitBadge.className = 'cell-kit-badge';
      kitBadge.style.fontSize = '1.15rem';
      kitBadge.style.background = 'rgba(124, 58, 237, 0.12)';
      kitBadge.style.border = '1px solid rgba(124, 58, 237, 0.2)';
      kitBadge.style.color = '#c084fc';
      kitBadge.style.borderRadius = '4px';
      kitBadge.style.padding = '4px 6px';
      kitBadge.style.marginTop = '4px';
      kitBadge.style.maxWidth = '100%';
      kitBadge.style.overflow = 'hidden';
      kitBadge.style.textOverflow = 'ellipsis';
      kitBadge.style.whiteSpace = 'normal';
      kitBadge.style.wordBreak = 'break-all';
      kitBadge.style.lineHeight = '1.3';
      kitBadge.textContent = `${scheduledKit.session}차: ${scheduledKit.name}`;
      kitBadge.title = `${scheduledKit.session}차시: ${scheduledKit.name} (${scheduledKit.topic})`;
      cell.appendChild(kitBadge);
    }
  }

  // Lookup schedules
  const events = state.schedules.filter(ev => ev.date === dateStr);
  if (events.length > 0) {
    const dotContainer = document.createElement('div');
    dotContainer.className = 'day-events-dots';
    
    events.forEach(ev => {
      const dot = document.createElement('span');
      dot.className = `event-dot-indicator`;
      if (ev.type === 'vacation') dot.style.backgroundColor = 'var(--color-vacation)';
      else if (ev.type === 'school-vacation') dot.style.backgroundColor = 'var(--color-school-vacation)';
      else if (ev.type === 'openclass') dot.style.backgroundColor = 'var(--color-openclass)';
      dotContainer.appendChild(dot);
      
      cell.title = (cell.title ? cell.title + ', ' : '') + `[${ev.school}] ${ev.memo}`;
    });
    
    cell.appendChild(dotContainer);
  }

  cell.addEventListener('click', () => {
    openScheduleModal(dateStr, regularSchool);
  });

  return cell;
}

function renderScheduleList() {
  const listEl = document.getElementById('schedule-list');
  listEl.innerHTML = '';
  
  // Calculate the 3-month range strings (currentMonth + 2 months ahead)
  const monthsToCheck = [];
  for (let i = 0; i < 3; i++) {
    let m = (currentMonth - 1) + i; // Convert 1-indexed to 0-indexed for calculation
    let y = currentYear;
    if (m > 11) {
      m = m - 12;
      y = y + 1;
    } else if (m < 0) {
      m = m + 12;
      y = y - 1;
    }
    monthsToCheck.push(`${y}-${String(m + 1).padStart(2, '0')}`);
  }
  
  const rangeEvents = state.schedules.filter(ev => {
    const evPrefix = ev.date.substring(0, 7);
    return monthsToCheck.includes(evPrefix);
  });
  
  if (rangeEvents.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <p>선택 월 기준 3개월 이내 등록된 학사 일정이 없습니다.</p>
      </div>
    `;
    return;
  }

  // Sort chronologically
  rangeEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  rangeEvents.forEach(ev => {
    const item = document.createElement('div');
    item.className = `schedule-list-item type-${ev.type}`;
    
    let typeName = '방과후 방학';
    let badgeClass = 'item-badge-vacation';
    if (ev.type === 'school-vacation') {
      typeName = '학교 방학';
      badgeClass = 'item-badge-school-vacation';
    } else if (ev.type === 'openclass') {
      typeName = '공개수업';
      badgeClass = 'item-badge-openclass';
    }

    const d = new Date(ev.date);
    const dateFormatted = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${weekDaysKorean[d.getDay()]})`;

    item.innerHTML = `
      <div class="item-school-day">
        <span class="item-school-name">${ev.school}등학교</span>
        <span class="item-badge ${badgeClass}">${typeName}</span>
      </div>
      <div class="item-date">${dateFormatted}</div>
      <div class="item-memo">${ev.memo || '설명 없음'}</div>
      <div class="item-actions">
        <button class="btn-item-delete" data-id="${ev.id}">일정 삭제</button>
      </div>
    `;

    item.querySelector('.btn-item-delete').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteSchedule(ev.id);
    });

    listEl.appendChild(item);
  });
}

function deleteSchedule(id) {
  state.schedules = state.schedules.filter(ev => ev.id !== id);
  saveState();
  renderCalendar();
  renderDashboard();
}

function setupCalendarEventListeners() {
  const scheduleModal = document.getElementById('schedule-modal');
  
  document.getElementById('btn-prev-month').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });

  document.getElementById('btn-next-month').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });

  document.getElementById('btn-add-schedule-trigger').addEventListener('click', () => {
    const today = new Date(2026, 4, 31);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    openScheduleModal(`${yyyy}-${mm}-${dd}`, '증산초');
  });

  document.getElementById('btn-close-schedule-modal').addEventListener('click', () => {
    scheduleModal.classList.remove('active');
  });
  
  document.getElementById('btn-cancel-schedule-modal').addEventListener('click', () => {
    scheduleModal.classList.remove('active');
  });

  document.getElementById('schedule-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const date = document.getElementById('schedule-date').value;
    const school = document.getElementById('schedule-school').value;
    const type = document.querySelector('input[name="schedule-type"]:checked').value;
    const memo = document.getElementById('schedule-memo').value;
    
    const newEvent = {
      id: 'sc-' + Date.now(),
      date,
      school,
      type,
      memo
    };

    if (type === 'vacation' || type === 'school-vacation') {
      const targetKit = getScheduledKitForDate(school, date);
      if (targetKit && confirm(`[휴강 등록 감지]\n휴강일(${date})에 예정되었던 교구 '${targetKit.session}차시: ${targetKit.name}'가 남게 됩니다. 교구 보관고로 즉시 이체하여 보관할까요?`)) {
        const newItem = {
          id: 'inv-auto-cal-' + Date.now(),
          name: `${targetKit.session}차시 교구 - ${targetKit.name}`,
          school: school,
          quantity: 1,
          reason: `학사 일정(${memo})으로 인한 자동 보관`,
          memo: '학사일정 휴강 보관 연동 건',
          dateAdded: date
        };
        state.inventory.push(newItem);
        renderInventory();
      }
    }

    state.schedules.push(newEvent);
    saveState();
    scheduleModal.classList.remove('active');
    
    renderCalendar();
    renderDashboard();
  });

  // Google Calendar .ics Importer Logic
  document.getElementById('ics-file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      const icsText = evt.target.result;
      const unfolded = icsText.replace(/\r?\n\s/g, '');
      const lines = unfolded.split(/\r?\n/);
      
      let events = [];
      let currentEvent = null;
      
      for (let line of lines) {
        if (line.startsWith('BEGIN:VEVENT')) {
          currentEvent = {};
        } else if (line.startsWith('END:VEVENT')) {
          if (currentEvent && currentEvent.date) {
            events.push(currentEvent);
          }
          currentEvent = null;
        } else if (currentEvent) {
          if (line.startsWith('DTSTART')) {
            const valMatch = line.match(/(?:VALUE=DATE:)?(\d{8})/);
            if (valMatch) {
              const dateStr = valMatch[1];
              currentEvent.date = `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`;
            }
          } else if (line.startsWith('SUMMARY:')) {
            currentEvent.summary = line.substring(8).trim();
          } else if (line.startsWith('DESCRIPTION:')) {
            currentEvent.description = line.substring(12).trim();
          }
        }
      }

      if (events.length === 0) {
        alert('가져올 수 있는 구글 학사 일정이 없습니다. (.ics 파일 형식 확인)');
        return;
      }

      let importedCount = 0;
      events.forEach(ev => {
        let matchedSchool = '';
        for (const school of ['증산초', '신도초', '삼성초', '연서초']) {
          if (ev.summary.includes(school)) {
            matchedSchool = school;
            break;
          }
        }

        if (matchedSchool) {
          let type = 'vacation';
          const summaryLower = ev.summary.toLowerCase();
          if (summaryLower.includes('공개수업') || summaryLower.includes('공개')) {
            type = 'openclass';
          } else if (summaryLower.includes('학교') || summaryLower.includes('재량') || summaryLower.includes('개교') || summaryLower.includes('단기') || summaryLower.includes('휴업')) {
            type = 'school-vacation';
          } else if (summaryLower.includes('방학') || summaryLower.includes('휴강') || summaryLower.includes('방과후')) {
            type = 'vacation';
          }

          const newEvent = {
            id: 'sc-ics-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
            date: ev.date,
            school: matchedSchool,
            type: type,
            memo: ev.summary + (ev.description ? ' - ' + ev.description : '')
          };

          const exists = state.schedules.some(s => s.date === newEvent.date && s.school === newEvent.school && s.type === newEvent.type);
          if (!exists) {
            state.schedules.push(newEvent);
            importedCount++;
          }
        }
      });

      alert(`구글 캘린더 가져오기 완료: 총 ${importedCount}개의 학사 일정이 새로 추가되었습니다.`);
      saveState();
      renderCalendar();
      renderDashboard();
    };
    reader.readAsText(file);
    e.target.value = '';
  });
}

// --- Inventory Manager ---
function renderInventory() {
  const grid = document.getElementById('inventory-items-grid');
  grid.innerHTML = '';
  
  if (state.inventory.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;" class="empty-state">
        <p>보관 중인 교구가 없습니다. 창고가 비어있습니다.</p>
      </div>
    `;
    return;
  }

  state.inventory.forEach(item => {
    const card = document.createElement('div');
    card.className = 'inventory-card';
    const isLowStock = item.quantity <= 1;

    card.innerHTML = `
      <div class="inv-header">
        <h3 class="inv-title">${item.name}</h3>
        <span class="inv-school-badge">${item.school}</span>
      </div>
      
      <div class="inv-quantity-badge ${isLowStock ? 'low-stock' : ''}">
        <span class="inv-qty-label">보관 수량:</span>
        <span class="inv-qty-number">${item.quantity}개</span>
      </div>
      
      <div class="inv-details">
        <div class="inv-detail-row">
          <span class="detail-label">보관 발생처</span>
          <span class="detail-val" style="font-weight: 700; color: #60a5fa;">${item.school}등학교</span>
        </div>
        <div class="inv-detail-row">
          <span class="detail-label">남은 사유</span>
          <span class="detail-val">${item.reason}</span>
        </div>
        <div class="inv-detail-row">
          <span class="detail-label">보관 일자</span>
          <span class="detail-val">${item.dateAdded}</span>
        </div>
        <div class="inv-detail-row">
          <span class="detail-label">위치 / 비고</span>
          <span class="detail-val">${item.memo || '미기재'}</span>
        </div>
      </div>
      
      <div class="inv-footer-actions">
        <button class="btn-icon-adjust btn-qty-minus" data-id="${item.id}">—</button>
        <button class="btn-icon-adjust btn-qty-plus" data-id="${item.id}">+</button>
        <div style="flex-grow: 1;"></div>
        <button class="btn-delete-item" data-id="${item.id}">폐기 / 출고</button>
      </div>
    `;

    card.querySelector('.btn-qty-plus').addEventListener('click', () => {
      adjustInventoryQty(item.id, 1);
    });

    card.querySelector('.btn-qty-minus').addEventListener('click', () => {
      adjustInventoryQty(item.id, -1);
    });

    card.querySelector('.btn-delete-item').addEventListener('click', () => {
      deleteInventoryItem(item.id);
    });

    grid.appendChild(card);
  });
}

function adjustInventoryQty(id, amount) {
  const item = state.inventory.find(i => i.id === id);
  if (item) {
    const currentQty = parseInt(item.quantity);
    if (currentQty + amount > 0) {
      item.quantity = currentQty + amount;
      saveState();
      renderInventory();
      renderDashboard();
    }
  }
}

function deleteInventoryItem(id) {
  state.inventory = state.inventory.filter(i => i.id !== id);
  saveState();
  renderInventory();
  renderDashboard();
}

function setupInventoryEventListeners() {
  const inventoryModal = document.getElementById('inventory-modal');
  
  document.getElementById('btn-add-inventory-trigger').addEventListener('click', () => {
    document.getElementById('edit-inventory-id').value = '';
    document.getElementById('inv-item-name').value = '';
    document.getElementById('inv-school').value = '증산초';
    document.getElementById('inv-quantity').value = 1;
    document.getElementById('inv-reason').value = '';
    document.getElementById('inv-memo').value = '';
    
    document.getElementById('inventory-modal-title').textContent = '남은 교구 등록';
    inventoryModal.classList.add('active');
  });

  document.getElementById('btn-close-inventory-modal').addEventListener('click', () => {
    inventoryModal.classList.remove('active');
  });
  
  document.getElementById('btn-cancel-inventory-modal').addEventListener('click', () => {
    inventoryModal.classList.remove('active');
  });

  document.getElementById('inventory-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('inv-item-name').value;
    const school = document.getElementById('inv-school').value;
    const quantity = parseInt(document.getElementById('inv-quantity').value);
    const reason = document.getElementById('inv-reason').value;
    const memo = document.getElementById('inv-memo').value;
    
    const today = new Date(2026, 4, 31);
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const newItem = {
      id: 'inv-' + Date.now(),
      name,
      school,
      quantity,
      reason,
      memo,
      dateAdded: dateStr
    };

    state.inventory.push(newItem);
    saveState();
    inventoryModal.classList.remove('active');
    
    renderInventory();
    renderDashboard();
  });
}

// --- Scheduler & Master Kits (Step 3 5-Week Scheduler Slots & Auto-Archiving) ---
function renderScheduler() {
  renderMasterKitsList();
  renderSchedulerSlots();
}

function renderMasterKitsList() {
  const container = document.getElementById('master-kits-list-container');
  const searchVal = document.getElementById('master-kit-search-input').value.toLowerCase();
  
  container.innerHTML = '';
  
  state.masterKits.forEach(kit => {
    if (searchVal && !kit.name.toLowerCase().includes(searchVal) && !kit.topic.toLowerCase().includes(searchVal) && !kit.content.toLowerCase().includes(searchVal)) {
      return;
    }

    const item = document.createElement('div');
    item.className = 'master-kit-item';
    item.title = '더블 클릭하여 교구 세부 사항 편집';

    const standardMonthWeek = getStandardMonthAndWeekForSession(kit.session);

    item.innerHTML = `
      <div class="kit-session-badge">${kit.session}</div>
      <div class="kit-text-details">
        <div class="kit-name-topic">
          <span class="kit-month-badge">${standardMonthWeek} 표준</span>
          <span class="kit-title-name">${kit.name}</span>
          <span class="kit-topic-badge">(${kit.topic})</span>
        </div>
        <div class="kit-content-desc">${kit.content}</div>
      </div>
      <div class="kit-edit-hint">더블클릭 편집</div>
    `;

    item.addEventListener('dblclick', () => {
      openEditKitModal(kit);
    });

    container.appendChild(item);
  });
}

function openEditKitModal(kit) {
  const modal = document.getElementById('edit-kit-modal');
  const standardMonthWeek = getStandardMonthAndWeekForSession(kit.session);
  
  document.getElementById('edit-kit-session-id').value = kit.session;
  document.getElementById('edit-kit-session-display').value = `${kit.session} 차시 (${standardMonthWeek} 표준)`;
  document.getElementById('edit-kit-name').value = kit.name;
  document.getElementById('edit-kit-topic').value = kit.topic;
  document.getElementById('edit-kit-content').value = kit.content;
  
  document.getElementById('edit-kit-modal-title').textContent = `마스터 교구 정보 수정 (${standardMonthWeek})`;
  
  modal.classList.add('active');
}

function renderSchedulerSlots() {
  const school = document.getElementById('sched-school-select').value;
  const yearMonth = document.getElementById('sched-month-select').value;
  const container = document.getElementById('scheduler-slots-wrapper');
  
  container.innerHTML = '';

  const dates = getMonthClassDates(school, yearMonth);

  if (!state.schoolMonthlyPlans[school]) {
    state.schoolMonthlyPlans[school] = {};
  }
  if (!state.schoolMonthlyPlans[school][yearMonth]) {
    state.schoolMonthlyPlans[school][yearMonth] = getStandardMonthlyPlan(yearMonth);
  }

  const currentPlan = state.schoolMonthlyPlans[school][yearMonth];

  // Enforce array length of 5 for 5-week customization (Step 3 requirement)
  while (currentPlan.length < 5) {
    currentPlan.push(0);
  }

  for (let i = 0; i < 5; i++) {
    const slotCard = document.createElement('div');
    slotCard.className = 'scheduler-slot-card';
    slotCard.setAttribute('data-index', i);

    const currentSession = currentPlan[i] || 0;

    let dropdownOptions = `<option value="0" ${currentSession === 0 ? 'selected' : ''}>-- 교구 미사용 / 휴강 슬롯 --</option>`;
    state.masterKits.forEach(k => {
      const stdBadge = getStandardMonthAndWeekForSession(k.session);
      dropdownOptions += `<option value="${k.session}" ${k.session === currentSession ? 'selected' : ''}>${k.session}차시: ${k.name} (${stdBadge})</option>`;
    });

    let dateFormatted = '';
    let slotDateString = '';
    
    if (i < dates.length) {
      const d = new Date(dates[i]);
      dateFormatted = `${d.getMonth() + 1}/${d.getDate()}(${weekDaysKorean[d.getDay()]})`;
      slotDateString = dates[i];
    } else {
      // 5th Week Date Calculation logic
      if (dates.length > 0) {
        const lastDate = new Date(dates[dates.length - 1]);
        lastDate.setDate(lastDate.getDate() + 7 * (i - dates.length + 1));
        dateFormatted = `${lastDate.getMonth() + 1}/${lastDate.getDate()}(${weekDaysKorean[lastDate.getDay()]}) [보충/임시]`;
        
        const yyyy = lastDate.getFullYear();
        const mm = String(lastDate.getMonth() + 1).padStart(2, '0');
        const dd = String(lastDate.getDate()).padStart(2, '0');
        slotDateString = `${yyyy}-${mm}-${dd}`;
      } else {
        const [yyyy, mm] = yearMonth.split('-').map(Number);
        const lastDay = new Date(yyyy, mm, 0);
        dateFormatted = `${lastDay.getMonth() + 1}월 [추가 주차]`;
        
        const yyyy2 = lastDay.getFullYear();
        const mm2 = String(lastDay.getMonth() + 1).padStart(2, '0');
        const dd2 = String(lastDay.getDate()).padStart(2, '0');
        slotDateString = `${yyyy2}-${mm2}-${dd2}`;
      }
    }

    slotCard.innerHTML = `
      <div class="slot-week-indicator">
        <span class="slot-week-num">${i + 1}주차</span>
        <span class="slot-date">${dateFormatted}</span>
      </div>
      
      <div class="slot-dropdown-wrapper">
        <select class="slot-dropdown" data-index="${i}">
          ${dropdownOptions}
        </select>
      </div>
      
      <div class="slot-controls" style="flex-direction: row; align-items: center; gap: 8px;">
        <button class="btn-slot-archive" data-index="${i}" title="이 차시 교구 보관고로 이체">보관</button>
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <button class="btn-slot-move slot-move-up" data-index="${i}" title="위로 순서 교환" ${i === 0 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''}>▲</button>
          <button class="btn-slot-move slot-move-down" data-index="${i}" title="아래로 순서 교환" ${i === 4 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''}>▼</button>
        </div>
      </div>
    `;

    slotCard.querySelector('.slot-dropdown').addEventListener('change', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'));
      currentPlan[idx] = parseInt(e.target.value);
    });

    if (i > 0) {
      slotCard.querySelector('.slot-move-up').addEventListener('click', () => {
        swapSlots(school, yearMonth, i, i - 1);
      });
    }

    if (i < 4) {
      slotCard.querySelector('.slot-move-down').addEventListener('click', () => {
        swapSlots(school, yearMonth, i, i + 1);
      });
    }

    // Slot Archiving Button (스케줄러 보관 연동 구현)
    slotCard.querySelector('.btn-slot-archive').addEventListener('click', () => {
      const session = currentPlan[i];
      if (!session || session === 0) {
        alert('보관할 교구가 지정되어 있지 않습니다. 차시를 먼저 선택해 주세요.');
        return;
      }

      const targetKit = state.masterKits.find(k => k.session === session);
      if (!targetKit) return;

      const qty = prompt(`[${school}] ${i + 1}주차 수업 조율 교구 보관\n보관고에 추가할 '${session}차시: ${targetKit.name}' 수량을 입력하세요:`, '1');
      if (qty === null) return;

      const quantity = parseInt(qty);
      if (isNaN(quantity) || quantity <= 0) {
        alert('올바른 수량을 입력해 주세요.');
        return;
      }

      const monthName = yearMonth.split('-')[1];
      const reason = prompt('보관 사유를 입력하세요:', `${monthName}월 ${i + 1}주차 수업 조율 보관`);
      if (reason === null) return;

      // Add custom archived kit info to state.inventory (clearly recording which school's which kit)
      const newItem = {
        id: 'inv-sched-' + Date.now(),
        name: `${session}차시 교구 - ${targetKit.name}`,
        school: school,
        quantity: quantity,
        reason: reason,
        memo: `교구 스케줄러 보관 연동 건 (${yearMonth} 계획)`,
        dateAdded: slotDateString
      };

      state.inventory.push(newItem);
      saveState();
      
      alert(`[보관 완료] '${school}'의 '${newItem.name}' 교구가 보관고에 ${quantity}개 추가되었습니다.`);
      
      renderInventory();
      renderDashboard();
    });

    container.appendChild(slotCard);
  }
}

function swapSlots(school, yearMonth, idx1, idx2) {
  const plan = state.schoolMonthlyPlans[school][yearMonth];
  const temp = plan[idx1];
  plan[idx1] = plan[idx2];
  plan[idx2] = temp;
  
  saveState(); // Instantly save on slot order change
  
  renderSchedulerSlots();
  renderCalendar();
  renderDashboard();
}

function setupSchedulerEventListeners() {
  const editKitModal = document.getElementById('edit-kit-modal');

  document.getElementById('sched-school-select').addEventListener('change', renderSchedulerSlots);
  document.getElementById('sched-month-select').addEventListener('change', renderSchedulerSlots);

  document.getElementById('master-kit-search-input').addEventListener('input', renderMasterKitsList);

  document.getElementById('btn-save-scheduler-plan').addEventListener('click', () => {
    const school = document.getElementById('sched-school-select').value;
    const yearMonth = document.getElementById('sched-month-select').value;
    
    saveState();
    
    // Invalidate dashboard card overrides
    state.schools[school].lesson = null; 
    saveState();
    
    alert(`[${school}] ${yearMonth} 스케줄러 배치가 정상 저장되었습니다.\n대시보드와 달력에 즉시 반영됩니다.`);
    
    renderCalendar();
    renderDashboard();
  });

  document.getElementById('btn-close-edit-kit-modal').addEventListener('click', () => {
    editKitModal.classList.remove('active');
  });
  
  document.getElementById('btn-cancel-edit-kit-modal').addEventListener('click', () => {
    editKitModal.classList.remove('active');
  });

  document.getElementById('edit-kit-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const session = parseInt(document.getElementById('edit-kit-session-id').value);
    const name = document.getElementById('edit-kit-name').value;
    const topic = document.getElementById('edit-kit-topic').value;
    const content = document.getElementById('edit-kit-content').value;

    const targetKit = state.masterKits.find(k => k.session === session);
    if (targetKit) {
      targetKit.name = name;
      targetKit.topic = topic;
      targetKit.content = content;
      
      for (const school of ['증산초', '신도초', '삼성초', '연서초']) {
        if (state.schools[school].lesson === session) {
          state.schools[school].kit = `${session}차시: ${name} (${topic})`;
        }
      }
      
      saveState();
      
      alert(`${session}차시 교구 정보가 업데이트되었습니다.`);
      editKitModal.classList.remove('active');
      
      renderMasterKitsList();
      renderSchedulerSlots();
      renderDashboard();
      renderCalendar();
    }
  });
}
