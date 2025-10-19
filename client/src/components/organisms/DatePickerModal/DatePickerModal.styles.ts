import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";

export const createDatePickerModalStyles = (theme: Theme) => {
  const { colors, spacing, borders, typography, shadows } = theme;

  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: colors.mapOverlay,
      justifyContent: "flex-end",
    },
    modalContainer: {
      backgroundColor: colors.surface,
      borderTopLeftRadius: borders.radius.xl,
      borderTopRightRadius: borders.radius.xl,
      height: "85%",
      ...shadows.xl,
    },
    modalHandle: {
      width: 40,
      height: 4,
      backgroundColor: colors.border,
      borderRadius: 2,
      alignSelf: "center",
      marginTop: spacing.sm,
      marginBottom: spacing.md,
    },
    header: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.md,
      borderBottomWidth: 1,
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
      color: colors.text.secondary,
      lineHeight: 20,
    },
    closeButton: {
      width: 32,
      height: 32,
      borderRadius: borders.radius.full,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    datePickerWrapper: {
      flex: 1,
      paddingHorizontal: spacing.lg,
    },
    datePickerContainer: {
      flex: 1,
    },
    datePickerScrollContent: {
      paddingTop: spacing.md,
      paddingBottom: spacing.xl,
      flexGrow: 1,
    },
    actionButtons: {
      flexDirection: "row",
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.lg,
      paddingBottom: spacing.xl,
      paddingTop: spacing.lg,
      gap: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      backgroundColor: colors.surface,
      marginTop: spacing.sm,
    },
    cancelButton: {
      flex: 1,
    },
    confirmButton: {
      flex: 1,
    },
  });
};
