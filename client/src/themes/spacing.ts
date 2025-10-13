import { ThemeSpacing } from "./types";

export const spacing: ThemeSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  xxxxl: 96,
};

// Spacing presets for common use cases
export const spacingPresets = {
  // Padding presets
  padding: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
    xxl: spacing.xxl,
  },

  // Margin presets
  margin: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
    xxl: spacing.xxl,
  },

  // Gap presets (for flexbox)
  gap: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
  },

  // Container padding
  container: {
    horizontal: spacing.lg,
    vertical: spacing.md,
    full: spacing.lg,
  },

  // Card padding
  card: {
    padding: spacing.md,
    margin: spacing.sm,
  },

  // Button padding
  button: {
    small: {
      horizontal: spacing.sm,
      vertical: spacing.xs,
    },
    medium: {
      horizontal: spacing.md,
      vertical: spacing.sm,
    },
    large: {
      horizontal: spacing.lg,
      vertical: spacing.md,
    },
  },

  // Input padding
  input: {
    horizontal: spacing.md,
    vertical: spacing.sm,
  },

  // List item spacing
  listItem: {
    padding: spacing.md,
    margin: spacing.xs,
  },

  // Map spacing presets
  map: {
    height: {
      small: 200,
      medium: 300,
      large: 400,
    },
    padding: {
      container: spacing.md,
      section: spacing.lg,
    },
    margin: {
      section: spacing.md,
    },
  },
} as const;
