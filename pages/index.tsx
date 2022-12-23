import {
    Box
} from '@chakra-ui/react'
import Head from 'next/head'

import Jumbotron from '../components/home/jumbotron'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Box minHeight="100vh" bgGradient="linear-gradient(180deg, #737090 0%, #F3F3F5 100%)">
                <Jumbotron />
            </Box>
        </>
    )
}