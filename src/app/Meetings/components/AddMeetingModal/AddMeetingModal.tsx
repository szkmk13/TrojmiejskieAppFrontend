import {
  Grid,
  MultiSelect,
  Select,
  Center,
  Checkbox,
  Button,
  Modal,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { IconCalendar } from "@tabler/icons-react";
import { useState } from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { addmeetingschema } from "./addMeetings.validation";

interface Props {
  opened: boolean;
  onClose: () => void;
  withCloseButton: boolean;
}

export function AddMeetingModal({ opened, onClose, withCloseButton }: Props) {
  const form = useForm({
    validate: yupResolver(addmeetingschema),
    initialValues: {
      participants: [],
      who_drink: [],
      place: null,
      date: null,
      kasyno: false,
      pizza: false,
    },
  });

  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [participants, setParticipants] = useState([]);
  const [whoDrink, setWhoDrink] = useState([]);
  const [options_who_drink, setOptionsWhoDrink] = useState([]);
  const [dateValue, setDateValue] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState([]);

  const meetingPlaces = ["a", "b"];
  // const places = async () => {
  //   const res = await fetch(PLACES, authHeaders);
  //     if (res.status === 401) throw new Error("An error occurred");
  //   return res.json();
  // };
  // const { data, error, isLoading } = useQuery("places", places);
  // const [meetingPlaces, setMeetingPlaces] = useState([]);
  // useEffect(() => {
  //   if (data) {
  //     const transformedData = data.map((item) => ({
  //       value: item,
  //       label: item,
  //     }));
  //     setMeetingPlaces(transformedData);
  //   }
  // }, [data]);

  const options = [
    { value: "1", label: "Szymon Kowalski" },
    { value: "2", label: "Daniel" },
    { value: "3", label: "Kuba" },
    { value: "4", label: "Krzysiek" },
    { value: "5", label: "Larox" },
    { value: "6", label: "Absonic" },
    { value: "7", label: "Daleki" },
    { value: "8", label: "Olek" },
    { value: "9", label: "Duży" },
    { value: "10", label: "Maro" },
    { value: "11", label: "Frevost" },
  ];
  const handleDateChange = (value) => {
    setDateValue(value);
    setSelectedDate(value);
  };
  const handleFirstMultiselectChange = (value) => {
    setParticipants(value);
    // Generate options for the second multiselect based on the selected options in the first multiselect
    const whoDrink_based_on_list = options.filter((option) =>
      value.includes(option.value)
    );
    setOptionsWhoDrink(whoDrink_based_on_list);
    form.setFieldValue(
      'participants', value
    )
  };
  const handleSecondMultiselectChange = (value) => {
    setWhoDrink(value);
    form.setFieldValue(
      'who_drink', value
    )
  };
  const sendNewMeeting = async (values) => {
    console.log(values);
    console.log("wyslano");
    form.reset()
    onClose();

  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={withCloseButton}
      centered
      size="auto"
    >
      <form onSubmit={form.onSubmit((values) => sendNewMeeting(values))}>
        <Grid>
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={isMobile ? 12 : 6}>
                <MultiSelect
                  size="xl"
                  value={participants}
                  data={options}
                  onChange={handleFirstMultiselectChange}
                  label="Uczestnicy"
                  mx="auto"
                  maw={300}
                  error={form.errors.participants}
                />
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 6}>
                <MultiSelect
                  size="xl"
                  value={whoDrink}
                  data={options_who_drink}
                  onChange={handleSecondMultiselectChange}
                  label="Pijący"
                  mx="auto"
                  maw={300}
                />
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 6}>
                <Select
                  size="lg"
                  label="Miejsce"
                  mx="auto"
                  maw={300}
                  data={opened ? meetingPlaces : ["a"]}
                  {...form.getInputProps('place')}

                />
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 6}>
                <DatePickerInput
                  size="lg"
                  icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                  label="Pick date"
                  clearable
                  value={dateValue}
                  onChange={handleDateChange}
                  mx="auto"
                  maw={300}
                  {...form.getInputProps('date')}

                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Center>
                  <Checkbox
                    labelPosition="left"
                    label="Kasyno"
                    description="Było grane?"
                    color="dark"
                    radius="xs"
                    size="xl"
                    {...form.getInputProps('kasyno')}

                  />
                </Center>
              </Grid.Col>
              <Grid.Col span={6}>
                <Center>
                  <Checkbox
                    labelPosition="left"
                    label="Pizza"
                    description="Była?"
                    color="red"
                    radius="xs"
                    size="xl"
                    {...form.getInputProps('pizza')}

                  />
                </Center>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={12}>
            <Center>
              <Button
                // onClick={sendNewMeeting}
                variant="gradient"
                gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
                size="lg"
                type="submit"
              >
                Wyślij
              </Button>
            </Center>
          </Grid.Col>
        </Grid>
      </form>
    </Modal>
  );
}
