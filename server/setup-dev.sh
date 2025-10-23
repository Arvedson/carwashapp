#!/bin/bash

# Script de setup para desarrollo con Docker
# Ejecutar después de instalar Docker Desktop

set -e

echo "🚀 Configurando entorno de desarrollo para CarWash API..."

# Verificar que Docker esté instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker no está instalado. Por favor instala Docker Desktop primero."
    echo "📥 Descarga desde: https://www.docker.com/products/docker-desktop/"
    exit 1
fi

# Verificar que Docker esté corriendo
if ! docker info &> /dev/null; then
    echo "❌ Docker no está corriendo. Por favor inicia Docker Desktop."
    exit 1
fi

echo "✅ Docker está instalado y corriendo"

# Crear archivo .env si no existe
if [ ! -f .env ]; then
    echo "📝 Creando archivo .env..."
    cp env.development .env
    echo "⚠️  IMPORTANTE: Edita el archivo .env con tus credenciales de Neon DB"
    echo "🔗 Obtén tu connection string de: https://console.neon.tech/"
else
    echo "✅ Archivo .env ya existe"
fi

# Construir y ejecutar
echo "🏗️ Construyendo y ejecutando servidor..."
docker-compose up --build

echo "🎉 Setup completado!"
echo "🔗 Servidor disponible en: http://localhost:3000"
echo "📚 Health check: http://localhost:3000/health"
echo "🔑 API endpoints: http://localhost:3000/api"