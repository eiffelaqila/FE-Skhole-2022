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
    Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAPI } from "../lib/api";
import IMataPelajaran from "../models/IMataPelajaran";
import IArtikel from "../models/IArtikel";
import RumbacaCard from "./RumbacaCard";

function RumbacaBox() {
    const [artikel, setArtikel] = useState<IArtikel[] | null>(null);

    const dummyData = [
        {
            id_artikel: "1",
            judul: "bismillah",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
        {
            id_artikel: "2",
            judul: "bismillah2",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
        {
            id_artikel: "3",
            judul: "bismillah3",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
        {
            id_artikel: "4",
            judul: "bismillah4",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
        {
            id_artikel: "5",
            judul: "bismillah8",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
        {
            id_artikel: "6",
            judul: "bismillah5",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
        {
            id_artikel: "7",
            judul: "bismillah9",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
        {
            id_artikel: "8",
            judul: "bismillahhh",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
        {
            id_artikel: "9",
            judul: "bismillahaaa",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
        {
            id_artikel: "10",
            judul: "bismillahii",
            url: "...",
            kategori: "...",
            author: "...",
            img_src: "https://picsum.photos/200",
        },
    ];

    useEffect(() => {
        setArtikel(dummyData);
    }, []);

    return (
        <>
            <Flex
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={{ base: "flex-start", md: "space-between" }}
                padding="50px 35px 0px 0px"
            >
                <Heading
                    color="white"
                    paddingLeft={{ base: "60px", md: "80px" }}
                    fontSize={54}
                >
                    Rumah Membaca
                </Heading>
            </Flex>
            <Box padding={{ base: "10", md: "20" }} minHeight="600px">
                <Flex
                    flexWrap={"wrap"}
                    gap={{ base: "5", md: "10" }}
                    justifyContent={"center"}
                    flexDirection={{ base: "row" }}
                >
                    <Flex flexDirection="column" paddingLeft="10px" gap={8}>
                        {artikel?.map(
                            (item: {
                                id_artikel: string;
                                judul: string;
                                url: string;
                                kategori: string;
                                author: string;
                                img_src: string;
                            }) => (
                                <RumbacaCard
                                    key={item.id_artikel}
                                    id_judul={item.id_artikel}
                                    gambar_src={item.img_src}
                                    nama_judul={item.judul}
                                />
                            )
                        )}
                    </Flex>
                    <Spacer />
                    <Flex flexDirection="column" paddingRight={10} gap={2}>
                        <Table>
                            <Thead>
                                <Tr
                                    color="#FEE56C"
                                    fontWeight="bold"
                                    fontFamily="livvic"
                                    fontSize={28}
                                >
                                    Kategori Bacaan
                                </Tr>
                            </Thead>

                            <Tbody>
                                <Tr
                                    color={"white"}
                                    textAlign={"right"}
                                    fontSize={18}
                                >
                                    Hidangan
                                </Tr>
                                <Tr
                                    color={"white"}
                                    textAlign={"right"}
                                    fontSize={18}
                                >
                                    Keuangan
                                </Tr>
                                <Tr
                                    color={"white"}
                                    textAlign={"right"}
                                    fontSize={18}
                                >
                                    Olahraga
                                </Tr>
                                <Tr
                                    color={"white"}
                                    textAlign={"right"}
                                    fontSize={18}
                                >
                                    Otomotif
                                </Tr>
                                <Tr
                                    color={"white"}
                                    textAlign={"right"}
                                    fontSize={18}
                                >
                                    Teknologi
                                </Tr>
                            </Tbody>
                        </Table>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default RumbacaBox;
