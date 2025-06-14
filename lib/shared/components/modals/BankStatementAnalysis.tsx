import { Text, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';

import UploadCard from '../customers/uploadCard';
import Input from '../ui/Input';
import Select from '../ui/Select';
  import Button from '@shared/components/ui/Button';

const BankStatementAnalysis = () => {
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
                Bank Statement Analysis
              </Text>
            </VStack>

            <Select label="Account Type" name="accountType" options={[]} />
            <Input
              label="Password to bank statement, if any"
              name="password"
              type="password"
              placeholder="Password"
            />

            <UploadCard
              label="Upload statement"
              value={files.cac}
              onChange={handleFileChange('cac')}
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

export default BankStatementAnalysis;
