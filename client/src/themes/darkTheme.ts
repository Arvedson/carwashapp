import { Theme } from "./types";
import { darkColors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { shadows } from "./shadows";
import { borders } from "./borders";
import { componentTokens } from "./components";

export const darkTheme: Theme = {
  colors: darkColors,
  typography,
  spacing,
  shadows,
  borders,
  components: componentTokens,
  isDark: true,
};
