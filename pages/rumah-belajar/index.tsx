import React from 'react'
import Head from 'next/head'
import Header from '../../layout/header'
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react'

export default function RumahBelajar() {
    return (
        <>
            <Head>
                <title>Rumah Belajar - Skhole 2022</title>
            </Head>
            
            <div>
                <Center
                    w='100vw'
                    maxW='100%'
                    h='40vh'
                    css={`
                        background: url(static/images/noise-1280-832.svg), #471CA8;
                        background-size: cover;
                    `}
                >
                    <VStack>
                        <Heading fontSize='128px' color='white'>
                            Rumah Belajar
                        </Heading>
                        <Text fontSize='3xl' color='#FEE56C' fontWeight='bold'>
                            “Ilmu adalah kehidupan bagi pikiran”
                        </Text>
                    </VStack>
                </Center>
            </div>

            <Box
                minH='60vh'
                w='100vw'
                maxW='100%'
                css={`
                        background: url(static/images/noise-1280-832.svg), linear-gradient(90deg, #200655, #050038);
                        background-size: cover
                    `}
            >

            </Box>
        </>
    )
}