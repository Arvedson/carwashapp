import React from "react";
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
}