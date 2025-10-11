import { ViewStyle, TextStyle } from "react-native";

export interface ThemeDemoStyles {
  card: ViewStyle; // Solo margin, Card maneja el resto
  sectionTitle: TextStyle;
  sectionDescription: TextStyle;
  sectionRow: ViewStyle;
}

export interface ThemeDemoProps {
  // Por ahora no tiene props específicas, pero se puede extender en el futuro
  children?: React.ReactNode;
}
