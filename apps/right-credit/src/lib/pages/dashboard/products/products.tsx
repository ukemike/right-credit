import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import ProductsComponent from '@shared/components/dashboard/pages/products';

const Products = () => {
  return (
    <DashboardLayout>
      <ProductsComponent />
    </DashboardLayout>
  );
};

export default Products;
