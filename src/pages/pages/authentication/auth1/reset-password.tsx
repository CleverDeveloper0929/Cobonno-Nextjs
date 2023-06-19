import { ReactElement } from 'react';
import Link from 'Link';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import LAYOUT from 'constant';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import AuthResetPassword from 'components/authentication/auth-forms/AuthResetPassword';
import AuthWrapper1 from 'components/authentication/AuthWrapper1';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'ui-component/Logo';
import BackgroundPattern1 from 'ui-component/cards/BackgroundPattern1';
import AuthSlider from 'ui-component/cards/AuthSlider';
import { AuthSliderProps } from 'types';

// assets
const AuthErrorCard = '/assets/images/auth/auth-reset-error-card.svg';
const AuthPurpleCard = '/assets/images/auth/auth-reset-purple-card.svg';

// styles
const PurpleWrapper = styled('span')(({ theme }) => ({
  '&:after': {
    content: '""',
    position: 'absolute',
    top: '35%',
    left: '35%',
    width: 400,
    height: 400,
    backgroundImage: `url(${AuthPurpleCard})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    animation: '15s wings ease-in-out infinite',
    [theme.breakpoints.down('xl')]: {
      left: '25%',
      top: '35%'
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '12%',
    left: '25%',
    width: 400,
    height: 270,
    backgroundImage: `url(${AuthErrorCard})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    animation: '15s wings ease-in-out infinite',
    animationDelay: '1s',
    [theme.breakpoints.down('xl')]: {
      top: '10%',
      left: '15%'
    }
  }
}));

// carousel items
const items: AuthSliderProps[] = [
  {
    title: 'Configurable Elements, East to Setup',
    description: 'Powerful and easy to use multipurpose theme'
  },
  {
    title: 'Configurable Elements, East to Setup',
    description: 'Powerful and easy to use multipurpose theme'
  },
  {
    title: 'Configurable Elements, East to Setup',
    description: 'Powerful and easy to use multipurpose theme'
  }
];

// ============================|| AUTH1 - RESET PASSWORD ||============================ //

const ResetPassword = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Page title="Reset Password">
      <AuthWrapper1>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh' }}>
          <Grid item container justifyContent="center" md={6} lg={7} sx={{ my: 3 }}>
            <AuthCardWrapper>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                  <Grid
                    container
                    direction={matchDownSM ? 'column-reverse' : 'row'}
                    alignItems={matchDownSM ? 'center' : 'inherit'}
                    justifyContent={matchDownSM ? 'center' : 'space-between'}
                  >
                    <Grid item>
                      <Stack justifyContent={matchDownSM ? 'center' : 'flex-start'} textAlign={matchDownSM ? 'center' : 'inherit'}>
                        <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                          Reset Password
                        </Typography>
                        <Typography color="textPrimary" gutterBottom variant="h4">
                          Please choose new password.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item sx={{ mb: { xs: 3, sm: 0 } }}>
                      <Link href="#" aria-label="theme-logo">
                        <Logo />
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <AuthResetPassword />
                </Grid>
              </Grid>
            </AuthCardWrapper>
          </Grid>
          <Grid item md={6} lg={5} sx={{ position: 'relative', alignSelf: 'stretch', display: { xs: 'none', md: 'block' } }}>
            <BackgroundPattern1>
              <Grid item container alignItems="flex-end" justifyContent="center" spacing={3}>
                <Grid item xs={12}>
                  <span />
                  <PurpleWrapper />
                </Grid>
                <Grid item xs={12}>
                  <Grid item container justifyContent="center" sx={{ pb: 8 }}>
                    <Grid item xs={10} lg={8} sx={{ '& .slick-list': { pb: 2 } }}>
                      <AuthSlider items={items} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </BackgroundPattern1>
          </Grid>
        </Grid>
      </AuthWrapper1>
    </Page>
  );
};

ResetPassword.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>;
};

export default ResetPassword;
