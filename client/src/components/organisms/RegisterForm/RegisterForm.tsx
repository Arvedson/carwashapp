import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Button, Text, TextInput } from "@/components/atoms";
import { useAuthStore } from "@/store/useAuthStore";
import { useTheme } from "@/contexts/ThemeContext";
import { RegisterData } from "@/types";

interface RegisterFormProps {
  onSuccess?: () => void;
  onSwitchToLogin?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onSwitchToLogin,
}) => {
  const [formData, setFormData] = useState<RegisterData>({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailChecking, setEmailChecking] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState<boolean | null>(null);

  const { register, checkEmailAvailability } = useAuthStore();

  const { theme } = useTheme();
  const { spacing } = theme;

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password || !formData.name) {
      Alert.alert("Error", "Por favor completa todos los campos obligatorios");
      return false;
    }

    if (formData.password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return false;
    }

    if (formData.password.length < 8) {
      Alert.alert("Error", "La contraseña debe tener al menos 8 caracteres");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert("Error", "Por favor ingresa un email válido");
      return false;
    }

    return true;
  };

  const handleEmailChange = async (email: string) => {
    setFormData({ ...formData, email });

    // Verificar disponibilidad de email
    if (email.includes("@")) {
      setEmailChecking(true);
      try {
        const available = await checkEmailAvailability(email);
        setEmailAvailable(available);
      } catch (error) {
        console.error("Error checking email:", error);
        // En caso de error de red, permitir continuar con el registro
        setEmailAvailable(null);
        console.warn(
          "⚠️ No se pudo verificar disponibilidad del email, se permitirá el registro"
        );
      } finally {
        setEmailChecking(false);
      }
    }
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    // Verificar disponibilidad de email
    if (emailAvailable === false) {
      Alert.alert("Error", "Este email ya está registrado");
      return;
    }

    // Si hay error de red al verificar email, permitir continuar
    if (emailAvailable === null) {
      console.warn(
        "⚠️ Error de red al verificar email, continuando con registro"
      );
    }

    setLoading(true);
    try {
      const success = await register(formData);
      if (success) {
        Alert.alert(
          "¡Registro exitoso!",
          "Tu cuenta ha sido creada correctamente",
          [
            {
              text: "Continuar",
              onPress: onSuccess,
            },
          ]
        );
      } else {
        Alert.alert("Error", "No se pudo crear la cuenta. Intenta nuevamente.");
      }
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error durante el registro");
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    width: "100%" as const,
    maxWidth: 300,
  };

  const getEmailStatus = () => {
    if (emailChecking) return "Verificando...";
    if (emailAvailable === true) return "Email disponible";
    if (emailAvailable === false) return "Email ya registrado";
    if (emailAvailable === null)
      return "No se pudo verificar (continuar es posible)";
    return "";
  };

  const getEmailStatusColor = () => {
    if (emailChecking) return theme.colors.text.secondary;
    if (emailAvailable === true) return theme.colors.success;
    if (emailAvailable === false) return theme.colors.error;
    if (emailAvailable === null) return theme.colors.warning;
    return theme.colors.text.secondary;
  };

  return (
    <View style={containerStyle}>
      <TextInput
        placeholder="Nombre completo *"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        variant="default"
        size="medium"
      />

      <TextInput
        placeholder="Email *"
        value={formData.email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
        variant="default"
        size="medium"
      />

      {getEmailStatus() && (
        <Text
          variant="caption"
          style={{ marginTop: spacing.xs }}
          color={getEmailStatusColor()}
        >
          {getEmailStatus()}
        </Text>
      )}

      <TextInput
        placeholder="Teléfono (opcional)"
        value={formData.phone || ""}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        keyboardType="phone-pad"
        variant="default"
        size="medium"
      />

      <TextInput
        placeholder="Contraseña *"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
        variant="default"
        size="medium"
      />

      <TextInput
        placeholder="Confirmar contraseña *"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        variant="default"
        size="medium"
      />

      <Button
        variant="primary"
        size="large"
        loading={loading}
        onPress={handleRegister}
        style={{ marginBottom: spacing.sm }}
        disabled={emailAvailable === false}
      >
        Crear Cuenta
      </Button>

      <Button
        variant="outline"
        size="medium"
        onPress={onSwitchToLogin}
        style={{ marginBottom: spacing.sm }}
      >
        ¿Ya tienes cuenta? Iniciar Sesión
      </Button>

      <Text
        variant="caption"
        style={{
          marginTop: spacing.lg,
          textAlign: "center",
        }}
        color={theme.colors.text.secondary}
      >
        Al registrarte, aceptas nuestros términos y condiciones
      </Text>
    </View>
  );
};

export default RegisterForm;
