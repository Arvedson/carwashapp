import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createVehicleSelectorStyles = (theme: Theme) => {
  const { colors, spacing, borders, typography } = theme;

  return StyleSheet.create({
    container: {
      marginVertical: spacing.sm,
    },
    scrollView: {
      flexDirection: "row",
    },
    vehicleItem: {
      alignItems: "center",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      marginRight: spacing.sm,
      borderRadius: borders.radius.md, // Using theme border radius
      backgroundColor: colors.surface,
      borderWidth: borders.width.thin, // Using theme border width
      borderColor: colors.border,
      minWidth: 80,
    },
    selectedVehicleItem: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    vehicleIcon: {
      fontSize: 24,
      marginBottom: spacing.xs,
    },
    vehicleName: {
      fontSize: typography.fontSize.xs, // Using theme typography
      color: colors.text.secondary,
      textAlign: "center",
    },
    selectedVehicleName: {
      color: colors.text.inverse,
      fontWeight: typography.fontWeight.semibold, // Using theme font weight
    },
  });
};
