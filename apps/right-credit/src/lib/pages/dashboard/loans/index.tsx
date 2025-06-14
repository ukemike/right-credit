import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import LoansComponent from '@shared/components/dashboard/pages/loans';

const Loans = () => {
  return (
    <DashboardLayout>
      <LoansComponent />
    </DashboardLayout>
  );
};

export default Loans;
