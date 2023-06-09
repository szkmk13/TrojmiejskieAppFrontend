import React from "react";
import {
  Anchor,
  Center,
  Grid,
  List,
  ScrollArea,
  Skeleton,
  Text,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useQuery } from "react-query";
import { PATCH_NOTES_URL, authHeaders } from "utils/api/api";
export default function PatchNotes() {
  const getPatchNotes = async () => {
    const res = await fetch(PATCH_NOTES_URL, authHeaders);
    if (res.status === 401) throw new Error("An error occurred");
    if (res.status === 200) return res.json();
  };
  const { data, error, isLoading } = useQuery("patch_notes", getPatchNotes);

  const isMobile = useMediaQuery("(max-width: 1000px)");
  if (error) return <Center>Request Failed</Center>;
  if (isLoading)
    return (
      <Grid>
        <Grid.Col span={isMobile ? 12 : 9} order={isMobile ? 2 : 1}>
          {[...Array(5)].map(() => (
            <>
              <Skeleton height={40} radius="xl" mb={10} mt={10} width="20%" />
              <Skeleton height={30} radius="xl" mb={10} mt={10} width="25%" />
              <Skeleton height={20} radius="xl" mb={10} mt={10} width="60%" />
            </>
          ))}
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 3} order={isMobile ? 1 : 2}>
          <List size="xl">
            {[...Array(5)].map(() => (
              <Skeleton height={8} radius="xl" mb={10} mt={10} />
            ))}
          </List>
        </Grid.Col>
      </Grid>
    );
  if (data)
    return (
      <Grid>
        <Grid.Col span={isMobile ? 12 : 9} order={isMobile ? 2 : 1}>
          <ScrollArea h={`calc(100vh - ${rem(60)})`} type="scroll">
            {data.map((note) => (
              <>
                <Text fz={40} id={note.title} fw={700}>
                  {note.title}
                </Text>
                <Text fz={30} fw={500}>
                  {note.date}
                </Text>
                <Text fz={20}>{note.body}</Text>
              </>
            ))}
          </ScrollArea>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 3} order={isMobile ? 1 : 2}>
          <ScrollArea h={`calc(30vh - ${rem(60)})`} type="always">
            <List size="xl">
              {data.map((note, index) => (
                <Anchor href={`#${note.title}`} target="_self">
                  <List.Item key={index}>{note.title}</List.Item>
                </Anchor>
              ))}
            </List>
          </ScrollArea>
        </Grid.Col>
      </Grid>
    );
}
