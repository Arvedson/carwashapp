import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createLocationFormStyles = (theme: Theme) => {
  const { spacing, typography } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      minHeight: 300, // Altura mínima para asegurar que se vea
    },
    section: {
      marginBottom: spacing.lg,
    },
    sectionTitle: {
      marginBottom: spacing.sm,
    },
    inputContainer: {
      marginBottom: spacing.md,
    },
    typeSelectorContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: spacing.sm,
    },
    locationDisplayContainer: {
      marginBottom: spacing.md,
    },
  });
};
