import { TableRow } from "./../../../components/Table/TableRowAndHead";
import { Button, Center } from "@mantine/core";

export default function NewMeetingsRows() {
  const newMeetings = [
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
  const newrows = newMeetings.map((meeting) => (
    <tr key={meeting.id}>
      <td style={{ whiteSpace: "nowrap" }}>
        {meeting.participants.map((user) => (
          <>
            <Center>{user}</Center>
          </>
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
      <TableRow
        data={
          <>
            <Button variant="outline" color="teal" radius="xl">
              ✔️
            </Button>
            <Button variant="outline" color="red" radius="xl" ml={20}>
              ❌
            </Button>
          </>
        }
      />
    </tr>
  ));
  return <>{newrows}</>;
}
