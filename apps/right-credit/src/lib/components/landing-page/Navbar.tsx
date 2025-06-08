'use client';

import {
  VStack,
  Container,
  HStack,
  Link as ChakraLink,
  IconButton,
  Image,
  Text,
  Button as ChakraButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowRight, FaBars } from 'react-icons/fa';

import Button from '../ui/Button';

import Drawer from './Drawer';

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <VStack
        py={3}
        // position="fixed"
        // top={0}
        // left={0}
        // right={0}
        bg="white"
        zIndex={100}
      >
        <Container
          maxW={{
            base: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
          }}
        >
          <HStack justify="space-between">
            <HStack
              spacing={{
                base: 4,
                sm: 8,
                md: 16,
              }}
            >
              <Link href="/">
                <Image src="/images/logo.svg" alt="logo" />
              </Link>
              <HStack
                spacing={4}
                display={{
                  base: 'none',
                  md: 'none',
                  lg: 'flex',
                }}
              >
                {navLinks.map((link) => (
                  <Link href={link.url} key={link.title}>
                    <ChakraLink
                      color="bodyText.100"
                      fontWeight="500"
                      fontSize="14px"
                      _hover={{
                        color: 'primary',
                      }}
                    >
                      {link.title}
                    </ChakraLink>
                  </Link>
                ))}
              </HStack>
            </HStack>

            <HStack
              alignItems="flex-end"
              display={{
                base: 'none',
                md: 'none',
                lg: 'flex',
              }}
            >
              <Button
                text="Get Started for Free"
                onClick={() => router.push('/auth/signup')}
              />
            </HStack>

            <HStack
              alignItems="flex-end"
              display={{
                base: 'flex',
                md: 'flex',
                lg: 'none',
              }}
            >
              <IconButton
                aria-label="toggle navigation"
                bg="primary"
                color="white"
                icon={<FaBars size={25} color="#0052CC" />}
                _hover={{
                  bg: 'primary',
                }}
                onClick={handleToggle}
              />
            </HStack>
          </HStack>
        </Container>
      </VStack>
      <HStack
        bg="brand.100"
        justify="center"
        flexDirection={['column', 'row']}
        px={[4, 0]}
        py={[2, 0]}
      >
        <Text
          color="white"
          fontSize={['10px', 'sm']}
          fontWeight="400"
          textAlign="center"
        >
          Sign up now and get 3 free borrower analyses daily for the first 30
          days!
        </Text>
        <ChakraButton
          variant="ghost"
          color="white"
          fontSize="sm"
          fontWeight="600"
          p={0}
          m={0}
          rightIcon={<FaArrowRight />}
          _hover={{
            bg: 'transparent',
          }}
        >
          Get Started for Free
        </ChakraButton>
      </HStack>
      <Drawer isOpen={isOpen} onClose={handleToggle} />
    </>
  );
};

export default NavBar;
