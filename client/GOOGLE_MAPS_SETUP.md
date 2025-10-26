# Google Maps Setup para CarWashApp

## 📍 Configuración de Google Maps API

Para que el mapa funcione correctamente, necesitas configurar una API key de Google Maps.

### 1. Obtener API Key de Google Maps

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita las siguientes APIs:
   - **Maps SDK for Android**
   - **Maps SDK for iOS**
   - **Geocoding API**
   - **Places API** (opcional, para búsquedas futuras)

### 2. Crear API Key

1. Ve a "APIs & Services" > "Credentials"
2. Haz clic en "Create Credentials" > "API Key"
3. Copia tu API key

### 3. Configurar en la App

1. Abre `src/constants/maps.ts`
2. Reemplaza `"YOUR_GOOGLE_MAPS_API_KEY"` con tu API key real:

```typescript
export const GOOGLE_MAPS_API_KEY = "tu_api_key_aqui";
```

3. Abre `app.json`
4. Reemplaza `"YOUR_GOOGLE_MAPS_API_KEY"` en las secciones de iOS y Android:

```json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "tu_api_key_aqui"
      }
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "tu_api_key_aqui"
        }
      }
    }
  }
}
```

### 4. Restricciones de Seguridad (Recomendado)

Para mayor seguridad, configura restricciones en tu API key:

1. **Restricciones de aplicación**:

   - Android: Agrega tu package name (`com.tuapp.carwashapp`)
   - iOS: Agrega tu bundle identifier

2. **Restricciones de API**:
   - Limita solo a las APIs que necesitas

### 5. Probar la Configuración

1. Ejecuta `npx expo start`
2. Abre la app en un dispositivo físico (no simulador)
3. Verifica que el mapa se carga correctamente
4. Prueba la funcionalidad de ubicación

## 🔧 Solución de Problemas

### Error: "Unable to resolve react-native-maps"

```bash
npx expo install react-native-maps
```

### Error: "Google Maps API key not found"

- Verifica que la API key esté configurada correctamente
- Asegúrate de que las APIs estén habilitadas en Google Cloud Console

### Error: "Location permission denied"

- La app solicitará permisos automáticamente
- En iOS, verifica que `NSLocationWhenInUseUsageDescription` esté en `app.json`

## 📱 Permisos Requeridos

La app solicita automáticamente los siguientes permisos:

- **Android**: `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`
- **iOS**: `NSLocationWhenInUseUsageDescription`

## 🚀 Funcionalidades Implementadas

- ✅ Mapa interactivo con Google Maps
- ✅ Geolocalización del usuario
- ✅ Botón de ubicación actual
- ✅ Soporte para tema claro/oscuro
- ✅ Diferentes tamaños de mapa
- ✅ Manejo de errores y permisos




























