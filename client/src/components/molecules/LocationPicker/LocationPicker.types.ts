import { ViewStyle } from "react-native";
import { Location } from "@/types";

export interface LocationPickerProps {
  selectedLocation?: Location | null;
  onLocationSelect: (location: Location) => void;
  onCurrentLocationPress: () => void;
  isLoading?: boolean;
  style?: ViewStyle;
}

export interface LocationPickerStyles {
  container: ViewStyle;
  mapContainer: ViewStyle;
  controlsContainer: ViewStyle;
  buttonContainer: ViewStyle;
}



