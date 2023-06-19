import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import LAYOUT from 'constant';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import AuthFooter from 'ui-component/cards/AuthFooter';
import AuthWrapper2 from 'components/authentication/AuthWrapper2';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AnimateButton from 'ui-component/extended/AnimateButton';
import BackgroundPattern2 from 'ui-component/cards/BackgroundPattern2';
import AuthSlider from 'ui-component/cards/AuthSlider';
import { AuthSliderProps } from 'types';
import AuthCodeVerification from 'components/authentication/auth-forms/AuthCodeVerification';

// assets
const imgMain = '/assets/images/auth/img-a2-codevarify.svg';

// carousel items
const items: AuthSliderProps[] = [
  {
    title: 'Powerful and easy to use multi-purpose theme.',
    description: 'Powerful and easy to use multipurpose theme'
  },
  {
    title: 'Powerful and easy to use multi-purpose theme.',
    description: 'Powerful and easy to use multipurpose theme'
  },
  {
    title: 'Powerful and easy to use multi-purpose theme.',
    description: 'Powerful and easy to use multipurpose theme'
  }
];

// ===========================|| AUTH2 - CODE VERIFICATION ||=========================== //

const CodeVerification = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Page title="Code Verification">
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
                            Enter Verification Code
                          </Typography>
                          <Typography variant="subtitle1" fontSize="1rem">
                            We send you on mail.
                          </Typography>
                          <Typography variant="caption" fontSize="0.875rem" textAlign="center">
                            We’ve send you code on john.****@company.com
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <AuthCodeVerification />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <Grid item xs={12}>
                        <Grid item container direction="column" alignItems="center" xs={12}>
                          <Typography component={Link} href="#" variant="subtitle1" sx={{ textAlign: 'center', textDecoration: 'none' }}>
                            Did not receive the email? Check your spam filter, or
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <AnimateButton>
                          <Button disableElevation fullWidth size="large" type="submit" variant="outlined" color="secondary">
                            Resend Code
                          </Button>
                        </AnimateButton>
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
                <Grid
                  item
                  style={{
                    maxWidth: '100%',
                    margin: '0 auto',
                    display: 'block',
                    textAlign: 'center'
                  }}
                  xs={12}
                >
                  <Image alt="Auth method" src={imgMain} layout="intrinsic" width={300} height={340} />
                </Grid>
              </Grid>
            </BackgroundPattern2>
          </Grid>
        </Grid>
      </AuthWrapper2>
    </Page>
  );
};

CodeVerification.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>;
};

export default CodeVerification;
