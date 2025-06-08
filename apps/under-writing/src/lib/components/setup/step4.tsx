import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  Progress,
  Stack,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { setSetupStep } from '~/lib/redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '~/lib/redux/store';

import UploadCard from './uploadCard';

const Step4 = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { setupStep } = useAppSelector((state) => state.app.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState({
    cac: null,
    tin: null,
    memart: null,
    others: null,
  });

  const handleBack = () => {
    dispatch(setSetupStep(setupStep - 1));
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleFileChange = (key: keyof typeof files) => (file: File) => {
    setFiles((prev) => ({
      ...prev,
      [key]: file,
    }));
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
        Document Uploads
      </Text>

      <Box
        display="grid"
        gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
        gap="6"
        w="full"
        h="full"
        mt="10"
      >
        <UploadCard
          label="CAC Certificate"
          value={files.cac}
          onChange={handleFileChange('cac')}
        />
        <UploadCard
          label="Memert or  CAC 2 and CAC 7"
          value={files.tin}
          onChange={handleFileChange('tin')}
        />
        <UploadCard
          label="Status Report"
          value={files.memart}
          onChange={handleFileChange('memart')}
        />
        <UploadCard
          label="Operating License (Optional)"
          value={files.others}
          onChange={handleFileChange('others')}
        />
      </Box>
      <VStack align="stretch" w="100%" mt={8}>
        <Button text="Submit" onClick={handleModal} />
      </VStack>

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        showCloseButton={false}
        size="md"
        title=""
        fontSize={14}
        fontWeight={800}
        color="brand.600"
        p={0}
        body={
          <Stack spacing={4}>
            <Image src="/images/success.svg" alt="success" />

            <Stack p={4}>
              <VStack spacing={0}>
                <Text
                  color="bodyText.100"
                  fontSize="lg"
                  textAlign="center"
                  fontWeight={600}
                >
                  Profile Setup Complete
                </Text>

                <Text
                  color="bodyText.200"
                  fontSize="14px"
                  textAlign="center"
                  fontWeight={400}
                >
                  Your profile has been set up successfully! You&apos;re all set
                  to explore and make the most of your experience.
                </Text>
              </VStack>

              <VStack
                w="100%"
                align="stretch"
                bg="background.100"
                p={4}
                borderRadius="10"
              >
                <HStack>
                  <Image src="/images/alert-green.svg" alt="success" />
                  <Text color="#374151" fontSize="14px" fontWeight={400}>
                    Profile created successfully
                  </Text>
                </HStack>

                <HStack>
                  <Image src="/images/alert-yellow.svg" alt="success" />
                  <Text color="#374151" fontSize="14px" fontWeight={400}>
                    An admin will review your submitted information. You’ll be
                    notified once the review is complete.
                  </Text>
                </HStack>
              </VStack>

              <Stack mt={4}>
                <Button
                  text="Proceed to Dashboard"
                  onClick={() => router.push('/auth/login')}
                />
              </Stack>
            </Stack>
          </Stack>
        }
      ></Modal>
    </VStack>
  );
};

export default Step4;
