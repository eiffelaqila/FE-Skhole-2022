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

export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    
    const [searchData, setSearchData] = useState<ISearchData | null>(null);

    const updateData = async () => {
        const { data } = await postAPI<ISearchData>(
            `/rumah-belajar/search`,
            {
                query: router.query['query']
            }
        )
        console.log('query='+router.query['query'])
        console.log('data=')
        console.log(data)
        
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
            console.log(router.query['query']);
            updateData();
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
            h = '60vh'
            css={`
                    background: url(static/images/noise-1280-832.svg), #500D7D;
                    background-size: cover
                `}
            >
                <Heading>Mata Pelajaran</Heading>
                {searchData?.mata_pelajaran.map((item) => (
                    <Text color="white" key={item.id_matpel}>
                        {item.nama_matpel} <br/>
                        {item.kelas}
                    </Text>
                ))}

                <Heading>Materi</Heading>
                {searchData?.materi.map((item) => (
                    <Text color="white" key={item.id_materi}>
                        {item.nama_materi} <br/>
                        {item.nama_matpel}
                    </Text>
                ))}
            </Box>
            <Footer/>
        </>
    )
}