import { ViewStyle, TextStyle } from "react-native";

export type StatusBadgeVariant =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

export type StatusBadgeSize = "small" | "medium" | "large";

export type StatusType =
  | "confirmed"
  | "pending"
  | "cancelled"
  | "completed"
  | "in_progress";

export interface StatusBadgeProps {
  /**
   * Status type that determines the appearance
   */
  status: StatusType;

  /**
   * Size of the badge
   */
  size?: StatusBadgeSize;

  /**
   * Custom variant override
   */
  variant?: StatusBadgeVariant;

  /**
   * Custom text to display
   */
  text?: string;

  /**
   * Additional styles for the badge container
   */
  style?: ViewStyle;

  /**
   * Additional styles for the text
   */
  textStyle?: TextStyle;
}

export interface StatusBadgeStyles {
  container: ViewStyle;
  text: TextStyle;
}
