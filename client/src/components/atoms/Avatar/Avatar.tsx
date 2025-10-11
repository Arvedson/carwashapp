import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createAvatarStyles } from "./Avatar.styles";
import { AvatarAtomProps } from "./Avatar.types";

export const Avatar: React.FC<AvatarAtomProps> = ({
  source,
  size = "md",
  variant = "circle",
  backgroundColor,
  textColor,
  style,
  imageStyle,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createAvatarStyles(
    theme,
    size,
    variant,
    backgroundColor,
    textColor
  );

  // Determinar el tipo de contenido
  const getContentType = () => {
    if (!source) return "placeholder";
    if (source.startsWith("http") || source.startsWith("data:")) return "image";
    if (source.length <= 3 && /^[A-Za-z]+$/.test(source)) return "initials";
    return "placeholder";
  };

  const contentType = getContentType();

  const renderContent = () => {
    switch (contentType) {
      case "image":
        return (
          <Image
            source={{ uri: source }}
            style={[styles.image, imageStyle]}
            resizeMode="cover"
          />
        );

      case "initials":
        return <Text style={styles.text}>{source?.toUpperCase()}</Text>;

      case "placeholder":
      default:
        return (
          <View style={styles.placeholder}>
            <Text style={styles.text}>👤</Text>
          </View>
        );
    }
  };

  return (
    <View style={[styles.avatar, style]} {...props}>
      {renderContent()}
    </View>
  );
};

export default Avatar;
