import { Image, Text, Grid, SimpleGrid, Center, Modal } from "@mantine/core";

import React from "react";
import Crown from "./Crown";

interface Props {
  user: any;
  opened: boolean;
  onClose: () => void;
  withCloseButton: boolean;
}
export function TrojmiejskiModal({
  user,
  opened,
  onClose,
  withCloseButton,
}: Props) {
  const data = {
    first_name: "Daniel",
    profile_picture:
      "https://szymon.kowalski.cybulski.dev/media/profile_pictures/Larox_a_guys_around_24_years_old_skinny_working_night_shifts_on_.png",
    total_words: 16720,
    total_chat_messages: 3982,
    total_photos: 662,
    total_feet: 6,
    total_reactions_received: 1681,
    total_reactions_given: 825,
    crowns: [
      {
        month: 7,
        year: 2022,
        legacy: true,
        yearly: false,
      },
      {
        month: 8,
        year: 2022,
        legacy: false,
        yearly: false,
      },
      {
        month: 7,
        year: 2022,
        legacy: true,
        yearly: false,
      },
      {
        month: 8,
        year: 2022,
        legacy: false,
        yearly: false,
      },
      {
        month: 7,
        year: 2022,
        legacy: true,
        yearly: false,
      },
      {
        month: 8,
        year: 2022,
        legacy: false,
        yearly: false,
      },
      {
        month: 7,
        year: 2022,
        legacy: true,
        yearly: false,
      },
      {
        month: 8,
        year: 2022,
        legacy: false,
        yearly: false,
      },
      {
        month: 7,
        year: 2022,
        legacy: true,
        yearly: false,
      },
      {
        month: 8,
        year: 2022,
        legacy: false,
        yearly: false,
      },
    ],
    most_used_words: {
      na: 340,
      nie: 312,
      to: 309,
      się: 243,
    },
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        withCloseButton={withCloseButton}
        centered
        size="80%"
      >
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              width={200}
              src="./kws.png"
              alt="Trojmiejski image"
              withPlaceholder
            />
            <Text fz={40}>{user.username}</Text>
          </Grid>
          <Grid gutter="md" style={{ maxWidth: 700 }}>
            <Grid.Col span={12}>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                {data.crowns.length === 0 ? (
                  <Grid.Col>
                    <Text fz={15}>Jeszcze nie ma żadnych koron 😥</Text>
                  </Grid.Col>
                ) : (
                  data.crowns.map((crown) => (
                    <Grid.Col span={6} style={{ flexBasis: "20%" }}>
                      <Center>
                        <Crown crown={crown} />
                      </Center>
                    </Grid.Col>
                  ))
                )}
              </Grid>
            </Grid.Col>

            <Grid.Col span={6}>
              <Text fz={20}>
                Wszystkie dane reakcje : {data.total_reactions_given}
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text fz={20}>
                Wszystkie otrzymane reakcje : {data.total_reactions_received}
              </Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Text fz={30}>
                Random wiadomość z 3 słów: łątwiej to bedzie zrobić na
                backendzie xd
              </Text>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Modal>
    </>
  );
}
