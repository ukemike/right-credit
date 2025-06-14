import { DeleteIcon } from '@chakra-ui/icons';
import { HStack, Progress, Text, VStack, IconButton } from '@chakra-ui/react';
import { Form, Formik, FieldArray, Field } from 'formik';

import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { setSetupStep } from '@shared/redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '@shared/redux/store';
import { completeProfileSchema } from '@shared/schemas/auth.schema';

const Step1 = () => {
  const dispatch = useAppDispatch();
  const { setupStep } = useAppSelector((state) => state.app.auth);

  const handleNext = () => {
    dispatch(setSetupStep(2));
  };

  return (
    <VStack w="full" spacing="2" align="stretch" maxW="600px">
      <VStack w="full" spacing="0" align="stretch">
        <Text fontSize="md" fontWeight="400" color="#5E6782">
          Step {setupStep}/4
        </Text>
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
        Set up your Profile
      </Text>

      <Formik
        initialValues={{
          businessName: '',
          businessRegistrationNumber: '',
          businessAddress: '',
          countryOfIncorporation: '',
          namesOfDirectors: [''],
        }}
        onSubmit={(values) => {
          console.log(values);
          handleNext();
        }}
        validationSchema={completeProfileSchema}
      >
        {(props) => (
          <Form style={{ width: '100%' }}>
            <VStack spacing={2} mt="6">
              <Input label="Registered Name" name="businessName" type="text" />

              <Input
                label="Registration Number (CAC)"
                name="businessRegistrationNumber"
                type="text"
              />
              <Input
                label="Office Address"
                name="businessAddress"
                type="text"
              />

              <Select
                label="Country of Incorporation"
                name="countryOfIncorporation"
                options={[
                  { label: 'Nigeria', value: 'Nigeria' },
                  { label: 'Ghana', value: 'Ghana' },
                  { label: 'Kenya', value: 'Kenya' },
                  { label: 'South Africa', value: 'South Africa' },
                ]}
                placeholder="Select Country"
              />

              <VStack align="flex-start" w="100%" spacing={0}>
                <Text fontSize="14px" fontWeight="500" color="#374151">
                  Names of Directors/Partners/Trustees
                </Text>
                <VStack
                  align="flex-start"
                  w="100%"
                  bg="#FAFAFA"
                  borderWidth="1"
                  borderColor="#E5E7EB"
                  px="4"
                  py="2"
                >
                  <FieldArray name="namesOfDirectors">
                    {({ push, remove }) => (
                      <VStack w="full" spacing={2} align="flex-start">
                        {props.values.namesOfDirectors.map(
                          (director: string, index: number) => (
                            <HStack key={index} w="full" position="relative">
                              <Field name={`namesOfDirectors.${index}`}>
                                {({ field }: any) => (
                                  <Input
                                    {...field}
                                    label=""
                                    type="text"
                                    placeholder="Enter name"
                                    bg="white"
                                  />
                                )}
                              </Field>
                              {props.values.namesOfDirectors.length > 1 &&
                                index > 0 && (
                                  <IconButton
                                    icon={<DeleteIcon />}
                                    aria-label="Delete field"
                                    variant="ghost"
                                    colorScheme="red"
                                    size="sm"
                                    position="absolute"
                                    right="2"
                                    top="2"
                                    onClick={() => remove(index)}
                                  />
                                )}
                            </HStack>
                          )
                        )}
                        <HStack>
                          <Button
                            text="Add more"
                            variant="outline"
                            px={12}
                            onClick={() => push('')}
                            type="button"
                          />
                        </HStack>
                      </VStack>
                    )}
                  </FieldArray>
                </VStack>
              </VStack>

              <VStack align="stretch" w="100%" mt={8}>
                <Button text="Next" type="submit" isDisabled={!props.isValid} />
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default Step1;
