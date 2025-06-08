import type { DeepPartial, Theme } from '@chakra-ui/react';
import localFont from 'next/font/local';

const InstrumentSans = localFont({
  src: [
    {
      path: '../../../../public/font/instrument-sans/InstrumentSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/font/instrument-sans/InstrumentSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../public/font/instrument-sans/InstrumentSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../../../public/font/instrument-sans/InstrumentSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../../public/font/instrument-sans/InstrumentSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../../../public/font/instrument-sans/InstrumentSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../../public/font/instrument-sans/InstrumentSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
});

export const fonts: DeepPartial<Theme['fonts']> = {
  heading: InstrumentSans.style.fontFamily,
  body: InstrumentSans.style.fontFamily,
};
