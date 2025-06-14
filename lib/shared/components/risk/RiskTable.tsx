import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Text,
  Box,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import EmptyState from '../EmptyState';
import { formatDate } from '@shared/utils/formatter';

type User = {
  jobId: string;
  customerDetails: string;
  type: string;
  idNumber: string;
  dateRequested: string;
  email: string;
  status: 'Pending' | 'Completed';
};

const usersData: User[] = [
  {
    jobId: '1234567890',
    customerDetails: 'John Doe',
    email: 'john.doe@example.com',
    type: 'NIN',
    idNumber: '1234567890',
    dateRequested: '2021-01-01',
    status: 'Pending',
  },
  {
    jobId: '2345678901',
    customerDetails: 'Jane Smith',
    email: 'jane.smith@example.com',
    type: 'BVN',
    idNumber: '2345678901',
    dateRequested: '2021-02-15',
    status: 'Completed',
  },
  {
    jobId: '3456789012',
    customerDetails: 'Michael Johnson',
    email: 'michael.j@example.com',
    type: 'NIN',
    idNumber: '3456789012',
    dateRequested: '2021-03-22',
    status: 'Pending',
  },
  {
    jobId: '4567890123',
    customerDetails: 'Sarah Williams',
    email: 'sarah.w@example.com',
    type: 'BVN',
    idNumber: '4567890123',
    dateRequested: '2021-04-10',
    status: 'Completed',
  },
  {
    jobId: '5678901234',
    customerDetails: 'David Brown',
    email: 'david.b@example.com',
    type: 'NIN',
    idNumber: '5678901234',
    dateRequested: '2021-05-05',
    status: 'Pending',
  },
];

const RiskTable = () => {
  const router = useRouter();

  return (
    <Box>
      {usersData.length === 0 ? (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No loan created yet"
            description="New loans created will be visible on this page"
            btnText="Create New Loan"
            onClick={() => router.push('/dashboard/loans/create-loan')}
          />
        </Box>
      ) : (
        <TableContainer bg="white">
          <Table size="sm">
            <Thead bg="#FAFAFA" borderTopWidth={1} borderTopColor="border.100">
              <Tr>
                <Th py={2}>
                  <HStack>
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color="bodyText.200"
                      textTransform="capitalize"
                    >
                      Job ID
                    </Text>
                  </HStack>
                </Th>
                <Th>
                  <HStack>
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color="bodyText.200"
                      textTransform="capitalize"
                    >
                      Customer details
                    </Text>
                  </HStack>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Type
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    ID number
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Date Requested
                  </Text>
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {usersData.map((user, index) => (
                <Tr
                  key={index}
                  _hover={{
                    bg: '#FAFAFA',
                  }}
                  cursor="pointer"
                >
                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                      {user.jobId}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <VStack alignItems="flex-start" spacing={0.5}>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.300"
                      >
                        {user.customerDetails}
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="400"
                        color="bodyText.100"
                      >
                        {user.email}
                      </Text>
                    </VStack>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {user.type}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {user.idNumber}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {formatDate(user.dateRequested)}
                    </Text>
                  </Td>
                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color={
                        user.status === 'Pending' ? '#F2994A' : 'green.500'
                      }
                    >
                      {user.status}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default RiskTable;
