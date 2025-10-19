export type FeatureListVariant = "checkmark" | "bullet" | "number" | "icon";

export type FeatureListSize = "small" | "medium" | "large";

export interface FeatureListProps {
  /**
   * Array of feature strings to display
   */
  features: string[];

  /**
   * Visual variant for the list
   */
  variant?: FeatureListVariant;

  /**
   * Size of the list items
   */
  size?: FeatureListSize;

  /**
   * Custom icon for the variant
   */
  icon?: string;

  /**
   * Maximum number of features to show (0 = show all)
   */
  maxItems?: number;

  /**
   * Show "and X more" when maxItems is exceeded
   */
  showMore?: boolean;

  /**
   * Additional styles for the container
   */
  style?: any;

  /**
   * Additional styles for individual items
   */
  itemStyle?: any;

  /**
   * Additional styles for the text
   */
  textStyle?: any;
}

export interface FeatureListStyles {
  container: any;
  item: any;
  icon: any;
  text: any;
  moreText: any;
}
