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

import { barChartConfig, weeklyBarChartConfig } from './ChartConfig';

type BankStatementData = {
  SN: number;
  Inflow: number;
  Outflow: number;
}[];

interface BankStatementAnalysisProps {
  bankStatementData: BankStatementData;
}

const BankStatementAnalysis = ({
  bankStatementData,
}: BankStatementAnalysisProps) => {
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
                    Month on Month Overview ( Jan 2024 - Jan 2025)
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
                          18,883,902
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
                          18,883,902
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
                    {bankStatementData.map((report, index) => (
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
                      data={barChartConfig.data}
                      options={barChartConfig.options}
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
                          18,883,902
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
                          18,883,902
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
                    {bankStatementData.map((report, index) => (
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
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  No Gambling Transactions Found
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
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  Yes
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
                  70%
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
                  Percentage of inflow irregularity:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  12%
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
                  70%
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
                  100%
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
                  30%
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
                  80%
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
                  21%
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
                  1,390,000 - 1,343,990
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
                  90,000 - 100,000
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
                  No of self transfer inflows:
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
                  No of self transfer outflows:
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  231
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
                  34
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
                  32
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
