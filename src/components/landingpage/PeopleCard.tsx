import * as React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

// project import
import Avatar from 'ui-component/extended/Avatar';
import SubCard from 'ui-component/cards/SubCard';

// assets
const avatarImage = '/assets/images/landing/testaments';

// ==============================|| PEOPLE CARD ||============================== //

interface Props {
  id: number;
  name: string;
  image: string;
  tag: string;
  content: string;
  view: number;
}

const PeopleCard = ({ id, name, image, tag, content, view }: Props) => {
  const theme = useTheme();
  const peopleProfile = image && `${avatarImage}/${image}`;
  const color = ['primary', 'secondary', 'success', 'info', 'error', 'warning'];

  return (
    <SubCard
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'background.default',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale3d(1.02, 1.02, 1)',
          transition: 'all .4s ease-in-out'
        },
        opacity: view
      }}
    >
      <Stack spacing={2.5}>
        <Stack direction="row" spacing={2.5} alignItems="center">
          {image !== '' && <Avatar src={peopleProfile} sx={{ height: 40, width: 40, bgcolor: 'transparent' }} />}
          {image === '' && (
            <Avatar
              color={color[Math.floor(Math.random() * (5 - 0 + 1) + 0)]}
              alt="user images"
              src={peopleProfile}
              sx={{ height: 40, width: 40 }}
            >
              {name.slice(0, 1)}
            </Avatar>
          )}
          <Stack spacing={0}>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              {name}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
              {tag}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body1">{content}</Typography>
      </Stack>
    </SubCard>
  );
};

export default PeopleCard;
