# 🔐 Sistema de Autenticación - CarWashApp

## 📋 Descripción

Sistema de autenticación completo implementado con JWT, bcrypt y Prisma para la aplicación CarWashApp.

## 🏗️ Arquitectura

```
server/src/modules/auth/
├── config/           # Configuración de auth
├── controllers/      # Controladores de endpoints
├── middleware/       # Middleware de autenticación y validación
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
├── types/           # Tipos TypeScript
└── validators/      # Validadores Joi
```

## 🚀 Endpoints Disponibles

### Públicos

- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Login de usuario
- `POST /api/auth/check-email` - Verificar disponibilidad de email
- `GET /api/auth/verify-token` - Verificar token (opcional)

### Protegidos (requieren JWT)

- `POST /api/auth/logout` - Logout
- `GET /api/auth/profile` - Obtener perfil
- `PUT /api/auth/profile` - Actualizar perfil
- `POST /api/auth/change-password` - Cambiar contraseña
- `GET /api/auth/token-info` - Información del token
- `DELETE /api/auth/deactivate` - Desactivar cuenta

## 🔧 Configuración

### Variables de Entorno Requeridas

```env
DATABASE_URL=postgresql://...
JWT_SECRET=tu_jwt_secret_super_seguro
JWT_EXPIRES_IN=7d
BCRYPT_ROUNDS=12
NODE_ENV=development
```

### Configuración de Contraseñas

- Longitud mínima: 8 caracteres
- Longitud máxima: 128 caracteres
- Requiere mayúsculas: ✅
- Requiere minúsculas: ✅
- Requiere números: ✅
- Requiere caracteres especiales: ❌ (opcional)

## 📊 Base de Datos

### Modelo User

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String   // Hasheada con bcrypt
  name      String
  phone     String?
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🛠️ Comandos Útiles

### Desarrollo

```bash
# Instalar dependencias
npm install

# Generar cliente Prisma
npm run db:generate

# Aplicar cambios a la DB
npm run db:push

# Poblar con datos de prueba
npm run db:seed

# Iniciar servidor en desarrollo
npm run dev
```

### Base de Datos

```bash
# Ver datos en Prisma Studio
npm run db:studio

# Crear migración
npm run db:migrate

# Probar conexión
npm run test:db
```

## 🧪 Usuario de Prueba

Después de ejecutar `npm run db:seed`:

- **Email**: `test@example.com`
- **Password**: `password123`

## 📝 Ejemplos de Uso

### Registro

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@ejemplo.com",
    "password": "MiPassword123",
    "name": "Usuario Ejemplo",
    "phone": "+1234567890"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Obtener Perfil (con token)

```bash
curl -X GET http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer TU_JWT_TOKEN_AQUI"
```

## 🔒 Seguridad

### Características Implementadas

- ✅ Contraseñas hasheadas con bcrypt (12 rounds)
- ✅ JWT con expiración configurable
- ✅ Validación de entrada con Joi
- ✅ Rate limiting en endpoints críticos
- ✅ Sanitización de datos de entrada
- ✅ Validación de formato de email
- ✅ Middleware de autenticación
- ✅ Manejo de errores estructurado

### Rate Limiting

- **Login**: 5 intentos por 15 minutos
- **Registro**: 3 intentos por hora
- **Verificación de email**: 10 intentos por 5 minutos

## 🐛 Debugging

### Endpoints de Debug (solo desarrollo)

- `GET /api/auth/debug/user` - Información del usuario autenticado
- `GET /api/auth/debug/token` - Información detallada del token

### Logs

El sistema incluye logging detallado para:

- Intentos de login fallidos
- Errores de autenticación
- Requests autenticados (opcional)

## 🔄 Flujo de Autenticación

1. **Registro**: Usuario se registra → Contraseña se hashea → Usuario se guarda en DB → JWT se genera
2. **Login**: Usuario ingresa credenciales → Se verifica contraseña → JWT se genera
3. **Requests Protegidos**: Cliente envía JWT en header → Servidor verifica token → Acceso permitido
4. **Logout**: Cliente elimina token localmente (JWT es stateless)

## 📱 Integración con Cliente

El cliente debe:

1. Enviar JWT en header `Authorization: Bearer <token>`
2. Manejar respuestas de error (401, 403, etc.)
3. Renovar token cuando esté próximo a expirar
4. Implementar logout local

## 🚨 Códigos de Error

- `AUTH_REQUIRED` - Token requerido
- `INVALID_TOKEN` - Token inválido o expirado
- `INVALID_CREDENTIALS` - Credenciales incorrectas
- `EMAIL_EXISTS` - Email ya registrado
- `VALIDATION_ERROR` - Error de validación
- `RATE_LIMIT_EXCEEDED` - Límite de requests excedido
- `ACCOUNT_DEACTIVATED` - Cuenta desactivada

## 🔧 Personalización

### Cambiar Configuración de Contraseñas

Editar `server/src/modules/auth/config/auth.config.ts`:

```typescript
export const passwordConfig = {
  minLength: 8,
  requireUppercase: true,
  requireNumbers: true,
  // ... más opciones
};
```

### Cambiar Expiración de JWT

Editar variable de entorno:

```env
JWT_EXPIRES_IN=7d  # 7 días, 1h, 30m, etc.
```

### Agregar Validaciones Personalizadas

Editar `server/src/modules/auth/validators/auth.validators.ts` y agregar nuevos esquemas Joi.

## 📈 Próximas Mejoras

- [ ] Refresh tokens
- [ ] Sistema de roles y permisos
- [ ] 2FA (Two-Factor Authentication)
- [ ] OAuth con Google/Facebook
- [ ] Blacklist de tokens para logout
- [ ] Auditoría de login
- [ ] Notificaciones de seguridad
