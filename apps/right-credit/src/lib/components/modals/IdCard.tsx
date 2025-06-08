import { Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import Input from '../ui/Input';
import Button from '~/lib/components/ui/Button';

interface IdCardProps {
  name: string;
}

const IdCard = ({ name }: IdCardProps) => {
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
                {name}
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
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </SimpleGrid>

            <Input
              label="ID number"
              name="idNumber"
              type="text"
              placeholder="ID number"
            />

            <Input
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              placeholder="Date of Birth"
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

export default IdCard;
