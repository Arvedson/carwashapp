// Google Maps Configuration
// Replace with your actual Google Maps API key
export const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

// Default map region (San Francisco)
export const DEFAULT_MAP_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

// Map configuration
export const MAP_CONFIG = {
  // Map types
  mapType: "standard" as const,

  // User location settings
  showsUserLocation: true,
  followsUserLocation: false,

  // Map controls
  showsMyLocationButton: false,
  showsCompass: true,
  showsScale: true,
  showsBuildings: true,
  showsTraffic: false,
  showsIndoors: true,
  loadingEnabled: true,

  // Zoom levels
  minZoomLevel: 1,
  maxZoomLevel: 20,
  defaultZoomLevel: 15,
};





















