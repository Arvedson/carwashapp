import { ViewProps } from "react-native";

export interface LocationSectionContainerProps extends ViewProps {
  /**
   * Size variant for the map
   */
  mapSize?: "small" | "medium" | "large";

  /**
   * Size variant for the location button
   */
  buttonSize?: "small" | "medium" | "large";

  /**
   * Card variant for the container
   */
  cardVariant?: "default" | "elevated" | "outlined" | "filled";

  /**
   * Card size for the container
   */
  cardSize?: "small" | "medium" | "large";

  /**
   * Header text content
   */
  headerText?: string;

  /**
   * Button text content
   */
  buttonText?: string;

  /**
   * Whether to show the location button
   */
  showLocationButton?: boolean;

  /**
   * Callback when location button is pressed
   */
  onLocationPress?: () => void;

  /**
   * Callback when map region changes
   */
  onMapRegionChange?: (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => void;
}
