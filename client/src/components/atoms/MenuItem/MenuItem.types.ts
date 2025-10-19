import { ViewStyle, TextStyle } from "react-native";

export type MenuItemSize = "small" | "medium" | "large";

export type MenuItemVariant = "default" | "primary" | "danger" | "ghost";

export interface MenuItemProps {
  /**
   * Icon or emoji to display
   */
  icon?: string;

  /**
   * Title text
   */
  title: string;

  /**
   * Optional subtitle
   */
  subtitle?: string;

  /**
   * Size of the menu item
   */
  size?: MenuItemSize;

  /**
   * Visual variant
   */
  variant?: MenuItemVariant;

  /**
   * Show chevron arrow
   */
  showChevron?: boolean;

  /**
   * Show badge with count
   */
  badge?: number | string;

  /**
   * Whether the item is disabled
   */
  disabled?: boolean;

  /**
   * Function called when pressed
   */
  onPress?: () => void;

  /**
   * Additional styles for the container
   */
  style?: ViewStyle;

  /**
   * Additional styles for the content
   */
  contentStyle?: ViewStyle;

  /**
   * Additional styles for the text
   */
  textStyle?: TextStyle;
}

export interface MenuItemStyles {
  container: ViewStyle;
  content: ViewStyle;
  icon: TextStyle;
  textContainer: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  chevron: TextStyle;
  badge: ViewStyle;
}
