import { MostRecentWord } from "./MostRecentWord";
import { Trojmiejski } from "./Trojmiejski";
import { TableRow } from "./../../../../components/Table/TableRowAndHead";
import { TrojmiejskiModal } from "./TrojmiejskiModal";
import { useDisclosure } from "@mantine/hooks";


export default function TableRows() {
  const [opened, { open, close }] = useDisclosure(false);

  const users = [
    {
      id: 1,
      url: "http://localhost:8010/api/users/1/",
      username: "szymek",
      profile_picture:
        "https://szymon.kowalski.cybulski.dev/media/profile_pictures/Larox_generate_a_guy_around_25_years_old_ginger_hair_works_as_c_4.png",
      total_chat_messages: 4,
      total_words: 312321,
      most_used_word: {
        words: ["seima"],
        times: 2,
      },
      total_photos: 10,
      total_reactions: 21,
      total_feet: 30,
      total_points: 13412,
    },
    {
      id: 2,
      url: "http://localhost:8010/api/users/1/",
      username: "krzysiem",
      profile_picture:
        "https://szymon.kowalski.cybulski.dev/media/profile_pictures/Larox_generate_a_guy_around_25_years_old_ginger_hair_works_as_c_4.png",
      total_chat_messages: 83,
      total_words: 286,
      most_used_word: {
        words: ["to", "na", "sie"],
        times: 75,
      },
      total_photos: 0,
      total_reactions: 41,
      total_feet: 0,
      total_points: 147,
    },
  ];

  const rows = users.map((user) => (
    <>
      <tr key={user.id}>
        <Trojmiejski user={user} />
        <TableRow data={user.total_chat_messages} />
        <TableRow data={user.total_words} />
        <MostRecentWord user={user} />
        <TableRow data={user.total_photos} />
        <TableRow data={user.total_feet} />
        <TableRow data={user.total_reactions} />
        <TableRow data={user.total_points} />
      </tr>
    </>
  ));
  return <>{rows}</>;
}
