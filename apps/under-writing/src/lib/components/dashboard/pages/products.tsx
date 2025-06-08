'use client';

/* eslint-disable sonarjs/no-duplicate-string */

import {
  Box,
  Text,
  VStack,
  SimpleGrid,
  Card,
  Image,
  CardBody,
  Stack,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '../../ui/Button';

const ProductsComponent = () => {
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
    <Box bg="white" borderRadius="8px" boxShadow="sm" p={4}>
      <VStack
        alignItems="flex-start"
        spacing={0}
        borderBottom="1px solid #E5E7EB"
        pb="4"
      >
        <Text fontSize="xl" fontWeight="700" color="bodyText.100">
          Loan Product Management
        </Text>
        <Text fontSize="14px" fontWeight="400" color="bodyText.200">
          Manage your loan product from this page
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mt="4">
        {cardData.map((card) => (
          <Link
            href={card.link}
            key={card.title}
            onClick={(e) => e.preventDefault()}
          >
            <Card
              variant="elevated"
              bg="#F8F9FA"
              borderRadius="8px"
              key={card.title}
              cursor="pointer"
              onClick={() => router.push(card.link)}
            >
              <CardBody>
                <Stack spacing="4">
                  <HStack justifyContent="space-between">
                    <Text fontSize="14px" fontWeight="700" color="headText.100">
                      {card.title}
                    </Text>
                    <Image src={card.image} alt="fees" />
                  </HStack>
                  <Box>
                    <Text fontSize="lg" fontWeight="700" color="headText.100">
                      {card.amount}
                    </Text>
                  </Box>
                  <Box>
                    <Button
                      text={card.buttonText}
                      size="sm"
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                        event.preventDefault();
                        event.stopPropagation();
                        router.push(card.createLink);
                      }}
                    />
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductsComponent;
