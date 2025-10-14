import React, { useState, useCallback, useMemo, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createServiceTimeStyles } from "./ServiceTime.styles";
import {
  ServiceTimeProps,
  ServiceTimeState,
  TimeSlotProps,
  TimeListProps,
  TimeSlot,
} from "./ServiceTime.types";
import { Text as TextComponent } from "@/components/atoms/Text";
import { Icon } from "@/components/atoms/Icon";

const { height: screenHeight } = Dimensions.get("window");

// Utilidades para tiempo
const formatTime = (time: string, format: "12h" | "24h" = "24h"): string => {
  const [hoursStr, minutesStr] = time.split(":");
  const hours = parseInt(hoursStr || "0", 10);
  const minutes = parseInt(minutesStr || "0", 10);

  if (format === "12h") {
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    return `${displayHours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${period}`;
  }

  return time;
};

const generateTimeSlots = (
  interval: number = 30,
  minTime?: string,
  maxTime?: string,
  timeFormat: "12h" | "24h" = "24h",
  config?: {
    defaultStartHour: number;
    defaultEndHour: number;
    defaultInterval: number;
  }
): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const startHour = minTime
    ? parseInt(
        minTime.split(":")[0] || config?.defaultStartHour.toString() || "6",
        10
      )
    : config?.defaultStartHour || 6;
  const startMinute = minTime ? parseInt(minTime.split(":")[1] || "0", 10) : 0;
  const endHour = maxTime
    ? parseInt(
        maxTime.split(":")[0] || config?.defaultEndHour.toString() || "22",
        10
      )
    : config?.defaultEndHour || 22;
  const endMinute = maxTime ? parseInt(maxTime.split(":")[1] || "0", 10) : 0;

  for (let hour = startHour; hour <= endHour; hour++) {
    const maxMinute = hour === endHour ? endMinute : 59;
    for (let minute = 0; minute <= maxMinute; minute += interval) {
      if (hour === endHour && minute > endMinute) break;

      const timeString = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      const displayTime = formatTime(timeString, timeFormat);

      slots.push({
        id: timeString,
        time: timeString,
        displayTime,
        available: true,
        disabled: false,
      });
    }
  }

  return slots;
};

// Componente de slot de tiempo
const TimeSlotComponent: React.FC<TimeSlotProps> = ({
  slot,
  isSelected,
  onPress,
  style,
  textStyle,
}) => {
  const { theme } = useTheme();
  const styles = createServiceTimeStyles(
    theme,
    "default",
    "medium",
    false,
    false
  );

  return (
    <TouchableOpacity
      style={[
        styles.timeSlot,
        isSelected && styles.timeSlotSelected,
        slot.disabled && styles.timeSlotDisabled,
        style,
      ]}
      onPress={() => !slot.disabled && onPress(slot.time)}
      disabled={slot.disabled}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.timeSlotText,
          isSelected && styles.timeSlotTextSelected,
          slot.disabled && styles.timeSlotTextDisabled,
          textStyle,
        ]}
      >
        {slot.displayTime}
      </Text>
    </TouchableOpacity>
  );
};

// Componente de lista de tiempos
const TimeList: React.FC<TimeListProps> = ({
  timeSlots,
  selectedTime,
  onTimeSelect,
  style,
  textStyle,
}) => {
  const { theme } = useTheme();
  const styles = createServiceTimeStyles(
    theme,
    "default",
    "medium",
    false,
    false
  );

  return (
    <ScrollView
      style={[styles.timeList, style]}
      showsVerticalScrollIndicator={false}
    >
      {timeSlots.map((slot) => (
        <TimeSlotComponent
          key={slot.id}
          slot={slot}
          isSelected={selectedTime === slot.time}
          onPress={onTimeSelect}
          textStyle={textStyle}
        />
      ))}
    </ScrollView>
  );
};

// Componente principal ServiceTime
export const ServiceTime: React.FC<ServiceTimeProps> = ({
  variant = "default",
  size = "medium",
  disabled = false,
  error = false,
  errorMessage,
  label,
  placeholder = "Seleccionar hora",
  value,
  defaultValue,
  onChange,
  onDisplayModeChange,
  timeFormat = "24h",
  minTime,
  maxTime,
  interval = 30,
  showClearButton = true,
  showNowButton = true,
  style,
  inputStyle,
  timeListStyle,
  textStyle,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const { theme } = useTheme();
  const styles = createServiceTimeStyles(theme, variant, size, error, disabled);

  // Estado interno
  const [state, setState] = useState<ServiceTimeState>({
    selectedTime: value || defaultValue || null,
    isExpanded: false,
    isAnimating: false,
    timeSlots: [],
  });

  // Animación para la lista de tiempos
  const [animationValue] = useState(new Animated.Value(0));

  // Generar slots de tiempo
  const timeSlots = useMemo(() => {
    return generateTimeSlots(
      interval,
      minTime,
      maxTime,
      timeFormat,
      theme.components.serviceTime.config
    );
  }, [
    interval,
    minTime,
    maxTime,
    timeFormat,
    theme.components.serviceTime.config,
  ]);

  // Actualizar slots cuando cambien las props
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      timeSlots,
    }));
  }, [timeSlots]);

  // Manejar cambio de modo de visualización
  const handleDisplayModeChange = useCallback(
    (isExpanded: boolean) => {
      if (disabled) return;

      setState((prev) => ({
        ...prev,
        isExpanded,
        isAnimating: true,
      }));
      onDisplayModeChange?.(isExpanded);

      Animated.timing(animationValue, {
        toValue: isExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setState((prev) => ({ ...prev, isAnimating: false }));
      });
    },
    [disabled, onDisplayModeChange, animationValue]
  );

  // Manejar selección de tiempo
  const handleTimeSelect = useCallback(
    (time: string) => {
      if (disabled) return;

      setState((prev) => ({ ...prev, selectedTime: time }));
      onChange?.(time);
      handleDisplayModeChange(false);
    },
    [disabled, onChange, handleDisplayModeChange]
  );

  // Limpiar selección
  const handleClear = useCallback(() => {
    if (disabled) return;

    setState((prev) => ({ ...prev, selectedTime: null }));
    onChange?.(null);
  }, [disabled, onChange]);

  // Seleccionar hora actual
  const handleNow = useCallback(() => {
    if (disabled) return;

    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    // Encontrar el slot más cercano
    const closestSlot = timeSlots.reduce((closest, slot) => {
      if (slot.disabled) return closest;
      const currentDiff = Math.abs(
        new Date(`2000-01-01T${currentTime}`).getTime() -
          new Date(`2000-01-01T${slot.time}`).getTime()
      );
      const closestDiff = closest
        ? Math.abs(
            new Date(`2000-01-01T${currentTime}`).getTime() -
              new Date(`2000-01-01T${closest.time}`).getTime()
          )
        : Infinity;

      return currentDiff < closestDiff ? slot : closest;
    }, null as TimeSlot | null);

    if (closestSlot) {
      handleTimeSelect(closestSlot.time);
    }
  }, [disabled, timeSlots, handleTimeSelect]);

  // Renderizar texto del input
  const renderInputText = () => {
    if (state.selectedTime) {
      return formatTime(state.selectedTime, timeFormat);
    }
    return placeholder;
  };

  // Renderizar lista de tiempos
  const renderTimeList = () => {
    if (!state.isExpanded) return null;

    return (
      <Animated.View
        style={[
          styles.timeListContainer,
          timeListStyle,
          {
            height: animationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                0,
                Math.min(
                  theme.components.serviceTime.sizes[size].maxListHeight,
                  state.timeSlots.length *
                    theme.components.serviceTime.sizes[size].slotHeight +
                    theme.components.serviceTime.sizes[size].buttonAreaHeight
                ),
              ], // Altura dinámica basada en tokens
            }),
            opacity: animationValue,
          },
        ]}
      >
        <TimeList
          timeSlots={state.timeSlots}
          selectedTime={state.selectedTime}
          onTimeSelect={handleTimeSelect}
        />

        {(showNowButton || showClearButton) && (
          <View style={styles.actionButtons}>
            {showClearButton && (
              <TouchableOpacity
                style={styles.actionButton}
                onPress={handleClear}
                disabled={disabled}
              >
                <Text style={styles.actionButtonText}>Limpiar</Text>
              </TouchableOpacity>
            )}
            {showNowButton && (
              <TouchableOpacity
                style={[styles.actionButton, styles.actionButtonPrimary]}
                onPress={handleNow}
                disabled={disabled}
              >
                <Text
                  style={[
                    styles.actionButtonText,
                    styles.actionButtonTextPrimary,
                  ]}
                >
                  Ahora
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </Animated.View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      {label && (
        <TextComponent variant="label" style={styles.label}>
          {label}
        </TextComponent>
      )}

      <TouchableOpacity
        style={[styles.inputContainer, inputStyle]}
        onPress={() => handleDisplayModeChange(!state.isExpanded)}
        disabled={disabled}
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
        activeOpacity={0.7}
      >
        <Text
          style={[
            state.selectedTime ? styles.inputText : styles.placeholderText,
            textStyle,
          ]}
        >
          {renderInputText()}
        </Text>

        <Icon
          name={state.isExpanded ? "chevron-up" : "chevron-down"}
          size={size === "small" ? "sm" : size === "medium" ? "md" : "lg"}
          color={theme.colors.text.secondary}
          style={styles.inputIcon}
        />
      </TouchableOpacity>

      {error && errorMessage && (
        <TextComponent variant="caption" style={styles.errorText}>
          {errorMessage}
        </TextComponent>
      )}

      {renderTimeList()}
    </View>
  );
};

export default ServiceTime;
