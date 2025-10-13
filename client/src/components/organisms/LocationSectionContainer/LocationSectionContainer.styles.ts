import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";

export const createLocationSectionContainerStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: 20,
      marginVertical: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    header: {
      marginBottom: 16,
    },
    mapContainer: {
      marginBottom: 16,
    },
    buttonContainer: {
      alignItems: "flex-start",
    },
  });
};
