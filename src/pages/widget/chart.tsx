import React, { useState, ReactElement } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// third party
import { Props as ChartProps } from 'react-apexcharts';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MarketSaleChartCard from 'components/widget/Chart/MarketSaleChartCard';
import RevenueChartCard from 'components/widget/Chart/RevenueChartCard';
import ConversionsChartCard from 'components/widget/Chart/ConversionsChartCard';
import SatisfactionChartCard from 'components/widget/Chart/SatisfactionChartCard';
import useConfig from 'hooks/useConfig';
import TotalLineChartCard from 'ui-component/cards/TotalLineChartCard';
import SeoChartCard from 'ui-component/cards/SeoChartCard';
import SalesLineChartCard from 'ui-component/cards/SalesLineChartCard';
import AnalyticsChartCard from 'ui-component/cards/AnalyticsChartCard';
import { gridSpacing } from 'store/constant';

// chart data
import {
  TotalLineCardChartOptions1,
  TotalLineCardChartOptions2,
  TotalLineCardChartOptions3,
  SalesLineCardChartOptions,
  MarketChartCardOptions,
  RevenueChartCardOptions,
  SeoChartCardOptions1,
  SeoChartCardOptions2,
  SeoChartCardOptions3,
  SeoChartCardOptions4,
  SeoChartCardOptions5,
  SeoChartCardOptions6,
  SeoChartCardOptions7,
  SeoChartCardOptions8,
  SeoChartCardOptions9,
  ConversionsChartCardOptions,
  SatisfactionChartCardOptions,
  AnalyticsChartCardOptions
} from 'components/widget/Chart/chart-options';

// assets
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import LaptopIcon from '@mui/icons-material/Laptop';

// ================================|| CHART ||================================ //

const Chart = () => {
  const theme = useTheme();

  const [totalLineCardChartSeries1] = useState([
    {
      name: 'series1',
      data: [20, 10, 18, 12, 25, 10, 20]
    }
  ]);
  const [totalLineCardChartSeries2] = useState([
    {
      name: 'series1',
      data: [10, 20, 18, 25, 12, 10, 20]
    }
  ]);
  const [totalLineCardChartSeries3] = useState([
    {
      name: 'series1',
      data: [20, 10, 18, 12, 25, 10, 20]
    }
  ]);

  const [salesLineCardChartSeries] = useState([
    {
      name: 'series1',
      data: [55, 35, 75, 25, 90, 50]
    }
  ]);

  const [marketChartCardSeries] = useState([
    {
      name: 'Youtube',
      data: [10, 90, 65, 85, 40, 80, 30]
    },
    {
      name: 'Facebook',
      data: [50, 30, 25, 15, 60, 10, 25]
    },
    {
      name: 'Twitter',
      data: [5, 50, 40, 55, 20, 40, 20]
    }
  ]);

  const [revenueChartCardSeries] = useState([1258, 975, 500]);

  const [seoChartCardSeries1] = useState([
    {
      name: 'series1',
      data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
    }
  ]);
  const [seoChartCardSeries2] = useState([
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
    }
  ]);
  const [seoChartCardSeries3] = useState([
    {
      name: 'series1',
      data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
    }
  ]);
  const [seoChartCardSeries4] = useState([
    {
      data: [2, 1, 2, 1, 1, 3, 0]
    }
  ]);
  const [seoChartCardSeries5] = useState([
    {
      data: [3, 0, 1, 2, 1, 1, 2]
    }
  ]);
  const [seoChartCardSeries6] = useState([
    {
      data: [2, 1, 2, 1, 1, 3, 0]
    }
  ]);
  const [seoChartCardSeries7] = useState([
    {
      data: [2, 1, 2, 1, 1, 3, 0]
    }
  ]);
  const [seoChartCardSeries8] = useState([
    {
      data: [2, 1, 2, 1, 1, 3, 0]
    }
  ]);
  const [seoChartCardSeries9] = useState([
    {
      data: [2, 1, 2, 1, 1, 3, 0]
    }
  ]);

  const [conversionsChartCardSeries] = useState([
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }
  ]);

  const [satisfactionChartCardSeries] = useState([66, 50, 40, 30]);

  const [analyticsChartCardSeries] = useState([
    {
      name: 'Requests',
      data: [66.6, 29.7, 32.8, 50]
    }
  ]);

  const [marketChartCardOptions, setMarketChartCardOptions] = useState<ChartProps>(MarketChartCardOptions);
  const [revenueChartCardOptions, setRevenueChartCardOptions] = useState<ChartProps>(RevenueChartCardOptions);
  const [seoChartCardOptions1, setSeoChartCardOptions1] = useState<ChartProps>(SeoChartCardOptions1);
  const [seoChartCardOptions2, setSeoChartCardOptions2] = useState<ChartProps>(SeoChartCardOptions2);
  const [seoChartCardOptions3, setSeoChartCardOptions3] = useState<ChartProps>(SeoChartCardOptions3);
  const [seoChartCardOptions4, setSeoChartCardOptions4] = useState<ChartProps>(SeoChartCardOptions4);
  const [seoChartCardOptions5, setSeoChartCardOptions5] = useState<ChartProps>(SeoChartCardOptions5);
  const [seoChartCardOptions6, setSeoChartCardOptions6] = useState<ChartProps>(SeoChartCardOptions6);
  const [seoChartCardOptions7, setSeoChartCardOptions7] = useState<ChartProps>(SeoChartCardOptions7);
  const [seoChartCardOptions8, setSeoChartCardOptions8] = useState<ChartProps>(SeoChartCardOptions8);
  const [seoChartCardOptions9, setSeoChartCardOptions9] = useState<ChartProps>(SeoChartCardOptions9);
  const [conversionsChartCardOptions, setConversionsChartCardOptions] = useState<ChartProps>(ConversionsChartCardOptions);
  const [satisfactionChartCardOptions, setSatisfactionChartCardOptions] = useState<ChartProps>(SatisfactionChartCardOptions);
  const [analyticsChartCardOptions, setAnalyticsChartCardOptions] = useState<ChartProps>(AnalyticsChartCardOptions);

  const { navType } = useConfig();

  const backColor = theme.palette.background.paper;
  const secondary = theme.palette.secondary.main;
  const error = theme.palette.error.main;
  const primary = theme.palette.primary.main;
  const successDark = theme.palette.success.dark;
  const orange = theme.palette.orange.main;
  const orangeDark = theme.palette.orange.dark;

  React.useEffect(() => {
    setAnalyticsChartCardOptions((prevState: any) => ({
      ...prevState,
      colors: [primary, successDark, error, orangeDark],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setMarketChartCardOptions((prevState: any) => ({
      ...prevState,
      colors: [secondary, error, primary],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setRevenueChartCardOptions((prevState: any) => ({
      ...prevState,
      colors: [error, primary, secondary],
      stroke: {
        colors: [backColor]
      }
    }));

    setSeoChartCardOptions1((prevState: any) => ({
      ...prevState,
      colors: [primary],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setSeoChartCardOptions2((prevState: any) => ({
      ...prevState,
      colors: [successDark],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setSeoChartCardOptions3((prevState: any) => ({
      ...prevState,
      colors: [error],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setSeoChartCardOptions4((prevState: any) => ({
      ...prevState,
      colors: [orange],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setSeoChartCardOptions5((prevState: any) => ({
      ...prevState,
      colors: [secondary],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setSeoChartCardOptions6((prevState: any) => ({
      ...prevState,
      colors: [error],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setSeoChartCardOptions7((prevState: any) => ({
      ...prevState,
      colors: [secondary],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setSeoChartCardOptions8((prevState: any) => ({
      ...prevState,
      colors: [primary],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setSeoChartCardOptions9((prevState: any) => ({
      ...prevState,
      colors: [successDark],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setConversionsChartCardOptions((prevState: any) => ({
      ...prevState,
      colors: [secondary],
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      }
    }));

    setSatisfactionChartCardOptions((prevState: any) => ({
      ...prevState,
      theme: {
        monochrome: {
          enabled: true,
          color: orangeDark
        }
      },
      stroke: {
        colors: [backColor]
      }
    }));
  }, [navType, backColor, secondary, error, primary, successDark, orange, orangeDark]);

  return (
    <Page title="Chart Widget">
      <Grid container spacing={gridSpacing} alignItems="center">
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineChartCard
            chartData={{ series: totalLineCardChartSeries1, options: TotalLineCardChartOptions1 }}
            value={4000}
            title="Total Sales"
            percentage="42%"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineChartCard
            chartData={{ series: totalLineCardChartSeries2, options: TotalLineCardChartOptions2 }}
            bgColor={theme.palette.error.main}
            value={2500}
            title="Total Comment"
            percentage="15%"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineChartCard
            chartData={{ series: totalLineCardChartSeries3, options: TotalLineCardChartOptions3 }}
            bgColor={theme.palette.success.dark}
            value={2500}
            title="Total Status"
            percentage="95%"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalLineChartCard
            chartData={{ series: totalLineCardChartSeries3, options: TotalLineCardChartOptions3 }}
            bgColor={theme.palette.secondary.main}
            value={12500}
            title="Total Visitors"
            percentage="75%"
          />
        </Grid>

        <Grid item xs={12} md={6} lg={7}>
          <MarketSaleChartCard chartData={{ series: marketChartCardSeries, options: marketChartCardOptions }} />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <RevenueChartCard chartData={{ series: revenueChartCardSeries, options: revenueChartCardOptions }} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={{ series: seoChartCardSeries4, options: seoChartCardOptions4 }} value={798} title="Users" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={{ series: seoChartCardSeries5, options: seoChartCardOptions5 }} value={486} title="Timeout" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={{ series: seoChartCardSeries6, options: seoChartCardOptions6 }} value="9, 454" title="Views" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard type={1} chartData={{ series: seoChartCardSeries7, options: seoChartCardOptions7 }} value={7.15} title="Session" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard
            type={1}
            chartData={{ series: seoChartCardSeries8, options: seoChartCardOptions8 }}
            value="04:30"
            title="Avg. Session"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SeoChartCard
            type={1}
            chartData={{ series: seoChartCardSeries9, options: seoChartCardOptions9 }}
            value="1.55%"
            title="Bounce Rate"
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <SalesLineChartCard
            chartData={{ series: salesLineCardChartSeries, options: SalesLineCardChartOptions }}
            bgColor={theme.palette.error.main}
            title="Sales Per Day"
            percentage="3%"
            icon={<TrendingDownIcon />}
            footerData={[
              {
                value: '$4230',
                label: 'Total Revenue'
              },
              {
                value: '321',
                label: 'Today Sales'
              }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SalesLineChartCard
            chartData={{ series: salesLineCardChartSeries, options: SalesLineCardChartOptions }}
            title="Order Per Month"
            percentage="28%"
            icon={<TrendingDownIcon />}
            footerData={[
              {
                value: '1695',
                label: 'Total Orders'
              },
              {
                value: '321',
                label: 'Today Orders'
              }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <AnalyticsChartCard
            chartData={{ series: analyticsChartCardSeries, options: analyticsChartCardOptions }}
            title="Page view by device"
            dropData={{
              title: 'Weekly',
              options: [
                {
                  value: 1,
                  label: '1 Week'
                },
                {
                  value: 104,
                  label: '2 Years'
                },
                {
                  value: 12,
                  label: '3 Monthes'
                }
              ]
            }}
            listData={[
              {
                color: theme.palette.primary.main,
                icon: <ImportantDevicesIcon color="inherit" fontSize="small" />,
                value: 66.6,
                percentage: 2,
                state: 1
              },
              {
                color: theme.palette.success.dark,
                icon: <PhonelinkLockIcon color="inherit" fontSize="small" />,
                value: 29.7,
                percentage: 3,
                state: 1
              },
              {
                color: theme.palette.error.main,
                icon: <TabletAndroidIcon color="inherit" fontSize="small" />,
                value: 32.8,
                percentage: 8,
                state: 0
              },
              {
                color: theme.palette.orange.dark,
                icon: <LaptopIcon color="inherit" fontSize="small" />,
                value: 50.2,
                percentage: 5,
                state: 1
              }
            ]}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <SeoChartCard
            chartData={{ series: seoChartCardSeries1, options: seoChartCardOptions1 }}
            value="$16, 756"
            title="Visits"
            icon={<ArrowDropDownIcon color="error" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <SeoChartCard
            chartData={{ series: seoChartCardSeries2, options: seoChartCardOptions2 }}
            value="49.54%"
            title="Bounce Rate"
            icon={<ArrowDropUpIcon color="primary" />}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <SeoChartCard
            chartData={{ series: seoChartCardSeries3, options: seoChartCardOptions3 }}
            value="1, 62,564"
            title="Products"
            icon={<ArrowDropDownIcon color="error" />}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <ConversionsChartCard chartData={{ series: conversionsChartCardSeries, options: conversionsChartCardOptions }} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <SatisfactionChartCard chartData={{ series: satisfactionChartCardSeries, options: satisfactionChartCardOptions }} />
        </Grid>
      </Grid>
    </Page>
  );
};

Chart.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Chart;
