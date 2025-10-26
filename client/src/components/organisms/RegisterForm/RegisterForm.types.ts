import { ViewStyle } from "react-native";
import { RegisterData } from "@/types";

export interface RegisterFormProps {
  onSuccess?: () => void;
  onSwitchToLogin?: () => void;
}

export interface RegisterFormState {
  formData: RegisterData;
  confirmPassword: string;
  loading: boolean;
  emailChecking: boolean;
  emailAvailable: boolean | null;
}

export interface RegisterFormHandlers {
  handleRegister: () => void;
  handleEmailChange: (email: string) => void;
  handleFillTestData: () => void;
  validateForm: () => boolean;
}

export interface RegisterFormStyles {
  container: ViewStyle;
}
