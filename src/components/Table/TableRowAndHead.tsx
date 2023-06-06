import { Center } from "@mantine/core";

interface Props {
  data: any;
}

export  function TableRow({ data }: Props) {
  return (
    <>
      <td>
        <Center>{data}</Center>
      </td>
    </>
  );
}

export  function TableHead({ data }: Props) {
    return (
      <>
        <th>
          <Center>{data}</Center>
        </th>
      </>
    );
  }
  