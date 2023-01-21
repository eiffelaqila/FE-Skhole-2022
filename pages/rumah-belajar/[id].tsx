import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Box, Center, Flex, Heading, IconButton, Image, Text, VStack, useDisclosure } from '@chakra-ui/react'
import Footer from '../../layout/Footer'
import RumbelHeaderLayout from '../../layout/RumbelHeader'
import { getAPI } from '../../lib/api'
import IMataPelajaran from '../../models/IMataPelajaran'
import IMateri from '../../models/IMateri'
import { useRouter } from 'next/router'
import MateriCard from '../../components/rumah-belajar/materi/MateriCard'
import useAuth from '../../hooks/useAuth'
import AddMateriModal from '../../components/rumah-belajar/materi/AddMateriModal'
import { AddIcon } from '@chakra-ui/icons'
import axios from 'axios'

export default function RumahBelajar() {
    const [loadingMatpel, setLoadingMatpel] = useState(true);
    const [loadingMateri, setLoadingMateri] = useState(true);
    const [matpel, setMatpel] = useState<IMataPelajaran | null>(null)
    const [materi, setMateri] = useState<IMateri[] | null>(null)

    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ userToken, setUserToken ] = useState<any>(null)
    const { authCheck } = useAuth()

    const updateMatpel = async(id: string) => {
        const { data } = await getAPI<IMataPelajaran>(
            `/rumahbelajar/matapelajaran/${id}`
        )
        
        setMatpel(data);
        setLoadingMatpel(false);
    }

    const updateMateri = async(id: string) => {
        const { data } = await getAPI<IMateri[]>(
            `/rumahbelajar/materi-matapelajaran/${id}`
        )

        setMateri(data);
        setLoadingMateri(false);
    }

    useEffect(() => {
        try {
            const { id } = router.query

            const token = authCheck()
            if (token) {
                setUserToken(token)
            }

            setLoadingMatpel(true);
            setLoadingMateri(true);
            
            if (id) {
                updateMatpel(id as string);
                updateMateri(id as string);
            }
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 500) {
                    console.log("HAI")
                }
            }
            console.log("INI")
        }
    }, [router])

    if (loadingMatpel) {
        return (
            <Center 
                position="relative" 
                minHeight="100vh" 
                bgColor="#373360" 
                transform="auto"
                css={`
                    background: url(/static/images/noise.png), #200655;
                    background-repeat: repeat;
                `}
            >
                <Image src="/static/images/loading.svg" />
            </Center>
        )
    }

    return (
        <>
            <Head>
                <title>Rumah Belajar - Skhole 2022</title>
            </Head>
            
            <RumbelHeaderLayout id_matpel={matpel?.id_matpel ?? ''} nama_matpel={matpel?.nama_matpel ?? ''} kelas={matpel?.kelas ?? ''} icon_src={matpel?.icon_src ?? ''} title={matpel ? matpel.nama_matpel : 'Loading...'} subtitle={matpel ? matpel.kelas : 'Loading...'} />
            <Box 
                position="relative" 
                minHeight="100vh" 
                bgColor="#373360" 
                transform="auto"
                css={`
                    background: url(/static/images/noise.png), #200655;
                    background-repeat: repeat;
                `}
            >

                {loadingMateri ? 
                    <Center h="20vh">
                        <Image src="/static/images/loading.svg" />
                    </Center>
                :
                    <VStack 
                        position="relative"
                        align="center"
                        flexWrap={'wrap'} 
                        gap= {{base: '2', md: '5'}}

                        py={25}
                    >
                        <Heading color="#FEE56C">Materi Pembelajaran</Heading>
                        {materi?.map((item) => (
                            <MateriCard 
                                key={item.id_materi} 
                                userToken={userToken}
                                id_materi={item.id_materi} 
                                id_matpel={item.id_matpel}
                                nama_materi={item.nama_materi}                         
                                deskripsi={item.deskripsi}
                                url_rangkuman={item.url_rangkuman}
                                url_ujian={item.url_ujian}
                                url_solusi={item.url_solusi}
                            />
                        ))}

                        <IconButton
                            variant='solid'
                            colorScheme={'whiteAlpha'}
                            borderRadius={'full'}
                            size={'lg'}
                            aria-label='Add'
                            icon={<AddIcon />}
                            onClick={onOpen}
                            display={ userToken ? 'undefined' : 'none'}
                        />
                    </VStack>
                }
                
            </Box>
            
            { matpel ?
                <AddMateriModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} userToken={userToken} id_matpel={matpel?.id_matpel} />
            :
                <Center h="20vh">
                    <Image src="/static/images/loading.svg" />
                </Center>
            }
            
            <Footer/> 
        </>
    )
}