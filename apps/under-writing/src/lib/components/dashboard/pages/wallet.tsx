'use client';

import { Box, Text, VStack, HStack, Progress, Image } from '@chakra-ui/react';
import { useState } from 'react';

import TopUp from '../../modals/TopUp';
import Button from '../../ui/Button';
import WallettTable from '../../wallet/WallettTable';
import ModalComponent from '~/lib/components/ui/Modal';
import { formatNumber } from '~/lib/utils/formatter';

const WalletComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box borderRadius="8px" p={4}>
      <VStack alignItems="flex-start" spacing={0}>
        <Text fontSize="xl" fontWeight="700" color="bodyText.100">
          My Wallet
        </Text>
        <Text fontSize="14px" fontWeight="400" color="bodyText.200">
          Manage your account from here
        </Text>
      </VStack>

      <VStack alignItems="flex-start" spacing={0} mt={4}>
        <HStack
          justifyContent="space-between"
          w="100%"
          bg="brand.100"
          p={4}
          borderTopLeftRadius="10px"
          borderTopRightRadius="10px"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <Text fontSize="14px" fontWeight="500" color="white">
            Welcome! We&apos;ve provided you with ₦10,000 in testing credits to explore our features. 
            When your balance runs low, you&apos;ll need to top up your wallet to continue using our services.
          </Text>
          {/* <Button
            bg="white"
            color="brand.100"
            size="md"
            text="Upgrade Now"
            px={6}
          /> */}
        </HStack>

        <VStack
          alignItems="flex-start"
          spacing={0}
          w="100%"
          bg="white"
          p={4}
          borderRadius="10px"
          mt={4}
        >
          <Progress value={20} w="100%" size="md" borderRadius="10px" />

          <HStack justifyContent="space-between" w="100%" mt={2}>
            <Text fontSize="14px" fontWeight="400" color="bodyText.200">
              Available Balance
            </Text>
            <Text fontSize="md" fontWeight="600" color="bodyText.100">
              ₦10,000
            </Text>
          </HStack>

          <HStack justifyContent="space-between" w="100%" mt={4}>
            <HStack>
              <Box
                bg="#E6E6E666"
                w="40px"
                h="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
              >
                <Image src="/images/naira.svg" alt="naira" />
              </Box>
              <Text fontSize={['xl', '2xl']} fontWeight="700" color="black">
                {formatNumber(10000)}
              </Text>
            </HStack>
            <Button
              variant="outline"
              size="md"
              text="Top up wallet"
              px={6}
              onClick={handleModal}
            />
          </HStack>
        </VStack>
      </VStack>

      <WallettTable />

      <ModalComponent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl"
        body={<TopUp />}
      />
    </Box>
  );
};

export default WalletComponent;
