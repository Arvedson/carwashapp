import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createLocationPickerStyles = (theme: Theme) => {
  const { spacing } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      minHeight: 400, // Altura mínima para asegurar que se vea
    },
    mapContainer: {
      height: 300, // Altura fija para el mapa
      borderRadius: 12,
      overflow: "hidden",
      marginBottom: spacing.md,
    },
    controlsContainer: {
      flexDirection: "row",
      alignItems: "stretch", // Esto hace que todos los hijos tengan la misma altura
      justifyContent: "space-between", // Distribuye el espacio uniformemente
      gap: spacing.sm,
    },
    currentLocationButtonContainer: {
      flex: 1,
      minWidth: 0, // Permite que el flex funcione correctamente en iOS
    },
    buttonContainer: {
      flex: 1,
      minWidth: 0, // Permite que el flex funcione correctamente en iOS
    },
  });
};
