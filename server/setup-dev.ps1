# Script de setup para desarrollo con Docker en Windows PowerShell
# Ejecutar después de instalar Docker Desktop

Write-Host "🚀 Configurando entorno de desarrollo para CarWash API..." -ForegroundColor Green

# Verificar que Docker esté instalado
try {
    docker --version | Out-Null
    Write-Host "✅ Docker está instalado" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker no está instalado. Por favor instala Docker Desktop primero." -ForegroundColor Red
    Write-Host "📥 Descarga desde: https://www.docker.com/products/docker-desktop/" -ForegroundColor Yellow
    exit 1
}

# Verificar que Docker esté corriendo
try {
    docker info | Out-Null
    Write-Host "✅ Docker está corriendo" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker no está corriendo. Por favor inicia Docker Desktop." -ForegroundColor Red
    exit 1
}

# Crear archivo .env si no existe
if (-not (Test-Path ".env")) {
    Write-Host "📝 Creando archivo .env..." -ForegroundColor Yellow
    Copy-Item "env.development" ".env"
    Write-Host "⚠️  IMPORTANTE: Edita el archivo .env con tus credenciales de Neon DB" -ForegroundColor Yellow
    Write-Host "🔗 Obtén tu connection string de: https://console.neon.tech/" -ForegroundColor Cyan
} else {
    Write-Host "✅ Archivo .env ya existe" -ForegroundColor Green
}

# Construir y ejecutar
Write-Host "🏗️ Construyendo y ejecutando servidor..." -ForegroundColor Yellow
docker-compose up --build

Write-Host "🎉 Setup completado!" -ForegroundColor Green
Write-Host "🔗 Servidor disponible en: http://localhost:3000" -ForegroundColor Cyan
Write-Host "📚 Health check: http://localhost:3000/health" -ForegroundColor Cyan
Write-Host "🔑 API endpoints: http://localhost:3000/api" -ForegroundColor Cyan