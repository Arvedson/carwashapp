import { ViewStyle, TextStyle } from "react-native";

export interface ThemeToggleSectionStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  buttonContainer: ViewStyle;
}

export interface ThemeToggleSectionProps {
  // Por ahora no tiene props específicas, pero se puede extender en el futuro
  children?: React.ReactNode;
}
