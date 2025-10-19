import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { RecentWashCard } from "@/components/molecules/RecentWashCard";
import { FavoriteLocations } from "@/components/molecules/FavoriteLocations";
import { QuickAccessSectionProps } from "./QuickAccessSection.types";
import { createQuickAccessSectionStyles } from "./QuickAccessSection.styles";

const QuickAccessSection: React.FC<QuickAccessSectionProps> = ({
  recentWash,
  favoriteLocations,
  onRepeatWash,
  onSelectLocation,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createQuickAccessSectionStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Acceso rápido</Text>

      <View style={styles.content}>
        <RecentWashCard recentWash={recentWash} onRepeat={onRepeatWash} />

        <FavoriteLocations
          locations={favoriteLocations}
          onSelect={onSelectLocation}
        />
      </View>
    </View>
  );
};

export default QuickAccessSection;
