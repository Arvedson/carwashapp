import { StyleSheet } from "react-native";
import { Theme } from "../types";
import { borderPresets } from "../borders";

export const createHomeStyles = (theme: Theme) => {
  const { colors, spacing, typography, borders } = theme;

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      padding: spacing.lg,
    },
    header: {
      alignItems: "center",
      marginBottom: spacing.xxl,
    },
    themeToggleContainer: {
      marginTop: spacing.md,
    },
    title: {
      fontSize: typography.fontSize.xxxl,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      textAlign: "center",
      marginBottom: spacing.sm,
    },
    subtitle: {
      fontSize: typography.fontSize.lg,
      color: colors.text.secondary,
      textAlign: "center",
    },
    content: {
      flex: 1,
      justifyContent: "flex-start",
    },
    welcomeSection: {
      alignItems: "center",
      marginBottom: spacing.xxl,
    },
    welcomeText: {
      fontSize: typography.fontSize.xxl,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      textAlign: "center",
      marginBottom: spacing.sm,
    },
    emailText: {
      fontSize: typography.fontSize.md,
      color: colors.text.secondary,
      textAlign: "center",
    },
    // Features Card - ahora usa Card component
    featuresCard: {
      marginTop: spacing.lg,
      marginBottom: spacing.lg,
    },
    featuresTitle: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      marginBottom: spacing.md,
    },
    featureItem: {
      fontSize: typography.fontSize.md,
      color: colors.text.primary,
      marginBottom: spacing.sm,
    },
    featureItemPrimary: {
      fontSize: typography.fontSize.md,
      color: colors.text.primary,
      marginBottom: spacing.sm,
      fontWeight: typography.fontWeight.semibold,
    },
    featureItemSecondary: {
      fontSize: typography.fontSize.md,
      color: colors.text.secondary,
      marginBottom: spacing.sm,
    },
    featureItemAccent: {
      fontSize: typography.fontSize.md,
      color: colors.info,
      marginBottom: spacing.sm,
      fontWeight: typography.fontWeight.medium,
    },
    // Text hierarchy styles for main content
    textPrimary: {
      fontSize: typography.fontSize.lg,
      color: colors.text.primary,
      fontWeight: typography.fontWeight.bold,
      marginBottom: spacing.sm,
    },
    textSecondary: {
      fontSize: typography.fontSize.md,
      color: colors.text.secondary,
      fontWeight: typography.fontWeight.regular,
      marginBottom: spacing.xs,
    },
    textAccent: {
      fontSize: typography.fontSize.md,
      color: colors.info,
      fontWeight: typography.fontWeight.medium,
      marginBottom: spacing.xs,
    },
    textMuted: {
      fontSize: typography.fontSize.sm,
      color: colors.text.secondary,
      fontWeight: typography.fontWeight.regular,
      opacity: 0.7,
      marginTop: spacing.xs,
    },
    logoutButton: {
      marginTop: spacing.lg,
    },
    // DatePicker Section Styles
    datePickerCard: {
      marginTop: spacing.lg,
      marginBottom: spacing.xxl,
    },
    sectionTitle: {
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      marginBottom: spacing.lg,
      textAlign: "center",
    },
    datePickerRow: {
      marginBottom: spacing.md,
      marginTop: spacing.sm,
    },
    datePickerColumn: {
      flex: 1,
    },
    // Estilo específico para el título del DatePicker
    datePickerTitle: {
      fontSize: typography.fontSize.md,
      color: colors.info,
      fontWeight: typography.fontWeight.medium,
      marginBottom: spacing.md,
      textAlign: "center",
    },
  });
};
