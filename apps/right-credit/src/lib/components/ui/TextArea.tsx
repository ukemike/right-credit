/* eslint-disable no-nested-ternary */
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Textarea as ChakraTextarea,
  InputGroup,
} from '@chakra-ui/react';
import { Field } from 'formik';

interface TextAreaProps {
  name?: string;
  placeholder?: string;
  label?: string;
  bg?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  px?: number;
  py?: number;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  minHeight?: string;
  maxHeight?: string;
}

const TextArea = ({
  name = 'textarea',
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
  rows = 4,
  resize = 'vertical',
  minHeight,
  maxHeight,
}: TextAreaProps) => {
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel color="#374151" fontWeight={500} fontSize={14} mb={1}>
            {label}
          </FormLabel>
          <InputGroup>
            <ChakraTextarea
              {...field}
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
              rows={rows}
              resize={resize}
              minHeight={minHeight}
              maxHeight={maxHeight}
              isInvalid={form.errors[name] && form.touched[name]}
              errorBorderColor="red.500"
              focusBorderColor="brand.100"
            />
          </InputGroup>

          <FormErrorMessage
            color="red.500"
            fontWeight={400}
            fontSize={12}
            mt={1}
          >
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default TextArea;
