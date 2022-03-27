// -- mui -- //
import {
  createTheme,
  alpha,
  responsiveFontSizes,
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
// -- basic & custom hooks -- //
import { createContext, useMemo } from "react";

const ThemeContext = createContext({
  theme: {},
  isMobile: false,
  isSmallMobile: false,
});

export const ThemeContextProvider = (props: any) => {
  let theme: any = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: { xs: 0, sm: 368, md: 736, lg: 1200, xl: 1536 },
          // You can use your own breakpoint values.
        },
        palette: {
          primary: {
            main: indigo[900], // Choose your app's primary color.
          },
          secondary: {
            main: indigo[500], // Choose your app's secondary color.
          },
          background: {
            default: alpha(indigo[900], 0.2), // Choose your app's background color.
          }, // the alpha function makes the color semi-transparent.
        },
        shape: {
          borderRadius: 8, // Global border radius.
        },
      }),
    []
  );
  // For modifying other values, check the MUI default theme documentation.

  theme = responsiveFontSizes(theme); // This makes the font size responsive.
  // These are global variable that are used for customizing the mobile views.
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeContext.Provider value={{ theme, isMobile, isSmallMobile }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* This sets a css baseline for the entire app.*/}
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
