import { ViewStyle } from "react-native";
import { TimeChoice } from "@/types";

export interface TimeChoiceChipsProps {
  choices: TimeChoice[];
  selectedChoice: TimeChoice | null;
  onSelect: (choice: TimeChoice) => void;
  onSchedulePress?: () => void;
  scheduledDate?: Date | null;
  style?: ViewStyle;
}

export interface TimeChoiceChipsStyles {
  container: ViewStyle;
  chipsRow: ViewStyle;
  chip: ViewStyle;
  selectedChip: ViewStyle;
  chipText: ViewStyle;
  selectedChipText: ViewStyle;
  chipIcon: ViewStyle;
  selectedChipIcon: ViewStyle;
  scheduledInfo: ViewStyle;
  scheduledHeader: ViewStyle;
  scheduledIcon: ViewStyle;
  scheduledText: ViewStyle;
  scheduledDate: ViewStyle;
  scheduledTime: ViewStyle;
}
