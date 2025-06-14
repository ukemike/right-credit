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
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '../ui/Button';
import Input from '../ui/Input';
import { useLoginMutation } from '@shared/redux/services/auth.service';
import { setCredentials } from '@shared/redux/slices/authSlice';
import { useAppDispatch } from '@shared/redux/store';
import { loginSchema } from '@shared/schemas/auth.schema';

const Login = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (values: any) => {
    await login(values)
      .unwrap()
      .then((res) => {
        const { access_token: accessToken, refresh_token: refreshToken } = res;
        Cookies.set('token', accessToken);
        Cookies.set('refresh_token', refreshToken);
        const data = {
          token: accessToken,
          refresh_token: refreshToken,
        };
        const payload = {
          data,
          token: accessToken,
        };
        dispatch(setCredentials(payload));
        router.push('/dashboard');
        toast({
          title: 'Login successful',
          description: 'You have been logged in successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      })
      .catch((err) => {
        toast({
          title: 'Login failed',
          description: err.data?.message || 'Something went wrong during login',
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
              Access Your Account
            </Badge>
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="700"
              color="#090A0D"
              textAlign="center"
            >
              Welcome Back!
            </Text>

            <Text
              fontSize={['14px', 'md']}
              fontWeight="400"
              color="#5E6782"
              textAlign="center"
            >
              Access your Lendbook account by signing in below.
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
                password: '',
              }}
              onSubmit={(values) => {
                handleLogin(values);
              }}
              validationSchema={loginSchema}
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

                    <Input
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Your password"
                    />

                    <HStack justify="space-between" w="100%" mt={-2}>
                      <Text
                        color="branbodyTextd.100"
                        fontSize="sm"
                        fontWeight="400"
                      >
                        Forgot password?
                      </Text>
                      <Link href="/auth/forgot-password">
                        <ChakraLink
                          color="brand.200"
                          fontSize="14px"
                          fontWeight="500"
                        >
                          Reset Password
                        </ChakraLink>
                      </Link>
                    </HStack>

                    <VStack align="stretch" w="100%" mt={8}>
                      <Button
                        text="Log in"
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
                            Sign up
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

export default Login;
