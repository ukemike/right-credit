import { Box, Text, Center } from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';

// Define the chart configuration type
export interface ChartConfig {
  data: {
    datasets: Array<{
      data: number[];
      backgroundColor: string[];
      borderWidth: number;
      circumference: number;
      rotation: number;
      cutout: string;
      borderRadius: number;
    }>;
  };
  options: {
    responsive: boolean;
    maintainAspectRatio: boolean;
    plugins: {
      legend: {
        display: boolean;
      };
      tooltip: {
        enabled: boolean;
      };
    };
  };
  plugins?: any[];
}

// Risk gauge component
interface RiskGaugeProps {
  title: string;
  config: ChartConfig;
  score: number;
  label: string;
}

const RiskGauge = ({ title, config, score, label }: RiskGaugeProps) => (
  <Box bg="white" borderRadius="md" boxShadow="sm" p={4} height="100%">
    <Text
      fontSize="sm"
      fontWeight="600"
      color="headText.100"
      mb={-5}
      textAlign="center"
    >
      {title}
    </Text>
    <Box
      position="relative"
      h="150px"
      w="100%"
      display="flex"
      justifyContent="center"
    >
      <Box position="relative" width="100%" maxWidth="150px">
        <Doughnut {...config} />
        <Center
          position="absolute"
          top="50%"
          left="0"
          right="0"
          transform="translateY(-50%)"
          flexDirection="column"
          alignItems="center"
          mt={4}
        >
          <Text
            fontSize="lg"
            fontWeight="700"
            color="#404040"
            textAlign="center"
          >
            {score}
          </Text>
          <Text
            fontSize="sm"
            color="#404040"
            fontWeight="500"
            textAlign="center"
          >
            {label}
          </Text>
        </Center>
      </Box>
    </Box>
  </Box>
);

export default RiskGauge;
