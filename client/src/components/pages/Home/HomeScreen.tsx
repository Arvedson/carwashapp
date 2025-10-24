import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuthStore } from "@/store/useAuthStore";
import { homeStyles } from "@/themes";

const HomeScreen: React.FC = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>CarWashApp</Text>
      <Text style={homeStyles.subtitle}>Home Screen</Text>

      <View style={homeStyles.content}>
        <Text style={homeStyles.welcomeText}>
          Welcome, {user?.name || "User"}!
        </Text>
        <Text style={homeStyles.emailText}>{user?.email}</Text>

        <View style={homeStyles.features}>
          <Text style={homeStyles.featuresTitle}>Available Features:</Text>
          <Text style={homeStyles.featureItem}>• Car wash booking</Text>
          <Text style={homeStyles.featureItem}>• Service history</Text>
          <Text style={homeStyles.featureItem}>• Payment management</Text>
          <Text style={homeStyles.featureItem}>• Notifications</Text>
        </View>
      </View>

      <TouchableOpacity style={homeStyles.logoutButton} onPress={handleLogout}>
        <Text style={homeStyles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
