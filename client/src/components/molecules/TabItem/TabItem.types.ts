import { Ionicons } from "@expo/vector-icons";

export interface TabItemProps {
  /**
   * Name of the Ionicons icon
   */
  iconName: keyof typeof Ionicons.glyphMap;

  /**
   * Label text for the tab
   */
  label: string;

  /**
   * Whether the tab is currently active
   */
  isActive?: boolean;

  /**
   * Function called when tab is pressed
   */
  onPress?: () => void;

  /**
   * Size of the icon
   */
  iconSize?: number;

  /**
   * Color of the icon and text
   */
  color?: string;

  /**
   * Additional styles for the tab container
   */
  style?: any;

  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
}

export interface TabItemStyles {
  container: any;
  content: any;
  label: any;
  iconContainer: any;
}
