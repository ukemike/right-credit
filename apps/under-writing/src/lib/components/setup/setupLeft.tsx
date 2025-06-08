import { HStack, Image, Text, VStack } from '@chakra-ui/react';

const SetupLeft = () => {
  return (
    <VStack maxW="350px" mx="auto" spacing={4}>
      <Image src="/images/step-right.png" alt="auth-bg" boxSize="350px" />

      <VStack w="full" spacing="2">
        <HStack
          justify="space-between"
          w="100%"
          bg="#FAFAFB"
          p="4"
          borderRadius="6"
        >
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="14px" fontWeight="500" color="#222222">
              CAC-document.pdf
            </Text>
            <Text color="#3276E8" fontSize="13px">
              Upload complete
            </Text>
          </VStack>
          <Image src="/images/verified.svg" alt="auth-bg" boxSize="25px" />
        </HStack>

        <HStack
          justify="space-between"
          w="100%"
          bg="#FAFAFB"
          p="4"
          borderRadius="6"
        >
          <VStack align="flex-start" spacing={0}>
            <Text fontSize="14px" fontWeight="500" color="#222222">
              proof-of-income.pdf
            </Text>
            <Text color="#3276E8" fontSize="13px">
              Upload complete
            </Text>
          </VStack>
          <Image src="/images/verified.svg" alt="auth-bg" boxSize="25px" />
        </HStack>
      </VStack>

      <VStack w="full" spacing="3" mt="4">
        <Text
          fontSize={['lg', 'xl']}
          fontWeight="700"
          color="#090A0D"
          textAlign="center"
        >
          Setup Lendbook account
        </Text>
        <Text
          fontSize="14px"
          color="#374151"
          fontWeight="400"
          textAlign="center"
        >
          You’ll be able to explore flexible lending options, manage repayments
          with ease.
        </Text>
      </VStack>
    </VStack>
  );
};

export default SetupLeft;
