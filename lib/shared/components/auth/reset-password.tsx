'use client';

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Flex,
  Stack,
  Text,
  VStack,
  Badge,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';

import Button from '../ui/Button';
import Input from '../ui/Input';
import { resetSchema } from '@shared/schemas/auth.schema';

const ResetPassword = () => {
  const handleLogin = (values: any) => {
    console.log(values);
  };

  return (
    <Flex
      minH="100vh"
      justify="center"
      bg="white"
      h="100vh"
      p={6}
      w="100%"
      bgImage={`url('/images/auth-bg.svg')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Stack spacing={8} w="100%" mt={10}>
        <Stack maxW="lg" mx="auto" w="100%">
          <Stack align="center" spacing={0}>
            <Badge
              bg="white"
              color="#5E6782"
              fontSize="14px"
              fontWeight="400"
              textTransform="capitalize"
              px={2}
              py={1}
              borderRadius="22px"
              mb={2}
            >
              Reset Your Password
            </Badge>
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="700"
              color="#090A0D"
              textAlign="center"
            >
              Reset Your Password
            </Text>

            <Text
              fontSize={['14px', 'md']}
              fontWeight="400"
              color="#5E6782"
              textAlign="center"
            >
              Provide your new password to reset your password
            </Text>
          </Stack>
          <Stack
            rounded="lg"
            bg="white"
            boxShadow="lg"
            p={8}
            borderWidth={1}
            borderColor="#E3E5EB"
            borderRadius="lg"
            w="100%"
          >
            <Formik
              initialValues={{
                newPassword: '',
                confirmPassword: '',
              }}
              onSubmit={(values, actions) => {
                handleLogin(values);
              }}
              validationSchema={resetSchema}
            >
              {(props) => (
                <Form style={{ width: '100%' }}>
                  <VStack spacing={2}>
                    <Input
                      label="New Password"
                      name="newPassword"
                      type="password"
                      placeholder="Your password"
                    />

                    <Input
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                    />

                    <VStack align="stretch" w="100%" mt={8}>
                      <Button text="Reset Password" width="full" />
                    </VStack>
                  </VStack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;
