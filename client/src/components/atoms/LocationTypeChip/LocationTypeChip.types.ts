import { ViewStyle, TextStyle } from "react-native";

export type LocationType = "home" | "work" | "other";

export interface LocationTypeChipProps {
  type: LocationType;
  isSelected?: boolean;
  onPress: (type: LocationType) => void;
  style?: ViewStyle;
}

export interface LocationTypeChipStyles {
  container: ViewStyle;
  chip: ViewStyle;
  selectedChip: ViewStyle;
  icon: TextStyle;
  text: TextStyle;
  selectedText: TextStyle;
}



