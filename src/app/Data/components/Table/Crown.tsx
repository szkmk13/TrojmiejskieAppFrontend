import React from "react";
import { Image, Tooltip } from "@mantine/core";

interface Props {
  crown: any;
}
export default function Crown({ crown }: Props) {
  const hooverLabel = crown.month + " " + crown.year;

  return (
    <>
      <Tooltip label={hooverLabel}>
        <Image width={70} src="./korona_new.png" alt="Korona" withPlaceholder />
      </Tooltip>
    </>
  );
}
