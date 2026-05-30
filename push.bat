@echo off
echo ==========================================
echo [Afterschool Manager] GitHub Auto Update...
echo ==========================================
echo.
echo 1. Staging modified files...
git add .
echo.
echo 2. Creating commit...
git commit -m "Auto update: %date% %time%"
echo.
echo 3. Pushing to GitHub...
git push origin main
echo.
echo ==========================================
echo Update completed successfully!
echo ==========================================
pause
