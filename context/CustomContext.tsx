import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import appTheme from "library/appTheme";
import { createContext } from "react";

const CustomContext = createContext({
  primaryColor: "orange",
  setPrimaryColor: (prevState: string) => {},
  isMobile: false,
});

export const CustomContextProvider = (props: any) => {
  const [primaryColor, setPrimaryColor] = useLocalStorage({
    key: "mantine-primary-color",
    defaultValue: "orange",
    getInitialValueInEffect: true,
  });

  const isMobile = useMediaQuery("(max-width: 600px)");

  appTheme.primaryColor = primaryColor;

  return (
    <CustomContext.Provider value={{ primaryColor, setPrimaryColor, isMobile }}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default CustomContext;
