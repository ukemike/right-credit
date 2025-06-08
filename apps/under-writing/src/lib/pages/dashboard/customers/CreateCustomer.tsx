'use client';

import {
  Box,
  HStack,
  Text,
  IconButton,
  Image,
  VStack,
  SimpleGrid,
  Progress,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import UploadCard from '~/lib/components/customers/uploadCard';
import DashboardLayout from '~/lib/components/dashboard/layout/DashboardLayout';
import Button from '~/lib/components/ui/Button';
import Input from '~/lib/components/ui/Input';
import Select from '~/lib/components/ui/Select';
import { setCreateCustomerStep } from '~/lib/redux/slices/authSlice';
import { useAppSelector, useAppDispatch } from '~/lib/redux/store';

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

const CreateCustomer = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { createCustomerStep } = useAppSelector((state) => state.app.auth);
  const [files, setFiles] = useState({
    cac: null,
    tin: null,
    memart: null,
    others: null,
  });

  const handleNext = () => {
    dispatch(setCreateCustomerStep(createCustomerStep + 1));
  };

  const handleBack = () => {
    dispatch(setCreateCustomerStep(createCustomerStep - 1));
  };

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
            Create New Customer
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
              <Text fontSize="lg" fontWeight="700" color="headText.100">
                Document Uploads
              </Text>
              <HStack w="full">
                <Progress
                  value={createCustomerStep * 25}
                  w="full"
                  colorScheme="blue"
                  borderRadius="8"
                  size="sm"
                />
                <Text fontSize="14px" fontWeight="500" color="#414651">
                  {createCustomerStep * 25}%
                </Text>
              </HStack>
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
                    {createCustomerStep === 1 && (
                      <>
                        <SimpleGrid
                          columns={[1, 2]}
                          spacing={4}
                          w="100%"
                          mb={4}
                        >
                          <Input
                            label="Borrower ID"
                            name="borrowerId"
                            type="text"
                            placeholder="Enter borrower ID"
                          />

                          <Input
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="Enter first name"
                          />

                          <Input
                            label="Middle Name"
                            name="middleName"
                            type="text"
                            placeholder="Enter middle name"
                          />

                          <Input
                            label="Surname"
                            name="surname"
                            type="text"
                            placeholder="Enter surname"
                          />

                          <Input
                            label="Date of Birth"
                            name="dateOfBirth"
                            type="date"
                            placeholder="Enter date of birth"
                          />

                          <Select
                            label="Gender"
                            name="gender"
                            options={['Male', 'Female']}
                            placeholder="Select gender"
                          />

                          <Input
                            label="Phone"
                            name="phone"
                            type="text"
                            placeholder="Enter phone"
                          />

                          <Input
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                          />

                          <Input
                            label="BVN"
                            name="bvn"
                            type="text"
                            placeholder="Enter BVN"
                          />

                          <Input
                            label="NIN"
                            name="nin"
                            type="text"
                            placeholder="Enter NIN"
                          />
                        </SimpleGrid>

                        <Input
                          label="Customer’s Address"
                          name="address"
                          type="text"
                          placeholder="Enter customer’s address"
                        />

                        <SimpleGrid
                          columns={[1, 2]}
                          spacing={4}
                          w="100%"
                          my={4}
                        >
                          <Select
                            label="Marital Status"
                            name="maritalStatus"
                            options={[
                              'Single',
                              'Married',
                              'Divorced',
                              'Widowed',
                            ]}
                            placeholder="Select marital status"
                          />

                          <Input
                            label="Number of Dependents"
                            name="numberOfDependents"
                            type="number"
                            placeholder="Enter number of dependents"
                          />

                          <Select
                            label="Highest Level of Education"
                            name="highestLevelOfEducation"
                            options={['Primary', 'Secondary', 'Tertiary']}
                            placeholder="Select highest level of education"
                          />

                          <Select
                            label="Employment Type"
                            name="employmentType"
                            options={[
                              'Employed',
                              'Self-Employed',
                              'Unemployed',
                            ]}
                            placeholder="Select employment type"
                          />
                        </SimpleGrid>
                      </>
                    )}

                    {createCustomerStep === 2 && (
                      <>
                        <Box my={4}>
                          <Input
                            label="Name of Employer"
                            name="nameOfEmployer"
                            type="text"
                            placeholder="Enter name of employer"
                          />
                        </Box>

                        <Box mb={4}>
                          <Input
                            label="Work Address"
                            name="workAddress"
                            type="text"
                            placeholder="Enter work address"
                          />
                        </Box>

                        <SimpleGrid
                          columns={[1, 2]}
                          spacing={4}
                          w="100%"
                          my={4}
                        >
                          <Select
                            label="Industry"
                            name="industry"
                            options={[
                              'Single',
                              'Married',
                              'Divorced',
                              'Widowed',
                            ]}
                            placeholder="Select industry"
                          />

                          <Input
                            label="Work Email"
                            name="workEmail"
                            type="email"
                            placeholder="Enter work email"
                          />

                          <Input
                            label="Title / Position in The Company"
                            name="title"
                            type="text"
                            placeholder="Enter title / position in the company"
                          />

                          <Input
                            label="Employment Start Date"
                            name="employmentStartDate"
                            type="date"
                            placeholder="Enter employment start date"
                          />

                          <Input
                            label="Salary Payment Day"
                            name="salaryPaymentDay"
                            type="number"
                            placeholder="Enter salary payment day"
                          />

                          <Input
                            label="Net Salary"
                            name="netSalary"
                            type="number"
                            placeholder="Enter net salary"
                          />
                        </SimpleGrid>
                      </>
                    )}

                    {createCustomerStep === 3 && (
                      <>
                        <Box my={4}>
                          <Input
                            label="Business Name"
                            name="businessName"
                            type="text"
                            placeholder="Enter business name"
                          />
                        </Box>

                        <Box mb={4}>
                          <Input
                            label="Describe what you do"
                            name="describeWhatYouDo"
                            type="text"
                            placeholder="Enter describe what you do"
                          />
                        </Box>

                        <Box mb={4}>
                          <Input
                            label="Work Address"
                            name="workAddress"
                            type="text"
                            placeholder="Enter work address"
                          />
                        </Box>

                        <SimpleGrid
                          columns={[1, 2]}
                          spacing={4}
                          w="100%"
                          my={4}
                        >
                          <Select
                            label="Type of Registration"
                            name="typeOfRegistration"
                            options={[
                              'Single',
                              'Married',
                              'Divorced',
                              'Widowed',
                            ]}
                            placeholder="Select type of registration"
                          />

                          <Input
                            label="Business Registration Number"
                            name="businessRegistrationNumber"
                            type="text"
                            placeholder="Enter business registration number"
                          />

                          <Select
                            label="Industry"
                            name="industry"
                            options={[
                              'Single',
                              'Married',
                              'Divorced',
                              'Widowed',
                            ]}
                            placeholder="Select industry"
                          />

                          <Input
                            label="Work Email"
                            name="workEmail"
                            type="email"
                            placeholder="Enter work email"
                          />
                        </SimpleGrid>
                      </>
                    )}

                    {createCustomerStep === 4 && (
                      <>
                        <SimpleGrid
                          columns={[1, 2]}
                          spacing={4}
                          w="100%"
                          my={4}
                        >
                          <Select
                            label="ID Type"
                            name="idType"
                            options={[
                              'Single',
                              'Married',
                              'Divorced',
                              'Widowed',
                            ]}
                            placeholder="Select ID type"
                          />

                          <Input
                            label="ID Number"
                            name="idNumber"
                            type="text"
                            placeholder="Enter ID number"
                          />

                          <Input
                            label="Issue Date"
                            name="issueDate"
                            type="date"
                            placeholder="Enter issue date"
                          />

                          <Input
                            label="Expiry Date"
                            name="expiryDate"
                            type="date"
                            placeholder="Enter expiry date"
                          />
                        </SimpleGrid>

                        <Box my={4}>
                          <UploadCard
                            label="ID Card"
                            value={files.cac}
                            onChange={handleFileChange('cac')}
                          />
                        </Box>

                        <SimpleGrid columns={[1, 2]} spacing={4} w="100%">
                          <UploadCard
                            label="Selfie*"
                            value={files.cac}
                            onChange={handleFileChange('cac')}
                          />
                          <UploadCard
                            label="Residential Utility Bill (if available)"
                            value={files.cac}
                            onChange={handleFileChange('cac')}
                          />
                          <UploadCard
                            label="Work ID Card"
                            value={files.cac}
                            onChange={handleFileChange('cac')}
                          />
                          <UploadCard
                            label="CAC Certificate"
                            value={files.cac}
                            onChange={handleFileChange('cac')}
                          />

                          <UploadCard
                            label="CAC 2 /Memart /CAC Application Status"
                            value={files.cac}
                            onChange={handleFileChange('cac')}
                          />

                          <UploadCard
                            label="CAC 7"
                            value={files.cac}
                            onChange={handleFileChange('cac')}
                          />

                          <UploadCard
                            label="Picture of front of Shop /Store/ Business"
                            value={files.cac}
                            onChange={handleFileChange('cac')}
                          />

                          <UploadCard
                            label="Pictures of Goods or Inside of Business"
                            value={files.cac}
                            onChange={handleFileChange('cac')}
                          />
                        </SimpleGrid>
                      </>
                    )}

                    <HStack mt={4} w="100%">
                      <Button
                        text="Next"
                        width="100%"
                        size="md"
                        type="button"
                        onClick={handleNext}
                        isDisabled={createCustomerStep === 4}
                      />

                      {createCustomerStep > 1 && (
                        <Button
                          text="Back"
                          width="100%"
                          size="md"
                          type="button"
                          variant="outline"
                          onClick={handleBack}
                          isDisabled={createCustomerStep === 1}
                        />
                      )}
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

export default CreateCustomer;
