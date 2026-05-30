@echo off
chcp 65001 > nul
echo ==========================================
echo [방과후 매니저] 깃허브 자동 업데이트 시작...
echo ==========================================
echo.
echo 1. 변경된 파일들을 추가하는 중...
git add .
echo.
echo 2. 업데이트 커밋을 생성하는 중...
git commit -m "Auto update: %date% %time%"
echo.
echo 3. 깃허브로 전송하는 중...
git push origin main
echo.
echo ==========================================
echo 업데이트가 완료되었습니다!
echo ==========================================
pause
