import { ViewStyle, TextStyle } from "react-native";
import { Location } from "@/types";

export interface LocationDisplayProps {
  location: Location | null;
  isLoading?: boolean;
  style?: ViewStyle;
}

export interface LocationDisplayStyles {
  container: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
  loadingText: TextStyle;
}
