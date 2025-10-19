import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
  Platform,
} from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { createDatePickerStyles } from "./DatePicker.styles";
import {
  DatePickerProps,
  DatePickerState,
  CalendarCellProps,
  CalendarHeaderProps,
  WeekHeaderProps,
} from "./DatePicker.types";
import { Text as TextComponent } from "@/components/atoms/Text";
import { Icon } from "@/components/atoms/Icon";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Utilidades para fechas
const formatDate = (date: Date, format: string = "dd/MM/yyyy"): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return format
    .replace("dd", day)
    .replace("MM", month)
    .replace("yyyy", year.toString());
};

const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date, firstDayOfWeek: number = 1): number => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  // JavaScript getDay(): 0 = Domingo, 1 = Lunes, 2 = Martes, ..., 6 = Sábado
  // firstDayOfWeek: 0 = Domingo, 1 = Lunes
  // Calcular cuántos días del mes anterior necesitamos mostrar
  let offset = firstDay - firstDayOfWeek;
  if (offset < 0) {
    offset += 7;
  }
  return offset;
};

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return isSameDay(date, today);
};

const isDateInRange = (
  date: Date,
  startDate: Date | null,
  endDate: Date | null
): boolean => {
  if (!startDate || !endDate) return false;
  return date >= startDate && date <= endDate;
};

// Componente de celda del calendario
const CalendarCell: React.FC<CalendarCellProps> = ({
  date,
  isSelected,
  isToday,
  isDisabled,
  isInRange,
  isRangeStart,
  isRangeEnd,
  onPress,
  style,
  textStyle,
}) => {
  const { theme } = useTheme();
  const styles = createDatePickerStyles(
    theme,
    "default",
    "medium",
    "expanded",
    false,
    false
  );

  return (
    <TouchableOpacity
      style={[
        styles.calendarCell,
        isSelected && styles.calendarCellSelected,
        isToday && !isSelected && styles.calendarCellToday,
        isDisabled && styles.calendarCellDisabled,
        isInRange && styles.calendarCellInRange,
        isRangeStart && styles.calendarCellRangeStart,
        isRangeEnd && styles.calendarCellRangeEnd,
        style,
      ]}
      onPress={() => !isDisabled && onPress(date)}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.calendarCellText,
          isSelected && styles.calendarCellTextSelected,
          isDisabled && styles.calendarCellTextDisabled,
          textStyle,
        ]}
      >
        {date.getDate()}
      </Text>
    </TouchableOpacity>
  );
};

// Componente de header del calendario
const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onPreviousMonth,
  onNextMonth,
  onPreviousYear,
  onNextYear,
  size = "medium",
  style,
}) => {
  const { theme } = useTheme();
  const styles = createDatePickerStyles(
    theme,
    "default",
    size,
    "expanded",
    false,
    false
  );

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <View style={[styles.calendarHeader, style]}>
      <TouchableOpacity
        style={styles.headerButton}
        onPress={onPreviousYear}
        activeOpacity={0.7}
      >
        <Icon
          name="chevron-double-left"
          size={size === "small" ? "sm" : size === "medium" ? "md" : "lg"}
          color={theme.colors.calendarNavigation}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.headerButton}
        onPress={onPreviousMonth}
        activeOpacity={0.7}
      >
        <Icon
          name="chevron-left"
          size={size === "small" ? "sm" : size === "medium" ? "md" : "lg"}
          color={theme.colors.calendarNavigation}
        />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>
        {monthName} {year}
      </Text>

      <TouchableOpacity
        style={styles.headerButton}
        onPress={onNextMonth}
        activeOpacity={0.7}
      >
        <Icon
          name="chevron-right"
          size={size === "small" ? "sm" : size === "medium" ? "md" : "lg"}
          color={theme.colors.calendarNavigation}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.headerButton}
        onPress={onNextYear}
        activeOpacity={0.7}
      >
        <Icon
          name="chevron-double-right"
          size={size === "small" ? "sm" : size === "medium" ? "md" : "lg"}
          color={theme.colors.calendarNavigation}
        />
      </TouchableOpacity>
    </View>
  );
};

// Componente de header de días de la semana
const WeekHeader: React.FC<WeekHeaderProps> = ({
  weekDays,
  style,
  textStyle,
}) => {
  const { theme } = useTheme();
  const styles = createDatePickerStyles(
    theme,
    "default",
    "medium",
    "expanded",
    false,
    false
  );

  return (
    <View style={[styles.weekHeader, style]}>
      {weekDays.map((day, index) => (
        <View key={index} style={styles.weekDay}>
          <Text style={[styles.weekDayText, textStyle]}>{day}</Text>
        </View>
      ))}
    </View>
  );
};

// Componente principal DatePicker
export const DatePicker: React.FC<DatePickerProps> = ({
  variant = "default",
  size = "medium",
  mode = "single",
  displayMode = "collapsed",
  value,
  defaultValue,
  onChange,
  onDisplayModeChange,
  minDate,
  maxDate,
  disabled = false,
  error = false,
  errorMessage,
  label,
  placeholder = "Seleccionar fecha",
  format = "dd/MM/yyyy",
  locale = "es",
  showWeekNumbers = false,
  showTodayButton = true,
  showClearButton = true,
  firstDayOfWeek = 1,
  style,
  inputStyle,
  calendarStyle,
  textStyle,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const { theme } = useTheme();
  const styles = createDatePickerStyles(
    theme,
    variant,
    size,
    displayMode,
    error,
    disabled
  );

  // Estado interno
  const [state, setState] = useState<DatePickerState>({
    selectedDate:
      value instanceof Date
        ? value
        : defaultValue instanceof Date
        ? defaultValue
        : null,
    selectedDates: Array.isArray(value)
      ? value
      : Array.isArray(defaultValue)
      ? defaultValue
      : [],
    dateRange: {
      startDate: null,
      endDate: null,
    },
    currentMonth: value instanceof Date ? value : new Date(),
    isExpanded: displayMode === "expanded",
    isAnimating: false,
  });

  // Animación para el calendario
  const [animationValue] = useState(
    new Animated.Value(state.isExpanded ? 1 : 0)
  );

  // Días de la semana - Reorganizar según firstDayOfWeek
  const weekDays = useMemo(() => {
    const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    // Si firstDayOfWeek = 1 (Lunes), empezar desde "Lun"
    // Si firstDayOfWeek = 0 (Domingo), empezar desde "Dom"
    const startIndex = firstDayOfWeek;
    return [...days.slice(startIndex), ...days.slice(0, startIndex)];
  }, [firstDayOfWeek]);

  // Generar días del mes actual para el calendario
  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(state.currentMonth);
    const firstDay = getFirstDayOfMonth(state.currentMonth, firstDayOfWeek);
    const days: (Date | null)[] = [];

    // 1. Días del mes anterior (para llenar espacios vacíos al inicio)
    if (firstDay > 0) {
      const prevMonth = new Date(state.currentMonth);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      const daysInPrevMonth = getDaysInMonth(prevMonth);

      // Agregar días del final del mes anterior
      for (let i = firstDay - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        days.push(new Date(prevMonth.getFullYear(), prevMonth.getMonth(), day));
      }
    }

    // 2. Días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        new Date(
          state.currentMonth.getFullYear(),
          state.currentMonth.getMonth(),
          day
        )
      );
    }

    // 3. Días del mes siguiente (para completar la grilla de 6x7 = 42 días)
    const totalDays = days.length;
    const remainingDays = 42 - totalDays;

    if (remainingDays > 0) {
      const nextMonth = new Date(state.currentMonth);
      nextMonth.setMonth(nextMonth.getMonth() + 1);

      // Agregar días del inicio del mes siguiente
      for (let day = 1; day <= remainingDays; day++) {
        days.push(new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day));
      }
    }

    // Asegurar que siempre tengamos exactamente 42 días
    while (days.length < 42) {
      days.push(null);
    }

    return days;
  }, [state.currentMonth, firstDayOfWeek]);

  // Manejar cambio de modo de visualización
  const handleDisplayModeChange = useCallback(
    (newMode: "collapsed" | "expanded") => {
      if (disabled) return;

      setState((prev) => ({
        ...prev,
        isExpanded: newMode === "expanded",
        isAnimating: true,
      }));
      onDisplayModeChange?.(newMode);

      Animated.timing(animationValue, {
        toValue: newMode === "expanded" ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setState((prev) => ({ ...prev, isAnimating: false }));
      });
    },
    [disabled, onDisplayModeChange, animationValue]
  );

  // Manejar selección de fecha
  const handleDateSelect = useCallback(
    (date: Date) => {
      if (disabled) return;

      let newValue: Date | Date[] | null = null;

      switch (mode) {
        case "single":
          newValue = date;
          setState((prev) => ({ ...prev, selectedDate: date }));
          // Contraer el calendario después de seleccionar una fecha
          handleDisplayModeChange("collapsed");
          break;
        case "multiple":
          const newSelectedDates = state.selectedDates.includes(date)
            ? state.selectedDates.filter((d) => !isSameDay(d, date))
            : [...state.selectedDates, date];
          newValue = newSelectedDates;
          setState((prev) => ({ ...prev, selectedDates: newSelectedDates }));
          break;
        case "range":
          if (!state.dateRange.startDate || state.dateRange.endDate) {
            setState((prev) => ({
              ...prev,
              dateRange: { startDate: date, endDate: null },
            }));
          } else {
            const startDate = state.dateRange.startDate;
            const endDate = date > startDate ? date : startDate;
            const newStartDate = date < startDate ? date : startDate;
            newValue = [newStartDate, endDate];
            setState((prev) => ({
              ...prev,
              dateRange: { startDate: newStartDate, endDate },
            }));
            // Contraer el calendario después de completar el rango
            handleDisplayModeChange("collapsed");
          }
          break;
      }

      onChange?.(newValue);
    },
    [
      disabled,
      mode,
      state.selectedDates,
      state.dateRange,
      onChange,
      handleDisplayModeChange,
    ]
  );

  // Navegación del calendario
  const navigateMonth = useCallback((direction: "prev" | "next") => {
    setState((prev) => {
      const newMonth = new Date(prev.currentMonth);
      newMonth.setMonth(newMonth.getMonth() + (direction === "next" ? 1 : -1));
      return { ...prev, currentMonth: newMonth };
    });
  }, []);

  const navigateYear = useCallback((direction: "prev" | "next") => {
    setState((prev) => {
      const newMonth = new Date(prev.currentMonth);
      newMonth.setFullYear(
        newMonth.getFullYear() + (direction === "next" ? 1 : -1)
      );
      return { ...prev, currentMonth: newMonth };
    });
  }, []);

  // Limpiar selección
  const handleClear = useCallback(() => {
    if (disabled) return;

    setState((prev) => ({
      ...prev,
      selectedDate: null,
      selectedDates: [],
      dateRange: { startDate: null, endDate: null },
    }));
    onChange?.(null);
  }, [disabled, onChange]);

  // Ir a hoy
  const handleToday = useCallback(() => {
    if (disabled) return;

    const today = new Date();
    setState((prev) => ({ ...prev, currentMonth: today }));
    handleDateSelect(today);
  }, [disabled, handleDateSelect]);

  // Renderizar texto del input
  const renderInputText = () => {
    if (mode === "single" && state.selectedDate) {
      return formatDate(state.selectedDate, format);
    }

    if (mode === "multiple" && state.selectedDates.length > 0) {
      return `${state.selectedDates.length} fecha${
        state.selectedDates.length > 1 ? "s" : ""
      } seleccionada${state.selectedDates.length > 1 ? "s" : ""}`;
    }

    if (mode === "range" && state.dateRange.startDate) {
      if (state.dateRange.endDate) {
        return `${formatDate(state.dateRange.startDate, format)} - ${formatDate(
          state.dateRange.endDate,
          format
        )}`;
      }
      return formatDate(state.dateRange.startDate, format);
    }

    return placeholder;
  };

  // Renderizar calendario
  const renderCalendar = () => {
    if (!state.isExpanded) return null;

    return (
      <Animated.View
        style={[
          styles.calendarContainer,
          calendarStyle,
          {
            height: animationValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 320], // Usar valor fijo en lugar de styles.calendarHeight
            }),
            opacity: animationValue,
          },
        ]}
      >
        <CalendarHeader
          currentDate={state.currentMonth}
          onPreviousMonth={() => navigateMonth("prev")}
          onNextMonth={() => navigateMonth("next")}
          onPreviousYear={() => navigateYear("prev")}
          onNextYear={() => navigateYear("next")}
          size={size}
        />

        <WeekHeader weekDays={weekDays} />

        <View style={styles.calendarGrid}>
          {Array.from({ length: 6 }, (_, rowIndex) => {
            const rowDays = calendarDays.slice(
              rowIndex * 7,
              (rowIndex + 1) * 7
            );

            return (
              <View key={rowIndex} style={styles.calendarRow}>
                {rowDays.map((date, cellIndex) => {
                  // Si no hay fecha, renderizar celda vacía
                  if (!date) {
                    return (
                      <View
                        key={`empty-${rowIndex}-${cellIndex}`}
                        style={styles.calendarCell}
                      >
                        <Text style={[styles.calendarCellText, { opacity: 0 }]}>
                          {" "}
                        </Text>
                      </View>
                    );
                  }

                  const isSelected =
                    mode === "single"
                      ? !!(
                          state.selectedDate &&
                          isSameDay(date, state.selectedDate)
                        )
                      : mode === "multiple"
                      ? state.selectedDates.some((d) => isSameDay(d, date))
                      : false;

                  const isTodayDate = isToday(date);
                  const isDisabled =
                    !!(minDate && date < minDate) ||
                    !!(maxDate && date > maxDate);
                  const isInRange =
                    mode === "range" &&
                    state.dateRange.startDate &&
                    state.dateRange.endDate
                      ? isDateInRange(
                          date,
                          state.dateRange.startDate,
                          state.dateRange.endDate
                        )
                      : false;

                  return (
                    <CalendarCell
                      key={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
                      date={date}
                      isSelected={isSelected}
                      isToday={isTodayDate}
                      isDisabled={isDisabled}
                      isInRange={isInRange}
                      onPress={handleDateSelect}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>

        {(showTodayButton || showClearButton) && (
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
            {showTodayButton && (
              <TouchableOpacity
                style={[styles.actionButton, styles.actionButtonPrimary]}
                onPress={handleToday}
                disabled={disabled}
              >
                <Text
                  style={[
                    styles.actionButtonText,
                    styles.actionButtonTextPrimary,
                  ]}
                >
                  Hoy
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
        onPress={() =>
          handleDisplayModeChange(state.isExpanded ? "collapsed" : "expanded")
        }
        disabled={disabled}
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
        activeOpacity={0.7}
      >
        <Text
          style={[
            state.selectedDate ||
            state.selectedDates.length > 0 ||
            state.dateRange.startDate
              ? styles.inputText
              : styles.placeholderText,
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

      {renderCalendar()}
    </View>
  );
};

export default DatePicker;
