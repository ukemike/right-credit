import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '#0052CC',
    200: '#F2994A',
    300: '#1B59F812',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  headText: {
    100: '#090A0D',
    200: '#717680',
    300: '#0E233C',
    400: '#1A2D5B',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  bodyText: {
    100: '#374151',
    200: '#5E6782',
    300: '#181D27',
    400: '#535862',
    500: '#737D9A',
    600: '#30345E',
    700: '',
    800: '',
    900: '',
  },
  background: {
    100: '#F1F5F8',
    200: '#FBFBFB',
    300: '#EFF3FF38',
    400: '#FAFBFF',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  border: {
    100: '#E3E5EB',
    200: '#E5E5E5',
    300: '#E5E7EB',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  grey: {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  customRed: {
    100: '#BC0000',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
  customGreen: {
    100: '#00741A',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
