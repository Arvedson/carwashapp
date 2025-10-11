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
