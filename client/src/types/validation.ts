import { SearchRequest, SearchConfig } from "./search";
import { VehicleType, DirtLevel, TimeChoice, Location } from "./smartHub";

// ===== VALIDACIONES DE BÚSQUEDA =====
export interface SearchValidationRules {
  requiredFields: (keyof SearchRequest)[];
  minSearchRadius: number;
  maxSearchRadius: number;
  minMaxResults: number;
  maxMaxResults: number;
  minRatingRange: [number, number];
  maxPriceRange: [number, number];
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// ===== VALIDADORES ESPECÍFICOS =====
export interface VehicleValidation {
  isValidVehicle: (vehicle: VehicleType | null) => boolean;
  getVehicleValidationMessage: (vehicle: VehicleType | null) => string;
}

export interface LocationValidation {
  isValidLocation: (location: Location | null) => boolean;
  getLocationValidationMessage: (location: Location | null) => string;
}

export interface DateValidation {
  isValidScheduledDate: (date: Date | null) => boolean;
  getDateValidationMessage: (date: Date | null) => string;
}

// ===== REGLAS DE VALIDACIÓN POR DEFECTO =====
export const DEFAULT_SEARCH_VALIDATION_RULES: SearchValidationRules = {
  requiredFields: ["vehicle", "dirtLevel", "timeChoice"],
  minSearchRadius: 1,
  maxSearchRadius: 50,
  minMaxResults: 1,
  maxMaxResults: 100,
  minRatingRange: [1, 5],
  maxPriceRange: [0, 10000],
};

// ===== MENSAJES DE VALIDACIÓN =====
export const VALIDATION_MESSAGES = {
  VEHICLE_REQUIRED: "Debes seleccionar un tipo de vehículo",
  DIRT_LEVEL_REQUIRED: "Debes seleccionar el nivel de suciedad",
  TIME_CHOICE_REQUIRED: "Debes seleccionar cuándo quieres el servicio",
  LOCATION_REQUIRED: "Necesitamos tu ubicación para buscar lavadores cercanos",
  INVALID_SCHEDULED_DATE: "La fecha programada no puede ser en el pasado",
  INVALID_SEARCH_RADIUS: "El radio de búsqueda debe estar entre 1 y 50 km",
  INVALID_MAX_RESULTS:
    "El número máximo de resultados debe estar entre 1 y 100",
  INVALID_RATING: "La calificación mínima debe estar entre 1 y 5",
  INVALID_PRICE: "El precio máximo debe ser mayor a 0",
} as const;





