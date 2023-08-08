import { Layout } from '@/components/Layout'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in',
      once: false,
      mirror: false,
      offset: 100,
      duration: 400,
    });
  }, []);
  return (
  <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  )
}
