'use client';

import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';

import { useGetUserQuery } from '~/lib/redux/services/auth.service';

import MobileNav from './MobileNav';
import SidebarContent from './SidebarContent';

interface DashboardLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  bg?: string;
  px?: string;
  py?: string;
}

const DashboardLayout = ({
  children,
  showSidebar = true,
  bg = 'background.200',
  px = '4',
  py = '4',
}: DashboardLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: user, isLoading } = useGetUserQuery('');
  return (
    <Box minH="100vh" bg={bg}>
      {(showSidebar || isOpen) && (
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: showSidebar ? 'block' : 'none' }}
          user={user}
          isLoading={isLoading}
        />
      )}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} user={user} isLoading={isLoading} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav
        onOpen={onOpen}
        showSidebar={showSidebar}
        user={user}
        isLoading={isLoading}
      />
      <Box ml={{ base: 0, md: showSidebar ? 60 : 0 }} px={px} py={py}>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
