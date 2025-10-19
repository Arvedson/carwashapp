export type EmptyStateSize = "small" | "medium" | "large";

export type EmptyStateVariant = "default" | "primary" | "secondary" | "minimal";

export interface EmptyStateProps {
  /**
   * Icon or emoji to display
   */
  icon?: string;

  /**
   * Main title text
   */
  title: string;

  /**
   * Description text
   */
  description?: string;

  /**
   * Size of the empty state
   */
  size?: EmptyStateSize;

  /**
   * Visual variant
   */
  variant?: EmptyStateVariant;

  /**
   * Text for the action button
   */
  actionText?: string;

  /**
   * Function called when action button is pressed
   */
  onAction?: () => void;

  /**
   * Show action button
   */
  showAction?: boolean;

  /**
   * Additional styles for the container
   */
  style?: any;

  /**
   * Additional styles for the content
   */
  contentStyle?: any;

  /**
   * Additional styles for the icon
   */
  iconStyle?: any;

  /**
   * Additional styles for the title
   */
  titleStyle?: any;

  /**
   * Additional styles for the description
   */
  descriptionStyle?: any;
}

export interface EmptyStateStyles {
  container: any;
  content: any;
  icon: any;
  title: any;
  description: any;
  action: any;
}
