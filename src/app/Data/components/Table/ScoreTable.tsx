import { Table } from "@mantine/core";
import TableRows from "./TableRows";
import { TableHead } from "./../../../../components/Table/TableRowAndHead";

export default function ScoreTable() {
    const tableHeaders = (
      <tr>
        <TableHead data={"Trójmiejski"} />
        <TableHead data={"Wiadomości"} />
        <TableHead data={"Słowa"} />
        <TableHead data={"Najczęstsze słowa"} />
        <TableHead data={"Zdjęcia"} />
        <TableHead data={"Reakcje"} />
        <TableHead data={"St**y"} />
        <TableHead data={"Punkty TS"} />
      </tr>
    );
    return (
      <Table striped highlightOnHover withColumnBorders fontSize="l">
        <thead>{tableHeaders}</thead>
        <tbody>
          <TableRows/>
        </tbody>
      </Table>
    );
  }