import { ViewProps } from "react-native";

export interface LocationMapProps extends ViewProps {
  /**
   * Size variant of the map
   */
  size?: "small" | "medium" | "large";
  
  /**
   * Initial latitude for the map center
   */
  initialLatitude?: number;
  
  /**
   * Initial longitude for the map center
   */
  initialLongitude?: number;
  
  /**
   * Initial zoom level
   */
  initialZoom?: number;
  
  /**
   * Whether to show user location
   */
  showsUserLocation?: boolean;
  
  /**
   * Whether to follow user location
   */
  followsUserLocation?: boolean;
  
  /**
   * Callback when map is ready
   */
  onMapReady?: () => void;
  
  /**
   * Callback when region changes
   */
  onRegionChange?: (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => void;
}



