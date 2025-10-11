import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { SwitchSize, SwitchVariant, SwitchColor } from "./Switch.types";

export const createSwitchStyles = (
  theme: Theme,
  size: SwitchSize,
  variant: SwitchVariant,
  color: SwitchColor,
  activeColor?: string,
  inactiveColor?: string,
  thumbColor?: string
) => {
  const { colors, borders, components } = theme;

  // Usar tokens de componentes
  const sizeStyles = components.switch.sizes[size];

  // Mapeo de colores
  const colorMap = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success || "#10B981",
    warning: colors.warning || "#F59E0B",
    error: colors.error,
    info: colors.info || "#3B82F6",
  };

  const activeColorValue = activeColor || colorMap[color];
  const inactiveColorValue = inactiveColor || colors.disabled;
  const thumbColorValue = thumbColor || colors.surface;

  return StyleSheet.create({
    switch: {
      width: sizeStyles.width || 50,
      height: sizeStyles.height || 30,
      borderRadius: (sizeStyles.height || 30) / 2,
      padding: sizeStyles.padding,
      justifyContent: "center",
      flexDirection: "row",

      // Variantes
      ...(variant === "default" &&
        {
          // Estilo por defecto
        }),
      ...(variant === "ios" && {
        // Estilo iOS - más suave
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 2,
      }),
      ...(variant === "android" && {
        // Estilo Android - más plano
        elevation: 1,
      }),
    },
    track: {
      width: "100%",
      height: "100%",
      borderRadius: (sizeStyles.height || 30) / 2,
      position: "relative",
    },
    thumb: {
      width: sizeStyles.thumbSize || 26,
      height: sizeStyles.thumbSize || 26,
      borderRadius: (sizeStyles.thumbSize || 26) / 2,
      backgroundColor: thumbColorValue,
      position: "absolute",
      top: 0,
      left: 0,

      // Variantes del thumb
      ...(variant === "ios" && {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
      }),
      ...(variant === "android" && {
        elevation: 2,
      }),
    },
    disabled: {
      opacity: 0.5,
    },
  });
};
