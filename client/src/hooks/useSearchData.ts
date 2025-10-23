import { useMemo } from "react";
import { SearchState, SearchConfig, SearchRequest } from "@/types";
import { DEFAULT_SEARCH_CONFIG } from "@/types/config";

/**
 * Hook para construir datos de búsqueda a partir del estado del componente
 * @param state - Estado actual de las selecciones del usuario
 * @param config - Configuración opcional de búsqueda
 * @returns Objeto con searchData e isSearchReady
 */
export const useSearchData = (
  state: SearchState,
  config: Partial<SearchConfig> = {}
) => {
  const searchConfig = useMemo(
    () => ({
      ...DEFAULT_SEARCH_CONFIG,
      ...config,
    }),
    [config]
  );

  const searchData = useMemo(
    (): SearchRequest => ({
      // Datos de búsqueda del usuario
      vehicle: state.selectedVehicle,
      dirtLevel: state.selectedDirtLevel,
      timeChoice: state.selectedTimeChoice,
      scheduledDate: state.scheduledDate,

      // Ubicación del usuario
      userLocation: state.currentLocation,

      // Metadatos de la búsqueda
      searchTimestamp: new Date().toISOString(),
      userId: state.userId,

      // Configuración de búsqueda
      searchRadius: searchConfig.searchRadius,
      maxResults: searchConfig.maxResults,
      includeUnavailable: searchConfig.includeUnavailable,
      minRating: searchConfig.minRating,
      maxPrice: searchConfig.maxPrice,
      verifiedOnly: searchConfig.verifiedOnly,
    }),
    [state, searchConfig]
  );

  // Verificar si la búsqueda está lista (campos requeridos)
  const isSearchReady = useMemo(() => {
    return !!(
      state.selectedVehicle &&
      state.selectedDirtLevel &&
      state.selectedTimeChoice
    );
  }, [
    state.selectedVehicle,
    state.selectedDirtLevel,
    state.selectedTimeChoice,
  ]);

  return {
    searchData,
    isSearchReady,
    searchConfig,
  };
};





