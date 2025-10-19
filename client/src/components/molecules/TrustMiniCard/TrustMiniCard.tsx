import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { TrustMiniCardProps } from "./TrustMiniCard.types";
import { createTrustMiniCardStyles } from "./TrustMiniCard.styles";

const TrustMiniCard: React.FC<TrustMiniCardProps> = ({ features, style }) => {
  const { theme } = useTheme();
  const styles = createTrustMiniCardStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.featuresRow}>
        {features.map((feature) => (
          <View key={feature.id} style={styles.featureItem}>
            <Text style={styles.featureIcon}>{feature.icon}</Text>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TrustMiniCard;
