import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { MenuItemProps } from "./MenuItem.types";
import { createMenuItemStyles } from "./MenuItem.styles";

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  subtitle,
  size = "medium",
  variant = "default",
  showChevron = false,
  badge,
  disabled = false,
  onPress,
  style,
  contentStyle,
  textStyle,
}) => {
  const { theme } = useTheme();
  const styles = createMenuItemStyles(theme, size, variant);

  const renderBadge = () => {
    if (!badge) return null;

    return (
      <View style={styles.badge}>
        <Text
          variant="caption"
          size="xs"
          style={{ color: theme.colors.text.inverse }}
        >
          {badge}
        </Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={[styles.content, contentStyle]}>
        {icon && <Text style={styles.icon}>{icon}</Text>}

        <View style={styles.textContainer}>
          <Text style={[styles.title, textStyle]}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        {showChevron && <Text style={styles.chevron}>›</Text>}

        {renderBadge()}
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
