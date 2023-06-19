import { useState, SyntheticEvent, ReactElement } from 'react';

import Link from 'Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Tab, Tabs } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import Profile from 'components/users/account-profile/Profile1/Profile';
import PersonalAccount from 'components/users/account-profile/Profile1/PersonalAccount';
import MyAccount from 'components/users/account-profile/Profile1/MyAccount';
import ChangePassword from 'components/users/account-profile/Profile1/ChangePassword';
import Settings from 'components/users/account-profile/Profile1/Settings';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';

// types
import { TabsProps } from 'types';

// tabs panel
function TabPanel({ children, value, index, ...other }: TabsProps) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// tabs option
const tabsOption = [
  {
    label: 'Profile',
    icon: <AccountCircleTwoToneIcon sx={{ fontSize: '1.3rem' }} />
  },
  {
    label: 'Personal Details',
    icon: <DescriptionTwoToneIcon sx={{ fontSize: '1.3rem' }} />
  },
  {
    label: 'My Account',
    icon: <LibraryBooksTwoToneIcon sx={{ fontSize: '1.3rem' }} />
  },
  {
    label: 'Change Password',
    icon: <LockTwoToneIcon sx={{ fontSize: '1.3rem' }} />
  },
  {
    label: 'Settings',
    icon: <MailTwoToneIcon sx={{ fontSize: '1.3rem' }} />
  }
];

// ==============================|| PROFILE 1 ||============================== //

const Profile1 = () => {
  const theme = useTheme();

  const [value, setValue] = useState<number>(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Page title="Profile 1">
      <MainCard>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="simple tabs example"
              variant="scrollable"
              sx={{
                mb: 3,
                '& a': {
                  minHeight: 'auto',
                  minWidth: 10,
                  py: 1.5,
                  px: 1,
                  mr: 2.25,
                  color: theme.palette.grey[600],
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                '& a.Mui-selected': {
                  color: theme.palette.primary.main
                },
                '& .MuiTabs-indicator': {
                  bottom: 2
                },
                '& a > svg': {
                  marginBottom: '0px !important',
                  mr: 1.25
                }
              }}
            >
              {tabsOption.map((tab, index) => (
                <Tab key={index} component={Link} href="#" icon={tab.icon} label={tab.label} {...a11yProps(index)} />
              ))}
            </Tabs>
            <TabPanel value={value} index={0}>
              <Profile />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <PersonalAccount />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <MyAccount />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ChangePassword />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Settings />
            </TabPanel>
          </Grid>
        </Grid>
      </MainCard>
    </Page>
  );
};

Profile1.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile1;
