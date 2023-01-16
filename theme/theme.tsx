import { extendTheme } from '@chakra-ui/react'
import Link from './components/link'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Livvic', sans-serif`,
    
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'none',
      },
    },
  },
  components: {
    Link
  }
})

export default theme;