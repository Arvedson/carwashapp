import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";
import { createServicesStyles } from "@/themes/screens/ServicesScreen.styles";
import { Text } from "@/components/atoms/Text";
import { Card } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { Divider } from "@/components/atoms/Divider";
import { Badge } from "@/components/atoms/Badge";

const ServicesScreen: React.FC = () => {
  const { theme } = useTheme();
  const styles = createServicesStyles(theme);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Mock data for services
  const services = [
    {
      id: "basic",
      name: "Lavado Básico",
      description: "Lavado exterior con agua y jabón",
      price: 15,
      duration: "30 min",
      features: ["Lavado exterior", "Enjuague", "Secado"],
      popular: false,
    },
    {
      id: "premium",
      name: "Lavado Premium",
      description: "Lavado completo interior y exterior",
      price: 25,
      duration: "45 min",
      features: [
        "Lavado exterior",
        "Aspirado interior",
        "Limpieza de vidrios",
        "Encerado",
      ],
      popular: true,
    },
    {
      id: "deluxe",
      name: "Lavado Deluxe",
      description: "Servicio completo con encerado y detallado",
      price: 35,
      duration: "60 min",
      features: [
        "Lavado exterior",
        "Aspirado interior",
        "Limpieza de vidrios",
        "Encerado premium",
        "Detallado de llantas",
      ],
      popular: false,
    },
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleBookService = (serviceId: string) => {
    console.log("Booking service:", serviceId);
    // TODO: Navigate to booking flow
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text variant="heading" size="xxl" style={styles.title}>
            Servicios
          </Text>
          <Text variant="subheading" size="md" style={styles.subtitle}>
            Elige el servicio que mejor se adapte a tu vehículo
          </Text>
        </View>

        <View style={styles.content}>
          {services.map((service, index) => (
            <Card
              key={service.id}
              variant="default"
              size="large"
              style={[
                styles.serviceCard,
                selectedService === service.id && styles.selectedServiceCard,
              ]}
            >
              <View style={styles.serviceHeader}>
                <View style={styles.serviceTitleContainer}>
                  <Text
                    variant="subheading"
                    size="lg"
                    style={styles.serviceName}
                  >
                    {service.name}
                  </Text>
                  {service.popular && (
                    <Badge
                      variant="success"
                      size="small"
                      style={styles.popularBadge}
                    >
                      Popular
                    </Badge>
                  )}
                </View>
                <View style={styles.priceContainer}>
                  <Text variant="heading" size="lg" style={styles.price}>
                    ${service.price}
                  </Text>
                  <Text variant="caption" size="xs" style={styles.duration}>
                    {service.duration}
                  </Text>
                </View>
              </View>

              <Text variant="body" size="md" style={styles.description}>
                {service.description}
              </Text>

              <Divider orientation="horizontal" style={styles.divider} />

              <View style={styles.featuresContainer}>
                <Text variant="label" size="sm" style={styles.featuresTitle}>
                  Incluye:
                </Text>
                {service.features.map((feature, featureIndex) => (
                  <View key={featureIndex} style={styles.featureItem}>
                    <Text variant="body" size="sm" style={styles.featureText}>
                      ✓ {feature}
                    </Text>
                  </View>
                ))}
              </View>

              <View style={styles.serviceActions}>
                <Button
                  variant={
                    selectedService === service.id ? "primary" : "outline"
                  }
                  size="medium"
                  style={styles.selectButton}
                  onPress={() => handleServiceSelect(service.id)}
                >
                  {selectedService === service.id
                    ? "Seleccionado"
                    : "Seleccionar"}
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  style={styles.bookButton}
                  onPress={() => handleBookService(service.id)}
                >
                  Reservar
                </Button>
              </View>
            </Card>
          ))}
        </View>

        {selectedService && (
          <View style={styles.selectedServiceInfo}>
            <Card variant="primary" size="medium" style={styles.infoCard}>
              <Text variant="subheading" size="md" style={styles.infoTitle}>
                Servicio Seleccionado
              </Text>
              <Text variant="body" size="sm" style={styles.infoText}>
                Has seleccionado un servicio. Ve a la pestaña "Inicio" para
                completar tu reserva.
              </Text>
            </Card>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServicesScreen;
