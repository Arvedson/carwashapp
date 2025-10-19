import { VehicleType } from "@/types";

export interface VehicleSelectorProps {
  vehicles: VehicleType[];
  selectedVehicle: VehicleType | null;
  onSelect: (vehicle: VehicleType) => void;
  style?: any;
}

export interface VehicleSelectorStyles {
  container: any;
  scrollView: any;
  vehicleItem: any;
  selectedVehicleItem: any;
  vehicleIcon: any;
  vehicleName: any;
  selectedVehicleName: any;
}
