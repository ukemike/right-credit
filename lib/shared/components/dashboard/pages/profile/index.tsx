'use client';


import {
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
  Skeleton,
  SkeletonText,
  Box,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';

import ProfileMenu from '../../../profile/ProfileMenu';
import ProfileUpload from '@shared/components/profile/ProfileUpload';
import Button from '@shared/components/ui/Button';
import { useGetUserQuery } from '@shared/redux/services/auth.service';

const ProfileSkeletonLoader = () => (
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
      <Box w="100%" bg="white" borderRadius={6}>
        <VStack alignItems="stretch" spacing={0}>
          <SkeletonText
            noOfLines={1}
            width="120px"
            mt={4}
            ml={6}
            skeletonHeight="14px"
          />

          {Array(5)
            .fill(0)
            .map((_, index) => (
              <HStack
                key={index}
                spacing={3}
                py={4}
                px={6}
                cursor="pointer"
                borderRadius={6}
              >
                <Skeleton height="20px" width="20px" />
                <SkeletonText
                  noOfLines={1}
                  width="160px"
                  skeletonHeight="14px"
                />
              </HStack>
            ))}
        </VStack>
      </Box>
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
          <SkeletonText noOfLines={1} width="180px" skeletonHeight="24px" />
          <SkeletonText noOfLines={1} width="300px" mt="2" />
        </VStack>
        <Skeleton
          height="36px"
          width="120px"
          borderRadius="md"
          mt={{ base: 2, md: 0 }}
        />
      </HStack>

      <Grid
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(7, 1fr)',
        }}
        gap={4}
        h="auto"
        mb={5}
        mt={{ base: 5, md: 5 }}
      >
        <GridItem
          colSpan={{ sm: 1, md: 1, lg: 5 }}
          h="auto"
          w="100%"
          bg="white"
          p={4}
          borderWidth="1px"
          borderColor="border.300"
          borderRadius="20px"
        >
          <VStack alignItems="flex-start" spacing={0}>
            <SkeletonText noOfLines={1} width="80px" skeletonHeight="18px" />

            {Array(4)
              .fill(0)
              .map((_, index) => (
                <HStack
                  key={index}
                  justifyContent="space-between"
                  w="100%"
                  borderBottom="1px solid #E5E7EB"
                  pb="2"
                  mt="2"
                >
                  <SkeletonText noOfLines={1} width="100px" />
                  <SkeletonText noOfLines={1} width="150px" />
                </HStack>
              ))}
          </VStack>
        </GridItem>

        <GridItem colSpan={{ sm: 0, md: 1, lg: 2 }} h="auto" w="100%">
          <Skeleton height="200px" width="100%" borderRadius="lg" />
        </GridItem>
      </Grid>
    </GridItem>
  </Grid>
);

const PersonalDetails = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const { data: user, isLoading } = useGetUserQuery('');
  const userData = useMemo(() => user || {}, [user]);

  const handleProfilePictureChange = (file: File) => {
    setProfilePicture(file);
  };

  if (isLoading) {
    return <ProfileSkeletonLoader />;
  }

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
              Personal Details
            </Text>
            <Text fontSize="14px" fontWeight="400" color="bodyText.200">
              To update profile, send request to LendBook admin with the details
            </Text>
          </VStack>
          <Button text="Request Update" variant="outline" />
        </HStack>

        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(7, 1fr)',
          }}
          gap={4}
          h="auto"
          mb={5}
          mt={{ base: 5, md: 5 }}
        >
          <GridItem
            colSpan={{ sm: 1, md: 1, lg: 5 }}
            h="auto"
            w="100%"
            bg="white"
            p={4}
            borderWidth="1px"
            borderColor="border.300"
            borderRadius="20px"
          >
            <VStack alignItems="flex-start" spacing={0}>
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
                  First Name
                </Text>
                <Text fontSize="md" fontWeight="600" color="bodyText.600">
                  {userData?.owner?.first_name}
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
                  Last Name
                </Text>
                <Text fontSize="md" fontWeight="600" color="bodyText.600">
                  {userData?.owner?.last_name}
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
                  {userData?.owner?.email}
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
                  Designation / Title
                </Text>
                <Text fontSize="md" fontWeight="600" color="bodyText.600">
                  {userData?.owner?.role || 'N/A'}
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
                  Business Name
                </Text>
                <Text fontSize="md" fontWeight="600" color="bodyText.600">
                  {userData?.owner?.business_name || 'N/A'}
                </Text>
              </HStack>
            </VStack>
          </GridItem>

          <GridItem colSpan={{ sm: 0, md: 1, lg: 2 }} h="auto" w="100%">
            <ProfileUpload
              label="Profile picture"
              value={profilePicture}
              onChange={handleProfilePictureChange}
            />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default PersonalDetails;
