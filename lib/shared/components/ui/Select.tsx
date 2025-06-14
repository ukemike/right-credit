import {
  Select as ChakraSelect,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { MdArrowDropDown } from 'react-icons/md';

import type { SelectProps } from '@shared/interfaces/ui.interface';

const Select = ({
  name,
  label,
  placeholder,
  options,
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
  ...rest
}: SelectProps) => {
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel color="#374151" fontWeight={500} fontSize={14} mb={1}>
            {label}
          </FormLabel>

          <ChakraSelect
            {...field}
            placeholder={placeholder}
            icon={<MdArrowDropDown />}
            bg={bg}
            borderRadius={borderRadius}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            isInvalid={form.errors[name] && form.touched[name]}
            errorBorderColor="red.500"
            focusBorderColor="brand.100"
            borderColor={borderColor}
            px={px}
            py={py}
            size={size}
            borderWidth={borderWidth}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </ChakraSelect>

          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default Select;
