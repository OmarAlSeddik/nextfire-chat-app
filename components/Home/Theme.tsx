import useLoggedInUser from "@/hooks/useLoggedInUser";
import {
  Card,
  ColorSwatch,
  Group,
  SegmentedControl,
  Slider,
  Text,
  useMantineTheme,
} from "@mantine/core";
import changeUserPrimaryColor from "library/changeUserPrimaryColor";
import toggleUserColorScheme from "library/toggleUserColorScheme";
import { color2 } from "library/colorVariables";

const Theme = () => {
  const MARKS = [
    { value: 0, label: "XS" },
    { value: 25, label: "S" },
    { value: 50, label: "M" },
    { value: 75, label: "L" },
    { value: 100, label: "XL" },
  ];

  const theme = useMantineTheme();

  const { uid, primaryColor, colorScheme } = useLoggedInUser();
  console.log(primaryColor);

  return (
    <Card
      sx={(theme) => ({
        "@media (max-width: 700px)": {
          width: "20rem",
        },
        width: "27rem",
        backgroundColor: color2(theme),
      })}
    >
      <Text
        align="center"
        weight="bold"
        sx={{ fontSize: "2.1rem", lineHeight: 1.3, marginBottom: "1rem" }}
      >
        Theme
      </Text>
      <Text align="center" weight={500} sx={{ marginBottom: "0.25rem" }}>
        Adjust the Font Size
      </Text>
      <Slider
        label={(value) => MARKS.find((mark) => mark.value === value)?.label}
        defaultValue={50}
        step={25}
        marks={MARKS}
        styles={{ markLabel: { display: "none" } }}
        color={primaryColor}
        sx={{ marginBottom: "1rem" }}
      />
      <Text align="center" weight={500} sx={{ marginBottom: "0.25rem" }}>
        Adjust the Theme Mode
      </Text>
      <SegmentedControl
        radius="xl"
        sx={{ width: "100%", marginBottom: "1rem" }}
        color={primaryColor}
        fullWidth
        value={colorScheme}
        data={[
          { label: "Light Theme", value: "light" },
          { label: "Dark Theme", value: "dark" },
        ]}
        onChange={() => toggleUserColorScheme(uid)}
      />
      <Text align="center" weight={500} sx={{ marginBottom: "0.25rem" }}>
        Adjust the Theme Color
      </Text>
      <Group position="center" spacing="xl">
        <ColorSwatch
          component="button"
          size={32}
          color={theme.colors.orange[6]}
          sx={{ cursor: "pointer" }}
          onClick={() => changeUserPrimaryColor(uid, "orange")}
        />
        <ColorSwatch
          component="button"
          size={32}
          color={theme.colors.cyan[6]}
          sx={{ cursor: "pointer" }}
          onClick={() => changeUserPrimaryColor(uid, "cyan")}
        />
        <ColorSwatch
          component="button"
          size={32}
          color={theme.colors.pink[6]}
          sx={{ cursor: "pointer" }}
          onClick={() => changeUserPrimaryColor(uid, "pink")}
        />
      </Group>
    </Card>
  );
};

export default Theme;
