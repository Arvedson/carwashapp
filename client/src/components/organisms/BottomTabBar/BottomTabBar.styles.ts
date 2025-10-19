import { StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { Theme } from "@/themes/types";
import { BottomTabBarStyles } from "./BottomTabBar.types";
import { shadowPresets } from "@/themes/shadows";

export const createBottomTabBarStyles = (
  theme: Theme,
  insets?: EdgeInsets
): BottomTabBarStyles => {
  const { colors, spacing } = theme;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingBottom: insets ? insets.bottom : spacing.sm,
      paddingTop: spacing.xs,
      ...shadowPresets.header,
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      minHeight: 60,
    },
    tabContainer: {
      flex: 1,
    },
  });

  return styles as BottomTabBarStyles;
};
