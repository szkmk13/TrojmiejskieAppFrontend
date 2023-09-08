import UserInfo from './components/Avatar';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';
import { Text } from '@mantine/core';
import { useQuery } from 'react-query';
import { APIROOT } from 'utils/api/api';


const PRIMARY_COL_HEIGHT = rem(300);

export default function Profile() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
  const user_id = localStorage.getItem('user_id')
  const apicall = async () => {
    const AccessToken = localStorage.getItem("access_token");
    const res = await fetch(APIROOT + `users/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + AccessToken,
      },
    });
    const data = await res.json();
    console.log(data)
    return data;
  };
  // eslint-disable-next-line
  const { data: userData, error, isLoading } = useQuery("user", apicall);
  if (isLoading){
    <Container my="md" pt="25px">
    <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      <Grid gutter="md">
        <Grid.Col>
          <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
        </Grid.Col>
      </Grid>
    </SimpleGrid>
  </Container>
  }
  else{
  return (
    <Container my="md" pt="25px">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <UserInfo avatar={userData.profile_picture?userData.profile_picture:'./kws.png'} name={userData.first_name} title={'Your profile'} messages={userData.total_words} kosaCoins={userData.kosa_coins} height={SECONDARY_COL_HEIGHT}/>
        <Grid gutter="md">
          <Grid.Col>
          {userData.crowns.map((crown) => (
          <Text size={'xl'}>{crown.month} tutaj beda korony ale nie mam sily tego robic teraz</Text>
        ))}
                        
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}}