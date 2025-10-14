import { ViewStyle, TextStyle } from "react-native";

export type DatePickerVariant =
  | "default" // Estilo básico con borde
  | "outlined" // Solo borde, sin fondo
  | "filled" // Con fondo sólido
  | "underlined"; // Solo línea inferior

export type DatePickerSize =
  | "small" // Pequeño - optimizado para mobile
  | "medium" // Mediano
  | "large"; // Grande

export type DatePickerMode =
  | "single" // Selección de fecha única
  | "range" // Selección de rango de fechas
  | "multiple"; // Selección múltiple

export type DatePickerDisplayMode =
  | "collapsed" // Solo muestra la fecha seleccionada
  | "expanded"; // Muestra el calendario completo

export interface DatePickerProps {
  // Props básicas
  variant?: DatePickerVariant;
  size?: DatePickerSize;
  mode?: DatePickerMode;
  displayMode?: DatePickerDisplayMode;

  // Props de funcionalidad
  value?: Date | Date[] | null;
  defaultValue?: Date | Date[] | null;
  onChange?: (date: Date | Date[] | null) => void;
  onDisplayModeChange?: (mode: DatePickerDisplayMode) => void;

  // Props de validación
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;

  // Props de UI
  label?: string;
  placeholder?: string;
  format?: string; // Formato de visualización de fecha
  locale?: string;

  // Props de calendario
  showWeekNumbers?: boolean;
  showTodayButton?: boolean;
  showClearButton?: boolean;
  firstDayOfWeek?: 0 | 1; // 0 = Domingo, 1 = Lunes

  // Props de estilo
  style?: ViewStyle;
  inputStyle?: ViewStyle;
  calendarStyle?: ViewStyle;
  textStyle?: TextStyle;

  // Props de accesibilidad
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export interface CalendarCellProps {
  date: Date;
  isSelected: boolean;
  isToday: boolean;
  isDisabled: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  onPress: (date: Date) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface CalendarHeaderProps {
  currentDate: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onPreviousYear: () => void;
  onNextYear: () => void;
  onMonthPress?: () => void;
  onYearPress?: () => void;
  size?: DatePickerSize;
  style?: ViewStyle;
}

export interface WeekHeaderProps {
  weekDays: string[];
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface DatePickerState {
  selectedDate: Date | null;
  selectedDates: Date[];
  dateRange: DateRange;
  currentMonth: Date;
  isExpanded: boolean;
  isAnimating: boolean;
}
