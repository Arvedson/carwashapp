import React from "react";
import { Text } from "react-native";
import { Container } from "@/components/organisms/Container";
import { LoginForm } from "@/components/organisms/LoginForm";
import { useTheme } from "@/contexts/ThemeContext";

const LoginScreen: React.FC = () => {
  const { theme } = useTheme();
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
      <Text style={dynamicStyles.subtitle}>Login Screen</Text>
      <LoginForm />
    </Container>
  );
};

export default LoginScreen;
