import React from "react";

import ScoreTable from "./components/Table/ScoreTable";
import { Container, ScrollArea } from "@mantine/core";
export default function Data() {
  return (
    <>
      <Container size="xl">
      <ScrollArea  type='scroll'>

        <ScoreTable />
      </ScrollArea>
      </Container>
    </>
  );
}
