import React from "react";
import { View } from "react-native";
import { Button } from "@/components/atoms";
import { Container } from "@/components/organisms/Container";
import { useTheme } from "@/contexts/ThemeContext";

// Molécula que combina múltiples atoms Button para mostrar todas las variantes
const ButtonStories: React.FC = () => {
  const { theme } = useTheme();
  const colors = theme.colors;
  const spacing = theme.spacing;

  const dynamicStyles = {
    section: {
      marginBottom: spacing.xl,
    },
    sectionRow: {
      flexDirection: "row" as const,
      flexWrap: "wrap" as const,
      gap: spacing.sm,
      marginBottom: spacing.lg,
    },
    button: {
      marginRight: spacing.sm,
      marginBottom: spacing.sm,
    },
  };

  return (
    <Container variant="padded" style={{ backgroundColor: colors.background }}>
      {/* Variantes de color */}
      <View style={dynamicStyles.section}>
        <View style={dynamicStyles.sectionRow}>
          <Button variant="primary" style={dynamicStyles.button}>
            Primary
          </Button>
          <Button variant="secondary" style={dynamicStyles.button}>
            Secondary
          </Button>
          <Button variant="error" style={dynamicStyles.button}>
            Error
          </Button>
          <Button variant="outline" style={dynamicStyles.button}>
            Outline
          </Button>
          <Button variant="ghost" style={dynamicStyles.button}>
            Ghost
          </Button>
        </View>
      </View>

      {/* Tamaños */}
      <View style={dynamicStyles.section}>
        <View style={dynamicStyles.sectionRow}>
          <Button size="small" style={dynamicStyles.button}>
            Small
          </Button>
          <Button size="medium" style={dynamicStyles.button}>
            Medium
          </Button>
          <Button size="large" style={dynamicStyles.button}>
            Large
          </Button>
        </View>
      </View>

      {/* Estados */}
      <View style={dynamicStyles.section}>
        <View style={dynamicStyles.sectionRow}>
          <Button loading style={dynamicStyles.button}>
            Loading
          </Button>
          <Button disabled style={dynamicStyles.button}>
            Disabled
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default ButtonStories;
