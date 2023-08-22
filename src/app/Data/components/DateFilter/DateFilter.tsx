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
  const years = [
    "All time", "2022", "2023"
  ]
  const isMobile = useMediaQuery("(max-width: 1000px)");

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
              
              {years.map((year) => (
                <Grid.Col span={isMobile? 12:6} style={{ flexBasis: "15%" }}>
                  <Center>
                    <Button radius="xl" size="lg" variant="outline" >{year}</Button>
                  </Center>
                </Grid.Col>
              ))}
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
