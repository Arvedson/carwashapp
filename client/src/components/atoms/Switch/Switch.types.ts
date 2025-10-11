import { ViewStyle } from "react-native";

export type SwitchSize =
  | "small" // Pequeño
  | "medium" // Mediano
  | "large"; // Grande

export type SwitchVariant =
  | "default" // Estilo por defecto
  | "ios" // Estilo iOS
  | "android"; // Estilo Android

export type SwitchColor =
  | "primary" // Color primario
  | "secondary" // Color secundario
  | "success" // Verde
  | "warning" // Amarillo
  | "error" // Rojo
  | "info"; // Azul

export interface SwitchAtomProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  variant?: SwitchVariant;
  color?: SwitchColor;
  activeColor?: string;
  inactiveColor?: string;
  thumbColor?: string;
  style?: ViewStyle;
}



