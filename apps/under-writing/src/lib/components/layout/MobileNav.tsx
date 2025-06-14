'use client';

import type { FlexProps } from '@chakra-ui/react';
import {
  IconButton,
  Avatar,
  Flex,
  HStack,
  Text,
  Image,
  Box,
  Badge,
  Divider,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FiMenu } from 'react-icons/fi';

import { logOut } from '@shared/redux/slices/authSlice';
import { useAppDispatch } from '@shared/redux/store';

interface MobileProps extends FlexProps {
  onOpen: () => void;
  showSidebar?: boolean;
  user: any;
  isLoading: boolean;
}

const MobileNav = ({
  onOpen,
  showSidebar = true,
  user,
  isLoading,
  ...rest
}: MobileProps) => {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen: onOpenAlert, onClose } = useDisclosure();
  const cancelRef = useRef<any>(null);

  const handleLogout = (e: React.MouseEvent, type: string) => {
    if (type === 'logout') {
      e.preventDefault();
      onOpenAlert();
    }
  };
  return (
    <>
      <Flex
        ml={{ base: 0, md: showSidebar ? 60 : 0 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg="white"
        boxShadow="sm"
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        position="sticky"
        top="0"
        left="0"
        right="0"
        zIndex="sticky"
        {...rest}
      >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <HStack spacing={{ base: '0', md: '6' }}>
          <Flex alignItems="center">
            <HStack spacing="2" alignItems="center">
              {isLoading ? (
                <Spinner
                  size="md"
                  speed="0.65s"
                  color="brand.100"
                  label="Loading..."
                />
              ) : (
                <HStack spacing="2" alignItems="center">
                  <Avatar
                    size="sm"
                    name={`${user?.owner?.first_name} ${user?.owner?.last_name}`}
                    color="white"
                    bg="brand.100"
                  />

                  <HStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="4px"
                  >
                    <Text fontSize="14px" color="bodyText.100" fontWeight="500">
                      {user?.owner?.first_name} {user?.owner?.last_name}
                      {/* . Admin */}
                    </Text>
                  </HStack>
                </HStack>
              )}

              <Divider
                orientation="vertical"
                borderColor="border.100"
                height="20px"
                w="2px"
              />

              <HStack spacing="0" alignItems="center">
                <Box position="relative">
                  <IconButton
                    variant="ghost"
                    aria-label="notification"
                    icon={
                      <Image src="/images/notification.svg" boxSize="25px" />
                    }
                    _hover={{ bg: 'transparent' }}
                  />
                  <Badge
                    position="absolute"
                    top="0px"
                    right="5px"
                    bg="red.500"
                    color="white"
                    fontSize="10px"
                    borderRadius="full"
                    fontWeight={800}
                    w="15px"
                    h="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    3
                  </Badge>
                </Box>
                <Box position="relative">
                  <IconButton
                    variant="ghost"
                    aria-label="logout"
                    icon={<Image src="/images/logout.svg" boxSize="25px" />}
                    _hover={{ bg: 'transparent' }}
                    onClick={(e) => handleLogout(e, 'logout')}
                  />
                </Box>
              </HStack>
            </HStack>
          </Flex>
        </HStack>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Logout Confirmation</AlertDialogHeader>
            <AlertDialogBody>Are you sure you want to logout?</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  dispatch(logOut());
                  onClose();
                }}
                ml={3}
              >
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default MobileNav;
