import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { ContainerVariant } from "./Container.types";

export const createContainerStyles = (theme: Theme) => {
  const { spacing } = theme;

  return StyleSheet.create({
    base: {
      flex: 1,
    },
    centered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    padded: {
      flex: 1,
      padding: spacing.xl,
    },
    centeredPadded: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: spacing.xl,
    },
    row: {
      flex: 1,
      flexDirection: "row",
    },
    column: {
      flex: 1,
      flexDirection: "column",
    },
  });
};
