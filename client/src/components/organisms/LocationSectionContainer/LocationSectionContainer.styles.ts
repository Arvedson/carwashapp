import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createLocationSectionContainerStyles = (theme: Theme) => {
  const { spacing } = theme;

  return StyleSheet.create({
    container: {
      marginVertical: spacing.md,
    },
    header: {
      marginBottom: spacing.md,
    },
    mapContainer: {
      marginBottom: spacing.md,
    },
    buttonContainer: {
      alignItems: "center",
    },
  });
};
