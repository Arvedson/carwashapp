import React, { useState } from "react";
import { View, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@/store/useAuthStore";
import { createHomeStyles } from "@/themes/screens/HomeScreen.styles";
import { useTheme } from "@/contexts/ThemeContext";
import { LocationSectionContainer } from "@/components/organisms/LocationSectionContainer";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { DatePicker } from "@/components/organisms/DatePicker";
import { ServiceTime } from "@/components/molecules/ServiceTime";
import { Card } from "@/components/molecules/Card";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

const HomeScreen: React.FC = () => {
  const { user, logout } = useAuthStore();
  const { theme } = useTheme();
  const styles = createHomeStyles(theme);

  // Estado para el DatePicker
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Estado para el ServiceTime
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Handler para el DatePicker
  const handleDateChange = (date: Date | Date[] | null) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    } else if (Array.isArray(date)) {
      setSelectedDate(date[0] || null);
    } else {
      setSelectedDate(null);
    }
  };

  // Handler para el ServiceTime
  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time);
  };

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
  }) => {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text variant="heading" size="xxl" style={styles.title}>
            CarWashApp
          </Text>
          <Text variant="subheading" size="lg" style={styles.subtitle}>
            Home Screen
          </Text>
          <View style={styles.themeToggleContainer}>
            <ThemeToggle size="medium" />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.welcomeSection}>
            <Text variant="subheading" size="lg" style={styles.textPrimary}>
              Welcome, {user?.name || "User"}!
            </Text>
            <Text variant="body" size="md" style={styles.textSecondary}>
              {user?.email}
            </Text>
          </View>

          {/* DatePicker Section */}
          <Card variant="default" size="large" style={styles.datePickerCard}>
            <Text variant="label" size="md" style={styles.datePickerTitle}>
              📅 Selecciona tu cita
            </Text>

            <View style={styles.datePickerRow}>
              <View style={styles.datePickerColumn}>
                <DatePicker
                  variant="default"
                  size="medium"
                  mode="single"
                  label="Fecha de lavado"
                  placeholder="Elige una fecha"
                  value={selectedDate}
                  onChange={handleDateChange}
                  showTodayButton
                  showClearButton
                />
              </View>
            </View>

            <View style={styles.datePickerRow}>
              <View style={styles.datePickerColumn}>
                <ServiceTime
                  variant="default"
                  size="medium"
                  label="Hora de lavado"
                  placeholder="Elige una hora"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  timeFormat="24h"
                  interval={30}
                  minTime="08:00"
                  maxTime="18:00"
                  showNowButton
                  showClearButton
                />
              </View>
            </View>
          </Card>

          {/* Location Section */}
          <LocationSectionContainer
            mapSize="small"
            buttonSize="medium"
            cardVariant="default"
            cardSize="medium"
            headerText="Selecciona un lugar 🚗"
            buttonText="Usar Mi Ubicación Actual"
            onLocationPress={handleLocationPress}
            onMapRegionChange={handleMapRegionChange}
          />

          <Card variant="default" size="medium" style={styles.featuresCard}>
            <Text variant="subheading" size="lg" style={styles.textPrimary}>
              Available Features:
            </Text>
            <Text variant="body" size="md" style={styles.featureItemSecondary}>
              • Car wash booking
            </Text>
            <Text variant="body" size="md" style={styles.featureItemSecondary}>
              • Service history
            </Text>
            <Text variant="body" size="md" style={styles.featureItemSecondary}>
              • Payment management
            </Text>
            <Text variant="body" size="md" style={styles.featureItemSecondary}>
              • Notifications
            </Text>
            <Text variant="caption" size="sm" style={styles.textMuted}>
              Last updated: {new Date().toLocaleDateString()}
            </Text>
          </Card>
        </View>

        <Button
          variant="primary"
          size="medium"
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          Logout
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
