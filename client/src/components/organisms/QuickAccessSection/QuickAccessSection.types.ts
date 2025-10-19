import { RecentWash, FavoriteLocation } from "@/types";

export interface QuickAccessSectionProps {
  recentWash: RecentWash | null;
  favoriteLocations: FavoriteLocation[];
  onRepeatWash: () => void;
  onSelectLocation: (location: FavoriteLocation) => void;
  style?: any;
}

export interface QuickAccessSectionStyles {
  container: any;
  title: any;
  content: any;
}
