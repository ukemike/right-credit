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
  Avatar,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import EmptyState from '../EmptyState';
import Button from '../ui/Button';
import { formatCurrency, formatDate } from '@shared/utils/formatter';

type User = {
  fullName: string;
  email: string;
  amount: number;
  totalRepaid: number;
  dateCompleted: string;
  repayments: string;
};

const usersData: User[] = [
  {
    fullName: 'Margaret Kolapo',
    email: 'lagosboy@gmail.com',
    amount: 100000,
    totalRepaid: 100000,
    dateCompleted: '2025-03-22',
    repayments: '07/12',
  },
  {
    fullName: 'John Smith',
    email: 'johnsmith@example.com',
    amount: 75000,
    totalRepaid: 50000,
    dateCompleted: '2025-05-15',
    repayments: '04/12',
  },
  {
    fullName: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    amount: 150000,
    totalRepaid: 150000,
    dateCompleted: '2024-12-10',
    repayments: '12/12',
  },
  {
    fullName: 'Michael Chen',
    email: 'mchen@example.com',
    amount: 200000,
    totalRepaid: 100000,
    dateCompleted: '2025-08-30',
    repayments: '06/24',
  },
  {
    fullName: 'Olivia Williams',
    email: 'owilliams@example.com',
    amount: 50000,
    totalRepaid: 25000,
    dateCompleted: '2025-02-05',
    repayments: '03/06',
  },
];

const LoansTable3 = () => {
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
                      Customer details
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
                      Amount
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
                    Total repaid
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Date completed
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Repayments
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  ></Text>
                </Th>
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
                    <HStack>
                      <Avatar
                        src="/images/avatar.png"
                        size="sm"
                        bg="brand.100"
                        color="white"
                      />
                      <VStack alignItems="flex-start" spacing={0}>
                        <Text
                          fontSize="14px"
                          fontWeight="600"
                          color="bodyText.300"
                        >
                          {user.fullName}
                        </Text>
                        <Text
                          fontSize="14px"
                          fontWeight="400"
                          color="bodyText.100"
                        >
                          {user.email}
                        </Text>
                      </VStack>
                    </HStack>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                      {formatCurrency(user.amount)}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {formatCurrency(user.totalRepaid)}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {formatDate(user.dateCompleted)}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {user.repayments}
                    </Text>
                  </Td>
                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Button
                      text="Apply for new loan"
                      size="sm"
                      variant="outline"
                    />
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

export default LoansTable3;
