import React, { useEffect, useState } from "react";
import { Center, Grid, Text, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 1000px)');

  const useStyles = createStyles(() => ({
    rightColumn: {
      textAlign: isMobile ? 'center' : 'right',
    },
    leftColumn: {
      textAlign: isMobile ? 'center' : 'left',
    },
  }));

  const styles = useStyles();
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * carouselData.length);
      setActiveIndex(randomIndex);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  const getFontSize = () => (isMobile? 40: 50)
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
      <Grid.Col span={isMobile ? 12 : 2}>
        <Text fz={getFontSize()} className={styles.classes.rightColumn}>
          Trójmiejskie
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <div
          style={{
            height: "100px",
            overflow: "hidden",
            position: "relative",
            width: "sm"
          }}
        >
          <Center>
            <div
              style={{
                width: "520px",
                position: "absolute",
                top: `-${activeIndex * 100}%`,
                height: `${carouselData.length * 100}%`,
                transition: "top 1s",
                display: "flex",
                flexDirection: "column",
                whiteSpace:"nowrap"

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
                  <Text fz={getFontSize()} weight={700}>
                    {text}
                  </Text>
                </div>
              ))}
            </div>
          </Center>
        </div>
      </Grid.Col>
      <Grid.Col span={isMobile ? 12 : 2}>
        <Text fz={getFontSize()} className={styles.classes.leftColumn}>
          Mężczyźni
        </Text>
      </Grid.Col>
    </Grid>
  );
}
