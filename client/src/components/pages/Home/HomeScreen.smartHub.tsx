import React, { useState, useEffect } from "react";
import { View, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@/store/useAuthStore";
import { createHomeStyles } from "@/themes/screens/HomeScreen.styles";
import { useTheme } from "@/contexts/ThemeContext";
import { useSearch } from "@/hooks/useSearch";
import { HeaderSection } from "@/components/organisms/HeaderSection";
import { RequestCard } from "@/components/organisms/RequestCard";
import { QuickAccessSection } from "@/components/organisms/QuickAccessSection";
import { PromotionsSection } from "@/components/organisms/PromotionsSection";
import { DatePickerModal } from "@/components/organisms/DatePickerModal";
import {
  VehicleType,
  DirtLevel,
  TimeChoice,
  RecentWash,
  FavoriteLocation,
  Promotion,
  TrustFeature,
  Location,
} from "@/types";

const HomeScreen: React.FC = () => {
  const { user, logout } = useAuthStore();
  const { theme } = useTheme();
  const styles = createHomeStyles(theme);

  // Smart Hub State - Solo estado de UI y selecciones
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(
    null
  );
  const [selectedDirtLevel, setSelectedDirtLevel] = useState<DirtLevel | null>(
    null
  );
  const [selectedTimeChoice, setSelectedTimeChoice] =
    useState<TimeChoice | null>(null);
  const [scheduledDate, setScheduledDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Hook de búsqueda - Maneja toda la lógica de búsqueda
  const {
    searchData,
    isSearchReady,
    isLoading,
    error,
    lastSearchResults,
    searchWashers,
    clearError,
    resetSearch,
  } = useSearch({
    selectedVehicle,
    selectedDirtLevel,
    selectedTimeChoice,
    scheduledDate,
    currentLocation,
    userId: user?.id,
    useSimulation: true, // Cambiar a false en producción
  });

  // Mock data - En producción esto vendría de APIs
  const vehicles: VehicleType[] = [
    {
      id: "sedan",
      name: "Sedán",
      icon: "🚗",
      description: "Automóvil de 4 puertas",
    },
    {
      id: "suv",
      name: "SUV",
      icon: "🚙",
      description: "Vehículo utilitario deportivo",
    },
    {
      id: "van",
      name: "Van",
      icon: "🚐",
      description: "Vehículo de pasajeros",
    },
    {
      id: "pickup",
      name: "Pickup",
      icon: "🛻",
      description: "Camioneta de carga",
    },
  ];

  const dirtLevels: DirtLevel[] = [
    {
      id: "clean",
      name: "Limpio",
      level: 1,
      color: "#4CAF50",
      icon: "💧",
      description: "Solo mantenimiento",
    },
    {
      id: "normal",
      name: "Normal",
      level: 2,
      color: "#FF9800",
      icon: "💦",
      description: "Lavado estándar",
    },
    {
      id: "dirty",
      name: "Muy sucio",
      level: 3,
      color: "#FF5722",
      icon: "🌪️",
      description: "Lavado profundo",
    },
    {
      id: "extreme",
      name: "Extremo",
      level: 4,
      color: "#F44336",
      icon: "🔥",
      description: "Lavado especializado",
    },
  ];

  const timeChoices: TimeChoice[] = [
    { id: "now", label: "Ahora", value: "now", icon: "⚡" },
    { id: "schedule", label: "Programar", value: "schedule", icon: "📅" },
  ];

  const recentWash: RecentWash | null = {
    id: "1",
    date: "12 Oct 2024",
    service: "Lavado Premium",
    price: 180,
    washer: {
      name: "Carlos M.",
      avatar: "👨‍💼",
    },
    vehicle: "Sedán",
    location: "Col. Reforma, Oaxaca",
  };

  const favoriteLocations: FavoriteLocation[] = [
    {
      id: "home",
      name: "Casa",
      icon: "🏡",
      address: "Col. Reforma, Oaxaca",
      location: { latitude: 17.0732, longitude: -96.7266 },
      type: "home",
    },
    {
      id: "work",
      name: "Trabajo",
      icon: "🏢",
      address: "Centro Histórico, Oaxaca",
      location: { latitude: 17.0599, longitude: -96.7266 },
      type: "work",
    },
  ];

  const promotions: Promotion[] = [
    {
      id: "first-wash",
      title: "20% descuento en tu primer lavado",
      subtitle: "Código: WELCOME20",
      discount: 20,
      code: "WELCOME20",
      validUntil: "2024-12-31",
      isActive: true,
    },
  ];

  const trustFeatures: TrustFeature[] = [
    {
      id: "verified",
      icon: "🔒",
      title: "Lavadores verificados",
      description: "Perfiles verificados",
    },
    {
      id: "secure",
      icon: "💳",
      title: "Pago seguro",
      description: "Transacciones protegidas",
    },
    {
      id: "eco",
      icon: "🌱",
      title: "Ecológico",
      description: "Productos biodegradables",
    },
  ];

  // Handlers
  const handleLocationPress = () => {
    console.log("Location button pressed");
    // TODO: Implement location functionality
  };

  const handleVehicleSelect = (vehicle: VehicleType) => {
    setSelectedVehicle(vehicle);
  };

  const handleDirtLevelSelect = (level: DirtLevel) => {
    setSelectedDirtLevel(level);
  };

  const handleTimeChoiceSelect = (choice: TimeChoice) => {
    setSelectedTimeChoice(choice);
  };

  const handleSearch = async () => {
    console.log("🔍 Iniciando búsqueda desde HomeScreen...");
    const results = await searchWashers();

    if (results) {
      console.log("✅ Búsqueda exitosa, navegando a resultados...", results);
      // TODO: Navegar a pantalla de resultados o mostrar mapa
      // navigation.navigate('SearchResults', { results });
    } else {
      console.log("❌ Búsqueda falló o fue cancelada");
    }
  };

  const handleClearError = () => {
    clearError();
  };

  const handleResetSearch = () => {
    resetSearch();
    console.log("🔄 Búsqueda reseteada");
  };

  // Efecto para manejar errores y logging
  useEffect(() => {
    if (error) {
      console.error("❌ Error en búsqueda:", error);
      // Aquí podrías mostrar un toast o alert al usuario
    }
  }, [error]);

  // Efecto para logging de cambios en el estado de búsqueda
  useEffect(() => {
    console.log("📊 Estado de búsqueda actualizado:", {
      isSearchReady,
      isLoading,
      hasError: !!error,
      hasResults: !!lastSearchResults,
      searchData,
    });
  }, [isSearchReady, isLoading, error, lastSearchResults, searchData]);

  const handleSchedulePress = () => {
    console.log("Schedule pressed");
    setShowDatePicker(true);
  };

  const handleDateSelect = (date: Date | null) => {
    setScheduledDate(date);
    if (date) {
      console.log("Date selected:", date);
      // Aquí puedes agregar lógica adicional cuando se selecciona una fecha
    }
  };

  const handleCloseDatePicker = () => {
    setShowDatePicker(false);
  };

  const handleRepeatWash = () => {
    console.log("Repeat wash pressed");
    // TODO: Implement repeat wash functionality
  };

  const handleSelectLocation = (location: FavoriteLocation) => {
    console.log("Location selected:", location);
    setCurrentLocation({
      ...location.location,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const handlePromoPress = (promotion: Promotion) => {
    console.log("Promotion pressed:", promotion);
    // TODO: Show promotion details or apply code
  };

  // Initialize current location
  useEffect(() => {
    // Mock current location
    setCurrentLocation({
      latitude: 17.0732,
      longitude: -96.7266,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
      address: "Col. Reforma, Oaxaca",
      city: "Oaxaca",
      state: "Oaxaca",
    });
  }, []);

  if (!user) {
    return null; // Or redirect to login
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.smartHubContainer}
        contentContainerStyle={styles.smartHubScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <HeaderSection
          user={user}
          currentLocation={currentLocation}
          onLocationPress={handleLocationPress}
        />

        {/* Request Card - Main Action */}
        <RequestCard
          vehicles={vehicles}
          dirtLevels={dirtLevels}
          timeChoices={timeChoices}
          selectedVehicle={selectedVehicle}
          selectedDirtLevel={selectedDirtLevel}
          selectedTimeChoice={selectedTimeChoice}
          onVehicleSelect={handleVehicleSelect}
          onDirtLevelSelect={handleDirtLevelSelect}
          onTimeChoiceSelect={handleTimeChoiceSelect}
          onSearch={handleSearch}
          onSchedulePress={handleSchedulePress}
          scheduledDate={scheduledDate}
          isLoading={isLoading}
        />

        {/* Quick Access Section */}
        <QuickAccessSection
          recentWash={recentWash}
          favoriteLocations={favoriteLocations}
          onRepeatWash={handleRepeatWash}
          onSelectLocation={handleSelectLocation}
        />

        {/* Promotions Section */}
        <PromotionsSection
          promotions={promotions}
          trustFeatures={trustFeatures}
          onPromoPress={handlePromoPress}
        />
      </ScrollView>

      {/* Date Picker Modal */}
      <DatePickerModal
        visible={showDatePicker}
        onClose={handleCloseDatePicker}
        onDateSelect={handleDateSelect}
        selectedDate={scheduledDate}
        minDate={new Date()}
        title="Programar lavado"
        subtitle="Elige cuándo quieres que te visiten para el lavado de tu vehículo"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
