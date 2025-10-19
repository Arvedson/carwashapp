import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";
import { TabItem } from "@/components/molecules/TabItem";
import { BottomTabBarProps } from "./BottomTabBar.types";
import { createBottomTabBarStyles } from "./BottomTabBar.styles";

const BottomTabBar: React.FC<BottomTabBarProps> = ({
  tabs,
  onTabPress,
  iconSize = 24,
  style,
  visible = true,
}) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createBottomTabBarStyles(theme, insets);

  if (!visible) {
    return null;
  }

  const handleTabPress = (tabId: string) => {
    onTabPress?.(tabId);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        {tabs.map((tab) => (
          <View key={tab.id} style={styles.tabContainer}>
            <TabItem
              iconName={tab.iconName}
              label={tab.label}
              isActive={tab.isActive}
              onPress={() => handleTabPress(tab.id)}
              iconSize={iconSize}
              disabled={tab.disabled}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default BottomTabBar;
