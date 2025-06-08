'use client';

import {
  VStack,
  Text,
  Link as ChakraLink,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '../ui/Button';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  const router = useRouter();
  const navLinks = [
    {
      title: 'Features',
      url: '#features',
    },
    {
      title: 'Benefits',
      url: '#benefits',
    },
    {
      title: 'Solutions',
      url: '#solutions',
    },
  ];
  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent bg="brand.100">
        <DrawerCloseButton
          onClick={onClose}
          position="fixed"
          top={4}
          right={4}
          size="lg"
          color="white"
        />
        <DrawerHeader>
          <Link href="/" onClick={onClose}>
            <ChakraLink>
              <Text color="white" fontSize="24px" fontWeight="bold">
                Lending
              </Text>
            </ChakraLink>
          </Link>
        </DrawerHeader>

        <DrawerBody>
          <VStack spacing={4} align="stretch">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.url}>
                <ChakraLink onClick={onClose} color="white">
                  {link.title}
                </ChakraLink>
              </Link>
            ))}
          </VStack>
        </DrawerBody>

        <VStack align="flex-start" mb={20} px={6}>
          <Button
            text="Get Started"
            px={6}
            onClick={() => router.push('/auth/signup')}
            bg="white"
            color="brand.100"
          />
        </VStack>
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;
