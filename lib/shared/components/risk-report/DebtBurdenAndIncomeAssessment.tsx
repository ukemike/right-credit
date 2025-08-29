import { Box, Text, HStack, VStack, Badge, SimpleGrid } from '@chakra-ui/react';
import {
  getRiskLevel,
  getRiskColor,
  formatScore,
  formatCurrencyFromNumber,
} from '@shared/utils/riskUtils';

interface CreditHistory {
  total_monthly_installments?: number;
  total_outstanding_debt?: number;
}

interface BankStatementReport {
  average_monthly_total_expenses?: number;
  average_monthly_total_expenses_to_income_ratio?: number;
  average_predicted_salary?: number;
  income_stability_status?: string;
  number_of_salary_payments?: number;
  frequency_of_salary_payments?: string;
  loan_repayment_to_inflow_rate?: number;
  installment_to_income_ratio?: number;
}

interface RiskAnalysis {
  debt_burden_score?: number;
  income_assessment_score?: number;
  credit_history?: CreditHistory;
  bank_statement_report?: BankStatementReport;
}

interface DebtBurdenAndIncomeAssessmentProps {
  riskAnalysis: RiskAnalysis;
}

const DebtBurdenAndIncomeAssessment = ({
  riskAnalysis,
}: DebtBurdenAndIncomeAssessmentProps) => {
  const debtBurdenScore = riskAnalysis?.debt_burden_score || 0;
  const incomeAssessmentScore = riskAnalysis?.income_assessment_score || 0;
  const creditHistory = riskAnalysis?.credit_history;
  const bankStatement = riskAnalysis?.bank_statement_report;

  const debtRiskLevel = getRiskLevel(debtBurdenScore);
  const debtRiskColors = getRiskColor(debtBurdenScore);
  const incomeRiskLevel = getRiskLevel(incomeAssessmentScore);
  const incomeRiskColors = getRiskColor(incomeAssessmentScore);
  return (
    <VStack alignItems="center" justifyContent="center" h="100%" mt={8}>
      <Box w={['100%', '75%']}>
        <SimpleGrid columns={[1, 2]} gap={4}>
          <VStack
            alignItems="flex-start"
            spacing={3}
            w="100%"
            bg="white"
            borderRadius="4px"
            boxShadow="sm"
            p={4}
          >
            <Text
              fontSize="14px"
              fontWeight="600"
              color="#1F2633"
              textTransform="uppercase"
            >
              DEBT BURDEN
            </Text>

            <HStack spacing={2} w="100%">
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
                {' '}
                Debt Burden Score:
              </Badge>
              <Badge
                bg={debtRiskColors.bg}
                color={debtRiskColors.color}
                fontSize="sm"
                fontWeight="700"
                px={3}
                py={1}
                borderRadius="full"
                textTransform="capitalize"
              >
                {formatScore(debtBurdenScore)}
              </Badge>
              <Badge
                bg={debtRiskColors.bg}
                color={debtRiskColors.color}
                fontSize="sm"
                fontWeight="700"
                px={3}
                py={1}
                borderRadius="full"
                textTransform="capitalize"
              >
                {debtRiskLevel}
              </Badge>
            </HStack>

            <SimpleGrid columns={[1, 2]} w="100%" spacing={4} mt={2}>
              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Total Monthly Installments:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="headText.100">
                  {formatCurrencyFromNumber(
                    creditHistory?.total_monthly_installments || 0
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
                  Total Outstanding Debt:
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {formatCurrencyFromNumber(
                    creditHistory?.total_outstanding_debt || 0
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
                  Loan repayments to inflow rate
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {/* {bankStatement?.loan_repayment_to_inflow_rate ? `${(bankStatement.loan_repayment_to_inflow_rate * 100).toFixed(1)}%` : 'N/A'} */}
                  {bankStatement?.loan_repayment_to_inflow_rate || 'N/A'}
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
                  Installment to Income Ratio
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {/* {bankStatement?.installment_to_income_ratio ? bankStatement.installment_to_income_ratio.toFixed(2) : 'N/A'} */}
                  {bankStatement?.installment_to_income_ratio || 'N/A'}
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
                  Average monthly total expenses (Salary Earners)
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {bankStatement?.average_monthly_total_expenses ? formatCurrencyFromNumber(bankStatement.average_monthly_total_expenses) : 'N/A'}
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
                  Average monthly total expenses to Income Ratio (Salary
                  Earners)
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {bankStatement?.average_monthly_total_expenses_to_income_ratio ? bankStatement.average_monthly_total_expenses_to_income_ratio.toFixed(2) : 'N/A'}
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>

          <VStack
            alignItems="flex-start"
            spacing={3}
            w="100%"
            bg="white"
            borderRadius="4px"
            boxShadow="sm"
            p={4}
          >
            <Text fontSize="14px" fontWeight="600" color="headText.100">
              INCOME ASSESSMENT: SALARY EARNER
            </Text>

            <HStack spacing={2} w="100%">
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
                Income Assessment Score:
              </Badge>
              <Badge
                bg={incomeRiskColors.bg}
                color={incomeRiskColors.color}
                fontSize="sm"
                fontWeight="700"
                px={3}
                py={1}
                borderRadius="full"
                textTransform="capitalize"
              >
                {formatScore(incomeAssessmentScore)}
              </Badge>
              <Badge
                bg={incomeRiskColors.bg}
                color={incomeRiskColors.color}
                fontSize="sm"
                fontWeight="700"
                px={3}
                py={1}
                borderRadius="full"
                textTransform="capitalize"
              >
                {incomeRiskLevel}
              </Badge>
            </HStack>

            <SimpleGrid columns={[1, 2]} w="100%" spacing={4} mt={2}>
              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Average Predicted Salary
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {formatCurrencyFromNumber(
                    bankStatement?.average_predicted_salary || 0
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
                  Income Stability:
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {bankStatement?.income_stability_status || 'N/A'}
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
                  Number of Salary Payments
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {bankStatement?.number_of_salary_payments || 'N/A'}
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
                  Frequency of Salary Payments:
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                  textTransform="capitalize"
                >
                  {bankStatement?.frequency_of_salary_payments || 'N/A'}
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default DebtBurdenAndIncomeAssessment;
