import {
  Text,
  VStack,
  SimpleGrid,
  Badge,
  Wrap,
  WrapItem,
  Box,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '~/lib/components/ui/Button';

const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Underwriter', value: 'underwriter' },
  { label: 'Collections', value: 'collections' },
  { label: 'Operations', value: 'operations' },
  { label: 'Finance', value: 'finance' },
];

const permissions = [
  { label: 'Can View', value: 'canView' },
  { label: 'Can Edit', value: 'canEdit' },
  { label: 'Can Delete', value: 'canDelete' },
  { label: 'Can Deactivate', value: 'canDeactivate' },
  { label: 'Can Create Loans', value: 'canCreateLoans' },
  { label: 'Can Edit Borrowers', value: 'canEditBorrowers' },
];

const rolePermissions = {
  admin: permissions,
  underwriter: [
    { label: 'Can View', value: 'canView' },
    { label: 'Can Edit', value: 'canEdit' },
    { label: 'Can Deactivate', value: 'canDeactivate' },
    { label: 'Can Create Loans', value: 'canCreateLoans' },
    { label: 'Can Edit Borrowers', value: 'canEditBorrowers' },
  ],
  collections: [
    { label: 'Can View', value: 'canView' },
    { label: 'Can Edit', value: 'canEdit' },
    { label: 'Can Delete', value: 'canDelete' },
  ],
  operations: [
    { label: 'Can View', value: 'canView' },
    { label: 'Can Edit', value: 'canEdit' },
    { label: 'Can Delete', value: 'canDelete' },
  ],
  finance: [{ label: 'Can View', value: 'canView' }],
};

const AddUser = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        role: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form style={{ width: '100%' }}>
          <VStack spacing={2} align="stretch" w="100%" mt="1">
            <VStack align="stretch" w="100%" spacing={0}>
              <Text fontSize="lg" fontWeight="600" color="bodyText.100">
                Add new user
              </Text>
              <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                Provide the details below to add new user
              </Text>
            </VStack>

            <SimpleGrid columns={2} spacing={4}>
              <Input
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
              />

              <Input
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />

              <Input
                label="E-mail address"
                name="email"
                type="email"
                placeholder="E-mail address"
              />

              <Input
                label="Phone Number"
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
              />
            </SimpleGrid>

            <Select
              label="Role"
              name="role"
              options={roles}
              placeholder="Select Role"
            />

            {values.role && values.role !== '' && (
              <Box
                mt={4}
                borderWidth={1}
                borderColor="#E5E7EB"
                borderRadius="12px"
                p={4}
              >
                <Text
                  mb={2}
                  fontSize="md"
                  fontWeight="600"
                  color="bodyText.200"
                  textTransform="capitalize"
                >
                  {values.role} Rights
                </Text>
                <Wrap spacing={2}>
                  {rolePermissions[
                    values.role as keyof typeof rolePermissions
                  ].map((permission) => (
                    <WrapItem key={permission.value}>
                      <Badge
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
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            )}

            <VStack align="stretch" w="100%" my={2}>
              <Button text="Create" width="100%" />
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default AddUser;
