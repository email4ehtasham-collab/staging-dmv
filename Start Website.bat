@echo off
setlocal
cd /d "%~dp0"
title DMV-GC Website
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve-static.ps1"
if errorlevel 1 pause
