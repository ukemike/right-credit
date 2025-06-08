import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import DashboardComponent from '~/lib/components/dashboard/pages';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardComponent />
    </DashboardLayout>
  );
};

export default Dashboard;
