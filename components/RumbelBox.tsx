import {
    Box,
    Flex,
    Heading,
    Image,
    Select,
    Stack,
    Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { getAPI } from '../lib/api'
import RumbelCard from '../components/RumbelCard'
import IMataPelajaran from '../models/IMataPelajaran';

function RumbelBox() {
    const [kelas, setKelas] = useState('7');
    const [matpel, setMatpel] =  useState<IMataPelajaran[] | null>(null);

    const updateData = async () => {
        const { data } = await getAPI<IMataPelajaran[]>(
            `/rumah-belajar/getmatpel/${kelas}`
        )
        
        setMatpel(data);
    };

    const handleKelasChange = (event: any) => {
        setKelas(event.target.value);
    };

    useEffect(() => {
        updateData();
    }, [kelas])

    const classSelectionItems = [
        {
            text: 'Kelas 7',
            value: '7'
        },
        {
            text: 'Kelas 8',
            value: '8'
        },
        {
            text: 'Kelas 9',
            value: '9'
        },
        {
            text: 'Kelas 10',
            value: '10'
        },
        {
            text: 'Kelas 11',
            value: '11'
        },
        {
            text: 'Kelas 12',
            value: '12'
        }
    ]
    
    return (
        <>
            <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent={{base: 'flex-start', md: 'space-between'}} padding="50px 35px 0px 0px">
                <Heading color="white" paddingLeft={{base:"60px" , md:"80px" }} fontSize={54}>
                    Rumah <span style={{color:"#FEE56C"}} color="#FEE56C">Belajar</span>
                </Heading>
                
                <Flex 
                    flexDirection='column' 
                    paddingLeft="60px"
                    gap={2}
                >
                    
                    <Text 
                        color={'white'} 
                        fontFamily='livvic' 
                        fontSize={21}
                        padding="0px 65px 0px 0px"
                        textAlign={{base:'left', md: 'right'}}
                    >
                            <b>Kamu kelas berapa?</b>
                    </Text>

                    <Stack alignItems={{base:'flex-start', md: 'flex-end'}} padding="0px 65px 0px 0px"> 
                        <Select 
                            placeholder='' 
                            variant='filled' 
                            bg='#FEE56C' 
                            color="#500D7D" 
                            fontFamily={"inter"} 
                            rounded={20} 
                            maxWidth={'150px'}
                            onChange={handleKelasChange}
                        >
                            { classSelectionItems.map((item) => (
                                <option key={item.value} value={item.value}>{item.text}</option>
                            )) }
                        </Select>
                    </Stack>
                </Flex>
            </Flex>
            <Box padding={{base: '10', md: '20'}} minHeight='600px'>
                <Image 
                    src="static/images/neptune.svg" 
                    position="absolute" 
                    maxWidth="353px"
                    bottom="10%" 
                    right="10%"
                    zIndex={-1} 
                />
                    
                <Flex flexWrap={'wrap'} gap= {{base: '5', md: '10'}} justifyContent={'center'}>
                    { matpel?.map((item) => (
                        <RumbelCard key={item.id_matpel} id_matpel={item.id_matpel} nama_matpel={item.nama_matpel} kelas={item.kelas} icon_src={item.icon_src} />
                    ))}
                </Flex>
            </Box>
        </>
    )
}

export default RumbelBox