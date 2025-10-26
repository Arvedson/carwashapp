import api from "./api";
import {
  AuthResponse,
  RegisterData,
  LoginCredentials,
  AuthUser,
  User,
} from "@/types/auth";

/**
 * Servicio de autenticación
 * Maneja la comunicación con el backend para autenticación
 */
class AuthService {
  /**
   * Convierte AuthUser del backend a User del frontend
   */
  private mapAuthUserToUser(authUser: AuthUser): User {
    return {
      id: authUser.id,
      email: authUser.email,
      name: authUser.name,
      phone: authUser.phone,
    };
  }

  /**
   * Registro de usuario
   */
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      console.log("📤 Enviando datos de registro:", data);
      console.log("📤 URL de la API:", `${api.defaults.baseURL}/auth/register`);

      const response = await api.post("/auth/register", data);

      console.log("📥 Respuesta completa del servidor:", response);
      console.log("📥 Status:", response.status);
      console.log("📥 Headers:", response.headers);
      console.log("📥 Data:", response.data);

      return response.data;
    } catch (error: any) {
      console.error("❌ Register API error:", error);
      console.error("❌ Error message:", error.message);
      console.error("❌ Error response:", error.response?.data);
      console.error("❌ Error status:", error.response?.status);
      console.error("❌ Error headers:", error.response?.headers);
      throw error;
    }
  }

  /**
   * Login de usuario
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    } catch (error: any) {
      console.error("Login API error:", error);
      throw error;
    }
  }

  /**
   * Obtener perfil del usuario
   */
  async getProfile(): Promise<AuthUser> {
    try {
      const response = await api.get("/auth/profile");
      return response.data.data;
    } catch (error: any) {
      console.error("Get profile API error:", error);
      throw error;
    }
  }

  /**
   * Actualizar perfil del usuario
   */
  async updateProfile(data: Partial<RegisterData>): Promise<AuthUser> {
    try {
      const response = await api.put("/auth/profile", data);
      return response.data.data;
    } catch (error: any) {
      console.error("Update profile API error:", error);
      throw error;
    }
  }

  /**
   * Logout
   */
  async logout(): Promise<void> {
    try {
      await api.post("/auth/logout");
    } catch (error: any) {
      console.error("Logout API error:", error);
      // No lanzar error en logout, solo log
    }
  }

  /**
   * Verificar disponibilidad de email
   */
  async checkEmailAvailability(email: string): Promise<boolean> {
    try {
      const response = await api.post("/auth/check-email", { email });
      return response.data.data.available;
    } catch (error: any) {
      console.error("Check email API error:", error);
      throw error;
    }
  }

  /**
   * Verificar token
   */
  async verifyToken(): Promise<boolean> {
    try {
      const response = await api.get("/auth/verify-token");
      return response.data.success;
    } catch (error: any) {
      console.error("Verify token API error:", error);
      return false;
    }
  }
}

// Exportar instancia singleton
export const authService = new AuthService();
