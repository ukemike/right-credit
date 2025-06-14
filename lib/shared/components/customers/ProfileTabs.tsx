'use client';

import {
  HStack,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Box,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import Button from '@shared/components/ui/Button';

const ProfileTabs = () => {
  const router = useRouter();

  const tabsProfile = [
    {
      header: 'Personal info',
      component: (
        <VStack spacing={4} w="100%" alignItems="flex-start">
          <HStack spacing={2}>
            <Image src="/images/call2.svg" />
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              +234 813 456 8888
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Image src="/images/mail2.svg" />
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              james@gmail.com
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Image src="/images/map.svg" />
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              159 Ijebu Ife Market Road, Ijebu Ife, Ogun
            </Text>
          </HStack>

          <VStack w="100%" alignItems="flex-start" spacing={1}>
            <Text color="#919395" fontSize="sm" fontWeight="400">
              NIN
            </Text>
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              9209329302
            </Text>
          </VStack>
          <VStack w="100%" alignItems="flex-start" spacing={1}>
            <Text color="#919395" fontSize="sm" fontWeight="400">
              BVN
            </Text>
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              9209329302
            </Text>
          </VStack>
          <VStack w="100%" alignItems="flex-start" spacing={1}>
            <Text color="#919395" fontSize="sm" fontWeight="400">
              Marital Status
            </Text>
            <Text color="headText.100" fontSize="sm" fontWeight="400">
              Single
            </Text>
          </VStack>

          <HStack>
            <Button
              text="Edit profile"
              variant="outline"
              size="sm"
              fontWeight={400}
            />
            <Button
              text=" Create new loan"
              size="sm"
              px={6}
              fontWeight={400}
              onClick={() => router.push('/dashboard/loans/create-loan')}
            />
          </HStack>
        </VStack>
      ),
    },
    {
      header: 'Occupation',
      component: (
        <Box>
          <Text>Occupation</Text>
        </Box>
      ),
    },
  ];

  return (
    <Tabs w="100%">
      <TabList>
        {tabsProfile.map((tab) => (
          <Tab
            key={tab.header}
            _selected={{
              color: 'black',
              fontWeight: '700',
              fontSize: '14px',
              borderBottom: '4px solid #000000',
            }}
            fontSize="14px"
            color="#919395"
            fontWeight="400"
            style={{
              textWrap: 'nowrap',
            }}
          >
            {tab.header}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabsProfile.map((tab) => (
          <TabPanel key={tab.header} px={0}>
            {tab.component}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
