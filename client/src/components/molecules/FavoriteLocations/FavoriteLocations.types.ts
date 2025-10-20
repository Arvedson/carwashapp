import { ViewStyle, TextStyle } from "react-native";
import { FavoriteLocation } from "@/types";

export interface FavoriteLocationsProps {
  locations: FavoriteLocation[];
  onSelect: (location: FavoriteLocation) => void;
  onAddLocation?: () => void;
  style?: ViewStyle;
}

export interface FavoriteLocationsStyles {
  container: ViewStyle;
  title: TextStyle;
  locationsRow: ViewStyle;
  locationChip: ViewStyle;
  locationIcon: TextStyle;
  locationName: TextStyle;
  emptyState: ViewStyle;
  emptyText: TextStyle;
  addButtonContainer: ViewStyle;
}
