import { MantineTheme } from "@mantine/core";

export const color1 = (theme: MantineTheme) => {
  return theme.colorScheme === "dark"
    ? theme.colors.dark[4]
    : theme.colors.gray[3];
};

export const color2 = (theme: MantineTheme) => {
  return theme.colorScheme === "dark"
    ? theme.colors.dark[5]
    : theme.colors.gray[4];
};

export const color3 = (theme: MantineTheme) => {
  return theme.colorScheme === "dark"
    ? theme.colors.dark[6]
    : theme.colors.gray[5];
};
