import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Button } from "@/components/atoms";
import { Container } from "@/components/organisms/Container";
import { ThemeDemo } from "@/components/organisms/ThemeDemo";
import { ThemeToggleSection } from "@/components/organisms/ThemeToggleSection";
import { ButtonStories } from "@/components/molecules";
import { useTheme } from "@/contexts/ThemeContext";

const DevScreen: React.FC = () => {
  const { theme } = useTheme();
  const colors = theme.colors;
  const spacing = theme.spacing;

  const dynamicStyles = {
    title: {
      fontSize: 28,
      fontWeight: "bold" as const,
      textAlign: "center" as const,
      marginTop: spacing.xl,
      marginBottom: spacing.sm,
      color: colors.text.primary,
    },
    subtitle: {
      fontSize: 16,
      textAlign: "center" as const,
      marginBottom: spacing.xxxl,
      color: colors.text.secondary,
    },
    section: {
      marginBottom: 40,
      paddingHorizontal: spacing.xl,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600" as const,
      marginBottom: spacing.sm,
      color: colors.text.primary,
    },
    sectionDescription: {
      fontSize: 14,
      marginBottom: spacing.md,
      color: colors.text.secondary,
      textAlign: "center" as const,
    },
  };

  return (
    <Container variant="base" style={{ backgroundColor: colors.background }}>
      <ScrollView>
        <Text style={dynamicStyles.title}>🧪 Component Stories</Text>
        <Text style={dynamicStyles.subtitle}>
          Desarrollo y Testing de Componentes
        </Text>

        {/* Sección de cambio de tema */}
        <ThemeToggleSection />

        {/* Demo de integración de temas */}
        <ThemeDemo />

        <View style={dynamicStyles.section}>
          <Text style={dynamicStyles.sectionTitle}>🔘 Button Component</Text>
          <Text style={dynamicStyles.sectionDescription}>
            Todas las variantes, tamaños y estados del componente Button
          </Text>
          <ButtonStories />
        </View>

        {/* Aquí puedes agregar más stories cuando los creemos */}
        <View style={dynamicStyles.section}>
          <Text style={dynamicStyles.sectionTitle}>
            📝 Próximos Componentes
          </Text>
          <Text style={dynamicStyles.sectionDescription}>
            Input, Card, Text, y más componentes vendrán aquí...
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default DevScreen;
