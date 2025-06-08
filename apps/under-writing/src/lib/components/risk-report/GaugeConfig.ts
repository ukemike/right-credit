// Create gauge chart configuration
export const createGaugeConfig = (
  score: number,
  maxScore: number,
  color: string,
  backgroundColor: string = '#E5E7EB'
) => {
  const remaining = maxScore - score;
  return {
    data: {
      datasets: [
        {
          data: [score, remaining],
          backgroundColor: [color, backgroundColor],
          borderWidth: 0,
          circumference: 200,
          rotation: 260,
          cutout: '80%',
          borderRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  };
};

// Risk label mapping
export const riskLabels = {
  bankStatement: { score: 728, label: 'Low Risk' },
  debtBurden: { score: 310, label: 'High Risk' },
  affordability: { score: 930, label: 'Very Low Risk' },
  creditBureau: { score: 520, label: 'Medium Risk' },
  incomeAssessment: { score: 160, label: 'Very High Risk' },
  location: { score: 850, label: 'Very Low Risk' },
};
