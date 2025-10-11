import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  // Botones comunes (sin colores, solo estructura)
  button: {
    borderRadius: 8, // Valor base, se sobrescribe con tema
    padding: 16, // Valor base, se sobrescribe con tema
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPrimary: {
    // Sin color, se agrega dinámicamente
  },
  buttonSecondary: {
    // Sin color, se agrega dinámicamente
  },
  buttonError: {
    // Sin color, se agrega dinámicamente
  },
  buttonDisabled: {
    // Sin color, se agrega dinámicamente
  },
  buttonText: {
    fontSize: 16, // Valor base, se sobrescribe con tema
    fontWeight: "700", // Valor base, se sobrescribe con tema
  },
  buttonTextSecondary: {
    fontSize: 16, // Valor base, se sobrescribe con tema
    fontWeight: "500", // Valor base, se sobrescribe con tema
  },

  // Inputs comunes (sin colores, solo estructura)
  input: {
    borderWidth: 1,
    borderRadius: 8, // Valor base, se sobrescribe con tema
    padding: 12, // Valor base, se sobrescribe con tema
    fontSize: 16, // Valor base, se sobrescribe con tema
  },
  inputFocused: {
    borderWidth: 2,
  },
  inputError: {
    // Sin color, se agrega dinámicamente
  },

  // Textos comunes (sin colores, solo estructura)
  textTitle: {
    fontSize: 32, // Valor base, se sobrescribe con tema
    fontWeight: "700", // Valor base, se sobrescribe con tema
  },
  textSubtitle: {
    fontSize: 18, // Valor base, se sobrescribe con tema
  },
  textBody: {
    fontSize: 16, // Valor base, se sobrescribe con tema
  },
  textCaption: {
    fontSize: 14, // Valor base, se sobrescribe con tema
  },
  textCenter: {
    textAlign: "center",
  },

  // Contenedores comunes (sin colores, solo estructura)
  container: {
    flex: 1,
  },
  containerCentered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 12, // Valor base, se sobrescribe con tema
    padding: 20, // Valor base, se sobrescribe con tema
  },
  cardElevated: {
    borderRadius: 12, // Valor base, se sobrescribe con tema
    padding: 20, // Valor base, se sobrescribe con tema
  },

  // Espaciado común
  marginBottom: {
    marginBottom: 16, // Valor base, se sobrescribe con tema
  },
  marginTop: {
    marginTop: 16, // Valor base, se sobrescribe con tema
  },
  padding: {
    padding: 20, // Valor base, se sobrescribe con tema
  },
  paddingHorizontal: {
    paddingHorizontal: 20, // Valor base, se sobrescribe con tema
  },
  paddingVertical: {
    paddingVertical: 20, // Valor base, se sobrescribe con tema
  },
});
