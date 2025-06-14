import { Box, SimpleGrid, VStack } from '@chakra-ui/react';

import RiskGauge from './RiskGauge';
import type { ChartConfig } from './RiskGauge';

interface RiskScoreGaugesProps {
  bankStatementConfig: ChartConfig;
  debtBurdenConfig: ChartConfig;
  affordabilityConfig: ChartConfig;
  creditBureauConfig: ChartConfig;
  incomeAssessmentConfig: ChartConfig;
  riskLabels: {
    bankStatement: { score: number; label: string };
    debtBurden: { score: number; label: string };
    affordability: { score: number; label: string };
    creditBureau: { score: number; label: string };
    incomeAssessment: { score: number; label: string };
    location: { score: number; label: string };
  };
}

const RiskScoreGauges = ({
  bankStatementConfig,
  debtBurdenConfig,
  affordabilityConfig,
  creditBureauConfig,
  incomeAssessmentConfig,
  riskLabels,
}: RiskScoreGaugesProps) => {
  return (
    <VStack alignItems="center" justifyContent="center" h="100%" mt={8}>
      <Box
        bg="background.200"
        borderRadius="4px"
        boxShadow="sm"
        w={['100%', '75%']}
        p={4}
      >
        <SimpleGrid columns={[1, 2, 3, 5]} spacing={4}>
          <RiskGauge
            title="Bank Statement Risk Score"
            config={bankStatementConfig}
            score={riskLabels.bankStatement.score}
            label={riskLabels.bankStatement.label}
          />
          <RiskGauge
            title="Debt Burden Score"
            config={debtBurdenConfig}
            score={riskLabels.debtBurden.score}
            label={riskLabels.debtBurden.label}
          />
          <RiskGauge
            title="Affordability Score"
            config={affordabilityConfig}
            score={riskLabels.affordability.score}
            label={riskLabels.affordability.label}
          />
          <RiskGauge
            title="Credit Bureau Risk Score"
            config={creditBureauConfig}
            score={riskLabels.creditBureau.score}
            label={riskLabels.creditBureau.label}
          />
          <RiskGauge
            title="Income Assessment Score"
            config={incomeAssessmentConfig}
            score={riskLabels.incomeAssessment.score}
            label={riskLabels.incomeAssessment.label}
          />
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default RiskScoreGauges;
