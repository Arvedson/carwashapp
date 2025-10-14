import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import {
  DatePickerVariant,
  DatePickerSize,
  DatePickerDisplayMode,
} from "./DatePicker.types";

export const createDatePickerStyles = (
  theme: Theme,
  variant: DatePickerVariant,
  size: DatePickerSize,
  displayMode: DatePickerDisplayMode,
  error: boolean,
  disabled: boolean
) => {
  const { colors, spacing, borders, typography, shadows } = theme;
  const componentSize = theme.components.datePicker.sizes[size];

  // Mapeo de tamaños
  const sizeMap = {
    small: {
      inputHeight: componentSize.minHeight,
      fontSize: typography.fontSize.sm,
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      calendarHeight: componentSize.calendarHeight,
      cellSize: componentSize.cellSize,
      headerHeight: componentSize.headerHeight,
      weekHeight: componentSize.weekHeight,
      navigationButtonSize: componentSize.navigationButtonSize,
      navigationIconSize: componentSize.navigationIconSize,
    },
    medium: {
      inputHeight: componentSize.minHeight,
      fontSize: typography.fontSize.md,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      calendarHeight: componentSize.calendarHeight,
      cellSize: componentSize.cellSize,
      headerHeight: componentSize.headerHeight,
      weekHeight: componentSize.weekHeight,
      navigationButtonSize: componentSize.navigationButtonSize,
      navigationIconSize: componentSize.navigationIconSize,
    },
    large: {
      inputHeight: componentSize.minHeight,
      fontSize: typography.fontSize.lg,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      calendarHeight: componentSize.calendarHeight,
      cellSize: componentSize.cellSize,
      headerHeight: componentSize.headerHeight,
      weekHeight: componentSize.weekHeight,
      navigationButtonSize: componentSize.navigationButtonSize,
      navigationIconSize: componentSize.navigationIconSize,
    },
  };

  const sizeStyles = sizeMap[size];

  // Mapeo de variantes
  const variantMap = {
    default: {
      backgroundColor: colors.surface,
      borderWidth: borders.width.thin,
      borderColor: error ? colors.error : colors.border,
      borderRadius: borders.radius.md,
    },
    outlined: {
      backgroundColor: "transparent",
      borderWidth: borders.width.thin,
      borderColor: error ? colors.error : colors.border,
      borderRadius: borders.radius.md,
    },
    filled: {
      backgroundColor: colors.background,
      borderWidth: 0,
      borderRadius: borders.radius.md,
    },
    underlined: {
      backgroundColor: "transparent",
      borderWidth: 0,
      borderBottomWidth: borders.width.thin,
      borderBottomColor: error ? colors.error : colors.border,
      borderRadius: 0,
    },
  };

  const variantStyles = variantMap[variant];

  return StyleSheet.create({
    // Container principal
    container: {
      marginBottom: spacing.lg,
    },

    // Label
    label: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
      marginBottom: spacing.xs,
    },

    // Input principal (colapsado)
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: sizeStyles.inputHeight,
      paddingHorizontal: sizeStyles.paddingHorizontal,
      paddingVertical: sizeStyles.paddingVertical,
      ...variantStyles,
      ...(disabled && {
        backgroundColor: colors.disabled,
        opacity: 0.6,
      }),
    },

    inputText: {
      fontSize: sizeStyles.fontSize,
      color: disabled ? colors.text.disabled : colors.text.primary,
      flex: 1,
    },

    placeholderText: {
      fontSize: sizeStyles.fontSize,
      color: colors.text.secondary,
      flex: 1,
    },

    inputIcon: {
      marginLeft: spacing.sm,
    },

    // Calendario expandido
    calendarContainer: {
      marginTop: spacing.sm,
      backgroundColor: colors.calendarBackground,
      borderRadius: borders.radius.lg,
      borderWidth: borders.width.thin,
      borderColor: colors.calendarBorder,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      overflow: "hidden",
    },

    // Header del calendario
    calendarHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: sizeStyles.headerHeight,
      paddingHorizontal: spacing.md,
      backgroundColor: colors.calendarHeader,
      borderBottomWidth: borders.width.thin,
      borderBottomColor: colors.calendarBorder,
    },

    headerButton: {
      width: sizeStyles.navigationButtonSize,
      height: sizeStyles.navigationButtonSize,
      borderRadius: borders.radius.sm,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },

    headerButtonPressed: {
      backgroundColor: colors.hover,
    },

    headerTitle: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      color: colors.calendarText,
      textAlign: "center",
    },

    // Días de la semana
    weekHeader: {
      flexDirection: "row",
      height: sizeStyles.weekHeight,
      backgroundColor: colors.calendarHeader,
      borderBottomWidth: borders.width.thin,
      borderBottomColor: colors.calendarBorder,
    },

    weekDay: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    weekDayText: {
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.medium,
      color: colors.calendarText,
    },

    // Grid del calendario
    calendarGrid: {
      padding: spacing.sm,
    },

    calendarRow: {
      flexDirection: "row",
      marginBottom: spacing.xs,
    },

    // Celda del calendario
    calendarCell: {
      width: sizeStyles.cellSize,
      height: sizeStyles.cellSize,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 1,
      borderRadius: borders.radius.sm,
    },

    calendarCellSelected: {
      backgroundColor: colors.calendarCellSelected,
    },

    calendarCellToday: {
      backgroundColor: colors.calendarCellToday,
      borderWidth: borders.width.thin,
      borderColor: colors.primary,
    },

    calendarCellDisabled: {
      backgroundColor: colors.calendarCellDisabled,
    },

    calendarCellInRange: {
      backgroundColor: colors.primaryLight,
    },

    calendarCellRangeStart: {
      backgroundColor: colors.calendarCellSelected,
      borderTopLeftRadius: borders.radius.sm,
      borderBottomLeftRadius: borders.radius.sm,
    },

    calendarCellRangeEnd: {
      backgroundColor: colors.calendarCellSelected,
      borderTopRightRadius: borders.radius.sm,
      borderBottomRightRadius: borders.radius.sm,
    },

    calendarCellText: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.calendarText,
    },

    calendarCellTextSelected: {
      color: colors.calendarTextSelected,
      fontWeight: typography.fontWeight.semibold,
    },

    calendarCellTextDisabled: {
      color: colors.calendarTextDisabled,
    },

    // Botones de acción
    actionButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: spacing.md,
      backgroundColor: colors.calendarHeader,
      borderTopWidth: borders.width.thin,
      borderTopColor: colors.calendarBorder,
    },

    actionButton: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borders.radius.sm,
      backgroundColor: "transparent",
    },

    actionButtonPrimary: {
      backgroundColor: colors.primary,
    },

    actionButtonText: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.calendarText,
    },

    actionButtonTextPrimary: {
      color: colors.surface,
    },

    // Texto de error
    errorText: {
      fontSize: typography.fontSize.xs,
      color: colors.error,
      marginTop: spacing.xs,
    },

    // Animaciones
    calendarExpanded: {
      height: sizeStyles.calendarHeight,
      opacity: 1,
    },

    calendarCollapsed: {
      height: 0,
      opacity: 0,
    },

    // Overlay para mobile
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.mapOverlay,
      zIndex: 1000,
    },

    // Modal para mobile
    modal: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.surface,
      borderTopLeftRadius: borders.radius.xl,
      borderTopRightRadius: borders.radius.xl,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 8,
      zIndex: 1001,
    },

    modalHandle: {
      width: 40,
      height: 4,
      backgroundColor: colors.border,
      borderRadius: 2,
      alignSelf: "center",
      marginTop: spacing.sm,
      marginBottom: spacing.md,
    },
  });
};
