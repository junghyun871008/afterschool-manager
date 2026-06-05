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

  // ── 개교기념일 ──────────────────────────────────────────
  { id: 'sc-an1', date: '2026-03-24', school: '신도초', type: 'school-vacation', memo: '신도초 개교기념일 휴강' },
  { id: 'sc-an2', date: '2026-03-27', school: '연서초', type: 'school-vacation', memo: '연서초 개교기념일 휴강' },

  // ── 공개수업 ─────────────────────────────────────────────
  { id: 'sc-oc1', date: '2026-06-15', school: '증산초', type: 'openclass', memo: '학부모 공개수업 (증산초)' },
  { id: 'sc-oc2', date: '2026-06-18', school: '삼성초', type: 'openclass', memo: '학부모 공개수업 (삼성초)' },
  { id: 'sc-oc3', date: '2026-10-20', school: '신도초', type: 'openclass', memo: '학부모 공개수업 (신도초)' },

  // ── 방과후 여름방학 ───────────────────────────────────────
  { id: 'sc-sum1', date: '2026-07-21', school: '신도초', type: 'vacation', memo: '신도초 여름방학 — 방과후 수업 휴강' },
  { id: 'sc-sum2', date: '2026-07-27', school: '증산초', type: 'vacation', memo: '증산초 여름방학 — 방과후 수업 휴강' },

  // ── 한국 공휴일 / 기념일 (달력 표시용) ─────────────────────
  { id: 'nh-01', date: '2026-03-01', school: '', type: 'national-holiday', memo: '삼일절' },
  { id: 'nh-02', date: '2026-05-05', school: '', type: 'national-holiday', memo: '어린이날' },
  { id: 'nh-03', date: '2026-05-25', school: '', type: 'national-holiday', memo: '부처님오신날' },
  { id: 'nh-04', date: '2026-06-03', school: '', type: 'national-holiday', memo: '전국동시지방선거 (공휴일)' },
  { id: 'nh-05', date: '2026-06-06', school: '', type: 'national-holiday', memo: '현충일' },
  { id: 'nh-06', date: '2026-06-25', school: '', type: 'national-holiday', memo: '6·25 한국전쟁 기념일' },
  { id: 'nh-07', date: '2026-08-15', school: '', type: 'national-holiday', memo: '광복절' },
  { id: 'nh-08', date: '2026-09-25', school: '', type: 'national-holiday', memo: '추석 연휴' },
  { id: 'nh-09', date: '2026-10-03', school: '', type: 'national-holiday', memo: '개천절' },
  { id: 'nh-10', date: '2026-10-09', school: '', type: 'national-holiday', memo: '한글날' },
  { id: 'nh-11', date: '2026-12-25', school: '', type: 'national-holiday', memo: '크리스마스' },
  { id: 'nh-12', date: '2027-01-01', school: '', type: 'national-holiday', memo: '신정' }
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
  setupDataSyncEventListeners();
  setupSheetsRefreshButton();
  setupCloudSyncModal();

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

  // Google Sheets 연동 (비동기 백그라운드)
  loadEnrollmentFromSheets();
  loadAbsencesFromSheets();

  // 학사 일정 시트 동기화 버튼
  const syncBtn = document.getElementById('btn-sync-schedules');
  if (syncBtn) {
    syncBtn.addEventListener('click', () => syncSchedulesFromSheet());
  }
  // 앱 로드 시 자동 동기화 (백그라운드)
  syncSchedulesFromSheet();

  // Firebase 클라우드 동기화 자동 재연결
  const { url, key } = getCloudSettings();
  if (url) initFirebaseSync(url, key);
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

      // mergedAny 선언을 먼저 (TDZ 버그 수정)
      let mergedAny = false;

      // Recovery for local data
      if (!state.inventory || state.inventory.length === 0) {
        state.inventory = [
          {
            id: 'inv-auto-recovery-' + Date.now(),
            name: '14차시 교구 - 잠수함비행기(슈팅)',
            school: '증산초',
            quantity: 41,
            reason: '06월 4주차 수업 조율 보관',
            memo: '교구 스케줄러 보관 연동 건 (2026-06 계획)',
            dateAdded: '2026-06-22'
          }
        ];
        mergedAny = true;
      }

      // Merge new public holiday schedules (sc-h prefixed) into existing user schedule state without duplicate dates for same school
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

      // 복원: 2026년 6월 교구 계획 (초기화된 경우 이전 확인된 데이터로 복구)
      // 확인 기준: 증산초 1주차가 11차(유니콘드론)여야 함. 아니면 초기화된 것.
      const smp = state.schoolMonthlyPlans;
      const jun = '2026-06';
      const zsJun = smp['증산초'] && smp['증산초'][jun];
      if (!zsJun || zsJun[0] !== 11) {
        smp['증산초'] = smp['증산초'] || {};
        smp['신도초'] = smp['신도초'] || {};
        smp['삼성초'] = smp['삼성초'] || {};
        smp['연서초'] = smp['연서초'] || {};
        // 이전 PC화면에서 확인한 값: W1~W4, W5=0(미정)
        smp['증산초'][jun] = [11, 16, 13, 14, 0]; // 드론→투석기→앵무새→잠수함
        smp['신도초'][jun]  = [11, 16, 13, 14, 0];
        smp['삼성초'][jun]  = [16, 13, 14,  0, 0]; // 6.25(W4) 휴강
        smp['연서초'][jun]  = [16, 13, 14, 16, 0];
        mergedAny = true;
      }

      // To-Do 필드가 누락되어 있다면 안전 초기화
      for (const school of ['증산초', '신도초', '삼성초', '연서초']) {
        if (!state.schools[school].absentTodos) state.schools[school].absentTodos = [];
        if (!state.schools[school].prepTodos) state.schools[school].prepTodos = [];
      }

      // 데이터 정정: 잘못된 이벤트 및 구버전 이벤트 모두 제거 (type 불문, date+school로 완전 제거)
      const removeIds = ['sc-1','sc-2','sc-3','sc-oc1_old'];
      const removeByDateSchool = [
        { date: '2026-06-16', school: '신도초' },   // 신도초 공개수업 오기록 (실제: 10/20)
        { date: '2026-06-11', school: '삼성초' },   // 삼성초 공개수업 잘못된 날짜 (실제: 6/18)
        { date: '2026-06-08', school: '증산초' },   // 증산초 재량휴업일 오기록 (실제 없음)
        { date: '2026-06-25', school: '삼성초' },   // 삼성초 개교기념일 오기록 (실제 없음)
        { date: '2026-06-08', school: '삼성초' },   // 시트 동기화로 잘못 들어온 오류
      ];
      let removedAny = false;
      // ID로 제거
      state.schedules = state.schedules.filter(s => !removeIds.includes(s.id));
      // date+school 조합 전체 제거 (vacation/school-vacation/openclass 구분 없이)
      removeByDateSchool.forEach(w => {
        const before = state.schedules.length;
        state.schedules = state.schedules.filter(s =>
          !(s.date === w.date && s.school === w.school)
        );
        if (state.schedules.length < before) removedAny = true;
      });
      if (removedAny) mergedAny = true;

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
  state.inventory = [
    {
      id: 'inv-auto-recovery-' + Date.now(),
      name: '14차시 교구 - 잠수함비행기(슈팅)',
      school: '증산초',
      quantity: 41,
      reason: '06월 4주차 수업 조율 보관',
      memo: '교구 스케줄러 보관 연동 건 (2026-06 계획)',
      dateAdded: '2026-06-22'
    }
  ];
  state.schoolMonthlyPlans = {};
  saveState();
}

function saveState() {
  localStorage.setItem('afterschool_manager_state', JSON.stringify(state));
  saveStateToCloud(); // 클라우드 연결 시 자동 동기화
}

// --- Initialize Calendar View Date ---
function initCalendarDate() {
  const today = new Date();
  currentYear = today.getFullYear();
  currentMonth = today.getMonth(); // 0-indexed
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
  const today = new Date();
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

// Get the Monday-Sunday date range of the current week
function getCurrentWeekDateRange() {
  const today = new Date();
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
  
  const now = new Date();
  const nowY = now.getFullYear();
  const nowM = now.getMonth() + 1;
  const weekOfMonth = Math.ceil(now.getDate() / 7);
  let briefingHTML = ``;
  briefingHTML += `<h4>📅 이번 주 출강 정보 브리핑</h4>`;
  briefingHTML += `<p><strong>${nowY}년 ${nowM}월 ${weekOfMonth}주차</strong> 수업 및 교구 준비 가이드입니다.</p>`;
  
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
    const ts = new Date();
    timestampEl.textContent = `마지막 분석: ${ts.getFullYear()}년 ${ts.getMonth()+1}월 ${ts.getDate()}일 ${String(ts.getHours()).padStart(2,'0')}:${String(ts.getMinutes()).padStart(2,'0')}`;
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
  
  const today = new Date();

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

  const isMobile = window.innerWidth <= 768;
  const schoolColors = { '증산초': '#2563eb', '신도초': '#059669', '삼성초': '#d97706', '연서초': '#db2777' };
  const schoolShort = { '증산초': '증산', '신도초': '신도', '삼성초': '삼성', '연서초': '연서' };

  if (regularSchool) {
    const schoolLabel = document.createElement('span');
    schoolLabel.className = 'cell-school-label';
    schoolLabel.style.fontSize = isMobile ? '0.75rem' : '1.1rem';
    schoolLabel.style.fontWeight = '800';
    schoolLabel.style.marginTop = '2px';
    schoolLabel.style.color = schoolColors[regularSchool] || '#334155';
    schoolLabel.style.display = 'block';
    schoolLabel.style.lineHeight = '1.1';
    // 모바일: 2글자 축약 (증산, 신도, 삼성, 연서)
    schoolLabel.textContent = isMobile ? (schoolShort[regularSchool] || regularSchool) : regularSchool;
    cell.appendChild(schoolLabel);

    const scheduledKit = getScheduledKitForDate(regularSchool, dateStr);
    if (scheduledKit) {
      const kitBadge = document.createElement('div');
      kitBadge.className = 'cell-kit-badge';
      kitBadge.style.fontSize = isMobile ? '0.65rem' : '0.8rem';
      kitBadge.style.background = 'rgba(124,58,237,0.1)';
      kitBadge.style.border = '1px solid rgba(124,58,237,0.2)';
      kitBadge.style.color = '#7c3aed';
      kitBadge.style.borderRadius = '3px';
      kitBadge.style.padding = isMobile ? '1px 3px' : '2px 5px';
      kitBadge.style.marginTop = '2px';
      kitBadge.style.maxWidth = '100%';
      kitBadge.style.overflow = 'hidden';
      kitBadge.style.textOverflow = 'ellipsis';
      kitBadge.style.whiteSpace = 'nowrap';
      kitBadge.style.fontWeight = '700';
      kitBadge.style.display = 'block';
      // 모바일: 숫자만 "13", PC: "13차: 교구명"
      kitBadge.textContent = isMobile ? `${scheduledKit.session}차` : `${scheduledKit.session}차: ${scheduledKit.name}`;
      kitBadge.title = `${scheduledKit.session}차시: ${scheduledKit.name} (${scheduledKit.topic})`;
      cell.appendChild(kitBadge);
    }
  }

  // 국경일/기념일 표시 (school === '' → 모든 날짜 셀에 표시)
  const holidays = state.schedules.filter(ev => ev.date === dateStr && ev.type === 'national-holiday');
  if (holidays.length > 0) {
    const hLabel = document.createElement('div');
    hLabel.className = 'cell-holiday-label';
    hLabel.textContent = holidays[0].memo;
    hLabel.title = holidays[0].memo;
    cell.appendChild(hLabel);
    // 날짜 숫자 빨간색으로
    numSpan.style.color = '#dc2626';
  }

  const events = state.schedules.filter(ev => ev.date === dateStr && ev.type !== 'national-holiday');
  if (events.length > 0) {
    const hasOpenClass = events.some(ev => ev.type === 'openclass');
    const hasVacation = events.some(ev => ev.type === 'vacation' || ev.type === 'school-vacation');

    // 공개수업 셀: ★ 배지 표시
    if (hasOpenClass) {
      const ocBadge = document.createElement('div');
      ocBadge.className = 'cell-openclass-badge';
      ocBadge.textContent = isMobile ? '★' : '★ 공개수업';
      cell.style.background = 'rgba(124,58,237,0.06)';
      cell.style.borderColor = 'rgba(124,58,237,0.3)';
      cell.appendChild(ocBadge);
    }

    // 휴강 셀: 배경색 변경
    if (hasVacation && !hasOpenClass) {
      cell.style.background = 'rgba(220,38,38,0.04)';
      cell.style.borderColor = 'rgba(220,38,38,0.2)';
    }

    // 기타 이벤트: 점 대신 텍스트 라벨 표시
    events.filter(ev => ev.type === 'other' && ev.memo).forEach(ev => {
      const otherLabel = document.createElement('div');
      otherLabel.className = 'cell-other-label';
      let txt = ev.memo;
      ['증산초', '신도초', '삼성초', '연서초'].forEach(s => { txt = txt.replace(s, '').trim(); });
      otherLabel.textContent = txt.substring(0, isMobile ? 7 : 13);
      otherLabel.title = ev.memo;
      cell.appendChild(otherLabel);
    });

    const dotContainer = document.createElement('div');
    dotContainer.className = 'day-events-dots';
    events.forEach(ev => {
      if (ev.type === 'other') return; // 기타는 텍스트 라벨로 표시
      const dot = document.createElement('span');
      dot.className = 'event-dot-indicator';
      if (ev.type === 'vacation') dot.style.backgroundColor = 'var(--color-vacation)';
      else if (ev.type === 'school-vacation') dot.style.backgroundColor = 'var(--color-school-vacation)';
      else if (ev.type === 'openclass') dot.style.backgroundColor = 'var(--color-openclass)';
      dotContainer.appendChild(dot);
    });
    cell.appendChild(dotContainer);
  }

  // 클릭: 상세 팝업 (모바일·PC 공통) → 팝업 안에 '일정 등록' 버튼
  cell.addEventListener('click', () => {
    openDayDetailPopup(dateStr, regularSchool);
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
    return monthsToCheck.includes(evPrefix) && ev.type !== 'national-holiday';
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
    } else if (ev.type === 'other') {
      typeName = '기타';
      badgeClass = 'item-badge-other';
    }

    const schoolLabel = ev.school ? `${ev.school}등학교` : '공통';
    const d = new Date(ev.date);
    const dateFormatted = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${weekDaysKorean[d.getDay()]})`;

    item.innerHTML = `
      <div class="item-school-day">
        <span class="item-school-name">${schoolLabel}</span>
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

// 모바일 달력 셀 클릭 → 상세 팝업
function openDayDetailPopup(dateStr, school) {
  const d = new Date(dateStr);
  const dayNames = ['일','월','화','수','목','금','토'];
  const dateLabel = `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 (${dayNames[d.getDay()]})`;

  const kit = school ? getScheduledKitForDate(school, dateStr) : null;
  const events = state.schedules.filter(ev => ev.date === dateStr);

  const typeLabel = { vacation: '방과후 휴강', 'school-vacation': '학교 휴강', openclass: '★ 학부모 공개수업', other: '기타' };
  const typeColor = { vacation: '#d97706', 'school-vacation': '#dc2626', openclass: '#7c3aed', other: '#0891b2' };

  let content = `<div class="day-popup-date">${dateLabel}</div>`;
  if (school) content += `<div class="day-popup-school" style="color:${({'증산초':'#2563eb','신도초':'#059669','삼성초':'#d97706','연서초':'#db2777'}[school]||'#334155')}">${school}등학교</div>`;

  if (events.length > 0) {
    events.forEach(ev => {
      content += `<div class="day-popup-event" style="border-color:${typeColor[ev.type]||'#94a3b8'};color:${typeColor[ev.type]||'#334155'}">${typeLabel[ev.type]||ev.type}: ${ev.memo||''}</div>`;
    });
  }

  if (kit) {
    content += `<div class="day-popup-kit">
      <div class="day-popup-kit-session">${kit.session}차시 교구</div>
      <div class="day-popup-kit-name">${kit.name}</div>
      <div class="day-popup-kit-topic">${kit.topic}</div>
      <div class="day-popup-kit-content">${kit.content}</div>
    </div>`;
  } else if (school) {
    content += `<div class="day-popup-empty">배정된 교구 없음 (휴강 또는 미지정)</div>`;
  }

  content += `<div class="day-popup-actions">
    <button class="btn-secondary day-popup-close" onclick="document.getElementById('day-detail-popup').remove()">닫기</button>
    <button class="btn-primary" style="font-size:0.8rem;padding:0.45rem 0.85rem;" onclick="document.getElementById('day-detail-popup').remove();openScheduleModal('${dateStr}','${school||'증산초'}')">+ 일정 등록</button>
  </div>`;

  // 기존 팝업 제거 후 새로 표시
  const existing = document.getElementById('day-detail-popup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.id = 'day-detail-popup';
  popup.className = 'day-detail-popup';
  popup.innerHTML = content;
  document.body.appendChild(popup);

  // 외부 클릭 시 닫기
  setTimeout(() => {
    document.addEventListener('click', function closePopup(e) {
      if (!popup.contains(e.target)) {
        popup.remove();
        document.removeEventListener('click', closePopup);
      }
    });
  }, 100);
}

function openScheduleModal(dateStr, school) {
  const modal = document.getElementById('schedule-modal');
  document.getElementById('schedule-date').value = dateStr || '';
  if (school) {
    const schoolSelect = document.getElementById('schedule-school');
    if (schoolSelect) schoolSelect.value = school;
  }
  modal.classList.add('active');
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
    const today = new Date();
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

  // Google Calendar .ics Importer Logic (element removed from HTML - guarded null check)
  const icsInput = document.getElementById('ics-file-input');
  if (icsInput) { icsInput.addEventListener('change', (e) => {
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
  }); } // end icsInput guard
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
    
    const today = new Date();
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
  // 현재 월을 month select에 자동 반영 (첫 진입 또는 초기화 시)
  const monthSel = document.getElementById('sched-month-select');
  if (monthSel) {
    const todayYM = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
    const optionExists = Array.from(monthSel.options).some(o => o.value === todayYM);
    if (optionExists) monthSel.value = todayYM;
  }
  renderMasterKitsList();
  renderSchedulerSlots();
}

// 각 교구(session)를 어느 학교가 어느 월/주차에 사용했는지 계산
function getKitUsageBySchool() {
  const usage = {}; // { session: { school: ['2026-06 W1', ...] } }
  const schools = ['증산초', '신도초', '삼성초', '연서초'];
  schools.forEach(school => {
    const plans = state.schoolMonthlyPlans[school] || {};
    Object.entries(plans).forEach(([ym, weeks]) => {
      const [y, m] = ym.split('-');
      weeks.forEach((session, idx) => {
        if (!session || session === 0) return;
        if (!usage[session]) usage[session] = {};
        if (!usage[session][school]) usage[session][school] = [];
        usage[session][school].push(`${parseInt(m)}월 ${idx + 1}주차`);
      });
    });
  });
  return usage;
}

function renderMasterKitsList() {
  const container = document.getElementById('master-kits-list-container');
  const searchVal = document.getElementById('master-kit-search-input').value.toLowerCase();

  container.innerHTML = '';

  const kitUsage = getKitUsageBySchool();
  const schoolColors = { '증산초': '#2563eb', '신도초': '#059669', '삼성초': '#d97706', '연서초': '#db2777' };
  const schoolShort = { '증산초': '증산', '신도초': '신도', '삼성초': '삼성', '연서초': '연서' };
  const allSchools = ['증산초', '신도초', '삼성초', '연서초'];

  state.masterKits.forEach(kit => {
    if (searchVal && !kit.name.toLowerCase().includes(searchVal) && !kit.topic.toLowerCase().includes(searchVal) && !kit.content.toLowerCase().includes(searchVal)) {
      return;
    }

    const item = document.createElement('div');
    item.className = 'master-kit-item';

    const standardMonthWeek = getStandardMonthAndWeekForSession(kit.session);
    const sessionUsage = kitUsage[kit.session] || {};
    const usedSchools = Object.keys(sessionUsage);
    const allUsed = allSchools.every(s => usedSchools.includes(s));
    const noneUsed = usedSchools.length === 0;

    // 학교 사용 배지 HTML 생성
    const badgesHtml = allSchools.map(school => {
      const used = sessionUsage[school];
      if (used) {
        const detail = used.join(', ');
        const color = schoolColors[school];
        return `<span class="kit-school-badge kit-school-used" style="background:${color};border-color:${color}" title="${school}: ${detail}">${schoolShort[school]}</span>`;
      } else {
        return `<span class="kit-school-badge kit-school-unused" title="${school}: 미사용">${schoolShort[school]}</span>`;
      }
    }).join('');

    // 전체 사용 완료 또는 미사용 표시
    const statusHtml = allUsed
      ? '<span class="kit-usage-status all-done">✓ 4교 완료</span>'
      : noneUsed
        ? '<span class="kit-usage-status not-used">미사용</span>'
        : `<span class="kit-usage-status partial">${usedSchools.length}/4교</span>`;

    item.innerHTML = `
      <div class="kit-session-badge">${kit.session}</div>
      <div class="kit-text-details">
        <div class="kit-name-topic">
          <span class="kit-month-badge">${standardMonthWeek} 표준</span>
          <span class="kit-title-name">${kit.name}</span>
          <span class="kit-topic-badge">(${kit.topic})</span>
        </div>
        <div class="kit-content-desc">${kit.content}</div>
        <div class="kit-school-usage">
          ${badgesHtml}
          ${statusHtml}
        </div>
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

// ==========================================================================
// Google Sheets 학사 일정 자동 동기화
// ==========================================================================

const SCHEDULE_SHEET_ID = '1hEawF0B3Gz7ZYiQbqh4FnKJc5c-FZNMkz5pQWUOBq3w';

// 시트 날짜 문자열 → "YYYY-MM-DD" 변환
function parseSheetDate(raw) {
  if (!raw) return null;
  const clean = raw.replace(/\s/g, '');
  // "2026.5.10" 또는 "2026-05-10" 처리
  const m = clean.match(/(\d{4})[.\-\/](\d{1,2})[.\-\/](\d{1,2})/);
  if (!m) return null;
  return `${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`;
}

// 활동명에서 이벤트 유형 판단
function classifyScheduleEvent(text, notes) {
  const t = (text + ' ' + (notes||'')).toLowerCase();
  if (t.includes('공개수업')) return 'openclass';
  if (t.includes('방학') || t.includes('휴강')) return 'vacation';
  if (t.includes('재량휴업') || t.includes('개교기념') || t.includes('공휴일') || t.includes('대체공휴일')) return 'school-vacation';
  // 학교명이 있으면 모두 기타로 분류
  const hasSchool = ['증산초','신도초','삼성초','연서초'].some(s => text.includes(s));
  if (hasSchool) return 'other';
  return null;
}

// 활동명에서 해당 학교 찾기
function extractSchoolFromText(text) {
  if (text.includes('증산초')) return '증산초';
  if (text.includes('신도초')) return '신도초';
  if (text.includes('삼성초')) return '삼성초';
  if (text.includes('연서초')) return '연서초';
  return null;
}

// 날짜로 담당 학교 찾기 (요일 기반)
function getSchoolByDate(dateStr) {
  const d = new Date(dateStr);
  const day = d.getDay();
  if (day === 1) return '증산초';
  if (day === 2) return '신도초';
  if (day === 4) return '삼성초';
  if (day === 5) return '연서초';
  return null;
}

async function syncSchedulesFromSheet() {
  const statusEl = document.getElementById('sheet-sync-status');
  if (statusEl) { statusEl.textContent = '시트 읽는 중...'; statusEl.style.color = '#2563eb'; }

  let added = 0;
  try {
    // 6000행 이후 2026년 데이터 조각별로 가져오기
    const ranges = ['A6000:J6500', 'A6500:J7000', 'A7000:J7500'];
    for (const range of ranges) {
      const url = `https://docs.google.com/spreadsheets/d/${SCHEDULE_SHEET_ID}/gviz/tq?tqx=out:csv&gid=0&range=${range}`;
      let rows;
      try {
        rows = await fetchSheetCSV(null, null, url);
      } catch (e) { continue; }

      for (const row of rows) {
        const dateStr = parseSheetDate(row[0]);
        if (!dateStr || !dateStr.startsWith('202')) continue; // 2020년 이후만

        const activityName = row[5] || '';
        const notes = row[8] || '';
        const type = classifyScheduleEvent(activityName, notes);
        if (!type) continue;

        // 학교 특정: 활동명에 있으면 우선, 없으면 날짜 요일로
        let school = extractSchoolFromText(activityName + ' ' + notes);

        // 공개수업/방학의 경우 날짜 기반으로도 학교 유추
        if (!school) school = getSchoolByDate(dateStr);
        if (!school) continue;

        // 절대 추가하면 안 되는 블랙리스트 (type 불문, date+school로 차단)
        const syncBlocklist = [
          { date: '2026-06-16', school: '신도초' },  // 신도초 공개수업 오기록
          { date: '2026-06-08', school: '증산초' },  // 증산초 재량휴업일 오기록
          { date: '2026-06-25', school: '삼성초' },  // 삼성초 개교기념일 오기록
          { date: '2026-06-11', school: '삼성초' },  // 삼성초 공개수업 잘못된 날짜
          { date: '2026-06-08', school: '삼성초' },  // 삼성초 시트 오류
        ];
        if (syncBlocklist.some(b => b.date === dateStr && b.school === school)) continue;

        // 학교와 날짜 요일이 맞는지 검증
        // (예: 삼성초 공개수업을 월요일에 기록했으면 스킵)
        const schoolWeekday = { '증산초': 1, '신도초': 2, '삼성초': 4, '연서초': 5 };
        const dateWeekday = new Date(dateStr).getDay();
        if (schoolWeekday[school] !== undefined && schoolWeekday[school] !== dateWeekday) continue;

        // 중복 체크
        const exists = state.schedules.some(s => s.date === dateStr && s.school === school && s.type === type);
        if (exists) continue;

        const newEv = {
          id: `sc-auto-${dateStr}-${school}`,
          date: dateStr,
          school,
          type,
          memo: activityName.substring(0, 60)
        };
        state.schedules.push(newEv);
        added++;
      }
    }

    if (added > 0) {
      saveState();
      renderCalendar();
      renderDashboard();
    }

    if (statusEl) {
      statusEl.textContent = added > 0 ? `✓ ${added}개 일정 추가됨` : '✓ 새 일정 없음';
      statusEl.style.color = '#059669';
    }
  } catch (e) {
    if (statusEl) { statusEl.textContent = '⚠ 시트 읽기 실패'; statusEl.style.color = '#dc2626'; }
  }
}

// ==========================================================================
// Google Sheets 연동 — 인원 현황 & 결석생 알림
// ==========================================================================

const SHEET_ID = '1JutjMvwsc9O8Db6kilySSsFGBd5HB-j0xYsJHCk3vAA';
const DASHBOARD_GID = '1344548639';

function parseCSV(text) {
  const rows = [];
  let row = [], inQ = false, field = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQ && text[i+1] === '"') { field += '"'; i++; }
      else inQ = !inQ;
    } else if (ch === ',' && !inQ) {
      row.push(field.trim()); field = '';
    } else if ((ch === '\n' || ch === '\r') && !inQ) {
      if (ch === '\r' && text[i+1] === '\n') i++;
      row.push(field.trim()); if (row.some(c => c)) rows.push(row);
      row = []; field = '';
    } else { field += ch; }
  }
  if (field || row.length) { row.push(field.trim()); if (row.some(c => c)) rows.push(row); }
  return rows;
}

async function fetchSheetCSV(gid, sheetName, directUrl) {
  let url;
  if (directUrl) {
    url = directUrl;
  } else {
    const base = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;
    url = gid ? `${base}&gid=${gid}` : `${base}&sheet=${encodeURIComponent(sheetName)}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return parseCSV(await res.text());
}

// 인원 현황 (대시보드 탭)
async function loadEnrollmentFromSheets() {
  try {
    const rows = await fetchSheetCSV(DASHBOARD_GID, null);
    // 헤더 행(0): [학교명, 1, 2, 3, 전체합계, ...]
    // 데이터 행(1~): [학교명, 1부수, 2부수, 3부수, 합계, ...]
    const schoolMap = { '삼성초': '삼성초', '신도초': '신도초', '연서초': '연서초', '증산초': '증산초' };
    rows.slice(1).forEach(row => {
      const name = row[0];
      const matched = Object.keys(schoolMap).find(k => name && name.includes(k));
      if (!matched) return;
      const p1 = parseInt(row[1]) || 0;
      const p2 = parseInt(row[2]) || 0;
      const p3 = parseInt(row[3]) || 0;
      const total = parseInt(row[4]) || (p1 + p2 + p3);
      const el = document.getElementById(`enrollment-${matched}`);
      if (!el) return;
      let html = '';
      if (p1) html += `<span class="enroll-part">1부 ${p1}명</span>`;
      if (p2) html += `<span class="enroll-part">2부 ${p2}명</span>`;
      if (p3) html += `<span class="enroll-part">3부 ${p3}명</span>`;
      html += `<strong class="enroll-total">총 ${total}명</strong>`;
      el.innerHTML = html;
    });
  } catch (e) {
    console.warn('인원 시트 연동 실패:', e.message);
    ['증산초','신도초','삼성초','연서초'].forEach(s => {
      const el = document.getElementById(`enrollment-${s}`);
      if (el) el.innerHTML = '<span class="enroll-loading">시트 연동 실패 (오프라인?)</span>';
    });
  }
}

// 결석생 알림 (전체학생명단 탭)
async function loadAbsencesFromSheets() {
  const schools = ['증산초','신도초','삼성초','연서초'];
  try {
    const rows = await fetchSheetCSV(null, '전체학생명단');
    if (rows.length < 2) throw new Error('데이터 없음');

    // 헤더에서 컬럼 인덱스 찾기
    const header = rows[0].map(h => h.replace(/\s/g, '').toLowerCase());
    const colSchool = header.findIndex(h => h.includes('학교') || h === '학교명');
    const colName = header.findIndex(h => h === '이름' || h.includes('이름'));
    const colPart = header.findIndex(h => h.includes('현재부') || h.includes('부'));
    const colMonth = header.findIndex(h => h === '월');

    // 이번 달 (숫자)
    const nowMonth = new Date().getMonth() + 1;
    // 이번 주차 (월 내 1~5주)
    const nowWeek = Math.ceil(new Date().getDate() / 7);
    // 주차 컬럼: 헤더에서 "1주차","2주차" 등 찾기
    const weekColIdx = header.findIndex(h => h.includes(`${nowWeek}주`) || h === `${nowWeek}주차`);

    // 학교별 결석생 맵
    const absenceMap = {};
    schools.forEach(s => absenceMap[s] = []);

    rows.slice(1).forEach(row => {
      // 이번 달 필터
      if (colMonth >= 0) {
        const rowMonth = parseInt(row[colMonth]);
        if (rowMonth && rowMonth !== nowMonth) return;
      }
      const schoolCell = colSchool >= 0 ? row[colSchool] : '';
      const matched = schools.find(s => schoolCell.includes(s));
      if (!matched) return;

      // 이번 주차 결석 확인
      if (weekColIdx >= 0) {
        const weekVal = (row[weekColIdx] || '').trim();
        const isAbsent = weekVal.includes('결석') || weekVal === 'x' || weekVal === 'X' || weekVal === '×';
        if (!isAbsent) return;
      } else {
        // 주차 컬럼 못 찾으면 '상태' 컬럼으로 fallback
        const colStatus = header.findIndex(h => h === '상태');
        if (colStatus < 0) return;
        const status = (row[colStatus] || '').trim();
        if (!status.includes('결석')) return;
      }

      const name = colName >= 0 ? row[colName] : '';
      const part = colPart >= 0 ? row[colPart] : '';
      if (name) absenceMap[matched].push({ name, part });
    });

    // 각 학교 카드에 결석생 표시
    schools.forEach(school => {
      const listEl = document.getElementById(`absence-list-sheet-${school}`);
      const badgeEl = document.getElementById(`sync-badge-${school}`);
      if (!listEl) return;

      const absentees = absenceMap[school];
      if (absentees.length === 0) {
        listEl.innerHTML = '<span class="absence-empty">이번 주 결석생 없음 ✓</span>';
      } else {
        listEl.innerHTML = absentees.map(a =>
          `<div class="absence-tag">
            <span class="absence-name">${a.name}</span>
            ${a.part ? `<span style="font-size:0.6rem;color:#9ca3af">${a.part}</span>` : ''}
            <span class="absence-hint">→ 다음주 교구 챙기기</span>
          </div>`
        ).join('');
      }

      if (badgeEl) {
        badgeEl.className = 'sheets-sync-badge synced';
        const now = new Date();
        badgeEl.textContent = `✓ 시트 연동 완료 (${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')})`;
      }
    });

  } catch (e) {
    console.warn('결석 시트 연동 실패:', e.message);
    schools.forEach(school => {
      const listEl = document.getElementById(`absence-list-sheet-${school}`);
      const badgeEl = document.getElementById(`sync-badge-${school}`);
      if (listEl) listEl.innerHTML = '<span class="absence-empty">시트 연동 실패 — 수동 입력 이용</span>';
      if (badgeEl) { badgeEl.className = 'sheets-sync-badge error'; badgeEl.textContent = '✗ 연동 실패'; }
    });
  }
}

// 시트 새로고침 버튼 핸들러
function setupSheetsRefreshButton() {
  const btn = document.getElementById('btn-refresh-sheets');
  if (btn) {
    btn.addEventListener('click', async () => {
      btn.textContent = '🔄 연동 중...';
      btn.disabled = true;
      await Promise.all([loadEnrollmentFromSheets(), loadAbsencesFromSheets()]);
      btn.textContent = '🔄 시트 새로고침';
      btn.disabled = false;
    });
  }
}

// ==========================================================================
// ☁️ Firebase 클라우드 동기화 — 모바일·PC 자동 동기화
// ==========================================================================

let _fbApp = null;
let _fbDB = null;
let _fbRef = null;
let _fbIgnore = false; // 내가 저장할 때 리스너 루프 방지

function getCloudSettings() {
  return {
    url: localStorage.getItem('asmanager_fb_url') || '',
    key: localStorage.getItem('asmanager_fb_key') || 'default'
  };
}

function saveCloudSettings(url, key) {
  localStorage.setItem('asmanager_fb_url', url.trim());
  localStorage.setItem('asmanager_fb_key', (key || 'default').trim());
}

function clearCloudSettings() {
  localStorage.removeItem('asmanager_fb_url');
  localStorage.removeItem('asmanager_fb_key');
}

function setCloudStatusUI(status, msg) {
  // 배지 텍스트
  const badgeText = document.querySelector('.badge-text');
  const badgeDot = document.querySelector('.badge-dot');
  if (badgeText) {
    if (status === 'synced') {
      badgeText.textContent = '☁️ 클라우드 동기화됨';
      if (badgeDot) badgeDot.style.backgroundColor = '#2563eb';
    } else if (status === 'connecting') {
      badgeText.textContent = '☁️ 연결 중...';
      if (badgeDot) badgeDot.style.backgroundColor = '#f59e0b';
    } else if (status === 'error') {
      badgeText.textContent = '⚠️ 동기화 오류';
      if (badgeDot) badgeDot.style.backgroundColor = '#dc2626';
    } else {
      badgeText.textContent = '기기 저장소 (내보내기로 동기화)';
      if (badgeDot) badgeDot.style.backgroundColor = '#059669';
    }
  }

  // 모달 상태 행
  const row = document.getElementById('cloud-status-row');
  if (row && msg) {
    row.style.display = 'block';
    if (status === 'synced') {
      row.style.background = 'rgba(5,150,105,0.08)';
      row.style.color = '#047857';
      row.style.border = '1px solid rgba(5,150,105,0.2)';
    } else if (status === 'error') {
      row.style.background = 'rgba(220,38,38,0.07)';
      row.style.color = '#dc2626';
      row.style.border = '1px solid rgba(220,38,38,0.2)';
    } else {
      row.style.background = 'rgba(37,99,235,0.07)';
      row.style.color = '#1d4ed8';
      row.style.border = '1px solid rgba(37,99,235,0.2)';
    }
    row.textContent = msg;
  }

  // 버튼 색
  const cloudBtn = document.getElementById('btn-open-cloud-sync');
  if (cloudBtn) {
    if (status === 'synced') {
      cloudBtn.style.background = 'rgba(37,99,235,0.12)';
      cloudBtn.style.borderColor = 'rgba(37,99,235,0.4)';
      cloudBtn.style.color = '#1d4ed8';
    } else {
      cloudBtn.style.background = '';
      cloudBtn.style.borderColor = '';
      cloudBtn.style.color = '';
    }
  }
}

async function initFirebaseSync(url, key) {
  if (!url) { setCloudStatusUI('off'); return false; }

  setCloudStatusUI('connecting', '연결 중입니다...');
  try {
    // 이미 초기화된 앱 재사용 or 새 초기화
    if (!_fbApp) {
      _fbApp = firebase.initializeApp({ databaseURL: url }, 'afterschool-manager');
    }
    _fbDB = firebase.database(_fbApp);

    const path = `afterschool-manager/${key || 'default'}/data`;
    _fbRef = _fbDB.ref(path);

    // 기존 리스너 제거 후 재등록
    _fbRef.off();

    // 최초 한 번 데이터 읽기 (다른 기기가 더 최신이면 덮어쓰기)
    const snapshot = await _fbRef.get();
    if (snapshot.exists()) {
      const cloud = snapshot.val();
      // 클라우드 데이터가 있으면 로컬보다 우선
      if (cloud.masterKits && cloud.masterKits.length > 0) {
        state.masterKits = cloud.masterKits;
        state.schools = cloud.schools || state.schools;
        state.schedules = cloud.schedules || state.schedules;
        state.inventory = cloud.inventory || state.inventory;
        state.schoolMonthlyPlans = cloud.schoolMonthlyPlans || state.schoolMonthlyPlans;
        localStorage.setItem('afterschool_manager_state', JSON.stringify(state));
        renderDashboard(); renderCalendar(); renderInventory(); renderScheduler();
      }
    } else {
      // 클라우드 비어있으면 현재 로컬 데이터를 클라우드에 업로드
      await _fbRef.set(state);
    }

    // 실시간 리스너 — 다른 기기가 저장하면 즉시 반영
    _fbRef.on('value', (snap) => {
      if (_fbIgnore) return;
      const data = snap.val();
      if (!data || !data.masterKits) return;
      state.masterKits = data.masterKits;
      state.schools = data.schools || state.schools;
      state.schedules = data.schedules || state.schedules;
      state.inventory = data.inventory || state.inventory;
      state.schoolMonthlyPlans = data.schoolMonthlyPlans || state.schoolMonthlyPlans;
      localStorage.setItem('afterschool_manager_state', JSON.stringify(state));
      renderDashboard(); renderCalendar(); renderInventory(); renderScheduler();
      const now = new Date();
      setCloudStatusUI('synced', `✓ 연결됨 · 마지막 동기화 ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`);
    }, (err) => {
      setCloudStatusUI('error', `오류: ${err.message}`);
    });

    setCloudStatusUI('synced', `✓ 클라우드 연결 성공! 이제 모든 기기에서 자동으로 동기화됩니다.`);
    return true;
  } catch (e) {
    setCloudStatusUI('error', `연결 실패: ${e.message} — URL과 키를 확인하세요.`);
    return false;
  }
}

function saveStateToCloud() {
  if (!_fbRef) return;
  _fbIgnore = true;
  _fbRef.set(state).then(() => {
    setTimeout(() => { _fbIgnore = false; }, 1000);
  }).catch(() => { _fbIgnore = false; });
}

function setupCloudSyncModal() {
  const modal = document.getElementById('cloud-sync-modal');
  if (!modal) return;

  const openBtn      = document.getElementById('btn-open-cloud-sync');
  const closeBtn     = document.getElementById('btn-close-cloud-modal');
  const cancelBtn    = document.getElementById('btn-cancel-cloud-modal');
  const cancelBtn2   = document.getElementById('btn-cancel-cloud-modal2');
  const saveBtn      = document.getElementById('btn-save-cloud-settings');
  const disconnectBtn= document.getElementById('btn-disconnect-cloud');
  const changeBtn    = document.getElementById('btn-show-change-form');
  const urlInput     = document.getElementById('firebase-url-input');
  const keyInput     = document.getElementById('firebase-key-input');
  const viewConnected= document.getElementById('cloud-view-connected');
  const viewSetup    = document.getElementById('cloud-view-setup');

  function showConnectedView() {
    const s = getCloudSettings();
    const urlDisplay = document.getElementById('cloud-url-display');
    const keyDisplay = document.getElementById('cloud-key-display');
    // URL 마스킹: 앞부분만 보이기
    if (urlDisplay) urlDisplay.textContent = s.url || '—';
    if (keyDisplay) keyDisplay.textContent = s.key && s.key !== 'default' ? s.key : '기본값';
    if (viewConnected) viewConnected.style.display = 'block';
    if (viewSetup) viewSetup.style.display = 'none';
    document.getElementById('cloud-modal-title').textContent = '☁️ 클라우드 동기화';
  }

  function showSetupView() {
    const s = getCloudSettings();
    if (urlInput) urlInput.value = s.url || '';
    if (keyInput) keyInput.value = (s.key && s.key !== 'default') ? s.key : '';
    const statusRow = document.getElementById('cloud-status-row');
    if (statusRow) statusRow.style.display = 'none';
    if (viewConnected) viewConnected.style.display = 'none';
    if (viewSetup) viewSetup.style.display = 'block';
    document.getElementById('cloud-modal-title').textContent = '☁️ 클라우드 동기화 설정';
  }

  function openModal() {
    const s = getCloudSettings();
    if (s.url) {
      showConnectedView();
    } else {
      showSetupView();
    }
    modal.classList.add('active');
  }

  function closeModal() { modal.classList.remove('active'); }

  if (openBtn)       openBtn.addEventListener('click', openModal);
  if (closeBtn)      closeBtn.addEventListener('click', closeModal);
  if (cancelBtn)     cancelBtn.addEventListener('click', closeModal);
  if (cancelBtn2)    cancelBtn2.addEventListener('click', closeModal);
  if (changeBtn)     changeBtn.addEventListener('click', showSetupView);

  if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
      const url = urlInput ? urlInput.value.trim() : '';
      const key = keyInput ? keyInput.value.trim() : '';
      if (!url) { alert('Firebase 데이터베이스 URL을 입력해 주세요.'); return; }
      if (!url.includes('firebaseio.com')) {
        alert('URL 형식이 올바르지 않습니다.\n예: https://your-project-default-rtdb.firebaseio.com');
        return;
      }
      saveBtn.textContent = '연결 중...';
      saveBtn.disabled = true;

      // 기존 앱 인스턴스 정리 후 재초기화
      if (_fbRef) { _fbRef.off(); _fbRef = null; }
      if (_fbApp) {
        try { await _fbApp.delete(); } catch(e) {}
        _fbApp = null; _fbDB = null;
      }

      saveCloudSettings(url, key);
      const ok = await initFirebaseSync(url, key);
      saveBtn.textContent = '☁️ 연결하기';
      saveBtn.disabled = false;
      if (ok) {
        setTimeout(() => { showConnectedView(); }, 800);
      }
    });
  }

  if (disconnectBtn) {
    disconnectBtn.addEventListener('click', () => {
      if (!confirm('클라우드 동기화를 해제하시겠습니까?\n이 기기는 기기 저장소만 사용합니다.')) return;
      if (_fbRef) { _fbRef.off(); _fbRef = null; }
      if (_fbApp) {
        try { _fbApp.delete(); } catch(e) {}
        _fbApp = null; _fbDB = null;
      }
      clearCloudSettings();
      setCloudStatusUI('off');
      closeModal();
    });
  }
}

// ==========================================================================
// Data Export / Import  (PC ↔ 모바일 데이터 동기화 방법)
// ==========================================================================

function exportData() {
  const dataStr = JSON.stringify(state, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const today = new Date();
  const dateTag = `${today.getFullYear()}${String(today.getMonth()+1).padStart(2,'0')}${String(today.getDate()).padStart(2,'0')}`;
  a.href = url;
  a.download = `afterschool_backup_${dateTag}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  alert('데이터가 백업 파일로 저장되었습니다.\n이 파일을 다른 기기에서 불러오면 데이터가 동기화됩니다.');
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed.masterKits || !parsed.schools) {
        alert('올바른 백업 파일이 아닙니다. 방과후 매니저에서 내보낸 파일을 선택해 주세요.');
        return;
      }
      if (!confirm('현재 저장된 모든 데이터를 불러온 백업 파일로 덮어쓰시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) return;
      state.masterKits = parsed.masterKits || [...defaultMasterKits];
      state.schools = parsed.schools || state.schools;
      state.schedules = parsed.schedules || [];
      state.inventory = parsed.inventory || [];
      state.schoolMonthlyPlans = parsed.schoolMonthlyPlans || {};
      saveState();
      renderDashboard();
      renderCalendar();
      renderInventory();
      renderScheduler();
      alert('데이터를 성공적으로 불러왔습니다!');
    } catch (err) {
      alert('파일을 읽는 중 오류가 발생했습니다. 올바른 JSON 백업 파일인지 확인해 주세요.');
    }
  };
  reader.readAsText(file);
}

function setupDataSyncEventListeners() {
  const exportBtn = document.getElementById('btn-export-data');
  const importInput = document.getElementById('import-data-input');
  const importBtn = document.getElementById('btn-import-data');

  if (exportBtn) {
    exportBtn.addEventListener('click', exportData);
  }
  if (importBtn && importInput) {
    importBtn.addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', (e) => {
      importData(e.target.files[0]);
      e.target.value = '';
    });
  }
}
