import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Valor base, se sobrescribe con tema
  },
  title: {
    fontSize: 32, // Valor base, se sobrescribe con tema
    fontWeight: "700", // Valor base, se sobrescribe con tema
    textAlign: "center",
    marginBottom: 8, // Valor base, se sobrescribe con tema
  },
  subtitle: {
    fontSize: 18, // Valor base, se sobrescribe con tema
    textAlign: "center",
    marginBottom: 32, // Valor base, se sobrescribe con tema
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 24, // Valor base, se sobrescribe con tema
    fontWeight: "700", // Valor base, se sobrescribe con tema
    textAlign: "center",
    marginBottom: 8, // Valor base, se sobrescribe con tema
  },
  emailText: {
    fontSize: 16, // Valor base, se sobrescribe con tema
    textAlign: "center",
    marginBottom: 32, // Valor base, se sobrescribe con tema
  },
  features: {
    padding: 20, // Valor base, se sobrescribe con tema
    borderRadius: 12, // Valor base, se sobrescribe con tema
    marginBottom: 20, // Valor base, se sobrescribe con tema
  },
  featuresTitle: {
    fontSize: 18, // Valor base, se sobrescribe con tema
    fontWeight: "700", // Valor base, se sobrescribe con tema
    marginBottom: 16, // Valor base, se sobrescribe con tema
  },
  featureItem: {
    fontSize: 16, // Valor base, se sobrescribe con tema
    marginBottom: 8, // Valor base, se sobrescribe con tema
  },
  logoutButton: {
    borderRadius: 8, // Valor base, se sobrescribe con tema
    padding: 16, // Valor base, se sobrescribe con tema
    alignItems: "center",
  },
  logoutButtonText: {
    fontSize: 16, // Valor base, se sobrescribe con tema
    fontWeight: "700", // Valor base, se sobrescribe con tema
  },
});
