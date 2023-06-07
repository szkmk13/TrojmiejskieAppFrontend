import { Center } from "@mantine/core";

interface Props {
  user: any;
}
export function MostRecentWord({ user }: Props) {
  return (
    <>
      <td>
        <Center>
          {user.most_used_word.words.length < 5 ? (
            <>
              {user.most_used_word.words.map((word) => (
                <span style={{ paddingRight: "5px" }}>{word}</span>
              ))}
              <span>{user.most_used_word.times}</span>
            </>
          ) : (
            <span>chłop spamuje</span>
          )}
        </Center>
      </td>
    </>
  );
}
