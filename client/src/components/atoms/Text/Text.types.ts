import { TextProps } from "react-native";

export type TextVariant =
  | "body" // Texto normal
  | "caption" // Texto pequeño
  | "label" // Etiqueta
  | "heading" // Título
  | "subheading"; // Subtítulo

export type TextSize =
  | "xs" // Extra pequeño
  | "sm" // Pequeño
  | "md" // Mediano
  | "lg" // Grande
  | "xl" // Extra grande
  | "xxl"; // Muy grande

export type TextWeight =
  | "light" // Ligero
  | "regular" // Normal
  | "medium" // Medio
  | "semibold" // Semi-negrita
  | "bold"; // Negrita

export interface TextAtomProps extends TextProps {
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  color?: string;
  children: React.ReactNode;
}
