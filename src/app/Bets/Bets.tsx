import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem, Skeleton } from "@mantine/core";
import { useQuery } from "react-query";
import { Bet } from "./compontents/BetCard";
import { APIROOT } from "utils/api/api";

export default function Bets() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const apicall = async () => {
    const AccessToken = localStorage.getItem("access_token");
    const res = await fetch(APIROOT + "bets/", {
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
  const { data: bets, error, isLoading } = useQuery("bets", apicall);
  if (isLoading) {
    return <Skeleton height={400} radius="xl" width={270}></Skeleton>;
  }
  if (bets) {
    const slides = bets.map((item) => (
      <Carousel.Slide key={item.title}>
        <Bet {...item} />
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
