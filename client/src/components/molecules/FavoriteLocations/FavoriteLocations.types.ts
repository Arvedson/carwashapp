import { FavoriteLocation } from "@/types";

export interface FavoriteLocationsProps {
  locations: FavoriteLocation[];
  onSelect: (location: FavoriteLocation) => void;
  style?: any;
}

export interface FavoriteLocationsStyles {
  container: any;
  title: any;
  locationsRow: any;
  locationChip: any;
  locationIcon: any;
  locationName: any;
  emptyState: any;
  emptyText: any;
}
