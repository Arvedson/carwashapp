import React from "react";
import { Text } from "react-native";
import { Container } from "@/components/organisms/Container";
import { RegisterForm } from "@/components/organisms/RegisterForm";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuthNavigation } from "@/hooks/useAuthNavigation";

const RegisterScreen: React.FC = () => {
  const { theme } = useTheme();
  const { goToLogin } = useAuthNavigation();
  const colors = theme.colors;
  const spacing = theme.spacing;

  const dynamicStyles = {
    title: {
      fontSize: theme.typography.fontSize.xxxl,
      fontWeight: theme.typography.fontWeight.bold,
      marginBottom: spacing.sm,
      color: colors.text.primary,
    },
    subtitle: {
      fontSize: theme.typography.fontSize.lg,
      marginBottom: spacing.xxl,
      color: colors.text.secondary,
    },
  };

  return (
    <Container
      variant="centeredPadded"
      style={{ backgroundColor: colors.background }}
    >
      <Text style={dynamicStyles.title}>CarWashApp</Text>
      <Text style={dynamicStyles.subtitle}>Crear Nueva Cuenta</Text>

      <RegisterForm onSwitchToLogin={goToLogin} />
    </Container>
  );
};

export default RegisterScreen;
