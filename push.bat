@echo off
chcp 65001 >nul
echo ==========================================
echo [방과후 매니저] GitHub 업로드
echo ==========================================
echo.

:: 변경된 파일 목록 표시
echo [변경된 파일]
git status --short
echo.

:: 커밋 메시지 입력 받기
set /p MSG="커밋 메시지 입력 (엔터 = 날짜 자동): "
if "%MSG%"=="" set MSG=업데이트: %date% %time%

echo.
echo 1. 파일 스테이징...
git add app.js index.html styles.css CLAUDE.md .gitignore .claude/
echo.
echo 2. 커밋 생성...
git commit -m "%MSG%"
echo.
echo 3. GitHub 푸시...
git push origin main
echo.
echo ==========================================
echo 완료! GitHub Pages에 반영되는 데 1-2분 소요됩니다.
echo ==========================================
pause
