import {
  Card,
  ColorSwatch,
  Group,
  SegmentedControl,
  Slider,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";

const Theme = () => {
  const MARKS = [
    { value: 0, label: "50%" },
    { value: 25, label: "75%" },
    { value: 50, label: "100%" },
    { value: 75, label: "125%" },
    { value: 100, label: "150%" },
  ];

  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  console.log(colorScheme);

  return (
    <Card
      sx={(theme) => ({
        width: "30rem",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[5],
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
        label={(val) => MARKS.find((mark) => mark.value === val)?.label}
        defaultValue={50}
        step={25}
        marks={MARKS}
        styles={{ markLabel: { display: "none" } }}
        sx={{ marginBottom: "1rem" }}
      />
      <Text align="center" weight={500} sx={{ marginBottom: "0.25rem" }}>
        Adjust the Theme Mode
      </Text>
      <SegmentedControl
        radius="xl"
        sx={{ width: "100%", marginBottom: "1rem" }}
        color={"orange"}
        fullWidth
        value={colorScheme}
        data={[
          { label: "Light Theme", value: "light" },
          { label: "Dark Theme", value: "dark" },
        ]}
        onChange={() => toggleColorScheme()}
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
        />
        <ColorSwatch
          component="button"
          size={32}
          color={theme.colors.blue[6]}
          sx={{ cursor: "pointer" }}
        />
        <ColorSwatch
          component="button"
          size={32}
          color={theme.colors.pink[6]}
          sx={{ cursor: "pointer" }}
        />
      </Group>
    </Card>
  );
};

export default Theme;
