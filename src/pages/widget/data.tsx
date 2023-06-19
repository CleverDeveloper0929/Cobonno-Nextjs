import { ReactElement } from 'react';

// material-ui
import { Button, CardActions, CardContent, Divider, Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import ToDoList from 'components/widget/Data/ToDoList';
import TrafficSources from 'components/widget/Data/TrafficSources';
import TeamMembers from 'components/widget/Data/TeamMembers';

import UserActivity from 'components/widget/Data/UserActivity';
import LatestMessages from 'components/widget/Data/LatestMessages';

import ProjectTable from 'components/widget/Data/ProjectTable';
import ProductSales from 'components/widget/Data/ProductSales';

import TasksCard from 'components/widget/Data/TasksCard';
import ApplicationSales from 'components/widget/Data/ApplicationSales';

import ActiveTickets from 'components/widget/Data/ActiveTickets';
import LatestPosts from 'components/widget/Data/LatestPosts';

import FeedsCard from 'components/widget/Data/FeedsCard';
import LatestCustomers from 'components/widget/Data/LatestCustomers';

import LatestOrder from 'components/widget/Data/LatestOrder';

import IncomingRequests from 'components/widget/Data/IncomingRequests';
import TotalRevenue from 'components/widget/Data/TotalRevenue';
import NewCustomers from 'components/widget/Data/NewCustomers';

import RecentTickets from 'components/widget/Data/RecentTickets';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===========================|| WIDGET DATA ||=========================== //

const WidgetData = () => (
  <Page title="Data Widget">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} lg={4} md={6}>
        <ToDoList />
      </Grid>
      <Grid item xs={12} lg={4} md={6}>
        <TrafficSources />
      </Grid>
      <Grid item xs={12} lg={4} md={12}>
        <TeamMembers />
      </Grid>

      <Grid item xs={12} md={7} lg={6}>
        <UserActivity />
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
        <LatestMessages />
      </Grid>

      <Grid item xs={12} lg={6} md={6}>
        <MainCard title="Projects" content={false}>
          <CardContent sx={{ p: 0 }}>
            <ProjectTable />
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="text" size="small">
              View all Projects
            </Button>
          </CardActions>
        </MainCard>
      </Grid>
      <Grid item xs={12} lg={6} md={6}>
        <ProductSales />
      </Grid>

      <Grid item xs={12} md={4}>
        <TasksCard />
      </Grid>
      <Grid item xs={12} md={8}>
        <ApplicationSales />
      </Grid>

      <Grid item xs={12} md={8}>
        <ActiveTickets />
      </Grid>
      <Grid item xs={12} md={4}>
        <LatestPosts />
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <FeedsCard />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <LatestCustomers />
      </Grid>

      <Grid item xs={12}>
        <LatestOrder />
      </Grid>

      <Grid item xs={12} lg={4} md={6}>
        <IncomingRequests />
      </Grid>
      <Grid item xs={12} lg={4} md={6}>
        <TotalRevenue />
      </Grid>
      <Grid item xs={12} lg={4} md={12}>
        <NewCustomers />
      </Grid>

      <Grid item xs={12} md={12} lg={8}>
        <RecentTickets />
      </Grid>
    </Grid>
  </Page>
);

WidgetData.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default WidgetData;
