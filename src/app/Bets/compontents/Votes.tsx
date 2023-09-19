import {
  Paper,
  Title,
  Button,
  createStyles,
  rem,
  Text,
  ThemeIcon,
  Popover,
  Group,
  Skeleton,
  Grid,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BetModal } from "./BetModal";
import { IconCoin } from "@tabler/icons-react";
import { useQuery } from "react-query";
import { APIROOT } from "utils/api/api";

export function Votes() {
  const apicall = async () => {
    const AccessToken = localStorage.getItem("access_token");
    const res = await fetch(APIROOT + "votes/my_bets/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + AccessToken,
      },
    });
    const data = await res.json();
    return data;
  };
  // eslint-disable-next-line
  const { data: myVotes, error, isLoading } = useQuery("my_votes", apicall);

  if (isLoading) {
    return <Skeleton height={20} radius="xl" width={"auto"}></Skeleton>;
  }
  if (myVotes) {
    return (
      <>
        <Grid pb={20}>
          <Grid.Col span={2}>
            <Text>kosa coins</Text>
            {myVotes.kosa_coins}
          </Grid.Col>
          <Grid.Col span={2}>
            <Text>kosa total_votes</Text>
            {myVotes.total_votes}
          </Grid.Col>
          <Grid.Col span={2}>
            <Text>kosa wins</Text>
            {myVotes.wins}
          </Grid.Col>
          <Grid.Col span={2}>
            <Text>kosa loses</Text>
            {myVotes.loses}
          </Grid.Col>
          <Grid.Col span={2}>
            <Text>kosa win_ratio</Text>
            {myVotes.win_ratio}
          </Grid.Col>
        </Grid>
      </>
    );
  }
}
