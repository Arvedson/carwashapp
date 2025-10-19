import React from "react";
import { View, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuthStore } from "@/store/useAuthStore";
import { createProfileStyles } from "@/themes/screens/ProfileScreen.styles";
import { Text } from "@/components/atoms/Text";
import { Card } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { Divider } from "@/components/atoms/Divider";
import { Avatar } from "@/components/atoms/Avatar";
import { Switch } from "@/components/atoms/Switch";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

const ProfileScreen: React.FC = () => {
  const { theme } = useTheme();
  const { user, logout } = useAuthStore();
  const styles = createProfileStyles(theme);

  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Cerrar Sesión",
          style: "destructive",
          onPress: logout,
        },
      ]
    );
  };

  const handleEditProfile = () => {
    console.log("Edit profile pressed");
    // TODO: Navigate to edit profile screen
  };

  const handleNotifications = () => {
    console.log("Notifications pressed");
    // TODO: Navigate to notifications settings
  };

  const handlePaymentMethods = () => {
    console.log("Payment methods pressed");
    // TODO: Navigate to payment methods screen
  };

  const handleHelp = () => {
    console.log("Help pressed");
    // TODO: Navigate to help screen
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
            Mi Perfil
          </Text>
        </View>

        <View style={styles.content}>
          {/* User Info Card */}
          <Card variant="default" size="large" style={styles.userCard}>
            <View style={styles.userInfo}>
              <Avatar
                size="xl"
                source="https://via.placeholder.com/80"
                style={styles.avatar}
              />
              <View style={styles.userDetails}>
                <Text variant="subheading" size="lg" style={styles.userName}>
                  {user?.name || "Usuario"}
                </Text>
                <Text variant="body" size="md" style={styles.userEmail}>
                  {user?.email}
                </Text>
                <Text variant="caption" size="sm" style={styles.memberSince}>
                  Miembro desde enero 2024
                </Text>
              </View>
            </View>
            <Button
              variant="outline"
              size="small"
              style={styles.editButton}
              onPress={handleEditProfile}
            >
              Editar
            </Button>
          </Card>

          {/* Settings Section */}
          <Card variant="default" size="medium" style={styles.settingsCard}>
            <Text variant="subheading" size="md" style={styles.sectionTitle}>
              Configuración
            </Text>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text variant="body" size="md" style={styles.settingLabel}>
                  Notificaciones
                </Text>
                <Text
                  variant="caption"
                  size="sm"
                  style={styles.settingDescription}
                >
                  Recibir notificaciones sobre reservas
                </Text>
              </View>
              <Switch size="medium" value={true} onValueChange={() => {}} />
            </View>

            <Divider orientation="horizontal" style={styles.divider} />

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text variant="body" size="md" style={styles.settingLabel}>
                  Tema
                </Text>
                <Text
                  variant="caption"
                  size="sm"
                  style={styles.settingDescription}
                >
                  Cambiar entre tema claro y oscuro
                </Text>
              </View>
              <ThemeToggle size="medium" />
            </View>
          </Card>

          {/* Menu Options */}
          <Card variant="default" size="medium" style={styles.menuCard}>
            <Text variant="subheading" size="md" style={styles.sectionTitle}>
              Opciones
            </Text>

            <Button
              variant="ghost"
              size="medium"
              style={styles.menuButton}
              onPress={handlePaymentMethods}
            >
              💳 Métodos de Pago
            </Button>

            <Divider orientation="horizontal" style={styles.divider} />

            <Button
              variant="ghost"
              size="medium"
              style={styles.menuButton}
              onPress={handleNotifications}
            >
              🔔 Notificaciones
            </Button>

            <Divider orientation="horizontal" style={styles.divider} />

            <Button
              variant="ghost"
              size="medium"
              style={styles.menuButton}
              onPress={handleHelp}
            >
              ❓ Ayuda y Soporte
            </Button>
          </Card>

          {/* Stats Card */}
          <Card variant="default" size="medium" style={styles.statsCard}>
            <Text variant="subheading" size="md" style={styles.sectionTitle}>
              Estadísticas
            </Text>

            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text variant="heading" size="lg" style={styles.statNumber}>
                  12
                </Text>
                <Text variant="caption" size="sm" style={styles.statLabel}>
                  Lavados Completados
                </Text>
              </View>

              <View style={styles.statItem}>
                <Text variant="heading" size="lg" style={styles.statNumber}>
                  $180
                </Text>
                <Text variant="caption" size="sm" style={styles.statLabel}>
                  Total Gastado
                </Text>
              </View>
            </View>
          </Card>

          {/* Logout Button */}
          <Button
            variant="outline"
            size="large"
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            Cerrar Sesión
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
