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

function EditMateriModal({
    isOpen,
    onOpen,
    onClose,
    userToken,
    id_materi,
    id_matpel,
    nama_materi,
    deskripsi,
    url_rangkuman,
    url_ujian,
    url_solusi
}: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    userToken: any;
    id_materi: string;
    id_matpel: string;
    nama_materi: string;
    deskripsi: string;
    url_rangkuman: string;
    url_ujian: string;
    url_solusi: string;
}) {
    const [newNamaMateri, setNewNamaMateri] = useState('')
    const [newDeskripsi, setNewDeskripsi] = useState('')
    const [newURLRangkuman, setNewURLRangkuman] = useState('')
    const [newURLUjian, setNewURLUjian] = useState('')
    const [newURLSolusi, setNewURLSolusi] = useState('')

    const toast = useToast()
    const router = useRouter()
    
    const handleEdit = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();

            const payload: { [key: string]: string } = {};
            if (newNamaMateri !== '') {
                payload.nama_materi = newNamaMateri
            }
            if (newDeskripsi !== '') {
                payload.deskripsi = newDeskripsi
            }
            if (newURLRangkuman !== '') {
                payload.url_rangkuman = newURLRangkuman
            }
            if (newURLUjian !== '') {
                payload.url_ujian = newURLUjian
            }
            if (newURLSolusi !== '') {
                payload.url_solusi = newURLSolusi
            }

            const { data } = await putAPIAuth<any>(
                `/rumahbelajar/materi/${id_materi}`,
                payload,
                userToken.token,
            )

            toast({
                title: 'Edit Berhasil',
                description: 'Edit materi berhasil tersimpan',
                position: 'top',
                status: 'info',
            });

            router.push(`/rumah-belajar/${id_matpel}`);
        } catch (err) {
            toast({
                title: 'Edit Gagal',
                description: 'Edit materi gagal',
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
            <ModalHeader>Edit materi</ModalHeader>
            <ModalCloseButton />
            
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Nama Materi</FormLabel>
                    <Input placeholder={`Prev: ${nama_materi}`} onChange={(e) => setNewNamaMateri(e.target.value)}/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Deskripsi</FormLabel>
                    <Input placeholder={`Prev: ${deskripsi}`} onChange={(e) => setNewDeskripsi(e.target.value)}/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>URL Rangkuman</FormLabel>
                    <Input placeholder={`Prev: ${url_rangkuman}`} onChange={(e) => setNewURLRangkuman(e.target.value)}/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>URL Ujian</FormLabel>
                    <Input placeholder={`Prev: ${url_ujian}`} onChange={(e) => setNewURLUjian(e.target.value)}/>
                </FormControl>
                
                <FormControl mt={4}>
                    <FormLabel>URL Solusi</FormLabel>
                    <Input placeholder={`Prev: ${url_solusi}`} onChange={(e) => setNewURLSolusi(e.target.value)}/>
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

export default EditMateriModal