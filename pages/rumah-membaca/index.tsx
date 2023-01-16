import React from 'react'
import Head from 'next/head'
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react'
import RumbacaBox from '../../components/Rumbaca'
import RumbacaCard from '../../components/RumbacaCard'
import Footer from '../../layout/Footer'

export default function RumahMembaca() {
    
    return (
        <>
            <Head>
                <title>Rumah Membaca - Skhole 2022</title>
            </Head>
            <Center
                w='100vw'
                maxW='100%'
                h='40vh'
                css={`
                    background: url(static/images/noise.png), #471CA8;
                    background-repeat: repeat;
                `}
            >
                <VStack>
                    <Heading fontSize={{base: '36px', sm:'52px', md: '64px', lg: '80px'}} color='white'>
                        Rumah Belajar
                    </Heading>
                    <Text fontSize={{base: 'lg', sm:'xl', md: '2xl', lg: '3xl'}} color='#FEE56C' fontWeight='bold'>
                        “Ilmu adalah kehidupan bagi pikiran”
                    </Text>
                </VStack>
            </Center>
            <Box 
                position="relative" 
                minHeight="100vh" 
                bgColor="#373360" 
                transform="auto"
                css={`
                    background: url(static/images/noise.png), #200655;
                    background-repeat: repeat;
                `}
            >
                <RumbacaBox id_judul="1" nama_judul="kontol"/>
            </Box>
            
            <Footer/>

        </>
    )
}