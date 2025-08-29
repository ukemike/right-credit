import {
  Box,
  Text,
  HStack,
  VStack,
  Badge,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  SimpleGrid,
} from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';

import { formatCurrency } from '@shared/utils/formatter';
import {
  getRiskLevel,
  getRiskColor,
  formatScore,
} from '@shared/utils/riskUtils';

interface MonthlyData {
  amount: number;
  month_name: string;
  year: string;
}

interface BankStatementReport {
  monthly_inflow?: MonthlyData[];
  monthly_outflow?: MonthlyData[];
  gambling_status?: string;
  account_sweep?: string;
  inflow_outflow_rate?: number;
  overall_inflow_outflow_rate?: number;
  percentage_of_inflow_irregularity?: number;
  percentage_debit_transactions?: number;
  percentage_credit_transactions?: number;
  percentage_transactions_less_than_10k?: number;
  percentage_days_with_low_transaction_amount?: number;
  percentage_less_than_10k?: number;
  most_frequent_balance_range?: string;
  most_frequent_transaction_range?: string;
  missing_transactions?: string;
  no_of_self_transfer_inflows?: number;
  no_of_self_transfer_outflows?: number;
  no_transacting_months?: number;
}

interface RiskAnalysis {
  bank_statement_risk_score?: number;
  bank_statement_report?: BankStatementReport;
}

interface BankStatementAnalysisProps {
  riskAnalysis: RiskAnalysis;
}

const BankStatementAnalysis = ({
  riskAnalysis,
}: BankStatementAnalysisProps) => {
  const bankStatementScore = riskAnalysis?.bank_statement_risk_score || 0;
  const bankStatementData = riskAnalysis?.bank_statement_report;
  const riskLevel = getRiskLevel(bankStatementScore);
  const riskColors = getRiskColor(bankStatementScore);

  // Transform monthly data for table display
  const monthlyInflowData = bankStatementData?.monthly_inflow || [];
  const monthlyOutflowData = bankStatementData?.monthly_outflow || [];

  const transformedBankStatementData = monthlyInflowData.map(
    (inflow, index) => ({
      SN: index + 1,
      Inflow: inflow.amount,
      Outflow: monthlyOutflowData[index]?.amount || 0,
    })
  );

  // Calculate totals
  const totalInflow = monthlyInflowData.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const totalOutflow = monthlyOutflowData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  // Create chart configuration with real data
  const chartLabels = monthlyInflowData.map(
    (item) => `${item.month_name} ${item.year}`
  );
  const inflowData = monthlyInflowData.map((item) => item.amount);
  const outflowData = monthlyOutflowData.map((item) => item.amount);

  const dynamicBarChartConfig = {
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Inflow',
          data: inflowData,
          backgroundColor: '#344BFD',
          borderRadius: 4,
          borderSkipped: false,
          barPercentage: 0.5,
          categoryPercentage: 0.7,
        },
        {
          label: 'Outflow',
          data: outflowData,
          backgroundColor: '#FF955A',
          borderRadius: 4,
          borderSkipped: false,
          barPercentage: 0.5,
          categoryPercentage: 0.7,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label(context: any) {
              return `${
                context.dataset.label
              }: ₦${context.raw.toLocaleString()}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            font: {
              size: 11,
            },
            color: '#767676',
          },
        },
        y: {
          grid: {
            color: '#E5E7EB',
            drawBorder: false,
          },
          ticks: {
            font: {
              size: 11,
            },
            color: '#767676',
            callback(value: any) {
              if (value >= 1000000) return `₦${(value / 1000000).toFixed(1)}m`;
              if (value >= 1000) return `₦${(value / 1000).toFixed(1)}k`;
              return `₦${value}`;
            },
          },
          beginAtZero: true,
        },
      },
    },
  };
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
              Bank Statement Analysis
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
                Bank Statement Risk Score
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
                {formatScore(bankStatementScore)}
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

            <Box
              w="100%"
              bg="#FCFDFD"
              border="1px solid #F7F8FA"
              borderRadius="5px"
              p={2}
            >
              <Text fontSize="sm" fontWeight="400" color="bodyText.100" mb={2}>
                - MoM Inflow and Outflow
              </Text>
              <TableContainer
                bg="white"
                w="100%"
                borderRadius="4px"
                border="1px solid #E5E7EB"
                p={4}
              >
                <VStack alignItems="flex-start" w="100%" mb={4}>
                  <Text
                    fontSize={['14px', 'md']}
                    fontWeight="700"
                    color="#2E2E30"
                  >
                    {/* Month on Month Overview ( Jan 2024 - Jan 2025) */}
                    Month on Month Overview ({monthlyInflowData[0]?.month_name} {monthlyInflowData[0]?.year} - {monthlyInflowData[monthlyInflowData.length - 1]?.month_name} {monthlyInflowData[monthlyInflowData.length - 1]?.year})
                  </Text>

                  <HStack spacing={4} w="100%">
                    <HStack>
                      <Box bg="#344BFD" w="10px" h="10px" borderRadius="full" />
                      <Text fontSize="sm" fontWeight="500" color="#767676">
                        Total Inflow{' '}
                        <Text
                          as="span"
                          fontSize="13px"
                          fontWeight="700"
                          color="bodyText.100"
                        >
                          {totalInflow.toLocaleString()}
                        </Text>
                      </Text>
                    </HStack>

                    <HStack>
                      <Box bg="#FF955A" w="10px" h="10px" borderRadius="full" />
                      <Text fontSize="sm" fontWeight="500" color="#767676">
                        Total Outflow{' '}
                        <Text
                          as="span"
                          fontSize="13px"
                          fontWeight="700"
                          color="bodyText.100"
                        >
                          {totalOutflow.toLocaleString()}
                        </Text>
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>

                <Table size="sm" w="100%">
                  <Thead bg="#FAFAFA" borderTopColor="border.100">
                    <Tr>
                      <Th p={4}>
                        <Text
                          fontSize="14px"
                          fontWeight="700"
                          color="bodyText.200"
                          textTransform="capitalize"
                        >
                          SN
                        </Text>
                      </Th>

                      <Th>
                        <Text
                          fontSize="14px"
                          fontWeight="700"
                          color="bodyText.200"
                          textTransform="capitalize"
                        >
                          Inflow
                        </Text>
                      </Th>

                      <Th>
                        <Text
                          fontSize="14px"
                          fontWeight="700"
                          color="bodyText.200"
                          textTransform="capitalize"
                        >
                          Outflow
                        </Text>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {transformedBankStatementData.map((report, index) => (
                      <Tr
                        key={index}
                        _hover={{
                          bg: '#FAFAFA',
                        }}
                        cursor="pointer"
                      >
                        <Td py={4} borderBottom="1px solid #FAFAFA">
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="bodyText.200"
                          >
                            {report.SN}
                          </Text>
                        </Td>

                        <Td py={4} borderBottom="1px solid #FAFAFA">
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="bodyText.100"
                          >
                            {formatCurrency(report.Inflow)}
                          </Text>
                        </Td>

                        <Td py={4} borderBottom="1px solid #FAFAFA">
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="bodyText.100"
                          >
                            {formatCurrency(report.Outflow)}
                          </Text>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>

              {/* Bar Chart */}
              <Box
                w="100%"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
                mt={4}
              >
                <Box
                  w="100%"
                  bg="white"
                  borderRadius="4px"
                  p={4}
                  border="1px solid #E5E7EB"
                >
                  <Box w="100%" h="300px" position="relative">
                    <Bar
                      data={dynamicBarChartConfig.data}
                      options={dynamicBarChartConfig.options}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* <Box
              w="100%"
              bg="#FCFDFD"
              border="1px solid #F7F8FA"
              borderRadius="5px"
              p={2}
              mt={8}
            >
              <Text fontSize="sm" fontWeight="400" color="bodyText.100" mb={2}>
                - WoW Outflow and Outflow
              </Text>
              <TableContainer
                bg="white"
                w="100%"
                borderRadius="4px"
                border="1px solid #E5E7EB"
                p={4}
              >
                <VStack alignItems="flex-start" w="100%" mb={4}>
                  <Text
                    fontSize={['14px', 'md']}
                    fontWeight="700"
                    color="#2E2E30"
                  >
                    Week on Week Overview ( 11th Jan 2025 -27th Feb 2025)
                  </Text>

                  <HStack spacing={4} w="100%">
                    <HStack>
                      <Box bg="#344BFD" w="10px" h="10px" borderRadius="full" />
                      <Text fontSize="sm" fontWeight="500" color="#767676">
                        Total Inflow{' '}
                        <Text
                          as="span"
                          fontSize="13px"
                          fontWeight="700"
                          color="bodyText.100"
                        >
{totalInflow.toLocaleString()}
                        </Text>
                      </Text>
                    </HStack>

                    <HStack>
                      <Box bg="#FF955A" w="10px" h="10px" borderRadius="full" />
                      <Text fontSize="sm" fontWeight="500" color="#767676">
                        Total Outflow{' '}
                        <Text
                          as="span"
                          fontSize="13px"
                          fontWeight="700"
                          color="bodyText.100"
                        >
{totalInflow.toLocaleString()}
                        </Text>
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>

                <Table size="sm" w="100%">
                  <Thead bg="#FAFAFA" borderTopColor="border.100">
                    <Tr>
                      <Th p={4}>
                        <Text
                          fontSize="14px"
                          fontWeight="700"
                          color="bodyText.200"
                          textTransform="capitalize"
                        >
                          SN
                        </Text>
                      </Th>

                      <Th>
                        <Text
                          fontSize="14px"
                          fontWeight="700"
                          color="bodyText.200"
                          textTransform="capitalize"
                        >
                          Inflow
                        </Text>
                      </Th>

                      <Th>
                        <Text
                          fontSize="14px"
                          fontWeight="700"
                          color="bodyText.200"
                          textTransform="capitalize"
                        >
                          Outflow
                        </Text>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {transformedBankStatementData.map((report, index) => (
                      <Tr
                        key={index}
                        _hover={{
                          bg: '#FAFAFA',
                        }}
                        cursor="pointer"
                      >
                        <Td py={4} borderBottom="1px solid #FAFAFA">
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="bodyText.200"
                          >
                            {report.SN}
                          </Text>
                        </Td>

                        <Td py={4} borderBottom="1px solid #FAFAFA">
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="bodyText.100"
                          >
                            {formatCurrency(report.Inflow)}
                          </Text>
                        </Td>

                        <Td py={4} borderBottom="1px solid #FAFAFA">
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="bodyText.100"
                          >
                            {formatCurrency(report.Outflow)}
                          </Text>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>

              
              <Box
                w="100%"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
                mt={4}
              >
                <Box
                  w="100%"
                  bg="white"
                  borderRadius="4px"
                  p={4}
                  border="1px solid #E5E7EB"
                >
                  <Box w="100%" h="300px" position="relative">
                    <Bar
                      data={weeklyBarChartConfig.data}
                      options={weeklyBarChartConfig.options}
                    />
                  </Box>
                </Box>
              </Box>
            </Box> */}
          </Box>
        </VStack>

        {/* Bank Statement Metrics */}
        <Box
          borderRadius="8px"
          border="1px solid #E5E7EB"
          w="100%"
          p={4}
          mt={8}
        >
          <SimpleGrid columns={[1, 2]} gap={8}>
            <VStack alignItems="flex-start" spacing={3} w="100%">
              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  Gambling status:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600" textTransform="capitalize">
                  {bankStatementData?.gambling_status || 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  Account sweep:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600" textTransform="capitalize">
                  {bankStatementData?.account_sweep || 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  Inflow outflow rate (month_on_month):
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.inflow_outflow_rate ? `${(bankStatementData.inflow_outflow_rate * 100).toFixed(1)}%` : 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  Overall inflow outflow:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.overall_inflow_outflow_rate ? `${(bankStatementData.overall_inflow_outflow_rate * 100).toFixed(1)}%` : 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  Percentage of inflow irregularity:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.percentage_of_inflow_irregularity ? `${bankStatementData.percentage_of_inflow_irregularity}%` : 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  % debit transactions:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.percentage_debit_transactions ? `${bankStatementData.percentage_debit_transactions}%` : 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  % credit transactions:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.percentage_credit_transactions ? `${bankStatementData.percentage_credit_transactions}%` : 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  % transactions less than 10k:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.percentage_transactions_less_than_10k ? `${bankStatementData.percentage_transactions_less_than_10k}%` : 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  % days with low transaction amount(10k):
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.percentage_days_with_low_transaction_amount ? `${bankStatementData.percentage_days_with_low_transaction_amount}%` : 'N/A'}
                </Text>
              </HStack>
            </VStack>

            <VStack alignItems="flex-start" spacing={3} w="100%">
              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  % balance less than 10k:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.percentage_less_than_10k ? `${bankStatementData.percentage_less_than_10k}%` : 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  Most frequent balance range:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.most_frequent_balance_range || 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  Most frequent transaction range:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.most_frequent_transaction_range || 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  Missing transactions:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.missing_transactions || 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  No of self transfer inflows:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.no_of_self_transfer_inflows || 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  No of self transfer outflows:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.no_of_self_transfer_outflows || 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  No transacting months:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {bankStatementData?.no_transacting_months || 'N/A'}
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  How many months is the statement submitted:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  {monthlyInflowData.length || 'N/A'}
                </Text>
              </HStack>
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>
    </VStack>
  );
};

export default BankStatementAnalysis;
