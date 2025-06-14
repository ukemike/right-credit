import { Box, Text, Grid, GridItem, HStack } from '@chakra-ui/react';

interface SummaryRowProps {
  label: string;
  value: string | number;
}

const SummaryRow = ({ label, value }: SummaryRowProps) => (
  <HStack
    justifyContent="space-between"
    py={4}
    borderBottomWidth={1}
    borderBottomColor="border.300"
    flexDirection={{ base: 'column', sm: 'row' }}
    alignItems={{ base: 'flex-start', sm: 'center' }}
    spacing={{ base: 1, sm: 4 }}
  >
    <Text color="bodyText.200" fontWeight="400" fontSize="14px">
      {label}
    </Text>
    <Text fontWeight="500" fontSize="14px" color="headText.100">
      {value}
    </Text>
  </HStack>
);

const LoanSummary = () => {
  return (
    <Box>
      <Box mb={4}>
        <Text fontSize="md" fontWeight="600" color="headText.200">
          Loan Summary
        </Text>
      </Box>

      <Grid
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(6, 1fr)',
        }}
        gap={0}
        borderBottomWidth={1}
        borderBottomColor="border.300"
        mb={4}
        bg="white"
      >
        <GridItem
          p={4}
          borderColor="border.300"
          borderRightWidth={1}
          borderTopWidth={1}
          borderLeftWidth={1}
        >
          <Text color="headText.200" fontSize="14px" fontWeight="400">
            Loan ID
          </Text>
          <Text color="headText.100" fontWeight="600" fontSize="md">
            #X9MLP
          </Text>
        </GridItem>

        <GridItem
          p={4}
          borderColor="border.300"
          borderRightWidth={1}
          borderTopWidth={1}
        >
          <Text color="headText.200" fontSize="14px" fontWeight="400">
            Released Date
          </Text>
          <Text color="headText.100" fontWeight="600" fontSize="md">
            15th Feb 2025
          </Text>
        </GridItem>

        <GridItem
          p={4}
          borderColor="border.300"
          borderRightWidth={1}
          borderTopWidth={1}
        >
          <Text color="headText.200" fontSize="14px" fontWeight="400">
            Maturity
          </Text>
          <Text color="headText.100" fontWeight="600" fontSize="md">
            15th Feb 2026
          </Text>
        </GridItem>

        <GridItem
          p={4}
          borderColor="border.300"
          borderRightWidth={1}
          borderTopWidth={1}
        >
          <Text color="headText.200" fontSize="14px" fontWeight="400">
            Principal
          </Text>
          <Text color="headText.100" fontWeight="600" fontSize="md">
            500,000
          </Text>
        </GridItem>

        <GridItem
          p={4}
          borderColor="border.300"
          borderRightWidth={1}
          borderTopWidth={1}
        >
          <Text color="headText.200" fontSize="14px" fontWeight="400">
            Interest Rate
          </Text>
          <Text color="headText.100" fontWeight="600" fontSize="md">
            29.05%
          </Text>
        </GridItem>

        <GridItem
          p={4}
          borderColor="border.300"
          borderTopWidth={1}
          borderRightWidth={1}
        >
          <Text color="headText.200" fontSize="14px" fontWeight="400">
            Balance
          </Text>
          <Text color="headText.100" fontWeight="600" fontSize="md">
            ₦389,900
          </Text>
        </GridItem>
      </Grid>

      <Box
        mx="auto"
        maxW="100%"
        p={4}
        borderWidth={1}
        borderColor="border.300"
        borderRadius="md"
        mb={4}
        bg="white"
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <Box>
            <SummaryRow label="Interest" value="27.90%" />
            <SummaryRow label="Penalty" value="209,710" />
            <SummaryRow label="Paid" value="74,897" />
            <SummaryRow label="Status" value="In progress" />
          </Box>
          <Box>
            <SummaryRow label="Fees" value="25,000" />
            <SummaryRow label="Due" value="15th feb 2025" />
            <SummaryRow label="Balance" value="389,900" />
          </Box>
        </Grid>
      </Box>

      <Box mb={4}>
        <Text fontSize="md" fontWeight="600" color="headText.200">
          Loan Terms
        </Text>
      </Box>

      <Box
        mx="auto"
        maxW="100%"
        p={4}
        borderWidth={1}
        borderColor="border.300"
        borderRadius="md"
        mb={4}
        bg="white"
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <Box>
            <SummaryRow label="Loan Status" value="27.90%" />
            <SummaryRow label="Loan Product" value="209,710" />
            <SummaryRow label="Loan Release Date" value="74,897" />
            <SummaryRow label="Loan Interest" value="In progress" />
            <SummaryRow label="Repayment Cycle" value="24" />
            <SummaryRow label="Loan Fees" value="49,000" />
            <SummaryRow label="Interest Type" value="Floating" />
          </Box>
          <Box>
            <SummaryRow label="Loan ID" value="25,000" />
            <SummaryRow label="Principal Amount" value="15th feb 2025" />
            <SummaryRow label="Loan Interest Method" value="389,900" />
            <SummaryRow label="Loan Duration" value="24 months" />
            <SummaryRow label="Number of Repayments" value="12" />
            <SummaryRow
              label="Extend Loan After Maturity Until Fully Paid"
              value="Yes"
            />
            <SummaryRow
              label="Calculate Interest on / Calculate Interest if there is"
              value="47,000"
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoanSummary;
