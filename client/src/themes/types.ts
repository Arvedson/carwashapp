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

  // Map specific colors
  mapBackground: string;
  mapBorder: string;
  mapMarker: string;
  mapLocationPin: string;
  mapRoute: string;
  mapOverlay: string;

  // Calendar specific colors
  calendarBackground: string;
  calendarHeader: string;
  calendarCell: string;
  calendarCellSelected: string;
  calendarCellToday: string;
  calendarCellDisabled: string;
  calendarText: string;
  calendarTextSelected: string;
  calendarTextDisabled: string;
  calendarBorder: string;
  calendarNavigation: string;
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

export interface ThemeOpacity {
  light: number;
  medium: number;
  heavy: number;
  disabled: number;
  overlay: number;
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

export interface MapComponentSize extends ComponentSize {
  borderRadius: number;
}

export interface LocationButtonComponentSize extends ComponentSize {
  iconSize: number;
}

export interface DatePickerComponentSize extends ComponentSize {
  calendarHeight: number;
  cellSize: number;
  headerHeight: number;
  weekHeight: number;
  navigationButtonSize: number;
  navigationIconSize: number;
}

export interface ServiceTimeComponentSize extends ComponentSize {
  slotHeight: number;
  maxListHeight: number;
  buttonAreaHeight: number;
}

export interface ServiceTimeConfig {
  defaultStartHour: number;
  defaultEndHour: number;
  defaultInterval: number;
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
  map: {
    sizes: {
      small: MapComponentSize;
      medium: MapComponentSize;
      large: MapComponentSize;
    };
  };
  locationButton: {
    sizes: {
      small: LocationButtonComponentSize;
      medium: LocationButtonComponentSize;
      large: LocationButtonComponentSize;
    };
  };
  datePicker: {
    sizes: {
      small: DatePickerComponentSize;
      medium: DatePickerComponentSize;
      large: DatePickerComponentSize;
    };
  };
  serviceTime: {
    sizes: {
      small: ServiceTimeComponentSize;
      medium: ServiceTimeComponentSize;
      large: ServiceTimeComponentSize;
    };
    config: ServiceTimeConfig;
  };
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  shadows: ThemeShadows;
  borders: ThemeBorders;
  opacity: ThemeOpacity;
  components: ThemeComponents;
  isDark: boolean;
}

export type ThemeMode = "light" | "dark" | "auto";
