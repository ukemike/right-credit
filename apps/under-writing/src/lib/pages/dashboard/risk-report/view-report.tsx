'use client';

import { Box, HStack, Text, IconButton, Image, VStack, Spinner, Center } from '@chakra-ui/react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { useParams, useRouter } from 'next/navigation';

import DashboardLayout from '@/lib/components/layout/DashboardLayout';
import AffordabilityAssessment from '@shared/components/risk-report/AffordabilityAssessment';
import BankStatementAnalysis from '@shared/components/risk-report/BankStatementAnalysis';
import BorrowerInformation from '@shared/components/risk-report/BorrowerInformation';
import CreditBehavior from '@shared/components/risk-report/CreditBehavior';
import DebtBurdenAndIncomeAssessment from '@shared/components/risk-report/DebtBurdenAndIncomeAssessment';
import DemographicLocationAssessment from '@shared/components/risk-report/DemographicLocationAssessment';
import RiskScoreGauges from '@shared/components/risk-report/RiskScoreGauges';
import Button from '@shared/components/ui/Button';
import { useGetRiskAnalysisByIdQuery } from '@shared/redux/services/risk.service';
import { useMemo } from 'react';
import { getRiskLevel, getRiskColor } from '@shared/utils/riskUtils';
import { createGaugeConfig } from '@shared/components/risk-report/GaugeConfig';

// Register chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);



const ViewRiskReport = () => {
  const router = useRouter();
  const { reportId } = useParams();

  const { data, isLoading } = useGetRiskAnalysisByIdQuery(reportId);
  const riskAnalysis = useMemo(() => data || {}, [data]);

  // Create dynamic risk score configurations based on actual data
  const bankStatementScore = riskAnalysis?.bank_statement_risk_score || 0;
  const debtBurdenScore = riskAnalysis?.debt_burden_score || 0;
  const affordabilityScore = riskAnalysis?.affordability_risk_score || 0;
  const creditBureauScore = riskAnalysis?.bureau_risk_score || 0;
  const incomeAssessmentScore = riskAnalysis?.income_assessment_score || 0;
  const demographicScore = riskAnalysis?.demographic_risk_score || 0;

  const bankStatementConfig = createGaugeConfig(bankStatementScore, 1000, getRiskColor(bankStatementScore).color);
  const debtBurdenConfig = createGaugeConfig(debtBurdenScore, 1000, getRiskColor(debtBurdenScore).color);
  const affordabilityConfig = createGaugeConfig(affordabilityScore, 1000, getRiskColor(affordabilityScore).color);
  const creditBureauConfig = createGaugeConfig(creditBureauScore, 1000, getRiskColor(creditBureauScore).color);
  const incomeAssessmentConfig = createGaugeConfig(incomeAssessmentScore, 1000, getRiskColor(incomeAssessmentScore).color);

  // Create dynamic risk labels
  const dynamicRiskLabels = {
    bankStatement: { score: bankStatementScore, label: getRiskLevel(bankStatementScore) },
    debtBurden: { score: debtBurdenScore, label: getRiskLevel(debtBurdenScore) },
    affordability: { score: affordabilityScore, label: getRiskLevel(affordabilityScore) },
    creditBureau: { score: creditBureauScore, label: getRiskLevel(creditBureauScore) },
    incomeAssessment: { score: incomeAssessmentScore, label: getRiskLevel(incomeAssessmentScore) },
    location: { score: demographicScore, label: getRiskLevel(demographicScore) },
  };

  // Loading state
  if (isLoading) {
    return (
      <DashboardLayout showSidebar={false} bg="#F7F8FA" px="0">
        <Box>
          <HStack
            justifyContent="space-between"
            w="100%"
            p={4}
            flexDirection={['column', 'row']}
            alignItems={['flex-start', 'center']}
            bg="white"
          >
            <HStack alignItems="center" spacing={2}>
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
                Customer Underwriting report
              </Text>
            </HStack>

            <HStack>
              <Button text="Download Report" size="md" px={6} isDisabled />
            </HStack>
          </HStack>

          <Center h="60vh" flexDirection="column">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              mb={4}
            />
            <Text fontSize="lg" fontWeight="500" color="bodyText.200">
              Loading risk analysis report...
            </Text>
            <Text fontSize="sm" color="bodyText.100" mt={2}>
              Please wait while we fetch the data
            </Text>
          </Center>
        </Box>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout showSidebar={false} bg="#F7F8FA" px="0">
      <Box>
        <HStack
          justifyContent="space-between"
          w="100%"
          p={4}
          flexDirection={['column', 'row']}
          alignItems={['flex-start', 'center']}
          bg="white"
        >
          <HStack alignItems="center" spacing={2}>
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
              Customer Underwriting report
            </Text>
          </HStack>

          <HStack>
            <Button text="Download Report" size="md" px={6} />
          </HStack>
        </HStack>

        {/* Borrower Information */}
        <BorrowerInformation riskAnalysis={riskAnalysis} />

        {/* Risk Score Gauges */}
        <RiskScoreGauges
          bankStatementConfig={bankStatementConfig}
          debtBurdenConfig={debtBurdenConfig}
          affordabilityConfig={affordabilityConfig}
          creditBureauConfig={creditBureauConfig}
          incomeAssessmentConfig={incomeAssessmentConfig}
          riskLabels={dynamicRiskLabels}
        />

        <VStack alignItems="center" justifyContent="center" h="100%" mt={8}>
          <Box w={['100%', '75%']} p={4}>
            <Text
              fontSize={['lg', 'xl']}
              fontWeight="700"
              color="bodyText.100"
              borderBottom="1px solid #E5E7EB"
              py={4}
            >
              Underwriting report
            </Text>
          </Box>
        </VStack>

        {/* Bank Statement Analysis */}
        <BankStatementAnalysis riskAnalysis={riskAnalysis} />

        {/* Debt Burden And Income Assessment */}
        <DebtBurdenAndIncomeAssessment riskAnalysis={riskAnalysis} />

        {/* Credit Behavior */}
        <CreditBehavior riskAnalysis={riskAnalysis} />

        {/* Affordability Assessment */}
        <AffordabilityAssessment riskAnalysis={riskAnalysis} />

        {/* Demographic Location Assessment */}
        <DemographicLocationAssessment riskAnalysis={riskAnalysis} />
      </Box>
    </DashboardLayout>
  );
};

export default ViewRiskReport;
