import { ViewStyle, TextStyle } from "react-native";

export interface LocationButtonProps {
  onPress: () => void;
  isLoading?: boolean;
  style?: ViewStyle;
}

export interface LocationButtonStyles {
  container: ViewStyle;
  button: ViewStyle;
  icon: TextStyle;
  loadingIcon: TextStyle;
}
