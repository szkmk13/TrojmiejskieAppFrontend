import UserInfo from './components/Avatar';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';


const PRIMARY_COL_HEIGHT = rem(300);

export default function Profile() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container my="md" pt="25px">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <UserInfo avatar={'./kws.png'} name={'szym'} title={'fewqdewq'} phone={'2332'} email={'aaa'} height={SECONDARY_COL_HEIGHT}/>
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
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
  );
}