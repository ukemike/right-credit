import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import RiskReportComponent from '~/lib/components/dashboard/pages/risk-report/risk-report';

const RiskReport = () => {
  return (
    <DashboardLayout>
      <RiskReportComponent />
    </DashboardLayout>
  );
};

export default RiskReport;
