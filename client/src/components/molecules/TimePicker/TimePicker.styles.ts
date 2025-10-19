import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { spacingPresets } from "@/themes/spacing";

export const createTimePickerStyles = (theme: Theme) => {
  const { colors, spacing, borders, typography } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: spacing.md,
    },
    title: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      marginBottom: spacing.md,
      textAlign: "center",
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: spacing.lg,
    },
    timeGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: spacingPresets.gap.sm,
    },
    timeOption: {
      width: "30%",
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.sm,
      backgroundColor: colors.surface,
      borderRadius: borders.radius.md,
      borderWidth: borders.width.thin,
      borderColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
    },
    selectedTimeOption: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    timeText: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
    },
    selectedTimeText: {
      color: colors.text.inverse,
      fontWeight: typography.fontWeight.semibold,
    },
  });
};
