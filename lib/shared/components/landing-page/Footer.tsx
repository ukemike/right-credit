'use client';

import {
  Image,
  Text,
  Heading,
  VStack,
  Container,
  SimpleGrid,
  UnorderedList,
  ListItem,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
  const legal = [
    {
      name: 'Privacy Policy',
      link: '#',
    },

    {
      name: 'Terms of Service',
      link: '/terms',
    },

    {
      name: 'Compliance',
      link: '#',
    },
  ];

  const about = [
    {
      name: 'Who We Are',
      link: '/',
    },

    {
      name: 'Features',
      link: '#features',
    },

    {
      name: 'Benefits',
      link: '#benefits',
    },
  ];

  return (
    <VStack mt={50} as="footer" bg="#F7FAFF" py={10}>
      <Container
        maxW={{
          base: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
        }}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          <VStack align="flex-start" spacing={5}>
            <Link href="/">
              <Image src="/images/logo.svg" alt="logo" />
            </Link>
            <Text
              color="#5E6782"
              fontSize="14px"
              fontWeight="400"
              fontFamily="body"
            >
              Your Vision, Our Loans – Flexibility Tailored for Your Future.
            </Text>
            <VStack align="flex-start" spacing={2}>
              <HStack spacing={5}>
                <Link href="/">
                  {' '}
                  <Image src="/images/twitter.svg" alt="logo" />
                </Link>
                <Link href="/">
                  {' '}
                  <Image src="/images/instagram.svg" alt="logo" />
                </Link>
                <Link href="/">
                  <Image src="/images/facebook.svg" alt="logo" />
                </Link>
              </HStack>
              <Text
                color="white"
                fontSize="14px"
                fontWeight="regular"
                fontFamily="body"
              >
                Tel: 0800Lending
              </Text>
            </VStack>
          </VStack>

          <VStack align="flex-start">
            <Heading
              as="h3"
              fontSize="18px"
              mb={4}
              fontFamily="heading"
              fontWeight="semibold"
              color="#0E1735"
            >
              About Us
            </Heading>
            <UnorderedList
              styleType="none"
              p={0}
              m={0}
              color="#5E6782"
              fontSize="14px"
              fontWeight="400"
              fontFamily="body"
              spacing={2}
            >
              {about.map((item) => (
                <ListItem key={item.name}>
                  <Link href={item.link}>{item.name}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          </VStack>

          <VStack align="flex-start">
            <Heading
              as="h3"
              fontSize="18px"
              mb={4}
              fontFamily="heading"
              fontWeight="semibold"
              color="#0E1735"
            >
              Legal
            </Heading>
            <UnorderedList
              styleType="none"
              p={0}
              m={0}
              color="#5E6782"
              fontSize="14px"
              fontWeight="400"
              fontFamily="body"
              spacing={2}
            >
              {legal.map((item) => (
                <ListItem key={item.name}>
                  <Link href={item.link}>{item.name}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          </VStack>

          <VStack align="flex-start">
            <Heading
              as="h3"
              fontSize="18px"
              mb={4}
              fontFamily="heading"
              fontWeight="semibold"
              color="#0E1735"
            >
              Contact
            </Heading>
            <UnorderedList
              styleType="none"
              p={0}
              m={0}
              color="#5E6782"
              fontSize="14px"
              fontWeight="400"
              fontFamily="body"
              spacing={2}
            >
              <ListItem>87 Murtala Mohammed Way, Ikeja, lagos state</ListItem>
              <ListItem>(+234) 810-0000 111</ListItem>
              <ListItem>info@rightcred.com</ListItem>
            </UnorderedList>
          </VStack>
        </SimpleGrid>
      </Container>
    </VStack>
  );
};

export default Footer;
