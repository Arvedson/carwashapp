import { TouchableOpacityProps } from "react-native";

export type ThemeToggleSize =
  | "small" // Pequeño
  | "medium" // Mediano
  | "large"; // Grande

export interface ThemeToggleProps extends TouchableOpacityProps {
  size?: ThemeToggleSize;
  isDark?: boolean;
  onToggle?: () => void;
}
