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
  useToast,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import UploadCard from '@shared/components/customers/uploadCard';
import DashboardLayout from '@/lib/components/layout/DashboardLayout';
import Button from '@shared/components/ui/Button';
import Input from '@shared/components/ui/Input';
import Select from '@shared/components/ui/Select';
import { useCreateRiskMutation } from '@shared/redux/services/risk.service';
import { riskSchema } from '@shared/schemas/risk.shema';
import {
  NIGERIAN_EDUCATION_LEVELS,
  NIGERIAN_STATES,
  NIGERIAN_BUSINESS_TYPES,
  NIGERIAN_BUSINESS_INDUSTRIES,
  NIGERIAN_BUSINESS_EMPLOYMENT_TYPES,
  getLGAsByState,
} from '@shared/utils/constants';

const CreateRiskReport = () => {
  const router = useRouter();
  const toast = useToast();

  const [createRisk, { isLoading }] = useCreateRiskMutation();

  const [files, setFiles] = useState<{ bank_statement: File | null }>({
    bank_statement: null,
  });

  const handleFileChange = (key: keyof typeof files) => (file: File) => {
    setFiles((prev) => ({
      ...prev,
      [key]: file,
    }));
  };

  const handleSubmit = async (values: any) => {
    const formData = new FormData();


    // {"loan_type": "business", "personal_details": {"title": "engineer cutting-edge deliverables", "first_name": "Gerson", "middle_name": "Medhurst", "surname": "Muller", "date_of_birth": "Sat Jan 25 2025 21:07:51 GMT+0000 (Coordinated Universal Time)", "bvn_number": "60-213-449-7997", "mobile_number": "r", "email_address": "Yasmeen_Anderson@hotmail.com", "gender": "male", "marital_status": "married", "no_of_dependant": 10, "highest_education_level": "college", "residential_details": {"address": "9263 Bechtelar Square", "state": "Cameroon", "town": "Leffler Mountain"}}, "employment_details": {"name_of_employer": "Regina Marks", "employment_type": "part_time", "industry": "finance", "employer_address": {"address": "17497 Glover Junctions", "state": "Montenegro", "town": "Torrance Mountains"}}, "business_details": {"name": "ana.info", "registration_number": "239-361-5395", "business_type": "corporation", "industry": "finance", "business_address": {"address": "2640 Bettye Haven", "state": "Cape Verde", "town": "Ronaldo Mountains"}}, "documents": {"bank_statement_password": "258-474-2814"}}

    // {"loan_type":"payday","personal_details":{"title":"Ducimus deserunt ad","first_name":"Clare","middle_name":"Belle Floyd","sur_name":"Le","date_of_birth":"1975-05-17","bvn_number":"265","mobile_number":"372","email_address":"sucotytaxo@mailinator.com","gender":"female","marital_status":"married","no_of_dependant":8,"highest_education_level":"professor","residential_details":{"address":"Rerum voluptatum fug","state":"lagos","town":"ikeja"}},"employment_details":{"name_of_employer":"Michael Uke","employment_type":"contract","industry":"manufacturing","employer_address":{"address":"11 Ogunmade Street Off Lawal Oshogun","state":"adamawa","town":"girei"}},"business_details":null,"documents":{"bank_statement_password":""}}

    // Stringify the entire data object as required by the API
    const dataPayload = {
      loan_type: values.loan_type,
      personal_details: values.personal_details,
      employment_details: values.employment_details,
      business_details: values.business_details,
      documents: {
        bank_statement_password: '',
      }
    };

    console.log(dataPayload, 'dataPayload');

    // Add the stringified data as a single field
    formData.append('data', JSON.stringify(dataPayload));
    
    // Add the bank statement file separately
    formData.append('bank_statement', files.bank_statement as File);

    // log form data as key value pairs
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    await createRisk(formData)
      .unwrap()
      .then(() => {
        toast({
          title: 'Risk Report Submitted',
          description: 'Your risk report is in progress and will be processed shortly',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
        router.push('/dashboard/risk-report');
      })
      .catch((err) => {
        toast({
          title: 'Error',
          description: err.data.message || err.data.msg || 'An error occurred',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      });
  };

  return (
    <DashboardLayout>
      <Box>
        <HStack
          justifyContent="space-between"
          w="100%"
          borderBottom="1px solid #E5E7EB"
          pb={4}
          flexDirection={['column', 'row']}
          alignItems={['flex-start', 'center']}
        >
          <HStack alignItems="center" spacing={2}>
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
              Create New Risk Report
            </Text>
          </HStack>

          <HStack display='none'>
            <Text fontSize="14px" fontWeight="400" color="bodyText.100">
              You have used 1/3 trials for today
            </Text>
            <Button text="Upgrade" size="md" variant="outline" px={6} />
          </HStack>
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
                <Text fontSize="14px" fontWeight="400" color="bodyText.200">
                  Provide the details below to create a new report
                </Text>
              </VStack>
            </HStack>

            <VStack p={4} w="100%">
              {/* payday */}
              <Formik
                initialValues={{
                  loan_type: 'payday',
                  title: '',
                  first_name: '',
                  middle_name: '',
                  surname: '',
                  date_of_birth: '',
                  bvn_number: '',
                  mobile_number: '',
                  email_address: '',
                  gender: '',
                  marital_status: '',
                  no_of_dependant: '',
                  highest_education_level: '',
                  residential_address: '',
                  residential_state: '',
                  residential_town: '',
                  name_of_employer: '',
                  employment_type: '',
                  employer_industry: '',
                  employer_address: '',
                  employer_state: '',
                  employer_town: '',
                  business_name: '',
                  registration_number: '',
                  business_type: '',
                  business_industry: '',
                  business_address: '',
                  business_state: '',
                  business_town: '',
                  bank_statement: '',
                }}
                validationSchema={riskSchema}
                onSubmit={(values) => {
                  const structuredData = {
                    loan_type: values.loan_type,
                    personal_details: {
                      title: values.title,
                      first_name: values.first_name,
                      middle_name: values.middle_name,
                      surname: values.surname,
                      date_of_birth: values.date_of_birth,
                      bvn_number: values.bvn_number,
                      mobile_number: values.mobile_number,
                      email_address: values.email_address,
                      gender: values.gender,
                      marital_status: values.marital_status,
                      no_of_dependant: values.no_of_dependant,
                      highest_education_level: values.highest_education_level,
                      residential_details: {
                        address: values.residential_address,
                        state: values.residential_state,
                        town: values.residential_town,
                      },
                    },
                    employment_details:
                      values.loan_type === 'payday'
                        ? {
                            name_of_employer: values.name_of_employer,
                            employment_type: values.employment_type,
                            industry: values.employer_industry,
                            employer_address: {
                              address: values.employer_address,
                              state: values.employer_state,
                              town: values.employer_town,
                            },
                          }
                        : null,
                    business_details:
                      values.loan_type === 'business'
                        ? {
                            name: values.business_name,
                            registration_number: values.registration_number,
                            business_type: values.business_type,
                            industry: values.business_industry,
                            business_address: {
                              address: values.business_address,
                              state: values.business_state,
                              town: values.business_town,
                            },
                          }
                        : null,
                    // documents: {
                    //   bank_statement: files.bank_statement,
                    // },
                  };
                  handleSubmit(structuredData);
                }}
              >
                {({ setFieldValue, errors, values }) => (
                  <Form style={{ width: '100%' }}>
                    {/* Loan Type Selection - Moved outside accordion */}
                    <Box 
                      border="1px solid #E5E7EB"
                      borderRadius="4px"
                      mb={4}
                      p={4}
                      bg="white"
                    >
                      <VStack spacing={2} alignItems="stretch">
                        <Text
                          fontSize="md"
                          fontWeight="600"
                          color="bodyText.200"
                        >
                          Loan Type
                        </Text>
                        <RadioGroup
                          value={values.loan_type}
                          onChange={(value) =>
                            setFieldValue('loan_type', value)
                          }
                        >
                          <Stack spacing={4} direction="row" w="100%">
                            <Radio value="payday">
                              <Text
                                fontSize="14px"
                                fontWeight="500"
                                color="bodyText.200"
                              >
                                Personal Loan
                              </Text>
                            </Radio>
                            <Radio value="business">
                              <Text
                                fontSize="14px"
                                fontWeight="500"
                                color="bodyText.200"
                              >
                                Business Loan
                              </Text>
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </VStack>
                    </Box>

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
                              Personal Details
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
                              label="Title"
                              name="title"
                              type="text"
                              placeholder="Enter title"
                            />

                            <Input
                              label="First Name"
                              name="first_name"
                              type="text"
                              placeholder="Enter first name"
                            />

                            <Input
                              label="Middle name"
                              name="middle_name"
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
                              name="date_of_birth"
                              type="date"
                              placeholder="Enter date of birth"
                            />

                            <Input
                              label="BVN Number"
                              name="bvn_number"
                              type="text"
                              placeholder="Enter BVN number"
                              maxLength={11}
                            />

                            <Input
                              label="Mobile Number"
                              name="mobile_number"
                              type="text"
                              placeholder="Enter mobile number"
                              maxLength={11}
                            />

                            <Input
                              label="E-Mail Address"
                              name="email_address"
                              type="email"
                              placeholder="Enter email address"
                            />

                            <Select
                              label="Gender"
                              name="gender"
                              options={[
                                { label: 'Male', value: 'male' },
                                { label: 'Female', value: 'female' },
                              ]}
                              placeholder="Select gender"
                            />

                            <Select
                              label="Marital Status"
                              name="marital_status"
                              options={[
                                { label: 'Single', value: 'single' },
                                { label: 'Married', value: 'married' },
                                { label: 'Divorced', value: 'divorced' },
                                { label: 'Widowed', value: 'widowed' },
                                { label: 'Separated', value: 'separated' },
                              ]}
                              placeholder="Select marital status"
                            />

                            <Input
                              label="Number of Dependents"
                              name="no_of_dependant"
                              type="number"
                              placeholder="Enter number of dependents"
                            />

                            <Select
                              label="Highest Level of Education"
                              name="highest_education_level"
                              options={NIGERIAN_EDUCATION_LEVELS}
                              placeholder="Select highest level of education"
                            />
                          </SimpleGrid>

                          <VStack spacing={4} mt={4} alignItems="flex-start">
                            <Text
                              fontSize="md"
                              fontWeight="600"
                              color="headText.100"
                            >
                              Residential details
                            </Text>
                            <Input
                              label="Residential Address"
                              name="residential_address"
                              type="text"
                              placeholder="Enter residential address"
                            />
                          </VStack>

                          <SimpleGrid columns={[1, 2]} spacing={4} mt={4}>
                            <Select
                              label="State"
                              name="residential_state"
                              options={NIGERIAN_STATES}
                              placeholder="Select state"
                            />

                            <Select
                              label="LGA"
                              name="residential_town"
                              options={getLGAsByState(values.residential_state)}
                              placeholder="Select LGA"
                            />
                          </SimpleGrid>
                        </AccordionPanel>
                      </AccordionItem>

                      {values.loan_type === 'payday' && (
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
                                Employment Details
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
                                label="Name of Employer"
                                name="name_of_employer"
                                type="text"
                                placeholder="Enter name of employer"
                              />

                              <Select
                                label="Employment Type"
                                name="employment_type"
                                options={NIGERIAN_BUSINESS_EMPLOYMENT_TYPES}
                                placeholder="Select employment type"
                              />

                              <Select
                                label="Industry"
                                name="employer_industry"
                                options={NIGERIAN_BUSINESS_INDUSTRIES}
                              />

                              <Input
                                label="Years with Current Employer"
                                name="years_with_current_employer"
                                type="number"
                                placeholder="Enter years with current employer"
                              />
                            </SimpleGrid>

                            <VStack spacing={4} mt={4} alignItems="flex-start">
                              <Text
                                fontSize="md"
                                fontWeight="600"
                                color="headText.100"
                              >
                                Employer Address
                              </Text>
                              <Input
                                label="Employer Address"
                                name="employer_address"
                                type="text"
                                placeholder="Enter employer address"
                              />
                            </VStack>

                            <SimpleGrid columns={[1, 2]} spacing={4} mt={4}>
                              <Select
                                label="State"
                                name="employer_state"
                                options={NIGERIAN_STATES}
                                placeholder="Select state"
                              />

                              <Select
                                label="LGA"
                                name="employer_town"
                                options={getLGAsByState(values.employer_state)}
                                placeholder="Select LGA"
                              />
                            </SimpleGrid>
                          </AccordionPanel>
                        </AccordionItem>
                      )}

                      {values.loan_type === 'business' && (
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
                                Business Details
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
                                label="Name of Business"
                                name="business_name"
                                type="text"
                                placeholder="Enter name of business"
                              />

                              <Input
                                label="Registration Number"
                                name="registration_number"
                                type="text"
                                placeholder="Enter registration number"
                              />

                              <Select
                                label="Business Type"
                                name="business_type"
                                options={NIGERIAN_BUSINESS_TYPES}
                                placeholder="Select business type"
                              />

                              <Select
                                label="Industry"
                                name="business_industry"
                                options={NIGERIAN_BUSINESS_INDUSTRIES}
                                placeholder="Select industry"
                              />
                            </SimpleGrid>

                            <VStack spacing={4} mt={4} alignItems="flex-start">
                              <Text
                                fontSize="md"
                                fontWeight="600"
                                color="headText.100"
                              >
                                Business address details
                              </Text>
                              <Input
                                label="Business Address"
                                name="business_address"
                                type="text"
                                placeholder="Enter business address"
                              />
                            </VStack>

                            <SimpleGrid columns={[1, 2]} spacing={4} mt={4}>
                              <Select
                                label="State"
                                name="business_state"
                                options={NIGERIAN_STATES}
                                placeholder="Select state"
                              />

                              <Select
                                label="LGA"
                                name="business_town"
                                options={getLGAsByState(values.business_state)}
                                placeholder="Select LGA"
                              />
                            </SimpleGrid>
                          </AccordionPanel>
                        </AccordionItem>
                      )}

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
                              Documents
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
                          <HStack>
                            <UploadCard
                              label="6 Months Bank Statement"
                              value={files.bank_statement}
                              onChange={(file) => {
                                handleFileChange('bank_statement')(file);
                                setFieldValue('bank_statement', file.name);
                              }}
                              error={errors.bank_statement}
                            />
                          </HStack>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    <HStack w={['100%', '50%']}>
                      <Button
                        text="Submit"
                        width="100%"
                        size="md"
                        isLoading={isLoading}
                        isDisabled={isLoading}
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

export default CreateRiskReport;