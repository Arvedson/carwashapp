import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/molecules/Card";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Divider } from "@/components/atoms/Divider";
import { Badge } from "@/components/atoms/Badge";
import { PriceTag } from "@/components/atoms/PriceTag";
import { FeatureList } from "@/components/atoms/FeatureList";
import { ServiceCardProps } from "./ServiceCard.types";
import { createServiceCardStyles } from "./ServiceCard.styles";

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  size = "medium",
  variant = "default",
  isSelected = false,
  onSelect,
  onBook,
  showActions = true,
  style,
  contentStyle,
}) => {
  const { theme } = useTheme();
  const styles = createServiceCardStyles(theme, size, variant);

  return (
    <Card
      variant="default"
      size={size}
      style={[styles.card, isSelected && styles.selectedCard, style]}
    >
      <View style={[styles.content, contentStyle]}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.serviceName}>{service.name}</Text>
            {service.popular && (
              <Badge variant="success" size="small" style={styles.popularBadge}>
                Popular
              </Badge>
            )}
          </View>

          <View style={styles.priceContainer}>
            <PriceTag
              amount={service.price}
              currency="$"
              size={size === "small" ? "medium" : "large"}
              variant="primary"
            />
            <Text style={styles.duration}>{service.duration}</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>{service.description}</Text>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Incluye:</Text>
          <FeatureList
            features={service.features}
            variant="checkmark"
            size="small"
          />
        </View>

        {/* Actions */}
        {showActions && (
          <>
            <Divider
              variant="horizontal"
              style={{ marginBottom: theme.spacing.sm }}
            />
            <View style={styles.actions}>
              <Button
                variant={isSelected ? "primary" : "outline"}
                size="medium"
                style={styles.selectButton}
                onPress={() => onSelect?.(service)}
              >
                {isSelected ? "Seleccionado" : "Seleccionar"}
              </Button>

              <Button
                variant="primary"
                size="medium"
                style={styles.bookButton}
                onPress={() => onBook?.(service)}
              >
                Reservar
              </Button>
            </View>
          </>
        )}
      </View>
    </Card>
  );
};

export default ServiceCard;
