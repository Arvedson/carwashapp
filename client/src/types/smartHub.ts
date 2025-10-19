// Smart Hub Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface VehicleType {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface DirtLevel {
  id: string;
  name: string;
  level: number; // 1-4
  color: string;
  icon: string;
  description: string;
}

export interface TimeChoice {
  id: string;
  label: string;
  value: "now" | "schedule";
  icon?: string;
}

export interface Washer {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  distance: number; // en km
  price: number;
  isAvailable: boolean;
  location: Location;
  services: string[];
  verified: boolean;
}

export interface RecentWash {
  id: string;
  date: string;
  service: string;
  price: number;
  washer: {
    name: string;
    avatar: string;
  };
  vehicle: string;
  location: string;
}

export interface FavoriteLocation {
  id: string;
  name: string;
  icon: string;
  address: string;
  location: Location;
  type: "home" | "work" | "other";
}

export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  discount: number;
  code?: string;
  imageUrl?: string;
  validUntil: string;
  isActive: boolean;
}

export interface TrustFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Smart Hub State
export interface SmartHubState {
  user: User | null;
  currentLocation: Location | null;
  selectedVehicle: VehicleType | null;
  selectedDirtLevel: DirtLevel | null;
  selectedTimeChoice: TimeChoice | null;
  scheduledDate: Date | null;
  washers: Washer[];
  recentWashes: RecentWash[];
  favoriteLocations: FavoriteLocation[];
  promotions: Promotion[];
  isLoading: boolean;
  error: string | null;
}

// Component Props Types
export interface UserGreetingProps {
  user: User;
  style?: any;
}

export interface LocationDisplayProps {
  location: Location | null;
  isLoading?: boolean;
  style?: any;
}

export interface LocationButtonProps {
  onPress: () => void;
  isLoading?: boolean;
  style?: any;
}

export interface VehicleSelectorProps {
  vehicles: VehicleType[];
  selectedVehicle: VehicleType | null;
  onSelect: (vehicle: VehicleType) => void;
  style?: any;
}

export interface DirtLevelSliderProps {
  levels: DirtLevel[];
  selectedLevel: DirtLevel | null;
  onSelect: (level: DirtLevel) => void;
  style?: any;
}

export interface TimeChoiceChipsProps {
  choices: TimeChoice[];
  selectedChoice: TimeChoice | null;
  onSelect: (choice: TimeChoice) => void;
  onSchedulePress?: () => void;
  style?: any;
}

export interface SearchButtonProps {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  style?: any;
}

export interface WashersMapProps {
  userLocation: Location | null;
  washers: Washer[];
  onWasherSelect: (washer: Washer) => void;
  style?: any;
}

export interface WasherMiniCardProps {
  washer: Washer;
  onPress: () => void;
  style?: any;
}

export interface RecentWashCardProps {
  recentWash: RecentWash | null;
  onRepeat: () => void;
  style?: any;
}

export interface FavoriteLocationsProps {
  locations: FavoriteLocation[];
  onSelect: (location: FavoriteLocation) => void;
  style?: any;
}

export interface PromoBannerProps {
  promotions: Promotion[];
  onPromoPress: (promotion: Promotion) => void;
  style?: any;
}

export interface TrustMiniCardProps {
  features: TrustFeature[];
  style?: any;
}

// Section Props
export interface HeaderSectionProps {
  user: User | null;
  currentLocation: Location | null;
  onLocationPress: () => void;
  style?: any;
}

export interface RequestCardProps {
  vehicles: VehicleType[];
  dirtLevels: DirtLevel[];
  timeChoices: TimeChoice[];
  selectedVehicle: VehicleType | null;
  selectedDirtLevel: DirtLevel | null;
  selectedTimeChoice: TimeChoice | null;
  onVehicleSelect: (vehicle: VehicleType) => void;
  onDirtLevelSelect: (level: DirtLevel) => void;
  onTimeChoiceSelect: (choice: TimeChoice) => void;
  onSearch: () => void;
  onSchedulePress?: () => void;
  isLoading?: boolean;
  style?: any;
}

export interface MapOrResultsSectionProps {
  userLocation: Location | null;
  washers: Washer[];
  onWasherSelect: (washer: Washer) => void;
  style?: any;
}

export interface QuickAccessSectionProps {
  recentWash: RecentWash | null;
  favoriteLocations: FavoriteLocation[];
  onRepeatWash: () => void;
  onSelectLocation: (location: FavoriteLocation) => void;
  style?: any;
}

export interface PromotionsSectionProps {
  promotions: Promotion[];
  trustFeatures: TrustFeature[];
  onPromoPress: (promotion: Promotion) => void;
  style?: any;
}
