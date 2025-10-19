import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/molecules/Card";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Divider } from "@/components/atoms/Divider";
import { StatusBadge } from "@/components/atoms/StatusBadge";
import { BookingCardProps } from "./BookingCard.types";
import { createBookingCardStyles } from "./BookingCard.styles";

const BookingCard: React.FC<BookingCardProps> = ({
  booking,
  size = "medium",
  variant = "default",
  onViewDetails,
  onCancel,
  onReschedule,
  showActions = true,
  style,
  contentStyle,
}) => {
  const { theme } = useTheme();
  const styles = createBookingCardStyles(theme, size, variant);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES");
  };

  const canCancel = booking.status === "pending";
  const canReschedule =
    booking.status === "pending" || booking.status === "confirmed";

  return (
    <Card variant="default" size={size} style={[styles.card, style]}>
      <View style={[styles.content, contentStyle]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.serviceName}>{booking.service}</Text>
          <View style={styles.statusContainer}>
            <StatusBadge status={booking.status} size="small" />
          </View>
        </View>

        {/* Details */}
        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>📅 Fecha:</Text>
            <Text style={styles.detailValue}>{formatDate(booking.date)}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>🕐 Hora:</Text>
            <Text style={styles.detailValue}>{booking.time}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>💰 Precio:</Text>
            <Text style={styles.detailValue}>
              {typeof booking.price === "string"
                ? booking.price
                : `$${booking.price}`}
            </Text>
          </View>

          {booking.location && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>📍 Ubicación:</Text>
              <Text style={styles.detailValue}>{booking.location}</Text>
            </View>
          )}
        </View>

        {/* Actions */}
        {showActions && (
          <>
            <Divider
              orientation="horizontal"
              style={{ marginBottom: theme.spacing.sm }}
            />
            <View style={styles.actions}>
              <Button
                variant="secondary"
                size="small"
                style={styles.actionButton}
                onPress={() => onViewDetails?.(booking)}
              >
                Ver Detalles
              </Button>

              {canCancel && (
                <Button
                  variant="outline"
                  size="small"
                  style={styles.actionButton}
                  onPress={() => onCancel?.(booking)}
                >
                  Cancelar
                </Button>
              )}

              {canReschedule && (
                <Button
                  variant="outline"
                  size="small"
                  style={styles.actionButton}
                  onPress={() => onReschedule?.(booking)}
                >
                  Reprogramar
                </Button>
              )}
            </View>
          </>
        )}
      </View>
    </Card>
  );
};

export default BookingCard;
