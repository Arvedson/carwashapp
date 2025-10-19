import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/molecules/Card";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { EmptyStateProps } from "./EmptyState.types";
import { createEmptyStateStyles } from "./EmptyState.styles";

const EmptyState: React.FC<EmptyStateProps> = ({
  icon = "📭",
  title,
  description,
  size = "medium",
  variant = "default",
  actionText,
  onAction,
  showAction = true,
  style,
  contentStyle,
  iconStyle,
  titleStyle,
  descriptionStyle,
}) => {
  const { theme } = useTheme();
  const styles = createEmptyStateStyles(theme, size, variant);

  const renderContent = () => (
    <View style={[styles.content, contentStyle]}>
      <Text style={[styles.icon, iconStyle]}>{icon}</Text>

      <Text style={[styles.title, titleStyle]}>{title}</Text>

      {description && (
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      )}

      {showAction && actionText && onAction && (
        <Button
          variant="primary"
          size="medium"
          style={styles.action}
          onPress={onAction}
        >
          {actionText}
        </Button>
      )}
    </View>
  );

  if (variant === "minimal") {
    return <View style={[styles.container, style]}>{renderContent()}</View>;
  }

  return (
    <Card variant="default" size="large" style={[styles.container, style]}>
      {renderContent()}
    </Card>
  );
};

export default EmptyState;
