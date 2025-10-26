export const CONFIG = {
  APP_NAME: "CarWashApp",
  API_URL: process.env.EXPO_PUBLIC_API_URL || "http://192.168.1.74:3000/api",
  VERSION: "1.0.0",
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
  THEME_MODE: "theme_mode",
} as const;
