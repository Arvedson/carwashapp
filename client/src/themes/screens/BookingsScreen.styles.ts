import { StyleSheet } from "react-native";
import { Theme } from "../types";

export const createBookingsStyles = (theme: Theme) => {
  const { colors, spacing, typography, borders, shadows } = theme;

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: spacing.xl,
    },
    header: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.lg,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    title: {
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },
    subtitle: {
      color: colors.text.secondary,
    },
    content: {
      padding: spacing.md,
    },
    bookingCard: {
      marginBottom: spacing.md,
    },
    bookingHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.sm,
    },
    serviceName: {
      color: colors.text.primary,
      flex: 1,
    },
    statusBadge: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      borderRadius: borders.radius.sm,
    },
    statusText: {
      color: colors.text.inverse,
      fontWeight: typography.fontWeight.medium,
    },
    divider: {
      marginVertical: spacing.sm,
    },
    bookingDetails: {
      marginBottom: spacing.md,
    },
    detailRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.xs,
    },
    detailLabel: {
      color: colors.text.secondary,
      flex: 1,
    },
    detailValue: {
      color: colors.text.primary,
      fontWeight: typography.fontWeight.medium,
    },
    bookingActions: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: spacing.sm,
    },
    actionButton: {
      flex: 1,
    },
    emptyCard: {
      alignItems: "center",
      paddingVertical: spacing.xxl,
    },
    emptyTitle: {
      color: colors.text.primary,
      marginBottom: spacing.sm,
      textAlign: "center",
    },
    emptyDescription: {
      color: colors.text.secondary,
      textAlign: "center",
      marginBottom: spacing.lg,
      lineHeight: 20,
    },
    emptyButton: {
      minWidth: 150,
    },
  });
};
