'use client';

/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */

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
            You’ve used all 3 of your free analyses for today. To continue
            enjoying this feature without limits, consider <br /> upgrading your
            plan for unlimited access.
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
          <Progress value={50} w="100%" size="md" borderRadius="10px" />

          <HStack justifyContent="space-between" w="100%" mt={2}>
            <Text fontSize="14px" fontWeight="400" color="bodyText.200">
              Free daily credits used
            </Text>
            <Text fontSize="md" fontWeight="600" color="bodyText.100">
              2/3
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
                {formatNumber(1000000)}
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
