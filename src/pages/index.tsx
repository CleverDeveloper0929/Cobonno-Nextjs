import { ReactElement } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import HeaderSection from 'components/landingpage/HeaderSection';
import CardSection from 'components/landingpage/CardSection';
import CustomizeSection from 'components/landingpage/CustomizeSection';
import FeatureSection from 'components/landingpage/FeatureSection';
import PreBuildDashBoard from 'components/landingpage/PreBuildDashBoard';
import PeopleSection from 'components/landingpage/PeopleSection';
import StartupProjectSection from 'components/landingpage/StartupProjectSection';
// import IncludeSection from 'components/landingpage/IncludeSection';
// import RtlInfoSection from 'components/landingpage/RtlInfoSection';
import FrameworkSection from 'components/landingpage/FrameworkSection';
import FooterSection from 'components/landingpage/FooterSection';
import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  background:
    theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`,
  [theme.breakpoints.down('md')]: {}
}));

const SectionWrapper = styled('div')({
  paddingTop: 100,
  paddingBottom: 100
});

// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
  const theme = useTheme();

  return (
    <Page title="Welcome">
      {/* 1. header and hero section */}
      <HeaderWrapper id="home">
        <AppBar />
        <HeaderSection />
      </HeaderWrapper>

      {/* 2. card section */}
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
        <CardSection />
      </SectionWrapper>

      {/* 4. Developer Experience section */}
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
        <CustomizeSection />
      </SectionWrapper>

      {/* 3. about section */}
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
        <FeatureSection />
      </SectionWrapper>

      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
        <PreBuildDashBoard />
      </SectionWrapper>

      {/* 5. people section */}
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
        <PeopleSection />
      </SectionWrapper>

      {/* 6. startup section */}
      <SectionWrapper sx={{ py: 0 }}>
        <StartupProjectSection />
      </SectionWrapper>

      {/* multi-language section */}
      {/* <SectionWrapper sx={{ py: 0 }}>
        <RtlInfoSection />
      </SectionWrapper> */}

      {/* framework section */}
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
        <FrameworkSection />
      </SectionWrapper>
      {/* footer section */}
      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        <FooterSection />
      </SectionWrapper>
      <Customization />
    </Page>
  );
};

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="minimal">{page}</Layout>;
};

export default Landing;
