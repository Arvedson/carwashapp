import {
  ThemeComponents,
  MapComponentSize,
  LocationButtonComponentSize,
  DatePickerComponentSize,
  ServiceTimeComponentSize,
  ServiceTimeConfig,
} from "./types";

export const componentTokens: ThemeComponents = {
  // Switch component tokens
  switch: {
    sizes: {
      small: {
        width: 40,
        height: 24,
        thumbSize: 20,
        padding: 2,
      },
      medium: {
        width: 50,
        height: 30,
        thumbSize: 26,
        padding: 2,
      },
      large: {
        width: 60,
        height: 36,
        thumbSize: 32,
        padding: 2,
      },
    },
  },

  // Avatar component tokens
  avatar: {
    sizes: {
      xs: {
        width: 24,
        height: 24,
      },
      sm: {
        width: 32,
        height: 32,
      },
      md: {
        width: 40,
        height: 40,
      },
      lg: {
        width: 56,
        height: 56,
      },
      xl: {
        width: 72,
        height: 72,
      },
      xxl: {
        width: 96,
        height: 96,
      },
    },
  },

  // Progress component tokens
  progress: {
    linear: {
      sizes: {
        small: {
          height: 4,
        },
        medium: {
          height: 6,
        },
        large: {
          height: 8,
        },
      },
    },
    circular: {
      sizes: {
        small: {
          size: 40,
          strokeWidth: 3,
        },
        medium: {
          size: 60,
          strokeWidth: 4,
        },
        large: {
          size: 80,
          strokeWidth: 5,
        },
      },
    },
  },

  // Badge component tokens
  badge: {
    sizes: {
      small: {
        minHeight: 20,
      },
      medium: {
        minHeight: 24,
      },
      large: {
        minHeight: 32,
      },
    },
  },

  // Icon component tokens
  icon: {
    sizes: {
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
      xxl: 40,
    },
  },

  // Button component tokens
  button: {
    sizes: {
      small: {
        minHeight: 32,
      },
      medium: {
        minHeight: 44,
      },
      large: {
        minHeight: 56,
      },
    },
  },

  // TextInput component tokens
  textInput: {
    sizes: {
      small: {
        minHeight: 36,
      },
      medium: {
        minHeight: 44,
      },
      large: {
        minHeight: 52,
      },
    },
  },

  // ThemeToggle component tokens
  themeToggle: {
    sizes: {
      small: {
        minHeight: 32,
      },
      medium: {
        minHeight: 44,
      },
      large: {
        minHeight: 56,
      },
    },
  },

  // Map component tokens
  map: {
    sizes: {
      small: {
        height: 200,
        borderRadius: 8,
      } as MapComponentSize,
      medium: {
        height: 300,
        borderRadius: 12,
      } as MapComponentSize,
      large: {
        height: 400,
        borderRadius: 12,
      } as MapComponentSize,
    },
  },

  // Location button component tokens
  locationButton: {
    sizes: {
      small: {
        minHeight: 32,
        iconSize: 16,
      } as LocationButtonComponentSize,
      medium: {
        minHeight: 44,
        iconSize: 20,
      } as LocationButtonComponentSize,
      large: {
        minHeight: 56,
        iconSize: 24,
      } as LocationButtonComponentSize,
    },
  },

  // DatePicker component tokens
  datePicker: {
    sizes: {
      small: {
        minHeight: 36,
        calendarHeight: 280,
        cellSize: 32,
        headerHeight: 40,
        weekHeight: 28,
        navigationButtonSize: 32,
        navigationIconSize: 16,
      } as DatePickerComponentSize,
      medium: {
        minHeight: 44,
        calendarHeight: 320,
        cellSize: 36,
        headerHeight: 44,
        weekHeight: 32,
        navigationButtonSize: 36,
        navigationIconSize: 18,
      } as DatePickerComponentSize,
      large: {
        minHeight: 52,
        calendarHeight: 360,
        cellSize: 40,
        headerHeight: 48,
        weekHeight: 36,
        navigationButtonSize: 40,
        navigationIconSize: 20,
      } as DatePickerComponentSize,
    },
  },

  // ServiceTime component tokens
  serviceTime: {
    sizes: {
      small: {
        minHeight: 40,
        slotHeight: 40,
        maxListHeight: 160,
        buttonAreaHeight: 48,
      } as ServiceTimeComponentSize,
      medium: {
        minHeight: 48,
        slotHeight: 50,
        maxListHeight: 200,
        buttonAreaHeight: 60,
      } as ServiceTimeComponentSize,
      large: {
        minHeight: 56,
        slotHeight: 60,
        maxListHeight: 240,
        buttonAreaHeight: 72,
      } as ServiceTimeComponentSize,
    },
    config: {
      defaultStartHour: 6,
      defaultEndHour: 22,
      defaultInterval: 30,
    } as ServiceTimeConfig,
  },
};
