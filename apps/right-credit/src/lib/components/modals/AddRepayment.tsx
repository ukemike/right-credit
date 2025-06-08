import { Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '~/lib/components/ui/Button';

const AddRepayment = () => {
  return (
    <Formik
      initialValues={{
        collectionDate: '',
        amount: '',
        description: '',
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
                Add Repayment
              </Text>
            </VStack>
            <Input
              label="Collection Date"
              name="collectionDate"
              type="date"
              placeholder="Collection Date"
            />

            <Input
              label="Amount"
              name="amount"
              type="number"
              placeholder="Amount"
            />

            <TextArea
              label="Description"
              name="description"
              placeholder="Description"
            />

            <VStack align="stretch" w="100%" my={2}>
              <Button text="Save" width="100%" />
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default AddRepayment;
