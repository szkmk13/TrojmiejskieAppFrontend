import React from "react";

import ScoreTable from "./components/Table/ScoreTable";
import { Container, ScrollArea } from "@mantine/core";
import DateFilter from "./components/DateFilter/DateFilter";
export default function Data() {
  return (
    <>
      <Container size="xl">
      <ScrollArea  type='scroll'>
        <DateFilter/>
        <ScoreTable />
      </ScrollArea>
      </Container>
    </>
  );
}
