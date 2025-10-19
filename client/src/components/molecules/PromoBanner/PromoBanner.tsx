import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { PromoBannerProps } from "./PromoBanner.types";
import { createPromoBannerStyles } from "./PromoBanner.styles";

const PromoBanner: React.FC<PromoBannerProps> = ({
  promotions,
  onPromoPress,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createPromoBannerStyles(theme);

  const activePromotion = promotions.find((promo) => promo.isActive);

  if (!activePromotion) {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No hay promociones disponibles</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.banner}
        onPress={() => onPromoPress(activePromotion)}
        activeOpacity={0.8}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>{activePromotion.title}</Text>
          <Text style={styles.bannerSubtitle}>{activePromotion.subtitle}</Text>
        </View>
        <Text style={styles.bannerIcon}>🎁</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromoBanner;
