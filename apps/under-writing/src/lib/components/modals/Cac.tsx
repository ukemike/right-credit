import { Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import Input from '../ui/Input';
import Button from '~/lib/components/ui/Button';

const Cac = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        role: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form style={{ width: '100%' }}>
          <VStack spacing={2} align="stretch" w="100%" mt="1">
            <VStack align="stretch" w="100%" spacing={0}>
              <Text fontSize="lg" fontWeight="600" color="bodyText.100">
                CAC
              </Text>
            </VStack>

            <Input
              label="Registration Number"
              name="idNumber"
              type="text"
              placeholder="Registration Number"
            />

            <VStack align="stretch" w="100%" my={2}>
              <Button text="Submit and generate report" width="100%" />
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default Cac;
