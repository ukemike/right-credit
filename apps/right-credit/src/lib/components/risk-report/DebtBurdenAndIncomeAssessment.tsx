import { Box, Text, HStack, VStack, Badge, SimpleGrid } from '@chakra-ui/react';

const DebtBurdenAndIncomeAssessment = () => {
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
                bg="#FF4F7114"
                color="#FF4F71"
                fontSize="sm"
                fontWeight="700"
                px={3}
                py={1}
                borderRadius="full"
                textTransform="capitalize"
              >
                310
              </Badge>
              <Badge
                bg="#FF4F711A"
                color="#FF4F71"
                fontSize="sm"
                fontWeight="700"
                px={3}
                py={1}
                borderRadius="full"
                textTransform="capitalize"
              >
                High Risk
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
                  1,209,710
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
                  ₦ 1,902,000
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
                  Installment to Income Ratio
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
                  Average monthly total expenses (Salary Earners)
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  2,823
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
                  0.67
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
                bg="#F2994A1A"
                color="#F2994A"
                fontSize="sm"
                fontWeight="700"
                px={3}
                py={1}
                borderRadius="full"
                textTransform="capitalize"
              >
                483
              </Badge>
              <Badge
                bg="#F2994A1A"
                color="#F2994A"
                fontSize="sm"
                fontWeight="700"
                px={3}
                py={1}
                borderRadius="full"
                textTransform="capitalize"
              >
                Medium Risk
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
                  1,209,710
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
                  Consistent Salary Payments
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
                  2,823
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
                >
                  Monthly
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
