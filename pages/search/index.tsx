import React, { useEffect } from 'react'
import Head from 'next/head'
import Footer from '../../layout/Footer'
import {
    Box,
    Center,
    Heading,
    Image,
    Flex,
    VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ISearchData from '../../models/ISearchData';
import { postAPI } from '../../lib/api';
import SearchCard from '../../components/SearchCard'
import axios from 'axios';
import SearchBar from '../../components/SearchBar';

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
            <Center
                h = '40vh'
                css={`
                    background: url(static/images/noise.png), #471CA8;
                    background-repeat: repeat
                `}
            > 
                <VStack gap={'10'}>
                    <Heading fontSize={{base: '24px', sm:'28px', md: '36px'}} color="white" textAlign="center" px={'5'}>
                        Teruslah menjadi orang yang <span style={{color:"#FEE56C"}} color="#FEE56C">mencari ilmu</span> kapanpun dan di manapun.
                    </Heading>
                    <SearchBar />
                </VStack>
            </Center>
            <Box
                minH = '60vh'
                css={`
                        background: url(static/images/noise.png), #500D7D;
                        background-repeat: repeat;
                    `}
                py={10}
            >
                {loading ? 
                    <Center h="20vh">
                        <Image src="static/images/loading.svg" />
                    </Center>
                :
                    <VStack>
                        <Flex 
                            direction="column" 
                            pb={5}
                        >
                            <Heading color="white">Hasil Pencarian</Heading>
                        </Flex>

                        { searchData?.mata_pelajaran.length !== 0 ? 
                            <Flex 
                                direction="column" 
                                align="center"
                                gap= {{base: '2', md: '5'}}
                            >
                                <Heading fontSize={'xl'} color="#FEE56C">Mata Pelajaran</Heading>
                                {searchData?.mata_pelajaran.map((item) => (
                                    <SearchCard key={item.id_matpel} id_matpel={item.id_matpel} nama_matpel={item.nama_matpel} kelas={item.kelas} />
                                ))}
                            </Flex>

                            :
                            <></>
                        }
                        
                        { searchData?.materi.length !== 0 ? 
                            <Flex 
                                direction="column" 
                                align="center"
                                gap= {{base: '2', md: '5'}}
                            >
                                <Heading fontSize={'xl'} color="#FEE56C">Materi</Heading>
                                {searchData?.materi.map((item) => (
                                    <SearchCard key={item.id_matpel} id_matpel={item.id_matpel} nama_matpel={item.nama_materi} kelas={(item.nama_matpel).concat(' - ', item.kelas)} />
                                ))}
                            </Flex>

                            :
                            <></>
                        }
                        
                    </VStack>
                }
            </Box>
            <Footer/>
        </>
    )
}