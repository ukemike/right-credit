// Monthly inflow and outflow data
export const monthlyData = {
  labels: [
    'Jan 2025',
    'Feb 2025',
    'Mar 2025',
    'Apr 2025',
    'May 2025',
    'Jun 2025',
    'Jul 2025',
    'Aug 2025',
    'Sep 2025',
    'Oct 2025',
    'Nov 2025',
    'Dec 2025',
    'Jan 2025',
  ],
  inflow: [
    700000, 1800000, 1200000, 4000000, 700000, 700000, 1900000, 1350000,
    1350000, 700000, 1800000, 1350000, 1350000,
  ],
  outflow: [
    350000, 1150000, 700000, 3000000, 350000, 350000, 1150000, 350000, 700000,
    350000, 1150000, 1150000, 1150000,
  ],
};

// Weekly inflow and outflow data
export const weeklyData = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
  inflow: [1200000, 950000, 1500000, 2000000, 1300000, 1800000, 1600000],
  outflow: [850000, 600000, 900000, 1200000, 800000, 1100000, 950000],
};

// Bar chart configuration for monthly data
export const barChartConfig = {
  data: {
    labels: monthlyData.labels,
    datasets: [
      {
        label: 'Inflow',
        data: monthlyData.inflow,
        backgroundColor: '#344BFD',
        borderRadius: 4,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.7,
      },
      {
        label: 'Outflow',
        data: monthlyData.outflow,
        backgroundColor: '#FF955A',
        borderRadius: 4,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.7,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label(context: any) {
            return `${context.dataset.label}: ₦${context.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: '#767676',
        },
      },
      y: {
        grid: {
          color: '#E5E7EB',
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: '#767676',
          callback(value: any) {
            if (value >= 1000000) return `₦${(value / 1000000).toFixed(1)}m`;
            if (value >= 1000) return `₦${(value / 1000).toFixed(1)}k`;
            return `₦${value}`;
          },
        },
        beginAtZero: true,
      },
    },
  },
};

// Weekly bar chart configuration
export const weeklyBarChartConfig = {
  data: {
    labels: weeklyData.labels,
    datasets: [
      {
        label: 'Inflow',
        data: weeklyData.inflow,
        backgroundColor: '#344BFD',
        borderRadius: 4,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.7,
      },
      {
        label: 'Outflow',
        data: weeklyData.outflow,
        backgroundColor: '#FF955A',
        borderRadius: 4,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.7,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label(context: any) {
            return `${context.dataset.label}: ₦${context.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: '#767676',
        },
      },
      y: {
        grid: {
          color: '#E5E7EB',
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          color: '#767676',
          callback(value: any) {
            if (value >= 1000000) return `₦${(value / 1000000).toFixed(1)}m`;
            if (value >= 1000) return `₦${(value / 1000).toFixed(1)}k`;
            return `₦${value}`;
          },
        },
        beginAtZero: true,
      },
    },
  },
};
