# Scripts de Desarrollo

## 🔄 Toggle Screen Script

Este script permite alternar entre la pantalla de desarrollo (DevScreen) y la pantalla principal (HomeScreen) de la aplicación.

### Comandos Disponibles

#### En Bash/Linux/Mac:

```bash
# Alternar entre DevScreen y HomeScreen
npm run toggle-screen

# O directamente con node
node scripts/toggle-screen.js
```

#### En PowerShell/Windows:

```powershell
# Alternar entre DevScreen y HomeScreen
npm run toggle-screen

# O directamente con node
node scripts/toggle-screen.js
```

### ¿Qué hace el script?

1. **Lee el archivo `App.tsx`** para determinar qué pantalla está activa
2. **Alterna entre dos configuraciones**:
   - **DevScreen**: Muestra la pantalla de desarrollo con todos los componentes
   - **HomeScreen**: Muestra la pantalla principal con la sección de ubicación

### Estados del Script

- **🛠️ DevScreen**: Pantalla de desarrollo para probar componentes
- **📱 HomeScreen**: Pantalla principal de la aplicación

### Uso Recomendado

1. **Para desarrollo de componentes**: Usa DevScreen
2. **Para probar la app completa**: Usa HomeScreen
3. **Después de cambiar**: Reinicia la aplicación con `r` en el terminal de Expo

### Notas

- El script modifica automáticamente el archivo `App.tsx`
- No es necesario reiniciar el servidor de Expo, solo recargar la app
- El script es seguro y mantiene la estructura del código





















