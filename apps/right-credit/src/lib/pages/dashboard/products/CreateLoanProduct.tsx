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
  SimpleGrid,
  Badge,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import type { FormikProps } from 'formik';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';

import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import Button from '@shared/components/ui/Button';
import Input from '@shared/components/ui/Input';
import Select from '@shared/components/ui/Select';

interface FormValues {
  name: string;
  amount: string;
  calculationType: string;
}

const CreateLoanProduct = () => {
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
                  Create a new loan product
                </Text>
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  Provide the details below to add new user
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
                              label="What you are calling the loan product"
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
                              Principal Amount
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
                          <SimpleGrid columns={[1, 2]} spacing={4}>
                            <Input
                              label="Minimum Principal Amount"
                              name="minimumPrincipalAmount"
                              type="number"
                              placeholder="Enter minimum principal amount"
                            />

                            <Input
                              label="Maximum Principal Amount"
                              name="maximumPrincipalAmount"
                              type="number"
                              placeholder="Enter maximum principal amount"
                            />
                          </SimpleGrid>
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
                              Interest
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
                          <SimpleGrid
                            columns={[1, 2]}
                            spacing={4}
                            borderBottom="1px solid #E5E7EB"
                            pb={4}
                          >
                            <Select
                              label="Interest Method"
                              name="interestMethod"
                              options={[
                                { label: 'Flat', value: 'flat' },
                                { label: 'Reducing', value: 'reducing' },
                              ]}
                            />

                            <Select
                              label="Interest Type"
                              name="interestType"
                              options={[
                                { label: 'Simple', value: 'simple' },
                                { label: 'Compound', value: 'compound' },
                              ]}
                            />
                          </SimpleGrid>

                          <VStack
                            mt={4}
                            w="100%"
                            alignItems="flex-start"
                            border="1px solid #E5E7EB"
                            p={4}
                            borderRadius="4px"
                          >
                            <Text fontSize="md" fontWeight="700" color="black">
                              Interest Range
                            </Text>

                            <SimpleGrid columns={[1, 2]} spacing={4} w="100%">
                              <Input
                                label="Minimum Loan Interest"
                                name="minimumLoanInterest"
                                type="number"
                                placeholder="Enter minimum loan interest"
                              />

                              <Input
                                label="Maximum Loan Interest"
                                name="maximumLoanInterest"
                                type="number"
                                placeholder="Enter maximum loan interest"
                              />
                            </SimpleGrid>
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
                              Duration
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
                          <SimpleGrid
                            columns={[1, 2]}
                            spacing={4}
                            borderBottom="1px solid #E5E7EB"
                            pb={4}
                          >
                            <Select
                              label="Loan Duration Period"
                              name="loanDurationPeriod"
                              options={[
                                { label: 'Flat', value: 'flat' },
                                { label: 'Reducing', value: 'reducing' },
                              ]}
                            />
                          </SimpleGrid>

                          <VStack
                            mt={4}
                            w="100%"
                            alignItems="flex-start"
                            border="1px solid #E5E7EB"
                            p={4}
                            borderRadius="4px"
                          >
                            <Text fontSize="md" fontWeight="700" color="black">
                              Loan Duration
                            </Text>
                            <SimpleGrid columns={[1, 2]} spacing={4} w="100%">
                              <Input
                                label="Minimum Loan Duration"
                                name="minimumLoanDuration"
                                type="number"
                                placeholder="Enter minimum loan duration"
                              />

                              <Input
                                label="Maximum Loan Duration"
                                name="maximumLoanDuration"
                                type="number"
                                placeholder="Enter maximum loan duration"
                              />
                            </SimpleGrid>
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
                              Repayments
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
                          <SimpleGrid
                            columns={[1, 2]}
                            spacing={4}
                            borderBottom="1px solid #E5E7EB"
                            pb={4}
                          >
                            <Select
                              label="Repayment Cycle"
                              name="loanDurationPeriod"
                              options={[
                                { label: 'Flat', value: 'flat' },
                                { label: 'Reducing', value: 'reducing' },
                              ]}
                            />
                          </SimpleGrid>

                          <VStack
                            mt={4}
                            w="100%"
                            alignItems="flex-start"
                            border="1px solid #E5E7EB"
                            p={4}
                            borderRadius="4px"
                          >
                            <Text fontSize="md" fontWeight="700" color="black">
                              Number of Repayments
                            </Text>
                            <SimpleGrid columns={[1, 2]} spacing={4} w="100%">
                              <Input
                                label="Minimum Number of Repayments"
                                name="minimumNumberOfRepayments"
                                type="number"
                                placeholder="Enter minimum number of repayments"
                              />

                              <Input
                                label="Maximum Number of Repayments"
                                name="maximumNumberOfRepayments"
                                type="number"
                                placeholder="Enter maximum number of repayments"
                              />
                            </SimpleGrid>
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
                              Repayment Order
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
                          <VStack
                            mt={4}
                            w="100%"
                            alignItems="flex-start"
                            border="1px solid #E5E7EB"
                            p={4}
                            borderRadius="4px"
                          >
                            <Text
                              fontSize="14px"
                              fontWeight="400"
                              color="bodyText.100"
                            >
                              This is how repayments made will be shared
                            </Text>
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
                              Fees
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
                          <VStack
                            mt={4}
                            w="100%"
                            alignItems="flex-start"
                            border="1px solid #E5E7EB"
                            p={4}
                            borderRadius="4px"
                          >
                            <Text
                              fontSize="14px"
                              fontWeight="400"
                              color="bodyText.100"
                            >
                              This is how repayments made will be shared
                            </Text>

                            <SimpleGrid columns={[1, 2]} spacing={4} w="100%">
                              <Box
                                bg="white"
                                border="1px solid #E5E7EB"
                                p={4}
                                borderRadius="12px"
                              >
                                <VStack alignItems="flex-start" spacing={0}>
                                  <HStack
                                    justifyContent="space-between"
                                    w="100%"
                                    borderBottom="1px solid #E5E7EB"
                                    pb="2"
                                    mt="2"
                                  >
                                    <Text
                                      fontSize="sm"
                                      fontWeight="300"
                                      color="bodyText.200"
                                    >
                                      Name
                                    </Text>
                                    <Text
                                      fontSize="14px"
                                      fontWeight="600"
                                      color="bodyText.600"
                                    >
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
                                    <Text
                                      fontSize="sm"
                                      fontWeight="300"
                                      color="bodyText.200"
                                    >
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
                                      <Text
                                        fontSize="14px"
                                        fontWeight="600"
                                        color="bodyText.600"
                                      >
                                        120,000
                                      </Text>
                                    </HStack>
                                  </HStack>
                                </VStack>
                              </Box>

                              <Box
                                bg="white"
                                border="1px solid #E5E7EB"
                                p={4}
                                borderRadius="12px"
                              >
                                <VStack alignItems="flex-start" spacing={0}>
                                  <HStack
                                    justifyContent="space-between"
                                    w="100%"
                                    borderBottom="1px solid #E5E7EB"
                                    pb="2"
                                    mt="2"
                                  >
                                    <Text
                                      fontSize="sm"
                                      fontWeight="300"
                                      color="bodyText.200"
                                    >
                                      Name
                                    </Text>
                                    <Text
                                      fontSize="14px"
                                      fontWeight="600"
                                      color="bodyText.600"
                                    >
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
                                    <Text
                                      fontSize="sm"
                                      fontWeight="300"
                                      color="bodyText.200"
                                    >
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
                                      <Text
                                        fontSize="14px"
                                        fontWeight="600"
                                        color="bodyText.600"
                                      >
                                        120,000
                                      </Text>
                                    </HStack>
                                  </HStack>
                                </VStack>
                              </Box>
                            </SimpleGrid>
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
                              Extend Loan After Maturity Until Fully Paid
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
                          <VStack spacing={2} alignItems="flex-start" w="100%">
                            <VStack alignItems="flex-start" w="100%" mb={4}>
                              <Text
                                fontSize="14px"
                                fontWeight="400"
                                color="bodyText.100"
                              >
                                Extend Loan After Maturity
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

                            <VStack alignItems="flex-start" w="100%" mb={4}>
                              <Text
                                fontSize="14px"
                                fontWeight="400"
                                color="bodyText.100"
                              >
                                Interest Type
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
                                      Percentage (%) based
                                    </Text>
                                  </Radio>

                                  <Radio value="percentage">
                                    <Text
                                      fontSize="14px"
                                      fontWeight="500"
                                      color="bodyText.200"
                                    >
                                      Fixed Amount Per Cycle
                                    </Text>
                                  </Radio>
                                </Stack>
                              </RadioGroup>
                            </VStack>

                            <Select
                              label="Calculate Interest on / Calculate Interest if there is"
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

export default CreateLoanProduct;
