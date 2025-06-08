'use client';

import { Flex, Stack, Text, HStack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const VerifyReset = () => {
  const router = useRouter();
  return (
    <Flex
      minH="100vh"
      justify="center"
      bg="white"
      h="100vh"
      p={6}
      w="100%"
      bgImage={`url('/images/auth-bg.svg')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Stack spacing={8} w="100%" mt={10}>
        <Stack maxW="lg" mx="auto" w="100%">
          <Stack align="center" spacing={0}>
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="700"
              color="#090A0D"
              textAlign="center"
            >
              Reset password link sent
            </Text>

            <HStack
              borderTopWidth={1}
              borderBottomWidth={1}
              borderColor="border.100"
              p={4}
              mt="6"
              cursor="pointer"
              onClick={() => router.push('/auth/reset-password')}
            >
              <Image src="/images/gmail.svg" alt="gmail" />
              <Image src="/images/yahoo.svg" alt="yahoo" />
              <Image src="/images/outlook.svg" alt="outlook" />
            </HStack>

            <Text
              fontSize="13px"
              fontWeight="500"
              color="bodyText.100"
              textAlign="center"
              mt={4}
            >
              Can&apos;t see the e-mail? Please check the spam folder. <br />{' '}
              Wrong e-mail?{' '}
              <Link href="/auth/reset-password">
                <Text
                  as="span"
                  color="brand.100"
                  fontWeight="400"
                  fontSize="14px"
                >
                  Please re-enter your address
                </Text>
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default VerifyReset;
