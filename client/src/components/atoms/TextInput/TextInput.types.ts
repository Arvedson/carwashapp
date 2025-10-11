import { TextInputProps } from "react-native";

export type TextInputVariant =
  | "default" // Estilo básico
  | "outlined" // Solo borde
  | "filled" // Con fondo
  | "underlined"; // Solo línea inferior

export type TextInputSize =
  | "small" // Pequeño
  | "medium" // Mediano
  | "large"; // Grande

export interface TextInputAtomProps extends TextInputProps {
  variant?: TextInputVariant;
  size?: TextInputSize;
  error?: boolean;
  label?: string;
}
