# HomeScreen Component

## 📋 Descripción

El `HomeScreen` es el componente principal de la aplicación CarWashApp. Actúa como un "Smart Hub" que centraliza toda la lógica de negocio para la solicitud de servicios de lavado de autos. Este componente maneja el estado global de la aplicación, la interacción del usuario y la coordinación entre diferentes secciones.

## 🏗️ Arquitectura

### Arquitectura de Componentes

```
HomeScreen (Smart Hub)
├── HeaderSection (Organismo)
├── RequestCard (Organismo)
│   ├── VehicleSelector (Molécula)
│   ├── DirtLevelSlider (Molécula)
│   ├── TimeChoiceChips (Molécula)
│   └── SearchButton (Molécula)
├── QuickAccessSection (Organismo)
├── PromotionsSection (Organismo)
└── DatePickerModal (Organismo)
```

### Arquitectura de Lógica de Búsqueda (REFACTORIZADA)

```
HomeScreen
├── useSearch (Hook Principal)
│   ├── useSearchData (Construcción de datos)
│   └── searchService (Comunicación con API)
├── types/search.ts (Tipos centralizados)
├── types/validation.ts (Validaciones)
├── types/config.ts (Configuraciones)
└── types/analytics.ts (Analytics)
```

## 📦 Props

### Props del Componente

```typescript
// El HomeScreen no recibe props externos
// Es un componente de página que maneja su propio estado
const HomeScreen: React.FC = () => { ... }
```

### Props Internos (Estado)

```typescript
// Estado de ubicación
const [currentLocation, setCurrentLocation] = useState<Location | null>(null);

// Estado de selecciones del usuario
const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(
  null
);
const [selectedDirtLevel, setSelectedDirtLevel] = useState<DirtLevel | null>(
  null
);
const [selectedTimeChoice, setSelectedTimeChoice] = useState<TimeChoice | null>(
  null
);
const [scheduledDate, setScheduledDate] = useState<Date | null>(null);

// Estado de UI
const [showDatePicker, setShowDatePicker] = useState(false);
const [isLoading, setIsLoading] = useState(false);
```

## 🎯 Tipos de Datos

### Tipos Importados

```typescript
import {
  VehicleType, // Tipo de vehículo
  DirtLevel, // Nivel de suciedad
  TimeChoice, // Opción de tiempo
  RecentWash, // Lavado reciente
  FavoriteLocation, // Ubicación favorita
  Promotion, // Promoción
  TrustFeature, // Característica de confianza
  Location, // Ubicación geográfica
} from "@/types";
```

### Tipos de Datos Mock

```typescript
// Vehículos disponibles
const vehicles: VehicleType[] = [
  {
    id: "sedan",
    name: "Sedán",
    icon: "🚗",
    description: "Automóvil de 4 puertas",
  },
  {
    id: "suv",
    name: "SUV",
    icon: "🚙",
    description: "Vehículo utilitario deportivo",
  },
  { id: "van", name: "Van", icon: "🚐", description: "Vehículo de pasajeros" },
  {
    id: "pickup",
    name: "Pickup",
    icon: "🛻",
    description: "Camioneta de carga",
  },
];

// Niveles de suciedad
const dirtLevels: DirtLevel[] = [
  { id: "clean", name: "Limpio", level: 1, color: "#4CAF50", icon: "💧" },
  { id: "moderate", name: "Moderado", level: 2, color: "#FF9800", icon: "🧽" },
  { id: "dirty", name: "Sucio", level: 3, color: "#FF5722", icon: "🫧" },
  {
    id: "very_dirty",
    name: "Muy Sucio",
    level: 4,
    color: "#F44336",
    icon: "🌊",
  },
];

// Opciones de tiempo
const timeChoices: TimeChoice[] = [
  { id: "now", label: "Ahora", value: "now", icon: "⚡" },
  { id: "schedule", label: "Programar", value: "schedule", icon: "📅" },
];
```

## 🔄 Flujo de Ejecución

### 1. Inicialización

```typescript
// 1. El componente se monta
// 2. Se inicializa el estado con valores null
// 3. Se cargan los datos mock (vehículos, niveles de suciedad, etc.)
// 4. Se renderiza la UI inicial
```

### 2. Interacciones del Usuario

#### A. Selección de Vehículo

```typescript
handleVehicleSelect(vehicle: VehicleType) → setSelectedVehicle(vehicle)
```

#### B. Selección de Nivel de Suciedad

```typescript
handleDirtLevelSelect(level: DirtLevel) → setSelectedDirtLevel(level)
```

#### C. Selección de Tiempo

```typescript
handleTimeChoiceSelect(choice: TimeChoice) → setSelectedTimeChoice(choice)
```

#### D. Programación de Fecha

```typescript
handleSchedulePress() → setShowDatePicker(true)
handleDateSelect(date: Date) → setScheduledDate(date)
handleCloseDatePicker() → setShowDatePicker(false)
```

### 3. Búsqueda de Lavadores

```typescript
handleSearch() → {
  1. setIsLoading(true)
  2. Prepara datos de búsqueda
  3. Logs estructurados para backend
  4. Simula llamada API (2 segundos)
  5. setIsLoading(false)
  6. TODO: Navegar a resultados
}
```

### 4. Datos de Búsqueda Enviados al Backend

```typescript
const searchData = {
  // Datos de búsqueda
  vehicle: selectedVehicle,
  dirtLevel: selectedDirtLevel,
  timeChoice: selectedTimeChoice,
  scheduledDate: scheduledDate,

  // Ubicación del usuario
  userLocation: currentLocation,

  // Metadatos
  searchTimestamp: new Date().toISOString(),
  userId: user?.id,

  // Configuración
  searchRadius: 10, // km
  maxResults: 20,
  includeUnavailable: false,

  // Filtros
  minRating: 4.0,
  maxPrice: 1000, // pesos
  verifiedOnly: true,
};
```

## 🎨 Componentes Hijos

### HeaderSection

- **Propósito**: Muestra saludo del usuario y botón de perfil
- **Props**: `user`, `onProfilePress`

### RequestCard

- **Propósito**: Formulario principal de solicitud de servicio
- **Props**:
  - `vehicles`, `selectedVehicle`, `onVehicleSelect`
  - `dirtLevels`, `selectedDirtLevel`, `onDirtLevelSelect`
  - `timeChoices`, `selectedTimeChoice`, `onTimeChoiceSelect`
  - `scheduledDate`, `onSchedulePress`
  - `onSearch`, `isLoading`

### QuickAccessSection

- **Propósito**: Accesos rápidos a funcionalidades
- **Props**: `onRepeatWash`, `onSelectLocation`, `favoriteLocations`

### PromotionsSection

- **Propósito**: Muestra promociones activas
- **Props**: `promotions`

### DatePickerModal

- **Propósito**: Modal para selección de fecha y hora
- **Props**: `visible`, `onClose`, `onDateSelect`, `selectedDate`

## 🔧 Hooks Utilizados

### useAuthStore

```typescript
const { user, logout } = useAuthStore();
// Maneja autenticación del usuario
```

### useTheme

```typescript
const { theme } = useTheme();
// Proporciona tema actual (claro/oscuro)
```

### useSearch

```typescript
const {
  searchData, // Datos de búsqueda construidos
  isSearchReady, // Si la búsqueda está lista para ejecutarse
  isLoading, // Estado de carga
  error, // Error actual (si existe)
  lastSearchResults, // Últimos resultados de búsqueda
  searchWashers, // Función para ejecutar búsqueda
  clearError, // Función para limpiar errores
  resetSearch, // Función para resetear búsqueda
} = useSearch({
  selectedVehicle,
  selectedDirtLevel,
  selectedTimeChoice,
  scheduledDate,
  currentLocation,
  userId: user?.id,
  useSimulation: true, // Cambiar a false en producción
});
```

### useState

```typescript
// Maneja estado local del componente (solo UI y selecciones)
const [state, setState] = useState<Type>(initialValue);
```

## 📱 Responsabilidades

### ✅ Lo que SÍ hace

- **UI y Coordinación**: Renderiza componentes y coordina interacciones
- **Estado de Selecciones**: Maneja selecciones del usuario (vehículo, suciedad, tiempo)
- **Gestión de Modales**: Controla DatePickerModal y otros modales
- **Integración de Hooks**: Usa useSearch para toda la lógica de búsqueda
- **Logging y Debug**: Proporciona logs estructurados para debugging
- **Manejo de Errores**: Coordina la visualización de errores de búsqueda

### ❌ Lo que NO hace (REFACTORIZADO)

- ~~Maneja lógica de búsqueda~~ → **Delegado a useSearch**
- ~~Prepara datos para backend~~ → **Delegado a useSearchData**
- ~~Hace llamadas a APIs~~ → **Delegado a searchService**
- ~~Valida datos de búsqueda~~ → **Delegado a searchService**
- No maneja navegación (se delega al AppNavigator)
- No maneja persistencia de datos (se delega al store)
- No renderiza componentes de bajo nivel (atoms)

## 🚀 Extensibilidad

### Para Agregar Nuevas Funcionalidades

1. **Nuevo Estado**: Agregar `useState` correspondiente
2. **Nuevo Handler**: Crear función `handleXxx`
3. **Nuevo Componente**: Importar y renderizar
4. **Nuevos Datos**: Agregar al objeto `searchData`

### Para Modificar el Flujo

1. **Modificar Handlers**: Actualizar lógica de `handleXxx`
2. **Agregar Validaciones**: En `handleSearch` antes de enviar
3. **Nuevos Logs**: Agregar `console.log` estructurados
4. **Nueva Navegación**: Implementar en `handleSearch`

## 🐛 Debugging

### Logs Disponibles

```typescript
// Logs de interacción
console.log("Location button pressed");
console.log("Schedule pressed");
console.log("Date selected:", date);

// Logs de búsqueda
console.log("🔍 Searching for washers...", searchData);
console.log("📍 User location:", currentLocation);
console.log("🚗 Selected vehicle:", selectedVehicle);
console.log("🧽 Dirt level:", selectedDirtLevel);
console.log("⏰ Time choice:", selectedTimeChoice);
console.log("📅 Scheduled date:", scheduledDate);
console.log("✅ Search completed - Results would be sent to backend");
```

### Estado para Debugging

```typescript
// Verificar estado actual
console.log("Current state:", {
  currentLocation,
  selectedVehicle,
  selectedDirtLevel,
  selectedTimeChoice,
  scheduledDate,
  showDatePicker,
  isLoading,
});
```

## 📚 Dependencias

### Internas

- `@/store/useAuthStore` - Estado de autenticación
- `@/contexts/ThemeContext` - Contexto de tema
- `@/themes/screens/HomeScreen.styles` - Estilos
- `@/types` - Tipos de datos
- `@/components/organisms/*` - Componentes hijos
- `@/hooks/useSearch` - Hook principal de búsqueda (NUEVO)
- `@/services/searchService` - Servicio de búsqueda (NUEVO)

### Externas

- `react` - Hooks y funcionalidad base
- `react-native` - Componentes nativos
- `react-native-safe-area-context` - SafeAreaView

### Tipos

- `types/search.ts` - Tipos centralizados de búsqueda
- `types/validation.ts` - Tipos de validación
- `types/config.ts` - Tipos de configuración
- `types/analytics.ts` - Tipos de analytics

### Hooks

- `hooks/useSearchData.ts` - Hook para construir datos de búsqueda
- `hooks/useSearch.ts` - Hook principal de búsqueda

### Servicios

- `services/searchService.ts` - Servicio para comunicación con API

## 🔄 Ciclo de Vida

1. **Mount**: Inicialización de estado y datos mock
2. **Update**: Re-renderizado cuando cambia el estado
3. **Unmount**: Limpieza automática (no requiere cleanup manual)

## 💡 Mejores Prácticas

1. **Estado Centralizado**: Todo el estado relacionado está en este componente
2. **Handlers Específicos**: Cada interacción tiene su propio handler
3. **Logs Estructurados**: Fácil debugging y monitoreo
4. **Separación de Responsabilidades**: UI vs Lógica vs Datos
5. **Tipado Fuerte**: Todos los datos están tipados
6. **Mock Data**: Datos de prueba bien estructurados
7. **Preparación para Backend**: Datos listos para APIs reales

## 🚀 Beneficios de la Refactorización

### ✅ Antes vs Después

| Aspecto                | Antes                           | Después                          |
| ---------------------- | ------------------------------- | -------------------------------- |
| **Lógica de Búsqueda** | 50+ líneas en HomeScreen        | Delegada a hooks especializados  |
| **Tipos**              | Dispersos en smartHub.ts        | Centralizados en types/search.ts |
| **Validación**         | Inline en handleSearch          | Delegada a searchService         |
| **Reutilización**      | Lógica acoplada al componente   | Hooks reutilizables              |
| **Testing**            | Difícil testear lógica mixta    | Hooks y servicios testables      |
| **Mantenimiento**      | Cambios en múltiples lugares    | Cambios centralizados            |
| **Escalabilidad**      | Difícil agregar funcionalidades | Fácil extensión                  |

### 🎯 Beneficios Específicos

1. **Separación Clara**: UI separada de lógica de negocio
2. **Reutilización**: useSearch se puede usar en otros componentes
3. **Testabilidad**: Cada hook y servicio se puede testear independientemente
4. **Mantenibilidad**: Cambios en lógica de búsqueda en un solo lugar
5. **Escalabilidad**: Fácil agregar nuevos tipos de búsqueda
6. **Type Safety**: Tipos centralizados y consistentes
7. **Debugging**: Logs estructurados y separados por responsabilidad
