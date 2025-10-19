import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { FeatureListSize, FeatureListVariant } from "./FeatureList.types";

export const createFeatureListStyles = (
  theme: Theme,
  size: FeatureListSize,
  variant: FeatureListVariant
) => {
  const { colors, typography, spacing } = theme;

  const sizeStyles = {
    small: {
      fontSize: typography.fontSize.sm,
      iconSize: 12,
      itemSpacing: spacing.xs,
    },
    medium: {
      fontSize: typography.fontSize.md,
      iconSize: 16,
      itemSpacing: spacing.sm,
    },
    large: {
      fontSize: typography.fontSize.lg,
      iconSize: 20,
      itemSpacing: spacing.md,
    },
  };

  const currentSize = sizeStyles[size];

  return StyleSheet.create({
    container: {
      flexDirection: "column",
    },
    item: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: currentSize.itemSpacing,
    },
    icon: {
      fontSize: currentSize.iconSize,
      marginRight: spacing.sm,
      marginTop: 2,
    },
    text: {
      fontSize: currentSize.fontSize,
      color: colors.text.secondary,
      flex: 1,
      lineHeight: currentSize.fontSize * 1.4,
    },
    moreText: {
      fontSize: currentSize.fontSize,
      color: colors.text.disabled,
      fontStyle: "italic",
      marginTop: spacing.xs,
    },
  });
};
