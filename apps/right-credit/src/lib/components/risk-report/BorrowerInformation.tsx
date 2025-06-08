import {
  Box,
  Text,
  HStack,
  VStack,
  Badge,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

import { formatDate } from '~/lib/utils/formatter';

type RiskReport = {
  dateCreated: string;
  borrowerName: string;
  borrowerType: string;
  BVN: string;
};

interface BorrowerInformationProps {
  riskReportData: RiskReport[];
}

const BorrowerInformation = ({ riskReportData }: BorrowerInformationProps) => {
  return (
    <VStack alignItems="center" justifyContent="center" h="100%" mt={4}>
      <Box
        bg="white"
        borderRadius="4px"
        boxShadow="sm"
        w={['100%', '75%']}
        p={4}
      >
        <VStack alignItems="flex-start" w="100%" spacing={4}>
          <HStack
            justifyContent="space-between"
            w="100%"
            alignItems={['flex-start', 'center']}
            flexDirection={['column', 'row']}
          >
            <Text fontSize="md" fontWeight="600" color="headText.100">
              Borrower Information
            </Text>

            <HStack>
              <Badge
                bg="#0052CC1F"
                color="#606C80"
                fontSize="14px"
                fontWeight="700"
                borderRadius="4px"
                textTransform="capitalize"
                px={3}
                py={1}
                rounded="full"
              >
                Risk Score
              </Badge>
              <Badge
                bg="#02CF6F1A"
                color="#00783F"
                fontSize="14px"
                fontWeight="700"
                borderRadius="4px"
                textTransform="capitalize"
                px={3}
                py={1}
                rounded="full"
              >
                800/1000
              </Badge>
              <Badge
                bg="#02CF6F1A"
                color="#00783F"
                fontSize="14px"
                fontWeight="700"
                borderRadius="4px"
                textTransform="capitalize"
                px={3}
                py={1}
                rounded="full"
              >
                Very Low Risk
              </Badge>
            </HStack>
          </HStack>

          <TableContainer
            bg="white"
            w="100%"
            borderRadius="4px"
            border="1px solid #E5E7EB"
          >
            <Table size="sm">
              <Thead bg="#FAFAFA" borderTopColor="border.100">
                <Tr>
                  <Th p={4}>
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color="bodyText.200"
                      textTransform="capitalize"
                    >
                      Date of Report
                    </Text>
                  </Th>

                  <Th>
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color="bodyText.200"
                      textTransform="capitalize"
                    >
                      Borrower Name
                    </Text>
                  </Th>

                  <Th>
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color="bodyText.200"
                      textTransform="capitalize"
                    >
                      Borrower Type
                    </Text>
                  </Th>
                  <Th>
                    <Text
                      fontSize="14px"
                      fontWeight="700"
                      color="bodyText.200"
                      textTransform="capitalize"
                    >
                      BVN
                    </Text>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {riskReportData.map((report, index) => (
                  <Tr
                    key={index}
                    _hover={{
                      bg: '#FAFAFA',
                    }}
                    cursor="pointer"
                  >
                    <Td py={4} borderBottom="1px solid #FAFAFA">
                      <Text
                        fontSize="14px"
                        fontWeight="400"
                        color="bodyText.200"
                      >
                        {formatDate(report.dateCreated)}
                      </Text>
                    </Td>

                    <Td py={4} borderBottom="1px solid #FAFAFA">
                      <Text
                        fontSize="14px"
                        fontWeight="400"
                        color="bodyText.100"
                      >
                        {report.borrowerName}
                      </Text>
                    </Td>

                    <Td py={4} borderBottom="1px solid #FAFAFA">
                      <Text
                        fontSize="14px"
                        fontWeight="400"
                        color="bodyText.100"
                      >
                        {report.borrowerType}
                      </Text>
                    </Td>

                    <Td py={4} borderBottom="1px solid #FAFAFA">
                      <Text
                        fontSize="14px"
                        fontWeight="400"
                        color="bodyText.100"
                      >
                        {report.BVN}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </Box>
    </VStack>
  );
};

export default BorrowerInformation;
