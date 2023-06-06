import { Table } from "@mantine/core";
import MeetingsRows from "./MeetingsRows";
import NewMeetingsRows from "./NewMeetingsRows";
import { TableHead } from "./../../../components/Table/TableRowAndHead";

export default function MeetingsTable() {
  const tableHeaders = (
    <tr>
      <TableHead data={"Uczestnicy"} />
      <TableHead data={"Data"} />
      <TableHead data={"Miejsce"} />
      <TableHead data={"Pizza"} />
      <TableHead data={"Kasyno"} />
      <TableHead data={"Potwierdzone"} />
    </tr>
  );
  return (
    <Table striped highlightOnHover withColumnBorders fontSize="l">
      <thead>{tableHeaders}</thead>
      <tbody>
        <NewMeetingsRows />
        <MeetingsRows />
      </tbody>
    </Table>
  );
}
