import { Modal, Box, NumberInput, Center, Button } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { betschema } from "./Bet.validation";

interface BetModalProps {
  opened: boolean;
  close: () => void;
  open: () => void;
  yes_or_no: boolean;
  bet_id: number;
}
export function BetModal({ ...props }: BetModalProps) {
  const form = useForm({
    validate: yupResolver(betschema),
    initialValues: {
      amount: 0,
      id: props.bet_id,
      vote: props.yes_or_no,
    },
  });
  const HandleBetSumbit = async (values) => {
    values.trojmiejski = localStorage.getItem("user_id");
    console.log(values);
    /// todo send request to place bet to backend with {values}
  };
  return (
    <Modal opened={props.opened} onClose={props.close}>
      <form onSubmit={form.onSubmit((values) => HandleBetSumbit(values))}>
        <Box maw={320} mx="auto">
          <NumberInput
            defaultValue={18}
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
