@echo off
REM T-Logical HR System - Cypress Test Runner
REM This batch file runs all Cypress tests and generates a report

echo.
echo ================================
echo T-Logical HR System Test Suite
echo ================================
echo.

REM Install dependencies if needed
echo Installing dependencies...
call npm install

REM Run Cypress tests
echo.
echo Running Cypress tests...
call npx cypress run --headless --browser chrome

REM Generate Excel report
echo.
echo Generating Excel report...
call npm run generate-report

echo.
echo ================================
echo Tests completed!
echo Report generated in: cypress/reports/
echo ================================
echo.
pause
