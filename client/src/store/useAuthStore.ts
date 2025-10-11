import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthState, User, LoginCredentials } from "@/types";
import { STORAGE_KEYS } from "@/constants/config";

interface AuthStore extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => Promise<void>;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  token: null,
  user: null,
  isAuthenticated: false,

  login: async (credentials: LoginCredentials) => {
    try {
      // Dummy login logic - replace with actual API call
      if (
        credentials.email === "test@example.com" &&
        credentials.password === "password"
      ) {
        const dummyToken = "dummy-jwt-token-123";
        const dummyUser: User = {
          id: "1",
          email: credentials.email,
          name: "Test User",
          phone: "+1234567890",
        };

        // Store in AsyncStorage
        await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, dummyToken);
        await AsyncStorage.setItem(
          STORAGE_KEYS.USER_DATA,
          JSON.stringify(dummyUser)
        );

        // Update store
        set({
          token: dummyToken,
          user: dummyUser,
          isAuthenticated: true,
        });

        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA);

      set({
        token: null,
        user: null,
        isAuthenticated: false,
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  },

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
      }
    } catch (error) {
      console.error("Auth initialization error:", error);
    }
  },
}));
