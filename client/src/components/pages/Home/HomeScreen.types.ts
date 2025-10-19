import { Location } from "@/types";

export interface HomeScreenProps {
  // Props del componente si las hay
}

export interface HomeScreenState {
  selectedDate: Date | null;
  selectedTime: string | null;
}

export interface HomeScreenHandlers {
  handleDateChange: (date: Date | Date[] | null) => void;
  handleTimeChange: (time: string | null) => void;
  handleLogout: () => void;
  handleLocationPress: () => void;
  handleMapRegionChange: (region: Location) => void;
}

export interface HomeScreenStyles {
  title: {
    fontSize: number;
    fontWeight: string;
    marginBottom: number;
    color: string;
  };
  subtitle: {
    fontSize: number;
    marginBottom: number;
    color: string;
  };
}
