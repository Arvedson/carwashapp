import { useState, useCallback } from "react";
import { useSearchData } from "./useSearchData";
import { searchService } from "@/services/searchService";
import {
  UseSearchProps,
  UseSearchReturn,
  SearchState,
  SearchResponse,
} from "@/types";
import { VALIDATION_MESSAGES } from "@/types/validation";

/**
 * Hook principal para manejar búsquedas de lavadores
 * Centraliza toda la lógica de búsqueda y estado relacionado
 *
 * @param props - Propiedades del hook
 * @returns Estado y acciones de búsqueda
 */
export const useSearch = ({
  selectedVehicle,
  selectedDirtLevel,
  selectedTimeChoice,
  scheduledDate,
  currentLocation,
  userId,
  config = {},
  useSimulation = true,
}: UseSearchProps): UseSearchReturn => {
  // Estado local del hook
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchResults, setLastSearchResults] =
    useState<SearchResponse | null>(null);

  // Construir estado para useSearchData
  const searchState: SearchState = {
    selectedVehicle,
    selectedDirtLevel,
    selectedTimeChoice,
    scheduledDate,
    currentLocation,
    userId,
  };

  // Obtener datos de búsqueda y estado de preparación
  const { searchData, isSearchReady } = useSearchData(searchState, config);

  /**
   * Realiza la búsqueda de lavadores
   * @returns Promise con resultados de búsqueda o undefined si hay error
   */
  const searchWashers = useCallback(async (): Promise<
    SearchResponse | undefined
  > => {
    // Validar que la búsqueda esté lista
    if (!isSearchReady) {
      const missingFields = [];
      if (!selectedVehicle) missingFields.push("vehículo");
      if (!selectedDirtLevel) missingFields.push("nivel de suciedad");
      if (!selectedTimeChoice) missingFields.push("opción de tiempo");

      const errorMessage = `Por favor completa los siguientes campos: ${missingFields.join(
        ", "
      )}`;
      setError(errorMessage);
      console.warn("❌ Búsqueda no está lista:", missingFields);
      return undefined;
    }

    // Validar datos antes de enviar
    if (!searchService.validateSearchData(searchData)) {
      setError("Los datos de búsqueda no son válidos");
      console.error("❌ Datos de búsqueda inválidos:", searchData);
      return undefined;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log("🔍 Iniciando búsqueda de lavadores...", {
        searchData,
        useSimulation,
        timestamp: new Date().toISOString(),
      });

      // Realizar búsqueda (real o simulada)
      const results = useSimulation
        ? await searchService.simulateSearch(searchData)
        : await searchService.searchWashers(searchData);

      setLastSearchResults(results);
      console.log("✅ Búsqueda completada exitosamente:", results);

      return results;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Error desconocido en la búsqueda";
      setError(errorMessage);
      console.error("❌ Error en búsqueda:", {
        error: err,
        searchData,
        useSimulation,
      });
      return undefined;
    } finally {
      setIsLoading(false);
    }
  }, [
    searchData,
    isSearchReady,
    useSimulation,
    selectedVehicle,
    selectedDirtLevel,
    selectedTimeChoice,
  ]);

  /**
   * Limpia el error actual
   */
  const clearError = useCallback(() => {
    setError(null);
    console.log("🧹 Error limpiado");
  }, []);

  /**
   * Resetea el estado de búsqueda
   */
  const resetSearch = useCallback(() => {
    setError(null);
    setLastSearchResults(null);
    setIsLoading(false);
    console.log("🔄 Estado de búsqueda reseteado");
  }, []);

  return {
    // Estado
    searchData,
    isSearchReady,
    isLoading,
    error,
    lastSearchResults,

    // Acciones
    searchWashers,
    clearError,
    resetSearch,
  };
};




