import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Dimensions,
  PanResponder,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { Icon } from "@/components/atoms/Icon";
import { Button } from "@/components/atoms/Button";
import { LocationPicker } from "@/components/molecules/LocationPicker";
import {
  LocationForm,
  LocationFormData,
} from "@/components/molecules/LocationForm";
import { AddLocationModalProps } from "./AddLocationModal.types";
import { createAddLocationModalStyles } from "./AddLocationModal.styles";
import { Location } from "@/types";
import { LocationType } from "@/components/atoms/LocationTypeChip";

const { height: screenHeight } = Dimensions.get("window");

const AddLocationModal: React.FC<AddLocationModalProps> = ({
  visible,
  onClose,
  onLocationSave,
  selectedLocation,
  title = "Agregar ubicación",
  subtitle = "Selecciona una ubicación y configúrala",
  isLoading = false,
}) => {
  const { theme } = useTheme();
  const styles = createAddLocationModalStyles(theme);

  // Estados para drag
  const translateY = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const isMinimized = useRef(false);

  const [currentStep, setCurrentStep] = useState<"picker" | "form">("picker");
  const [isModalMinimized, setIsModalMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [pickedLocation, setPickedLocation] = useState<Location | null>(
    selectedLocation || null
  );
  const [formData, setFormData] = useState<LocationFormData>({
    name: "",
    type: "other",
    location: pickedLocation || {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
  });

  const handleLocationSelect = useCallback((location: Location) => {
    setPickedLocation(location);
    setFormData((prev) => ({ ...prev, location }));
    setCurrentStep("form");
  }, []);

  const handleCurrentLocationPress = useCallback(async () => {
    // This will be handled by the LocationPicker component
    // The actual location fetching is done in the CurrentLocationButton
  }, []);

  const handleFormDataChange = useCallback(
    (data: Partial<LocationFormData>) => {
      setFormData((prev) => ({ ...prev, ...data }));
    },
    []
  );

  const handleTypeSelect = useCallback((type: LocationType) => {
    setFormData((prev) => ({ ...prev, type }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (pickedLocation && formData.name.trim()) {
      onLocationSave({
        ...formData,
        location: pickedLocation,
      });
    }
  }, [pickedLocation, formData, onLocationSave]);

  const handleCancel = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleBack = useCallback(() => {
    setCurrentStep("picker");
  }, []);

  // PanResponder para drag
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Solo responder a movimientos verticales significativos
        return Math.abs(gestureState.dy) > 10;
      },
      onPanResponderGrant: () => {
        // Iniciar el seguimiento del gesto
        translateY.setOffset((translateY as any)._value);
        translateY.setValue(0);
        setIsDragging(true);
      },
      onPanResponderMove: (_, gestureState) => {
        // Actualizar la posición durante el arrastre
        translateY.setValue(gestureState.dy);
        lastGestureDy.current = gestureState.dy;
        setDragDistance(gestureState.dy);
      },
      onPanResponderRelease: (_, gestureState) => {
        // Finalizar el gesto
        translateY.flattenOffset();
        setIsDragging(false);
        setDragDistance(0);

        // Considerar tanto la distancia como la velocidad
        const velocity = gestureState.vy;
        const distance = gestureState.dy;

        const shouldClose =
          distance > 200 || // Deslizar mucho hacia abajo
          (distance > 100 && velocity > 0.5); // Deslizar rápido hacia abajo

        const shouldMinimize =
          (distance > 100 && distance <= 200) ||
          (isMinimized.current && distance > -50);

        if (shouldClose) {
          // Cerrar modal completamente con animación
          Animated.timing(translateY, {
            toValue: screenHeight,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            // Solo cerrar el modal, el reset se hará en el useEffect
            onClose();
          });
        } else if (shouldMinimize) {
          // Minimizar modal
          isMinimized.current = true;
          setIsModalMinimized(true);
          Animated.spring(translateY, {
            toValue: screenHeight * 0.6,
            useNativeDriver: true,
            tension: 100,
            friction: 8,
          }).start();
        } else {
          // Expandir modal
          isMinimized.current = false;
          setIsModalMinimized(false);
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            tension: 100,
            friction: 8,
          }).start();
        }
      },
    })
  ).current;

  const resetModal = useCallback(() => {
    isMinimized.current = false;
    setIsModalMinimized(false);
    setIsDragging(false);
    setDragDistance(0);
    translateY.setValue(0);
  }, [translateY]);

  // Reset modal cuando se abre
  useEffect(() => {
    if (visible) {
      resetModal();
    }
  }, [visible, resetModal]);

  // Cleanup cuando se cierra el modal
  useEffect(() => {
    if (!visible) {
      // Resetear todos los estados internos cuando el modal se cierra
      // Usar setTimeout para evitar conflictos con animaciones
      const timeoutId = setTimeout(() => {
        setCurrentStep("picker");
        setPickedLocation(selectedLocation || null);
        setFormData({
          name: "",
          type: "other",
          location: selectedLocation || {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
          },
        });
        resetModal();
      }, 100); // Pequeño delay para evitar conflictos

      return () => clearTimeout(timeoutId);
    }
    return undefined; // Retorno explícito para todos los code paths
  }, [visible, selectedLocation, resetModal]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
          <Animated.View
            style={[
              styles.modalContainer,
              {
                transform: [{ translateY }],
              },
            ]}
          >
            {/* Modal Handle con PanResponder */}
            <View style={styles.modalHandle} {...panResponder.panHandlers} />

            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Text style={styles.title}>{title}</Text>
                {!isModalMinimized && (
                  <Text style={styles.subtitle}>{subtitle}</Text>
                )}
              </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCancel}
                activeOpacity={0.7}
              >
                <Icon name="x" size="md" color={theme.colors.text.secondary} />
              </TouchableOpacity>
            </View>

            {/* Minimized indicator */}
            {isModalMinimized && (
              <View style={styles.minimizedIndicator}>
                <Text style={styles.minimizedText}>
                  {currentStep === "picker"
                    ? "Selecciona una ubicación"
                    : "Configura tu ubicación"}
                </Text>
                <Icon
                  name="chevron-up"
                  size="sm"
                  color={theme.colors.text.secondary}
                />
              </View>
            )}

            {/* Drag indicator */}
            {isDragging && (
              <View style={styles.dragIndicator}>
                <Text style={styles.dragText}>
                  {dragDistance > 150
                    ? "Suelta para cerrar"
                    : dragDistance > 50
                    ? "Suelta para minimizar"
                    : "Arrastra hacia abajo"}
                </Text>
              </View>
            )}

            {/* Content */}
            <ScrollView
              style={styles.content}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {currentStep === "picker" ? (
                <LocationPicker
                  selectedLocation={pickedLocation}
                  onLocationSelect={handleLocationSelect}
                  onCurrentLocationPress={handleCurrentLocationPress}
                  isLoading={isLoading}
                />
              ) : (
                <LocationForm
                  selectedLocation={pickedLocation}
                  formData={formData}
                  onFormDataChange={handleFormDataChange}
                  onTypeSelect={handleTypeSelect}
                  isLoading={isLoading}
                />
              )}
            </ScrollView>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              {currentStep === "form" && (
                <Button
                  variant="outline"
                  size="medium"
                  onPress={handleBack}
                  style={styles.cancelButton}
                >
                  Atrás
                </Button>
              )}
              <Button
                variant="outline"
                size="medium"
                onPress={handleCancel}
                style={styles.cancelButton}
              >
                Cancelar
              </Button>
              {currentStep === "form" && (
                <Button
                  variant="primary"
                  size="medium"
                  onPress={handleSubmit}
                  style={styles.confirmButton}
                  disabled={
                    !pickedLocation || !formData.name.trim() || isLoading
                  }
                  loading={isLoading}
                >
                  Guardar
                </Button>
              )}
            </View>
          </Animated.View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default AddLocationModal;
