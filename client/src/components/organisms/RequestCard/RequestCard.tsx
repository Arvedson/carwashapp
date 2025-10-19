import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/molecules/Card";
import { Text } from "@/components/atoms/Text";
import { VehicleSelector } from "@/components/molecules/VehicleSelector";
import { DirtLevelSlider } from "@/components/molecules/DirtLevelSlider";
import { TimeChoiceChips } from "@/components/molecules/TimeChoiceChips";
import { SearchButton } from "@/components/molecules/SearchButton";
import { RequestCardProps } from "./RequestCard.types";
import { createRequestCardStyles } from "./RequestCard.styles";

const RequestCard: React.FC<RequestCardProps> = ({
  vehicles,
  dirtLevels,
  timeChoices,
  selectedVehicle,
  selectedDirtLevel,
  selectedTimeChoice,
  onVehicleSelect,
  onDirtLevelSelect,
  onTimeChoiceSelect,
  onSearch,
  onSchedulePress,
  scheduledDate,
  isLoading = false,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createRequestCardStyles(theme);

  return (
    <Card variant="elevated" size="large" style={[styles.container, style]}>
      <Text style={styles.title}>Solicita tu lavado</Text>

      {/* Vehicle Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tipo de vehículo</Text>
        <VehicleSelector
          vehicles={vehicles}
          selectedVehicle={selectedVehicle}
          onSelect={onVehicleSelect}
        />
      </View>

      {/* Dirt Level Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nivel de suciedad</Text>
        <DirtLevelSlider
          levels={dirtLevels}
          selectedLevel={selectedDirtLevel}
          onSelect={onDirtLevelSelect}
        />
      </View>

      {/* Time Choice */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>¿Cuándo?</Text>
        <TimeChoiceChips
          choices={timeChoices}
          selectedChoice={selectedTimeChoice}
          onSelect={onTimeChoiceSelect}
          onSchedulePress={onSchedulePress}
          scheduledDate={scheduledDate}
        />
      </View>

      {/* Search Button */}
      <SearchButton
        onPress={onSearch}
        isLoading={isLoading}
        disabled={!selectedVehicle || !selectedDirtLevel || !selectedTimeChoice}
      />
    </Card>
  );
};

export default RequestCard;
