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
import axios from 'axios';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '../ui/Button';
import Input from '../ui/Input';
import { useRegisterMutation } from '@shared/redux/services/auth.service';
import { signupSchema } from '@shared/schemas/auth.schema';

const Signup = () => {
  const router = useRouter();
  const toast = useToast();

  const [register, { isLoading }] = useRegisterMutation();

  const handleSignup = async (values: any) => {
    try {
      const response = await register(values).unwrap();

      if (response && response.verify_url) {
        const verifyUrl = response.verify_url;

        try {
          const verificationResponse = await axios.get(verifyUrl);

          if (
            verificationResponse.data &&
            verificationResponse.data.message === 'Email verified successfully'
          ) {
            router.push('/auth/verify');
          } else {
            throw new Error('Verification failed');
          }
        } catch (error) {
          router.push('/auth/verify');
          toast({
            title: 'Account created',
            description:
              'Account created but email verification failed. Please check your email.',
            status: 'warning',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
          });
        }
      }
    } catch (err: any) {
      toast({
        title: 'Error',
        description:
          err.data?.message || 'Something went wrong during registration',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
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
      <Stack spacing={8} w="100%" mt={5}>
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
              Account Creation
            </Badge>
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="700"
              color="#090A0D"
              textAlign="center"
            >
              Get Started with Lendbook
            </Text>

            <Text
              fontSize={['14px', 'md']}
              fontWeight="400"
              color="#5E6782"
              textAlign="center"
            >
              Create your Lendbook account
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
                first_name: '',
                last_name: '',
                email: '',
                // businessName: '',
                // designation: '',
                password: '',
                confirm_password: '',
                role: 'customer',
                business_name: '',
              }}
              onSubmit={(values) => {
                handleSignup(values);
              }}
              validationSchema={signupSchema}
            >
              {() => (
                <Form style={{ width: '100%' }}>
                  <VStack spacing={2}>
                    <HStack
                      w="100%"
                      spacing={2}
                      flexDirection={['column', 'row']}
                      alignItems="flex-start"
                    >
                      <Input
                        label="First Name"
                        name="first_name"
                        type="text"
                        placeholder="Your first name"
                      />

                      <Input
                        label="Last Name"
                        name="last_name"
                        type="text"
                        placeholder="Your last name"
                      />
                    </HStack>

                    <Input
                      label="E-mail address"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                    />

                    <Input
                      label="Business Name"
                      name="business_name"
                      type="text"
                      placeholder="Your business name"
                    />

                    <HStack
                      w="100%"
                      spacing={2}
                      flexDirection={['column', 'row']}
                      alignItems="flex-start"
                      display="none"
                    >
                      <Input
                        label="Business Name"
                        name="businessName"
                        type="text"
                        placeholder="Your business name"
                      />

                      <Input
                        label="Designation"
                        name="designation"
                        type="text"
                        placeholder="Your designation"
                      />
                    </HStack>

                    <Input
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Your password"
                    />

                    <Input
                      label="Confirm Password"
                      name="confirm_password"
                      type="password"
                      placeholder="Confirm your password"
                    />

                    <VStack align="stretch" w="100%" mt={8}>
                      {/* <HStack justify="center" align="center" spacing={0}>
                        <Text
                          fontSize="sm"
                          fontWeight="400"
                          color="bodyText.100"
                        >
                          By signing up, you agree to our
                        </Text>
                        <Link href="/auth/login">
                          <ChakraLink
                            color="brand.200"
                            fontSize="sm"
                            fontWeight="400"
                          >
                            Terms, Conditions
                          </ChakraLink>
                        </Link>

                        <Text
                          fontSize="sm"
                          fontWeight="400"
                          color="bodyText.100"
                        >
                          and
                        </Text>
                        <Link href="/auth/login">
                          <ChakraLink
                            color="brand.200"
                            fontSize="sm"
                            fontWeight="400"
                          >
                            Privacy Policy,
                          </ChakraLink>
                        </Link>

                        <Text
                          fontSize="sm"
                          fontWeight="400"
                          color="bodyText.100"
                        >
                          and
                        </Text>
                        <Link href="/auth/login">
                          <ChakraLink
                            color="brand.200"
                            fontSize="sm"
                            fontWeight="400"
                          >
                            terms of use
                          </ChakraLink>
                        </Link>
                      </HStack> */}

                      <Button
                        text="Create Account"
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
                          Already have an account?
                        </Text>
                        <Link href="/auth/login">
                          <ChakraLink
                            color="brand.200"
                            fontSize="14px"
                            fontWeight="700"
                          >
                            Sign In
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

export default Signup;
