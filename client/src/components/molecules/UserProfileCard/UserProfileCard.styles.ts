import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import {
  UserProfileCardSize,
  UserProfileCardVariant,
} from "./UserProfileCard.types";

export const createUserProfileCardStyles = (
  theme: Theme,
  size: UserProfileCardSize,
  variant: UserProfileCardVariant
) => {
  const { colors, spacing, typography, borders } = theme;

  const sizeStyles = {
    small: {
      padding: spacing.sm,
      avatarSize: 40,
      titleSize: typography.fontSize.md,
      subtitleSize: typography.fontSize.sm,
    },
    medium: {
      padding: spacing.md,
      avatarSize: 56,
      titleSize: typography.fontSize.lg,
      subtitleSize: typography.fontSize.md,
    },
    large: {
      padding: spacing.lg,
      avatarSize: 80,
      titleSize: typography.fontSize.xl,
      subtitleSize: typography.fontSize.lg,
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
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    userInfo: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    avatar: {
      marginRight: spacing.md,
    },
    userDetails: {
      flex: 1,
    },
    userName: {
      fontSize: currentSize.titleSize,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },
    userEmail: {
      fontSize: currentSize.subtitleSize,
      color: colors.text.secondary,
      marginBottom: spacing.xs,
    },
    memberSince: {
      fontSize: typography.fontSize.xs,
      color: colors.text.disabled,
    },
    stats: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: spacing.sm,
    },
    statItem: {
      alignItems: "center",
      flex: 1,
    },
    statNumber: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.bold,
      color: colors.primary,
      marginBottom: spacing.xs,
    },
    statLabel: {
      fontSize: typography.fontSize.xs,
      color: colors.text.secondary,
      textAlign: "center",
    },
    editButton: {
      alignSelf: "flex-end",
    },
  });
};
