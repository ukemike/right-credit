'use client';

import { Grid, GridItem, Box } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import CustomerHeader from '@shared/components/customers/CustomerHeader';
import CustomerProfile from '@shared/components/customers/CustomerProfile';
import CustomerTabs from '@shared/components/customers/CustomerTabs';
import DashboardLayout from '~/lib/components/layout/DashboardLayout';

const CreateCustomer = () => {
  const { customerId } = useParams();
  console.log(customerId, 'customerId');

  return (
    <DashboardLayout showSidebar={false}>
      <Box width="100%">
        <CustomerHeader title="Create New Customer" />

        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(7, 1fr)',
          }}
          gap={4}
          h="auto"
          w="100%"
        >
          <GridItem
            colSpan={{ base: 1, md: 1, lg: 2 }}
            h="auto"
            w="100%"
            boxShadow="sm"
            bg="white"
            borderRightWidth={{ base: 0, lg: 1 }}
            borderBottomWidth={{ base: 1, lg: 0 }}
            borderColor="border.300"
            p={4}
          >
            <CustomerProfile />
          </GridItem>

          <GridItem
            colSpan={{ base: 1, md: 1, lg: 5 }}
            h="auto"
            w="100%"
            p={4}
            overflowX="auto"
          >
            <CustomerTabs />
          </GridItem>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default CreateCustomer;
