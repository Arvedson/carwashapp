import { StyleSheet } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { layoutStyles } from "@/themes";

// Hook para crear estilos dinámicos comunes
export const useDynamicStyles = () => {
  const { theme } = useTheme();
  const colors = theme.colors;
  const spacing = theme.spacing;
  const borders = theme.borders;

  return {
    // Estilos de layout con tema
    container: {
      ...layoutStyles.container,
      backgroundColor: colors.background,
    },
    containerPadded: {
      ...layoutStyles.containerPadded,
      backgroundColor: colors.background,
    },
    containerCentered: {
      ...layoutStyles.containerCentered,
      backgroundColor: colors.background,
    },

    // Cards con tema
    card: {
      ...layoutStyles.card,
      backgroundColor: colors.surface,
    },
    cardCentered: {
      ...layoutStyles.cardCentered,
      backgroundColor: colors.surface,
    },

    // Textos con tema
    title: {
      fontSize: 28,
      fontWeight: "bold" as const,
      textAlign: "center" as const,
      marginTop: spacing.xl,
      marginBottom: spacing.sm,
      color: colors.text.primary,
    },
    subtitle: {
      fontSize: 16,
      textAlign: "center" as const,
      marginBottom: spacing.xxxl,
      color: colors.text.secondary,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "600" as const,
      marginBottom: spacing.sm,
      color: colors.text.primary,
    },
    sectionDescription: {
      fontSize: 14,
      marginBottom: spacing.xl,
      color: colors.text.secondary,
      lineHeight: 20,
    },

    // Secciones con tema
    section: {
      ...layoutStyles.section,
      paddingHorizontal: spacing.xl,
    },
    sectionRow: {
      ...layoutStyles.sectionRow,
    },
    sectionColumn: {
      ...layoutStyles.sectionColumn,
    },

    // Botones con tema
    button: {
      marginRight: spacing.sm,
      marginBottom: spacing.sm,
    },
  };
};
