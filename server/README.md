# CarWashApp Express Server - Desarrollo

Servidor Express para CarWashApp con autenticación JWT y base de datos PostgreSQL (Neon).

## 🚀 Inicio Rápido

### Prerrequisitos

- **Docker Desktop** (Requerido para desarrollo)
- **Neon DB** (Base de datos PostgreSQL serverless)

### Instalación

#### Opción 1: Script Automático (Recomendado)

```bash
# Windows PowerShell
.\setup-dev.ps1

# Linux/Mac
chmod +x setup-dev.sh
./setup-dev.sh
```

#### Opción 2: Manual

```bash
# 1. Instalar Docker Desktop
# Descargar desde: https://www.docker.com/products/docker-desktop/

# 2. Configurar variables de entorno
cp env.development .env
# Editar .env con tus credenciales de Neon DB

# 3. Ejecutar con Docker
docker-compose up --build
```

### Configuración de Neon DB

1. **Crear cuenta**: https://console.neon.tech/
2. **Crear proyecto**: Seleccionar región cercana
3. **Copiar connection string**: Formato `postgresql://user:pass@host/db?sslmode=require`
4. **Pegar en .env**: `DATABASE_URL=tu_connection_string`

### Configuración de Prisma

```bash
# Generar cliente de Prisma
npm run db:generate

# Crear y aplicar migraciones
npm run db:migrate

# Poblar base de datos con datos de prueba
npm run db:seed

# Abrir Prisma Studio (interfaz visual)
npm run db:studio
```

## 📡 Endpoints Disponibles

### Autenticación (`/api/auth`)

- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/refresh` - Renovar token JWT
- `POST /api/auth/logout` - Cerrar sesión
- `GET /api/auth/profile` - Obtener perfil del usuario autenticado

### Usuarios (`/api/users`)

- `GET /api/users/profile` - Obtener perfil del usuario
- `PUT /api/users/profile` - Actualizar perfil del usuario
- `GET /api/users/bookings` - Obtener reservas del usuario
- `GET /api/users/stats` - Obtener estadísticas del usuario
- `DELETE /api/users/account` - Eliminar cuenta del usuario

### Reservas (`/api/bookings`)

- `GET /api/bookings` - Obtener reservas (próximamente)
- `POST /api/bookings` - Crear nueva reserva (próximamente)
- `PUT /api/bookings/:id` - Actualizar reserva (próximamente)
- `DELETE /api/bookings/:id` - Cancelar reserva (próximamente)

### Lavadores (`/api/washers`)

- `GET /api/washers` - Buscar lavadores cercanos (próximamente)
- `GET /api/washers/:id` - Obtener detalles del lavador (próximamente)

## 🔧 Variables de Entorno

Crea un archivo `.env` basado en `env.development`:

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

## 🐳 Docker para Desarrollo

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

## 📱 Integración con Cliente React Native

### Configurar API Base URL

```typescript
// En tu cliente
const API_BASE_URL = "http://localhost:3000/api";
// Para dispositivo físico: 'http://TU_IP:3000/api'
```

### Ejemplo de Autenticación

```typescript
// Registro
const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  if (result.token) {
    // Guardar token en AsyncStorage
    await AsyncStorage.setItem("authToken", result.token);
  }

  return result;
};

// Login
const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const result = await response.json();

  if (result.token) {
    await AsyncStorage.setItem("authToken", result.token);
  }

  return result;
};
```

### Interceptor de Axios

```typescript
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Interceptor para agregar token automáticamente
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expirado, limpiar storage
      await AsyncStorage.removeItem("authToken");
      // Redirigir a login
    }
    return Promise.reject(error);
  }
);
```

## 🗄️ Estructura de Base de Datos

### Tabla: users

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);
```

### Tabla: bookings (próximamente)

```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  washer_id UUID REFERENCES washers(id),
  service_id UUID REFERENCES services(id),
  scheduled_at TIMESTAMP NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  price DECIMAL(10,2) NOT NULL,
  location JSONB NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 🔒 Seguridad

- **JWT Authentication**: Tokens seguros con expiración
- **Password Hashing**: bcrypt con salt rounds
- **CORS**: Configuración para desarrollo móvil
- **Helmet**: Headers de seguridad
- **Input Validation**: Joi schemas para validación
- **SQL Injection Protection**: Prepared statements con pg

## 📊 Monitoreo

### Health Check

```bash
curl http://localhost:3000/health
```

Respuesta:

```json
{
  "status": "OK",
  "timestamp": "2024-01-20T14:30:00Z",
  "uptime": 3600,
  "environment": "development"
}
```

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Desarrollo con hot reload
npm run build    # Construir TypeScript
npm start        # Iniciar servidor (después de build)
npm test         # Ejecutar tests (próximamente)
```

## 📝 Notas de Desarrollo

- **TypeScript**: Código completamente tipado
- **Hot Reload**: Desarrollo con nodemon
- **Error Handling**: Middleware centralizado
- **Logging**: Logs estructurados
- **CORS abierto**: Para desarrollo móvil sin problemas

## 🤝 Contribuir

1. Fork el proyecto
2. Crear branch para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.
