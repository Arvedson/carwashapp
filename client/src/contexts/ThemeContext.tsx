import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme, ThemeMode } from "@/themes";
import { lightTheme, darkTheme } from "@/themes";

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "theme_mode";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme from storage
  useEffect(() => {
    const initializeTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme && ["light", "dark", "auto"].includes(savedTheme)) {
          setThemeModeState(savedTheme as ThemeMode);
        }
      } catch (error) {
        console.error("Error loading theme from storage:", error);
      } finally {
        setIsInitialized(true);
      }
    };

    initializeTheme();
  }, []);

  // Save theme to storage
  const setThemeMode = async (mode: ThemeMode) => {
    try {
      setThemeModeState(mode);
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      console.error("Error saving theme to storage:", error);
    }
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
  };

  // Determine current theme
  const getCurrentTheme = (): Theme => {
    if (themeMode === "dark") {
      return darkTheme;
    }
    if (themeMode === "light") {
      return lightTheme;
    }

    // Auto mode - you can implement system preference detection here
    // For now, default to light theme
    return lightTheme;
  };

  const theme = getCurrentTheme();
  const isDark = theme.isDark;

  // Don't render until theme is initialized
  if (!isInitialized) {
    return null;
  }

  const value: ThemeContextType = {
    theme,
    themeMode,
    setThemeMode,
    toggleTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Convenience hook for just the theme object
export const useThemeColors = () => {
  const { theme } = useTheme();
  return theme.colors;
};

export const useThemeTypography = () => {
  const { theme } = useTheme();
  return theme.typography;
};

export const useThemeSpacing = () => {
  const { theme } = useTheme();
  return theme.spacing;
};

export const useThemeShadows = () => {
  const { theme } = useTheme();
  return theme.shadows;
};

export const useThemeBorders = () => {
  const { theme } = useTheme();
  return theme.borders;
};
