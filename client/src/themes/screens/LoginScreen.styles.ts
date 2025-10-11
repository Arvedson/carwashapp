import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Valor base, se sobrescribe con tema
  },
  title: {
    fontSize: 32, // Valor base, se sobrescribe con tema
    fontWeight: "700", // Valor base, se sobrescribe con tema
    marginBottom: 8, // Valor base, se sobrescribe con tema
  },
  subtitle: {
    fontSize: 18, // Valor base, se sobrescribe con tema
    marginBottom: 32, // Valor base, se sobrescribe con tema
  },
  form: {
    width: "100%",
    maxWidth: 300,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8, // Valor base, se sobrescribe con tema
    padding: 12, // Valor base, se sobrescribe con tema
    marginBottom: 16, // Valor base, se sobrescribe con tema
  },
  button: {
    borderRadius: 8, // Valor base, se sobrescribe con tema
    padding: 16, // Valor base, se sobrescribe con tema
    alignItems: "center",
  },
  buttonDisabled: {
    // Sin color, se agrega dinámicamente
  },
  buttonText: {
    fontSize: 16, // Valor base, se sobrescribe con tema
    fontWeight: "700", // Valor base, se sobrescribe con tema
  },
  helpText: {
    marginTop: 20, // Valor base, se sobrescribe con tema
    fontSize: 14, // Valor base, se sobrescribe con tema
    textAlign: "center",
  },
});
