import { List, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconTemperature } from "@tabler/icons-react";
import { useState } from "react";

export function NavbarApp() {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  const useStyles = createStyles((theme) => ({
    link: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      paddingBottom: theme.spacing.sm,
      paddingTop: theme.spacing.sm,
      textDecoration: "none",
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: 20,
    },
  }));

  const { classes } = useStyles();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Meetings", href: "/meetings" },
    { name: "Profile", href: "/profile" },
    { name: "Data", href: "/data" },
    { name: "Patch notes", href: "/patch_notes" },
    { name: "Bets", href: "/bets" },
  ];
  return (
    <>
      {isMobile ? (
        <List size="lg">
          {navigation.map((item, id) => (
            <List.Item>
              <a key={id} href={item.href} className={classes.link}>
                {item.name}
              </a>
            </List.Item>
          ))}
        </List>
      ) : (
        navigation.map((item, id) => (
          <a key={id} href={item.href} className={classes.link}>
            {item.name}
          </a>
        ))
      )}
    </>
  );
}
