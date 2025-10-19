import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { UserGreetingProps } from "./UserGreeting.types";
import { createUserGreetingStyles } from "./UserGreeting.styles";

const UserGreeting: React.FC<UserGreetingProps> = ({ user, style }) => {
  const { theme } = useTheme();
  const styles = createUserGreetingStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.greeting}>Hola,</Text>
      <Text style={styles.name}>{user.name} 👋</Text>
    </View>
  );
};

export default UserGreeting;
