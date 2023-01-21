import React, { useEffect } from 'react'
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
import ISearchData from '../../models/ISearchData';
import { postAPI } from '../../lib/api';
import SearchCard from '../../components/SearchCard'
import axios from 'axios';

export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    
    const [searchData, setSearchData] = useState<ISearchData | null>(null);

    const updateData = async () => {
        const { data } = await postAPI<ISearchData>(
            `/rumahbelajar/search`,
            {
                query: router.query['query']
            }
        )
        
        setLoading(false);
        setSearchData(data);
    }

    const handleSearch = () => {
        // Not Empty
        if (search !== '') {
            router.push({ pathname: '/search', query: { query: search } });
        }
    }

    useEffect(() => {
        if (router.query['query'] !== '' && router.query['query'] !== undefined) {
            try {
                setLoading(true);
                updateData();
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 500) {
                        router.reload()
                    }
                }
            }
        } else {
            setLoading(false);
            
        }
    }, [router.query['query']])
    
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
                    background: url(static/images/noise.png), #471CA8;
                    background-repeat: repeat
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
                        top="60%"
                        right="50%px" 
                        bg="white" 
                        p="0"
                        borderRadius="xl"
                        >
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
            minH = '60vh'
            css={`
                    background: url(static/images/noise.png), #500D7D;
                    background-repeat: repeat;
                `}
            >
                {loading ? 
                    <Center h="20vh">
                        <Image src="static/images/loading.svg" />
                    </Center>
                :
                    <VStack>
                        <Flex 
                            position="relative"
                            top="20%"
                            right="11%" 
                            direction="column" 
                            align="center"
                            paddingTop={5}
                        >
                            <Heading color="white">Hasil Pencarian</Heading>

                        </Flex>
                        <Flex 
                            position="relative"
                            top="27%"
                            right="0.15%" 
                            direction="column" 
                            align="center"
                            flexWrap={'wrap'} 
                            gap= {{base: '2', md: '5'}}
                        >
                        {searchData?.mata_pelajaran.map((item) => (
                        <SearchCard key={item.id_matpel} id_matpel={item.id_matpel} nama_matpel={item.nama_matpel} kelas={item.kelas} />
                        ))}
                        </Flex>
                        
                    </VStack>
                }
            </Box>
            <Footer/>
        </>
    )
}