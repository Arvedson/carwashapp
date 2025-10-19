import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { BookingCardSize, BookingCardVariant } from "./BookingCard.types";

export const createBookingCardStyles = (
  theme: Theme,
  size: BookingCardSize,
  variant: BookingCardVariant
) => {
  const { colors, spacing, typography, borders } = theme;

  const sizeStyles = {
    small: {
      padding: spacing.sm,
      titleSize: typography.fontSize.md,
      detailSize: typography.fontSize.sm,
    },
    medium: {
      padding: spacing.md,
      titleSize: typography.fontSize.lg,
      detailSize: typography.fontSize.md,
    },
    large: {
      padding: spacing.lg,
      titleSize: typography.fontSize.xl,
      detailSize: typography.fontSize.lg,
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
    content: {
      flex: 1,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.sm,
    },
    serviceName: {
      fontSize: currentSize.titleSize,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      flex: 1,
    },
    statusContainer: {
      marginLeft: spacing.sm,
    },
    details: {
      marginBottom: spacing.md,
    },
    detailRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.xs,
    },
    detailLabel: {
      fontSize: currentSize.detailSize,
      color: colors.text.secondary,
      flex: 1,
    },
    detailValue: {
      fontSize: currentSize.detailSize,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
    },
    actions: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: spacing.sm,
    },
    actionButton: {
      flex: 1,
    },
  });
};
