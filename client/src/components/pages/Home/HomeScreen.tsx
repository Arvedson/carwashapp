import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { useAuthStore } from "@/store/useAuthStore";
import { createHomeStyles } from "@/themes/screens/HomeScreen.styles";
import { useTheme } from "@/contexts/ThemeContext";
import { LocationSectionContainer } from "@/components/organisms/LocationSectionContainer";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

const HomeScreen: React.FC = () => {
  const { user, logout } = useAuthStore();
  const { theme } = useTheme();
  const styles = createHomeStyles(theme);

  const handleLogout = () => {
    logout();
  };

  const handleLocationPress = () => {
    console.log("Location button pressed");
    // TODO: Implement location functionality
  };

  const handleMapRegionChange = (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => {
    // TODO: Handle map region changes
    // No hacer console.log para evitar spam en logs
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>CarWashApp</Text>
          <Text style={styles.subtitle}>Home Screen</Text>
          <View style={{ marginTop: 16 }}>
            <ThemeToggle size="medium" />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>
              Welcome, {user?.name || "User"}!
            </Text>
            <Text style={styles.emailText}>{user?.email}</Text>
          </View>

          {/* Location Section */}
          <LocationSectionContainer
            mapSize="medium"
            buttonSize="medium"
            headerText="Selecciona donde lavar tu auto 🚗"
            buttonText="Usar Mi Ubicación Actual"
            onLocationPress={handleLocationPress}
            onMapRegionChange={handleMapRegionChange}
          />

          <View style={styles.features}>
            <Text style={styles.featuresTitle}>Available Features:</Text>
            <Text style={styles.featureItem}>• Car wash booking</Text>
            <Text style={styles.featureItem}>• Service history</Text>
            <Text style={styles.featureItem}>• Payment management</Text>
            <Text style={styles.featureItem}>• Notifications</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
