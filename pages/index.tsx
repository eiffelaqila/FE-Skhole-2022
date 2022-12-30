import React from 'react'
import {
    Box, Center, Image, Container, Stack, Flex, Heading, Text, Input, InputRightAddon, InputGroup, IconButton, layout
} from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../layout/Footer'
import Jumbotron from '../components/home/jumbotron'
import React from "react";

export default function Home(): JSX.Element {
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
            <div>
            <Heading color="white" padding="35px 35px 0px 35px">
                    Rumah Belajar
            </Heading>
            
            <Box padding={10}>
                <Flex flexWrap={'wrap'} gap= "30px">
                    {/*draft design frame 3006 (href nanti di-update kalo udah ada)*/}
                    <a href='/rumah-belajar'>
                        <Flex 
                        h={45} 
                        alignItems={'center'} 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='110%' 
                        width='180px'
                        padding={3}
                        bg="white"
                        >
                            <div>
                                <Flex>
                                    <Image src='static/images/Matematika.svg'/>
                                </Flex>
                            </div>
                            <Flex>
                                <Flex>
                                    <p><b> Matematika </b> <br/> Kelas XX </p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </a>
                    <a href='/rumah-belajar'>
                        <Flex 
                        h={45} 
                        alignItems={'center'} 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='110%' 
                        width='180px'
                        padding={5}
                        bg="white"
                        >
                            <div>
                                <Flex>
                                    <Image src='static/images/Biologi.svg'/>
                                </Flex>
                            </div>
                            <Flex>
                                <Flex>
                                    <p><b> Biologi </b> <br/> Kelas XX </p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </a>
                    <a href='/rumah-belajar'>
                        <Flex 
                        h={45} 
                        alignItems={'center'} 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='110%' 
                        width='180px'
                        padding={5}
                        bg="white"
                        >
                            <div>
                                <Flex>
                                    <Image src='static/images/Kimia.svg'/>
                                </Flex>
                            </div>
                            <Flex>
                                <Flex>
                                    <p><b> Kimia </b> <br/> Kelas XX </p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </a>
                    <a href='/rumah-belajar'>
                        <Flex 
                        h={45} 
                        alignItems={'center'} 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='110%' 
                        width='180px'
                        padding={5}
                        bg="white"
                        >
                            <div>
                                <Flex>
                                    <Image src='static/images/Fisika.svg'/>
                                </Flex>
                            </div>
                            <Flex>
                                <Flex>
                                    <p><b> Fisika </b> <br/> Kelas XX </p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </a>
                    <a href='/rumah-belajar'>
                        <Flex 
                        h={45} 
                        alignItems={'center'} 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='110%' 
                        width='180px'
                        padding={5}
                        bg="white"
                        >
                            <div>
                                <Flex>
                                    <Image src='static/images/BahasaIndonesia.svg'/>
                                </Flex>
                            </div>
                            <Flex>
                                <Flex>
                                    <p><b> Bahasa Indonesia </b> <br/> Kelas XX </p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </a>                    
                </Flex>
             
            </Box>
            </div>


            
            </Box>
            <Footer/>            
        </>
    )
}




