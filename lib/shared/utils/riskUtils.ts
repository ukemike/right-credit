// Utility functions for risk assessment calculations

export const getRiskLevel = (score: number): string => {
  if (score >= 800) return 'Very Low Risk';
  if (score >= 700) return 'Low Risk';
  if (score >= 500) return 'Medium Risk';
  if (score >= 300) return 'High Risk';
  return 'Very High Risk';
};

export const getRiskColor = (score: number) => {
  if (score >= 800) return { bg: '#00783F1A', color: '#00783F' };
  if (score >= 700) return { bg: '#02CF6F1A', color: '#02CF6F' };
  if (score >= 500) return { bg: '#F2994A1A', color: '#F2994A' };
  if (score >= 300) return { bg: '#FF4F711A', color: '#FF4F71' };
  return { bg: '#C90B2F1A', color: '#C90B2F' };
};

export const formatScore = (score: number): string => {
  return `${Math.round(score)}/1000`;
};

export const calculateOverallRiskLevel = (weightedScore: number): string => {
  return getRiskLevel(weightedScore);
};

export const formatCurrencyFromNumber = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
