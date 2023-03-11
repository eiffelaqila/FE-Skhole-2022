import { DeleteIcon, DownloadIcon, EditIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Flex,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link';
import EditMateriModal from './EditMateriModal';
import DeleteMateriModal from './DeleteMateriModal';

function MateriCard({
    userToken,
    id_materi,
    id_matpel,
    nama_materi,
    deskripsi,
    url_rangkuman,
    url_ujian,
    url_solusi
}: {
    userToken: any;
    id_materi: string;
    id_matpel: string;
    nama_materi: string;
    deskripsi: string;
    url_rangkuman: string;
    url_ujian: string;
    url_solusi: string;
}) {
    const { isOpen: isOpenEditModal, onOpen: onOpenEditModal, onClose: onCloseEditModal } = useDisclosure()
    const { isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure()

    return (
        <>
            <HStack
                gap = {{base: 2, md: 5}}
                w = {'65vw'}

                minW={{base: '250px', md: '65vw'}} 
                p={15}

                bg="white"
                rounded={10}
            >
                <VStack w={'100%'} alignItems={'flex-start'}>
                    { userToken ?
                        <HStack w={'100%'} justifyContent={'space-between'}>
                            <VStack alignItems={'flex-start'}>
                                <Heading fontSize={{base: '24px', md: '28px'}} color={'#500D7D'}>
                                    <b> {nama_materi} </b>
                                </Heading>
                                <Text fontSize={{base: '12px', md: '16px'}} color={'#500D7D'}>
                                    <b> {deskripsi ? deskripsi : nama_materi} </b>
                                </Text>
                            </VStack>
                            <HStack>
                                <IconButton
                                    variant='outline'
                                    colorScheme={'teal'}
                                    borderRadius={'full'}
                                    size={'lg'}
                                    aria-label='Edit'
                                    icon={<EditIcon />}
                                    onClick={onOpenEditModal}
                                />
                                <IconButton
                                    variant='outline'
                                    colorScheme={'red'}
                                    borderRadius={'full'}
                                    size={'lg'}
                                    aria-label='Delete'
                                    icon={<DeleteIcon />}
                                    onClick={onOpenDeleteModal}
                                />
                            </HStack>
                        </HStack>
                        :
                        <VStack  alignItems={'flex-start'}>
                            <Heading fontSize={{base: '24px', md: '28px'}} color={'#500D7D'}>
                                <b> {nama_materi} </b>
                            </Heading>
                            <Text fontSize={{base: '12px', md: '16px'}} color={'#500D7D'}>
                                <b> {deskripsi ? deskripsi : nama_materi} </b>
                            </Text>
                        </VStack>
                        }
                    
        
                    <Flex
                        flexDirection={{base: 'column', md: 'row'}}
                        gap={{base: '2', md: '5'}}
                        pt={5}
                    >
                        <Link href={url_rangkuman ?? ''}>
                            <Button size={'sm'} borderRadius={'full'} leftIcon={<DownloadIcon />} color={'white'} bg={'#8187F7'} variant='solid' px={15} py={5}>
                                Rangkuman
                            </Button>
                        </Link>
                        <Link href={url_ujian ?? ''}>
                            <Button size={'sm'} borderRadius={'full'} leftIcon={<ExternalLinkIcon />} color={'white'} bg={'#FF930A'} variant='solid' px={15} py={5}>
                                Latihan Soal
                            </Button>
                        </Link>
                        <Link href={url_solusi ?? ''}>
                            <Button size={'sm'} borderRadius={'full'} leftIcon={<DownloadIcon />} color={'white'} bg={'#FF930A'} variant='solid' px={15} py={5}>
                                Solusi
                            </Button>
                        </Link>
                    </Flex>
                </VStack>
            </HStack>

            <EditMateriModal isOpen={isOpenEditModal} onOpen={onOpenEditModal} onClose={onCloseEditModal} userToken={userToken} id_materi={id_materi} id_matpel={id_matpel} nama_materi={nama_materi} deskripsi={deskripsi} url_rangkuman={url_rangkuman} url_ujian={url_ujian} url_solusi={url_solusi} />
            <DeleteMateriModal isOpen={isOpenDeleteModal} onOpen={onOpenDeleteModal} onClose={onCloseDeleteModal} userToken={userToken} id_materi={id_materi} id_matpel={id_matpel} />
        </>
    )
}

export default MateriCard