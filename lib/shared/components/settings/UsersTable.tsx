import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
  HStack,
  Text,
  Avatar,
  VStack,
  Badge,
  Wrap,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useState } from 'react';

import UserDetails from '../modals/UserDetails';
import Button from '../ui/Button';
import ModalComponent from '@shared/components/ui/Modal';

type Permission = {
  label: string;
  value: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  title: string;
  permissions: Permission[];
};

const permissions = [
  { label: 'Can View', value: 'canView' },
  { label: 'Can Edit', value: 'canEdit' },
  { label: 'Can Delete', value: 'canDelete' },
  { label: 'Can Deactivate', value: 'canDeactivate' },
  { label: 'Can Create Loans', value: 'canCreateLoans' },
  { label: 'Can Edit Borrowers', value: 'canEditBorrowers' },
];

const usersData: User[] = [
  {
    id: '1',
    name: 'Margaret Kolapo',
    email: 'lagosboy@gmail.com',
    avatar: 'https://bit.ly/tioluwani-kola',
    title: 'Admin',
    permissions,
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    avatar: 'https://bit.ly/dan-abramov',
    title: 'Loan Officer',
    permissions: permissions.slice(0, 4),
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    email: 'sarah.j@gmail.com',
    avatar: 'https://bit.ly/sage-adebayo',
    title: 'Manager',
    permissions: permissions.slice(0, 5),
  },
  {
    id: '4',
    name: 'Michael Chen',
    email: 'michael.c@gmail.com',
    avatar: 'https://bit.ly/prosper-baba',
    title: 'Analyst',
    permissions: permissions.slice(0, 3),
  },
];

interface UsersTableProps {
  onClick: () => void;
}

const UsersTable = ({ onClick }: UsersTableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TableContainer bg="white">
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

        <HStack justifyContent="flex-end">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Image src="/images/search-2.svg" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              focusBorderColor="brand.100"
              borderColor="border.100"
              borderRadius="full"
            />
          </InputGroup>

          <Button
            text="Create New User"
            size="md"
            variant="outline"
            px={10}
            onClick={onClick}
          />
        </HStack>
      </HStack>

      <Table size="sm">
        <Thead bg="#FAFAFA" borderTopWidth={1} borderTopColor="border.100">
          <Tr>
            <Th py={2}>
              <HStack>
                <Checkbox />
                <Text
                  fontSize="14px"
                  fontWeight="700"
                  color="bodyText.200"
                  textTransform="capitalize"
                >
                  Name
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
                  Title
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
                Roles/Access
              </Text>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {usersData.map((user) => (
            <Tr
              key={user.id}
              _hover={{
                bg: '#FAFAFA',
              }}
            >
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <HStack>
                  <HStack>
                    <Checkbox />
                    <Avatar
                      src={user.avatar}
                      size="sm"
                      bg="brand.100"
                      color="white"
                    />
                  </HStack>
                  <VStack alignItems="flex-start" spacing={0}>
                    <Text fontSize="14px" fontWeight="600" color="bodyText.300">
                      {user.name}
                    </Text>
                    <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                      {user.email}
                    </Text>
                  </VStack>
                </HStack>
              </Td>

              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  {user.title}
                </Text>
              </Td>

              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Wrap spacing={2}>
                  {user.permissions.slice(0, 3).map((permission) => (
                    <Badge
                      key={permission.value}
                      px={3}
                      py={1}
                      borderRadius="full"
                      variant="subtle"
                      fontSize="sm"
                      border="1px solid #C7D7FE"
                      color="#3538CD"
                      bg="#EEF4FF"
                      textTransform="capitalize"
                      fontWeight="500"
                    >
                      {permission.label}
                    </Badge>
                  ))}
                  {user.permissions.length > 3 && (
                    <Badge
                      px={3}
                      py={1}
                      borderRadius="full"
                      variant="subtle"
                      fontSize="sm"
                      border="1px solid #FAFAFA"
                      color="#414651"
                      bg="#FAFAFA"
                      textTransform="capitalize"
                      fontWeight="500"
                    >
                      +{user.permissions.length - 3}
                    </Badge>
                  )}
                </Wrap>
              </Td>

              <Td py={3} borderBottom="1px solid #FAFAFA">
                <HStack spacing={0}>
                  <IconButton
                    icon={<Image src="/images/delete.svg" />}
                    aria-label="Delete"
                    variant="ghost"
                    size="sm"
                  />
                  <IconButton
                    icon={<Image src="/images/pencil-edit.svg" />}
                    aria-label="Edit"
                    variant="ghost"
                    size="sm"
                    onClick={handleModal}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <ModalComponent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl"
        body={<UserDetails />}
      />
    </TableContainer>
  );
};

export default UsersTable;
