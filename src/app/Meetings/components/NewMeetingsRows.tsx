import { TableRow } from "./../../../components/Table/TableRowAndHead";
import { Button, Center } from "@mantine/core";

export default function NewMeetingsRows() {

  const data = [
    {
      id: 15,
      participants: [
        "Szymon Kowalski",
        "Krzysiek Wicki",
        "Karol Rynkowski",
        "Daniel Gołębiewski",
      ],
      date: "2023-03-31",
      confirmed: true,
      place: "Melina u Laroxa",
      other_place: null,
      pizza: true,
      kasyno: false,
    },
    {
      id: 16,
      participants: ["Daniel Gołębiewski", "Krzysiek Wicki", "Szymon Kowalski"],
      date: "2022-08-16",
      confirmed: false,
      place: "Ławka pod Tesco",
      other_place: null,
      pizza: false,
      kasyno: false,
    },
  ];
  

  // const getPendingMeetings = async () => {
  //   const res = await fetch(PENDING_MEETINGS_URL, authHeaders);
  //   if (res.status === 401) throw new Error("An error occurred");
  //   if (res.status === 200) return res.json();
  // };
  // const { data, error, isLoading } = useQuery("pendingMettings", getPendingMeetings);
  // if (error)
  //   return (
  //     <tr>
  //       <td colSpan={6}>
  //         <Center>Request Failed</Center>
  //       </td>
  //     </tr>
  //   );
  // if (isLoading)
  //   return (
  //     <>
  //       {[...Array(5)].map(() => (
  //         <tr>
  //           <td>
  //             {[...Array(3)].map(() => (
  //               <Skeleton height={8} radius="xl" mb={10} mt={10} />
  //             ))}
  //           </td>
  //           <td>
  //             <Skeleton height={8} radius="xl" />
  //           </td>
  //           <td>
  //             <Skeleton height={8} radius="xl" />
  //           </td>
  //           {[...Array(3)].map(() => (
  //             <td>
  //               <Center>
  //                 <Skeleton height={25} circle />
  //               </Center>
  //             </td>
  //           ))}
  //         </tr>
  //       ))}
  //     </>
  //   );
  

  
  if (data) return( 
  <>
  {data.map((meeting) => (
    <tr key={meeting.id}>
      <td style={{ whiteSpace: "nowrap" }}>
        {meeting.participants.map((user) => (
          <>
            <Center>{user}</Center>
          </>
        ))}
      </td>
      <TableRow data={meeting.date} />
      <TableRow
        data={
          meeting.other_place === null ? meeting.place : meeting.other_place
        }
      />
      <TableRow data={meeting.pizza ? "✔️" : "❌"} />
      <TableRow data={meeting.kasyno ? "✔️" : "❌"} />
      <TableRow
        data={
          <>
            <Button variant="outline" color="teal" radius="xl">
              ✔️
            </Button>
            <Button variant="outline" color="red" radius="xl" ml={20}>
              ❌
            </Button>
          </>
        }
      />
    </tr>
  ))}
  </>
  );

}
