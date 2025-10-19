import { User, Location } from "@/types";

export interface HeaderSectionProps {
  user: User | null;
  currentLocation: Location | null;
  onLocationPress: () => void;
  style?: any;
}

export interface HeaderSectionStyles {
  container: any;
  content: any;
  locationRow: any;
}
