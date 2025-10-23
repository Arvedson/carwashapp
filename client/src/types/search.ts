import {
  VehicleType,
  DirtLevel,
  TimeChoice,
  Location,
  Washer,
} from "./smartHub";

// ===== ESTADO DE BÚSQUEDA =====
export interface SearchState {
  selectedVehicle: VehicleType | null;
  selectedDirtLevel: DirtLevel | null;
  selectedTimeChoice: TimeChoice | null;
  scheduledDate: Date | null;
  currentLocation: Location | null;
  userId?: string;
}

// ===== CONFIGURACIÓN DE BÚSQUEDA =====
export interface SearchConfig {
  searchRadius: number;
  maxResults: number;
  includeUnavailable: boolean;
  minRating: number;
  maxPrice: number;
  verifiedOnly: boolean;
}

// ===== DATOS DE BÚSQUEDA (lo que se envía al backend) =====
export interface SearchRequest {
  // Datos del usuario
  vehicle: VehicleType | null;
  dirtLevel: DirtLevel | null;
  timeChoice: TimeChoice | null;
  scheduledDate: Date | null;

  // Ubicación
  userLocation: Location | null;

  // Metadatos
  searchTimestamp: string;
  userId?: string;

  // Configuración
  searchRadius: number;
  maxResults: number;
  includeUnavailable: boolean;
  minRating: number;
  maxPrice: number;
  verifiedOnly: boolean;
}

// ===== RESPUESTA DE BÚSQUEDA =====
export interface SearchResponse {
  washers: Washer[];
  totalResults: number;
  searchId: string;
  searchTimestamp: string;
  searchRadius: number;
  filters: {
    minRating: number;
    maxPrice: number;
    verifiedOnly: boolean;
  };
}

// ===== ESTADO DEL HOOK =====
export interface SearchHookState {
  searchData: SearchRequest;
  isSearchReady: boolean;
  isLoading: boolean;
  error: string | null;
  lastSearchResults: SearchResponse | null;
}

// ===== ACCIONES DEL HOOK =====
export interface SearchHookActions {
  searchWashers: () => Promise<SearchResponse | undefined>;
  clearError: () => void;
  resetSearch: () => void;
}

// ===== HOOK COMPLETO =====
export type UseSearchReturn = SearchHookState & SearchHookActions;

// ===== PROPS DEL HOOK =====
export interface UseSearchProps {
  selectedVehicle: VehicleType | null;
  selectedDirtLevel: DirtLevel | null;
  selectedTimeChoice: TimeChoice | null;
  scheduledDate: Date | null;
  currentLocation: Location | null;
  userId?: string;
  config?: Partial<SearchConfig>;
  useSimulation?: boolean;
}

// ===== TIPOS DE SERVICIO =====
export interface SearchServiceConfig {
  baseUrl: string;
  timeout: number;
  retryAttempts: number;
}

export interface SearchServiceMethods {
  searchWashers: (searchData: SearchRequest) => Promise<SearchResponse>;
  simulateSearch: (searchData: SearchRequest) => Promise<SearchResponse>;
  validateSearchData: (searchData: SearchRequest) => boolean;
}





