import {
  Paper,
  Title,
  Button,
  createStyles,
  rem,
  Text,
  ThemeIcon,
  Popover,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BetModal } from "./BetModal";
import { IconCoin } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));
interface CardProps {
  deadline: string;
  yes_ratio: string;
  yes_label: string;
  open: boolean;
  text: string;
  total: string;
  no_label: string;
  no_ratio: string;
  id: number;
}

export function Bet({ ...props }: CardProps) {
  const { classes } = useStyles();
  const [BetModalOpened, { toggle: OpenBetModal, close: CloseBetModal }] =
    useDisclosure(false);
  const [BetModalOpenedNo, { toggle: OpenBetModalNo, close: CloseBetModalNo }] =
    useDisclosure(false);
  const [kosaCoin, { toggle: ShowKosaCoin, close: CloseKosaCoin }] =
    useDisclosure(false);

  const today = props.deadline;
  const date = props.deadline.split("T")[0];

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundColor: `black` }}
      className={classes.card}
    >
      <BetModal
        open={OpenBetModal}
        close={CloseBetModal}
        opened={BetModalOpened}
        bet_id={props.id}
        yes_or_no={true}
      />
      <BetModal
        open={OpenBetModalNo}
        close={CloseBetModalNo}
        opened={BetModalOpenedNo}
        bet_id={props.id}
        yes_or_no={false}
      />
      <Text className={classes.category}>Deadline {date}</Text>
      <div>
        <Title order={3} className={classes.title}>
          {props.text}
        </Title>
        <Group>
          <Text className={classes.category} size="xl">
            Total: {props.total}
          </Text>
          <Popover
            width={'auto'}
            position="bottom"
            withArrow
            shadow="md"
            opened={kosaCoin}
          >
            <Popover.Target>
              <ThemeIcon
                radius="xl"
                size="sm"
                color="yellow"
                onMouseEnter={ShowKosaCoin}
                onMouseLeave={CloseKosaCoin}
              >
                <IconCoin />
              </ThemeIcon>
            </Popover.Target>
            <Popover.Dropdown sx={{ pointerEvents: "none" }}>
              <Text size="sm">Kosa Coins</Text>
            </Popover.Dropdown>
          </Popover>
        </Group>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "40px",
        }}
      >
        <Title order={3} className={classes.title}>
          {props.yes_ratio}
        </Title>
        <Title order={2} className={classes.title}>
          {props.no_ratio}
        </Title>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Button
          onClick={OpenBetModal}
          variant="outline"
          color="green"
          sx={{ display: "flex" }}
          size="lg"
        >
          Bet {props.yes_label}
        </Button>
        <Button
          onClick={OpenBetModalNo}
          variant="outline"
          color="red"
          sx={{ display: "flex" }}
          size="lg"
        >
          Bet {props.no_label}
        </Button>
      </div>
    </Paper>
  );
}
