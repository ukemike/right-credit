import DashboardLayout from '@/lib/components/layout/DashboardLayout';
import DashboardComponent from '@shared/components/dashboard/pages/dashboard/Dashboard';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardComponent />
    </DashboardLayout>
  );
};

export default Dashboard;
