import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import BasicGrid from 'components/Grid/BasicGrid';
import MultipleBreakPoints from 'components/Grid/MultipleBreakPoints';
import SpacingGrid from 'components/Grid/SpacingGrid';
import ComplexGrid from 'components/Grid/ComplexGrid';
import AutoGrid from 'components/Grid/AutoGrid';
import ColumnsGrid from 'components/Grid/ColumnsGrid';
import NestedGrid from 'components/Grid/NestedGrid';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===============================|| GRID SYSTEM||=============================== //

const GridSystem = () => (
  <Page title="Grid System">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6}>
        <MainCard title="Basic Grid">
          <BasicGrid />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard title="Multiple Breakpoints">
          <MultipleBreakPoints />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard title="Spacing Grid">
          <SpacingGrid />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard title="Complex Grid">
          <ComplexGrid />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard title="Auto Grid">
          <AutoGrid />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainCard title="Column Grid">
          <ColumnsGrid />
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard title="Nested Grid">
          <NestedGrid />
        </MainCard>
      </Grid>
    </Grid>
  </Page>
);

GridSystem.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default GridSystem;
