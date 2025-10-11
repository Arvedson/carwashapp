import { ViewStyle, TextStyle } from "react-native";

export type BadgeVariant =
  | "primary" // Color primario
  | "secondary" // Color secundario
  | "success" // Verde (éxito)
  | "warning" // Amarillo (advertencia)
  | "error" // Rojo (error)
  | "info" // Azul (información)
  | "neutral"; // Gris (neutral)

export type BadgeSize =
  | "small" // Pequeño
  | "medium" // Mediano
  | "large"; // Grande

export type BadgeShape =
  | "rounded" // Bordes redondeados
  | "pill" // Forma de píldora
  | "square"; // Cuadrado

export interface BadgeAtomProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  shape?: BadgeShape;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}



