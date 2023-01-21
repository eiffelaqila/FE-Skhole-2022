import React from 'react'
import Head from 'next/head'
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react'
import RumbelBox from '../../components/rumah-belajar/RumbelBox'
import Footer from '../../layout/Footer'
import HeaderLayout from '../../layout/Header'

export default function RumahBelajar() {
    return (
        <>
            <Head>
                <title>Rumah Belajar - Skhole 2022</title>
            </Head>
            
            <HeaderLayout title='Rumah Belajar' subtitle='“Ilmu adalah kehidupan bagi pikiran”' />
            <Box 
                position="relative" 
                minHeight="100vh" 
                bgColor="#373360" 
                transform="auto"
                css={`
                    background: url(/static/images/noise.png), #200655;
                    background-repeat: repeat;
                `}
            >]
                <RumbelBox/>
            </Box>
            
            <Footer/> 
        </>
    )
}