'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { GlobalStyle } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { Chakra as ChakraProvider } from '@shared/components/Chakra';
import { store } from '@shared/redux/store';
import '@shared/styles/globals.css';
import 'focus-visible/dist/focus-visible';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <CacheProvider>
        <GlobalStyle />
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </Provider>
  );
};

export default Providers;
