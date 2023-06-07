import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Paper,
  Text,
} from "@mantine/core";
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
  return (
      <Group position="center" spacing="md" pb={20}>
        <Grid gutter="md">
          <Grid.Col span={3}>
            <Grid style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <Grid.Col span={6}style={{ flexBasis: "15%" }}>
                  <Button radius="xl" fz={30}variant="outline">All Time</Button>
              </Grid.Col>
              <Grid.Col span={6}style={{ flexBasis: "15%" }} >
                  <Button radius="xl" fz={30}variant="outline">2022</Button>
              </Grid.Col>
              <Grid.Col span={6}style={{ flexBasis: "15%" }} >
                  <Button radius="xl" fz={30}variant="outline">2023</Button>
              </Grid.Col>
            </Grid>
          </Grid.Col>

          <Grid.Col span={9}>
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              {months.map((month) => (
                <Grid.Col span={6} style={{ flexBasis: "15%" }}>
                  <Center>
                    <Button radius="xl" size="lg">{month}</Button>
                  </Center>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Group>
  );
}
