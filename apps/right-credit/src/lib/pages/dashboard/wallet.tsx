import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import WalletComponent from '@shared/components/dashboard/pages/wallet';

const Wallet = () => {
  return (
    <DashboardLayout>
      <WalletComponent />
    </DashboardLayout>
  );
};

export default Wallet;
