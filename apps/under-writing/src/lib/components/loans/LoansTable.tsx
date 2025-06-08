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
import { formatCurrency, formatDate } from '~/lib/utils/formatter';

type User = {
  fullName: string;
  email: string;
  amount: number;
  totalRepaid: number;
  outstanding: number;
  nextDueDate: string;
  repayments: string;
};

const usersData: User[] = [
  {
    fullName: 'Margaret Kolapo',
    email: 'lagosboy@gmail.com',
    amount: 100000,
    totalRepaid: 100000,
    outstanding: 100000,
    nextDueDate: '2025-03-22',
    repayments: '07/12',
  },
  {
    fullName: 'John Smith',
    email: 'johnsmith@example.com',
    amount: 250000,
    totalRepaid: 125000,
    outstanding: 125000,
    nextDueDate: '2025-04-15',
    repayments: '04/08',
  },
  {
    fullName: 'Sophia Chen',
    email: 'sophia.chen@gmail.com',
    amount: 500000,
    totalRepaid: 200000,
    outstanding: 300000,
    nextDueDate: '2025-05-01',
    repayments: '03/12',
  },
  {
    fullName: 'David Adeyemi',
    email: 'david.a@outlook.com',
    amount: 750000,
    totalRepaid: 450000,
    outstanding: 300000,
    nextDueDate: '2024-12-10',
    repayments: '09/12',
  },
  {
    fullName: 'Priya Patel',
    email: 'priya.p@gmail.com',
    amount: 180000,
    totalRepaid: 180000,
    outstanding: 0,
    nextDueDate: '2024-11-05',
    repayments: '12/12',
  },
];

const LoansTable = () => {
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
                    Outstanding
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Next due date
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
                      {formatCurrency(user.outstanding)}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {formatDate(user.nextDueDate)}
                    </Text>
                  </Td>
                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {user.repayments}
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

export default LoansTable;
