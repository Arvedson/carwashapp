import { ViewStyle, TextStyle } from "react-native";

export type ServiceTimeVariant =
  | "default" // Estilo básico
  | "outlined" // Solo borde
  | "filled"; // Con fondo

export type ServiceTimeSize =
  | "small" // Pequeño
  | "medium" // Mediano
  | "large"; // Grande

export type TimeFormat = "12h" | "24h";

export interface TimeSlot {
  id: string;
  time: string;
  displayTime: string;
  available: boolean;
  disabled?: boolean;
}

export interface ServiceTimeProps {
  // Props básicas
  variant?: ServiceTimeVariant;
  size?: ServiceTimeSize;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  placeholder?: string;

  // Props de funcionalidad
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (time: string | null) => void;
  onDisplayModeChange?: (isExpanded: boolean) => void;

  // Props de configuración
  timeFormat?: TimeFormat;
  minTime?: string; // Formato HH:mm
  maxTime?: string; // Formato HH:mm
  interval?: number; // Intervalo en minutos (15, 30, 60)
  showClearButton?: boolean;
  showNowButton?: boolean;

  // Props de estilo
  style?: ViewStyle;
  inputStyle?: ViewStyle;
  timeListStyle?: ViewStyle;
  textStyle?: TextStyle;

  // Props de accesibilidad
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export interface ServiceTimeState {
  selectedTime: string | null;
  isExpanded: boolean;
  isAnimating: boolean;
  timeSlots: TimeSlot[];
}

export interface TimeSlotProps {
  slot: TimeSlot;
  isSelected: boolean;
  onPress: (time: string) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface TimeListProps {
  timeSlots: TimeSlot[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
