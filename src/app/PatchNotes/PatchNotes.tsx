import React, { useEffect, useState } from "react";
import {
  Anchor,
  Center,
  Container,
  Grid,
  List,
  MantineProvider,
  ScrollArea,
  Text,
  Title,
  rem,
} from "@mantine/core";
import Detail from "./components/Detail";
import { useMediaQuery } from "@mantine/hooks";
export default function PatchNotes() {
  const patchNotes = [
    {
      title: "Patch notes 1.5",
      date: "2023-04-05",
      body: "Dodanie frontendu związanego z meetingami",
    },
    {
      title: "Patch notes 1.4.1",
      date: "2023-04-05",
      body: "Mały fix na meetingi",
    },
    {
      title: "Patch notes 1.4.backend.2",
      date: "2023-04-04",
      body: "Fix z meetingami, pare mniejszych poprawek po stronie backendowej, cachowanie powinno już działąć (serio)",
    },
    {
      title: "Patch notes 1.4.backend.niedziala",
      date: "2023-04-04",
      body: "Nie działa :<",
    },
    {
      title: "Patch notes 1.4.backend",
      date: "2023-04-02",
      body: "Dodanie dużo rzeczy związanych z meetingami, po stronie backendu czekamy na implementacje na froncie",
    },
    {
      title: "Patch notes 1.4",
      date: "2023-03-28",
      body: "Modale z użytkownikami wyświetlają się poprawnie, dodano zdjęcia profilowe trójmiejskich, ładne efekty ładowania",
    },
    {
      title: "Patch notes 1.2",
      date: "2023-03-27",
      body: "Kilka fixów z działaniem endpointów, korony powinno działać jak trzeba, niedługo meetingi wejdą w do życia :D",
    },
    {
      title: "Patch notes 1.3",
      date: "2023-03-26",
      body: "Nowe sortowanie tabeli wyników, teraz można wybrać konkretny miesiąc konkretnego roku. Po kliknięciu na zdjęcie profilowe pokazuje się modal z profilem użytkownika",
    },
    {
      title: "Patch notes 1.1",
      date: "2023-02-01",
      body: "Poprawiona funkcjonalność wyszukiwania na podstawie daty, szukanie słów w wiadomościach.\r\nFix tabeli i ogólna poprawa wyglądu",
    },
    {
      title: "Patch notes 1.0",
      date: "2023-01-21",
      body: "LAUNCH APLIKACJI\r\nOd dzisiaj wszystkie rzeczy związane z trójmiejskimi są dostępne na stronie na której właśnie się znajdujesz (dopóki jest darmowy amazon ec2)",
    },
  ];
  const isMobile = useMediaQuery('(max-width: 1000px)');
  return (
    <Grid>
      <Grid.Col span={isMobile? 12:9} order={isMobile?2:1}>
      <ScrollArea h={`calc(100vh - ${rem(60)})`} type='scroll'>

        {patchNotes.map((note) => (
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
      
      <Grid.Col span={isMobile? 12:3} order={isMobile?1:2}>
      <ScrollArea h={`calc(30vh - ${rem(60)})`} type="always">

        <List size="xl">
          {patchNotes.map((note, index) => (
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
