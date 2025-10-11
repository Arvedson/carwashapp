# 🎨 Sistema de Themes - CarWashApp

Este directorio contiene el sistema completo de themes para la aplicación CarWashApp, siguiendo las mejores prácticas de diseño y desarrollo.

## 📁 Estructura

```
src/themes/
├── types.ts           # Definiciones TypeScript
├── colors.ts          # Paleta de colores (claro/oscuro)
├── typography.ts      # Fuentes y tamaños
├── spacing.ts         # Espaciados y márgenes
├── shadows.ts         # Sombras y elevaciones
├── borders.ts         # Bordes y radius
├── lightTheme.ts      # Tema claro
├── darkTheme.ts       # Tema oscuro
├── index.ts           # Exportaciones principales
└── README.md          # Esta documentación
```

## 🚀 Uso Básico

### 1. Configurar el Provider

```tsx
// App.tsx
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function App() {
  return <ThemeProvider>{/* Tu aplicación */}</ThemeProvider>;
}
```

### 2. Usar en Componentes

```tsx
import { useTheme, useThemeColors } from "@/contexts/ThemeContext";

const MyComponent = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const colors = useThemeColors();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        padding: theme.spacing.md,
      }}
    >
      <Text style={{ color: colors.text.primary }}>
        Hola desde el tema {isDark ? "oscuro" : "claro"}!
      </Text>
    </View>
  );
};
```

## 🎨 Colores

### Colores Principales

- `primary`: Azul principal (#007AFF)
- `secondary`: Púrpura secundario (#5856D6)
- `success`: Verde de éxito (#34C759)
- `warning`: Naranja de advertencia (#FF9500)
- `error`: Rojo de error (#FF3B30)

### Colores Específicos del Car Wash

- `water`: Azul agua (#4A90E2)
- `soap`: Azul jabón (#87CEEB)
- `wax`: Amarillo cera (#F0E68C)
- `foam`: Azul espuma (#E6F3FF)
- `shine`: Dorado brillo (#FFD700)

## 📝 Tipografía

### Tamaños de Fuente

```typescript
fontSize: {
  xs: 12,    // Muy pequeño
  sm: 14,    // Pequeño
  md: 16,    // Mediano (por defecto)
  lg: 18,    // Grande
  xl: 20,    // Muy grande
  xxl: 24,   // Extra grande
  xxxl: 32,  // Título
  display: 40, // Display
}
```

### Estilos Predefinidos

```typescript
// Usar estilos predefinidos
import { textStyles } from "@/themes";

const styles = StyleSheet.create({
  title: textStyles.h1,
  body: textStyles.body,
  button: textStyles.button,
});
```

## 📏 Espaciado

### Valores de Espaciado

```typescript
spacing: {
  xs: 4,     // Muy pequeño
  sm: 8,     // Pequeño
  md: 16,    // Mediano
  lg: 24,    // Grande
  xl: 32,    // Muy grande
  xxl: 48,   // Extra grande
  xxxl: 64,  // Muy extra grande
  xxxxl: 96, // Gigante
}
```

### Presets de Espaciado

```typescript
import { spacingPresets } from "@/themes";

// Padding de contenedor
padding: spacingPresets.container.full;

// Padding de botón
paddingHorizontal: spacingPresets.button.medium.horizontal;
paddingVertical: spacingPresets.button.medium.vertical;
```

## 🌟 Sombras

### Sombras Predefinidas

```typescript
import { shadowPresets } from "@/themes";

const styles = StyleSheet.create({
  card: {
    ...shadowPresets.card,
  },
  button: {
    ...shadowPresets.button,
  },
  modal: {
    ...shadowPresets.modal,
  },
});
```

## 🔲 Bordes

### Radius Predefinidos

```typescript
borderRadius: {
  none: 0,    // Sin bordes
  sm: 4,      // Pequeño
  md: 8,      // Mediano
  lg: 12,     // Grande
  xl: 16,     // Muy grande
  xxl: 24,    // Extra grande
  full: 9999, // Circular
}
```

## 🔄 Cambiar Tema

### Toggle Manual

```tsx
const { toggleTheme, themeMode } = useTheme();

<TouchableOpacity onPress={toggleTheme}>
  <Text>Cambiar a tema {themeMode === "light" ? "oscuro" : "claro"}</Text>
</TouchableOpacity>;
```

### Selección de Modo

```tsx
const { setThemeMode } = useTheme();

// Cambiar a tema específico
setThemeMode("dark"); // 'light' | 'dark' | 'auto'
```

## 🎯 Mejores Prácticas

### 1. Siempre usar el sistema de themes

```tsx
// ❌ Malo
backgroundColor: "#007AFF";

// ✅ Bueno
backgroundColor: colors.primary;
```

### 2. Usar presets cuando sea posible

```tsx
// ❌ Malo
padding: 16,
borderRadius: 8,

// ✅ Bueno
padding: theme.spacing.md,
borderRadius: theme.borders.radius.md,
```

### 3. Usar hooks específicos para mejor performance

```tsx
// ✅ Mejor performance
const colors = useThemeColors();
const spacing = useThemeSpacing();

// ❌ Menos eficiente
const { theme } = useTheme();
const colors = theme.colors;
```

## 🔧 Migración

### De constants/config.ts

```tsx
// Antes
import { COLORS } from "@/constants/config";
backgroundColor: COLORS.PRIMARY;

// Después
import { useThemeColors } from "@/contexts/ThemeContext";
const colors = useThemeColors();
backgroundColor: colors.primary;
```

## 📱 Modo Oscuro

El sistema incluye soporte completo para modo oscuro:

- **Colores adaptativos**: Todos los colores tienen variantes para tema oscuro
- **Persistencia**: El tema se guarda en AsyncStorage
- **Transiciones suaves**: Cambio de tema sin recargar la app
- **Detección automática**: Soporte para modo 'auto' (futuro)

## 🎨 Personalización

Para personalizar el tema, edita los archivos correspondientes:

- `colors.ts`: Cambiar paleta de colores
- `typography.ts`: Ajustar fuentes y tamaños
- `spacing.ts`: Modificar espaciados
- `shadows.ts`: Personalizar sombras
- `borders.ts`: Ajustar bordes y radius

¡El sistema de themes está listo para usar! 🚀
