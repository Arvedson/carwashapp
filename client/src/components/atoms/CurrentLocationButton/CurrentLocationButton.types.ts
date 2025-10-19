import { TouchableOpacityProps } from "react-native";

export interface CurrentLocationButtonProps extends TouchableOpacityProps {
  /**
   * Size variant of the button
   */
  size?: "small" | "medium" | "large";
  
  /**
   * Whether the button is in loading state
   */
  loading?: boolean;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * Custom text for the button
   */
  text?: string;
}








