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
} from '@chakra-ui/react';

import EmptyState from '../EmptyState';

type User = {
  sn: string;
  description: string;
  type: string;
  amount: number;
  balance: number;
  createdAt: string;
};

const usersData: User[] = [
  {
    sn: '1',
    description: 'Report fee payment',
    type: 'Debit',
    amount: 10000,
    balance: 10000,
    createdAt: '2021-01-01',
  },
  {
    sn: '2',
    description: 'Report fee payment',
    type: 'Debit',
    amount: 10000,
    balance: 10000,
    createdAt: '2021-01-01',
  },
  {
    sn: '3',
    description: 'Report fee payment',
    type: 'Debit',
    amount: 10000,
    balance: 10000,
    createdAt: '2021-01-01',
  },
];

const WallettTable = () => {
  if (usersData.length === 0) {
    return (
      <EmptyState
        title="No transactions yet"
        description="Your transaction history will appear here"
      />
    );
  }

  return (
    <TableContainer
      bg="white"
      mt={4}
      border="1px solid #E2E8F0"
      borderRadius="4px"
    >
      <Table size="sm">
        <Thead>
          <Tr>
            <Th py={4}>
              <HStack>
                <Text
                  fontSize="14px"
                  fontWeight="700"
                  color="bodyText.200"
                  textTransform="capitalize"
                >
                  S/N
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
                  Description
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
                Amount
              </Text>
            </Th>
            <Th>
              <Text
                fontSize="14px"
                fontWeight="700"
                color="bodyText.200"
                textTransform="capitalize"
              >
                Balance
              </Text>
            </Th>
            <Th>
              <Text
                fontSize="14px"
                fontWeight="700"
                color="bodyText.200"
                textTransform="capitalize"
              >
                Date
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {usersData.map((user) => (
            <Tr
              key={user.sn}
              _hover={{
                bg: '#FAFAFA',
              }}
            >
              <Td py={4} borderBottom="1px solid #FAFAFA">
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  {user.sn}
                </Text>
              </Td>

              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  {user.description}
                </Text>
              </Td>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  {user.type}
                </Text>
              </Td>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  {user.amount}
                </Text>
              </Td>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  {user.balance}
                </Text>
              </Td>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  {user.createdAt}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default WallettTable;
