import { ViewStyle } from "react-native";

export type DividerVariant =
  | "solid" // Línea sólida
  | "dashed" // Línea punteada
  | "dotted"; // Línea de puntos

export type DividerOrientation =
  | "horizontal" // Línea horizontal
  | "vertical"; // Línea vertical

export type DividerSize =
  | "thin" // 1px
  | "medium" // 2px
  | "thick"; // 4px

export interface DividerAtomProps {
  variant?: DividerVariant;
  orientation?: DividerOrientation;
  size?: DividerSize;
  color?: string;
  style?: ViewStyle;
}



