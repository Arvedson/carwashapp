import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Button, Text, TextInput } from "@/components/atoms";
import { useAuthStore } from "@/store/useAuthStore";
import { useTheme } from "@/contexts/ThemeContext";
import { LoginCredentials } from "@/types";

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();

  const { theme } = useTheme();
  const { spacing } = theme;

  const handleLogin = async () => {
    if (!credentials.email || !credentials.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const success = await login(credentials);
      if (!success) {
        Alert.alert(
          "Error",
          "Invalid credentials. Use test@example.com / password"
        );
      }
    } catch (error) {
      Alert.alert("Error", "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    width: "100%" as const,
    maxWidth: 300,
  };

  return (
    <View style={containerStyle}>
      <TextInput
        placeholder="Email"
        value={credentials.email}
        onChangeText={(text) => setCredentials({ ...credentials, email: text })}
        keyboardType="email-address"
        autoCapitalize="none"
        variant="default"
        size="medium"
      />

      <TextInput
        placeholder="Password"
        value={credentials.password}
        onChangeText={(text) =>
          setCredentials({ ...credentials, password: text })
        }
        secureTextEntry
        variant="default"
        size="medium"
      />

      <Button
        variant="primary"
        size="large"
        loading={loading}
        onPress={handleLogin}
        style={{ marginBottom: spacing.sm }}
      >
        Login
      </Button>

      <Button
        variant="outline"
        size="medium"
        onPress={() => {
          setCredentials({ email: "test@example.com", password: "password" });
        }}
      >
        Fill Test Data
      </Button>

      <Text
        variant="caption"
        style={{
          marginTop: spacing.lg,
          textAlign: "center",
        }}
        color={theme.colors.text.secondary}
      >
        Use: test@example.com / password
      </Text>
    </View>
  );
};

export default LoginForm;
