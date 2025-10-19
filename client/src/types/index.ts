export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
}

// Domain Types
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  popular: boolean;
}

export interface Booking {
  id: string;
  service: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
  price: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
  address?: string;
  city?: string;
  state?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  memberSince: string;
  avatar?: string;
}

export interface UserStats {
  completedWashes: number;
  totalSpent: number;
}

// Smart Hub Types
export * from "./smartHub";

// Search Types
export * from "./search";
export * from "./validation";
export * from "./config";
export * from "./analytics";
