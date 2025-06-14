'use client';

import {
  Box,
  HStack,
  Text,
  IconButton,
  Image,
  VStack,
  AccordionButton,
  Accordion,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Stack,
  Radio,
  RadioGroup,
  Badge,
} from '@chakra-ui/react';
import type { FormikProps } from 'formik';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import Button from '@shared/components/ui/Button';
import Input from '@shared/components/ui/Input';
import ModalComponent from '@shared/components/ui/Modal';
import Select from '@shared/components/ui/Select';

interface FormValues {
  name: string;
  amount: string;
  calculationType: string;
}

const CreateLoanFee = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DashboardLayout>
      <Box>
        <HStack
          alignItems="center"
          spacing={2}
          borderBottom="1px solid #E5E7EB"
          pb={4}
        >
          <IconButton
            aria-label="Back"
            icon={<Image src="/images/back.svg" alt="arrow-left" />}
            onClick={() => router.back()}
            size="sm"
            variant="ghost"
            _hover={{ bg: 'transparent' }}
            m={0}
            p={0}
          />
          <Text fontSize="md" fontWeight="700" color="bodyText.100">
            Back to main menu
          </Text>
        </HStack>

        <VStack alignItems="center" justifyContent="center" h="100%" mt={4}>
          <Box
            bg="white"
            borderRadius="4px"
            boxShadow="sm"
            maxW="600px"
            w="100%"
            borderWidth={1}
            borderColor="border.300"
          >
            <HStack
              justifyContent="space-between"
              w="100%"
              borderBottom="1px solid #E5E7EB"
              px={4}
              py={2}
            >
              <VStack alignItems="flex-start" spacing={0}>
                <Text fontSize="md" fontWeight="700" color="bodyText.100">
                  Create Loan Fee
                </Text>
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  Provide the details below to add new user
                </Text>
              </VStack>

              <HStack alignItems="center" spacing={2}>
                <Text fontSize="14px" fontWeight="700" color="brand.100">
                  Preview
                </Text>
                <IconButton
                  aria-label="Back"
                  icon={<Image src="/images/preview.svg" alt="preview" />}
                  onClick={handleModal}
                  size="sm"
                  variant="ghost"
                />
              </HStack>
            </HStack>

            <VStack p={4} w="100%">
              <Formik<FormValues>
                initialValues={{
                  name: '',
                  amount: '',
                  calculationType: '',
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ values, setFieldValue }: FormikProps<FormValues>) => (
                  <Form style={{ width: '100%' }}>
                    <Accordion allowToggle w="full">
                      <AccordionItem
                        border="1px solid #E5E7EB"
                        borderRadius="4px"
                        mb={4}
                      >
                        <h2>
                          <AccordionButton
                            bg="#F9FBFC"
                            color="black"
                            borderRadius="4px"
                            p={4}
                            _expanded={{
                              bg: '#F9FBFC',
                              color: 'brand.100',
                            }}
                            _hover={{
                              bg: '#F9FBFC',
                              color: 'bodyText.200',
                            }}
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              color="bodyText.200"
                              fontSize="md"
                              fontWeight={600}
                            >
                              Name
                            </Box>
                            <AccordionIcon
                              color="bodyText.200"
                              fontSize="24px"
                            />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          px={4}
                          pb={4}
                          bg="white"
                          borderBottomRadius="10px"
                        >
                          <VStack spacing={2}>
                            <Input
                              label="Name your fee"
                              name="name"
                              type="text"
                              placeholder="Enter fee name"
                            />
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem
                        border="1px solid #E5E7EB"
                        borderRadius="4px"
                        mb={4}
                      >
                        <h2>
                          <AccordionButton
                            bg="#F9FBFC"
                            color="black"
                            borderRadius="4px"
                            p={4}
                            _expanded={{
                              bg: '#F9FBFC',
                              color: 'brand.100',
                            }}
                            _hover={{
                              bg: '#F9FBFC',
                              color: 'bodyText.200',
                            }}
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              color="bodyText.200"
                              fontSize="md"
                              fontWeight={600}
                            >
                              Fee Calculation
                            </Box>
                            <AccordionIcon
                              color="bodyText.200"
                              fontSize="24px"
                            />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          px={4}
                          pb={4}
                          bg="white"
                          borderBottomRadius="10px"
                        >
                          <VStack spacing={2} alignItems="stretch" mt={2}>
                            <Text
                              fontSize="14px"
                              fontWeight="400"
                              color="bodyText.100"
                            >
                              Select fee calculation type
                            </Text>
                            <RadioGroup
                              value={values.calculationType}
                              onChange={(value) =>
                                setFieldValue('calculationType', value)
                              }
                            >
                              <Stack
                                spacing={4}
                                direction="row"
                                w="100%"
                                justifyContent="space-between"
                              >
                                <Radio value="fixed">
                                  <Text
                                    fontSize="14px"
                                    fontWeight="500"
                                    color="bodyText.200"
                                  >
                                    Fixed Amount
                                  </Text>
                                </Radio>
                                <Radio value="percentage">
                                  <Text
                                    fontSize="14px"
                                    fontWeight="500"
                                    color="bodyText.200"
                                  >
                                    Percentage (%) based
                                  </Text>
                                </Radio>
                              </Stack>
                            </RadioGroup>

                            {values.calculationType && (
                              <Input
                                label={
                                  values.calculationType === 'fixed'
                                    ? 'Enter amount'
                                    : 'Enter percentage'
                                }
                                name="amount"
                                type="number"
                                placeholder={
                                  values.calculationType === 'fixed'
                                    ? 'Enter amount'
                                    : 'Enter percentage'
                                }
                              />
                            )}
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem
                        border="1px solid #E5E7EB"
                        borderRadius="4px"
                        mb={4}
                      >
                        <h2>
                          <AccordionButton
                            bg="#F9FBFC"
                            color="black"
                            borderRadius="4px"
                            p={4}
                            _expanded={{
                              bg: '#F9FBFC',
                              color: 'brand.100',
                            }}
                            _hover={{
                              bg: '#F9FBFC',
                              color: 'bodyText.200',
                            }}
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              color="bodyText.200"
                              fontSize="md"
                              fontWeight={600}
                            >
                              Calculate Fee percentage
                            </Box>
                            <AccordionIcon
                              color="bodyText.200"
                              fontSize="24px"
                            />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          px={4}
                          pb={4}
                          bg="white"
                          borderBottomRadius="10px"
                        >
                          <VStack spacing={2}>
                            <Select
                              label="Select fee percentage"
                              name="feePercentage"
                              options={[
                                {
                                  label: 'Total Loan Due Principal Amount',
                                  value: 'totalLoanDuePrincipalAmount',
                                },
                                {
                                  label: 'Total Loan Due Interest Amount',
                                  value: 'totalLoanDueInterestAmount',
                                },
                                {
                                  label: 'Total Loan Due Principal',
                                  value: 'totalLoanDuePrincipal',
                                },
                                {
                                  label: 'Interest Amount',
                                  value: 'interestAmount',
                                },
                              ]}
                            />
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    <HStack justifyContent="flex-end" w="100%">
                      <Button
                        text="Save"
                        variant="outline"
                        width="100%"
                        size="md"
                      />
                      <Button text="Create" width="100%" size="md" />
                    </HStack>
                  </Form>
                )}
              </Formik>
            </VStack>
          </Box>
        </VStack>
      </Box>

      <ModalComponent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="lg"
        body={
          <Box
            bg="white"
            border="1px solid #E5E7EB"
            p={4}
            mt={10}
            borderRadius="12px"
          >
            <VStack alignItems="flex-start" spacing={0}>
              <Text fontSize="md" fontWeight="700" color="bodyText.100">
                Loan fees
              </Text>
              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
                mt="2"
              >
                <Text fontSize="sm" fontWeight="300" color="bodyText.200">
                  Name
                </Text>
                <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                  Basic Loans
                </Text>
              </HStack>

              <HStack
                justifyContent="space-between"
                w="100%"
                borderBottom="1px solid #E5E7EB"
                pb="2"
                mt="2"
              >
                <Text fontSize="sm" fontWeight="300" color="bodyText.200">
                  Fee calculation
                </Text>

                <HStack>
                  <Badge
                    bg="#E7ECFC"
                    color="brand.100"
                    rounded="full"
                    textTransform="capitalize"
                    fontSize="sm"
                    fontWeight="600"
                    px={2}
                    py={1}
                  >
                    Fixed
                  </Badge>
                  <Text fontSize="14px" fontWeight="600" color="bodyText.600">
                    120,000
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        }
      />
    </DashboardLayout>
  );
};

export default CreateLoanFee;
