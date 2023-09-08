import { createStyles } from "@mantine/core";
import { useState } from "react";

export function NavbarApp() {
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
      {navigation.map((item, id) => (
        <a key={id} href={item.href} className={classes.link}>
          {item.name}
        </a>
      ))}
    </>
  );
}
