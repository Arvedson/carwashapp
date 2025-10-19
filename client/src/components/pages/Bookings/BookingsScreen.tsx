import React from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuthStore } from "@/store/useAuthStore";
import { createBookingsStyles } from "@/themes/screens/BookingsScreen.styles";
import { Text } from "@/components/atoms/Text";
import { Card } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { Divider } from "@/components/atoms/Divider";

const BookingsScreen: React.FC = () => {
  const { theme } = useTheme();
  const { user } = useAuthStore();
  const styles = createBookingsStyles(theme);

  // Mock data for bookings
  const mockBookings = [
    {
      id: "1",
      service: "Lavado Premium",
      date: "2024-01-15",
      time: "10:00",
      status: "confirmed",
      price: "$25",
    },
    {
      id: "2",
      service: "Lavado Básico",
      date: "2024-01-20",
      time: "14:30",
      status: "pending",
      price: "$15",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return theme.colors.success;
      case "pending":
        return theme.colors.warning;
      case "cancelled":
        return theme.colors.error;
      default:
        return theme.colors.text.secondary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmada";
      case "pending":
        return "Pendiente";
      case "cancelled":
        return "Cancelada";
      default:
        return status;
    }
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
            Mis Reservas
          </Text>
          <Text variant="subheading" size="md" style={styles.subtitle}>
            Gestiona tus citas de lavado
          </Text>
        </View>

        <View style={styles.content}>
          {mockBookings.length > 0 ? (
            mockBookings.map((booking, index) => (
              <Card
                key={booking.id}
                variant="default"
                size="medium"
                style={styles.bookingCard}
              >
                <View style={styles.bookingHeader}>
                  <Text
                    variant="subheading"
                    size="lg"
                    style={styles.serviceName}
                  >
                    {booking.service}
                  </Text>
                  <View
                    style={[
                      styles.statusBadge,
                      { backgroundColor: getStatusColor(booking.status) },
                    ]}
                  >
                    <Text variant="caption" size="xs" style={styles.statusText}>
                      {getStatusText(booking.status)}
                    </Text>
                  </View>
                </View>

                <Divider orientation="horizontal" style={styles.divider} />

                <View style={styles.bookingDetails}>
                  <View style={styles.detailRow}>
                    <Text variant="body" size="sm" style={styles.detailLabel}>
                      📅 Fecha:
                    </Text>
                    <Text variant="body" size="sm" style={styles.detailValue}>
                      {new Date(booking.date).toLocaleDateString("es-ES")}
                    </Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Text variant="body" size="sm" style={styles.detailLabel}>
                      🕐 Hora:
                    </Text>
                    <Text variant="body" size="sm" style={styles.detailValue}>
                      {booking.time}
                    </Text>
                  </View>

                  <View style={styles.detailRow}>
                    <Text variant="body" size="sm" style={styles.detailLabel}>
                      💰 Precio:
                    </Text>
                    <Text variant="body" size="sm" style={styles.detailValue}>
                      {booking.price}
                    </Text>
                  </View>
                </View>

                <View style={styles.bookingActions}>
                  <Button
                    variant="secondary"
                    size="small"
                    style={styles.actionButton}
                  >
                    Ver Detalles
                  </Button>
                  {booking.status === "pending" && (
                    <Button
                      variant="outline"
                      size="small"
                      style={styles.actionButton}
                    >
                      Cancelar
                    </Button>
                  )}
                </View>
              </Card>
            ))
          ) : (
            <Card variant="default" size="large" style={styles.emptyCard}>
              <Text variant="subheading" size="lg" style={styles.emptyTitle}>
                No tienes reservas
              </Text>
              <Text variant="body" size="md" style={styles.emptyDescription}>
                Reserva tu primer lavado de auto desde la pantalla de servicios
              </Text>
              <Button
                variant="primary"
                size="medium"
                style={styles.emptyButton}
              >
                Ver Servicios
              </Button>
            </Card>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingsScreen;
