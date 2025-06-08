import { Box, Text, VStack, Image, HStack, Input } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';

interface UploadCardProps {
  label: string;
  value: File | null;
  onChange: (file: File) => void;
}

const ProfileUpload = ({
  label,
  value,
  onChange,
}: UploadCardProps): JSX.Element => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    return () => {};
  }, [value]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <VStack w="full" spacing="1" align="flex-start" h="full">
      <Text fontSize="14px" fontWeight="500" color="bodyText.100">
        {label}
      </Text>

      <Box
        w="full"
        bg="#ECEFF2"
        borderRadius="8px"
        cursor="pointer"
        p="4"
        h="full"
      >
        <Box
          position="relative"
          borderRadius="8px"
          bg="#FBFDFF"
          border="1px dashed #E5E7EB"
          h="full"
          px="4"
          py="2"
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
            <VStack align="center" justify="center" h="full">
              <Image src="/images/upload.svg" alt="upload" />
              <Text fontSize="14px" fontWeight="400" color="#222222">
                Click to upload
              </Text>

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
                  Jpg
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
              <Image
                src={previewUrl || ''}
                alt="uploaded preview"
                maxH="150px"
                objectFit="contain"
              />
            </VStack>
          )}
        </Box>
      </Box>
    </VStack>
  );
};

export default ProfileUpload;
