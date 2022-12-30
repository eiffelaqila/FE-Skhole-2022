import React from 'react'
import Head from 'next/head'
import Footer from '../../layout/Footer'
import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Container,
    Center,
    Heading,
    Image,
    Stack,
    Text,
    Flex,
    Input,
    InputRightAddon,
    IconButton,
    InputGroup,
    VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    
    const handleSearch = () => {
        // Not Empty
        if (search !== '') {
            router.push({ pathname: '/search', query: { query: search } });
        }
    }
    
    return (
        <>
            <Head>
                <title>Search - Skhole 2022</title>
            </Head>
            <Box
                position='relative' 
                overflow='hidden'
                h = '40vh'
                css={`
                    background: url(static/images/noise-1280-832.svg), #471CA8;
                    background-size: cover
                `}
                >
                    
                   <VStack>
                    <Flex 
                        position="absolute"
                        top="20%"
                        right="50%px" 
                        direction="column" 
                        align="center"
                    >
                        <Heading color="white">
                            Teruslah menjadi orang yang <span style={{color:"#FEE56C"}} color="#FEE56C">mencari ilmu</span> 
                        </Heading>
                        <Heading color="white"> 
                            kapanpun dan di manapun.
                        </Heading>
                        
                    </Flex>
                    <Container 
                        position="absolute"
                        top="70%"
                        right="50%px" 
                        bg="white" 
                        p="3" 
                        borderRadius="xl">
                        <Stack direction="row" gap="2">
                            <InputGroup>
                                <Input
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Mau belajar apa hari ini?"
                                    borderRadius="xl"
                                />
                                <InputRightAddon>
                                    <IconButton aria-label="Search" icon={<SearchIcon />} onClick={handleSearch}/>
                                </InputRightAddon>
                            </InputGroup>
                        </Stack>
                    </Container>
                </VStack>
            </Box>
            <Box
            position='relative' 
            overflow='hidden'
            h = '60vh'
            css={`
                    background: url(static/images/noise-1280-832.svg), #500D7D;
                    background-size: cover
                `}
            >

            </Box>
            <Footer/>
        </>
    )
}