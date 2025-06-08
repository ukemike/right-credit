'use client';

import {
  Container,
  VStack,
  Text,
  HStack,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionSimpleGrid = motion(SimpleGrid);

const Features = () => {
  const features = [
    {
      title: 'Intelligent Data Processing',
      description:
        'Our system automatically learns and identifies key risk patterns from vast datasets.',
      image: '/images/feat-1.svg',
    },
    {
      title: 'Comprehensive Analysis',
      description:
        'Evaluates a wide range of financial and behavioral data for a 360° view of creditworthiness.',
      image: '/images/feat-2.svg',
    },
    {
      title: 'Fast Results',
      description:
        'Speeds up credit assessments by automating data processing and delivering decisions in minutes.',
      image: '/images/feat-3.svg',
    },
  ];

  return (
    <MotionVStack
      bg="white"
      py={5}
      id="features"
      mb={10}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
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
              Smarter insights. Decisions in minutes.
            </Text>
          </MotionHStack>
          <MotionText
            fontSize={['2xl', '3xl']}
            fontWeight="700"
            color="#090A0D"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Key Features:
          </MotionText>
        </VStack>

        <MotionSimpleGrid
          columns={[1, 3]}
          spacing={4}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <MotionHStack
              key={feature.title}
              alignItems="flex-start"
              gap={2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.2,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <MotionImage
                src={feature.image}
                alt={feature.title}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.2,
                }}
              />

              <VStack alignItems="flex-start">
                <MotionText
                  fontSize="18px"
                  fontWeight="700"
                  color="#090A0D"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.2,
                  }}
                >
                  {feature.title}
                </MotionText>
                <MotionText
                  fontSize="15px"
                  fontWeight="400"
                  color="#5E6782"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + index * 0.2,
                  }}
                >
                  {feature.description}
                </MotionText>
              </VStack>
            </MotionHStack>
          ))}
        </MotionSimpleGrid>
      </Container>
    </MotionVStack>
  );
};

export default Features;
