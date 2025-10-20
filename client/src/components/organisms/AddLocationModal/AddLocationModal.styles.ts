import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "@/themes";

const { height: screenHeight } = Dimensions.get("window");

export const createAddLocationModalStyles = (theme: Theme) => {
  const { colors, spacing, typography, borders } = theme;

  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: colors.mapOverlay,
      justifyContent: "flex-end",
    },
    safeArea: {
      flex: 0, // No expandir, solo respetar el área segura
    },
    modalContainer: {
      backgroundColor: colors.surface,
      borderTopLeftRadius: borders.radius.xl,
      borderTopRightRadius: borders.radius.xl,
      maxHeight: screenHeight * 0.95,
      minHeight: screenHeight * 0.8,
      marginTop: spacing.lg,
    },
    modalHandle: {
      width: 50,
      height: 5,
      backgroundColor: colors.border,
      borderRadius: borders.radius.full,
      alignSelf: "center",
      marginTop: spacing.sm,
      marginBottom: spacing.md,
      opacity: 0.6,

      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
    },
    header: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.md,
      borderBottomWidth: borders.width.thin,
      borderBottomColor: colors.border,
    },
    headerContent: {
      flex: 1,
      marginRight: spacing.md,
    },
    title: {
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },
    subtitle: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.regular,
      color: colors.text.secondary,
      lineHeight: typography.lineHeight.normal * typography.fontSize.sm,
    },
    closeButton: {
      padding: spacing.sm,
      borderRadius: borders.radius.full,
      backgroundColor: colors.surfaceVariant,
    },
    content: {
      flex: 1,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      minHeight: 0, // Permite que el ScrollView funcione correctamente
    },
    actionButtons: {
      flexDirection: "row",
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderTopWidth: borders.width.thin,
      borderTopColor: colors.border,
      gap: spacing.md,
    },
    cancelButton: {
      flex: 1,
    },
    confirmButton: {
      flex: 1,
    },
    minimizedIndicator: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      backgroundColor: colors.surfaceVariant,
      borderBottomWidth: borders.width.thin,
      borderBottomColor: colors.border,
    },
    minimizedText: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.secondary,
      marginRight: spacing.xs,
    },
    dragIndicator: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.primary,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      zIndex: 1000,
      alignItems: "center",
    },
    dragText: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.inverse,
    },
  });
};
