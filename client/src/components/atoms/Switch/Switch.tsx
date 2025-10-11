import React from "react";
import { TouchableOpacity, View, Animated } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createSwitchStyles } from "./Switch.styles";
import { SwitchAtomProps } from "./Switch.types";

export const Switch: React.FC<SwitchAtomProps> = ({
  value,
  onValueChange,
  disabled = false,
  size = "medium",
  variant = "default",
  color = "primary",
  activeColor,
  inactiveColor,
  thumbColor,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createSwitchStyles(
    theme,
    size,
    variant,
    color,
    activeColor,
    inactiveColor,
    thumbColor
  );

  // Animación del thumb
  const thumbPosition = React.useRef(new Animated.Value(value ? 1 : 0)).current;
  const trackColor = React.useRef(new Animated.Value(value ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(thumbPosition, {
        toValue: value ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(trackColor, {
        toValue: value ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [value, thumbPosition, trackColor]);

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  // Usar tokens de componentes para calcular posición del thumb
  const sizeStyles = theme.components.switch.sizes[size];
  const maxTranslateX =
    (sizeStyles.width || 50) -
    (sizeStyles.thumbSize || 26) -
    (sizeStyles.padding || 2) * 2;

  const thumbTranslateX = thumbPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, maxTranslateX],
  });

  const trackBackgroundColor = trackColor.interpolate({
    inputRange: [0, 1],
    outputRange: [
      inactiveColor || theme.colors.disabled,
      activeColor || theme.colors.primary,
    ],
  });

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={[styles.switch, disabled && styles.disabled, style]}
      activeOpacity={0.7}
      {...props}
    >
      <Animated.View
        style={[
          styles.track,
          {
            backgroundColor: trackBackgroundColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX: thumbTranslateX }],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Switch;
