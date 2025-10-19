import { SearchRequest, SearchResponse, SearchServiceConfig } from "@/types";
import { ENVIRONMENT_CONFIG } from "@/types/config";

/**
 * Servicio para manejar búsquedas de lavadores
 * Centraliza toda la lógica de comunicación con el backend
 */
class SearchService {
  private config: SearchServiceConfig;

  constructor(config: Partial<SearchServiceConfig> = {}) {
    this.config = {
      baseUrl: ENVIRONMENT_CONFIG.apiBaseUrl,
      timeout: ENVIRONMENT_CONFIG.searchTimeout,
      retryAttempts: ENVIRONMENT_CONFIG.retryAttempts,
      ...config,
    };
  }

  /**
   * Realiza una búsqueda real de lavadores
   * @param searchData - Datos de búsqueda
   * @returns Promise con resultados de búsqueda
   */
  async searchWashers(searchData: SearchRequest): Promise<SearchResponse> {
    try {
      console.log("🔍 Realizando búsqueda real de lavadores...", searchData);

      const response = await fetch(
        `${this.config.baseUrl}/api/search/washers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getAuthToken()}`,
          },
          body: JSON.stringify(searchData),
          signal: AbortSignal.timeout(this.config.timeout),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Search failed: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();

      console.log("✅ Búsqueda real completada:", result);
      return result;
    } catch (error) {
      console.error("❌ Error en búsqueda real:", error);
      throw error;
    }
  }

  /**
   * Simula una búsqueda de lavadores (para desarrollo)
   * @param searchData - Datos de búsqueda
   * @returns Promise con resultados simulados
   */
  async simulateSearch(searchData: SearchRequest): Promise<SearchResponse> {
    console.log("🔍 Simulando búsqueda de lavadores...", searchData);

    return new Promise((resolve) => {
      setTimeout(() => {
        const mockResponse: SearchResponse = {
          washers: [],
          totalResults: 0,
          searchId: `search_${Date.now()}`,
          searchTimestamp: new Date().toISOString(),
          searchRadius: searchData.searchRadius,
          filters: {
            minRating: searchData.minRating,
            maxPrice: searchData.maxPrice,
            verifiedOnly: searchData.verifiedOnly,
          },
        };

        console.log("✅ Simulación de búsqueda completada:", mockResponse);
        resolve(mockResponse);
      }, 2000); // Simular delay de 2 segundos
    });
  }

  /**
   * Valida los datos de búsqueda antes de enviarlos
   * @param searchData - Datos de búsqueda a validar
   * @returns true si los datos son válidos
   */
  validateSearchData(searchData: SearchRequest): boolean {
    const requiredFields = ["vehicle", "dirtLevel", "timeChoice"];

    for (const field of requiredFields) {
      if (!searchData[field as keyof SearchRequest]) {
        console.warn(`❌ Campo requerido faltante: ${field}`);
        return false;
      }
    }

    // Validar configuración
    if (searchData.searchRadius < 1 || searchData.searchRadius > 50) {
      console.warn("❌ Radio de búsqueda inválido:", searchData.searchRadius);
      return false;
    }

    if (searchData.maxResults < 1 || searchData.maxResults > 100) {
      console.warn(
        "❌ Número máximo de resultados inválido:",
        searchData.maxResults
      );
      return false;
    }

    console.log("✅ Datos de búsqueda válidos");
    return true;
  }

  /**
   * Obtiene el token de autenticación
   * @returns Token de autenticación o null
   */
  private getAuthToken(): string | null {
    // En una implementación real, esto vendría del store de autenticación
    return localStorage.getItem("authToken") || null;
  }

  /**
   * Actualiza la configuración del servicio
   * @param newConfig - Nueva configuración
   */
  updateConfig(newConfig: Partial<SearchServiceConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Obtiene la configuración actual del servicio
   * @returns Configuración actual
   */
  getConfig(): SearchServiceConfig {
    return { ...this.config };
  }
}

// Instancia singleton del servicio
export const searchService = new SearchService();
