'use client';

import {
  HStack,
  Text,
  IconButton,
  Image,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Box,
  VStack,
  Badge,
  Avatar,
} from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';

import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import EmptyState from '@shared/components/EmptyState';
import Button from '@shared/components/ui/Button';

const CreateCustomer = () => {
  const router = useRouter();
  const { customerId } = useParams();
  console.log(customerId, 'customerId');

  const tabs = [
    {
      header: 'Loan Summary/ Terms',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No active loan"
            description="Loans will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Repayments',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No repayments found"
            description="Repayments will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Loan Schedule',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No loan schedule found"
            description="Loan schedule will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Loan Collateral',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No loan collateral found"
            description="Loan collateral will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Loan Guarantor',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No loan guarantor found"
            description="Loan guarantor will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Documents',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No documents found"
            description="Documents will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Audit Logs',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No audit logs found"
            description="Audit logs will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Risk / Underwriting',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No risk / underwriting found"
            description="Risk / underwriting will be displayed on this page"
          />
        </Box>
      ),
    },
  ];

  const tabsProfile = [
    {
      header: 'Personal info',
      component: (
        <VStack spacing={4} w="100%" alignItems="flex-start">
          <HStack spacing={2}>
            <Image src="/images/call2.svg" />
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              +234 813 456 8888
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Image src="/images/mail2.svg" />
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              james@gmail.com
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Image src="/images/map.svg" />
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              159 Ijebu Ife Market Road, Ijebu Ife, Ogun
            </Text>
          </HStack>

          <VStack w="100%" alignItems="flex-start" spacing={1}>
            <Text color="#919395" fontSize="sm" fontWeight="400">
              NIN
            </Text>
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              9209329302
            </Text>
          </VStack>
          <VStack w="100%" alignItems="flex-start" spacing={1}>
            <Text color="#919395" fontSize="sm" fontWeight="400">
              BVN
            </Text>
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              9209329302
            </Text>
          </VStack>
          <VStack w="100%" alignItems="flex-start" spacing={1}>
            <Text color="#919395" fontSize="sm" fontWeight="400">
              Marital Status
            </Text>
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              Single
            </Text>
          </VStack>

          <HStack>
            <Button
              text="Edit profile"
              variant="outline"
              size="sm"
              fontWeight={400}
            />
            <Button text=" Create new loan" size="sm" px={6} fontWeight={400} />
          </HStack>
        </VStack>
      ),
    },
    {
      header: 'Occupation',
      component: (
        <Box>
          <Text>Occupation</Text>
        </Box>
      ),
    },
  ];

  return (
    <DashboardLayout>
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
          Create New Customer
        </Text>
      </HStack>

      <Grid
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(7, 1fr)',
        }}
        gap={4}
        h="auto"
        w="100%"
        mb={5}
      >
        <GridItem
          colSpan={{ sm: 0, md: 1, lg: 2 }}
          h="auto"
          w="100%"
          boxShadow="sm"
          bg="white"
          borderRightWidth={1}
          borderColor="border.300"
          p={4}
        >
          <VStack alignItems="flex-start" w="100%" spacing={4}>
            <HStack justifyContent="space-between" w="100%">
              <Text color="bodyText.200" fontSize="13px" fontWeight="500">
                Loan status:
              </Text>
              <Badge
                bg="border.300"
                color="bodyText.100"
                fontSize="sm"
                fontWeight="700"
                borderRadius="full"
                px={2}
                py={1}
                textTransform="capitalize"
              >
                No active loan
              </Badge>
            </HStack>

            <HStack alignItems="center">
              <Avatar name="John Doe" size="lg" bg="brand.100" color="white" />

              <VStack alignItems="flex-start" spacing="0">
                <Text color="headText.300" fontSize="md" fontWeight="700">
                  Peterson Anyanwu
                </Text>
                <HStack>
                  <Text color="brand.100" fontSize="sm" fontWeight="400">
                    #Lk89Lk
                  </Text>
                  <Text color="#566577" fontSize="sm" fontWeight="400">
                    09/09/1983
                  </Text>
                  <Text color="#566577" fontSize="sm" fontWeight="400">
                    Male
                  </Text>
                </HStack>

                <HStack justifyContent="space-between" w="100%">
                  <HStack>
                    <Image src="/images/mail.svg" />
                    <Text color="bodyText.200" fontSize="sm" fontWeight="700">
                      Send Email
                    </Text>
                  </HStack>
                  <HStack justifyContent="flex-end">
                    <Image src="/images/call.svg" />
                    <Text color="bodyText.200" fontSize="sm" fontWeight="700">
                      Call
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </HStack>

            <Tabs w="100%">
              <TabList>
                {tabsProfile.map((tab) => (
                  <Tab
                    key={tab.header}
                    _selected={{
                      color: 'black',
                      fontWeight: '700',
                      fontSize: '14px',
                      borderBottom: '4px solid #000000',
                    }}
                    fontSize="14px"
                    color="#919395"
                    fontWeight="400"
                    style={{
                      textWrap: 'nowrap',
                    }}
                  >
                    {tab.header}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                {tabsProfile.map((tab) => (
                  <TabPanel key={tab.header} px={0}>
                    {tab.component}
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </VStack>
        </GridItem>

        <GridItem
          colSpan={{ sm: 1, md: 1, lg: 5 }}
          h="auto"
          w="100%"
          bg="white"
          p={4}
        >
          <Tabs w="100%" variant="unstyled">
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

            <TabPanels>
              {tabs.map((tab) => (
                <TabPanel key={tab.header} px={0}>
                  {tab.component}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default CreateCustomer;
