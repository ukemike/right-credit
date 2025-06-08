import { Box, Text, VStack, Image, HStack, Input } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';

interface UploadCardProps {
  label: string;
  value: File | null;
  onChange: (file: File) => void;
  error?: string;
}

const UploadCard = ({ label, value, onChange, error }: UploadCardProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <VStack w="full" spacing="1" align="flex-start" h="full">
      <Text fontSize="sm" fontWeight="700" color="bodyText.100">
        {label}
      </Text>

      <Box
        w="full"
        bg="#FBFDFF"
        borderRadius="12px"
        border="1px dashed"
        borderColor={error ? 'red.500' : '#E5E7EB'}
        cursor="pointer"
        p="4"
        position="relative"
        _hover={{
          bg: '#F9FAFB',
        }}
        h="full"
      >
        <Input
          type="file"
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          opacity="0"
          cursor="pointer"
          onChange={handleFileChange}
        />
        {!value && (
          <VStack>
            <HStack>
              <Image src="/images/upload.svg" alt="upload" />
              <Text fontSize="14px" fontWeight="400" color="#222222">
                Click to upload
              </Text>
            </HStack>

            <HStack>
              <Text
                fontSize="14px"
                fontWeight="500"
                color="#222222"
                bg="#2222221A"
                borderRadius="6px"
                px="3"
                py="1"
              >
                PDF
              </Text>
              <Text
                fontSize="14px"
                fontWeight="500"
                color="#222222"
                border="1px solid #2222221A"
                borderRadius="6px"
                px="3"
                py="1"
              >
                {'<'}10 MB
              </Text>
            </HStack>
          </VStack>
        )}

        {value && (
          <VStack align="center" justify="center" h="full">
            <Image src="/images/verified.svg" alt="upload" />
            <Text fontSize="14px" fontWeight="500" color="#3276E8">
              Upload complete
            </Text>
          </VStack>
        )}
      </Box>
      {error && (
        <Text fontSize="sm" color="red.500" mt={1}>
          {error}
        </Text>
      )}
    </VStack>
  );
};

export default UploadCard;
