import { VehicleType, DirtLevel, TimeChoice } from "@/types";

import { ViewStyle } from "react-native";

export interface RequestCardProps {
  vehicles: VehicleType[];
  dirtLevels: DirtLevel[];
  timeChoices: TimeChoice[];
  selectedVehicle: VehicleType | null;
  selectedDirtLevel: DirtLevel | null;
  selectedTimeChoice: TimeChoice | null;
  onVehicleSelect: (vehicle: VehicleType) => void;
  onDirtLevelSelect: (level: DirtLevel) => void;
  onTimeChoiceSelect: (choice: TimeChoice) => void;
  onSearch: () => void;
  onSchedulePress?: () => void;
  scheduledDate?: Date | null;
  isLoading?: boolean;
  style?: ViewStyle;
}

export interface RequestCardStyles {
  container: ViewStyle;
  title: ViewStyle;
  section: ViewStyle;
  sectionTitle: ViewStyle;
}
