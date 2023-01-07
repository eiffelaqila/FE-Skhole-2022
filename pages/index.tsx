import * as React from 'react'
import {
    Box, Image, Stack, Flex, Heading, Text, Select
} from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../layout/Footer'
import Jumbotron from '../components/home/jumbotron'

     
export default function Home(): JSX.Element {

    const[value, setValue] = React.useState('VII');
    const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {

        setValue(event.target.value);
     
      };

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
                css={`
                    background: url(static/images/noise-1280-832.svg), #200655;
                    background-size: cover
                `}
                >

                <Jumbotron/>

            {/* Text */}
            <Flex 
                justifyContent={'space-between'} 
                padding="50px 0px 0px 0px"
            >
                <Heading 
                    color="white" 
                    padding="35px 35px 0px 80px" 
                    fontSize={54}
                >
                    Rumah <span style={{color:"#FEE56C"}} color="#FEE56C">Belajar</span>
                </Heading>
                
                <Flex 
                    flexDirection='column' 
                    padding="35px 35px 0px 35px" 
                    gap={2} 
                    justifyContent="flex-end" 
                    alignContent='flex-end'
                >
                    
                    <Text 
                        color={'white'} 
                        fontFamily='livvic' 
                        fontSize={21}
                        padding="0px 65px 0px 0px"
                        textAlign={'right'}
                    >
                            <b>Kamu kelas berapa?</b>
                    </Text>

                    <Stack alignItems='flex-end' padding="0px 65px 0px 0px">
                        
                        
                        <Select 
                            placeholder='' 
                            variant='filled' 
                            bg='#FEE56C' 
                            color="#500D7D" 
                            fontFamily={"inter"} 
                            rounded={20} 
                            maxWidth={'150px'}
                            value={value}
                            onChange={handleChange}
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
            <Box padding={20} minHeight='600px'>
                <Flex flexWrap={'wrap'} gap= "40px">

                    {/*draft design frame 3006 (href sementara tp pagesnya blm ada)*/}
                    <Image 
                    src="static/images/neptune.svg" 
                    position="absolute" 
                    maxWidth="353px"
                    top="60%" 
                    right="10%"
                    zIndex={-1} 
                    />

                    <a href={`/rumah-belajar/Matematika/${value}`}>
                        <Flex 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='250px' 
                        width='200px'
                        padding={3}
                        bg="white"
                        rounded={10}
                        gap = '27px'
                        >
                            <div>
                                <Flex alignItems={'center'} justifyContent={'center'} paddingTop={2}>
                                    <Image src='static/images/Matematika.svg'/>
                                </Flex>
                                
                            </div>
                            <Flex flexDirection='column' gap={2} alignItems={'flex-start'} paddingLeft={5}>
                                <Flex>
                                    <Image src='static/images/Line.svg'/>
                                </Flex>
                                <Text color={'#500D7D'}>
                                    <p><b> Matematika </b> <br/> <span style={{color:"#000000"}}>Kelas {value}</span> </p>
                                </Text>
                            </Flex>
                        </Flex>
                    </a>
                    <a href={`/rumah-belajar/Biologi/${value}`}>
                        <Flex 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='250px' 
                        width='200px'
                        padding={3}
                        bg="white"
                        rounded={10}
                        gap = '27px'
                        >
                            <div>
                                <Flex alignItems={'center'} justifyContent={'center'} paddingTop={2}>
                                    <Image src='static/images/Biologi.svg'/>
                                </Flex>
                                
                            </div>
                            <Flex flexDirection='column' gap={2} alignItems={'flex-start'} paddingLeft={5}>
                                <Flex>
                                    <Image src='static/images/Line.svg'/>
                                </Flex>
                                <Text color={'#500D7D'}>
                                    <p><b> Biologi </b> <br/> <span style={{color:"#000000"}}>Kelas {value}</span> </p>
                                </Text>
                            </Flex>
                        </Flex>
                    </a>
                    <a href={`/rumah-belajar/Kimia/${value}`}>
                        <Flex 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='250px' 
                        width='200px'
                        padding={3}
                        bg="white"
                        rounded={10}
                        gap = '27px'
                        >
                            <div>
                                <Flex alignItems={'center'} justifyContent={'center'} paddingTop={2}>
                                    <Image src='static/images/Kimia.svg'/>
                                </Flex>
                                
                            </div>
                            <Flex flexDirection='column' gap={2} alignItems={'flex-start'} paddingLeft={5}>
                                <Flex>
                                    <Image src='static/images/Line.svg'/>
                                </Flex>
                                <Text color={'#500D7D'}>
                                    <p><b> Kimia </b> <br/> <span style={{color:"#000000"}}>Kelas {value}</span> </p>
                                </Text>
                            </Flex>
                        </Flex>
                    </a>
                    <a href={`/rumah-belajar/Fisika/${value}`}>
                        <Flex 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='250px' 
                        width='200px'
                        padding={3}
                        bg="white"
                        rounded={10}
                        gap = '27px'
                        >
                            <div>
                                <Flex alignItems={'center'} justifyContent={'center'} paddingTop={2}>
                                    <Image src='static/images/Fisika.svg'/>
                                </Flex>
                                
                            </div>
                            <Flex flexDirection='column' gap={2} alignItems={'flex-start'} paddingLeft={5}>
                                <Flex>
                                    <Image src='static/images/Line.svg'/>
                                </Flex>
                                <Text color={'#500D7D'}>
                                    <p><b> Fisika </b> <br/> <span style={{color:"#000000"}}>Kelas {value}</span> </p>
                                </Text>
                            </Flex>
                        </Flex>
                    </a>
                    <a href={`/rumah-belajar/BahasaIndonesia/${value}`}>
                        <Flex 
                        justifyContent={'center'} 
                        flexDirection='column' 
                        height='250px' 
                        width='200px'
                        padding={3}
                        bg="white"
                        rounded={10}
                        gap = '27px'
                        >
                            <div>
                                <Flex alignItems={'center'} justifyContent={'center'} paddingTop={2}>
                                    <Image src='static/images/BahasaIndonesia.svg'/>
                                </Flex>
                                
                            </div>
                            <Flex flexDirection='column' gap={2} alignItems={'flex-start'} paddingLeft={5}>
                                <Flex>
                                    <Image src='static/images/Line.svg'/>
                                </Flex>
                                <Text color={'#500D7D'}>
                                    <p><b> Bahasa Indonesia </b> <br/> <span style={{color:"#000000"}}>Kelas {value}</span> </p>
                                </Text>
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