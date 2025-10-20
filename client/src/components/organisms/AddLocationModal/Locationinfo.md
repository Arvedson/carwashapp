# 🗺️ Location Management System

Sistema completo de gestión de ubicaciones favoritas para la aplicación de lavado de autos.

## 📋 Componentes Implementados

### **ATOMS (Componentes Básicos)**

#### `AddLocationButton`

- **Ubicación**: `src/components/atoms/AddLocationButton/`
- **Propósito**: Botón para agregar nueva ubicación cuando la lista está vacía
- **Características**:
  - Estados de carga y deshabilitado
  - Icono de agregar personalizable
  - Texto personalizable
  - Estilos consistentes con el design system

#### `LocationTypeChip`

- **Ubicación**: `src/components/atoms/LocationTypeChip/`
- **Propósito**: Chip para seleccionar tipo de ubicación (Casa, Trabajo, Otro)
- **Características**:
  - Estados seleccionado/no seleccionado
  - Iconos específicos por tipo
  - Colores del tema aplicados automáticamente

### **MOLECULES (Componentes Compuestos)**

#### `LocationPicker`

- **Ubicación**: `src/components/molecules/LocationPicker/`
- **Propósito**: Combina mapa con controles para seleccionar ubicación
- **Componentes Reutilizados**:
  - `LocationMap` (existente)
  - `CurrentLocationButton` (existente)
  - `Button` (existente)
  - `LocationDisplay` (existente)
- **Características**:
  - Mapa interactivo para selección
  - Botón de ubicación actual
  - Botón de confirmación
  - Display de ubicación seleccionada

#### `LocationForm`

- **Ubicación**: `src/components/molecules/LocationForm/`
- **Propósito**: Formulario para configurar nombre y tipo de ubicación
- **Componentes Reutilizados**:
  - `TextInput` (existente)
  - `LocationDisplay` (existente)
  - `LocationTypeChip` (nuevo)
  - `Button` (existente)
- **Características**:
  - Input para nombre de ubicación
  - Selector de tipo de ubicación
  - Validación de formulario
  - Display de ubicación seleccionada

### **ORGANISMS (Componentes Complejos)**

#### `AddLocationModal`

- **Ubicación**: `src/components/organisms/AddLocationModal/`
- **Propósito**: Modal completo para el flujo de agregar ubicación
- **Componentes Integrados**:
  - `LocationPicker` (nuevo)
  - `LocationForm` (nuevo)
- **Características**:
  - Flujo de dos pasos (selección → configuración)
  - Navegación entre pasos
  - Botones de acción contextuales
  - Manejo de estados de carga

### **HOOKS (Lógica de Negocio)**

#### `useLocationManagement`

- **Ubicación**: `src/hooks/useLocationManagement.ts`
- **Propósito**: Hook principal para gestión de ubicaciones
- **Funcionalidades**:
  - Estado de ubicaciones favoritas
  - Control de modal
  - Solicitud de permisos de ubicación
  - Geocodificación inversa
  - CRUD de ubicaciones
  - Manejo de errores

## 🔄 Flujo de Usuario

1. **Estado Vacío**: `FavoriteLocations` muestra botón "Agregar ubicación"
2. **Abrir Modal**: Se abre `AddLocationModal` con `LocationPicker`
3. **Seleccionar Ubicación**: Usuario selecciona en el mapa o usa ubicación actual
4. **Configurar Ubicación**: Usuario completa nombre y tipo en `LocationForm`
5. **Guardar**: Ubicación se agrega a favoritos y se cierra el modal

## 🎨 Design System Integration

### **Tokens Utilizados**

- **Colores**: `primary`, `surface`, `text`, `border`, `disabled`
- **Espaciado**: `xs`, `sm`, `md`, `lg`, `xl`
- **Tipografía**: `fontSize`, `fontWeight`, `lineHeight`
- **Bordes**: `radius`, `width`

### **Componentes Reutilizados**

- `LocationMap` - Mapa interactivo existente
- `CurrentLocationButton` - Botón de ubicación actual
- `LocationDisplay` - Display de información de ubicación
- `Button` - Botones de acción
- `TextInput` - Input de texto
- `Text` - Componente de texto

## 📱 Ejemplo de Uso

```tsx
import { useLocationManagement } from "@/hooks/useLocationManagement";
import { AddLocationModal } from "@/components/organisms/AddLocationModal";
import { QuickAccessSection } from "@/components/organisms/QuickAccessSection";

const MyComponent = () => {
  const {
    favoriteLocations,
    isModalVisible,
    openAddLocationModal,
    closeAddLocationModal,
    addFavoriteLocation,
    selectLocation,
  } = useLocationManagement();

  const handleLocationSave = (locationData) => {
    addFavoriteLocation(locationData);
  };

  return (
    <>
      <QuickAccessSection
        favoriteLocations={favoriteLocations}
        onSelectLocation={selectLocation}
        onAddLocation={openAddLocationModal}
      />

      <AddLocationModal
        visible={isModalVisible}
        onClose={closeAddLocationModal}
        onLocationSave={handleLocationSave}
      />
    </>
  );
};
```

## 🔧 Configuración Requerida

### **Permisos de Ubicación**

- Android: `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`
- iOS: `NSLocationWhenInUseUsageDescription`

### **Google Maps API**

- Configurar API key en `src/constants/maps.ts`
- Habilitar APIs necesarias en Google Cloud Console

## 🚀 Características Implementadas

- ✅ **Gestión de Permisos**: Solicitud automática de permisos de ubicación
- ✅ **Geocodificación**: Conversión de coordenadas a direcciones
- ✅ **Mapa Interactivo**: Selección de ubicación mediante mapa
- ✅ **Ubicación Actual**: Obtención automática de ubicación del usuario
- ✅ **Tipos de Ubicación**: Casa, Trabajo, Otro con iconos específicos
- ✅ **Validación**: Validación de formularios y ubicaciones
- ✅ **Estados de Carga**: Indicadores de carga durante operaciones
- ✅ **Manejo de Errores**: Alertas y mensajes de error apropiados
- ✅ **Persistencia**: Almacenamiento local de ubicaciones favoritas
- ✅ **Responsive**: Adaptable a diferentes tamaños de pantalla

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── atoms/
│   │   ├── AddLocationButton/
│   │   └── LocationTypeChip/
│   ├── molecules/
│   │   ├── LocationPicker/
│   │   └── LocationForm/
│   └── organisms/
│       └── AddLocationModal/
├── hooks/
│   └── useLocationManagement.ts
└── types/
    └── (tipos existentes extendidos)
```

## 🎯 Próximos Pasos

1. **Integración con Backend**: Conectar con API para persistencia
2. **Sincronización**: Sincronizar ubicaciones entre dispositivos
3. **Búsqueda**: Implementar búsqueda de direcciones
4. **Historial**: Mantener historial de ubicaciones utilizadas
5. **Compartir**: Funcionalidad para compartir ubicaciones
