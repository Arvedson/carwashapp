export type SettingType =
  | "switch"
  | "themeToggle"
  | "button"
  | "select"
  | "input";

export interface Setting {
  key: string;
  label: string;
  description?: string;
  type: SettingType;
  value?: any;
  options?: { label: string; value: any }[];
  disabled?: boolean;
  icon?: string;
}

export type SettingsSectionSize = "small" | "medium" | "large";

export type SettingsSectionVariant = "default" | "compact" | "detailed";

export interface SettingsSectionProps {
  /**
   * Title of the settings section
   */
  title: string;

  /**
   * Array of setting configurations
   */
  settings: Setting[];

  /**
   * Size of the section
   */
  size?: SettingsSectionSize;

  /**
   * Visual variant
   */
  variant?: SettingsSectionVariant;

  /**
   * Function called when a setting value changes
   */
  onSettingChange?: (key: string, value: any) => void;

  /**
   * Function called when a setting is pressed (for button type)
   */
  onSettingPress?: (key: string) => void;

  /**
   * Show section title
   */
  showTitle?: boolean;

  /**
   * Additional styles for the container
   */
  style?: any;

  /**
   * Additional styles for the content
   */
  contentStyle?: any;
}

export interface SettingsSectionStyles {
  container: any;
  title: any;
  content: any;
  settingItem: any;
  settingInfo: any;
  settingLabel: any;
  settingDescription: any;
  settingControl: any;
  divider: any;
}
