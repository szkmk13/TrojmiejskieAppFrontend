import React from "react";

import ScoreTable from "./components/Table/ScoreTable";
import { Container } from "@mantine/core";
export default function Data() {
  return (
    <>
      <Container size="xl">
        <ScoreTable />
      </Container>
    </>
  );
}
