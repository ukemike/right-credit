import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Text,
  Box,
  Badge,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import EmptyState from '../EmptyState';
import { formatDate } from '~/lib/utils/formatter';
import type { LoanData } from '~/lib/utils/types';

const RiskTable = ({ data }: { data: LoanData[] }) => {
  const router = useRouter();

  const handleRowClick = (jobId: string) => {
    router.push(`/dashboard/risk-report/${jobId}`);
  };

  return (
    <Box>
      {data?.length === 0 ? (
        <Box bg="#FAFBFF">
          <EmptyState
           title="No report found"
           description="All reports will be visible on this page"
           btnText="Create New Report"
           onClick={() => router.push('/dashboard/risk-report/create-risk-report')}
          />
        </Box>
      ) : (
        <TableContainer bg="white">
          <Table size="sm">
            <Thead bg="#FAFAFA" borderTopWidth={1} borderTopColor="border.100">
              <Tr>
                <Th py={2}>
                  <HStack>
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color="bodyText.200"
                      textTransform="capitalize"
                    >
                      Report ID
                    </Text>
                  </HStack>
                </Th>
                <Th>
                  <HStack>
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color="bodyText.200"
                      textTransform="capitalize"
                    >
                      Customer name
                    </Text>
                  </HStack>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Phone
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Date created
                  </Text>
                </Th>
                <Th>
                  <Text
                    fontSize="14px"
                    fontWeight="700"
                    color="bodyText.200"
                    textTransform="capitalize"
                  >
                    Status
                  </Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((risk, index) => (
                <Tr
                  key={index}
                  _hover={{
                    bg: '#FAFAFA',
                  }}
                  cursor="pointer"
                  onClick={() => handleRowClick(risk.id.toString())}
                >
                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                      #{risk?.id}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {risk.personal_details?.first_name}{' '}
                      {risk.personal_details?.sur_name}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {risk.personal_details?.mobile_number}
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {formatDate(risk.created_at)}
                    </Text>
                  </Td>
                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Badge
                      bg={
                        risk.state === 'in_progress' ? '#FFBB011C' : '#0080001C'
                      }
                      color={
                        risk.state === 'in_progress' ? '#FFBB00' : '#008000'
                      }
                      borderColor={
                        risk.state === 'in_progress' ? '#FFBB00' : '#008000'
                      }
                      borderWidth={1}
                      fontSize="sm"
                      textTransform="capitalize"
                      fontWeight="500"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {risk.state === 'in_progress'
                        ? 'In Progress'
                        : 'Completed'}
                    </Badge>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default RiskTable;
