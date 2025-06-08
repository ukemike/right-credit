import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  IconButton,
  Image,
  Box,
  VStack,
  HStack,
  Text,
  Progress,
} from '@chakra-ui/react';
import { useState } from 'react';

import AddRepayment from '../../modals/AddRepayment';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import { formatCurrency } from '~/lib/utils/formatter';

const Repayments = () => {
  const repaymentsData = [
    {
      sn: 1,
      description: 'Loan Repayment',
      amount: 1000,
      collectionDate: '2021-01-01',
    },
    {
      sn: 2,
      description: 'Loan Repayment',
      amount: 1000,
      collectionDate: '2021-01-01',
    },
    {
      sn: 3,
      description: 'Loan Repayment',
      amount: 1000,
      collectionDate: '2021-01-01',
    },
    {
      sn: 4,
      description: 'Loan Repayment',
      amount: 1000,
      collectionDate: '2021-01-01',
    },
    {
      sn: 5,
      description: 'Loan Repayment',
      amount: 1000,
      collectionDate: '2021-01-01',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Box mt={4}>
      <VStack align="flex-start" mb={4}>
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
        >
          <VStack align="flex-start" spacing={0}>
            <Text fontSize={['md', 'lg']} fontWeight="700" color="brand.100">
              Next due payment: {formatCurrency(1000)}
            </Text>
            <Text fontSize="14px" fontWeight="400" color="#6B7280">
              Due Mar. 29
            </Text>
          </VStack>
          <Button
            text="Add Repayment"
            variant="outline"
            size="sm"
            fontWeight={600}
            onClick={handleModalOpen}
          />
        </HStack>

        <VStack w="full" align="flex-start">
          <Text fontSize="14px" fontWeight="500" color="bodyText.600">
            5/24 payments made
          </Text>
          <Progress
            value={10}
            w="full"
            colorScheme="blue"
            borderRadius="8"
            size="xs"
          />
        </VStack>
      </VStack>
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
                fontSize="14px"
                fontWeight="500"
                textTransform="capitalize"
                py={4}
              >
                S/N
              </Th>
              <Th
                color="headText.400"
                fontSize="14px"
                fontWeight="500"
                textTransform="capitalize"
              >
                Description
              </Th>
              <Th
                color="headText.400"
                fontSize="14px"
                fontWeight="500"
                textTransform="capitalize"
              >
                Amount
              </Th>
              <Th
                color="headText.400"
                fontSize="14px"
                fontWeight="500"
                textTransform="capitalize"
              >
                Collection Date
              </Th>
              <Th></Th>
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
                  fontSize="14px"
                  fontWeight="400"
                  textTransform="capitalize"
                >
                  {repayment.sn}
                </Td>

                <Td color="bodyText.100" fontSize="14px" fontWeight="400">
                  {repayment.description}
                </Td>

                <Td color="bodyText.100" fontSize="14px" fontWeight="400">
                  {formatCurrency(repayment.amount)}
                </Td>

                <Td color="bodyText.100" fontSize="14px" fontWeight="400">
                  {repayment.collectionDate}
                </Td>

                <Td>
                  <IconButton
                    aria-label="Edit"
                    icon={<Image src="/images/download-2.svg" alt="Edit" />}
                    size="sm"
                    variant="ghost"
                    _hover={{
                      bg: 'transparent',
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="xl"
        body={<AddRepayment />}
      />
    </Box>
  );
};

export default Repayments;
