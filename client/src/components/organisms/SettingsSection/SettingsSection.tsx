import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/molecules/Card";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Switch } from "@/components/atoms/Switch";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { Divider } from "@/components/atoms/Divider";
import { SettingsSectionProps, Setting } from "./SettingsSection.types";
import { createSettingsSectionStyles } from "./SettingsSection.styles";

const SettingsSection: React.FC<SettingsSectionProps> = ({
  title,
  settings,
  size = "medium",
  variant = "default",
  onSettingChange,
  onSettingPress,
  showTitle = true,
  style,
  contentStyle,
}) => {
  const { theme } = useTheme();
  const styles = createSettingsSectionStyles(theme, size, variant);

  const renderSettingControl = (setting: Setting) => {
    const handleValueChange = (value: any) => {
      onSettingChange?.(setting.key, value);
    };

    const handlePress = () => {
      onSettingPress?.(setting.key);
    };

    switch (setting.type) {
      case "switch":
        return (
          <Switch
            size="medium"
            value={setting.value || false}
            onValueChange={handleValueChange}
            disabled={setting.disabled}
          />
        );

      case "themeToggle":
        return <ThemeToggle size="medium" />;

      case "button":
        return (
          <Button
            variant="outline"
            size="small"
            onPress={handlePress}
            disabled={setting.disabled}
          >
            {setting.value || "Configurar"}
          </Button>
        );

      case "select":
        return (
          <Button
            variant="outline"
            size="small"
            onPress={handlePress}
            disabled={setting.disabled}
          >
            {setting.value || "Seleccionar"}
          </Button>
        );

      case "input":
        return (
          <Button
            variant="outline"
            size="small"
            onPress={handlePress}
            disabled={setting.disabled}
          >
            {setting.value || "Editar"}
          </Button>
        );

      default:
        return null;
    }
  };

  return (
    <Card variant="default" size={size} style={[styles.container, style]}>
      {showTitle && <Text style={styles.title}>{title}</Text>}

      <View style={[styles.content, contentStyle]}>
        {settings.map((setting, index) => (
          <View key={setting.key}>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingLabel}>{setting.label}</Text>
                {setting.description && (
                  <Text style={styles.settingDescription}>
                    {setting.description}
                  </Text>
                )}
              </View>

              <View style={styles.settingControl}>
                {renderSettingControl(setting)}
              </View>
            </View>

            {index < settings.length - 1 && (
              <Divider orientation="horizontal" style={styles.divider} />
            )}
          </View>
        ))}
      </View>
    </Card>
  );
};

export default SettingsSection;
