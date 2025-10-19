import { StyleSheet } from "react-native";
import { Theme } from "../types";

export const createServicesStyles = (theme: Theme) => {
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
    serviceCard: {
      marginBottom: spacing.md,
    },
    selectedServiceCard: {
      borderColor: colors.primary,
      borderWidth: 2,
    },
    serviceHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: spacing.sm,
    },
    serviceTitleContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
    serviceName: {
      color: colors.text.primary,
    },
    popularBadge: {
      alignSelf: "flex-start",
    },
    priceContainer: {
      alignItems: "flex-end",
    },
    price: {
      color: colors.primary,
      fontWeight: typography.fontWeight.bold,
    },
    duration: {
      color: colors.text.secondary,
    },
    description: {
      color: colors.text.secondary,
      marginBottom: spacing.sm,
      lineHeight: 20,
    },
    divider: {
      marginVertical: spacing.sm,
    },
    featuresContainer: {
      marginBottom: spacing.md,
    },
    featuresTitle: {
      color: colors.text.primary,
      fontWeight: typography.fontWeight.medium,
      marginBottom: spacing.xs,
    },
    featureItem: {
      marginBottom: spacing.xs,
    },
    featureText: {
      color: colors.text.secondary,
    },
    serviceActions: {
      flexDirection: "row",
      gap: spacing.sm,
    },
    selectButton: {
      flex: 1,
    },
    bookButton: {
      flex: 1,
    },
    selectedServiceInfo: {
      padding: spacing.md,
    },
    infoCard: {
      alignItems: "center",
    },
    infoTitle: {
      color: colors.text.inverse,
      marginBottom: spacing.xs,
      textAlign: "center",
    },
    infoText: {
      color: colors.text.inverse,
      textAlign: "center",
      lineHeight: 18,
    },
  });
};
