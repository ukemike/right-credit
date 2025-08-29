import { Box, Text, HStack, VStack, Badge, SimpleGrid } from '@chakra-ui/react';
import {
  getRiskLevel,
  getRiskColor,
  formatScore,
  formatCurrencyFromNumber,
} from '@shared/utils/riskUtils';

interface LoanHistory {
  accountNumber?: string;
  loanProvider?: string;
  loanStatus?: string;
  disbursedDate?: string;
  maturityDate?: string;
  loanAmount?: string;
  outstandingBalance?: string;
  installmentAmount?: string;
  currency?: string;
  numberOfOverdueDays?: number;
  overdueAmount?: string;
  loanDuration?: string;
  lastPaymentDate?: string;
}

interface CreditHistory {
  loan_history?: LoanHistory[];
  days_in_arrears?: number;
  average_loan_duration?: number;
  loan_tenure_adjustment_score?: number;
  total_number_of_loans?: number;
  total_number_of_open_loans?: number;
  total_amount_of_open_loans?: number;
}

interface RiskAnalysis {
  bureau_risk_score?: number;
  credit_history?: CreditHistory;
}

interface CreditBehaviorProps {
  riskAnalysis: RiskAnalysis;
}

const CreditBehavior = ({ riskAnalysis }: CreditBehaviorProps) => {
  const bureauScore = riskAnalysis?.bureau_risk_score || 0;
  const creditHistory = riskAnalysis?.credit_history;
  const riskLevel = getRiskLevel(bureauScore);
  const riskColors = getRiskColor(bureauScore);
  const loanHistory = creditHistory?.loan_history || [];
  return (
    <VStack alignItems="center" justifyContent="center" h="100%" mt={8}>
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
            <Text
              fontSize="14px"
              fontWeight="600"
              color="headText.100"
              textTransform="uppercase"
            >
              Credit Behaviour
            </Text>
          </HStack>

          <Box border="1px solid #E5E7EB" borderRadius="8px" p={4} w="100%">
            <HStack mb={4}>
              <Badge
                bg="transparent"
                color="#606C80"
                border="1px solid #0052CC"
                fontSize="sm"
                fontWeight="400"
                borderRadius="4px"
                textTransform="capitalize"
                px={3}
                py={1}
                rounded="full"
              >
                Credit Bureau Risk Score
              </Badge>
              <Badge
                bg={riskColors.bg}
                color={riskColors.color}
                fontSize="sm"
                fontWeight="700"
                borderRadius="4px"
                textTransform="capitalize"
                px={3}
                py={1}
                rounded="full"
              >
                {formatScore(bureauScore)}
              </Badge>
              <Badge
                bg={riskColors.bg}
                color={riskColors.color}
                fontSize="sm"
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

            <SimpleGrid columns={[1, 2, 4]} w="100%" spacing={4} mt={2}>
              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Total Number of Accounts:
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  3??
                </Text>
              </VStack>

              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Number of Accounts in Arrears:
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  1??
                </Text>
              </VStack>

              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Total Amount in Arrears:
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {formatCurrencyFromNumber(
                    creditHistory?.total_amount_of_open_loans || 0
                  )}
                </Text>
              </VStack>

              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Credit Bureau Days in Arrears
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {`${creditHistory?.days_in_arrears || 0} Days`}
                </Text>
              </VStack>
            </SimpleGrid>

            <SimpleGrid columns={[1, 2, 3]} w="100%" spacing={4} mt={2}>
              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Number of Loans taken within specified timeframes:
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {`${creditHistory?.total_number_of_loans || 0} loans`}
                </Text>
              </VStack>

              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Average Loan Tenure of Existing Loans
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {`${creditHistory?.average_loan_duration || 0} months`}
                </Text>
              </VStack>

              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Loan Tenure Adjustment Score
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {creditHistory?.loan_tenure_adjustment_score || 'N/A'}
                </Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </VStack>

        <Box
          borderRadius="8px"
          border="1px solid #E5E7EB"
          w="100%"
          p={4}
          mt={8}
        >
          <Text fontSize="md" fontWeight="600" color="black" mb={4}>
            List of all loans: ({loanHistory.length})
          </Text>
          <Box>
            {loanHistory.length > 0 ? (
              loanHistory.map((loan, index) => (
                <Box
                  key={index}
                  borderRadius="8px"
                  border="1px solid #E5E7EB"
                  w="100%"
                  p={4}
                  mb={4}
                >
                  <Text
                    fontSize="sm"
                    fontWeight="400"
                    color="bodyText.200"
                    mb={2}
                  >
                    Lender({index + 1})
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="600"
                    color="bodyText.100"
                    mb={4}
                  >
                    {loan?.loanProvider || 'N/A'}
                  </Text>

                  <SimpleGrid columns={[1, 2]} spacing={4}>
                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        ACCOUNT NUMBER
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.accountNumber || 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        ACCOUNT STATUS
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.loanStatus || 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        LOAN EFFECTIVE DATE
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.disbursedDate || 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        LOAN AMOUNT
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.loanAmount
                          ? formatCurrencyFromNumber(Number(loan.loanAmount))
                          : 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        OUTSTANDING BALANCE
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.outstandingBalance
                          ? formatCurrencyFromNumber(
                              Number(loan.outstandingBalance)
                            )
                          : 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        INSTALMENT AMOUNT
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.installmentAmount
                          ? formatCurrencyFromNumber(
                              Number(loan.installmentAmount)
                            )
                          : 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        CURRENCY
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.currency || 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        DAYS IN ARREARS
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.numberOfOverdueDays || 0}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        OVER DUE AMOUNT
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.overdueAmount
                          ? formatCurrencyFromNumber(Number(loan.overdueAmount))
                          : 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        FACILITY TENOR
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.loanDuration
                          ? `${loan.loanDuration} months`
                          : 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        LAST PAYMENT DATE
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.lastPaymentDate || 'N/A'}
                      </Text>
                    </HStack>

                    <HStack
                      justifyContent="space-between"
                      w="100%"
                      borderBottom="1px solid #E5E7EB"
                      pb="2"
                    >
                      <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                        MATURITY DATE
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        color="bodyText.600"
                      >
                        {loan?.maturityDate || 'N/A'}
                      </Text>
                    </HStack>
                  </SimpleGrid>
                </Box>
              ))
            ) : (
              <Box
                borderRadius="8px"
                border="1px solid #E5E7EB"
                w="100%"
                p={4}
                textAlign="center"
              >
                <Text fontSize="md" color="bodyText.200">
                  No loan history available
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </VStack>
  );
};

export default CreditBehavior;
