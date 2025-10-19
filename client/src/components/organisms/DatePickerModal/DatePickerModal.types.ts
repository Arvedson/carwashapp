import { ViewStyle } from "react-native";

export interface DatePickerModalProps {
  /**
   * Whether the modal is visible
   */
  visible: boolean;

  /**
   * Function called when modal should close
   */
  onClose: () => void;

  /**
   * Function called when a date is selected
   */
  onDateSelect: (date: Date | null) => void;

  /**
   * Currently selected date
   */
  selectedDate: Date | null;

  /**
   * Minimum selectable date
   */
  minDate?: Date;

  /**
   * Maximum selectable date
   */
  maxDate?: Date;

  /**
   * Modal title
   */
  title?: string;

  /**
   * Modal subtitle
   */
  subtitle?: string;

  /**
   * Additional styles for the modal container
   */
  style?: ViewStyle;
}

export interface DatePickerModalStyles {
  overlay: ViewStyle;
  modalContainer: ViewStyle;
  modalHandle: ViewStyle;
  header: ViewStyle;
  headerContent: ViewStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
  closeButton: ViewStyle;
  datePickerWrapper: ViewStyle;
  datePickerContainer: ViewStyle;
  datePickerScrollContent: ViewStyle;
  actionButtons: ViewStyle;
  cancelButton: ViewStyle;
  confirmButton: ViewStyle;
}
