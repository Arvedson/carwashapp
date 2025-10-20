import { ViewStyle } from "react-native";
import { Location } from "@/types";
import { LocationType } from "@/components/atoms/LocationTypeChip";

export interface LocationFormData {
  name: string;
  type: LocationType;
  location: Location;
}

export interface LocationFormProps {
  selectedLocation: Location | null;
  formData: LocationFormData;
  onFormDataChange: (data: Partial<LocationFormData>) => void;
  onTypeSelect: (type: LocationType) => void;
  isLoading?: boolean;
  style?: ViewStyle;
}

export interface LocationFormStyles {
  container: ViewStyle;
  section: ViewStyle;
  sectionTitle: ViewStyle;
  inputContainer: ViewStyle;
  typeSelectorContainer: ViewStyle;
  locationDisplayContainer: ViewStyle;
}
