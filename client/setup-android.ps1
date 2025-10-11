# Script para configurar Android SDK en Windows
# Ejecutar como administrador en PowerShell

Write-Host "🔧 Configurando Android SDK..." -ForegroundColor Green

# Configurar ANDROID_HOME
$androidHome = "$env:USERPROFILE\AppData\Local\Android\Sdk"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $androidHome, "User")

# Agregar al PATH
$currentPath = [Environment]::GetEnvironmentVariable("PATH", "User")
$newPath = "$currentPath;$androidHome\platform-tools;$androidHome\tools;$androidHome\tools\bin"
[Environment]::SetEnvironmentVariable("PATH", $newPath, "User")

Write-Host "✅ Variables de entorno configuradas" -ForegroundColor Green
Write-Host "ANDROID_HOME: $androidHome" -ForegroundColor Yellow
Write-Host "PATH actualizado con platform-tools" -ForegroundColor Yellow

Write-Host "`n🔄 Reinicia la terminal y ejecuta:" -ForegroundColor Cyan
Write-Host "npm run android" -ForegroundColor White

Write-Host "`n📱 Alternativa sin Android SDK:" -ForegroundColor Cyan
Write-Host "1. Instala Expo Go en tu dispositivo Android" -ForegroundColor White
Write-Host "2. Ejecuta: npm run tunnel" -ForegroundColor White
Write-Host "3. Escanea el código QR" -ForegroundColor White
