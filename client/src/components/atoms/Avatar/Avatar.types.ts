import { ViewStyle, ImageStyle } from "react-native";

export type AvatarSize =
  | "xs" // 24px
  | "sm" // 32px
  | "md" // 40px
  | "lg" // 56px
  | "xl" // 72px
  | "xxl"; // 96px

export type AvatarVariant =
  | "circle" // Círculo perfecto
  | "rounded" // Bordes redondeados
  | "square"; // Cuadrado

export type AvatarSource =
  | "image" // Imagen desde URL
  | "initials" // Iniciales del nombre
  | "icon" // Icono por defecto
  | "placeholder"; // Placeholder genérico

export interface AvatarAtomProps {
  source?: string; // URL de la imagen o iniciales
  size?: AvatarSize;
  variant?: AvatarVariant;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
}



