import { useQuery } from "react-query";
import { PENDING_MEETINGS_URL } from "utils/api/api";
import { TableRow } from "./../../../components/Table/TableRowAndHead";
import { Center, Skeleton } from "@mantine/core";
import AcceptButton from "./AcceptButton";
import DeclineButton from "./DeclineButton";

export default function NewMeetingsRows() {
  const getPendingMeetings = async () => {
    const access_token = localStorage.getItem("access_token");
    const res = await fetch(PENDING_MEETINGS_URL, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    if (res.status === 401) throw new Error("An error occurred");
    if (res.status === 200) return res.json();
  };
  const { data, error, isLoading } = useQuery(
    "pendingMettings",
    getPendingMeetings
  );
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
                <>
                  <Center>{user}</Center>
                </>
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
            <TableRow
              data={
                <>
                  <AcceptButton meeting_id={meeting.id} />
                  <DeclineButton meeting_id={meeting.id}/>
                </>
              }
            />
          </tr>
        ))}
      </>
    );
}
