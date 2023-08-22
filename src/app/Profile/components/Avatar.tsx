import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  height: string;
}

export default function UserInfo({ avatar, name, title, phone, email, height }: UserInfoIconsProps) {
  const { classes } = useStyles();

  return (
    <div>
      <Group noWrap >
        <Avatar src={avatar} radius="md" size={height}/>
        <div>
          <Text fz="xl" tt="uppercase" fw={700} c="dimmed">
            {title}
          </Text>

          <Text fz={'40px'} fw={500} className={classes.name}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xl" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="6rem" className={classes.icon} />
            <Text fz="xl" c="dimmed">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}