# 🐳 Docker Setup para CarWash Express Server - Desarrollo

## Comandos para ejecutar el servidor

### Opción 1: Docker Compose (Recomendado)

```bash
# Construir y ejecutar
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Opción 2: Docker directo

```bash
# Construir imagen
docker build -t carwash-server .

# Ejecutar contenedor
docker run -p 3000:3000 \
  -e DATABASE_URL=your_database_url \
  -e JWT_SECRET=your_jwt_secret \
  --name carwash-api carwash-server

# Ejecutar en segundo plano
docker run -d -p 3000:3000 \
  -e DATABASE_URL=your_database_url \
  -e JWT_SECRET=your_jwt_secret \
  --name carwash-api carwash-server

# Ver logs
docker logs -f carwash-api

# Detener
docker stop carwash-api
docker rm carwash-api
```

## URLs de acceso

- **API Base**: `http://localhost:3000/api`
- **Health Check**: `http://localhost:3000/health`
- **Documentación**: `http://localhost:3000/api` (ver endpoints disponibles)

## Variables de entorno requeridas

Crea un archivo `.env` en el directorio server:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@host:port/database

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# Server Configuration
NODE_ENV=development
PORT=3000

# CORS Configuration
CORS_ORIGIN=*
```

## Para desarrollo

El docker-compose.yml está configurado para desarrollo con:

- **Hot Reload**: Los cambios en `src/` se reflejan automáticamente
- **Volume Mounting**: Código fuente montado para desarrollo
- **Environment Variables**: Variables de entorno para desarrollo
- **CORS abierto**: Para desarrollo móvil sin problemas

```bash
# Usar el script de desarrollo
docker-compose up --build
```

## Estructura del Dockerfile

```dockerfile
# Usar imagen oficial de Node.js en Ubuntu (mejor compatibilidad)
FROM node:18-slim

# Instalar dependencias del sistema necesarias
RUN apt-get update && apt-get install -y \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto de archivos
COPY . .

# Generar cliente de Prisma
RUN npx prisma generate

# Exponer el puerto
EXPOSE 3000

# Comando para desarrollo
CMD ["npm", "run", "dev"]
```

## Ventajas de este setup

✅ **Entorno Linux**: Simula exactamente el servidor de producción
✅ **Aislamiento**: No contamina tu sistema
✅ **Portabilidad**: Mismo código funciona en cualquier lugar
✅ **Consistencia**: Mismo entorno en desarrollo
✅ **TypeScript**: Compilación automática en el contenedor
✅ **Hot Reload**: Cambios se reflejan automáticamente
✅ **CORS abierto**: Para desarrollo móvil sin problemas

## Troubleshooting

### Error de conexión a base de datos

```bash
# Verificar que DATABASE_URL esté configurado
docker-compose logs carwash-server

# Verificar conectividad
docker exec -it carwash-api-dev ping your-db-host
```

### Error de permisos

```bash
# Reconstruir con permisos correctos
docker-compose down
docker-compose up --build --force-recreate
```

### Puerto ya en uso

```bash
# Cambiar puerto en docker-compose.yml
ports:
  - "3001:3000"  # Usar puerto 3001 en lugar de 3000
```

## Comandos útiles

```bash
# Ver logs en tiempo real
docker-compose logs -f carwash-server

# Ejecutar comandos dentro del contenedor
docker-compose exec carwash-server sh

# Reiniciar solo el servicio
docker-compose restart carwash-server

# Ver estado de los contenedores
docker-compose ps

# Limpiar contenedores e imágenes
docker-compose down --rmi all --volumes --remove-orphans
```
