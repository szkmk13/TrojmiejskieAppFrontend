import { Title, Text, rem, createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export function NavbarApp() {
  const useStyles = createStyles((theme) => ({
    link: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
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
  const [newMettings, setnewMettings] = useState(false);
  // pobiera info z backendu i jezeli lista nie jest pusta to zmienia na true

  return (
    <>
      {navigation.map((item, id) => (
        item.name==='Meetings' && newMettings ?
        <div></div> : 
        <a key={id} href={item.href} className={classes.link}>
          {item.name}
        </a>
      ))}
    </>
  );
}
