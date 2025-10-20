import { SearchRequest } from "./search";

// ===== EVENTOS DE BÚSQUEDA =====
export interface SearchAnalyticsEvent {
  eventType:
    | "search_initiated"
    | "search_completed"
    | "search_failed"
    | "search_cancelled";
  timestamp: string;
  userId?: string;
  searchData: Partial<SearchRequest>;
  metadata: {
    sessionId: string;
    deviceType: "mobile" | "tablet" | "desktop";
    appVersion: string;
  };
}

// ===== MÉTRICAS DE BÚSQUEDA =====
export interface SearchMetrics {
  searchCount: number;
  averageSearchTime: number;
  successRate: number;
  mostSearchedVehicles: { vehicle: string; count: number }[];
  mostSearchedLocations: { location: string; count: number }[];
  searchAbandonmentRate: number;
}

// ===== EVENTOS ESPECÍFICOS =====
export interface SearchInitiatedEvent extends SearchAnalyticsEvent {
  eventType: "search_initiated";
  searchData: SearchRequest;
  triggerSource: "button_click" | "auto_search" | "retry";
}

export interface SearchCompletedEvent extends SearchAnalyticsEvent {
  eventType: "search_completed";
  results: {
    totalResults: number;
    searchTime: number;
    washersFound: number;
  };
}

export interface SearchFailedEvent extends SearchAnalyticsEvent {
  eventType: "search_failed";
  error: {
    code: string;
    message: string;
    retryable: boolean;
  };
}

export interface SearchCancelledEvent extends SearchAnalyticsEvent {
  eventType: "search_cancelled";
  reason: "user_cancelled" | "timeout" | "network_error";
  searchDuration: number;
}

// ===== CONFIGURACIÓN DE ANALYTICS =====
export interface AnalyticsConfig {
  enabled: boolean;
  trackingId?: string;
  endpoint: string;
  batchSize: number;
  flushInterval: number;
  debugMode: boolean;
}

// ===== SERVICIO DE ANALYTICS =====
export interface AnalyticsService {
  trackEvent: (event: SearchAnalyticsEvent) => void;
  trackSearchInitiated: (event: SearchInitiatedEvent) => void;
  trackSearchCompleted: (event: SearchCompletedEvent) => void;
  trackSearchFailed: (event: SearchFailedEvent) => void;
  trackSearchCancelled: (event: SearchCancelledEvent) => void;
  getMetrics: () => Promise<SearchMetrics>;
  flush: () => Promise<void>;
}

// ===== CONFIGURACIÓN POR DEFECTO =====
export const DEFAULT_ANALYTICS_CONFIG: AnalyticsConfig = {
  enabled: process.env.NODE_ENV === "production",
  endpoint: "/api/analytics",
  batchSize: 10,
  flushInterval: 30000, // 30 segundos
  debugMode: process.env.NODE_ENV === "development",
};




