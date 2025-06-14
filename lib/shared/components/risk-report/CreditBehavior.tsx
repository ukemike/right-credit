import { Box, Text, HStack, VStack, Badge, SimpleGrid } from '@chakra-ui/react';

const CreditBehavior = () => {
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
                bg="#02CF6F1A"
                color="#02CF6F"
                fontSize="sm"
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
                fontSize="sm"
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
                  30%
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
                  0.67
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
                  ₦ 590,000
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
                  983 Days
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
                  Last for the last 12 months
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
                  8 months
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
                  493
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
            List of all loans: (2)
          </Text>
          <Box>
            {/* Lender 1 - Zenith Bank */}
            <Box
              borderRadius="8px"
              border="1px solid #E5E7EB"
              w="100%"
              p={4}
              mb={4}
            >
              <Text fontSize="sm" fontWeight="400" color="bodyText.200" mb={2}>
                Lender(1)
              </Text>
              <Text fontSize="md" fontWeight="600" color="bodyText.100" mb={4}>
                Zenith bank
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    0093828347
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    Default
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    ACCOUNT STATUS DATE
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    12th March 2025
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    10th Dec 2023
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    CREDIT LIMIT
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    500,000
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    AVAILED LIMIT
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    1,390,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    100,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    390,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    NGN
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    83
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    390,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    24 months
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    REPAYMENT FREQUENCY
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    12
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    10th Dec 2024
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    LAST PAYMENT AMOUNT:
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    90,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    12th Dec 2026
                  </Text>
                </HStack>
              </SimpleGrid>
            </Box>

            {/* Lender 2 - United Bank for Africa */}
            <Box borderRadius="8px" border="1px solid #E5E7EB" w="100%" p={4}>
              <Text fontSize="sm" fontWeight="400" color="bodyText.200" mb={2}>
                Lender(2)
              </Text>
              <Text fontSize="md" fontWeight="600" color="bodyText.100" mb={4}>
                United bank for Africa
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    0093828347
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    Default
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    ACCOUNT STATUS DATE
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    12th March 2025
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    10th Dec 2023
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    CREDIT LIMIT
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    500,000
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    AVAILED LIMIT
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    1,390,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    100,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    390,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    NGN
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    83
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    390,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    24 months
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    REPAYMENT FREQUENCY
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    12
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    10th Dec 2024
                  </Text>
                </HStack>

                <HStack
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                >
                  <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                    LAST PAYMENT AMOUNT:
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    90,000
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
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    12th Dec 2026
                  </Text>
                </HStack>
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>
    </VStack>
  );
};

export default CreditBehavior;
