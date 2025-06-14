'use client';

import {
  Container,
  VStack,
  Text,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Button as ChakraButton,
} from '@chakra-ui/react';

const NewsLetter = () => {
  return (
    <VStack id="newsletter" mb={10}>
      <Container
        maxW={{
          base: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
        }}
        bg="#F7FAFF"
        borderRadius="30px"
        py={10}
      >
        <VStack spacing={2}>
          <HStack
            bg="#C5C5C52E"
            rounded="full"
            px={4}
            py={2}
            alignItems="center"
            gap={2}
          >
            <Image src="/images/fire.svg" alt="focus" />
            <Text fontSize="13px" fontWeight="400" color="#505050">
              Join our newsletter
            </Text>
          </HStack>
          <VStack spacing={4}>
            <Text
              fontSize={['2xl', '3xl']}
              fontWeight="700"
              color="#090A0D"
              lineHeight="1.2"
              textAlign="center"
            >
              Stay Updated. Stay Ahead
            </Text>

            <Text
              fontSize="16px"
              fontWeight="400"
              color="#2D2D2D"
              textAlign="center"
            >
              Join our newsletter for the latest insights, updates, and
              exclusive offers straight to your inbox. Be the first to know!
            </Text>

            <HStack w={['100%', '50%']} justifyContent="center">
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  type="text"
                  placeholder="Enter your email"
                  borderRadius="full"
                  border="1px solid #E3E5EB"
                  bg="white"
                  fontSize="14px"
                  fontWeight="400"
                  color="#000"
                  focusBorderColor="#4543F5"
                />
                <InputRightElement width="auto">
                  <ChakraButton
                    size="md"
                    bg="#4543F5"
                    color="#fff"
                    fontWeight="400"
                    fontSize="14px"
                    rounded="full"
                    px={6}
                    py={4}
                    mr={2}
                  >
                    Sign Up
                  </ChakraButton>
                </InputRightElement>
              </InputGroup>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </VStack>
  );
};

export default NewsLetter;
