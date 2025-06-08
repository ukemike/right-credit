/* eslint-disable @typescript-eslint/no-unused-vars */

import { ChevronLeftIcon } from '@chakra-ui/icons';
import { HStack, Progress, Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import Button from '../ui/Button';
import Input from '../ui/Input';
import { setSetupStep } from '~/lib/redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '~/lib/redux/store';
import { dpoSchema } from '~/lib/schemas/auth.schema';

const Step3 = () => {
  const dispatch = useAppDispatch();
  const { setupStep } = useAppSelector((state) => state.app.auth);

  const handleBack = () => {
    dispatch(setSetupStep(setupStep - 1));
  };

  const handleNext = () => {
    dispatch(setSetupStep(setupStep + 1));
  };

  return (
    <VStack w="full" spacing="2" align="stretch" maxW="600px">
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
        Data Protection Officer Information
      </Text>

      <Formik
        initialValues={{
          fullName: '',
          address: '',
          email: '',
          phone: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          handleNext();
        }}
        validationSchema={dpoSchema}
      >
        {(props) => (
          <Form style={{ width: '100%' }}>
            <VStack spacing={2} mt="6">
              <Input label="Full Name" name="fullName" type="text" />
              <Input label="Address" name="address" type="text" />
              <Input label="Email" name="email" type="email" />
              <Input label="Phone" name="phone" type="tel" />

              <VStack align="stretch" w="100%" mt={8}>
                <Button text="Next" type="submit" />
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default Step3;
