import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import LAYOUT from 'constant';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import AuthForgotPassword from 'components/authentication/auth-forms/AuthForgotPassword';
import AuthFooter from 'ui-component/cards/AuthFooter';
import AuthWrapper2 from 'components/authentication/AuthWrapper2';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'ui-component/Logo';
import BackgroundPattern2 from 'ui-component/cards/BackgroundPattern2';
import AuthSlider from 'ui-component/cards/AuthSlider';
import { AuthSliderProps } from 'types';

// assets
const imgMain = '/assets/images/auth/img-a2-forgotpass.svg';

// carousel items
const items: AuthSliderProps[] = [
  {
    title: 'Power of React with Material UI',
    description: 'Powerful and easy to use multipurpose theme'
  },
  {
    title: 'Power of React with Material UI',
    description: 'Powerful and easy to use multipurpose theme'
  },
  {
    title: 'Power of React with Material UI',
    description: 'Powerful and easy to use multipurpose theme'
  }
];

// ============================|| AUTH2 - FORGOT PASSWORD ||============================ //

const ForgotPassword = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Page title="Forgot Password">
      <AuthWrapper2>
        <Grid container justifyContent={matchDownSM ? 'center' : 'space-between'} alignItems="center">
          <Grid item md={6} lg={7} xs={12} sx={{ minHeight: '100vh' }}>
            <Grid
              sx={{ minHeight: '100vh' }}
              container
              alignItems={matchDownSM ? 'center' : 'flex-start'}
              justifyContent={matchDownSM ? 'center' : 'space-between'}
            >
              <Grid item sx={{ display: { xs: 'none', md: 'block' }, m: 3 }}>
                <Link href="#" aria-label="theme-logo">
                  <Logo />
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: { xs: 'calc(100vh - 68px)', md: 'calc(100vh - 152px)' } }}
              >
                <Stack justifyContent="center" alignItems="center" spacing={5} m={2}>
                  <Box component={Link} href="#" sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Logo />
                  </Box>
                  <AuthCardWrapper border={matchDownMD}>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={12}>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Forgot password?
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign="center">
                            Enter your email address below and we&apos;ll send you password reset OTP.
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <AuthForgotPassword />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid item container direction="column" alignItems="center" xs={12}>
                          <Typography
                            component={Link}
                            href="/pages/authentication/auth2/login"
                            variant="subtitle1"
                            sx={{ textDecoration: 'none' }}
                          >
                            Already have an account?
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </AuthCardWrapper>
                </Stack>
              </Grid>
              <Grid item xs={12} sx={{ m: 3 }}>
                <AuthFooter />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} lg={5} sx={{ position: 'relative', alignSelf: 'stretch', display: { xs: 'none', md: 'block' } }}>
            <BackgroundPattern2>
              <Grid item container justifyContent="center">
                <Grid item xs={12}>
                  <Grid item container justifyContent="center" sx={{ pb: 8 }}>
                    <Grid item xs={10} lg={8} sx={{ '& .slick-list': { pb: 2 } }}>
                      <AuthSlider items={items} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Image src={imgMain} alt="Berry Dashboard" layout="intrinsic" width={300} height={340} />
                </Grid>
              </Grid>
            </BackgroundPattern2>
          </Grid>
        </Grid>
      </AuthWrapper2>
    </Page>
  );
};

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>;
};

export default ForgotPassword;
