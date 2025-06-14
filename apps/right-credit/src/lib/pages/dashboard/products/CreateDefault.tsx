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
  SimpleGrid,
} from '@chakra-ui/react';
import type { FormikProps } from 'formik';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';

import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import Button from '@shared/components/ui/Button';
import Input from '@shared/components/ui/Input';
import Select from '@shared/components/ui/Select';
import TextArea from '@shared/components/ui/TextArea';

interface FormValues {
  name: string;
  amount: string;
  calculationType: string;
}

const CreateDefaultPenalty = () => {
  const router = useRouter();
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
                  Create a default penalty
                </Text>
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  Provide the details below to create a newpenalty
                </Text>
              </VStack>
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
                              Late Repayment Penalty?
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
                              Enable Late Repayment Penalty?
                            </Text>
                            <RadioGroup
                              value={values.calculationType}
                              onChange={(value) =>
                                setFieldValue('calculationType', value)
                              }
                            >
                              <Stack spacing={4} direction="row" w="100%">
                                <Radio value="fixed">
                                  <Text
                                    fontSize="14px"
                                    fontWeight="500"
                                    color="bodyText.200"
                                  >
                                    Yes
                                  </Text>
                                </Radio>
                                <Radio value="percentage">
                                  <Text
                                    fontSize="14px"
                                    fontWeight="500"
                                    color="bodyText.200"
                                  >
                                    No
                                  </Text>
                                </Radio>
                              </Stack>
                            </RadioGroup>
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
                              Penalty Calculation
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
                              Select how penalty will be calculated
                            </Text>
                            <RadioGroup
                              value={values.calculationType}
                              onChange={(value) =>
                                setFieldValue('calculationType', value)
                              }
                            >
                              <Stack spacing={4} direction="row" w="100%">
                                <Radio value="fixed">
                                  <Text
                                    fontSize="14px"
                                    fontWeight="500"
                                    color="bodyText.200"
                                  >
                                    Percentage (%) based
                                  </Text>
                                </Radio>
                                <Radio value="percentage">
                                  <Text
                                    fontSize="14px"
                                    fontWeight="500"
                                    color="bodyText.200"
                                  >
                                    Fixed Amount
                                  </Text>
                                </Radio>
                              </Stack>
                            </RadioGroup>
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
                              Calculate Penalty on / Calculate Penalty if there
                              is
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
                              label="Select how fee is to be calculated"
                              name="feePercentage"
                              options={[
                                {
                                  label: 'Overdue Principal',
                                  value: 'overduePrincipal',
                                },
                                {
                                  label: 'Overdue Interest',
                                  value: 'overdueInterest',
                                },
                                {
                                  label: 'Overdue (Principal + Interest)',
                                  value: 'overduePrincipalInterest',
                                },
                                {
                                  label: 'Overdue (Principal +   + Fees)',
                                  value: 'overduePrincipalInterestFees',
                                },
                                {
                                  label:
                                    'Overdue (Principal + Interest + Penalty)',
                                  value: 'overduePrincipalInterestPenalty',
                                },
                                {
                                  label:
                                    'Overdue (Principal + Interest + Fees + Penalty)',
                                  value: 'overduePrincipalInterestFeesPenalty',
                                },
                                {
                                  label: 'Overdue (Interest + Fees)',
                                  value: 'overdueInterestFees',
                                },
                                {
                                  label: 'Overdue (Interest + Fees)',
                                  value: 'overdueInterestFees',
                                },
                                {
                                  label: 'Overdue (Interest + Fees)',
                                  value: 'overdueInterestFees',
                                },
                              ]}
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
                              Penalty after each overdue collection date
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
                              Select penalty type
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
                                    Penalty Interest Rate %
                                  </Text>
                                </Radio>
                                <Radio value="percentage">
                                  <Text
                                    fontSize="14px"
                                    fontWeight="500"
                                    color="bodyText.200"
                                  >
                                    Penalty Amount
                                  </Text>
                                </Radio>
                              </Stack>
                            </RadioGroup>

                            {values.calculationType && (
                              <SimpleGrid columns={[1, 2]} spacing={4} w="100%">
                                <Input
                                  label="Enter interest rate"
                                  name="amount"
                                  type="number"
                                  placeholder="Enter interest rate"
                                />

                                <Input
                                  label="Grace Period (days) (optional)"
                                  name="amount"
                                  type="number"
                                  placeholder="Enter grace period"
                                />
                              </SimpleGrid>
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
                              Optional Recurring Penalty between collection
                              dates
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
                              Select recurring penalty type
                            </Text>
                            <RadioGroup
                              value={values.calculationType}
                              onChange={(value) =>
                                setFieldValue('calculationType', value)
                              }
                              my={2}
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
                                    Recurring Penalty Interest Rate %
                                  </Text>
                                </Radio>
                                <Radio value="percentage">
                                  <Text
                                    fontSize="14px"
                                    fontWeight="500"
                                    color="bodyText.200"
                                  >
                                    Recurring Penalty Amount
                                  </Text>
                                </Radio>
                              </Stack>
                            </RadioGroup>

                            <Box mt={2}>
                              <Text
                                fontSize="14px"
                                fontWeight="400"
                                color="bodyText.100"
                                mb={2}
                              >
                                Select the recurring period
                              </Text>
                              <Box
                                w="100%"
                                border="1px solid #E5E7EB"
                                borderRadius="4px"
                                p={4}
                              >
                                {values.calculationType && (
                                  <SimpleGrid
                                    columns={[1, 2]}
                                    spacing={4}
                                    w="100%"
                                  >
                                    <Select
                                      label="Every (Number)"
                                      name="recurringPeriod"
                                      options={[
                                        { label: 'Daily', value: 'daily' },
                                        { label: 'Weekly', value: 'weekly' },
                                      ]}
                                    />
                                    <Select
                                      label="Frequency"
                                      name="recurringPeriod"
                                      options={[
                                        { label: 'Daily', value: 'daily' },
                                        { label: 'Weekly', value: 'weekly' },
                                      ]}
                                    />
                                  </SimpleGrid>
                                )}
                              </Box>
                            </Box>
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
                              Optional Penalty Description
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
                            <TextArea
                              placeholder="Enter description"
                              name="description"
                              rows={4}
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
    </DashboardLayout>
  );
};

export default CreateDefaultPenalty;
