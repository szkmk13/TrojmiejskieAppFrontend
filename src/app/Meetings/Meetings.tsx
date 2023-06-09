import {
  Button,
  Center,
  Checkbox,
  Grid,
  Modal,
  MultiSelect,
  ScrollArea,
  Select,
  Skeleton,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";

import MeetingsTable from "./components/MeetingsTable";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconCalendar } from "@tabler/icons-react";
import { useQuery } from "react-query";
import { PLACES, authHeaders } from "../../utils/api/api";

export default function Meetings() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [value, setValue] = useState<Date | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const places = async () => {
    const res = await fetch(PLACES, authHeaders);
    if (res.status === 401) throw new Error("An error occurred");
    return res.json();
  };
  const { data, error, isLoading } = useQuery("places", places);
  const [meetingPlaces, setMeetingPlaces] = useState([]);
  useEffect(() => {
    if (data) {
      const transformedData = data.map((item) => ({
        value: item,
        label: item,
      }));
      setMeetingPlaces(transformedData);
    }
  }, [data]);
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
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dependentOptions, setDependentOptions] = useState([]);
  const handleFirstMultiselectChange = (value) => {
    setSelectedOptions(value);
    // Generate options for the second multiselect based on the selected options in the first multiselect
    const dependentOptions = options.filter((option) => value.includes(option.value));
    setDependentOptions(dependentOptions);
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size="auto"
      >
        <Grid>
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={isMobile ? 12 : 6}>
                <MultiSelect
                  size="xl"
                  value={selectedOptions}
                  data={options}
                  onChange={handleFirstMultiselectChange}
                  label="Uczestnicy"
                  mx="auto"
                  maw={300}
                />
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 6}>
                <MultiSelect
                 
                  size="xl"
                  data={dependentOptions}
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
                />
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 6}>
                <DatePickerInput
                  size="lg"
                  icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                  label="Pick date"
                  clearable
                  defaultValue={new Date()}
                  value={value}
                  onChange={setValue}
                  mx="auto"
                  maw={300}
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
                  />
                </Center>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={12}>
            <Center>
              <Button
                variant="gradient"
                gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
                size="lg"
              >
                Wyślij
              </Button>
            </Center>
          </Grid.Col>
        </Grid>
      </Modal>

      <Grid justify="center">
        <ScrollArea type="scroll">
          <Grid.Col
            span={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="gradient"
              gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
              size="lg"
              onClick={open}
            >
              Dodaj nowy meeting
            </Button>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 8}>
            <MeetingsTable />
          </Grid.Col>
        </ScrollArea>
      </Grid>
    </>
  );
}
