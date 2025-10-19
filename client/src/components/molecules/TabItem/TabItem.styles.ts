import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { TabItemStyles } from "./TabItem.types";

export const createTabItemStyles = (theme: Theme): TabItemStyles => {
  const { colors, spacing, typography } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.xs,
      minHeight: 60,
    },
    content: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    label: {
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.medium,
      marginTop: spacing.xs,
      textAlign: "center",
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
