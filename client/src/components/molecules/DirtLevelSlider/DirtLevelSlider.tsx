import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { DirtLevelSliderProps } from "./DirtLevelSlider.types";
import { createDirtLevelSliderStyles } from "./DirtLevelSlider.styles";

const DirtLevelSlider: React.FC<DirtLevelSliderProps> = ({
  levels,
  selectedLevel,
  onSelect,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createDirtLevelSliderStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.slider}>
        {levels.map((level) => {
          const isSelected = selectedLevel?.id === level.id;

          return (
            <TouchableOpacity
              key={level.id}
              style={[styles.levelItem, isSelected && styles.selectedLevelItem]}
              onPress={() => onSelect(level)}
              activeOpacity={0.7}
            >
              <Text style={styles.levelIcon}>{level.icon}</Text>
              <Text
                style={[
                  styles.levelName,
                  isSelected && styles.selectedLevelName,
                ]}
              >
                {level.name}
              </Text>
              <Text
                style={[
                  styles.levelDescription,
                  isSelected && styles.selectedLevelDescription,
                ]}
              >
                {level.description}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default DirtLevelSlider;
