import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { SpacerSize, SpacerDirection } from "./Spacer.types";

export const createSpacerStyles = (
  theme: Theme,
  size: SpacerSize,
  direction: SpacerDirection
) => {
  const { spacing } = theme;

  // Mapeo de tamaños a valores de spacing
  const sizeMap = {
    xs: spacing.xs, // 4
    sm: spacing.sm, // 8
    md: spacing.md, // 16
    lg: spacing.lg, // 24
    xl: spacing.xl, // 32
    xxl: spacing.xxl, // 48
    xxxl: spacing.xxxl, // 64
  };

  const spacerValue = sizeMap[size];

  return StyleSheet.create({
    spacer: {
      ...(direction === "horizontal" && {
        width: spacerValue,
        height: 1, // Mínimo para que sea visible
      }),
      ...(direction === "vertical" && {
        height: spacerValue,
        width: 1, // Mínimo para que sea visible
      }),
      ...(direction === "both" && {
        width: spacerValue,
        height: spacerValue,
      }),
    },
  });
};



