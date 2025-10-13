import { ThemeBorders } from "./types";

export const borders: ThemeBorders = {
  radius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
    full: 9999,
  },
  width: {
    none: 0,
    thin: 1,
    medium: 2,
    thick: 4,
  },
};

// Border presets for common use cases
export const borderPresets = {
  // Button borders
  button: {
    radius: borders.radius.md,
    width: borders.width.none,
  },
  buttonOutlined: {
    radius: borders.radius.md,
    width: borders.width.thin,
  },

  // Card borders
  card: {
    radius: borders.radius.lg,
    width: borders.width.none,
  },
  cardOutlined: {
    radius: borders.radius.lg,
    width: borders.width.thin,
  },

  // Input borders
  input: {
    radius: borders.radius.md,
    width: borders.width.thin,
  },
  inputFocused: {
    radius: borders.radius.md,
    width: borders.width.medium,
  },

  // Modal borders
  modal: {
    radius: borders.radius.xl,
    width: borders.width.none,
  },

  // Badge borders
  badge: {
    radius: borders.radius.full,
    width: borders.width.none,
  },

  // Avatar borders
  avatar: {
    radius: borders.radius.full,
    width: borders.width.thin,
  },

  // Image borders
  image: {
    radius: borders.radius.md,
    width: borders.width.none,
  },

  // Divider
  divider: {
    radius: borders.radius.none,
    width: borders.width.thin,
  },

  // Map specific borders
  map: {
    container: {
      radius: borders.radius.lg,
      width: borders.width.none,
    },
    section: {
      radius: borders.radius.lg,
      width: borders.width.none,
    },
    button: {
      radius: borders.radius.md,
      width: borders.width.none,
    },
  },
} as const;
