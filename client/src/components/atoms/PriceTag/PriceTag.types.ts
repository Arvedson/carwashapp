import { ViewStyle, TextStyle } from "react-native";

export type PriceTagSize = "small" | "medium" | "large" | "xl";

export type PriceTagVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error";

export interface PriceTagProps {
  /**
   * Price amount to display
   */
  amount: number | string;

  /**
   * Currency symbol or code
   */
  currency?: string;

  /**
   * Size of the price tag
   */
  size?: PriceTagSize;

  /**
   * Visual variant
   */
  variant?: PriceTagVariant;

  /**
   * Show currency symbol
   */
  showCurrency?: boolean;

  /**
   * Position of currency (before or after amount)
   */
  currencyPosition?: "before" | "after";

  /**
   * Additional styles for the container
   */
  style?: ViewStyle;

  /**
   * Additional styles for the text
   */
  textStyle?: TextStyle;
}

export interface PriceTagStyles {
  container: ViewStyle;
  text: TextStyle;
  currency: TextStyle;
}
