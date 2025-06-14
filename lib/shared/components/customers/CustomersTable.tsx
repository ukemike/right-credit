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
  Badge,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Box,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import EmptyState from '../EmptyState';

type User = {
  borrowerId: string;
  fullName: string;
  phone: string;
  email: string;
  customerType: string;
  hasLoan: boolean;
  loanStatus: string;
};

const usersData: User[] = [
  {
    borrowerId: '1234567890',
    fullName: 'Margaret Kolapo',
    phone: '08060000000',
    email: 'lagosboy@gmail.com',
    customerType: 'Individual',
    hasLoan: true,
    loanStatus: 'Active',
  },
  {
    borrowerId: '2345678901',
    fullName: 'John Adebayo',
    phone: '08061111111',
    email: 'johnadebayo@gmail.com',
    customerType: 'Individual',
    hasLoan: false,
    loanStatus: 'Defaulted',
  },
  {
    borrowerId: '3456789012',
    fullName: 'Sarah Enterprise',
    phone: '08062222222',
    email: 'sarah.enterprise@gmail.com',
    customerType: 'Business',
    hasLoan: true,
    loanStatus: 'Active',
  },
  {
    borrowerId: '4567890123',
    fullName: 'Michael Okonkwo',
    phone: '08063333333',
    email: 'mokonkwo@gmail.com',
    customerType: 'Individual',
    hasLoan: true,
    loanStatus: 'Defaulted',
  },
  {
    borrowerId: '5678901234',
    fullName: 'Tech Solutions Ltd',
    phone: '08064444444',
    email: 'techsolutions@gmail.com',
    customerType: 'Business',
    hasLoan: false,
    loanStatus: 'Active',
  },
];

const CustomersTable = () => {
  const router = useRouter();

  const handleCustomerClick = (customerId: string) => {
    router.push(`/dashboard/customers/${customerId}`);
  };

  return (
    <Box>
      <HStack
        justifyContent="space-between"
        my={2}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <HStack>
          <Text fontSize="14px" fontWeight="600" color="bodyText.100">
            All Users
          </Text>
          <Badge
            px={3}
            py={1}
            borderRadius="full"
            variant="subtle"
            fontSize="sm"
            border="1px solid #E9EAEB"
            color="#414651"
            bg="white"
            textTransform="capitalize"
            fontWeight="500"
          >
            20
          </Badge>
        </HStack>

        <HStack
          justifyContent="flex-end"
          gap={2}
          w={{ base: '100%', md: 'auto' }}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Image src="/images/search-2.svg" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search name, email or ID"
              focusBorderColor="brand.100"
              borderColor="border.100"
              borderRadius="full"
              fontSize="sm"
              fontWeight="400"
              color="bodyText.200"
              _placeholder={{
                color: 'bodyText.200',
              }}
              _focus={{
                borderColor: 'brand.100',
              }}
              w={{ base: '100%', md: '200px' }}
            />
          </InputGroup>

          <Input
            placeholder="Filter by date"
            borderRadius="full"
            type="date"
            fontSize="sm"
            fontWeight="400"
            color="bodyText.200"
          />

          <Select
            placeholder="Has Loan"
            borderRadius="full"
            borderColor="border.100"
            focusBorderColor="brand.100"
            fontSize="sm"
            fontWeight="400"
            color="bodyText.200"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Select
            placeholder="Loan Status"
            borderRadius="full"
            borderColor="border.100"
            focusBorderColor="brand.100"
            fontSize="sm"
            fontWeight="400"
            color="bodyText.200"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
      </HStack>

      {usersData.length === 0 ? (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No customers found"
            description="No customers found"
            btnText="Create New Customer"
            onClick={() => router.push('/dashboard/customers/create-customer')}
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
                      Borrower ID
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
                      Full Name
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
                    Phone
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Email
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Customer type
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Has active loan
                  </Text>
                </Th>

                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Loan Status
                  </Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {usersData.map((user) => (
                <Tr
                  key={user.borrowerId}
                  _hover={{
                    bg: '#FAFAFA',
                  }}
                  onClick={() => handleCustomerClick(user.borrowerId)}
                  cursor="pointer"
                >
                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                      {user.borrowerId}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                      {user.fullName}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                      {user.phone}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                      {user.email}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                      {user.customerType}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Badge
                      px={3}
                      py={1}
                      borderRadius="full"
                      variant="subtle"
                      fontSize="sm"
                      borderWidth={1}
                      borderColor={user.hasLoan ? '#E9D7FE' : 'brand.100'}
                      color={user.hasLoan ? '#6941C6' : 'brand.100'}
                      bg="#F9F5FF"
                      textTransform="capitalize"
                      fontWeight="500"
                    >
                      {user.hasLoan ? 'Yes' : 'No'}
                    </Badge>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Badge
                      px={3}
                      py={1}
                      borderRadius="full"
                      variant="subtle"
                      fontSize="sm"
                      borderWidth={1}
                      borderColor={
                        user.loanStatus === 'Active' ? '#34C759' : '#C90B2F'
                      }
                      color={
                        user.loanStatus === 'Active' ? '#34C759' : '#C90B2F'
                      }
                      bg="#EFF8FF"
                      textTransform="capitalize"
                      fontWeight="500"
                    >
                      {user.loanStatus}
                    </Badge>
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

export default CustomersTable;
