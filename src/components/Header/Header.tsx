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
  Modal,
  TextInput,
  PasswordInput,
  Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TrojmiejskieLogo } from "../Logo/TrojmiejskieLogo";
import { NavbarApp } from "./components/NavbarApp";
import { useAuthStore } from "authStore";
import { useForm, yupResolver } from "@mantine/form";
import { loginschema } from "./components/Login.validation";
import { APIROOT } from "utils/api/api";

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

  const loggedIn = useAuthStore((state) => state.loggedin);
  const logInUser = useAuthStore((state) => state.logIn);
  const logOutUser = useAuthStore((state) => state.logOut);

  const [LoginModalOpened, { toggle: openLoginModal, close: closeLoginModal }] =
    useDisclosure(false);
  const form = useForm({
    validate: yupResolver(loginschema),
    initialValues: {
      username: "",
      password: "",
    },
  });
  const HandleUserLogin = async (values) => {
    console.log(values);

    const payload = values;

    const res = await fetch(APIROOT + "token/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      console.log("200");
      const a = data.refresh;
      console.log(a);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("access_token", data.access);
      const token = localStorage.getItem("access_token");
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      const decoded = JSON.parse(jsonPayload);
      localStorage.setItem("name", decoded.name);
      localStorage.setItem("user_id", decoded.user_id);
      closeLoginModal();
      logInUser();
    } else {
      console.log(data);
      console.log(res.status);
      // form.reset();
      alert("wrong username or password");
    }
  };
  const HandleUserLogout = async () => {
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    logOutUser();
  };

  return (
    <Box pb={20} style={{ position: "sticky" }}>
      <Modal opened={LoginModalOpened} onClose={closeLoginModal}>
        <form onSubmit={form.onSubmit((values) => HandleUserLogin(values))}>
          <Box maw={320} mx="auto">
            <TextInput
              label="Username"
              placeholder="username"
              withAsterisk
              {...form.getInputProps("username")}
            />
            <PasswordInput
              mt="md"
              label="Password"
              placeholder="Password"
              {...form.getInputProps("password")}
            />
          </Box>
          <Center pt={20}>
            <Button size="lg" type="submit">
              Log in
            </Button>
          </Center>
        </form>
      </Modal>

      <Header height={60} px="md">
        <Group position="apart">
          <TrojmiejskieLogo />

          <Group spacing={0} className={classes.hiddenMobile}>
            <NavbarApp />
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button
              variant="gradient"
              gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
              onClick={loggedIn ? HandleUserLogout : openLoginModal}
            >
              {loggedIn ? localStorage.getItem("name") + " Log out" : "Log in"}
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
        zIndex={10}
        title={<Text fz={30}>Nawigacja</Text>}
      >
        {/* <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md"> */}
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
              onClick={loggedIn ? HandleUserLogout : openLoginModal}
            >
              {loggedIn ? localStorage.getItem("name") + " Log out" : "Log in"}
            </Button>
          </Group>
        {/* </ScrollArea> */}
      </Drawer>
    </Box>
  );
}
