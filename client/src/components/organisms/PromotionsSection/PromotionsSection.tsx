import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { PromoBanner } from "@/components/molecules/PromoBanner";
import { TrustMiniCard } from "@/components/molecules/TrustMiniCard";
import { PromotionsSectionProps } from "./PromotionsSection.types";
import { createPromotionsSectionStyles } from "./PromotionsSection.styles";

const PromotionsSection: React.FC<PromotionsSectionProps> = ({
  promotions,
  trustFeatures,
  onPromoPress,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createPromotionsSectionStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Promociones y Confianza</Text>

      <View style={styles.content}>
        <PromoBanner promotions={promotions} onPromoPress={onPromoPress} />

        <TrustMiniCard features={trustFeatures} />
      </View>
    </View>
  );
};

export default PromotionsSection;
