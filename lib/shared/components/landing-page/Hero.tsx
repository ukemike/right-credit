'use client';

import { Container, VStack, Text, HStack, Image, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import Button from '../ui/Button';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionText = motion(Text);

const Hero = () => {
  const router = useRouter();
  return (
    <MotionVStack
      bgGradient="linear(to-b, #E5F3FF, #E5F3FF00)"
      py={10}
      mb={10}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Container
        maxW={{
          base: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
        }}
      >
        <VStack spacing={2}>
          <MotionHStack
            bg="#FFFFFF66"
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
            fontSize={['3xl', '4xl', '5xl']}
            fontWeight="700"
            color="#000000"
            lineHeight="1.2"
            textAlign="center"
            display={{ base: 'none', md: 'block' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The Future of Underwriting <br /> is Here. Try it Free!
          </MotionText>
          <MotionText
            fontSize={['3xl', '4xl', '5xl']}
            fontWeight="700"
            color="#000000"
            lineHeight="1.2"
            textAlign="center"
            display={{ base: 'block', md: 'none' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The Future of Underwriting is Here. Try it Free!
          </MotionText>
          <MotionText
            fontSize="16px"
            fontWeight="400"
            color="#374151"
            textAlign="center"
            display={{ base: 'none', md: 'block' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Go beyond basic credit scores. Our system provides a 360-degree view
            of your borrower, evaluating their <br /> financial stability,
            credit behavior, and the impact of external factors.
          </MotionText>
          <MotionText
            fontSize="16px"
            fontWeight="400"
            color="#374151"
            textAlign="center"
            display={{ base: 'block', md: 'none' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Go beyond basic credit scores. Our system provides a 360-degree view
            of your borrower, evaluating their financial stability, credit
            behavior, and the impact of external factors.
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
            <Button
              text="Get Started for Free"
              onClick={() => router.push('/auth/signup')}
            />
          </MotionBox>
          <MotionBox
            width="100%"
            mt={[-10, -32]}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <Image
              src="/images/laptop.png"
              alt="hero"
              width="100%"
              height="100%"
            />
          </MotionBox>
        </VStack>
      </Container>
    </MotionVStack>
  );
};

export default Hero;
