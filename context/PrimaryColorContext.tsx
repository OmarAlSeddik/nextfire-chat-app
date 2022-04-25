import { useLocalStorage } from "@mantine/hooks";
import appTheme from "library/appTheme";
import { createContext } from "react";

const PrimaryColorContext = createContext({
  primaryColor: "orange",
  setPrimaryColor: (prevState: string) => {},
});

export const PrimaryColorContextProvider = (props: any) => {
  const [primaryColor, setPrimaryColor] = useLocalStorage({
    key: "mantine-primary-color",
    defaultValue: "orange",
    getInitialValueInEffect: true,
  });

  appTheme.primaryColor = primaryColor;

  return (
    <PrimaryColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {props.children}
    </PrimaryColorContext.Provider>
  );
};

export default PrimaryColorContext;
