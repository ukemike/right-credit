import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import WalletComponent from '~/lib/components/dashboard/pages/wallet';

const Wallet = () => {
  return (
    <DashboardLayout>
      <WalletComponent />
    </DashboardLayout>
  );
};

export default Wallet;
