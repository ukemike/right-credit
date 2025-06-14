'use client';

import {
  Container,
  VStack,
  Text,
  HStack,
  Image,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Button from '../ui/Button';

const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionContainer = motion(Container);

const Advance = () => {
  const data = [
    {
      title: 'Risk / Underwriting',
      description:
        'Assessing and managing potential risks to ensure secure, informed decisions for sustainable growth.',
      image: '/images/advance-1.png',
      bg: '#F6F9F8',
    },
    {
      title: 'Onboard & Manage Customers',
      description:
        'Seamlessly onboard customers, enabling them to create and manage their profiles for a personalized experience.',
      image: '/images/advance-2.png',
      bg: '#001027',
    },
    {
      title: 'Create Loan Products',
      description:
        'Create flexible loan solutions tailored to meet your Customers financial needs with ease and transparency.',
      image: '/images/advance-3.png',
      bg: '#F6F9F8',
    },
  ];

  return (
    <MotionVStack
      py={10}
      id="solutions"
      mb={10}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <MotionContainer
        maxW={{
          base: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
        }}
        bg="#F6F9F8"
        borderRadius="30px"
        border="1px solid #E7EAE9"
        py={10}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          type: 'spring',
          stiffness: 50,
        }}
      >
        <VStack spacing={2}>
          <MotionHStack
            bg="#C5C5C52E"
            rounded="full"
            px={4}
            py={2}
            alignItems="center"
            gap={2}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image src="/images/fire.svg" alt="focus" />
            <Text fontSize="13px" fontWeight="400" color="#505050">
              Focus on Comprehensive Risk Assessment
            </Text>
          </MotionHStack>
          <MotionText
            fontSize={['2xl', '3xl']}
            fontWeight="700"
            color="#090A0D"
            lineHeight="1.2"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Extend Your Underwriting Capabilities
          </MotionText>
          <MotionText
            fontSize="16px"
            fontWeight="400"
            color="#2D2D2D"
            textAlign="center"
            display={{ base: 'none', md: 'block' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Want to go further? This system&apos;s core intelligence can be
            expanded to create a full-scale, bespoke underwriting model.
            <br />
            Contact us to discuss how we can tailor a complete solution to your
            specific needs and risk parameters.
          </MotionText>
          <MotionText
            fontSize="16px"
            fontWeight="400"
            color="#2D2D2D"
            textAlign="center"
            display={{ base: 'block', md: 'none' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Want to go further? This system&apos;s core intelligence can be
            expanded to create a full-scale, bespoke underwriting model. Contact
            us to discuss how we can tailor a complete solution to your specific
            needs and risk parameters.
          </MotionText>
          <MotionBox
            my={6}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button text="Contacts Us" />
          </MotionBox>

          <MotionSimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={4}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {data.map((item, index) => (
              <MotionBox
                key={index}
                bg={item.bg}
                borderRadius="20px"
                border="1px solid #E5E7EB"
                p={4}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.2,
                  type: 'spring',
                  stiffness: 70,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 },
                }}
              >
                <VStack alignItems="flex-start" spacing={1}>
                  <MotionText
                    fontSize="16px"
                    fontWeight="700"
                    color={item.bg === '#F6F9F8' ? '#090A0D' : '#FFFFFF'}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.2 }}
                  >
                    {item.title}
                  </MotionText>
                  <MotionText
                    fontSize="13px"
                    fontWeight="400"
                    color={item.bg === '#F6F9F8' ? '#5E6782' : '#E5E7EB'}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                  >
                    {item.description}
                  </MotionText>
                </VStack>

                <Box w="100%" h="100%">
                  <MotionImage
                    src={item.image}
                    alt="risk"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.9 + index * 0.2,
                    }}
                  />
                </Box>
              </MotionBox>
            ))}
          </MotionSimpleGrid>
        </VStack>
      </MotionContainer>
    </MotionVStack>
  );
};

export default Advance;
