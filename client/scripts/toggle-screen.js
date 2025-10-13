#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const APP_TSX_PATH = path.join(__dirname, "..", "App.tsx");

// Leer el archivo App.tsx
let appContent = fs.readFileSync(APP_TSX_PATH, "utf8");

// Verificar qué pantalla está activa actualmente
const isDevScreenActive = appContent.includes("DevScreen");
const isHomeScreenActive = appContent.includes("HomeScreen");

console.log("🔄 Alternando pantalla...");

if (isDevScreenActive && !isHomeScreenActive) {
  // Cambiar de DevScreen a HomeScreen
  console.log("📱 Cambiando de DevScreen a HomeScreen...");

  appContent = `import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@/contexts/ThemeContext";
import HomeScreen from "@/components/pages/Home/HomeScreen";
// import AppNavigator from "@/navigation/AppNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <HomeScreen />
        {/* <AppNavigator /> */}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}`;
} else {
  // Cambiar de HomeScreen a DevScreen
  console.log("🛠️ Cambiando de HomeScreen a DevScreen...");

  appContent = `import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@/contexts/ThemeContext";
import DevScreen from "@/components/DevScreen";
// import AppNavigator from "@/navigation/AppNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <DevScreen />
        {/* <AppNavigator /> */}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}`;
}

// Escribir el archivo modificado
fs.writeFileSync(APP_TSX_PATH, appContent);

console.log("✅ Pantalla cambiada exitosamente!");
console.log("🔄 Reinicia la aplicación para ver los cambios");
