import { ThemeColors } from "./types";

export const lightColors: ThemeColors = {
  // Brand colors - Car wash theme
  primary: "#007AFF",
  primaryDark: "#0056CC",
  primaryLight: "#4A9EFF",

  secondary: "#5856D6",
  secondaryDark: "#3D3D9E",
  secondaryLight: "#7A78E0",

  // Semantic colors
  success: "#34C759",
  successDark: "#28A745",
  warning: "#FF9500",
  warningDark: "#E6850E",
  error: "#FF3B30",
  errorDark: "#D70015",
  info: "#5AC8FA",
  infoDark: "#007AFF",

  // Neutral colors
  background: "#F2F2F7",
  surface: "#FFFFFF",
  surfaceVariant: "#F8F9FA",
  text: {
    primary: "#000000",
    secondary: "#8E8E93",
    disabled: "#C7C7CC",
    inverse: "#FFFFFF",
  },
  border: "#E5E5EA",
  divider: "#C6C6C8",

  // Car wash specific colors
  water: "#4A90E2",
  soap: "#87CEEB",
  wax: "#F0E68C",
  foam: "#E6F3FF",
  shine: "#FFD700",

  // Interactive states
  hover: "#F0F0F0",
  pressed: "#E0E0E0",
  focus: "#007AFF",
  disabled: "#F2F2F7",
};

export const darkColors: ThemeColors = {
  // Brand colors - Car wash theme (dark)
  primary: "#0A84FF",
  primaryDark: "#0056CC",
  primaryLight: "#4A9EFF",

  secondary: "#5E5CE6",
  secondaryDark: "#3D3D9E",
  secondaryLight: "#7A78E0",

  // Semantic colors
  success: "#30D158",
  successDark: "#28A745",
  warning: "#FF9F0A",
  warningDark: "#E6850E",
  error: "#FF453A",
  errorDark: "#D70015",
  info: "#64D2FF",
  infoDark: "#007AFF",

  // Neutral colors
  background: "#000000",
  surface: "#1C1C1E",
  surfaceVariant: "#2C2C2E",
  text: {
    primary: "#FFFFFF",
    secondary: "#8E8E93",
    disabled: "#48484A",
    inverse: "#000000",
  },
  border: "#38383A",
  divider: "#48484A",

  // Car wash specific colors (dark theme)
  water: "#4A90E2",
  soap: "#87CEEB",
  wax: "#F0E68C",
  foam: "#1A1A1A",
  shine: "#FFD700",

  // Interactive states
  hover: "#2C2C2E",
  pressed: "#1C1C1E",
  focus: "#0A84FF",
  disabled: "#1C1C1E",
};
