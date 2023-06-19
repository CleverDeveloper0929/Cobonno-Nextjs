// third party
import { Props as ChartProps } from 'react-apexcharts';

// ==============================|| WIDGET - CHART OPTIONS OBJECT ||============================== //

export const TotalLineCardChartOptions1: ChartProps = {
  chart: {
    type: 'area',
    height: 100,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#fff'],
  fill: {
    type: 'solid',
    opacity: 0.4
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  yaxis: {
    min: 0,
    max: 30
  },
  tooltip: {
    theme: 'dark',
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Total Sales'
      }
    },
    marker: {
      show: false
    }
  }
};

export const TotalLineCardChartOptions2: ChartProps = {
  chart: {
    type: 'area',
    height: 100,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#fff'],
  fill: {
    type: 'solid',
    opacity: 0.4
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  yaxis: {
    min: 0,
    max: 30
  },
  tooltip: {
    theme: 'dark',
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Total Status'
      }
    },
    marker: {
      show: false
    }
  }
};

export const TotalLineCardChartOptions3: ChartProps = {
  chart: {
    type: 'area',
    height: 100,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#fff'],
  fill: {
    type: 'solid',
    opacity: 0.4
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  yaxis: {
    min: 0,
    max: 30
  },
  tooltip: {
    theme: 'dark',
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Total Status'
      }
    },
    marker: {
      show: false
    }
  }
};

export const SalesLineCardChartOptions: ChartProps = {
  chart: {
    type: 'line',
    height: 115,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#fff'],

  stroke: {
    curve: 'smooth',
    width: 3
  },
  yaxis: {
    min: 20,
    max: 100
  },
  tooltip: {
    theme: 'dark',
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Sales/Order Per Day'
      }
    },
    marker: {
      show: false
    }
  }
};

export const MarketChartCardOptions: ChartProps = {
  chart: {
    id: 'market-sale-chart',
    height: 200,
    type: 'area',
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 80, 100]
    }
  },
  legend: {
    show: false
  },
  yaxis: {
    min: 1,
    max: 100,
    labels: {
      show: false
    }
  }
};

export const RevenueChartCardOptions: ChartProps = {
  chart: {
    id: 'revenue-chart',
    height: 228,
    type: 'donut'
  },
  dataLabels: {
    enabled: false
  },
  labels: ['Youtube', 'Facebook', 'Twitter'],
  legend: {
    show: true,
    position: 'bottom',
    fontFamily: 'inherit',
    labels: {
      colors: 'inherit'
    },
    itemMargin: {
      horizontal: 10,
      vertical: 10
    }
  }
};

export const SeoChartCardOptions1: ChartProps = {
  chart: {
    id: 'visit-chart',
    type: 'area',
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'solid',
    opacity: 0.3
  },
  markers: {
    size: 4,
    strokeWidth: 2,
    hover: {
      size: 6
    }
  },
  stroke: {
    curve: 'straight',
    width: 3
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: () => 'Visits :'
      }
    },
    marker: {
      show: false
    }
  }
};

export const SeoChartCardOptions2: ChartProps = {
  chart: {
    id: 'bounce-bar-chart',
    type: 'bar',
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: () => 'Bounce Rate :'
      }
    },
    marker: {
      show: false
    }
  }
};

export const SeoChartCardOptions3: ChartProps = {
  chart: {
    id: 'product-chart',
    type: 'area',
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'solid',
    opacity: 0
  },
  markers: {
    size: 4,
    strokeWidth: 2,
    hover: {
      size: 6
    }
  },
  stroke: {
    curve: 'straight',
    width: 3
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Products :'
      }
    },
    marker: {
      show: false
    }
  }
};

export const SeoChartCardOptions4: ChartProps = {
  chart: {
    id: 'user-analytics-chart',
    type: 'line',
    height: 30,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  yaxis: {
    min: -2,
    max: 5,
    labels: {
      show: false
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Analytics '
      }
    },
    marker: {
      show: false
    }
  }
};

export const SeoChartCardOptions5: ChartProps = {
  chart: {
    id: 'session-timeout-chart',
    type: 'line',
    height: 30,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  yaxis: {
    min: -2,
    max: 5,
    labels: {
      show: false
    }
  },
  tooltip: {
    theme: 'light',
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Timeout '
      }
    },
    marker: {
      show: false
    }
  }
};

export const SeoChartCardOptions6: ChartProps = {
  chart: {
    id: 'page-view-chart',
    type: 'line',
    height: 30,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  yaxis: {
    min: -2,
    max: 5,
    labels: {
      show: false
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'View '
      }
    },
    marker: {
      show: false
    }
  }
};

export const SeoChartCardOptions7: ChartProps = {
  chart: {
    id: 'page-session-chart',
    type: 'line',
    height: 30,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  yaxis: {
    min: -2,
    max: 5,
    labels: {
      show: false
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Session '
      }
    },
    marker: {
      show: false
    }
  }
};

export const SeoChartCardOptions8: ChartProps = {
  chart: {
    id: 'avg-session-chart',
    type: 'line',
    height: 30,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  yaxis: {
    min: -2,
    max: 5,
    labels: {
      show: false
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Avg. Session '
      }
    },
    marker: {
      show: false
    }
  }
};

export const SeoChartCardOptions9: ChartProps = {
  chart: {
    id: 'bounce-rate-chart',
    type: 'line',
    height: 30,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  yaxis: {
    min: -2,
    max: 5,
    labels: {
      show: false
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: (seriesName: string) => 'Bounce '
      }
    },
    marker: {
      show: false
    }
  }
};

export const ConversionsChartCardOptions: ChartProps = {
  chart: {
    id: 'new-stack-chart',
    type: 'bar',
    height: 260,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: () => 'Stock - '
      }
    },
    marker: {
      show: false
    }
  }
};

export const SatisfactionChartCardOptions: ChartProps = {
  chart: {
    id: 'satisfaction-chart',
    height: 300,
    type: 'pie'
  },
  labels: ['Fxtremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
  legend: {
    show: true,
    position: 'bottom',
    fontFamily: 'inherit',
    labels: {
      colors: 'inherit'
    }
  },
  dataLabels: {
    enabled: true,
    dropShadow: {
      enabled: false
    }
  }
};

export const AnalyticsChartCardOptions: ChartProps = {
  chart: {
    height: 224,
    type: 'bar',
    id: 'percentage-chart',
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '55%',
      distributed: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 0
  },
  xaxis: {
    categories: ['Desktop', 'Mobile', 'Tablet', 'Laptop']
  }
};
