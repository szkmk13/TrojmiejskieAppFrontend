import React, { useEffect, useState } from "react";
import { Button, Center, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
    handleLogin: () => void;
  }

export default function NotLoggedIn({ handleLogin }: Props) {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  return (
    <Grid justify="center" grow>
      {/* <Button
        variant="gradient"
        gradient={{ from: "#ed2ae0", to: "#ec8c33", deg: 35 }}
        onClick={handleLogin}
      >      <div>
      <p>Logged in: {loggedin ? 'Yes' : 'No'}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
        Log in
      </Button> */}
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
