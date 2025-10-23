import { SearchConfig } from "./search";

// ===== CONFIGURACIÓN DE BÚSQUEDA =====
export interface SearchConfigPresets {
  development: SearchConfig;
  staging: SearchConfig;
  production: SearchConfig;
}

export interface SearchEnvironmentConfig {
  apiBaseUrl: string;
  searchTimeout: number;
  retryAttempts: number;
  enableAnalytics: boolean;
  enableCaching: boolean;
  cacheTimeout: number;
}

// ===== CONFIGURACIÓN POR REGIÓN =====
export interface RegionalSearchConfig extends SearchConfig {
  region: string;
  currency: string;
  timezone: string;
  businessHours: {
    start: string;
    end: string;
    timezone: string;
  };
}

// ===== CONFIGURACIONES POR DEFECTO =====
export const DEFAULT_SEARCH_CONFIG: SearchConfig = {
  searchRadius: 10,
  maxResults: 20,
  includeUnavailable: false,
  minRating: 4.0,
  maxPrice: 1000,
  verifiedOnly: true,
};

export const SEARCH_CONFIG_PRESETS: SearchConfigPresets = {
  development: {
    ...DEFAULT_SEARCH_CONFIG,
    searchRadius: 5,
    maxResults: 10,
    includeUnavailable: true,
  },
  staging: {
    ...DEFAULT_SEARCH_CONFIG,
    searchRadius: 8,
    maxResults: 15,
  },
  production: {
    ...DEFAULT_SEARCH_CONFIG,
    searchRadius: 10,
    maxResults: 20,
  },
};

export const ENVIRONMENT_CONFIG: SearchEnvironmentConfig = {
  apiBaseUrl: process.env.API_BASE_URL || "http://localhost:3000",
  searchTimeout: 10000,
  retryAttempts: 3,
  enableAnalytics: true,
  enableCaching: true,
  cacheTimeout: 300000, // 5 minutos
};

// ===== CONFIGURACIONES REGIONALES =====
export const REGIONAL_CONFIGS: Record<string, RegionalSearchConfig> = {
  mx: {
    ...DEFAULT_SEARCH_CONFIG,
    region: "Mexico",
    currency: "MXN",
    timezone: "America/Mexico_City",
    businessHours: {
      start: "06:00",
      end: "22:00",
      timezone: "America/Mexico_City",
    },
  },
  us: {
    ...DEFAULT_SEARCH_CONFIG,
    region: "United States",
    currency: "USD",
    timezone: "America/New_York",
    businessHours: {
      start: "06:00",
      end: "22:00",
      timezone: "America/New_York",
    },
  },
};





