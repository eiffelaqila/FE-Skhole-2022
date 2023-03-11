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
} from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";
import { postAPIAuth, putAPIAuth } from "../../../lib/api";
import { useRouter } from "next/router";

function AddMateriModal({
    isOpen,
    onOpen,
    onClose,
    userToken,
    id_matpel,
}: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    userToken: any;
    id_matpel: string;
}) {
    const [newNamaMateri, setNewNamaMateri] = useState("");
    const [newDeskripsi, setNewDeskripsi] = useState("");
    const [newURLRangkuman, setNewURLRangkuman] = useState("");
    const [newURLUjian, setNewURLUjian] = useState("");
    const [newURLSolusi, setNewURLSolusi] = useState("");

    const toast = useToast();
    const router = useRouter();

    const handleAdd = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();

            const payload: { [key: string]: string } = {};
            payload.id_matpel = id_matpel;

            if (newNamaMateri !== "") {
                payload.nama_materi = newNamaMateri;
            }
            if (newDeskripsi !== "") {
                payload.deskripsi = newDeskripsi;
            }
            if (newURLRangkuman !== "") {
                payload.url_rangkuman = newURLRangkuman;
            }
            if (newURLUjian !== "") {
                payload.url_ujian = newURLUjian;
            }
            if (newURLSolusi !== "") {
                payload.url_solusi = newURLSolusi;
            }

            const { data } = await postAPIAuth<any>(
                `/rumahbelajar/materi`,
                payload,
                userToken.token
            );

            toast({
                title: "Penambahan Berhasil",
                description: "Penambahan materi berhasil tersimpan",
                position: "top",
                status: "info",
            });

            router.push(`/rumah-belajar/${id_matpel}`);
        } catch (err) {
            toast({
                title: "Penambahan Gagal",
                description: "Penambahan materi gagal",
                position: "top",
                status: "warning",
            });

            onClose();
            throw err;
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Penambahan materi</ModalHeader>
                <ModalCloseButton />

                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Nama Materi</FormLabel>
                        <Input
                            placeholder={`Nama Materi`}
                            onChange={(e) => setNewNamaMateri(e.target.value)}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Deskripsi</FormLabel>
                        <Input
                            placeholder={`Deskripsi`}
                            onChange={(e) => setNewDeskripsi(e.target.value)}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>URL Rangkuman</FormLabel>
                        <Input
                            placeholder={`URL Rangkuman`}
                            onChange={(e) => setNewURLRangkuman(e.target.value)}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>URL Ujian</FormLabel>
                        <Input
                            placeholder={`URL Ujian`}
                            onChange={(e) => setNewURLUjian(e.target.value)}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>URL Solusi</FormLabel>
                        <Input
                            placeholder={`URL Solusi`}
                            onChange={(e) => setNewURLSolusi(e.target.value)}
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleAdd}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default AddMateriModal;
