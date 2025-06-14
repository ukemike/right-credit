import {
  Badge,
  Box,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Image,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';

import Input from '../ui/Input';
import Button from '@shared/components/ui/Button';
import ModalComponent from '@shared/components/ui/Modal';

const permissions = [
  { label: 'Can View', value: 'canView' },
  { label: 'Can Edit', value: 'canEdit' },
  { label: 'Can Delete', value: 'canDelete' },
  { label: 'Can Deactivate', value: 'canDeactivate' },
  { label: 'Can Create Loans', value: 'canCreateLoans' },
  { label: 'Can Edit Borrowers', value: 'canEditBorrowers' },
];

const UserDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <VStack spacing={2} align="stretch" w="100%" mt="1">
      <VStack align="stretch" w="100%" spacing={0}>
        <Text fontSize="lg" fontWeight="600" color="bodyText.100">
          User Details
        </Text>
        <Text fontSize="14px" fontWeight="400" color="bodyText.200">
          Provide the details below to add new user
        </Text>
      </VStack>

      <VStack alignItems="flex-start" spacing={0}>
        <HStack
          justifyContent="space-between"
          w="100%"
          borderBottom="1px solid #E5E7EB"
          pb="2"
          mt="2"
        >
          <Text fontSize="sm" fontWeight="300" color="bodyText.200">
            First Name
          </Text>
          <Text fontSize="14px" fontWeight="600" color="bodyText.600">
            Adeniji
          </Text>
        </HStack>

        <HStack
          justifyContent="space-between"
          w="100%"
          borderBottom="1px solid #E5E7EB"
          pb="2"
          mt="2"
        >
          <Text fontSize="sm" fontWeight="300" color="bodyText.200">
            Last Name
          </Text>
          <Text fontSize="14px" fontWeight="600" color="bodyText.600">
            Johnson
          </Text>
        </HStack>

        <HStack
          justifyContent="space-between"
          w="100%"
          borderBottom="1px solid #E5E7EB"
          pb="2"
          mt="2"
        >
          <Text fontSize="sm" fontWeight="300" color="bodyText.200">
            Email
          </Text>
          <Text fontSize="14px" fontWeight="600" color="bodyText.600">
            adenijijohnson@gmail.com
          </Text>
        </HStack>

        <HStack
          justifyContent="space-between"
          w="100%"
          borderBottom="1px solid #E5E7EB"
          pb="2"
          mt="2"
        >
          <Text fontSize="sm" fontWeight="300" color="bodyText.200">
            Phone
          </Text>
          <Text fontSize="14px" fontWeight="600" color="bodyText.600">
            +234 812 382 8832
          </Text>
        </HStack>

        <HStack
          justifyContent="space-between"
          w="100%"
          borderBottom="1px solid #E5E7EB"
          pb="2"
          mt="2"
        >
          <Text fontSize="sm" fontWeight="300" color="bodyText.200">
            Title
          </Text>
          <Text fontSize="14px" fontWeight="600" color="bodyText.600">
            Credit Underwriter
          </Text>
        </HStack>

        <HStack
          justifyContent="space-between"
          w="100%"
          borderBottom="1px solid #E5E7EB"
          pb="2"
          mt="2"
        >
          <Text fontSize="sm" fontWeight="300" color="bodyText.200">
            Password
          </Text>
          <HStack alignItems="center">
            <Text fontSize="14px" fontWeight="600" color="bodyText.600">
              DanielSam1938
            </Text>

            <Text
              fontSize="sm"
              fontWeight="600"
              color="brand.100"
              cursor="pointer"
              onClick={handleModal}
            >
              Change password
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <Box
        mt={4}
        borderWidth={1}
        borderColor="#E5E7EB"
        borderRadius="12px"
        p={4}
      >
        <VStack mb={2} align="flex-start" spacing={0}>
          <Text
            fontSize="md"
            fontWeight="600"
            color="bodyText.200"
            textTransform="capitalize"
          >
            Roles
          </Text>
          <Text fontSize="14px" fontWeight="400" color="bodyText.200">
            Assigned roles
          </Text>
        </VStack>
        <Wrap spacing={2}>
          {permissions.map((permission) => (
            <WrapItem>
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

      <HStack align="stretch" w="100%" my={2}>
        <Button
          text="Deactivate User"
          width="100%"
          variant="outline"
          color="#C90B2F"
          border="#C90B2F"
          icon={<Image src="/images/delete-2.svg" />}
          iconPosition="right"
        />
        <Button
          text="Edit Details"
          width="100%"
          variant="outline"
          icon={<Image src="/images/pencil-edit-2.svg" />}
          iconPosition="right"
        />
      </HStack>

      <ModalComponent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl"
        body={
          <VStack spacing={2} align="stretch" w="100%" mt="1">
            <HStack
              align="stretch"
              w="100%"
              justifyContent="space-between"
              mt="6"
            >
              <Text fontSize="md" fontWeight="600" color="bodyText.100">
                Go back to user details
              </Text>
              <Badge
                bg="#E7ECFC"
                color="brand.100"
                fontSize="sm"
                fontWeight="400"
                textTransform="capitalize"
                borderRadius="full"
                px={3}
                py={1}
              >
                Change user password
              </Badge>
            </HStack>

            <VStack alignItems="flex-start" spacing={0}>
              <Formik
                initialValues={{
                  newPassword: '',
                  confirmPassword: '',
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {() => (
                  <Form style={{ width: '100%' }}>
                    <VStack spacing={2}>
                      <Input
                        label="New Password"
                        name="newPassword"
                        type="password"
                        placeholder="Your new password"
                      />

                      <Input
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your new password"
                      />
                    </VStack>
                  </Form>
                )}
              </Formik>
            </VStack>

            <VStack align="stretch" w="100%" my={2}>
              <Button text="Change" width="100%" />
            </VStack>
          </VStack>
        }
      />
    </VStack>
  );
};

export default UserDetails;
