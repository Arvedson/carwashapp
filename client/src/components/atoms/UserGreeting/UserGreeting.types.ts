import { ViewStyle, TextStyle } from "react-native";
import { User } from "@/types";

export interface UserGreetingProps {
  user: User;
  style?: ViewStyle;
}

export interface UserGreetingStyles {
  container: ViewStyle;
  greeting: TextStyle;
  name: TextStyle;
}
