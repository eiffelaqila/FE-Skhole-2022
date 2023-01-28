import React from 'react'
import { Box, Button, Center, Heading, Image, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link'

export default function ComingSoon() {
    const router = useRouter()
    
    return (
        <>
            <Head>
                <title>Coming Soon - Skhole 2022</title>
            </Head>
            <Center
                minH="100vh"
                minW="100vw"
                bgImage='static/images/cs-background.svg'
                bgSize='cover'
                top={0}
                bottom={0}
                left={0}
                right={0}

                overflow='hidden'
            >
                <Center position='absolute' zIndex='99'>
                    <VStack gap={{base: 2, lg: 5}}>
                        <Heading 
                            color='white' 
                            size={{base: '2xl', lg: '4xl'}} 
                            textShadow='0 0 20px #200655'
                        >
                            COMING SOON!
                        </Heading>

                        <NextLink href={'/'} passHref>
                            <Button bg='#FEE56C' color="#500D7D" rounded={20} fontSize={{base: 'sm', lg: 'xl'}}>
                                Kembali ke Halaman Utama
                            </Button>
                        </NextLink>
                    </VStack>
                </Center>

                <Image
                    height={{base: '50vh', md: '65vh', xl: '80vh'}}
                    minW="100vw"
                    position='absolute'
                    zIndex='15'
                    objectFit='cover'
                    objectPosition='20% top'
                    src='static/images/cs-rocks.svg'
                    bottom={0}
                    left={0}
                />
                <Image 
                    h='100vh'
                    minW="100vw"
                    m='auto'
                    position='absolute'
                    objectFit='cover'
                    objectPosition='50% 40%'
                    zIndex='5'
                    src='static/images/cs-sun.svg'
                />
                <Image 
                    display={{base: 'none', sm: 'block'}}
                    h='auto'
                    minW='50px'
                    m='auto'
                    position='absolute'
                    zIndex='6'
                    src='static/images/cs-planet1.svg'
                    right='5'
                    top='20%'
                />
                <Image 
                    h='auto'
                    minW='50px'
                    m='auto'
                    position='absolute'
                    zIndex='7'
                    src='static/images/cs-planet2.svg'
                    left='5'
                    top='0'
                />
            </Center>
        </>
    )
}