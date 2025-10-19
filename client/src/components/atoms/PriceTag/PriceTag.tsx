import React from "react";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/atoms/Text";
import { PriceTagProps } from "./PriceTag.types";
import { createPriceTagStyles } from "./PriceTag.styles";

const PriceTag: React.FC<PriceTagProps> = ({
  amount,
  currency = "$",
  size = "medium",
  variant = "primary",
  showCurrency = true,
  currencyPosition = "before",
  style,
  textStyle,
}) => {
  const { theme } = useTheme();
  const styles = createPriceTagStyles(theme, size, variant);

  const formatAmount = (amount: number | string) => {
    if (typeof amount === "string") return amount;
    return amount.toFixed(2);
  };

  const renderPrice = () => {
    const formattedAmount = formatAmount(amount);

    if (!showCurrency) {
      return <Text style={[styles.text, textStyle]}>{formattedAmount}</Text>;
    }

    if (currencyPosition === "before") {
      return (
        <View style={[styles.container, style]}>
          <Text style={[styles.currency, textStyle]}>{currency}</Text>
          <Text style={[styles.text, textStyle]}>{formattedAmount}</Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.container, style]}>
          <Text style={[styles.text, textStyle]}>{formattedAmount}</Text>
          <Text style={[styles.currency, textStyle]}>{currency}</Text>
        </View>
      );
    }
  };

  return renderPrice();
};

export default PriceTag;
