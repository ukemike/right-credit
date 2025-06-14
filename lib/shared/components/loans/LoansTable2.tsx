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
import { formatCurrency } from '@shared/utils/formatter';

type User = {
  fullName: string;
  email: string;
  amount: number;
  totalRepaid: number;
  overdueAmount: number;
  daysOverdue: number;
  repayments: string;
};

const usersData: User[] = [
  {
    fullName: 'Margaret Kolapo',
    email: 'lagosboy@gmail.com',
    amount: 100000,
    totalRepaid: 100000,
    overdueAmount: 100000,
    daysOverdue: 4,
    repayments: '07/12',
  },
  {
    fullName: 'John Smith',
    email: 'johnsmith@example.com',
    amount: 250000,
    totalRepaid: 150000,
    overdueAmount: 50000,
    daysOverdue: 7,
    repayments: '04/10',
  },
  {
    fullName: 'Sarah Johnson',
    email: 'sarah.j@gmail.com',
    amount: 75000,
    totalRepaid: 75000,
    overdueAmount: 0,
    daysOverdue: 0,
    repayments: '12/12',
  },
  {
    fullName: 'Michael Chen',
    email: 'mchen@company.com',
    amount: 500000,
    totalRepaid: 200000,
    overdueAmount: 75000,
    daysOverdue: 3,
    repayments: '04/20',
  },
  {
    fullName: 'Olivia Williams',
    email: 'oliviaw@outlook.com',
    amount: 150000,
    totalRepaid: 50000,
    overdueAmount: 25000,
    daysOverdue: 2,
    repayments: '02/06',
  },
];

const LoansTable2 = () => {
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
                    Overdue Amount
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Days overdue
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
                      {formatCurrency(user.overdueAmount)}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="#C90B2F">
                      {user.daysOverdue} days
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

export default LoansTable2;
