import {
    Box,
    Flex,
    Heading,
    Image,
    Select,
    Stack,
    Text,
    Spacer,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { getAPI } from '../lib/api'
import RumbelCard from '../components/RumbelCard'
import IMataPelajaran from '../models/IMataPelajaran';
import IJudul from '../models/IJudul';
import RumbacaCard from './RumbacaCard';

function RumbacaBox() {
    const [judul, setJudul] =  useState<IJudul[] | null>(null);

    useEffect(() => {
        setJudul(dummyData)
    },[])

    const dummyData = [
        {idJudul : '1',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillah',
        time : '1'
        },
        {idJudul : '2',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillah2',
        time : '10'
        },
        {idJudul : '3',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillah3',
        time : '100'
        },
        {idJudul : '4',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillah4',
        time : '50'
        },
        {idJudul : '5',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillah8',
        time : '5'
        },
        {idJudul : '6',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillah5',
        time : '3'
        },
        {idJudul : '7',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillah9',
        time : '9'
        },
        {idJudul : '8',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillahhh',
        time : '7'
        },
        {idJudul : '9',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillahaaa',
        time : '0.5'
        },
        {idJudul : '10',
        gambarSrc : 'https://picsum.photos/200',
        namaJudul : 'bismillahii',
        time : '1'
        },

    ]

    return (
        <>
            <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent={{base: 'flex-start', md: 'space-between'}} padding="50px 35px 0px 0px">
                <Heading color="white" paddingLeft={{base:"60px" , md:"80px" }} fontSize={54}>
                    Rumah Membaca
                </Heading>
            </Flex>
            <Box padding={{base: '10', md: '20'}} minHeight='600px'>
                <Flex flexWrap={'wrap'} gap= {{base: '5', md: '10'}} justifyContent={'center'} flexDirection={{base:'row'}}>                    
                    <Flex 
                        flexDirection='column' 
                        paddingLeft="10px"
                        gap={8}
                    >
                        {judul.map((item: { idJudul: string; gambarSrc: string; namaJudul:string;time:string;}) => (
                            <RumbacaCard id_judul={item.idJudul} gambar_src={item.gambarSrc} nama_judul={item.namaJudul} time={item.time}/>
                        ))}
                    </Flex>
                    <Spacer/>                 
                    <Flex 
                        flexDirection='column'
                        paddingRight={10} 
                        gap={2}
                    >
                        <Table>
                            <Thead>
                                <Tr color='#FEE56C' fontWeight='bold' fontFamily='livvic' fontSize={28}>Kategori Bacaan</Tr>
                            </Thead>
    
                            <Tbody>
                                <Tr color={'white'} textAlign = {'right'} fontSize={18}>Hidangan</Tr>
                                <Tr color={'white'} textAlign = {'right'} fontSize={18}>Keuangan</Tr>
                                <Tr color={'white'} textAlign = {'right'} fontSize={18}>Olahraga</Tr>
                                <Tr color={'white'} textAlign = {'right'} fontSize={18}>Otomotif</Tr>
                                <Tr color={'white'} textAlign = {'right'} fontSize={18}>Teknologi</Tr>
                            </Tbody>
                        </Table>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default RumbacaBox