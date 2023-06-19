import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// charts
import ApexAreaChart from 'components/forms/chart/Apexchart/ApexAreaChart';
import ApexBarChart from 'components/forms/chart/Apexchart/ApexBarChart';
import ApexColumnChart from 'components/forms/chart/Apexchart/ApexColumnChart';
import ApexLineChart from 'components/forms/chart/Apexchart/ApexLineChart';
import ApexMixedChart from 'components/forms/chart/Apexchart/ApexMixedChart';
import ApexPieChart from 'components/forms/chart/Apexchart/ApexPieChart';
import ApexPolarChart from 'components/forms/chart/Apexchart/ApexPolarChart';
import ApexRedialBarChart from 'components/forms/chart/Apexchart/ApexRedialChart';

// ==============================|| APEX CHARTS ||============================== //

const Apexchart = () => (
  <Page title="Apexchart">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6} lg={6}>
        <MainCard title="Column Chart">
          <ApexColumnChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <MainCard title="Bar Chart">
          <ApexBarChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Line Chart">
          <ApexLineChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Mixed Chart">
          <ApexMixedChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <MainCard title="Redial Chart">
          <ApexRedialBarChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <MainCard title="Polar Chart">
          <ApexPolarChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <MainCard title="Pie Chart">
          <ApexPieChart />
        </MainCard>
      </Grid>
    </Grid>
  </Page>
);

Apexchart.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Apexchart;
