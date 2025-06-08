import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Box,
  HStack,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import Button from '../../ui/Button';

const LoanSchedule = () => {
  const repaymentsData = [
    {
      sn: 1,
      date: '18-Feb-2025',
      description: 'Disbursement',
      principal: 1000000,
      interest: 0,
      fees: 0,
      penalties: 0,
      totalPaid: 0,
      pendingDue: 0,
      totalDue: 0,
      principalBalance: 1000000,
    },
    {
      sn: 2,
      date: '18-Feb-2025',
      description: 'Due',
      principal: 100000,
      interest: 20000,
      fees: 1000,
      penalties: 25000,
      totalPaid: 100000,
      pendingDue: 146000,
      totalDue: 146000,
      principalBalance: 1000000,
    },
    {
      sn: 3,
      date: '18-Feb-2025',
      description: 'Repayment Received',
      principal: 54000,
      interest: 20000,
      fees: 1000,
      penalties: 10000,
      totalPaid: 0,
      pendingDue: 46000,
      totalDue: 146000,
      principalBalance: 946000,
    },
    {
      sn: 4,
      date: '18-Feb-2025',
      description: 'Due',
      principal: 100000,
      interest: 20000,
      fees: 1000,
      penalties: 10000,
      totalPaid: 0,
      pendingDue: 167000,
      totalDue: 267000,
      principalBalance: 946000,
    },
    {
      sn: 5,
      date: '18-Feb-2025',
      description: 'Default Fee',
      principal: 0,
      interest: 0,
      fees: 0,
      penalties: 0,
      totalPaid: 0,
      pendingDue: 168000,
      totalDue: 268000,
      principalBalance: 946000,
    },
    {
      sn: 6,
      date: '18-Feb-2025',
      description: 'Due',
      principal: 100000,
      interest: 20000,
      fees: 1000,
      penalties: 0,
      totalPaid: 0,
      pendingDue: 0,
      totalDue: 388000,
      principalBalance: 946000,
    },
    {
      sn: 7,
      date: '18-Feb-2025',
      description: 'Due',
      principal: 100000,
      interest: 20000,
      fees: 1000,
      penalties: 0,
      totalPaid: 0,
      pendingDue: 0,
      totalDue: 509000,
      principalBalance: 946000,
    },
    {
      sn: 8,
      date: '18-Feb-2025',
      description: 'Due',
      principal: 100000,
      interest: 20000,
      fees: 1000,
      penalties: 0,
      totalPaid: 0,
      pendingDue: 0,
      totalDue: 630000,
      principalBalance: 946000,
    },
    {
      sn: 9,
      date: '18-Feb-2025',
      description: 'Due',
      principal: 100000,
      interest: 20000,
      fees: 1000,
      penalties: 0,
      totalPaid: 0,
      pendingDue: 0,
      totalDue: 751000,
      principalBalance: 946000,
    },
    {
      sn: 10,
      date: '18-Feb-2025',
      description: 'Due',
      principal: 100000,
      interest: 20000,
      fees: 1000,
      penalties: 0,
      totalPaid: 0,
      pendingDue: 0,
      totalDue: 872000,
      principalBalance: 946000,
    },
  ];

  const gridItems = [
    { label: 'Principal', value: '500,000', isFirstRow: true },
    { label: 'Principal Balance', value: '80,000', isFirstRow: true },
    { label: 'Interest', value: '10%', isFirstRow: true },
    { label: 'Total Paid', value: '500,000', isFirstRow: true },
    { label: 'Total Pending Due', value: '200,000', isFirstRow: true },
    { label: 'Interest Amount', value: '200,000', isFirstRow: false },
    { label: 'Total Fees', value: '1,000', isFirstRow: false },
    { label: 'Total Penalties ', value: '20,000', isFirstRow: false },
    { label: 'Total Due', value: '389,900', isFirstRow: false },
    { label: 'Tenure', value: '12 months', isFirstRow: false },
  ];

  return (
    <Box mt={4}>
      <HStack
        justify="space-between"
        w="100%"
        flexDirection={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{
          base: 'flex-start',
          md: 'center',
        }}
        mb={4}
      >
        <Text fontSize="md" fontWeight="600" color="headText.200">
          Loan schedule
        </Text>
        <HStack gap={2} flexWrap="wrap">
          <Button
            text="Download"
            variant="outline"
            size="sm"
            fontWeight={600}
          />

          <Button
            text="Early Settlement"
            variant="outline"
            size="sm"
            fontWeight={600}
          />

          <Button
            text="Restructure loan"
            variant="outline"
            size="sm"
            fontWeight={600}
          />
        </HStack>
      </HStack>

      <Grid
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(5, 1fr)',
        }}
        gap={0}
        borderBottomWidth={1}
        borderBottomColor="border.300"
        mb={4}
        bg="white"
      >
        {gridItems.map((item, index) => (
          <GridItem
            key={index}
            p={4}
            borderColor="border.300"
            borderRightWidth={1}
            borderTopWidth={1}
            borderLeftWidth={index % 5 === 0 ? 1 : 0}
          >
            <Text color="headText.200" fontSize="14px" fontWeight="400">
              {item.label}
            </Text>
            <Text color="headText.100" fontWeight="600" fontSize="md">
              {item.value}
            </Text>
          </GridItem>
        ))}
      </Grid>

      <TableContainer
        bg="white"
        borderRadius="md"
        borderWidth={1}
        borderColor="border.300"
      >
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
                py={4}
              >
                S/N
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Date
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Description
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Principal
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Interest
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Fees
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Penalties
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Total Paid
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Pending Due
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Total Due
              </Th>
              <Th
                color="headText.400"
                fontSize="sm"
                fontWeight="700"
                textTransform="capitalize"
              >
                Principal Balance
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {repaymentsData.map((repayment) => (
              <Tr
                key={repayment.sn}
                _hover={{
                  bg: '#FAFAFA',
                }}
                cursor="pointer"
              >
                <Td
                  py={4}
                  color="headText.400"
                  fontSize="sm"
                  fontWeight="400"
                  textTransform="capitalize"
                >
                  {repayment.sn}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.date}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.description}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.principal}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.interest}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.fees}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.penalties}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.totalPaid}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.pendingDue}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.totalDue}
                </Td>

                <Td color="bodyText.100" fontSize="sm" fontWeight="400">
                  {repayment.principalBalance}
                </Td>
              </Tr>
            ))}
            <Tr borderTopWidth="1px" borderColor="gray.300">
              <Td colSpan={2}></Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                Total Due
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 1,900,000
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 180,000
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 9,000
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 26,000
              </Td>
              <Td colSpan={4}></Td>
            </Tr>
            <Tr>
              <Td colSpan={2}></Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                Total Paid
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 54,000
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 20,000
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 1,000
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 25,000
              </Td>
            </Tr>
            <Tr>
              <Td colSpan={2}></Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                Pending Due
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 1,846,000
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 160,000
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 8,000
              </Td>
              <Td fontWeight="700" py={4} color="bodyText.100" fontSize="sm">
                ₦ 1,000
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LoanSchedule;
