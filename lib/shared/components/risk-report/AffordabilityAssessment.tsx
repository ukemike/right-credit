import { Box, Text, HStack, VStack, Badge, SimpleGrid } from '@chakra-ui/react';
import { getRiskLevel, getRiskColor, formatScore, formatCurrencyFromNumber } from '@shared/utils/riskUtils';

interface RiskAnalysis {
  affordability_risk_score?: number;
  disposable_income?: number;
  disposable_income_status?: string;
}

interface AffordabilityAssessmentProps {
  riskAnalysis: RiskAnalysis;
}

const AffordabilityAssessment = ({ riskAnalysis }: AffordabilityAssessmentProps) => {
  const affordabilityScore = riskAnalysis?.affordability_risk_score || 0;
  const riskLevel = getRiskLevel(affordabilityScore);
  const riskColors = getRiskColor(affordabilityScore);
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
              Affordability Assessment
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
                Affordability Score
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
                {formatScore(affordabilityScore)}
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
                  Disposable Income
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {riskAnalysis?.disposable_income ? formatCurrencyFromNumber(riskAnalysis.disposable_income) : 'N/A'}
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
                  Status:
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  {riskAnalysis?.disposable_income_status || 'N/A'}
                </Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default AffordabilityAssessment;
