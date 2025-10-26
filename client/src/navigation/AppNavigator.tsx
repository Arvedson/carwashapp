import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "@/store/useAuthStore";
import LoginScreen from "@/components/pages/Login/LoginScreen";
import RegisterScreen from "@/components/pages/Register/RegisterScreen";
import BottomTabNavigator from "./BottomTabNavigator";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { isAuthenticated, initializeAuth } = useAuthStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      await initializeAuth();
      setIsInitialized(true);
    };
    init();
  }, [initializeAuth]);

  // Mostrar pantalla de carga mientras se inicializa
  if (!isInitialized) {
    return null; // O un componente de loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
