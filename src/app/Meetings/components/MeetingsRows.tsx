import { TableRow } from "./../../../components/Table/TableRowAndHead.tsx";
import { Center, Skeleton } from "@mantine/core";
import { useQuery } from "react-query";
import { MEETINGS_URL, authHeaders } from "../../../utils/api/api.tsx";

export default function MeetingsRows() {

  const getMeetings = async () => {
    const res = await fetch(MEETINGS_URL, authHeaders);
    if (res.status === 401) throw new Error("An error occurred");
    if (res.status === 200) return res.json();
  };
  const { data, error, isLoading } = useQuery("meetings", getMeetings);

  if (error)
    return (
      <tr>
        <td colSpan={6}>
          <Center>Request Failed</Center>
        </td>
      </tr>
    );
  if (isLoading)
    return (
      <>
        {[...Array(5)].map(() => (
          <tr>
            <td>
              {[...Array(3)].map(() => (
                <Skeleton height={8} radius="xl" mb={10} mt={10} />
              ))}
            </td>
            <td>
              <Skeleton height={8} radius="xl" />
            </td>
            <td>
              <Skeleton height={8} radius="xl" />
            </td>
            {[...Array(3)].map(() => (
              <td>
                <Center>
                  <Skeleton height={25} circle />
                </Center>
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  if (data) 
    return (
      <>
        {data.map((meeting) => (
          <tr key={meeting.id}>
            <td style={{ whiteSpace: "nowrap" }}>
              {meeting.participants.map((user) => (
                <span>
                  <Center>{user}</Center>
                </span>
              ))}
            </td>
            <TableRow data={meeting.date} />
            <TableRow
              data={
                meeting.other_place === null
                  ? meeting.place
                  : meeting.other_place
              }
            />
            <TableRow data={meeting.pizza ? "✔️" : "❌"} />
            <TableRow data={meeting.kasyno ? "✔️" : "❌"} />
            <TableRow data={meeting.confirmed ? "✔️" : "❌"} />
          </tr>
        ))}
      </>
    );
  
}
