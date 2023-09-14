import { useQuery } from "react-query";
import { MEETINGS_URL } from "utils/api/api.tsx";
import { TableRow } from "./../../../components/Table/TableRowAndHead.tsx";
import {
  Center,
  Loader,
  Popover,
  Skeleton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function MeetingsAlreadyConfirmed() {
  const [
    loadingPopover,
    { toggle: ShowLoadingPopover, close: CloseLoadingPopover },
  ] = useDisclosure(false);
  const getWaitingMeetings = async () => {
    const access_token = localStorage.getItem("access_token");

    const res = await fetch(MEETINGS_URL + "waiting/", {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    if (res.status === 401) throw new Error("An error occurred");
    if (res.status === 200) return res.json();
  };
  const { data, error, isLoading } = useQuery(
    "waitingMeetings",
    getWaitingMeetings
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
            <TableRow
              data={
                <>
                  <Popover
                    width={"auto"}
                    position="bottom"
                    withArrow
                    shadow="md"
                    opened={loadingPopover}
                  >
                    <Popover.Target>
                      <Loader
                        onMouseEnter={ShowLoadingPopover}
                        onMouseLeave={CloseLoadingPopover}
                      />
                    </Popover.Target>
                    <Popover.Dropdown sx={{ pointerEvents: "none" }}>
                      <Text>Already confirmed, waiting for others</Text>
                    </Popover.Dropdown>
                  </Popover>
                </>
              }
            />
          </tr>
        ))}
      </>
    );
}
