import React, { useState } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { Icon } from "@/components/atoms/Icon";
import { Button } from "@/components/atoms/Button";
import { DatePicker } from "@/components/organisms/DatePicker";
import { TimePicker } from "@/components/molecules/TimePicker";
import { DatePickerModalProps } from "./DatePickerModal.types";
import { createDatePickerModalStyles } from "./DatePickerModal.styles";

const { height: screenHeight } = Dimensions.get("window");

const DatePickerModal: React.FC<DatePickerModalProps> = ({
  visible,
  onClose,
  onDateSelect,
  selectedDate,
  minDate,
  maxDate,
  title = "Programar servicio",
  subtitle = "Elige fecha y hora para tu cita",
}) => {
  const { theme } = useTheme();
  const styles = createDatePickerModalStyles(theme);

  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      // Si ya hay una hora seleccionada, mantenerla
      if (selectedTime) {
        const newDateTime = new Date(date);
        newDateTime.setHours(
          selectedTime.getHours(),
          selectedTime.getMinutes()
        );
        onDateSelect(newDateTime);
      } else {
        // Si no hay hora, usar la hora actual
        const now = new Date();
        const newDateTime = new Date(date);
        newDateTime.setHours(now.getHours(), now.getMinutes());
        setSelectedTime(now);
        onDateSelect(newDateTime);
      }
      setShowTimePicker(true);
    } else {
      onDateSelect(null);
      setShowTimePicker(false);
    }
  };

  const handleTimeChange = (time: Date) => {
    setSelectedTime(time);
    if (selectedDate) {
      const newDateTime = new Date(selectedDate);
      newDateTime.setHours(time.getHours(), time.getMinutes());
      onDateSelect(newDateTime);
    }
  };

  const handleConfirm = () => {
    onClose();
  };

  const handleCancel = () => {
    onDateSelect(null);
    setSelectedTime(null);
    setShowTimePicker(false);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Modal Handle */}
          <View style={styles.modalHandle} />

          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <Icon
                name="close"
                size="md"
                color={theme.colors.text.secondary}
              />
            </TouchableOpacity>
          </View>

          {/* Date Picker Container */}
          <View style={styles.datePickerWrapper}>
            <ScrollView
              style={styles.datePickerContainer}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.datePickerScrollContent}
            >
              <DatePicker
                mode="single"
                displayMode={showTimePicker ? "collapsed" : "expanded"}
                value={selectedDate}
                onChange={handleDateChange}
                minDate={minDate}
                maxDate={maxDate}
                placeholder="Selecciona una fecha"
                showTodayButton={true}
                showClearButton={true}
                firstDayOfWeek={1}
                size="medium"
                variant="filled"
              />

              {/* Time Picker - Solo se muestra cuando hay fecha seleccionada */}
              {showTimePicker && selectedDate && (
                <TimePicker
                  selectedTime={selectedTime}
                  onTimeChange={handleTimeChange}
                  minHour={6}
                  maxHour={22}
                  interval={30}
                />
              )}
            </ScrollView>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <Button
              variant="outline"
              size="medium"
              onPress={handleCancel}
              style={styles.cancelButton}
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              size="medium"
              onPress={handleConfirm}
              style={styles.confirmButton}
              disabled={!selectedDate}
            >
              Confirmar
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DatePickerModal;
