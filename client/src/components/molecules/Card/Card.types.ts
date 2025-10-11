import { ViewProps } from "react-native";

export type CardVariant =
  | "default" // Estilo básico de tarjeta
  | "elevated" // Con sombra más pronunciada
  | "outlined" // Solo borde, sin fondo
  | "filled"; // Con fondo sólido

export type CardSize =
  | "small" // Padding pequeño
  | "medium" // Padding medio
  | "large"; // Padding grande

export interface CardProps extends ViewProps {
  variant?: CardVariant;
  size?: CardSize;
  children: React.ReactNode;
  padding?: boolean; // Si debe tener padding interno
}
