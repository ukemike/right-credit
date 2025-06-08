'use client';

import {
  Box,
  Text,
  SimpleGrid,
  Card,
  Image,
  CardBody,
  Stack,
  HStack,
  IconButton,
  InputLeftElement,
  InputGroup,
  Input,
  VStack,
  Badge,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import Button from '~/lib/components/ui/Button';

const LoanProduct = () => {
  const router = useRouter();

  const cardData = [
    {
      title: 'Loan Fees',
      amount: 0,
      image: '/images/fee.svg',
      buttonText: 'Create Loan Fees',
      link: '/dashboard/products/loan-fees',
      createLink: '/dashboard/products/create-loan-fee',
    },
    {
      title: 'Loan product',
      amount: 0,
      image: '/images/product.svg',
      buttonText: 'Create Loan Product',
      link: '/dashboard/products/loan-product',
      createLink: '/dashboard/products/create-loan-product',
    },
    {
      title: 'Default Penalty',
      amount: 0,
      image: '/images/default.svg',
      buttonText: 'Create Default Penalty',
      link: '/dashboard/products/default-penalty',
      createLink: '/dashboard/products/create-default-penalty',
    },
  ];
  return (
    <DashboardLayout>
      <Box bg="white" borderRadius="8px" boxShadow="sm" p={4}>
        <HStack
          alignItems="center"
          spacing={2}
          borderBottom="1px solid #E5E7EB"
          pb={4}
        >
          <IconButton
            aria-label="Back"
            icon={<Image src="/images/back.svg" alt="arrow-left" />}
            onClick={() => router.back()}
            size="sm"
            variant="ghost"
            _hover={{ bg: 'transparent' }}
            m={0}
            p={0}
          />
          <Text fontSize="md" fontWeight="700" color="bodyText.100">
            Back to main menu
          </Text>
        </HStack>

        <HStack
          justifyContent="space-between"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          borderBottom="1px solid #E5E7EB"
          pb={4}
          mt={4}
        >
          <HStack>
            <Text fontSize="14px" fontWeight="600" color="bodyText.100">
              All Loan Products
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
              text="Create New Product"
              size="md"
              variant="outline"
              px={10}
              onClick={() =>
                router.push('/dashboard/products/create-loan-product')
              }
            />
          </HStack>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mt="4">
          {cardData.map((card) => (
            <Link
              href={card.link}
              key={card.title}
              onClick={(e) => e.preventDefault()}
            >
              <Card
                variant="elevated"
                bg="white"
                borderRadius="8px"
                key={card.title}
                cursor="pointer"
                onClick={() => router.push(card.link)}
              >
                <CardBody>
                  <Stack spacing="4">
                    <VStack
                      alignItems="flex-start"
                      spacing={0}
                      borderBottom="1px solid #E5E7EB"
                      pb={4}
                    >
                      <Text fontSize="md" fontWeight="600" color="headText.100">
                        Basic Loan
                      </Text>
                      <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                        Created: 12th Jan. 2025
                      </Text>
                    </VStack>

                    <Box
                      bg="white"
                      border="1px solid #E5E7EB"
                      p={4}
                      borderRadius="12px"
                    >
                      <VStack alignItems="flex-start" spacing={0}>
                        <HStack
                          justifyContent="space-between"
                          w="100%"
                          borderBottom="1px solid #E5E7EB"
                          pb="2"
                          mt="2"
                        >
                          <Text
                            fontSize="sm"
                            fontWeight="300"
                            color="bodyText.200"
                          >
                            Product Name
                          </Text>
                          <Text
                            fontSize="14px"
                            fontWeight="600"
                            color="bodyText.600"
                          >
                            Basic Loans
                          </Text>
                        </HStack>

                        <HStack
                          justifyContent="space-between"
                          w="100%"
                          borderBottom="1px solid #E5E7EB"
                          pb="2"
                          mt="2"
                        >
                          <Text
                            fontSize="sm"
                            fontWeight="300"
                            color="bodyText.200"
                          >
                            Max Interest
                          </Text>
                          <Text
                            fontSize="14px"
                            fontWeight="600"
                            color="bodyText.600"
                          >
                            40%
                          </Text>
                        </HStack>

                        <HStack
                          justifyContent="space-between"
                          w="100%"
                          borderBottom="1px solid #E5E7EB"
                          pb="2"
                          mt="2"
                        >
                          <Text
                            fontSize="sm"
                            fontWeight="300"
                            color="bodyText.200"
                          >
                            Loan Duration Period
                          </Text>
                          <Text
                            fontSize="14px"
                            fontWeight="600"
                            color="bodyText.600"
                          >
                            Months
                          </Text>
                        </HStack>

                        <HStack
                          justifyContent="space-between"
                          w="100%"
                          borderBottom="1px solid #E5E7EB"
                          pb="2"
                          mt="2"
                        >
                          <Text
                            fontSize="sm"
                            fontWeight="300"
                            color="bodyText.200"
                          >
                            Fee type applied
                          </Text>

                          <HStack>
                            <Badge
                              bg="#E7ECFC"
                              color="brand.100"
                              rounded="full"
                              textTransform="capitalize"
                              fontSize="sm"
                              fontWeight="600"
                              px={2}
                              py={1}
                            >
                              Fixed
                            </Badge>
                            <Text
                              fontSize="14px"
                              fontWeight="600"
                              color="bodyText.600"
                            >
                              120,000
                            </Text>
                          </HStack>
                        </HStack>
                      </VStack>
                    </Box>

                    <HStack>
                      <Button
                        text="Delete"
                        size="md"
                        variant="outline"
                        width="100%"
                        color="#C90B2F"
                        border="#C90B2F"
                      />
                      <Button
                        text="Edit"
                        size="md"
                        variant="outline"
                        width="100%"
                      />
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </DashboardLayout>
  );
};

export default LoanProduct;
