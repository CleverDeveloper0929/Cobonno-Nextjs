import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import SimpleSpeedDials from 'components/ui-elements/advance/UISpeeddial/SimpleSpeedDials';
import OpenIconSpeedDial from 'components/ui-elements/advance/UISpeeddial/OpenIconSpeedDial';
import SpeedDialTooltipOpen from 'components/ui-elements/advance/UISpeeddial/SpeedDialTooltipOpen';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// =============================|| UI SPEEDDIAL ||============================= //

const UISpeeddial = () => (
  <Page title="Speeddial">
    <MainCard title="Speeddial" secondary={<SecondaryAction link="https://next.material-ui.com/components/speed-dial/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={12} lg={6}>
          <SubCard title="Basic">
            <SimpleSpeedDials />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Custom Close Icon">
            <OpenIconSpeedDial />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Persistent Icon">
            <SpeedDialTooltipOpen />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  </Page>
);

UISpeeddial.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UISpeeddial;
