import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import ProfileComponent from '@shared/components/dashboard/pages/profile';

const Profile = () => {
  return (
    <DashboardLayout>
      <ProfileComponent />
    </DashboardLayout>
  );
};

export default Profile;
