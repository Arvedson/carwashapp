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