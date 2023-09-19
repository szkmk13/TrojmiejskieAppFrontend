import { MostRecentWord } from "./MostRecentWord";
import { Trojmiejski } from "./Trojmiejski";
import { TableRow } from "./../../../../components/Table/TableRowAndHead";
import { useQuery } from "react-query";
import { USERS_URL } from "utils/api/api";
import { Center, Grid, Skeleton, Text } from "@mantine/core";

export default function TableRows() {
  const getUsers = async () => {
    const access_token = localStorage.getItem("access_token");

    const res = await fetch(USERS_URL, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    if (res.status === 401) throw new Error("An error occurred");
    if (res.status === 200) return res.json();
  };
  const { data: users, error, isLoading } = useQuery("users", getUsers);
  if (error) {
    return <Text>somethign went wrong</Text>;
  }
  if (isLoading) {
    return (
      <>
        {[...Array(2)].map(() => (
          <tr>
            <td>
              <Grid>
                <Grid.Col span={6}>
                  <Skeleton height={100} circle />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Center pt={40}>
                    <Skeleton height={20} />
                  </Center>
                </Grid.Col>
              </Grid>
            </td>
            <TableRow data={<Skeleton height={20} radius="xl" width={50} />} />
            <TableRow data={<Skeleton height={20} radius="xl" width={30} />} />
            <TableRow data={<Skeleton height={20} radius="xl" width={150} />} />
            {[...Array(4)].map(() => (
              <TableRow
                data={<Skeleton height={20} radius="xl" width={20} />}
              />
            ))}
          </tr>
        ))}
      </>
    );
  }
  return users.map((user) => (
    <>
      <tr key={user.id}>
        <Trojmiejski user={user} />
        <TableRow data={user.total_chat_messages} />
        <TableRow data={user.total_words} />
        <MostRecentWord user={user} />
        <TableRow data={user.total_photos} />
        <TableRow data={user.total_feet} />
        <TableRow data={user.total_reactions} />
        <TableRow data={user.total_points} />
      </tr>
    </>
  ));
}
