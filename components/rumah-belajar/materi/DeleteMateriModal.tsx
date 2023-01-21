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
import { deleteAPIAuth, putAPIAuth } from '../../../lib/api';
import { useRouter } from 'next/router';

function DeleteMateriModal({
    isOpen,
    onOpen,
    onClose,
    userToken,
    id_materi,
    id_matpel
}: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    userToken: any;
    id_materi: string;
    id_matpel: string;
}) {

    const toast = useToast()
    const router = useRouter()
    
    const handleDelete = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();

            const { data } = await deleteAPIAuth<any>(
                `/rumahbelajar/materi/${id_materi}`,
                userToken.token,
            )

            toast({
                title: 'Penghapusan Berhasil',
                description: 'Penghapusan materi berhasil tersimpan',
                position: 'top',
                status: 'info',
            });

            router.push(`/rumah-belajar/${id_matpel}`);
        } catch (err) {
            toast({
                title: 'Penghapusan Gagal',
                description: 'Penghapusan materi gagal',
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
            <ModalHeader>Hapus materi</ModalHeader>
            <ModalCloseButton />
            
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Anda yakin ingin menghapusnya?</FormLabel>
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='red' mr={3} onClick={handleDelete}>
                    Delete
                </Button>
                <Button onClick={onClose}>
                    Cancel
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default DeleteMateriModal