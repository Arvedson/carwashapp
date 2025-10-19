import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/molecules/Card";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Avatar } from "@/components/atoms/Avatar";
import { UserProfileCardProps } from "./UserProfileCard.types";
import { createUserProfileCardStyles } from "./UserProfileCard.styles";

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  size = "medium",
  variant = "default",
  onEdit,
  onAvatarPress,
  showEditButton = true,
  showStats = false,
  style,
  contentStyle,
}) => {
  const { theme } = useTheme();
  const styles = createUserProfileCardStyles(theme, size, variant);

  const getAvatarSize = () => {
    switch (size) {
      case "small":
        return "md";
      case "medium":
        return "lg";
      case "large":
        return "xl";
      default:
        return "lg";
    }
  };

  const formatMemberSince = (dateString?: string) => {
    if (!dateString) return "Miembro reciente";
    const date = new Date(dateString);
    return `Miembro desde ${date.toLocaleDateString("es-ES", {
      month: "long",
      year: "numeric",
    })}`;
  };

  return (
    <Card variant="default" size={size} style={[styles.card, style]}>
      <View style={[styles.content, contentStyle]}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <TouchableOpacity
            onPress={() => onAvatarPress?.(user)}
            disabled={!onAvatarPress}
          >
            <Avatar
              size={getAvatarSize()}
              source={user.avatar}
              style={styles.avatar}
            />
          </TouchableOpacity>

          <View style={styles.userDetails}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            {user.memberSince && (
              <Text style={styles.memberSince}>
                {formatMemberSince(user.memberSince)}
              </Text>
            )}
          </View>
        </View>

        {/* Edit Button */}
        {showEditButton && (
          <Button
            variant="outline"
            size="small"
            style={styles.editButton}
            onPress={() => onEdit?.(user)}
          >
            Editar
          </Button>
        )}
      </View>

      {/* Stats */}
      {showStats && user.stats && (
        <View style={styles.stats}>
          {user.stats.totalBookings !== undefined && (
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.stats.totalBookings}</Text>
              <Text style={styles.statLabel}>Reservas</Text>
            </View>
          )}

          {user.stats.totalSpent !== undefined && (
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>${user.stats.totalSpent}</Text>
              <Text style={styles.statLabel}>Gastado</Text>
            </View>
          )}

          {user.stats.favoriteService && (
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>⭐</Text>
              <Text style={styles.statLabel}>Favorito</Text>
            </View>
          )}
        </View>
      )}
    </Card>
  );
};

export default UserProfileCard;
