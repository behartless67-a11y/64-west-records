@echo off
echo ======================================
echo   64 West Records Local Server
echo ======================================
echo.
echo Starting server on http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
