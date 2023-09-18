import React from "react";
import { Button, Center, Grid, Group, Menu } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
export default function DateFilter() {
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czeriwec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];
  const years = ["All time", "2022", "2023"];
  const isMobile = useMediaQuery("(max-width: 1000px)");

  return (
    <Group position="center" spacing="md" pb={20}>
      <Grid gutter="md">
        <Grid.Col span={2}>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button>Year</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Rok do wyboru</Menu.Label>
              {years.map((year) => (
                  <Center>
                    <Menu.Item>
                      <Button radius="xl" size="md" variant="outline">
                        {year}
                      </Button>
                    </Menu.Item>
                  </Center>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Grid.Col>

        <Grid.Col span={8}>
          <Menu shadow="md" width={200} withArrow>
            <Menu.Target>
              <Button>Month</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Miesiąc do wyboru</Menu.Label>
              {months.map((month) => (
                  <Center>
                    <Menu.Item>
                      <Button radius="xl" size="sm">
                        {month}
                      </Button>
                    </Menu.Item>
                  </Center>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Grid.Col>
      </Grid>
    </Group>
  );
}
