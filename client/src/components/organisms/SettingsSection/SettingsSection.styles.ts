import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import {
  SettingsSectionSize,
  SettingsSectionVariant,
} from "./SettingsSection.types";

export const createSettingsSectionStyles = (
  theme: Theme,
  size: SettingsSectionSize,
  variant: SettingsSectionVariant
) => {
  const { colors, spacing, typography, borders } = theme;

  const sizeStyles = {
    small: {
      padding: spacing.sm,
      titleSize: typography.fontSize.md,
      labelSize: typography.fontSize.sm,
      descriptionSize: typography.fontSize.xs,
    },
    medium: {
      padding: spacing.md,
      titleSize: typography.fontSize.lg,
      labelSize: typography.fontSize.md,
      descriptionSize: typography.fontSize.sm,
    },
    large: {
      padding: spacing.lg,
      titleSize: typography.fontSize.xl,
      labelSize: typography.fontSize.lg,
      descriptionSize: typography.fontSize.md,
    },
  };

  const currentSize = sizeStyles[size];

  return StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      borderRadius: borders.radius.medium,
      padding: currentSize.padding,
      marginBottom: spacing.sm,
      ...theme.shadows.small,
    },
    title: {
      fontSize: currentSize.titleSize,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      marginBottom: spacing.md,
    },
    content: {
      flexDirection: "column",
    },
    settingItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: spacing.sm,
      minHeight: 48,
    },
    settingInfo: {
      flex: 1,
      marginRight: spacing.md,
    },
    settingLabel: {
      fontSize: currentSize.labelSize,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },
    settingDescription: {
      fontSize: currentSize.descriptionSize,
      color: colors.text.secondary,
      lineHeight: currentSize.descriptionSize * 1.4,
    },
    settingControl: {
      alignItems: "center",
      justifyContent: "center",
    },
    divider: {
      marginVertical: spacing.sm,
    },
  });
};
