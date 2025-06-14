'use client';

import { Grid, GridItem, Text, HStack, VStack } from '@chakra-ui/react';

import ProfileMenu from '../../../profile/ProfileMenu';
import Button from '@shared/components/ui/Button';

const BusinessInfo = () => {
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
              Business Information
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
              Registered Name
            </Text>
            <Text fontSize="md" fontWeight="600" color="bodyText.600">
              Hensons Credit Global Limited
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
              Registration Number (CAC)
            </Text>
            <Text fontSize="md" fontWeight="600" color="bodyText.600">
              RC123456
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
              Office Address
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
              Country of Incorporation
            </Text>
            <Text fontSize="md" fontWeight="600" color="bodyText.600">
              Nigeria
            </Text>
          </HStack>

          <VStack
            alignItems="flex-start"
            spacing={0}
            borderWidth="1px"
            borderColor="border.300"
            borderRadius="20px"
            w="100%"
            p={4}
            mt={4}
          >
            <Text fontSize="md" fontWeight="600" color="bodyText.200">
              Names of Directors/Partners/Trustees
            </Text>

            <HStack
              justifyContent="space-between"
              w="100%"
              borderBottom="1px solid #E5E7EB"
              pb="2"
              mt="2"
            >
              <Text fontSize="14px" fontWeight="300" color="bodyText.200">
                Directors/Partners/Trustees
              </Text>
              <Text fontSize="md" fontWeight="600" color="bodyText.600">
                Paul Omisore
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
                Directors/Partners/Trustees
              </Text>
              <Text fontSize="md" fontWeight="600" color="bodyText.600">
                Mary Okujagu
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
                Directors/Partners/Trustees
              </Text>
              <Text fontSize="md" fontWeight="600" color="bodyText.600">
                Lydia Aluko
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
                Directors/Partners/Trustees
              </Text>
              <Text fontSize="md" fontWeight="600" color="bodyText.600">
                Sarah Pakabo
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default BusinessInfo;
