import { Grid } from "@mantine/core";
import MeetingsTable from "./components/MeetingsTable";
import { useMediaQuery } from "@mantine/hooks";

export default function Meetings() {
  const isMobile = useMediaQuery('(max-width: 1000px)');



  return (
    <>
      <Grid justify="center">
        <Grid.Col span={isMobile? 12:8}>
          <MeetingsTable />
        </Grid.Col>
      </Grid>
    </>
  );
}
