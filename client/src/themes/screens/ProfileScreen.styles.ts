import { StyleSheet } from "react-native";
import { Theme } from "../types";

export const createProfileStyles = (theme: Theme) => {
  const { colors, spacing, typography, borders } = theme;

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
    },
    content: {
      padding: spacing.md,
    },
    userCard: {
      marginBottom: spacing.md,
    },
    userInfo: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    avatar: {
      marginRight: spacing.md,
    },
    userDetails: {
      flex: 1,
    },
    userName: {
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },
    userEmail: {
      color: colors.text.secondary,
      marginBottom: spacing.xs,
    },
    memberSince: {
      color: colors.text.disabled,
    },
    editButton: {
      alignSelf: "flex-end",
    },
    settingsCard: {
      marginBottom: spacing.md,
    },
    menuCard: {
      marginBottom: spacing.md,
    },
    statsCard: {
      marginBottom: spacing.md,
    },
    sectionTitle: {
      color: colors.text.primary,
      marginBottom: spacing.md,
    },
    settingItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: spacing.sm,
    },
    settingInfo: {
      flex: 1,
      marginRight: spacing.md,
    },
    settingLabel: {
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },
    settingDescription: {
      color: colors.text.secondary,
    },
    divider: {
      marginVertical: spacing.sm,
    },
    menuButton: {
      justifyContent: "flex-start",
      paddingVertical: spacing.sm,
    },
    statsGrid: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    statItem: {
      alignItems: "center",
      flex: 1,
    },
    statNumber: {
      color: colors.primary,
      marginBottom: spacing.xs,
    },
    statLabel: {
      color: colors.text.secondary,
      textAlign: "center",
    },
    logoutButton: {
      marginTop: spacing.md,
    },
  });
};
