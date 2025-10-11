import { Theme } from "./types";
import { lightColors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { shadows } from "./shadows";
import { borders } from "./borders";
import { componentTokens } from "./components";

export const lightTheme: Theme = {
  colors: lightColors,
  typography,
  spacing,
  shadows,
  borders,
  components: componentTokens,
  isDark: false,
};
