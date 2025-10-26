import { StyleSheet } from "react-native";
import { Theme } from "../types";
import { borderPresets } from "../borders";
import { textStyles } from "../typography";

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
      paddingBottom: spacing.xl,
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

    // Smart Hub Specific Styles - Following app patterns
    smartHubContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    smartHubScrollContent: {
      flexGrow: 1,
      paddingBottom: spacing.xl,
    },

    // Section spacing following app patterns
    sectionSpacing: {
      marginVertical: spacing.md,
    },

    // Smart Hub specific text styles following typography presets
    smartHubTitle: {
      ...textStyles.h2,
      color: colors.text.primary,
      textAlign: "center",
      marginBottom: spacing.lg,
    },

    smartHubSubtitle: {
      ...textStyles.bodyLarge,
      color: colors.text.secondary,
      textAlign: "center",
      marginBottom: spacing.xl,
    },

    // Loading states following app patterns
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: spacing.xl,
    },

    loadingText: {
      ...textStyles.body,
      color: colors.text.secondary,
      marginTop: spacing.md,
    },

    // Error states following app patterns
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: spacing.xl,
    },

    errorText: {
      ...textStyles.body,
      color: colors.error,
      textAlign: "center",
      marginTop: spacing.md,
    },
  });
};
