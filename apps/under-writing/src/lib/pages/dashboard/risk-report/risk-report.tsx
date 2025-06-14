import DashboardLayout from '@/lib/components/layout/DashboardLayout';
import RiskReportComponent from '@shared/components/dashboard/pages/risk-report/risk-report';

const RiskReport = () => {
  return (
    <DashboardLayout>
      <RiskReportComponent />
    </DashboardLayout>
  );
};

export default RiskReport;
