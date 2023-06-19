// material-ui
import { Grid, Typography } from '@mui/material';

// third-party
import dynamic from 'next/dynamic';
import { Props as ChartProps } from 'react-apexcharts';

// project imports
import useConfig from 'hooks/useConfig';
import MainCard from 'ui-component/cards/MainCard';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// =========================|| SATISFACTION CHART CARD ||========================= //

const SatisfactionChartCard = ({ chartData }: { chartData: ChartProps }) => {
  const { rtlLayout } = useConfig();

  return (
    <MainCard>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="subtitle1">Customer Satisfaction</Typography>
        </Grid>
        <Grid item sx={{ '& .apexcharts-legend-text': { marginLeft: rtlLayout ? '8px' : 'initial' } }}>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type={chartData.options?.chart?.type as ChartProps['type']}
            height={chartData.options?.chart?.height}
          />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default SatisfactionChartCard;
