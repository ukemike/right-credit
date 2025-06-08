'use client';

/* eslint-disable sonarjs/no-duplicate-string */

import { Grid, GridItem, Text, HStack, VStack } from '@chakra-ui/react';

import ProfileMenu from '../../../profile/ProfileMenu';
import Button from '~/lib/components/ui/Button';

const DataProtectionOfficer = () => {
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
              Data Protection Officer Details
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
            Details
          </Text>

          <HStack
            justifyContent="space-between"
            w="100%"
            borderBottom="1px solid #E5E7EB"
            pb="2"
            mt="2"
          >
            <Text fontSize="14px" fontWeight="300" color="bodyText.200">
              Full Name
            </Text>
            <Text fontSize="md" fontWeight="600" color="bodyText.600">
              Hannah Fubara
            </Text>
          </HStack>

          <HStack
            justifyContent="space-between"
            w="100%"
            borderBottom="1px solid #E5E7EB"
            pb="2"
            mt="2"
          >
            <Text fontSize="14px" fontWeight="300" color="bodyText.200">
              Address
            </Text>
            <Text fontSize="md" fontWeight="600" color="bodyText.600">
              85 Azuzuama Road, Southern Ijaw, Bayelsa
            </Text>
          </HStack>

          <HStack
            justifyContent="space-between"
            w="100%"
            borderBottom="1px solid #E5E7EB"
            pb="2"
            mt="2"
          >
            <Text fontSize="14px" fontWeight="300" color="bodyText.200">
              Email
            </Text>
            <Text fontSize="md" fontWeight="600" color="bodyText.600">
              osunomoluabi@mail.com
            </Text>
          </HStack>

          <HStack
            justifyContent="space-between"
            w="100%"
            borderBottom="1px solid #E5E7EB"
            pb="2"
            mt="2"
          >
            <Text fontSize="14px" fontWeight="300" color="bodyText.200">
              Phone
            </Text>
            <Text fontSize="md" fontWeight="600" color="bodyText.600">
              +234 918 334 3975
            </Text>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default DataProtectionOfficer;
