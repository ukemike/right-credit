'use client';

import {
  Box,
  HStack,
  Text,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  SkeletonText,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableContainer,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import RiskTable from '../../../risk-report/RiskTable';
import RiskTable2 from '../../../risk-report/RiskTable2';
import Button from '../../../ui/Button';
import { useListRisksByStateQuery } from '~/lib/redux/services/risk.service';

type Status = 'in_progress' | 'completed';

const TableSkeletonLoader = () => (
  <TableContainer bg="white">
    <Table size="sm">
      <Thead bg="#FAFAFA" borderTopWidth={1} borderTopColor="border.100">
        <Tr>
          <Th py={2}>
            <SkeletonText noOfLines={1} width="80px" />
          </Th>
          <Th>
            <SkeletonText noOfLines={1} width="100px" />
          </Th>
          <Th>
            <SkeletonText noOfLines={1} width="60px" />
          </Th>
          <Th>
            <SkeletonText noOfLines={1} width="90px" />
          </Th>
          <Th>
            <SkeletonText noOfLines={1} width="80px" />
          </Th>
          <Th>
            <SkeletonText noOfLines={1} width="60px" />
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Tr key={index}>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Skeleton height="20px" width="80px" />
              </Td>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Skeleton height="20px" width="120px" />
              </Td>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Skeleton height="20px" width="100px" />
              </Td>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Skeleton height="20px" width="80px" />
              </Td>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Skeleton height="20px" width="90px" />
              </Td>
              <Td py={3} borderBottom="1px solid #FAFAFA">
                <Skeleton height="24px" width="80px" borderRadius="full" />
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  </TableContainer>
);

const RiskReportComponent = () => {
  const router = useRouter();

  const [status, setStatus] = useState<Status>('in_progress');

  const {
    data: risks,
    isLoading,
    isFetching,
    refetch,
  } = useListRisksByStateQuery({
    status,
  });

  const requests = useMemo(() => {
    return risks?.requests || [];
  }, [risks]);

  const handleStatusChange = (status: Status) => {
    setStatus(status);
    refetch();
  };

  const tabs = [
    {
      header: `Pending Request (${requests?.length})`,
      component: <RiskTable data={requests} />,
      status: 'in_progress',
    },
    {
      header: 'Completed',
      component: <RiskTable2 data={requests} />,
      status: 'completed',
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
              Risk Report
            </Text>
            <Text fontSize="14px" fontWeight="400" color="bodyText.200">
              Manage all reports from this page
            </Text>
          </VStack>

          <Button
            text="Create Report"
            variant="outline"
            size="md"
            onClick={() =>
              router.push('/dashboard/risk-report/create-risk-report')
            }
          />
        </HStack>
      </VStack>

      <Tabs w="100%" variant="unstyled" my="4">
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
                onClick={() => handleStatusChange(tab.status as Status)}
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
                <Image src="/images/search-2.svg" alt="search" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search report"
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
          </HStack>
        </HStack>

        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab.header} px={0}>
              {isLoading || isFetching ? (
                <TableSkeletonLoader />
              ) : (
                tab.component
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RiskReportComponent;
