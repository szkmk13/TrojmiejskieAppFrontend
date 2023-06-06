import { Title, Text, MantineProvider } from "@mantine/core";

export function TrojmiejskieLogo() {
  return (
    <>
      <MantineProvider
        theme={{
          fontFamily: "Lobster, cursive",
        }}
      >
        <Title fz={30} order={3}>
          Trójmiejskie
          <Text span c="blue" inherit>
            App
          </Text>
        </Title>
      </MantineProvider>
    </>
  );
}
