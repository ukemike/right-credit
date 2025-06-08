import { Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '~/lib/components/ui/Button';

const Address = () => {
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
                Address Verification
              </Text>
            </VStack>

            <SimpleGrid columns={2} spacing={4}>
              <Input
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
              />

              <Input
                label="Surname"
                name="surname"
                type="text"
                placeholder="Surname"
              />
            </SimpleGrid>

            <Input
              label="Phone Number"
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
            />

            <Input
              label="Address"
              name="address"
              type="text"
              placeholder="Address"
            />

            <SimpleGrid columns={2} spacing={4}>
              {/* state Name, lga Name, City, landmark (optional) */}
              <Select label="State" name="state" options={[]} />
              <Select label="LGA" name="lga" options={[]} />
              <Select label="City" name="city" options={[]} />
              <Input
                label="Landmark"
                name="landmark"
                type="text"
                placeholder="Landmark"
              />
            </SimpleGrid>
            <VStack align="stretch" w="100%" my={2}>
              <Button text="Submit and generate report" width="100%" />
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default Address;
