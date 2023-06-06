import { Image, Text, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { TrojmiejskiModal } from "./TrojmiejskiModal";

interface Props {
  user: any;
}
export function Trojmiejski({ user }: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <TrojmiejskiModal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        user={user}
      />
      <td style={{ width: 120 }}>
        <Container
          onClick={() => {
            open();
          }}
          style={{ cursor: "pointer" }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Image
            width={100}
            src="./kws.png"
            alt="Trojmiejski image"
            withPlaceholder
          />
          <Text fz={20}>{user.username}</Text>
        </Container>
      </td>
    </>
  );
}
