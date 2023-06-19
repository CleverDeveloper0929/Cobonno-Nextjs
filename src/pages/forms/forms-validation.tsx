import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import LoginForms from 'components/forms/forms-validation/LoginForms';
import InstantFeedback from 'components/forms/forms-validation/InstantFeedback';
import RadioGroupForms from 'components/forms/forms-validation/RadioGroupForms';
import CheckboxForms from 'components/forms/forms-validation/CheckboxForms';
import SelectForms from 'components/forms/forms-validation/SelectForms';
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import { gridSpacing } from 'store/constant';

// ==============================|| FORMS VALIDATION - FORMIK ||============================== //

const FormsValidation = () => (
  <Page title="Form Validation">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6}>
        <LoginForms />
      </Grid>
      <Grid item xs={12} md={6}>
        <InstantFeedback />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioGroupForms />
      </Grid>
      <Grid item xs={12} md={6}>
        <CheckboxForms />
      </Grid>
      <Grid item xs={12} md={6}>
        <SelectForms />
      </Grid>
      <Grid item xs={12} md={6}>
        <AutocompleteForms />
      </Grid>
    </Grid>
  </Page>
);

FormsValidation.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default FormsValidation;
