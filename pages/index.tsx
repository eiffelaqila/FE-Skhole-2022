import React from 'react'
import {
    Box, Center, Image, Container, Stack, Flex, Heading, Text, Input, InputRightAddon, InputGroup, IconButton, layout
} from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../layout/Footer'
import Jumbotron from '../components/home/jumbotron'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Box 
                position="relative" 
                minHeight="100vh" 
                bgColor="#373360" 
                transform="auto"
                >

                <Jumbotron />

            {/* Text */}
            <Heading color="white" padding="35px">
                    Rumah Belajar
            </Heading>

            </Box>
            <Footer/>            
        </>
    )
}