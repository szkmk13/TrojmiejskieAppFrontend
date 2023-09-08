import { Modal, Box, NumberInput, Center, Button } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { betschema } from "./Bet.validation";
import { useQueryClient } from "react-query";
import { APIROOT } from "utils/api/api";

interface BetModalProps {
  opened: boolean;
  close: () => void;
  open: () => void;
  yes_or_no: boolean;
  bet_id: number;
}
export function BetModal({ ...props }: BetModalProps) {
  const queryClient = useQueryClient()
  const form = useForm({
    validate: yupResolver(betschema),
    initialValues: {
      amount: 0,
      bet_id: props.bet_id,
      vote: props.yes_or_no,
    },
  });
  const HandleBetSumbit = async (values) => {
    values.trojmiejski = localStorage.getItem("user_id");
    console.log(values);
    const payload = values;
    const res = await fetch(APIROOT + "bets/vote/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      form.reset()
      props.close()
      queryClient.invalidateQueries(['bets'])
    } else {
      const data = await res.json()
      alert(Object.entries(data));
    }

  };
  return (
    <Modal opened={props.opened} onClose={props.close}>
      <form onSubmit={form.onSubmit((values) => HandleBetSumbit(values))}>
        <Box maw={320} mx="auto">
          <NumberInput
            placeholder="Amount"
            label="Amount"
            radius="xl"
            size="md"
            withAsterisk
            {...form.getInputProps("amount")}
          />
        </Box>
        <Center pt={20}>
          <Button size="md" type="submit">
            Place Bet
          </Button>
        </Center>
      </form>
    </Modal>
  );
}
