import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import DataProtectionOfficerComponent from '@shared/components/dashboard/pages/profile/data-protection-officer';

const DataProtectionOfficer = () => {
  return (
    <DashboardLayout>
      <DataProtectionOfficerComponent />
    </DashboardLayout>
  );
};

export default DataProtectionOfficer;
