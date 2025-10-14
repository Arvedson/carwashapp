# CarWashApp Mock Server

Servidor mock para desarrollo de CarWashApp usando JSON Server.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias (ya hecho)
npm install

# Iniciar servidor de desarrollo
npm run dev

# O iniciar servidor normal
npm start
```

## 📡 Endpoints Disponibles

El servidor estará disponible en `http://localhost:3000`

### 🔍 Consultas (GET)

- `GET /users` - Lista de usuarios
- `GET /locations` - Ubicaciones guardadas
- `GET /carwashes` - Lista de carwashes
- `GET /services` - Servicios solicitados
- `GET /reviews` - Reseñas
- `GET /notifications` - Notificaciones

### 📝 Crear (POST)

- `POST /users` - Crear usuario
- `POST /locations` - Guardar ubicación
- `POST /carwashes` - Agregar carwash
- `POST /services` - Solicitar servicio
- `POST /reviews` - Crear reseña
- `POST /notifications` - Crear notificación

### ✏️ Actualizar (PUT)

- `PUT /users/:id` - Actualizar usuario
- `PUT /locations/:id` - Actualizar ubicación
- `PUT /carwashes/:id` - Actualizar carwash
- `PUT /services/:id` - Actualizar servicio

### 🗑️ Eliminar (DELETE)

- `DELETE /users/:id` - Eliminar usuario
- `DELETE /locations/:id` - Eliminar ubicación
- `DELETE /carwashes/:id` - Eliminar carwash
- `DELETE /services/:id` - Eliminar servicio

## 📱 Integración con Cliente React Native

### Configurar API Base URL

```typescript
// En tu cliente
const API_BASE_URL = "http://localhost:3000";
// Para dispositivo físico: 'http://TU_IP:3000'
```

### Ejemplos de uso

```typescript
// Obtener carwashes cercanos
const response = await fetch(`${API_BASE_URL}/carwashes`);
const carwashes = await response.json();

// Enviar ubicación actual
const locationData = {
  userId: 1,
  latitude: 37.78825,
  longitude: -122.4324,
  address: "San Francisco, CA",
};
await fetch(`${API_BASE_URL}/locations`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(locationData),
});
```

## 🗄️ Estructura de Datos

### Users

```json
{
  "id": 1,
  "email": "test@example.com",
  "name": "Usuario Test",
  "phone": "+1234567890",
  "createdAt": "2024-01-15T10:30:00Z",
  "isActive": true
}
```

### Locations

```json
{
  "id": 1,
  "userId": 1,
  "latitude": 37.78825,
  "longitude": -122.4324,
  "address": "San Francisco, CA 94102",
  "city": "San Francisco",
  "state": "California",
  "country": "USA",
  "accuracy": 10.5,
  "timestamp": "2024-01-20T14:30:00Z",
  "isCurrent": true
}
```

### CarWashes

```json
{
  "id": 1,
  "name": "Quick Wash Express",
  "description": "Lavado rápido y eficiente",
  "location": {
    "latitude": 37.78825,
    "longitude": -122.4324,
    "address": "123 Market St, San Francisco, CA 94102"
  },
  "services": [
    {
      "id": 1,
      "name": "Lavado Básico",
      "price": 15.0,
      "duration": 30,
      "isAvailable": true
    }
  ],
  "status": "available",
  "rating": 4.5,
  "reviews": 127
}
```

## 🔧 Comandos Útiles

```bash
# Ver logs del servidor
npm run dev

# Reiniciar servidor
Ctrl + C
npm run dev

# Ver datos en navegador
http://localhost:3000
```

## 📝 Notas de Desarrollo

- Los datos se guardan en `db.json`
- El servidor se reinicia automáticamente al cambiar `db.json`
- CORS está habilitado por defecto
- Perfecto para desarrollo y testing

