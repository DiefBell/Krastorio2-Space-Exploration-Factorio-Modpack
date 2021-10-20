TITLE Factorio Mod Folder Symlink
ECHO Creating Symlink between dist folder and Factorio mods folder.

FOR /F "tokens=*" %%a in ('dir dist /a:d /b') do SET FOLDER=%%a

mklink /J "%APPDATA%\Factorio\mods\%FOLDER%" "%CD%\dist\%FOLDER%"
PAUSE