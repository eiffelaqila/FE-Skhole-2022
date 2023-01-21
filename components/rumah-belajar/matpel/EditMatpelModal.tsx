import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Input,
    FormControl,
    FormLabel,
    ModalFooter,
    useToast,
} from '@chakra-ui/react'
import { SyntheticEvent, useState } from 'react';
import { putAPIAuth } from '../../../lib/api';
import { useRouter } from 'next/router';

function EditMatpelModal({
    isOpen,
    onOpen,
    onClose,
    userToken,
    id_matpel,
    nama_matpel,
    kelas,
    icon_src
}: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    userToken: any;
    id_matpel: string;
    nama_matpel: string;
    kelas: string;
    icon_src: string;
}) {
    const [newNamaMatpel, setNewNamaMatpel] = useState('')
    const [newKelas, setNewKelas] = useState('')
    const [newIconSrc, setNewIconSrc] = useState('')

    const toast = useToast()
    const router = useRouter()
    
    const handleEdit = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();

            const payload: { [key: string]: string } = {};
            if (newNamaMatpel !== '') {
                payload.nama_matpel = newNamaMatpel
            }
            if (newKelas !== '') {
                payload.kelas = newKelas
            }
            if (newIconSrc !== '') {
                payload.icon_src = newIconSrc
            }

            const { data } = await putAPIAuth<any>(
                `/rumahbelajar/matapelajaran/${id_matpel}`,
                payload,
                userToken.token,
            )

            toast({
                title: 'Edit Berhasil',
                description: 'Edit mata pelajaran berhasil tersimpan',
                position: 'top',
                status: 'info',
            });

            router.push(`/rumah-belajar/${id_matpel}`);
        } catch (err) {
            toast({
                title: 'Edit Gagal',
                description: 'Edit mata pelajaran gagal',
                position: 'top',
                status: 'warning',
            });

            onClose()
            throw err;
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Edit mata pelajaran</ModalHeader>
            <ModalCloseButton />
            
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Nama Mata Pelajaran</FormLabel>
                    <Input placeholder={`Prev: ${nama_matpel}`} onChange={(e) => setNewNamaMatpel(e.target.value)}/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Kelas</FormLabel>
                    <Input placeholder={`Prev: ${kelas}`} onChange={(e) => setNewKelas(e.target.value)}/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Icon Src</FormLabel>
                    <Input placeholder={`Prev: ${icon_src}`} onChange={(e) => setNewIconSrc(e.target.value)}/>
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleEdit}>
                    Save
                </Button>
                <Button onClick={onClose}>
                    Cancel
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EditMatpelModal