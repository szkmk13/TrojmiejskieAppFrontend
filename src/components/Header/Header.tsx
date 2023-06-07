import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TrojmiejskieLogo } from "../Logo/TrojmiejskieLogo";
import { NavbarApp } from "./components/NavbarApp";

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("1000")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("999")]: {
      display: "none",
    },
  },
}));

export function HeaderApp() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={20} style={{position: "sticky"}}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <TrojmiejskieLogo />

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <NavbarApp />
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button
              variant="gradient"
              gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            >
              Log in
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="80%"
        position="left"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        title={<Text fz={30}>Nawigacja</Text>}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <NavbarApp />

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button
              variant="gradient"
              gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            >
              Log in
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
