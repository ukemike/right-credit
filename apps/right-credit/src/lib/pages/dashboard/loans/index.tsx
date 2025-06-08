import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import LoansComponent from '~/lib/components/dashboard/pages/loans';

const Loans = () => {
  return (
    <DashboardLayout>
      <LoansComponent />
    </DashboardLayout>
  );
};

export default Loans;
