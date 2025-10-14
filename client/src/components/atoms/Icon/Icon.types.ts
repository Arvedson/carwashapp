import { ViewStyle } from "react-native";

export type IconVariant =
  | "outline" // Iconos con solo contorno
  | "filled" // Iconos rellenos
  | "duotone"; // Iconos con dos colores

export type IconSize =
  | "xs" // 12px
  | "sm" // 16px
  | "md" // 20px
  | "lg" // 24px
  | "xl" // 32px
  | "xxl"; // 40px

export type IconName =
  | "sun" // Sol (light mode)
  | "moon" // Luna (dark mode)
  | "eye" // Ojo (ver)
  | "eye-off" // Ojo tachado (ocultar)
  | "check" // Checkmark
  | "x" // X (cerrar)
  | "plus" // Plus
  | "minus" // Minus
  | "arrow-left" // Flecha izquierda
  | "arrow-right" // Flecha derecha
  | "arrow-up" // Flecha arriba
  | "arrow-down" // Flecha abajo
  | "menu" // Menú hamburguesa
  | "search" // Búsqueda
  | "user" // Usuario
  | "settings" // Configuración
  | "home" // Casa
  | "car" // Auto
  | "star" // Estrella
  | "heart" // Corazón
  | "bell" // Notificación
  | "camera" // Cámara
  | "phone" // Teléfono
  | "mail" // Email
  | "lock" // Candado
  | "unlock" // Candado abierto
  | "edit" // Editar
  | "trash" // Basura
  | "save" // Guardar
  | "download" // Descargar
  | "upload" // Subir
  | "refresh" // Actualizar
  | "play" // Play
  | "pause" // Pausa
  | "stop" // Stop
  | "chevron-left" // Chevron izquierda
  | "chevron-right" // Chevron derecha
  | "chevron-up" // Chevron arriba
  | "chevron-down" // Chevron abajo
  | "chevron-double-left" // Doble chevron izquierda
  | "chevron-double-right" // Doble chevron derecha
  | "info" // Información
  | "warning" // Advertencia
  | "error" // Error
  | "success"; // Éxito

export interface IconAtomProps {
  name: IconName;
  variant?: IconVariant;
  size?: IconSize;
  color?: string;
  style?: ViewStyle;
}
