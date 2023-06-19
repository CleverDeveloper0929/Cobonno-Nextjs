import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import FileSystemNavigator from 'components/ui-elements/advance/UITreeview/FileSystemNavigator';
import MultiSelectTreeView from 'components/ui-elements/advance/UITreeview/MultiSelectTreeView';
import ControlledTreeView from 'components/ui-elements/advance/UITreeview/ControlledTreeView';
import RecursiveTreeView from 'components/ui-elements/advance/UITreeview/RecursiveTreeView';
import CustomizedTreeView from 'components/ui-elements/advance/UITreeview/CustomizedTreeView';
import GmailTreeView from 'components/ui-elements/advance/UITreeview/GmailTreeView';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| UI TREEVIEW ||============================== //

const UITreeview = () => (
  <Page title="Treeview">
    <MainCard title="Treeview" secondary={<SecondaryAction link="https://next.material-ui.com/components/tree-view/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6} lg={4}>
          <SubCard title="Basic">
            <FileSystemNavigator />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SubCard title="Multi Selection">
            <MultiSelectTreeView />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SubCard title="Controlled">
            <ControlledTreeView />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SubCard title="Recursive">
            <RecursiveTreeView />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SubCard title="Customized">
            <CustomizedTreeView />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SubCard title="Gmail Clone">
            <GmailTreeView />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  </Page>
);

UITreeview.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UITreeview;
