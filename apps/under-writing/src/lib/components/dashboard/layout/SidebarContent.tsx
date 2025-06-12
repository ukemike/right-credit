'use client';

import type { BoxProps } from '@chakra-ui/react';
import {
  Box,
  CloseButton,
  Flex,
  Text,
  Divider,
  VStack,
  Avatar,
  Spinner,
} from '@chakra-ui/react';

import NavItem from './NavItem';

interface LinkItemProps {
  name: string;
  icon: string;
  path: string;
  iconActive: string;
}

const LinkItems: Array<LinkItemProps> = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: '/images/dashboard.svg',
    iconActive: '/images/dashboard-active.svg',
  },
  {
    name: 'Risk Report',
    path: '/dashboard/risk-report',
    icon: '/images/risk.svg',
    iconActive: '/images/risk-active.svg',
  },
  {
    name: 'Wallet',
    path: '/dashboard/wallet',
    icon: '/images/wallet2.svg',
    iconActive: '/images/wallet-active.svg',
  },
  {
    name: 'Profile',
    path: '/dashboard/profile/personal-details',
    icon: '/images/profile.svg',
    iconActive: '/images/profile-active.svg',
  },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
  user: any;
  isLoading: boolean;
}

const SidebarContent = ({
  onClose,
  user,
  isLoading,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg="white"
      boxShadow="sm"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      overflowY="auto"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        scrollbarWidth: 'none',
      }}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="18px" fontWeight="bold">
          Lending
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.path}
          iconActive={link.iconActive}
        >
          {link.name}
        </NavItem>
      ))}

      <br />

      <Divider my="4" borderColor="border.200" />

      <VStack spacing="2" alignItems="flex-start" ml="8">
        {isLoading ? (
          <Spinner
            size="md"
            speed="0.65s"
            color="brand.100"
            label="Loading..."
          />
        ) : (
          <>
            <Avatar
              bg="brand.100"
              size="sm"
              name={`${user?.owner?.first_name} ${user?.owner?.last_name}`}
              color="white"
            />
            <VStack alignItems="flex-start" spacing="0">
              <Text fontSize="14px" color="bodyText.200" fontWeight="500">
                {user?.owner?.first_name} {user?.owner?.last_name}
              </Text>
              <Text fontSize="12px" color="#00000080" fontWeight="400">
                {user?.owner?.email}
              </Text>
            </VStack>
          </>
        )}
      </VStack>
      <Box mb={10} />
    </Box>
  );
};

export default SidebarContent;
