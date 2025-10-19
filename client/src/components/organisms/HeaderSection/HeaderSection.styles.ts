import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createHeaderSectionStyles = (theme: Theme) => {
  const { colors, spacing } = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      paddingHorizontal: spacing.md, // Following app pattern
      paddingVertical: spacing.lg, // Following app pattern
    },
    content: {
      flex: 1,
    },
    locationRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: spacing.sm,
    },
  });
};
