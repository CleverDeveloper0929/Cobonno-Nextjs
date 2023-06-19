import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import SimpleList from 'components/ui-elements/basic/UIList/SimpleList';
import NestedList from 'components/ui-elements/basic/UIList/NestedList';
import FolderList from 'components/ui-elements/basic/UIList/FolderList';
import DisabledList from 'components/ui-elements/basic/UIList/DisabledList';
import RadioList from 'components/ui-elements/basic/UIList/RadioList';
import CustomList from 'components/ui-elements/basic/UIList/CustomList';
import SelectedListItem from 'components/ui-elements/basic/UIList/SelectedListItem';
import VirtualizedList from 'components/ui-elements/basic/UIList/VirtualizedList';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ================================|| UI LIST ||================================ //

const UIList = () => (
  <Page title="List">
    <MainCard title="List" secondary={<SecondaryAction link="https://next.material-ui.com/components/lists/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Basic">
            <SimpleList />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Nested List">
            <NestedList />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Selected List Item">
            <SelectedListItem />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Disabled List Item">
            <DisabledList />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Radio Button List">
            <RadioList />
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SubCard title="Folder List">
            <FolderList />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Custom Aligned List">
            <CustomList />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Scrollable List">
            <VirtualizedList />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  </Page>
);

UIList.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UIList;
