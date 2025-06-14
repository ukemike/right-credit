/* eslint-disable no-nested-ternary */
import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Image,
} from '@chakra-ui/react';

import type { InputProps } from '@shared/interfaces/ui.interface';

const Input2 = ({
  type,
  placeholder,
  label,
  bg = 'white',
  borderRadius = 4,
  borderWidth = 1,
  borderColor = 'border.100',
  fontSize = 14,
  fontWeight = 400,
  color = 'black',
  px,
  py,
  size = 'lg',
  leftIcon,
  rightIcon,
}: InputProps) => {
  return (
    <FormControl>
      <FormLabel color="black" fontWeight={400} fontSize={16} mb={1}>
        {label}
      </FormLabel>
      <InputGroup>
        {leftIcon && (
          <InputLeftElement pointerEvents="none" position="absolute" top="5px">
            <Image src={leftIcon} alt={label} boxSize="22px" />
          </InputLeftElement>
        )}
        <ChakraInput
          size={size}
          placeholder={placeholder}
          bg={bg}
          borderRadius={borderRadius}
          borderWidth={borderWidth}
          borderColor={borderColor}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          px={px}
          py={py}
          errorBorderColor="red.500"
          focusBorderColor="brand.200"
          type={type}
        />

        {rightIcon && (
          <InputRightElement pointerEvents="none" position="absolute" top="5px">
            <Image src={rightIcon} alt={label} boxSize="22px" />
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default Input2;
