import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { ServiceCardSize, ServiceCardVariant } from "./ServiceCard.types";

export const createServiceCardStyles = (
  theme: Theme,
  size: ServiceCardSize,
  variant: ServiceCardVariant
) => {
  const { colors, spacing, typography, borders } = theme;

  const sizeStyles = {
    small: {
      padding: spacing.sm,
      titleSize: typography.fontSize.md,
      descriptionSize: typography.fontSize.sm,
      priceSize: typography.fontSize.lg,
    },
    medium: {
      padding: spacing.md,
      titleSize: typography.fontSize.lg,
      descriptionSize: typography.fontSize.md,
      priceSize: typography.fontSize.xl,
    },
    large: {
      padding: spacing.lg,
      titleSize: typography.fontSize.xl,
      descriptionSize: typography.fontSize.lg,
      priceSize: typography.fontSize.xxl,
    },
  };

  const currentSize = sizeStyles[size];

  return StyleSheet.create({
    card: {
      backgroundColor: colors.surface,
      borderRadius: borders.radius.medium,
      padding: currentSize.padding,
      marginBottom: spacing.sm,
      ...theme.shadows.small,
    },
    selectedCard: {
      borderColor: colors.primary,
      borderWidth: 2,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: spacing.sm,
    },
    titleContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
    serviceName: {
      fontSize: currentSize.titleSize,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
    },
    popularBadge: {
      alignSelf: "flex-start",
    },
    priceContainer: {
      alignItems: "flex-end",
    },
    price: {
      fontSize: currentSize.priceSize,
      fontWeight: typography.fontWeight.bold,
      color: colors.primary,
    },
    duration: {
      fontSize: typography.fontSize.xs,
      color: colors.text.secondary,
      marginTop: spacing.xs,
    },
    description: {
      fontSize: currentSize.descriptionSize,
      color: colors.text.secondary,
      marginBottom: spacing.sm,
      lineHeight: currentSize.descriptionSize * 1.4,
    },
    featuresContainer: {
      marginBottom: spacing.md,
    },
    featuresTitle: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },
    actions: {
      flexDirection: "row",
      gap: spacing.sm,
    },
    selectButton: {
      flex: 1,
    },
    bookButton: {
      flex: 1,
    },
  });
};
