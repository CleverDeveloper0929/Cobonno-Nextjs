import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

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

// assets
const imgMain = '/assets/images/auth/img-a2-checkmail.svg';

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

// ==============================|| AUTH2 - CHECK MAIL ||============================== //

const CheckMail = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Page title="Check Mail">
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
                            Check Mail
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign="center">
                            We have sent a password recover instructions to your email.
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <AnimateButton>
                          <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                            Open Mail
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
                  <Image alt="Auth method" src={imgMain} width={300} height={300} />
                </Grid>
              </Grid>
            </BackgroundPattern2>
          </Grid>
        </Grid>
      </AuthWrapper2>
    </Page>
  );
};

CheckMail.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>;
};

export default CheckMail;
