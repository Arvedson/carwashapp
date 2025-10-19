import React, { useState, useMemo } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { TimePickerProps } from "./TimePicker.types";
import { createTimePickerStyles } from "./TimePicker.styles";

const TimePicker: React.FC<TimePickerProps> = ({
  selectedTime,
  onTimeChange,
  minHour = 6,
  maxHour = 22,
  interval = 30,
  style,
}) => {
  const { theme } = useTheme();
  const styles = createTimePickerStyles(theme);

  // Generar opciones de tiempo
  const timeOptions = useMemo(() => {
    const options: Date[] = [];

    for (let hour = minHour; hour <= maxHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = new Date();
        time.setHours(hour, minute, 0, 0);
        options.push(time);
      }
    }

    return options;
  }, [minHour, maxHour, interval]);

  const formatTime = (time: Date) => {
    return time.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const isTimeSelected = (time: Date) => {
    if (!selectedTime) return false;
    return (
      time.getHours() === selectedTime.getHours() &&
      time.getMinutes() === selectedTime.getMinutes()
    );
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Selecciona una hora</Text>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.timeGrid}>
          {timeOptions.map((time, index) => {
            const isSelected = isTimeSelected(time);

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeOption,
                  isSelected && styles.selectedTimeOption,
                ]}
                onPress={() => onTimeChange(time)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.timeText,
                    isSelected && styles.selectedTimeText,
                  ]}
                >
                  {formatTime(time)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TimePicker;
