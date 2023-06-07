import { Grid, ScrollArea } from "@mantine/core";
import MeetingsTable from "./components/MeetingsTable";
import { useMediaQuery } from "@mantine/hooks";

export default function Meetings() {
  const isMobile = useMediaQuery('(max-width: 1000px)');



  return (
    <>
    
      <Grid justify="center">
      <ScrollArea  type='scroll'>

        <Grid.Col span={isMobile? 12:8}>
          <MeetingsTable />
        </Grid.Col>
        </ScrollArea>
      </Grid>
    </>
  );
}
