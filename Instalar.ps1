$ErrorActionPreference = 'Stop'
try {
 $dest = Join-Path $env:LOCALAPPDATA 'EnglishCoachGratuito'
 New-Item -ItemType Directory -Path $dest -Force | Out-Null
 foreach ($name in @('index.html','app.js','course.js','family.js','icon.ico','icon-192.png','icon-512.png','manifest.webmanifest','sw.js','LEIA-ME.txt')) { Copy-Item -LiteralPath (Join-Path $PSScriptRoot $name) -Destination (Join-Path $dest $name) -Force }
 $candidates = @((Join-Path $env:ProgramFiles 'Google\Chrome\Application\chrome.exe'),(Join-Path ${env:ProgramFiles(x86)} 'Google\Chrome\Application\chrome.exe'),(Join-Path $env:LOCALAPPDATA 'Google\Chrome\Application\chrome.exe'),(Join-Path ${env:ProgramFiles(x86)} 'Microsoft\Edge\Application\msedge.exe'),(Join-Path $env:ProgramFiles 'Microsoft\Edge\Application\msedge.exe'))
 $browser = $candidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
 if (-not $browser) { throw 'Chrome ou Edge não encontrado. Abra index.html manualmente nesta pasta.' }
 $shell = New-Object -ComObject WScript.Shell
 $link = $shell.CreateShortcut((Join-Path ([Environment]::GetFolderPath('Desktop')) 'English Coach Gratuito.lnk'))
 $link.TargetPath = $browser
 $appUrl = ([System.Uri](Join-Path $dest 'index.html')).AbsoluteUri
 $link.Arguments = '--app="' + $appUrl + '"'
 $link.WorkingDirectory = $dest
 $link.IconLocation = (Join-Path $dest 'icon.ico') + ',0'
 $link.Save()
 Add-Type -AssemblyName System.Windows.Forms
 [System.Windows.Forms.MessageBox]::Show('Instalado! Use o ícone English Coach Gratuito na área de trabalho.','English Coach') | Out-Null
 Start-Process -FilePath $browser -ArgumentList $link.Arguments
} catch {
 Add-Type -AssemblyName System.Windows.Forms
 [System.Windows.Forms.MessageBox]::Show($_.Exception.Message,'Instalação não concluída') | Out-Null
}
