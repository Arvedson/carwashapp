import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { DatePicker } from "./DatePicker";
import { Text } from "@/components/atoms/Text";
import { Card } from "@/components/molecules/Card";

export const DatePickerExample: React.FC = () => {
  const [singleDate, setSingleDate] = useState<Date | null>(null);
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);
  const [dateRange, setDateRange] = useState<Date[] | null>(null);

  // Handlers para los DatePickers
  const handleSingleDateChange = (date: Date | Date[] | null) => {
    if (date instanceof Date) {
      setSingleDate(date);
    } else if (Array.isArray(date)) {
      setSingleDate(date[0] || null);
    } else {
      setSingleDate(null);
    }
  };

  const handleMultipleDatesChange = (date: Date | Date[] | null) => {
    if (Array.isArray(date)) {
      setMultipleDates(date);
    } else {
      setMultipleDates([]);
    }
  };

  const handleDateRangeChange = (date: Date | Date[] | null) => {
    if (Array.isArray(date)) {
      setDateRange(date);
    } else {
      setDateRange(null);
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text variant="heading" size="xxl" style={{ marginBottom: 24 }}>
        DatePicker Examples
      </Text>

      {/* Single Date Selection */}
      <Card variant="elevated" size="medium" style={{ marginBottom: 24 }}>
        <Text variant="heading" size="lg" style={{ marginBottom: 16 }}>
          Single Date Selection
        </Text>
        <DatePicker
          variant="default"
          size="medium"
          mode="single"
          label="Seleccionar fecha"
          placeholder="Elige una fecha"
          value={singleDate}
          onChange={handleSingleDateChange}
          showTodayButton
          showClearButton
        />
        {singleDate && (
          <Text variant="caption" style={{ marginTop: 8 }}>
            Fecha seleccionada: {singleDate.toLocaleDateString("es-ES")}
          </Text>
        )}
      </Card>

      {/* Multiple Date Selection */}
      <Card variant="elevated" size="medium" style={{ marginBottom: 24 }}>
        <Text variant="heading" size="lg" style={{ marginBottom: 16 }}>
          Multiple Date Selection
        </Text>
        <DatePicker
          variant="outlined"
          size="medium"
          mode="multiple"
          label="Seleccionar múltiples fechas"
          placeholder="Elige varias fechas"
          value={multipleDates}
          onChange={handleMultipleDatesChange}
          showTodayButton
          showClearButton
        />
        {multipleDates.length > 0 && (
          <Text variant="caption" style={{ marginTop: 8 }}>
            {multipleDates.length} fecha(s) seleccionada(s)
          </Text>
        )}
      </Card>

      {/* Date Range Selection */}
      <Card variant="elevated" size="medium" style={{ marginBottom: 24 }}>
        <Text variant="heading" size="lg" style={{ marginBottom: 16 }}>
          Date Range Selection
        </Text>
        <DatePicker
          variant="filled"
          size="medium"
          mode="range"
          label="Seleccionar rango de fechas"
          placeholder="Elige un rango"
          value={dateRange}
          onChange={handleDateRangeChange}
          showTodayButton
          showClearButton
        />
        {dateRange && dateRange.length === 2 && (
          <Text variant="caption" style={{ marginTop: 8 }}>
            Rango: {dateRange[0]?.toLocaleDateString("es-ES")} -{" "}
            {dateRange[1]?.toLocaleDateString("es-ES")}
          </Text>
        )}
      </Card>

      {/* Different Sizes */}
      <Card variant="elevated" size="medium" style={{ marginBottom: 24 }}>
        <Text variant="heading" size="lg" style={{ marginBottom: 16 }}>
          Different Sizes
        </Text>

        <View style={{ marginBottom: 16 }}>
          <Text variant="label" style={{ marginBottom: 8 }}>
            Small
          </Text>
          <DatePicker
            variant="default"
            size="small"
            mode="single"
            placeholder="Small size"
            value={null}
            onChange={() => {}}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text variant="label" style={{ marginBottom: 8 }}>
            Medium
          </Text>
          <DatePicker
            variant="default"
            size="medium"
            mode="single"
            placeholder="Medium size"
            value={null}
            onChange={() => {}}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text variant="label" style={{ marginBottom: 8 }}>
            Large
          </Text>
          <DatePicker
            variant="default"
            size="large"
            mode="single"
            placeholder="Large size"
            value={null}
            onChange={() => {}}
          />
        </View>
      </Card>

      {/* Different Variants */}
      <Card variant="elevated" size="medium" style={{ marginBottom: 24 }}>
        <Text variant="heading" size="lg" style={{ marginBottom: 16 }}>
          Different Variants
        </Text>

        <View style={{ marginBottom: 16 }}>
          <Text variant="label" style={{ marginBottom: 8 }}>
            Default
          </Text>
          <DatePicker
            variant="default"
            size="medium"
            mode="single"
            placeholder="Default variant"
            value={null}
            onChange={() => {}}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text variant="label" style={{ marginBottom: 8 }}>
            Outlined
          </Text>
          <DatePicker
            variant="outlined"
            size="medium"
            mode="single"
            placeholder="Outlined variant"
            value={null}
            onChange={() => {}}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text variant="label" style={{ marginBottom: 8 }}>
            Filled
          </Text>
          <DatePicker
            variant="filled"
            size="medium"
            mode="single"
            placeholder="Filled variant"
            value={null}
            onChange={() => {}}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text variant="label" style={{ marginBottom: 8 }}>
            Underlined
          </Text>
          <DatePicker
            variant="underlined"
            size="medium"
            mode="single"
            placeholder="Underlined variant"
            value={null}
            onChange={() => {}}
          />
        </View>
      </Card>

      {/* With Error State */}
      <Card variant="elevated" size="medium" style={{ marginBottom: 24 }}>
        <Text variant="heading" size="lg" style={{ marginBottom: 16 }}>
          Error State
        </Text>
        <DatePicker
          variant="default"
          size="medium"
          mode="single"
          label="Fecha con error"
          placeholder="Este campo tiene error"
          value={null}
          onChange={() => {}}
          error
          errorMessage="Este campo es requerido"
        />
      </Card>

      {/* Disabled State */}
      <Card variant="elevated" size="medium" style={{ marginBottom: 24 }}>
        <Text variant="heading" size="lg" style={{ marginBottom: 16 }}>
          Disabled State
        </Text>
        <DatePicker
          variant="default"
          size="medium"
          mode="single"
          label="Fecha deshabilitada"
          placeholder="Este campo está deshabilitado"
          value={null}
          onChange={() => {}}
          disabled
        />
      </Card>
    </ScrollView>
  );
};

export default DatePickerExample;
