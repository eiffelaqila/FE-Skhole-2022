import React from 'react'
import {Box, Center, Heading, Text, VStack, } from '@chakra-ui/react'

export default function Header () {
    return (
        <div>
            <Center
                w='100vw'
                maxW='100%'
                h='40vh'
                css={`
                    background: url(static/images/noise-1280-832.svg) 50%, #471CA8;
                    background-size: cover
                `}
            >
                <VStack>
                    <Heading size='4xl' color='white'>
                        Rumah Belajar
                    </Heading>
                    <Text size='2xl' color='#FEE56C' fontWeight='bold'>
                        “Ilmu adalah kehidupan bagi pikiran”
                    </Text>
                </VStack>
            </Center>
        </div>
    )
}