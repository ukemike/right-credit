import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import ProductsComponent from '~/lib/components/dashboard/pages/products';

const Products = () => {
  return (
    <DashboardLayout>
      <ProductsComponent />
    </DashboardLayout>
  );
};

export default Products;
