'use client';

import { HStack, Text, IconButton, Image, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface CustomerHeaderProps {
  title: string;
}

const CustomerHeader = ({ title }: CustomerHeaderProps) => {
  const router = useRouter();

  return (
    <Box width="100%" overflowX="hidden">
      <HStack
        alignItems="center"
        spacing={2}
        borderBottom="1px solid #E5E7EB"
        pb={4}
        width="100%"
        flexWrap="wrap"
      >
        <IconButton
          aria-label="Back"
          icon={<Image src="/images/back.svg" alt="arrow-left" />}
          onClick={() => router.back()}
          size="sm"
          variant="ghost"
          _hover={{ bg: 'transparent' }}
          m={0}
          p={0}
        />
        <Text fontSize="md" fontWeight="700" color="bodyText.100" isTruncated>
          {title}
        </Text>
      </HStack>
    </Box>
  );
};

export default CustomerHeader;
