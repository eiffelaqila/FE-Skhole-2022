import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { type AppProps } from 'next/app';

import theme from '../theme/theme'
import Fonts from '../theme/fonts'

import Navbar from '../layout/navbar'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      { router.pathname !== '/coming-soon' ? <Navbar /> : '' }
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp