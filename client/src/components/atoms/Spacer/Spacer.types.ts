import { ViewStyle } from "react-native";

export type SpacerSize =
  | "xs" // 4px
  | "sm" // 8px
  | "md" // 16px
  | "lg" // 24px
  | "xl" // 32px
  | "xxl" // 48px
  | "xxxl"; // 64px

export type SpacerDirection =
  | "horizontal" // Espaciado horizontal (width)
  | "vertical" // Espaciado vertical (height)
  | "both"; // Espaciado en ambas direcciones

export interface SpacerAtomProps {
  size?: SpacerSize;
  direction?: SpacerDirection;
  style?: ViewStyle;
}



