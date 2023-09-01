import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { useQuery } from "react-query";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface CardProps {
  deadline: string;
  yes_ratio: string;
  yes_label: string;
  open: boolean;
  text: string;
  total: string;
  no_label: string;
  no_ratio: string;

}

function Card({...props}: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundColor: `black` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {props.text}
        </Title>
        <Text className={classes.category} size="xl">
          Do wygrania: {props.total} kosacoins
        </Text>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width:'100%',marginTop:'40px'}}>
        <Title order={3} className={classes.title}>
          {props.yes_ratio}
        </Title>
        <Title order={2} className={classes.title}>
        {props.no_ratio}
        </Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width:'100%'}}>
        <Button variant="white" color="dark" sx={{display:'flex'}} size="lg">
          Bet {props.yes_label}
        </Button>
        <Button variant="white" color="dark" sx={{display:'flex'}}size="lg">
          Bet {props.no_label}
        </Button>
      </div>
    </Paper>
  );
}

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "szymek pierwszy sie ożeni",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "krzysiu peirwszy kupi mieszkanie",
    category: "beach",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "spuchnięty habibi wróci kiedyś z dubaju",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Daleki znajdzie prace",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "daniel zrobi 48h na stacji",
    category: "tourism",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "mlody znajdzie milosc",
    category: "nature",
  },
];

export default function Bets() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const apicall = async () => {
    const AccessToken = localStorage.getItem('access_token')
    const res = await fetch("https://szymon.kowalski.cybulski.dev/api/bets/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + AccessToken
      },
    });
    const data = await res.json();
    return data;
  };
  
  const {data:bets, error, isLoading} = useQuery('login', apicall);
  if(isLoading){
    return <Text>LOADING</Text>
  }
  if (bets) {
      console.log(bets)
      const slides = bets.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
    return (
      <Carousel
        slideSize="20%"
        breakpoints={[{ maxWidth: "sm", slideSize: "90%", slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    );
  }

}
