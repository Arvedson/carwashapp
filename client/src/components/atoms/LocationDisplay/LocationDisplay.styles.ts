import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createLocationDisplayStyles = (theme: Theme) => {
  const { colors, typography, spacing } = theme;

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: spacing.xs,
    },
    icon: {
      fontSize: typography.fontSize.sm,
      marginRight: spacing.xs,
    },
    text: {
      fontSize: typography.fontSize.sm,
      color: colors.text.secondary,
      flex: 1,
    },
    loadingText: {
      fontSize: typography.fontSize.sm,
      color: colors.text.disabled,
      fontStyle: "italic",
    },
  });
};
