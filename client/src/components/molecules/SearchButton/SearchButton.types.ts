export interface SearchButtonProps {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  style?: any;
}

export interface SearchButtonStyles {
  container: any;
  button: any;
  buttonText: any;
  loadingText: any;
  icon: any;
  loadingIcon: any;
}
