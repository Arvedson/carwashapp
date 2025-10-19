import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { TimeChoiceChipsProps } from "./TimeChoiceChips.types";
import { createTimeChoiceChipsStyles } from "./TimeChoiceChips.styles";

const TimeChoiceChips: React.FC<TimeChoiceChipsProps> = ({
  choices,
  selectedChoice,
  onSelect,
  onSchedulePress,
  scheduledDate,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createTimeChoiceChipsStyles(theme);

  const handleChoicePress = (choice: TimeChoice) => {
    onSelect(choice);
    if (choice.value === "schedule" && onSchedulePress) {
      onSchedulePress();
    }
  };

  const formatScheduledDate = (date: Date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let dateStr: string;
    if (date.toDateString() === today.toDateString()) {
      dateStr = "Hoy";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      dateStr = "Mañana";
    } else {
      dateStr = date.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }

    const timeStr = date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return `${dateStr} a las ${timeStr}`;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.chipsRow}>
        {choices.map((choice) => {
          const isSelected = selectedChoice?.id === choice.id;

          return (
            <TouchableOpacity
              key={choice.id}
              style={[styles.chip, isSelected && styles.selectedChip]}
              onPress={() => handleChoicePress(choice)}
              activeOpacity={0.7}
            >
              {choice.icon && (
                <Text
                  style={[
                    styles.chipIcon,
                    isSelected && styles.selectedChipIcon,
                  ]}
                >
                  {choice.icon}
                </Text>
              )}
              <Text
                style={[styles.chipText, isSelected && styles.selectedChipText]}
              >
                {choice.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Mostrar información de fecha programada */}
      {selectedChoice?.value === "schedule" && scheduledDate && (
        <View style={styles.scheduledInfo}>
          <View style={styles.scheduledHeader}>
            <Text style={styles.scheduledIcon}>📅</Text>
            <Text style={styles.scheduledText}>Programado para</Text>
          </View>
          <Text style={styles.scheduledDate}>
            {formatScheduledDate(scheduledDate)}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TimeChoiceChips;
