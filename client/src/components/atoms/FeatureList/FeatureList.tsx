import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { FeatureListProps } from "./FeatureList.types";
import { createFeatureListStyles } from "./FeatureList.styles";

const FeatureList: React.FC<FeatureListProps> = ({
  features,
  variant = "checkmark",
  size = "medium",
  icon,
  maxItems = 0,
  showMore = true,
  style,
  itemStyle,
  textStyle,
}) => {
  const { theme } = useTheme();
  const styles = createFeatureListStyles(theme, size, variant);

  const getIcon = (index: number) => {
    if (icon) return icon;

    switch (variant) {
      case "checkmark":
        return "✓";
      case "bullet":
        return "•";
      case "number":
        return `${index + 1}.`;
      case "icon":
        return "→";
      default:
        return "✓";
    }
  };

  const displayFeatures = maxItems > 0 ? features.slice(0, maxItems) : features;
  const remainingCount = maxItems > 0 ? features.length - maxItems : 0;

  return (
    <View style={[styles.container, style]}>
      {displayFeatures.map((feature, index) => (
        <View key={index} style={[styles.item, itemStyle]}>
          <Text style={[styles.icon, { color: theme.colors.primary }]}>
            {getIcon(index)}
          </Text>
          <Text style={[styles.text, textStyle]}>{feature}</Text>
        </View>
      ))}
      {remainingCount > 0 && showMore && (
        <Text style={styles.moreText}>y {remainingCount} más...</Text>
      )}
    </View>
  );
};

export default FeatureList;
