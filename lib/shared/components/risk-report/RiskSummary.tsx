import { Box, Text, HStack, VStack, Badge, SimpleGrid } from '@chakra-ui/react';

const RiskSummary = () => {
  return (
    <VStack alignItems="center" justifyContent="center" h="100%" mt={8} mb={16}>
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
              Risk Summary
            </Text>

            <HStack>
              <Badge
                bg="#02CF6F1A"
                color="#02CF6F"
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
                color="#02CF6F"
                fontSize="14px"
                fontWeight="700"
                borderRadius="4px"
                textTransform="capitalize"
                px={3}
                py={1}
                rounded="full"
              >
                Low Risk
              </Badge>
            </HStack>
          </HStack>

          <Box border="1px solid #E5E7EB" borderRadius="8px" p={4} w="100%">
            <SimpleGrid columns={[1, 1, 2]} w="100%" spacing={4} mt={2}>
              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={4}
              >
                <Text fontSize="md" fontWeight="600" color="black" mb={2}>
                  Risk Assessment
                </Text>
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Based on our comprehensive analysis, John Doe presents a low
                  overall risk profile. His bank statements show consistent
                  income streams with manageable outflows, his debt burden is
                  within acceptable limits, and his credit behavior demonstrates
                  responsible financial management. The affordability assessment
                  confirms his capability to take on the requested loan amount.
                  We recommend proceeding with this application.
                </Text>
              </VStack>

              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={4}
              >
                <Text fontSize="md" fontWeight="600" color="black" mb={2}>
                  Recommendations
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="400"
                  color="bodyText.100"
                  mb={2}
                >
                  1. Approve the loan application for the requested amount of
                  ₦2,000,000
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="400"
                  color="bodyText.100"
                  mb={2}
                >
                  2. Offer a 12-month repayment term with the standard interest
                  rate of 15%
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="400"
                  color="bodyText.100"
                  mb={2}
                >
                  3. No additional collateral required beyond the standard
                  requirements
                </Text>
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  4. Regular quarterly review of repayment performance
                </Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default RiskSummary;
