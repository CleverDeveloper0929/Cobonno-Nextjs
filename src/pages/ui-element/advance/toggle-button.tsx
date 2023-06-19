import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import ExclusiveToggleButtons from 'components/ui-elements/advance/UIToggleButton/ExclusiveToggleButtons';
import ToggleButtonsMultiple from 'components/ui-elements/advance/UIToggleButton/ToggleButtonsMultiple';
import StandaloneToggleButton from 'components/ui-elements/advance/UIToggleButton/StandaloneToggleButton';
import ToggleButtonSizes from 'components/ui-elements/advance/UIToggleButton/ToggleButtonSizes';
import VerticalToggleButtons from 'components/ui-elements/advance/UIToggleButton/VerticalToggleButtons';
import ToggleButtonNotEmpty from 'components/ui-elements/advance/UIToggleButton/ToggleButtonNotEmpty';
import CustomizedDividers from 'components/ui-elements/advance/UIToggleButton/CustomizedDividers';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ============================|| UI TOGGLE BUTTON ||============================ //

const UIToggleButton = () => (
  <Page title="Toggle Button">
    <MainCard title="Toggle Button" secondary={<SecondaryAction link="https://next.material-ui.com/components/toggle-button/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Exclusive Selection">
            <ExclusiveToggleButtons />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Multiple Selection">
            <ToggleButtonsMultiple />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Standalone">
            <StandaloneToggleButton />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Sizes">
            <ToggleButtonSizes />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Enforce Value Set">
            <ToggleButtonNotEmpty />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Vertical">
            <VerticalToggleButtons />
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <SubCard title="Customized">
            <CustomizedDividers />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  </Page>
);

UIToggleButton.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UIToggleButton;
