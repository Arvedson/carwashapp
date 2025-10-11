import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../atoms";
import { Card } from "../../molecules";
import { useTheme } from "@/contexts/ThemeContext";
import { createThemeDemoStyles } from "./ThemeDemo.styles";
import { ThemeDemoProps } from "./ThemeDemo.types";

const ThemeDemo: React.FC<ThemeDemoProps> = () => {
  const { theme } = useTheme();
  const styles = createThemeDemoStyles(theme);

  return (
    <Card variant="default" size="medium" style={styles.card}>
      <Text style={styles.sectionTitle}>🎨 Theme Integration Demo</Text>
      <Text style={styles.sectionDescription}>
        Este componente demuestra cómo los atoms se adaptan automáticamente al
        cambio de tema. Los colores, espaciado y bordes cambian dinámicamente.
      </Text>

      <View style={styles.sectionRow}>
        <Button variant="primary" size="small">
          Primary
        </Button>
        <Button variant="secondary" size="small">
          Secondary
        </Button>
        <Button variant="outline" size="small">
          Outline
        </Button>
        <Button variant="ghost" size="small">
          Ghost
        </Button>
      </View>
    </Card>
  );
};

export default ThemeDemo;
