import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import SimpleRating from 'components/ui-elements/advance/UIRating/SimpleRating';
import CustomizedRatings from 'components/ui-elements/advance/UIRating/CustomizedRatings';
import SizeRating from 'components/ui-elements/advance/UIRating/SizeRating';
import HalfRating from 'components/ui-elements/advance/UIRating/HalfRating';
import HoverRating from 'components/ui-elements/advance/UIRating/HoverRating';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ===============================|| UI RATING ||=============================== //

const UIRating = () => (
  <Page title="Rating">
    <MainCard title="Rating" secondary={<SecondaryAction link="https://next.material-ui.com/components/rating/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <SubCard title="Basic">
            <SimpleRating />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Customized Icon">
            <CustomizedRatings />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Size">
            <SizeRating />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Half">
            <HalfRating />
          </SubCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <SubCard title="Hover">
            <HoverRating />
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  </Page>
);

UIRating.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UIRating;
