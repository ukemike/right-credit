import { Box, Text, HStack, VStack, SimpleGrid } from '@chakra-ui/react';

const DemographicLocationAssessment = () => {
  return (
    <VStack alignItems="center" justifyContent="center" h="100%" mt={8}>
      <Box
        bg="white"
        borderRadius="4px"
        boxShadow="sm"
        w={['100%', '75%']}
        p={4}
      >
        <VStack alignItems="flex-start" w="100%" spacing={4}>
          <HStack
            justifyContent="space-between"
            w="100%"
            alignItems={['flex-start', 'center']}
            flexDirection={['column', 'row']}
          >
            <Text
              fontSize="14px"
              fontWeight="600"
              color="headText.100"
              textTransform="uppercase"
            >
              Demographic and Location Assessment
            </Text>
          </HStack>

          <Box border="1px solid #E5E7EB" borderRadius="8px" p={4} w="100%">
            <Text fontSize="16px" fontWeight="600" color="headText.100">
              Demographic Factors
            </Text>
            <SimpleGrid columns={[1, 2, 4]} w="100%" spacing={4} mt={2}>
              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  State of Residence:
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  Adamawa State
                </Text>
              </VStack>

              <VStack
                alignItems="flex-start"
                bg="#FCFDFD"
                border="1px solid #F7F8FA"
                borderRadius="5px"
                p={2}
              >
                <Text fontSize="sm" fontWeight="400" color="bodyText.100">
                  Location score
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color="headText.100"
                  mt={1}
                >
                  50
                </Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default DemographicLocationAssessment;
