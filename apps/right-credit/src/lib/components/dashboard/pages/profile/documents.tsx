'use client';

/* eslint-disable sonarjs/no-duplicate-string */

import { Grid, GridItem, Text, HStack, VStack, Image } from '@chakra-ui/react';

import ProfileMenu from '../../../profile/ProfileMenu';
import Button from '~/lib/components/ui/Button';

const Documents = () => {
  return (
    <Grid
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(7, 1fr)',
      }}
      gap={10}
      h="auto"
      mb={5}
      mt={{ base: 5, md: 5 }}
    >
      <GridItem
        colSpan={{ sm: 0, md: 1, lg: 2 }}
        h="auto"
        w="100%"
        bg="white"
        borderRadius="8px"
        boxShadow="sm"
      >
        <ProfileMenu />
      </GridItem>

      <GridItem
        colSpan={{ sm: 1, md: 1, lg: 5 }}
        h="auto"
        w="100%"
        bg="white"
        p={4}
      >
        <HStack
          justifyContent="space-between"
          borderBottom="1px solid #E5E7EB"
          pb="4"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <VStack alignItems="flex-start" spacing={0}>
            <Text fontSize="xl" fontWeight="700" color="bodyText.100">
              Documents
            </Text>
            <Text fontSize="14px" fontWeight="400" color="bodyText.200">
              To update profile, send request to LendBook admin with the details
            </Text>
          </VStack>
          <Button text="Request Update" variant="outline" />
        </HStack>

        <VStack
          alignItems="flex-start"
          spacing={0}
          borderWidth="1px"
          borderColor="border.300"
          borderRadius="20px"
          p={4}
          mt={4}
        >
          <Text fontSize="md" fontWeight="600" color="bodyText.200">
            Company Documents
          </Text>

          <HStack
            justifyContent="space-between"
            w="100%"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
          >
            <HStack alignItems="center" spacing={0}>
              <HStack spacing={0} mr={-5}>
                <Image src="/images/download.svg" alt="documents" mr={-5} />
                <Image src="/images/folder.svg" alt="documents" />
              </HStack>

              <VStack alignItems="flex-start" spacing={0}>
                <Text
                  fontSize="15px"
                  fontWeight="400"
                  color="bodyText.100"
                  style={{
                    textWrap: 'nowrap',
                  }}
                >
                  Certificate of Incorporation
                </Text>
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  File size • 3,5 MB
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems="center" spacing={0}>
              <HStack spacing={0} mr={-5}>
                <Image src="/images/download.svg" alt="documents" mr={-5} />
                <Image src="/images/folder.svg" alt="documents" />
              </HStack>

              <VStack alignItems="flex-start" spacing={0}>
                <Text
                  fontSize="15px"
                  fontWeight="400"
                  color="bodyText.100"
                  style={{
                    textWrap: 'nowrap',
                  }}
                >
                  Certificate of Incorporation
                </Text>
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  File size • 3,5 MB
                </Text>
              </VStack>
            </HStack>
          </HStack>

          <HStack
            justifyContent="space-between"
            w="100%"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
          >
            <HStack alignItems="center" spacing={0}>
              <HStack spacing={0} mr={-5}>
                <Image src="/images/download.svg" alt="documents" mr={-5} />
                <Image src="/images/folder.svg" alt="documents" />
              </HStack>

              <VStack alignItems="flex-start" spacing={0}>
                <Text
                  fontSize="15px"
                  fontWeight="400"
                  color="bodyText.100"
                  style={{
                    textWrap: 'nowrap',
                  }}
                >
                  Certificate of Incorporation
                </Text>
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  File size • 3,5 MB
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems="center" spacing={0}>
              <HStack spacing={0} mr={-5}>
                <Image src="/images/download.svg" alt="documents" mr={-5} />
                <Image src="/images/folder.svg" alt="documents" />
              </HStack>

              <VStack alignItems="flex-start" spacing={0}>
                <Text
                  fontSize="15px"
                  fontWeight="400"
                  color="bodyText.100"
                  style={{
                    textWrap: 'nowrap',
                  }}
                >
                  Certificate of Incorporation
                </Text>
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  File size • 3,5 MB
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>

        <VStack
          alignItems="flex-start"
          spacing={0}
          borderWidth="1px"
          borderColor="border.300"
          borderRadius="20px"
          p={4}
          mt={4}
        >
          <Text fontSize="md" fontWeight="600" color="bodyText.200">
            Personal Documents
          </Text>

          <HStack
            justifyContent="space-between"
            w="100%"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
          >
            <HStack alignItems="center" spacing={0}>
              <HStack spacing={0} mr={-5}>
                <Image src="/images/download.svg" alt="documents" mr={-5} />
                <Image src="/images/folder.svg" alt="documents" />
              </HStack>

              <VStack alignItems="flex-start" spacing={0}>
                <Text
                  fontSize="15px"
                  fontWeight="400"
                  color="bodyText.100"
                  style={{
                    textWrap: 'nowrap',
                  }}
                >
                  Certificate of Incorporation
                </Text>
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  File size • 3,5 MB
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems="center" spacing={0}>
              <HStack spacing={0} mr={-5}>
                <Image src="/images/download.svg" alt="documents" mr={-5} />
                <Image src="/images/folder.svg" alt="documents" />
              </HStack>

              <VStack alignItems="flex-start" spacing={0}>
                <Text
                  fontSize="15px"
                  fontWeight="400"
                  color="bodyText.100"
                  style={{
                    textWrap: 'nowrap',
                  }}
                >
                  Certificate of Incorporation
                </Text>
                <Text fontSize="sm" fontWeight="400" color="bodyText.200">
                  File size • 3,5 MB
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Documents;
