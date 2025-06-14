'use client';

import {
  Container,
  VStack,
  Text,
  HStack,
  Image,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionListItem = motion(ListItem);

const Benefits = () => {
  const benefits = [
    {
      title:
        'Make informed decisions based on a complete risk profile, informed by sophisticated analytical techniques.',
    },
    {
      title:
        'Leverage the power of data for better outcomes through smart scoring algorithms.',
    },
    {
      title:
        'Adapt the system to your specific lending criteria with flexible configuration options.',
    },
    {
      title: 'Get key insights quickly to accelerate your process.',
    },
  ];

  return (
    <MotionVStack
      bg="white"
      py={5}
      id="benefits"
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
        <MotionHStack
          spacing={10}
          alignItems="flex-start"
          flexDirection={['column-reverse', 'row']}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <MotionHStack
            w={['100%', '50%']}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: 'spring',
              stiffness: 60,
            }}
          >
            <MotionImage
              src="/images/benefit.png"
              alt="benefits"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              whileHover={{ scale: 1.03 }}
            />
          </MotionHStack>

          <MotionVStack
            w={['100%', '50%']}
            alignItems="flex-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <MotionHStack
              bg="#C5C5C52E"
              rounded="full"
              px={4}
              py={2}
              alignItems="center"
              gap={2}
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image src="/images/fire.svg" alt="focus" />
              <Text fontSize="13px" fontWeight="400" color="#505050">
                Empowering You with Every Advantage.
              </Text>
            </MotionHStack>
            <MotionText
              fontSize={['2xl', '3xl']}
              fontWeight="700"
              color="#090A0D"
              textAlign="center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Benefits:
            </MotionText>

            <VStack alignItems="flex-start">
              <List>
                <UnorderedList
                  color="#5E6782"
                  fontSize="md"
                  fontWeight="400"
                  ml={4}
                  spacing={3}
                >
                  {benefits.map((benefit, index) => (
                    <MotionListItem
                      key={benefit.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + index * 0.15,
                      }}
                    >
                      {benefit.title}
                    </MotionListItem>
                  ))}
                </UnorderedList>
              </List>
            </VStack>
          </MotionVStack>
        </MotionHStack>
      </Container>
    </MotionVStack>
  );
};

export default Benefits;
