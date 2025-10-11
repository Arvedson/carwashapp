import { StyleSheet } from "react-native";

// Estilos de layout comunes que se pueden reutilizar
// Estos son estilos base sin colores, solo estructura
export const layoutStyles = StyleSheet.create({
  // Contenedores base
  container: {
    flex: 1,
  },
  containerCentered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerPadded: {
    flex: 1,
    padding: 20, // Valor base, se sobrescribe con tema
  },

  // Secciones
  section: {
    marginBottom: 24, // Valor base, se sobrescribe con tema
  },
  sectionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8, // Valor base, se sobrescribe con tema
    marginBottom: 16, // Valor base, se sobrescribe con tema
  },
  sectionColumn: {
    flexDirection: "column",
    gap: 8, // Valor base, se sobrescribe con tema
    marginBottom: 16, // Valor base, se sobrescribe con tema
  },

  // Cards y contenedores (sin colores, solo estructura)
  card: {
    borderRadius: 12, // Valor base, se sobrescribe con tema
    padding: 16, // Valor base, se sobrescribe con tema
    margin: 12, // Valor base, se sobrescribe con tema
  },
  cardCentered: {
    borderRadius: 12, // Valor base, se sobrescribe con tema
    padding: 16, // Valor base, se sobrescribe con tema
    margin: 12, // Valor base, se sobrescribe con tema
    alignItems: "center",
  },

  // Espaciado
  gapSmall: {
    gap: 8, // Valor base, se sobrescribe con tema
  },
  gapMedium: {
    gap: 12, // Valor base, se sobrescribe con tema
  },
  gapLarge: {
    gap: 16, // Valor base, se sobrescribe con tema
  },

  // Márgenes
  marginBottomSmall: {
    marginBottom: 8, // Valor base, se sobrescribe con tema
  },
  marginBottomMedium: {
    marginBottom: 12, // Valor base, se sobrescribe con tema
  },
  marginBottomLarge: {
    marginBottom: 16, // Valor base, se sobrescribe con tema
  },
  marginBottomXLarge: {
    marginBottom: 20, // Valor base, se sobrescribe con tema
  },
});
