import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import CustomersComponent from '@shared/components/dashboard/pages/Customers';

const Customers = () => {
  return (
    <DashboardLayout>
      <CustomersComponent />
    </DashboardLayout>
  );
};

export default Customers;
