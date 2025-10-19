import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { TabIcon } from "@/components/atoms/TabIcon";
import { Text } from "@/components/atoms/Text";
import { TabItemProps } from "./TabItem.types";
import { createTabItemStyles } from "./TabItem.styles";

const TabItem: React.FC<TabItemProps> = ({
  iconName,
  label,
  isActive = false,
  onPress,
  iconSize = 24,
  color,
  style,
  disabled = false,
}) => {
  const { theme } = useTheme();
  const styles = createTabItemStyles(theme);

  // Determine colors based on active state and theme
  const activeColor = color || theme.colors.primary;
  const inactiveColor = theme.colors.text.secondary;
  const textColor = isActive ? activeColor : inactiveColor;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <TabIcon
            name={iconName}
            size={iconSize}
            color={textColor}
            isActive={isActive}
          />
        </View>
        <Text
          variant="caption"
          size="xs"
          style={[styles.label, { color: textColor }]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabItem;
