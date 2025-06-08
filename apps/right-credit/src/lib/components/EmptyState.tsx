import { VStack, Text, Image } from '@chakra-ui/react';

import Button from './ui/Button';

type EmptyStateProps = {
  title: string;
  description: string;
  onClick?: () => void;
  btnText?: string;
};

const EmptyState = ({
  title,
  description,
  onClick,
  btnText,
}: EmptyStateProps) => {
  return (
    <VStack alignItems="center" justifyContent="center" h="350px">
      <Image src="/images/empty.svg" alt="Empty State" />
      <VStack alignItems="center" justifyContent="center" spacing={0}>
        <Text
          fontSize="18px"
          fontWeight="700"
          color="bodyText.100"
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          fontSize="16px"
          fontWeight="400"
          color="bodyText.200"
          textAlign="center"
        >
          {description}
        </Text>
      </VStack>

      {btnText && <Button text={btnText} onClick={onClick} />}
    </VStack>
  );
};

export default EmptyState;
