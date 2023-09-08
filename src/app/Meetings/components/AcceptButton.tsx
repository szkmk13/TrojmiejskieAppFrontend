import { Button } from "@mantine/core";
import { useQueryClient } from "react-query";
import { MEETINGS_URL, MEETINGS_URL_CONFIRM } from "utils/api/api";
import { notifications } from "@mantine/notifications";
interface AcceptButtonProps {
  meeting_id: number;
}
export default function AcceptButton({ ...props }: AcceptButtonProps) {
  const queryClient = useQueryClient();

  const access_token = localStorage.getItem("access_token");

  const handleClick = async () => {
    const meeting_id = props.meeting_id;
    const res = await fetch(MEETINGS_URL + `${meeting_id}` + "/confirm/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    });
    if (res.status === 200) {
      
      queryClient.invalidateQueries(["pendingMettings"]);
      queryClient.invalidateQueries(["waitingMeetings"]);
      queryClient.invalidateQueries(["meetings"]);
      const data = await res.json();
      notifications.show({
        color: "green",
        message: data,
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.blue[4],
            borderColor: theme.colors.blue[4],
          },

          title: { color: theme.white },
          description: { color: theme.white },
        }),
      });
    } else {
      const data = await res.json();
      alert(data);
    }
  };

  return (
    <Button variant="outline" color="teal" radius="xl" onClick={handleClick}>
      ✔️
    </Button>
  );
}
