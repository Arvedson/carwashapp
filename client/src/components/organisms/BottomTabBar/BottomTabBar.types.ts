import { Ionicons } from "@expo/vector-icons";

export interface TabConfig {
  /**
   * Unique identifier for the tab
   */
  id: string;

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
   * Whether the tab is disabled
   */
  disabled?: boolean;
}

export interface BottomTabBarProps {
  /**
   * Array of tab configurations
   */
  tabs: TabConfig[];

  /**
   * Function called when a tab is pressed
   */
  onTabPress?: (tabId: string) => void;

  /**
   * Size of the icons
   */
  iconSize?: number;

  /**
   * Additional styles for the tab bar container
   */
  style?: any;

  /**
   * Whether to show the tab bar
   */
  visible?: boolean;
}

export interface BottomTabBarStyles {
  container: any;
  content: any;
  tabContainer: any;
}
