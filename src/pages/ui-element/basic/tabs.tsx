import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import SimpleTabs from 'components/ui-elements/basic/UITabs/SimpleTabs';
import ColorTabs from 'components/ui-elements/basic/UITabs/ColorTabs';
import DisabledTabs from 'components/ui-elements/basic/UITabs/DisabledTabs';
import IconTabs from 'components/ui-elements/basic/UITabs/IconTabs';
import VerticalTabs from 'components/ui-elements/basic/UITabs/VerticalTabs';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ================================|| UI TABS ||================================ //

const UITabs = () => (
  <Page title="Tabs">
    <MainCard title="Tabs" secondary={<SecondaryAction link="https://next.material-ui.com/components/tabs/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <SubCard title="Basic">
            <SimpleTabs />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Color Tab">
            <ColorTabs />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Icon Tabs">
            <IconTabs />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Disabled Tabs">
            <DisabledTabs />
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <SubCard title="Vertical Tabs">
            <VerticalTabs />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  </Page>
);

UITabs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UITabs;
