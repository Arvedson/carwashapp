export interface ThemeColors {
  // Brand colors
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;

  // Semantic colors
  success: string;
  successDark: string;
  warning: string;
  warningDark: string;
  error: string;
  errorDark: string;
  info: string;
  infoDark: string;

  // Neutral colors
  background: string;
  surface: string;
  surfaceVariant: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    inverse: string;
  };
  border: string;
  divider: string;

  // Car wash specific colors
  water: string;
  soap: string;
  wax: string;
  foam: string;
  shine: string;

  // Interactive states
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
}

export interface ThemeTypography {
  fontFamily: {
    regular: string;
    medium: string;
    bold: string;
    light: string;
  };
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
    display: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  fontWeight: {
    light: "300";
    regular: "400";
    medium: "500";
    semibold: "600";
    bold: "700";
    extrabold: "800";
  };
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  xxxxl: number;
}

export interface ThemeShadows {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  inner: string;
}

export interface ThemeBorders {
  radius: {
    none: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    full: number;
  };
  width: {
    none: number;
    thin: number;
    medium: number;
    thick: number;
  };
}

export interface ComponentSize {
  width?: number;
  height?: number;
  minHeight?: number;
  thumbSize?: number;
  padding?: number;
  size?: number;
  strokeWidth?: number;
}

export interface ThemeComponents {
  switch: {
    sizes: {
      small: ComponentSize;
      medium: ComponentSize;
      large: ComponentSize;
    };
  };
  avatar: {
    sizes: {
      xs: ComponentSize;
      sm: ComponentSize;
      md: ComponentSize;
      lg: ComponentSize;
      xl: ComponentSize;
      xxl: ComponentSize;
    };
  };
  progress: {
    linear: {
      sizes: {
        small: ComponentSize;
        medium: ComponentSize;
        large: ComponentSize;
      };
    };
    circular: {
      sizes: {
        small: ComponentSize;
        medium: ComponentSize;
        large: ComponentSize;
      };
    };
  };
  badge: {
    sizes: {
      small: ComponentSize;
      medium: ComponentSize;
      large: ComponentSize;
    };
  };
  icon: {
    sizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  };
  button: {
    sizes: {
      small: ComponentSize;
      medium: ComponentSize;
      large: ComponentSize;
    };
  };
  textInput: {
    sizes: {
      small: ComponentSize;
      medium: ComponentSize;
      large: ComponentSize;
    };
  };
  themeToggle: {
    sizes: {
      small: ComponentSize;
      medium: ComponentSize;
      large: ComponentSize;
    };
  };
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  shadows: ThemeShadows;
  borders: ThemeBorders;
  components: ThemeComponents;
  isDark: boolean;
}

export type ThemeMode = "light" | "dark" | "auto";
