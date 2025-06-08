import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import ProfileComponent from '~/lib/components/dashboard/pages/profile';

const Profile = () => {
  return (
    <DashboardLayout>
      <ProfileComponent />
    </DashboardLayout>
  );
};

export default Profile;
