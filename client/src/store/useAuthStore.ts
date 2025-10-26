import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AuthState,
  User,
  LoginCredentials,
  RegisterData,
  AuthUser,
} from "@/types";
import { STORAGE_KEYS } from "@/constants/config";
import { authService } from "@/services/authService";

interface AuthStore extends AuthState {
  // Métodos de autenticación
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<boolean>;
  updateProfile: (data: Partial<RegisterData>) => Promise<boolean>;
  checkEmailAvailability: (email: string) => Promise<boolean>;
  verifyToken: () => Promise<boolean>;

  // Métodos de utilidad
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  token: null,
  user: null,
  isAuthenticated: false,

  /**
   * Login de usuario
   */
  login: async (credentials: LoginCredentials) => {
    try {
      console.log("🔐 Attempting login...");

      const response = await authService.login(credentials);

      if (response.success) {
        const { user: authUser, token } = response.data;

        // Convertir AuthUser a User para compatibilidad
        const user: User = {
          id: authUser.id,
          email: authUser.email,
          name: authUser.name,
          phone: authUser.phone,
        };

        // Store in AsyncStorage
        await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
        await AsyncStorage.setItem(
          STORAGE_KEYS.USER_DATA,
          JSON.stringify(user)
        );

        // Update store
        set({
          token,
          user,
          isAuthenticated: true,
        });

        console.log("✅ Login successful");
        return true;
      }

      console.log("❌ Login failed: Invalid response");
      return false;
    } catch (error) {
      console.error("❌ Login error:", error);
      return false;
    }
  },

  /**
   * Registro de usuario
   */
  register: async (data: RegisterData) => {
    try {
      console.log("🔐 Attempting register...");
      console.log("🔐 Data being sent:", data);

      const response = await authService.register(data);
      console.log("🔐 Response received:", response);

      if (response.success) {
        console.log("🔐 Response is successful, processing...");
        const { user: authUser, token } = response.data;
        console.log("🔐 AuthUser:", authUser);
        console.log("🔐 Token:", token);

        // Convertir AuthUser a User para compatibilidad
        const user: User = {
          id: authUser.id,
          email: authUser.email,
          name: authUser.name,
          phone: authUser.phone,
        };

        console.log("🔐 Converted user:", user);

        // Store in AsyncStorage
        await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
        await AsyncStorage.setItem(
          STORAGE_KEYS.USER_DATA,
          JSON.stringify(user)
        );

        // Update store
        set({
          token,
          user,
          isAuthenticated: true,
        });

        console.log("✅ Registration successful");
        return true;
      }

      console.log("❌ Registration failed: Invalid response");
      console.log("❌ Response success:", response.success);
      console.log("❌ Response message:", response.message);
      return false;
    } catch (error) {
      console.error("❌ Registration error:", error);
      console.error("❌ Error type:", typeof error);
      console.error("❌ Error details:", error);
      return false;
    }
  },

  /**
   * Logout
   */
  logout: async () => {
    try {
      console.log("🔐 Logging out...");

      // Llamar al servicio de logout
      await authService.logout();

      // Limpiar storage local
      await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA);

      // Update store
      set({
        token: null,
        user: null,
        isAuthenticated: false,
      });

      console.log("✅ Logout successful");
    } catch (error) {
      console.error("❌ Logout error:", error);
    }
  },

  /**
   * Actualizar perfil
   */
  updateProfile: async (data: Partial<RegisterData>) => {
    try {
      console.log("🔐 Updating profile...");

      const authUser = await authService.updateProfile(data);

      // Convertir AuthUser a User para compatibilidad
      const user: User = {
        id: authUser.id,
        email: authUser.email,
        name: authUser.name,
        phone: authUser.phone,
      };

      // Actualizar storage local
      await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));

      // Update store
      set({ user });

      console.log("✅ Profile updated successfully");
      return true;
    } catch (error) {
      console.error("❌ Update profile error:", error);
      return false;
    }
  },

  /**
   * Verificar disponibilidad de email
   */
  checkEmailAvailability: async (email: string) => {
    try {
      return await authService.checkEmailAvailability(email);
    } catch (error) {
      console.error("❌ Check email availability error:", error);
      // Si hay error de red, asumir que el email está disponible para permitir el registro
      return true;
    }
  },

  /**
   * Verificar token
   */
  verifyToken: async () => {
    try {
      return await authService.verifyToken();
    } catch (error) {
      console.error("❌ Verify token error:", error);
      return false;
    }
  },

  /**
   * Métodos de utilidad
   */
  setUser: (user: User) => {
    set({ user });
  },

  setToken: (token: string) => {
    set({ token, isAuthenticated: true });
  },

  initializeAuth: async () => {
    try {
      const [token, userData] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN),
        AsyncStorage.getItem(STORAGE_KEYS.USER_DATA),
      ]);

      if (token && userData) {
        const user = JSON.parse(userData);
        set({
          token,
          user,
          isAuthenticated: true,
        });
        console.log("✅ Auth initialized from storage");
      }
    } catch (error) {
      console.error("❌ Auth initialization error:", error);
    }
  },
}));
