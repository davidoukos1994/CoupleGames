@echo off
chcp 65001 >nul
python update_library.py
if errorlevel 1 py update_library.py
