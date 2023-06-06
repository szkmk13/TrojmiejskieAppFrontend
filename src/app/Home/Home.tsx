import React, { useEffect, useState } from "react";
import { Center, Grid, Text } from "@mantine/core";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * carouselData.length);
      setActiveIndex(randomIndex);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  const carouselData = [
    "Chłopaki",
    "Pracujemy",
    "Kociarze",
    "Psiarze",
    "Nienawidzimy się",
    "Hazardziści",
    "Hazardziści",
    "Hazardziści",
    "Hazardziści",
    "Hazardziści",
    "Bogole",
    "Pantofle",
    "Trzech debili podcast",
    "Zoo",
    "Mili",
    "MEGA",
    "Żałujemy tego",
    "Wyjaśniamy się",
    "Stare oblechy",
    "Chlory",
    "Płaczemy razem",
    "ESPANIA",
  ];
  return (
    <Grid justify="center" grow>
      <Grid.Col span={12}>
        <Text fz={30} sx={{ textAlign: "center", paddingBottom: 20 }}>
          Pamiętajcie, że appka Trójmiejskie tworzona jest przez dwóch debili
          programistów 🙂
        </Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text fz={50} sx={{ textAlign: "right" }}>
          Trójmiejskie
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <div
          style={{
            height: "100px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Center>
            <div
              style={{
                position: "absolute",
                top: `-${activeIndex * 100}%`,
                transition: "top 1s",
                display: "flex",
                flexDirection: "column",
                height: `${carouselData.length * 100}%`,
              }}
            >
              {carouselData.map((text, index) => (
                <div
                  key={index}
                  style={{
                    height: `${100 / carouselData.length}%`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: 21,
                  }}
                >
                  <Text fz={50} weight={700}>
                    {text}
                  </Text>
                </div>
              ))}
            </div>
          </Center>
        </div>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text fz={50} sx={{ textAlign: "left" }}>
          Mężczyźni
        </Text>
      </Grid.Col>
    </Grid>
  );
}
