import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/AppNavigator";
import { StackNavigationProp } from "@react-navigation/stack";

type AuthNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login" | "Register"
>;

export const useAuthNavigation = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToMain = () => {
    // La navegación a Main se maneja automáticamente por el estado de autenticación
    // No necesitamos navegar manualmente
  };

  return {
    goToRegister,
    goToLogin,
    goToMain,
  };
};
