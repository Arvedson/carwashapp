import { ViewStyle } from "react-native";

export interface TimePickerProps {
  /**
   * Currently selected time
   */
  selectedTime: Date | null;

  /**
   * Function called when time is selected
   */
  onTimeChange: (time: Date) => void;

  /**
   * Minimum hour (0-23)
   */
  minHour?: number;

  /**
   * Maximum hour (0-23)
   */
  maxHour?: number;

  /**
   * Time interval in minutes
   */
  interval?: number;

  /**
   * Additional styles for the container
   */
  style?: ViewStyle;
}

export interface TimePickerStyles {
  container: ViewStyle;
  title: ViewStyle;
  scrollView: ViewStyle;
  scrollContent: ViewStyle;
  timeGrid: ViewStyle;
  timeOption: ViewStyle;
  selectedTimeOption: ViewStyle;
  timeText: ViewStyle;
  selectedTimeText: ViewStyle;
}
