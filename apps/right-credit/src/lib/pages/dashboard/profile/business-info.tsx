import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import BusinessInfoComponent from '@shared/components/dashboard/pages/profile/business-info';

const BusinessInfo = () => {
  return (
    <DashboardLayout>
      <BusinessInfoComponent />
    </DashboardLayout>
  );
};

export default BusinessInfo;
