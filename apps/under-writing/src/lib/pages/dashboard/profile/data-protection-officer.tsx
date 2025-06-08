import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import DataProtectionOfficerComponent from '~/lib/components/dashboard/pages/profile/data-protection-officer';

const DataProtectionOfficer = () => {
  return (
    <DashboardLayout>
      <DataProtectionOfficerComponent />
    </DashboardLayout>
  );
};

export default DataProtectionOfficer;
