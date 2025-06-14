'use client';

import {
  Box,
  HStack,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import LoansTable from '../../loans/LoansTable';
import LoansTable2 from '../../loans/LoansTable2';
import LoansTable3 from '../../loans/LoansTable3';
import Button from '../../ui/Button';
import { formatCurrency } from '@shared/utils/formatter';

const cardData = [
  {
    title: 'Total active loans',
    amount: 9000,
  },
  {
    title: 'Due this week',
    amount: 1000,
  },
  {
    title: 'Total loan value',
    amount: 90000,
  },
  {
    title: 'Total outstanding balance',
    amount: 1000000,
  },
];

const LoansComponent = () => {
  const router = useRouter();

  const tabs = [
    {
      header: 'Active loans',
      component: <LoansTable />,
    },
    {
      header: 'Defaults',
      component: <LoansTable2 />,
    },
    {
      header: 'Completed Loans',
      component: <LoansTable3 />,
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
        <HStack justifyContent="space-between" w="100%">
          <VStack alignItems="flex-start" spacing={0}>
            <Text fontSize="xl" fontWeight="700" color="bodyText.100">
              Loans
            </Text>
            <Text fontSize="14px" fontWeight="400" color="bodyText.200">
              Manage loans from this page
            </Text>
          </VStack>

          <Button
            text="Create Loan"
            size="md"
            variant="outline"
            px={4}
            onClick={() => router.push('/dashboard/loans/create-loan')}
          />
        </HStack>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} my="4">
        {cardData.map((card) => (
          <Card
            variant="elevated"
            bg="#FAFAFA"
            borderRadius="8px"
            key={card.title}
          >
            <CardBody>
              <Stack spacing="4">
                <HStack justifyContent="space-between">
                  <Text fontSize="14px" fontWeight="500" color="bodyText.200">
                    {card.title}
                  </Text>
                </HStack>
                <Box>
                  <Text fontSize="lg" fontWeight="700" color="bodyText.100">
                    {formatCurrency(card.amount)}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <Tabs w="100%" variant="unstyled">
        <HStack
          justifyContent="space-between"
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <TabList
            overflowX="auto"
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.header}
                _selected={{
                  color: 'brand.100',
                  fontWeight: '700',
                  fontSize: '14px',
                  borderBottom: '2px solid #0052CC',
                }}
                fontSize="14px"
                color="bodyText.200"
                fontWeight="400"
                style={{
                  textWrap: 'nowrap',
                }}
              >
                {tab.header}
              </Tab>
            ))}
          </TabList>
          <HStack
            justifyContent="flex-end"
            gap={2}
            w={{ base: '100%', md: 'auto' }}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Image src="/images/search-2.svg" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search name, email or ID"
                focusBorderColor="brand.100"
                borderColor="border.100"
                borderRadius="full"
                fontSize="sm"
                fontWeight="400"
                color="bodyText.200"
                _placeholder={{
                  color: 'bodyText.200',
                }}
                _focus={{
                  borderColor: 'brand.100',
                }}
                w={{ base: '100%', md: '200px' }}
              />
            </InputGroup>

            <Input
              placeholder="Filter by date"
              borderRadius="full"
              type="date"
              fontSize="sm"
              fontWeight="400"
              color="bodyText.200"
            />

            <Select
              placeholder="Loan Status"
              borderRadius="full"
              borderColor="border.100"
              focusBorderColor="brand.100"
              fontSize="sm"
              fontWeight="400"
              color="bodyText.200"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
        </HStack>

        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab.header} px={0}>
              {tab.component}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default LoansComponent;
