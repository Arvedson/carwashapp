import { ViewStyle, TextStyle } from "react-native";
import { RecentWash, FavoriteLocation } from "@/types";

export interface QuickAccessSectionProps {
  recentWash: RecentWash | null;
  favoriteLocations: FavoriteLocation[];
  onRepeatWash: () => void;
  onSelectLocation: (location: FavoriteLocation) => void;
  onAddLocation?: () => void;
  style?: ViewStyle;
}

export interface QuickAccessSectionStyles {
  container: ViewStyle;
  title: TextStyle;
  content: ViewStyle;
}
