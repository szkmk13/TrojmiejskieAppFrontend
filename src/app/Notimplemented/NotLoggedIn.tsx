import React from "react";
import { Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
    handleLogin: () => void;
  }

export default function NotLoggedIn({ handleLogin }: Props) {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  return (
    <Grid justify="center" grow>
      <Grid.Col span={12}>
        <Text
          fz={isMobile ? 50 : 100}
          style={{ whiteSpace: "normal" }}
          sx={{ textAlign: "center", paddingBottom: 20 }}
        >
          Proszę się zalogować używając tego jakże pięknego guziczka po prawej u
          góry
        </Text>
      </Grid.Col>
    </Grid>
  );
}
