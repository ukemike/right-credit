'use client';

import {
  Box,
  HStack,
  Text,
  IconButton,
  Image,
  VStack,
  SimpleGrid,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import UploadCard from '@shared/components/customers/uploadCard';
import DashboardLayout from '~/lib/components/layout/DashboardLayout';
import Button from '@shared/components/ui/Button';
import Input from '@shared/components/ui/Input';
import Select from '@shared/components/ui/Select';

interface FormValues {
  borrowerId: string;
  firstName: string;
  middleName: string;
  surname: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  bvn: string;
  nin: string;
  address: string;
  maritalStatus: string;
  numberOfDependents: string;
  highestLevelOfEducation: string;
  employmentType: string;
}

const CreateLoan = () => {
  const router = useRouter();
  const [files, setFiles] = useState({
    cac: null,
    tin: null,
    memart: null,
    others: null,
  });

  const handleFileChange = (key: keyof typeof files) => (file: File) => {
    setFiles((prev) => ({
      ...prev,
      [key]: file,
    }));
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
            Create new loan
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
            p={4}
          >
            <VStack w="full" spacing="0" align="stretch">
              <Text fontSize="lg" fontWeight="700" color="headText.100" mb={4}>
                Create new loan
              </Text>
            </VStack>

            <VStack w="100%">
              <Formik<FormValues>
                initialValues={{
                  borrowerId: '',
                  firstName: '',
                  middleName: '',
                  surname: '',
                  dateOfBirth: '',
                  gender: '',
                  phone: '',
                  email: '',
                  bvn: '',
                  nin: '',
                  address: '',
                  maritalStatus: '',
                  numberOfDependents: '',
                  highestLevelOfEducation: '',
                  employmentType: '',
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {() => (
                  <Form style={{ width: '100%' }}>
                    <Box
                      bg="background.400"
                      p={4}
                      borderRadius="4px"
                      mb={4}
                      w="100%"
                    >
                      <Text
                        fontSize="md"
                        fontWeight="500"
                        color="bodyText.100"
                        mb={2}
                      >
                        Customer details
                      </Text>

                      <Select
                        label="Customer"
                        name="customer"
                        options={[]}
                        placeholder="Select customer"
                      />
                    </Box>

                    <Box mb={4}>
                      <Select
                        label="Loan Product"
                        name="loanProduct"
                        options={[]}
                        placeholder="Select loan product"
                      />
                    </Box>

                    <Box mb={4}>
                      <Input
                        label="Principal Amount"
                        name="principalAmount"
                        type="text"
                        placeholder="Enter principal amount"
                      />
                    </Box>

                    <SimpleGrid
                      columns={[1, 2]}
                      spacing={4}
                      w="100%"
                      mb={4}
                      alignItems="center"
                    >
                      <Input
                        label="Loan Release Date"
                        name="loanReleaseDate"
                        type="date"
                        placeholder="Enter loan release date"
                      />

                      <Input
                        label="Interest"
                        name="interest"
                        type="text"
                        placeholder="Enter interest"
                      />

                      <Input
                        label="Loan Duration"
                        name="loanDuration"
                        type="text"
                        placeholder="Enter loan duration"
                      />

                      <Input
                        label="Number of Repayments"
                        name="numberOfRepayments"
                        type="text"
                        placeholder="Enter number of repayments"
                      />

                      <Select
                        label="Loan Fees"
                        name="loanFees"
                        options={[]}
                        placeholder="Select loan fees"
                      />

                      <RadioGroup defaultValue="2">
                        <HStack
                          justifyContent="space-between"
                          w={['100%', '50%']}
                        >
                          <Radio colorScheme="blue" value="1">
                            Yes
                          </Radio>
                          <Radio colorScheme="blue" value="2">
                            No
                          </Radio>
                        </HStack>
                      </RadioGroup>
                    </SimpleGrid>

                    <Box
                      bg="background.400"
                      p={4}
                      borderRadius="4px"
                      mb={4}
                      w="100%"
                    >
                      <Text
                        fontSize="md"
                        fontWeight="500"
                        color="bodyText.100"
                        mb={2}
                      >
                        Documents
                      </Text>

                      <UploadCard
                        label="6 Months Bank Statement(optional)"
                        value={files.cac}
                        onChange={handleFileChange('cac')}
                      />

                      <Box mt={4}>
                        <Input
                          label="Password to Bank Statement (if any)"
                          name="passwordToBankStatement"
                          type="text"
                          placeholder="Enter password to bank statement"
                        />
                      </Box>

                      <SimpleGrid
                        columns={[1, 2]}
                        spacing={4}
                        w="100%"
                        mb={4}
                        alignItems="center"
                        mt={4}
                      >
                        <UploadCard
                          label="Loan Agreement(optional)"
                          value={files.cac}
                          onChange={handleFileChange('cac')}
                        />
                        <UploadCard
                          label="Other Loan Files(optional)"
                          value={files.cac}
                          onChange={handleFileChange('cac')}
                        />
                      </SimpleGrid>
                    </Box>

                    <HStack mt={4} w="100%">
                      <Button
                        text="Next"
                        width="100%"
                        size="md"
                        type="button"
                      />
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

export default CreateLoan;
