import { StyleSheet } from "react-native";
import { Theme } from "../types";
import { textStyles } from "../typography";
import { spacing } from "../spacing";
import { borders } from "../borders";

export const createHomeStyles = (theme: Theme) => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      padding: 20,
    },
    header: {
      alignItems: "center",
      marginBottom: 32,
    },
    themeToggleContainer: {
      marginTop: 16,
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
      color: theme.colors.text.primary,
      textAlign: "center",
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 18,
      color: theme.colors.text.secondary,
      textAlign: "center",
    },
    content: {
      flex: 1,
      justifyContent: "flex-start",
    },
    welcomeSection: {
      alignItems: "center",
      marginBottom: 32,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: "700",
      color: theme.colors.text.primary,
      textAlign: "center",
      marginBottom: 8,
    },
    emailText: {
      fontSize: 16,
      color: theme.colors.text.secondary,
      textAlign: "center",
    },
    features: {
      backgroundColor: theme.colors.surface,
      padding: 20,
      borderRadius: 12,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    featuresTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.colors.text.primary,
      marginBottom: 16,
    },
    featureItem: {
      fontSize: 16,
      color: theme.colors.text.primary,
      marginBottom: 8,
    },
    logoutButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      padding: 16,
      alignItems: "center",
      marginTop: 20,
    },
    logoutButtonText: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.colors.text.inverse,
    },
  });
};

// Estilos por defecto para compatibilidad
export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  emailText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
  },
  features: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
  },
  featureItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  logoutButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
