'use client';

import {
  Box,
  HStack,
  VStack,
  SimpleGrid,
  Text,
  Card,
  CardBody,
  Stack,
} from '@chakra-ui/react';
import { formatNumber } from '@/lib/utils/formatter';

const DashboardComponent = () => {
  const cardData = [
    {
      title: 'Number of Risk Profiles Initiated',
      amount: 9000,
    },
    {
      title: 'Number of Successful',
      amount: 1000,
    },
    {
      title: 'Number of Failed',
      amount: 90000,
    },
    {
      title: 'Number of Pending',
      amount: 1000000,
    },
  ];
  return (
    <Box>
      <VStack alignItems="flex-start" spacing={0} pb="4">
        <HStack justifyContent="space-between" w="100%">
          <VStack alignItems="flex-start" spacing={0}>
            <Text fontSize="xl" fontWeight="700" color="bodyText.100">
              Dashboard
            </Text>
            <Text fontSize="14px" fontWeight="400" color="bodyText.200">
              Underwrite/Ascertain customer risk from this page
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} my="4">
        {cardData.map((card) => (
          <Card
            variant="elevated"
            bg="white"
            borderRadius="8px"
            key={card.title}
          >
            <CardBody>
              <Stack spacing="2">
                <Text fontSize="lg" fontWeight="700" color="bodyText.100">
                  {formatNumber(card.amount)}
                </Text>
                <Text fontSize="13px" fontWeight="400" color="bodyText.200">
                  {card.title}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DashboardComponent;
