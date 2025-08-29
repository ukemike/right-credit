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

import { formatDate } from '@shared/utils/formatter';
import { getRiskLevel, getRiskColor, formatScore } from '@shared/utils/riskUtils';

interface RiskAnalysis {
  created_at?: string;
  personal_details?: {
    first_name?: string;
    surname?: string;
    middle_name?: string;
    bvn_number?: string;
  };
  weighted_risk_score?: number;
  loan_type?: string;
}

interface BorrowerInformationProps {
  riskAnalysis: RiskAnalysis;
}

const BorrowerInformation = ({ riskAnalysis }: BorrowerInformationProps) => {
  const overallScore = riskAnalysis?.weighted_risk_score || 0;
  const riskLevel = getRiskLevel(overallScore);
  const riskColors = getRiskColor(overallScore);
  
  const borrowerName = `${riskAnalysis?.personal_details?.first_name || ''} ${riskAnalysis?.personal_details?.surname || ''}`.trim() || 'N/A';
  const dateCreated = riskAnalysis?.created_at || new Date().toISOString();
  const bvnNumber = riskAnalysis?.personal_details?.bvn_number || 'N/A';
  
  // Create a single report object for display
  const reportData = {
    dateCreated,
    borrowerName,
    // borrowerType: 'Individual',
    borrowerType: riskAnalysis?.loan_type === 'payday' ? 'Individual' : 'Business',
    BVN: bvnNumber,
  };
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
                bg={riskColors.bg}
                color={riskColors.color}
                fontSize="14px"
                fontWeight="700"
                borderRadius="4px"
                textTransform="capitalize"
                px={3}
                py={1}
                rounded="full"
              >
                {formatScore(overallScore)}
              </Badge>
              <Badge
                bg={riskColors.bg}
                color={riskColors.color}
                fontSize="14px"
                fontWeight="700"
                borderRadius="4px"
                textTransform="capitalize"
                px={3}
                py={1}
                rounded="full"
              >
                {riskLevel}
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
                <Tr
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
                      {formatDate(reportData.dateCreated)}
                    </Text>
                  </Td>

                  <Td py={4} borderBottom="1px solid #FAFAFA">
                    <Text
                      fontSize="14px"
                      fontWeight="400"
                      color="bodyText.100"
                    >
                      {reportData.borrowerName}
                    </Text>
                  </Td>

                  <Td py={4} borderBottom="1px solid #FAFAFA">
                    <Text
                      fontSize="14px"
                      fontWeight="400"
                      color="bodyText.100"
                    >
                      {reportData.borrowerType}
                    </Text>
                  </Td>

                  <Td py={4} borderBottom="1px solid #FAFAFA">
                    <Text
                      fontSize="14px"
                      fontWeight="400"
                      color="bodyText.100"
                    >
                      {reportData.BVN}
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </Box>
    </VStack>
  );
};

export default BorrowerInformation;
