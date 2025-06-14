'use client';

import { Box, HStack, Text, IconButton, Image, VStack } from '@chakra-ui/react';
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
import {
  createGaugeConfig,
  riskLabels,
} from '@shared/components/risk-report/GaugeConfig';
import RiskScoreGauges from '@shared/components/risk-report/RiskScoreGauges';
import Button from '@shared/components/ui/Button';
import { useGetRiskAnalysisByIdQuery } from '@shared/redux/services/risk.service';

// Register chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

type RiskReport = {
  dateCreated: string;
  borrowerName: string;
  borrowerType: string;
  BVN: string;
};

const riskReportData: RiskReport[] = [
  {
    dateCreated: '2021-01-01',
    borrowerName: 'John Doe',
    borrowerType: 'Individual',
    BVN: '1234567890',
  },
  {
    dateCreated: '2021-01-01',
    borrowerName: 'John Doe',
    borrowerType: 'Individual',
    BVN: '1234567890',
  },
  {
    dateCreated: '2021-01-01',
    borrowerName: 'John Doe',
    borrowerType: 'Individual',
    BVN: '1234567890',
  },
];

const bankStatementData = [
  {
    SN: 1,
    Inflow: 1000,
    Outflow: 500,
  },
  {
    SN: 2,
    Inflow: 1000,
    Outflow: 500,
  },
  {
    SN: 3,
    Inflow: 1000,
    Outflow: 500,
  },
  {
    SN: 4,
    Inflow: 1000,
    Outflow: 500,
  },
];

// Risk score configurations
const bankStatementConfig = createGaugeConfig(728, 1000, '#02CF6F');
const debtBurdenConfig = createGaugeConfig(310, 1000, '#FF4F71');
const affordabilityConfig = createGaugeConfig(930, 1000, '#00783F');
const creditBureauConfig = createGaugeConfig(520, 1000, '#F2994A');
const incomeAssessmentConfig = createGaugeConfig(160, 1000, '#C90B2F');

const ViewRiskReport = () => {
  const router = useRouter();
  const { reportId } = useParams();

  const { data: riskAnalysis } = useGetRiskAnalysisByIdQuery(reportId);
  console.log(riskAnalysis, 'riskAnalysis');

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
        <BorrowerInformation riskReportData={riskReportData} />

        {/* Risk Score Gauges */}
        <RiskScoreGauges
          bankStatementConfig={bankStatementConfig}
          debtBurdenConfig={debtBurdenConfig}
          affordabilityConfig={affordabilityConfig}
          creditBureauConfig={creditBureauConfig}
          incomeAssessmentConfig={incomeAssessmentConfig}
          riskLabels={riskLabels}
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
        <BankStatementAnalysis bankStatementData={bankStatementData} />

        {/* Debt Burden And Income Assessment */}
        <DebtBurdenAndIncomeAssessment />

        {/* Credit Behavior */}
        <CreditBehavior />

        {/* Affordability Assessment */}
        <AffordabilityAssessment />

        {/* Demographic Location Assessment */}
        <DemographicLocationAssessment />
      </Box>
    </DashboardLayout>
  );
};

export default ViewRiskReport;
