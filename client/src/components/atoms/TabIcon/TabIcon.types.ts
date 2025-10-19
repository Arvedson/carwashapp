import { ViewStyle, TextStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface TabIconProps {
  /**
   * Name of the Ionicons icon
   */
  name: keyof typeof Ionicons.glyphMap;

  /**
   * Size of the icon
   */
  size?: number;

  /**
   * Color of the icon
   */
  color?: string;

  /**
   * Whether the tab is currently active
   */
  isActive?: boolean;

  /**
   * Additional styles for the icon container
   */
  style?: ViewStyle;
}

export interface TabIconStyles {
  container: ViewStyle;
  icon: TextStyle;
}
