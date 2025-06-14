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
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import EmptyState from '../EmptyState';
import Button from '../ui/Button';
import { formatDate } from '@shared/utils/formatter';
import type { LoanData } from '@shared/utils/types';

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
            title="No report created yet"
            description="New reports created will be visible on this page"
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
                    Score
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
                    Action
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
                      -
                    </Text>
                  </Td>

                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Text fontSize="14px" fontWeight="400" color="bodyText.100">
                      {formatDate(risk.created_at)}
                    </Text>
                  </Td>
                  <Td py={3} borderBottom="1px solid #FAFAFA">
                    <Button
                      text="View Report"
                      size="md"
                      variant="outline"
                      px={4}
                    />
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
