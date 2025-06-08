'use client';

import {
  Flex,
  Stack,
  Text,
  HStack,
  Image,
  VStack,
  Badge,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '../ui/Button';
import Modal from '../ui/Modal';

const Verify = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const menu = [
    {
      label: 'The Profile Creation Form',
      value: 'Aprx 2mins',
      icon: '/images/doc.svg',
    },
    {
      label: 'Data Protection Officer Information',
      value: 'Aprx 1mins',
      icon: '/images/doc.svg',
    },
    {
      label: 'Document Upload',
      value: 'Aprx 1mins',
      icon: '/images/pdf.svg',
    },
  ];

  return (
    <Flex
      minH="100vh"
      justify="center"
      bg="white"
      h="100vh"
      p={6}
      w="100%"
      bgImage={`url('/images/auth-bg.svg')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Stack spacing={8} w="100%" mt={10}>
        <Stack maxW="lg" mx="auto" w="100%">
          <Stack align="center" spacing={0}>
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="700"
              color="#090A0D"
              textAlign="center"
            >
              Verify your email to finish account creation
            </Text>

            <HStack
              borderTopWidth={1}
              borderBottomWidth={1}
              borderColor="border.100"
              p={4}
              mt="6"
            >
              <Image src="/images/gmail.svg" alt="gmail" />
              <Image src="/images/yahoo.svg" alt="yahoo" />
              <Image src="/images/outlook.svg" alt="outlook" />
            </HStack>

            <Text
              fontSize="13px"
              fontWeight="500"
              color="bodyText.100"
              textAlign="center"
              mt={4}
              mb={10}
            >
              Can&apos;t see the e-mail? Please check the spam folder. <br />{' '}
              Wrong e-mail?{' '}
              <Link href="/auth/signup">
                <Text
                  as="span"
                  color="brand.100"
                  fontWeight="400"
                  fontSize="14px"
                >
                  Please re-enter your address
                </Text>
              </Link>
            </Text>

            <Link href="/auth/login">
              <Text
                as="span"
                color="brand.100"
                fontWeight="400"
                fontSize="14px"
                textAlign="center"
              >
                Continue without verifying
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Stack>

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        showCloseButton={false}
        size="md"
        title=""
        fontSize={14}
        fontWeight={800}
        color="brand.600"
        p={0}
        body={
          <Stack spacing={4}>
            <Image src="/images/success.svg" alt="success" />

            <Stack p={4}>
              <VStack spacing={0}>
                <Text
                  color="bodyText.100"
                  fontSize="lg"
                  textAlign="center"
                  fontWeight={600}
                >
                  Your email has been verified
                </Text>

                <Text
                  color="bodyText.200"
                  fontSize="14px"
                  textAlign="center"
                  fontWeight={400}
                >
                  We&apos;re thrilled to have you join us! Complete your profile
                  setup to get started and make the most of your experience.
                </Text>
              </VStack>

              <Stack position="relative" spacing={0} display="none">
                <HStack
                  w="100%"
                  justify="space-between"
                  align="center"
                  bg="background.100"
                  p={4}
                  borderRadius="10"
                  borderBottomRadius={isOpenMenu ? '0' : '10'}
                  cursor="pointer"
                  onClick={handleOpenMenu}
                >
                  <Text color="bodyText.100" fontSize="14px" fontWeight={500}>
                    Approximate setup time:
                  </Text>
                  <HStack>
                    <Badge
                      bg="brand.200"
                      color="headText.100"
                      fontSize="14px"
                      fontWeight={400}
                      textTransform="lowercase"
                      rounded="full"
                      size="sm"
                      px={2}
                      py={1}
                    >
                      04 min
                    </Badge>
                    <motion.div
                      animate={{ rotate: isOpenMenu ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src="/images/arrow-down.svg" alt="arrow-down" />
                    </motion.div>
                  </HStack>
                </HStack>

                <AnimatePresence>
                  {isOpenMenu && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <VStack
                        bg="white"
                        borderBottomRadius="10"
                        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
                        spacing={0}
                        overflow="hidden"
                      >
                        {menu.map((item, index: number) => (
                          <HStack
                            key={index}
                            w="100%"
                            p={4}
                            borderBottomWidth={
                              index !== menu.length - 1 ? 1 : 0
                            }
                            borderColor="border.100"
                            _hover={{ bg: '#FAFAFA' }}
                            cursor="pointer"
                          >
                            <HStack spacing={3}>
                              <Image
                                src={item.icon}
                                alt={item.label}
                                w="32px"
                                h="40px"
                              />
                              <Stack spacing={0}>
                                <Text
                                  color="bodyText.300"
                                  fontSize="14px"
                                  fontWeight={500}
                                >
                                  {item.label}
                                </Text>
                                <Text color="bodyText.400" fontSize="14px">
                                  {item.value}
                                </Text>
                              </Stack>
                            </HStack>
                          </HStack>
                        ))}
                      </VStack>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Stack>

              <Stack mt={4}>
                <Button
                  text="Continue"
                  // onClick={() => router.push('/setup')}
                  onClick={() => router.push('/auth/login')}
                  width="full"
                />
              </Stack>
            </Stack>
          </Stack>
        }
      ></Modal>
    </Flex>
  );
};

export default Verify;
