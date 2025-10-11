import { ViewStyle } from "react-native";

export type ProgressVariant =
  | "linear" // Barra de progreso horizontal
  | "circular"; // Barra de progreso circular

export type ProgressSize =
  | "small" // Pequeño
  | "medium" // Mediano
  | "large"; // Grande

export type ProgressColor =
  | "primary" // Color primario
  | "secondary" // Color secundario
  | "success" // Verde
  | "warning" // Amarillo
  | "error" // Rojo
  | "info"; // Azul

export interface ProgressAtomProps {
  value: number; // Valor entre 0 y 100
  variant?: ProgressVariant;
  size?: ProgressSize;
  color?: ProgressColor;
  backgroundColor?: string;
  showPercentage?: boolean;
  animated?: boolean;
  style?: ViewStyle;
}



