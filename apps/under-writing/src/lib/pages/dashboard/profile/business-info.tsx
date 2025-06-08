import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import BusinessInfoComponent from '~/lib/components/dashboard/pages/profile/business-info';

const BusinessInfo = () => {
  return (
    <DashboardLayout>
      <BusinessInfoComponent />
    </DashboardLayout>
  );
};

export default BusinessInfo;
