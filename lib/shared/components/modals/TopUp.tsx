import {
  Text,
  VStack,
  Image,
  useClipboard,
  IconButton,
  HStack,
  useToast,
} from '@chakra-ui/react';

const TopUp = () => {
  const accountNumber = '5400966277';
  const toast = useToast();
  const { onCopy } = useClipboard(accountNumber);

  const handleCopy = () => {
    onCopy();
    toast({
      title: 'Copied to clipboard',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
      variant: 'subtle',
    });
  };
  return (
    <VStack spacing={4} align="stretch" w="100%" py={4}>
      <VStack align="stretch" w="100%" spacing={2}>
        <Text
          fontSize="lg"
          fontWeight="600"
          color="bodyText.100"
          textAlign="center"
        >
          Top up wallet
        </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          color="bodyText.200"
          textAlign="center"
        >
          Top up your wallet now to continue enjoying our seamless solution
          effortlessly.
        </Text>

        <VStack align="stretch" bg="#F1F5F8" borderRadius="md" p={4}>
          <Text fontSize="md" fontWeight="400" color="bodyText.600">
            Account details
          </Text>

          <VStack align="stretch" spacing={0}>
            <Text fontSize="14px" fontWeight="600" color="#121A26">
              Account name: RightCred Inc.
            </Text>

            <Text fontSize="14px" fontWeight="600" color="#121A26">
              Bank: Providus
            </Text>

            <HStack alignItems="center">
              <Text fontSize="14px" fontWeight="600" color="#121A26">
                Account number: {accountNumber}
              </Text>
              <IconButton
                aria-label="Copy account number"
                icon={<Image src="/images/copy.svg" alt="copy" />}
                onClick={handleCopy}
                variant="ghost"
                size="sm"
              />
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default TopUp;
