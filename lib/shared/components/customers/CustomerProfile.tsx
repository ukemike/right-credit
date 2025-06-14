'use client';

import { HStack, Text, Image, VStack, Badge, Avatar } from '@chakra-ui/react';

import ProfileTabs from './ProfileTabs';

const CustomerProfile = () => {
  return (
    <VStack alignItems="flex-start" w="100%" spacing={4}>
      <HStack justifyContent="space-between" w="100%">
        <Text color="bodyText.200" fontSize="13px" fontWeight="500">
          Loan status:
        </Text>
        <Badge
          bg="border.300"
          color="bodyText.100"
          fontSize="sm"
          fontWeight="700"
          borderRadius="full"
          px={2}
          py={1}
          textTransform="capitalize"
        >
          No active loan
        </Badge>
      </HStack>

      <HStack alignItems="center">
        <Avatar name="John Doe" size="lg" bg="brand.100" color="white" />

        <VStack alignItems="flex-start" spacing="0">
          <Text color="headText.300" fontSize="md" fontWeight="700">
            Peterson Anyanwu
          </Text>
          <HStack>
            <Text color="brand.100" fontSize="sm" fontWeight="400">
              #Lk89Lk
            </Text>
            <Text color="#566577" fontSize="sm" fontWeight="400">
              09/09/1983
            </Text>
            <Text color="#566577" fontSize="sm" fontWeight="400">
              Male
            </Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%">
            <HStack>
              <Image src="/images/mail.svg" />
              <Text color="bodyText.200" fontSize="sm" fontWeight="700">
                Send Email
              </Text>
            </HStack>
            <HStack justifyContent="flex-end">
              <Image src="/images/call.svg" />
              <Text color="bodyText.200" fontSize="sm" fontWeight="700">
                Call
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </HStack>

      <ProfileTabs />
    </VStack>
  );
};

export default CustomerProfile;
