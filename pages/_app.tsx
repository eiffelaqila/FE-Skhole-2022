import { ChakraProvider } from '@chakra-ui/react'
import { type AppProps } from 'next/app';

import theme from '../theme/theme'
import Fonts from '../theme/fonts'

import Navbar from '../layout/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp