import { ThemeOpacity } from "./types";

export const opacity: ThemeOpacity = {
  light: 0.1,
  medium: 0.3,
  heavy: 0.6,
  disabled: 0.5,
  overlay: 0.8,
};

// Opacity presets for common use cases
export const opacityPresets = {
  // Background overlays
  background: {
    light: opacity.light,
    medium: opacity.medium,
    heavy: opacity.heavy,
  },

  // Interactive states
  interactive: {
    hover: opacity.light,
    pressed: opacity.medium,
    disabled: opacity.disabled,
  },

  // Error states
  error: {
    background: opacity.light,
    border: opacity.medium,
  },

  // Success states
  success: {
    background: opacity.light,
    border: opacity.medium,
  },

  // Overlay states
  overlay: {
    modal: opacity.overlay,
    dropdown: opacity.medium,
    tooltip: opacity.heavy,
  },
} as const;
