import { ViewProps } from "react-native";

export type ContainerVariant =
  | "base" // flex: 1
  | "centered" // flex: 1, justifyContent: center, alignItems: center
  | "padded" // flex: 1, padding
  | "centeredPadded" // flex: 1, justifyContent: center, alignItems: center, padding
  | "row" // flex: 1, flexDirection: row
  | "column"; // flex: 1, flexDirection: column

export interface ContainerProps extends ViewProps {
  variant?: ContainerVariant;
  children: React.ReactNode;
}
