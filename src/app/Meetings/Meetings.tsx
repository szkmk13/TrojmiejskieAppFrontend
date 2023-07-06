import {
  Button,
  Center,
  Checkbox,
  Grid,
  Modal,
  MultiSelect,
  ScrollArea,
  Select,
  Skeleton,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";

import MeetingsTable from "./components/MeetingsTable";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {AddMeetingModal} from "./components/AddMeetingModal/AddMeetingModal";

export default function Meetings() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <AddMeetingModal
        opened={opened}
        onClose={close}
        withCloseButton={false}
      />
      <Grid justify="center">
        <ScrollArea type="scroll">
          <Grid.Col
            span={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="gradient"
              gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
              size="lg"
              onClick={open}
            >
              Dodaj nowy meeting
            </Button>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 8}>
            <MeetingsTable />
          </Grid.Col>
        </ScrollArea>
      </Grid>
    </>
  );
}
