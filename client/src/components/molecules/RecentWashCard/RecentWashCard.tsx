import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/molecules/Card";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { RecentWashCardProps } from "./RecentWashCard.types";
import { createRecentWashCardStyles } from "./RecentWashCard.styles";

const RecentWashCard: React.FC<RecentWashCardProps> = ({
  recentWash,
  onRepeat,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createRecentWashCardStyles(theme);

  if (!recentWash) {
    return (
      <Card style={[styles.container, style]}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No tienes lavados recientes</Text>
        </View>
      </Card>
    );
  }

  return (
    <Card style={[styles.container, style]}>
      <Text style={styles.title}>Tu último lavado</Text>

      <View style={styles.washInfo}>
        <View style={styles.washDetails}>
          <Text style={styles.washDate}>
            {recentWash.date} • {recentWash.washer.name}
          </Text>
          <Text style={styles.washPrice}>
            {recentWash.service} • ${recentWash.price}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.repeatButton}
          onPress={onRepeat}
          activeOpacity={0.7}
        >
          <Text style={{ color: theme.colors.text.inverse, fontWeight: "600" }}>
            Repetir
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default RecentWashCard;
