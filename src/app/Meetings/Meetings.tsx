import { Grid } from "@mantine/core";
import MeetingsTable from "./components/MeetingsTable";

export default function Meetings() {
  return (
    <>
      <Grid justify="center">
        <Grid.Col span={6}>
          <MeetingsTable />
        </Grid.Col>
      </Grid>
    </>
  );
}
