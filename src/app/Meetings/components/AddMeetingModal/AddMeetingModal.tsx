import {
  Grid,
  MultiSelect,
  Select,
  Center,
  Checkbox,
  Button,
  Modal,
  Group,
  TextInput
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import { IconCalendar } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useForm, yupResolver } from "@mantine/form";
import { addmeetingschema } from "./addMeetings.validation";
import { APIROOT, PLACES } from "utils/api/api";
import { useQuery, useQueryClient } from "react-query";

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
      who_drank: [],
      place: null,
      place_other: '',
      date: null,
      kasyno: false,
      pizza: false,
    },
  });
  const queryClient = useQueryClient()

  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [participants, setParticipants] = useState([]);
  const [whoDrink, setWhoDrink] = useState([]);
  const [options_who_drank, setOptionsWhoDrink] = useState([]);
  const [place_other_visible, setPlaceOtherVisible] = useState(false);

  const [dateValue, setDateValue] = useState(new Date());
  // eslint-disable-next-line
  const [selectedDate, setSelectedDate] = useState([]);

  const places = async () => {
    const access_token = localStorage.getItem("access_token");

    const res = await fetch(PLACES, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
      if (res.status === 401) throw new Error("An error occurred");
    return res.json();
  };
  const { data:meetingplaces, error, isLoading } = useQuery("places", places);
  const [meetingPlaces, setMeetingPlaces] = useState([]);
  
  useEffect(() => {
    if (meetingplaces) {
      const transformedData = meetingplaces.map((item) => ({
        value: item,
        label: item,
      }));
      setMeetingPlaces(transformedData);
    }
  }, [meetingplaces]);

  const handlePlaceChange = (value) =>{
      console.log(value)
      if (value==='OTHER'){
        setPlaceOtherVisible(true)

        form.setFieldValue("place", value);
        form.setFieldValue("place_other", value);
      }
      form.setFieldValue("place", value);

      
  };
  const options = [
    { value: "11", label: "Szymon Kowalski" },
    { value: "3", label: "Daniel" },
    { value: "9", label: "Kuba" },
    { value: "5", label: "Krzysiek" },
    { value: "6", label: "Larox" },
    { value: "1", label: "Absonic" },
    { value: "2", label: "Daleki" },
    { value: "10", label: "Olek" },
    { value: "4", label: "Duży" },
    { value: "7", label: "Maro" },
    { value: "8", label: "Frevost" },
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
    form.setFieldValue("participants", value);
  };
  const handleSecondMultiselectChange = (value) => {
    setWhoDrink(value);
    form.setFieldValue("who_drank", value);
  };



  const sendNewMeeting = async (values) => {
    const access_token = localStorage.getItem("access_token");
    values.trojmiejski = localStorage.getItem("user_id");
    const payload = values;
    console.log(values.date)
    const res = await fetch(APIROOT + "meetings/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    })
    if (res.status === 201) {
      form.reset()
      onClose()
      queryClient.invalidateQueries(["pendingMettings"]);
      queryClient.invalidateQueries(["waitingMeetings"]);

      queryClient.invalidateQueries(["meetings"]);
    } else {
      const data = await res.json()
      alert(Object.entries(data));
    }

  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={withCloseButton}
      centered
      size="xl"
      yOffset={0}
      xOffset={10}
    >
      <form onSubmit={form.onSubmit((values) => sendNewMeeting(values))}>
        <Grid pb={160} pl={10} pr={10}>
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={isMobile ? 12 : 6}>
                <DatePickerInput
                  size="md"
                  icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                  label="Pick date"
                  clearable
                  value={dateValue}
                  onChange={handleDateChange}
                  mx="auto"
                  maw={300}
                  {...form.getInputProps("date")}
                />
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 6}>
                <Select
                  {...form.getInputProps("place")}
                  size="md"
                  label="Miejsce"
                  mx="auto"
                  maw={200}
                  onChange={handlePlaceChange}
                  data={opened ? meetingPlaces : ["a"]}
                />
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 6}>
                <MultiSelect
                  size="md"
                  value={participants}
                  data={options}
                  onChange={handleFirstMultiselectChange}
                  label="Uczestnicy"
                  mx="auto"
                  maw={300}
                  error={form.errors.participants}
                />
              </Grid.Col>
              {place_other_visible?<Grid.Col span={isMobile ? 12 : 6}>

<TextInput
  size="md"
  label="Miejsce"
  mx="auto"
  maw={300}
  {...form.getInputProps("place_other")}
/>
</Grid.Col>:<></>}
             
              <Grid.Col span={isMobile ? 12 : 6}>
                <MultiSelect
                  size="md"
                  value={whoDrink}
                  data={options_who_drank}
                  onChange={handleSecondMultiselectChange}
                  label="Pijący"
                  mx="auto"
                  maw={300}
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <Group position="center">
                  <Checkbox
                    labelPosition="left"
                    label="Kasyno"
                    description="Było grane?"
                    color="dark"
                    radius="xs"
                    size="xl"
                    {...form.getInputProps("kasyno")}
                  />

                  <Checkbox
                    labelPosition="left"
                    label="Pizza"
                    description="Była?"
                    color="red"
                    radius="xs"
                    size="xl"
                    {...form.getInputProps("pizza")}
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={12}>
            <Center>
              <Button
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
