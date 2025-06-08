'use client';

import {
  Flex,
  Stack,
  Text,
  VStack,
  Link as ChakraLink,
  Badge,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '../ui/Button';
import Input from '../ui/Input';
import { useForgotPasswordMutation } from '~/lib/redux/services/auth.service';
import { forgotSchema } from '~/lib/schemas/auth.schema';

const ForgotPassword = () => {
  const router = useRouter();
  const toast = useToast();

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleLogin = async (values: any) => {
    await forgotPassword(values)
      .unwrap()
      .then(() => {
        toast({
          title: 'Password reset link sent',
          description: 'Please check your email for the reset link',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
        router.push('/auth/verify-reset');
      })
      .catch((err) => {
        toast({
          title: 'Error',
          description: err.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      });
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
              Forgot Password
            </Badge>
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="700"
              color="#090A0D"
              textAlign="center"
            >
              Forgot Your Password?
            </Text>

            <Text
              fontSize={['14px', 'md']}
              fontWeight="400"
              color="#5E6782"
              textAlign="center"
            >
              Provide your email to reset your password
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
                email: '',
              }}
              onSubmit={(values) => {
                handleLogin(values);
              }}
              validationSchema={forgotSchema}
            >
              {() => (
                <Form style={{ width: '100%' }}>
                  <VStack spacing={2}>
                    <Input
                      label="E-mail address"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                    />

                    <VStack align="stretch" w="100%" mt={8}>
                      <Button
                        text="Reset Password"
                        width="full"
                        isLoading={isLoading}
                        isDisabled={isLoading}
                      />

                      <HStack justify="center">
                        <Text
                          fontSize="14px"
                          fontWeight="500"
                          color="bodyText.100"
                        >
                          Don&apos;t have an account?
                        </Text>
                        <Link href="/auth/signup">
                          <ChakraLink
                            color="brand.200"
                            fontSize="14px"
                            fontWeight="700"
                          >
                            Create Account
                          </ChakraLink>
                        </Link>
                      </HStack>
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

export default ForgotPassword;
