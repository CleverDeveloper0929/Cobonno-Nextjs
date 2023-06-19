import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import BasicWizard from 'components/forms/forms-wizard/BasicWizard';
import ValidationWizard from 'components/forms/forms-wizard/ValidationWizard';
import { gridSpacing } from 'store/constant';

// ==============================|| FORMS WIZARD ||============================== //

const FormsWizard = () => (
  <Page title="Forms Wizard">
    <Grid container spacing={gridSpacing} justifyContent="center">
      <Grid item xs={12} md={9} lg={7}>
        <BasicWizard />
      </Grid>
      <Grid item xs={12} md={9} lg={7}>
        <ValidationWizard />
      </Grid>
    </Grid>
  </Page>
);

FormsWizard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default FormsWizard;
