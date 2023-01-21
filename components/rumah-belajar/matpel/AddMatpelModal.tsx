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
import { postAPIAuth, putAPIAuth } from '../../../lib/api';
import { useRouter } from 'next/router';

function AddMatpelModal({
    isOpen,
    onOpen,
    onClose,
    userToken,
    kelas
}: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    userToken: any;
    kelas: string;
}) {
    const [newNamaMatpel, setNewNamaMatpel] = useState('')
    const [newIconSrc, setNewIconSrc] = useState('')

    const toast = useToast()
    const router = useRouter()
    
    const handleAdd = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();

            const payload: { [key: string]: string } = {};
            payload.kelas = kelas

            if (newNamaMatpel !== '') {
                payload.nama_matpel = newNamaMatpel
            }
            if (newIconSrc !== '') {
                payload.icon_src = newIconSrc
            }

            const { data } = await postAPIAuth<any>(
                `/rumahbelajar/matapelajaran`,
                payload,
                userToken.token,
            )

            toast({
                title: 'Penambahan Berhasil',
                description: 'Penambahan mata pelajaran berhasil tersimpan',
                position: 'top',
                status: 'info',
            });

            router.push(`/rumah-belajar`);
        } catch (err) {
            toast({
                title: 'Penambahan Gagal',
                description: 'Penambahan mata pelajaran gagal',
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
            <ModalHeader>Penambahan materi</ModalHeader>
            <ModalCloseButton />
            
            <ModalBody pb={6}>
                <FormControl isRequired>
                    <FormLabel>Nama Mata Pelajaran</FormLabel>
                    <Input placeholder={`Nama Mata Pelajaran`} onChange={(e) => setNewNamaMatpel(e.target.value)}/>
                </FormControl>

                <FormControl mt={4} isRequired>
                    <FormLabel>Icon Src</FormLabel>
                    <Input placeholder={`Icon Src`} onChange={(e) => setNewIconSrc(e.target.value)}/>
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleAdd}>
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

export default AddMatpelModal