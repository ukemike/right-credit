import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  HStack,
  Progress,
  Text,
  VStack,
  Radio,
  RadioGroup,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Button from '../ui/Button';
import { setSetupStep } from '@shared/redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '@shared/redux/store';

interface Question {
  id: number;
  name: string;
  text: string;
}

interface FormValues {
  [key: string]: 'yes' | 'no' | '';
}

const questions: Question[] = [
  {
    id: 0,
    name: 'license',
    text: 'Do you require a license to conduct your business?',
  },
  {
    id: 1,
    name: 'regulated',
    text: 'Are you/your services regulated by any authority?',
  },
  {
    id: 2,
    name: 'compliance',
    text: 'Does your organization comply with anti-money laundering and anti-corruption laws and regulations?',
  },
  {
    id: 3,
    name: 'policies',
    text: 'Do you have policies and procedures in place for assessing and preventing money laundering and fraud in, or by your organization?',
  },
  {
    id: 4,
    name: 'sanctions',
    text: 'Are there sanctions maintained for staff who breach anti-money laundering and anti-corruption laws and regulations?',
  },
  {
    id: 5,
    name: 'nda',
    text: 'Do you have a non-disclosure agreement with your employees, agents and contractors?',
  },
  {
    id: 6,
    name: 'dataProtection',
    text: 'Has your organisation established policies to ensure protection of personal data and compliance with data protection laws?',
  },
  {
    id: 7,
    name: 'dataSanctions',
    text: 'Are there sanctions maintained for staff who breach data protection and confidentiality obligations?',
  },
  {
    id: 8,
    name: 'securityMeasures',
    text: 'Do you adopt physical, technical, and administrative security measures to reduce the risks of personal data breach?',
  },
  {
    id: 9,
    name: 'countries',
    text: 'Please list the countries where you operate',
  },
  {
    id: 10,
    name: 'dataTransfer',
    text: 'Will your company be transferring personal data received from us to other countries?',
  },
  {
    id: 11,
    name: 'additionalUse',
    text: 'Other than background checks/Know Your Customer verifications, do you intend to use the verification reports or personal data accessed through us for any other purpose?',
  },
  {
    id: 12,
    name: 'alternateDatabase',
    text: 'Do you intend to create an alternate database of personal data/verification reports accessed through our service?',
  },
  {
    id: 13,
    name: 'pastSanctions',
    text: 'Have you been sanctioned by a regulator within the last 2(two) years for data breach or non-compliance with protection laws?',
  },
];

const validationSchema = Yup.object().shape(
  questions.reduce(
    (acc, question) => ({
      ...acc,
      [question.name]: Yup.string().required(
        'This question requires an answer'
      ),
    }),
    {}
  )
);

const initialValues = questions.reduce(
  (acc, question) => ({
    ...acc,
    [question.name]: '',
  }),
  {}
);

const Step2 = () => {
  const dispatch = useAppDispatch();
  const { setupStep } = useAppSelector((state) => state.app.auth);

  const handleBack = () => {
    dispatch(setSetupStep(setupStep - 1));
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Form values:', values);
    dispatch(setSetupStep(setupStep + 1));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }: any) => (
        <Form>
          <VStack w="full" spacing="4" align="stretch" maxW="600px">
            <VStack w="full" spacing="2" align="stretch">
              <HStack w="full" justify="space-between" align="center">
                <ChevronLeftIcon
                  fontSize={25}
                  cursor="pointer"
                  _hover={{
                    bg: 'brand.100',
                    color: 'white',
                    borderRadius: 'full',
                  }}
                  onClick={handleBack}
                />
                <Text fontSize="md" fontWeight="400" color="#5E6782">
                  Step {setupStep}/4
                </Text>
              </HStack>
              <HStack w="full">
                <Progress
                  value={setupStep * 25}
                  w="full"
                  colorScheme="blue"
                  borderRadius="8"
                />
                <Text fontSize="14px" fontWeight="500" color="#414651">
                  {setupStep * 25}%
                </Text>
              </HStack>
            </VStack>

            <Text fontSize={['lg', 'xl']} fontWeight="700" color="#090A0D">
              Provide answers to the following below
            </Text>

            <VStack
              w="full"
              spacing="6"
              align="stretch"
              bg="#FBFDFF"
              p="6"
              borderRadius="20px"
              shadow="md"
            >
              {questions.map((question) => (
                <FormControl
                  key={question.id}
                  isInvalid={!!errors[question.name] && touched[question.name]}
                >
                  <VStack w="full" align="stretch" spacing="3">
                    <Text color="#374151" fontSize="14px" fontWeight="400">
                      {question.text}
                    </Text>
                    <Field name={question.name}>
                      {({ field }: any) => (
                        <RadioGroup
                          {...field}
                          onChange={(value) =>
                            field.onChange({
                              target: { name: question.name, value },
                            })
                          }
                        >
                          <HStack spacing="8">
                            <Radio value="yes">
                              <Text
                                color="#5E6782"
                                fontWeight="600"
                                fontSize="md"
                              >
                                Yes
                              </Text>
                            </Radio>
                            <Radio value="no">
                              <Text
                                color="#5E6782"
                                fontWeight="600"
                                fontSize="md"
                              >
                                No
                              </Text>
                            </Radio>
                          </HStack>
                        </RadioGroup>
                      )}
                    </Field>
                    <FormErrorMessage>{errors[question.name]}</FormErrorMessage>
                  </VStack>
                </FormControl>
              ))}

              <Button type="submit" text="Next" />
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default Step2;
