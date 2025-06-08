import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import CustomersComponent from '~/lib/components/dashboard/pages/Customers';

const Customers = () => {
  return (
    <DashboardLayout>
      <CustomersComponent />
    </DashboardLayout>
  );
};

export default Customers;
