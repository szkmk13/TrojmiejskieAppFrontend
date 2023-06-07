import { TableRow } from "./../../../components/Table/TableRowAndHead.tsx";
import { Center } from "@mantine/core";

export default function MeetingsRows() {
  const meetings = [
    {
      id: 24,
      participants: ["Szymon Kowalski", "Krzysiek Wicki", "Daniel Gołębiewski"],
      date: "2023-06-01",
      confirmed: false,
      place: "Kaufland",
      other_place: null,
      pizza: false,
      kasyno: false,
    },
    {
      id: 21,
      participants: ["Szymon Kowalski", "Jakub Daleki", "Karol Rynkowski"],
      date: "2023-05-11",
      confirmed: true,
      place: "Elektryków",
      other_place: null,
      pizza: false,
      kasyno: false,
    },
    {
      id: 20,
      participants: [
        "Szymon Kowalski",
        "Krzysiek Wicki",
        "Daniel Gołębiewski",
        "Kuba Góralski",
      ],
      date: "2023-04-24",
      confirmed: false,
      place: "OTHER",
      other_place: "Boisko do kosza",
      pizza: false,
      kasyno: false,
    },
    {
      id: 18,
      participants: ["Szymon Kowalski", "Krzysiek Wicki", "Daniel Gołębiewski"],
      date: "2023-04-20",
      confirmed: false,
      place: "Ławka nad jeziorkiem",
      other_place: null,
      pizza: false,
      kasyno: false,
    },
    {
      id: 17,
      participants: ["Daniel Gołębiewski", "Krzysiek Wicki", "Szymon Kowalski"],
      date: "2023-04-13",
      confirmed: false,
      place: "Kaufland",
      other_place: null,
      pizza: false,
      kasyno: false,
    },
    {
      id: 15,
      participants: [
        "Szymon Kowalski",
        "Krzysiek Wicki",
        "Karol Rynkowski",
        "Daniel Gołębiewski",
      ],
      date: "2023-03-31",
      confirmed: true,
      place: "Melina u Laroxa",
      other_place: null,
      pizza: true,
      kasyno: false,
    },
    {
      id: 16,
      participants: ["Daniel Gołębiewski", "Krzysiek Wicki", "Szymon Kowalski"],
      date: "2022-08-16",
      confirmed: false,
      place: "Ławka pod Tesco",
      other_place: null,
      pizza: false,
      kasyno: false,
    },
  ];

  const rows = meetings.map((meeting) => (
    <tr key={meeting.id}>
      <td style={{ whiteSpace: "nowrap" }}>
        {" "}
        {meeting.participants.map((user) => (
          <span>
            <Center>{user}</Center>
          </span>
        ))}
      </td>
      <TableRow data={meeting.date} />
      <TableRow
        data={
          meeting.other_place === null ? meeting.place : meeting.other_place
        }
      />
      <TableRow data={meeting.pizza ? "✔️" : "❌"} />
      <TableRow data={meeting.kasyno ? "✔️" : "❌"} />
      <TableRow data={meeting.confirmed ? "✔️" : "❌"} />
    </tr>
  ));
  return <>{rows}</>;
}
