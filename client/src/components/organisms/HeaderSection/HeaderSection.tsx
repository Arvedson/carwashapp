import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { UserGreeting } from "@/components/atoms/UserGreeting";
import { LocationDisplay } from "@/components/atoms/LocationDisplay";
import { LocationButton } from "@/components/atoms/LocationButton";
import { HeaderSectionProps } from "./HeaderSection.types";
import { createHeaderSectionStyles } from "./HeaderSection.styles";

const HeaderSection: React.FC<HeaderSectionProps> = ({
  user,
  currentLocation,
  onLocationPress,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createHeaderSectionStyles(theme);

  if (!user) return null;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <UserGreeting user={user} />

        <View style={styles.locationRow}>
          <LocationDisplay location={currentLocation} />
          <LocationButton onPress={onLocationPress} />
        </View>
      </View>
    </View>
  );
};

export default HeaderSection;
