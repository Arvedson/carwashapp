import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createLocationTypeChipStyles = (
  theme: Theme,
  isSelected: boolean = false
) => {
  const { colors, spacing, typography, borders } = theme;

  return StyleSheet.create({
    container: {
      marginRight: spacing.sm,
      marginBottom: spacing.sm,
    },
    chip: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borders.radius.full,
      backgroundColor: colors.surface,
      borderWidth: borders.width.thin,
      borderColor: colors.border,
    },
    selectedChip: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    icon: {
      fontSize: 16,
      marginRight: spacing.xs,
      color: isSelected ? colors.text.inverse : colors.text.primary,
    },
    text: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
    },
    selectedText: {
      color: colors.text.inverse,
    },
  });
};














