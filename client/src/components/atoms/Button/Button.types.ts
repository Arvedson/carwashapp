import { TouchableOpacityProps } from "react-native";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "error"
  | "outline"
  | "ghost";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}
