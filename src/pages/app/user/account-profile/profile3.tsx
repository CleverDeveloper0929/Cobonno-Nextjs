import React, { ReactElement } from 'react';
import Link from 'Link';
// material-ui
import { Box, Tab, Tabs } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import Profile from 'components/users/account-profile/Profile3/Profile';
import Billing from 'components/users/account-profile/Profile3/Billing';
import Security from 'components/users/account-profile/Profile3/Security';
import Notifications from 'components/users/account-profile/Profile3/Notifications';
import MainCard from 'ui-component/cards/MainCard';

// types
import { TabsProps } from 'types';

// tabs
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

// ==============================|| PROFILE 3 ||============================== //

const Profile3 = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Page title="Profile 3">
      <MainCard title="Account">
        <div>
          <Tabs
            value={value}
            indicatorColor="primary"
            onChange={handleChange}
            sx={{
              mb: 3,
              minHeight: 'auto',
              '& button': {
                minWidth: 100
              },
              '& a': {
                minHeight: 'auto',
                minWidth: 10,
                py: 1.5,
                px: 1,
                mr: 2.25,
                color: 'grey.600'
              },
              '& a.Mui-selected': {
                color: 'primary.main'
              }
            }}
            aria-label="simple tabs example"
            variant="scrollable"
          >
            <Tab component={Link} href="#" label="Profile" {...a11yProps(0)} />
            <Tab component={Link} href="#" label="Billing" {...a11yProps(1)} />
            <Tab component={Link} href="#" label="Security" {...a11yProps(2)} />
            <Tab component={Link} href="#" label="Notifications" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Billing />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Security />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Notifications />
          </TabPanel>
        </div>
      </MainCard>
    </Page>
  );
};

Profile3.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile3;
