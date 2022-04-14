import { MantineThemeOverride } from "@mantine/core";

const appTheme: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "orange",
  loader: "bars",
  shadows: {
    xs: "0 1px rgb(0 0 0 / 20%), 0 -1px rgb(0 0 0 / 20%)",
  },
};

export default appTheme;
