import { ViewStyle, TextStyle } from "react-native";

export interface AddLocationButtonProps {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  text?: string;
  style?: ViewStyle;
}

export interface AddLocationButtonStyles {
  container: ViewStyle;
  button: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
  loadingText: TextStyle;
}



















