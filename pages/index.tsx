import React from 'react'
import {
    Box, Center, Image, Container, Stack, Flex, Heading, Text, Input, InputRightAddon, InputGroup, IconButton, layout, Select
} from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../layout/Footer'
import Jumbotron from '../components/home/jumbotron'

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
            <Flex justifyContent={'space-between'}>
                <Heading color="white" padding="35px 35px 0px 35px">
                    Rumah <span style={{color:"#FEE56C"}} color="#FEE56C">Belajar</span>
                </Heading>
                
                <Flex flexDirection='column' padding="35px 35px 0px 35px" gap={2} justifyContent="flex-end">
                    
                    <Text 
                        color={'white'} 
                        fontFamily='livvic' 
                        fontSize={21}>
                            <b>Kamu kelas berapa?</b>
                    </Text>

                    <Stack>
                        <Select 
                            placeholder='Pilih Kelas' 
                            variant='filled' 
                            bg='#FEE56C' 
                            color="#500D7D" 
                            fontFamily={"inter"} 
                            rounded={20} 
                            maxWidth={'150px'}
                        >
                            <option value='VII'>Kelas VII</option>
                            <option value='VIII'>Kelas VIII</option>
                            <option value='IX'>Kelas IX</option>
                            <option value='X'>Kelas X</option>
                            <option value='XI'>Kelas XI</option>
                            <option value='XII'>Kelas XII</option>

                        </Select>
                    </Stack>
                     
                    
                </Flex>
                
            </Flex>
            <div>
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
                        rounded={20}
                        gap = '10px'
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
                        rounded={20}
                        gap = '10px'
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
                        rounded={20}
                        gap = '10px'
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
                        rounded={20}
                        gap = '10px'
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
                        rounded={20}
                        gap = '10px'
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