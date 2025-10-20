import { ViewStyle, TextStyle } from "react-native";
import { Location } from "@/types";
import { LocationFormData } from "@/components/molecules/LocationForm";

export interface AddLocationModalProps {
  /**
   * Whether the modal is visible
   */
  visible: boolean;

  /**
   * Function called when modal should close
   */
  onClose: () => void;

  /**
   * Function called when a location is saved
   */
  onLocationSave: (locationData: LocationFormData) => void;

  /**
   * Currently selected location
   */
  selectedLocation?: Location | null;

  /**
   * Modal title
   */
  title?: string;

  /**
   * Modal subtitle
   */
  subtitle?: string;

  /**
   * Whether the modal is in loading state
   */
  isLoading?: boolean;

  /**
   * Additional styles for the modal container
   */
  style?: ViewStyle;
}

export interface AddLocationModalStyles {
  overlay: ViewStyle;
  safeArea: ViewStyle;
  modalContainer: ViewStyle;
  modalHandle: ViewStyle;
  header: ViewStyle;
  headerContent: ViewStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
  closeButton: ViewStyle;
  content: ViewStyle;
  actionButtons: ViewStyle;
  cancelButton: ViewStyle;
  confirmButton: ViewStyle;
  minimizedIndicator: ViewStyle;
  minimizedText: TextStyle;
  dragIndicator: ViewStyle;
  dragText: TextStyle;
}
