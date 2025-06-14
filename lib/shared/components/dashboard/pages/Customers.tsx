'use client';

/* eslint-disable sonarjs/no-duplicate-string */

import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import CustomersTable from '../../customers/CustomersTable';
import Button from '../../ui/Button';

const CustomersComponent = () => {
  const router = useRouter();
  return (
    <Box bg="white" borderRadius="8px" boxShadow="sm" p={4}>
      <VStack
        alignItems="flex-start"
        spacing={0}
        borderBottom="1px solid #E5E7EB"
        pb="4"
      >
        <HStack justifyContent="space-between" w="100%">
          <VStack alignItems="flex-start" spacing={0}>
            <Text fontSize="xl" fontWeight="700" color="bodyText.100">
              Customers
            </Text>
            <Text fontSize="14px" fontWeight="400" color="bodyText.200">
              Manage customers from this page
            </Text>
          </VStack>

          <Button
            text="Create Customer"
            size="md"
            variant="outline"
            px={4}
            onClick={() => router.push('/dashboard/customers/create-customer')}
          />
        </HStack>
      </VStack>

      <CustomersTable />
    </Box>
  );
};

export default CustomersComponent;
