import {
    Box,
    Center,
    Flex,
    Heading,
    IconButton,
    Image,
    Select,
    Stack,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { getAPI } from "../../lib/api";
import RumbelCard from "./RumbelCard";
import IMataPelajaran from "../../models/IMataPelajaran";
import axios from "axios";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import { AddIcon } from "@chakra-ui/icons";
import AddMatpelModal from "./matpel/AddMatpelModal";

function RumbelBox() {
    const [loading, setLoading] = useState(true);
    const [kelas, setKelas] = useState("Kelas 7");
    const [matpel, setMatpel] = useState<IMataPelajaran[] | null>(null);

    const {
        isOpen: isOpenAddMatpelModal,
        onOpen: onOpenAddMatpelModal,
        onClose: onCloseAddMatpelModal,
    } = useDisclosure();
    const [userToken, setUserToken] = useState<any>(null);
    const { authCheck } = useAuth();

    const router = useRouter();

    const updateData = useCallback(async () => {
        try {
            const { data } = await getAPI<IMataPelajaran[]>(
                `/rumahbelajar/matapelajarankelas/${kelas}`
            );

            setLoading(false);
            setMatpel(data);
        } catch (error: any) {
            setLoading(true);
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 500) {
                    router.reload();
                }
            }
        }
    }, [kelas, router]);

    const handleKelasChange = (event: any) => {
        setKelas(event.target.value);
    };

    useEffect(() => {
        const token = authCheck();
        if (token) {
            setUserToken(token);
        }

        setLoading(true);
        updateData();
    }, [kelas, updateData]);

    const classSelectionItems = [
        {
            text: "Kelas 7",
            value: "Kelas 7",
        },
        {
            text: "Kelas 8",
            value: "Kelas 8",
        },
        {
            text: "Kelas 9",
            value: "Kelas 9",
        },
        {
            text: "Kelas 10",
            value: "Kelas 10",
        },
        {
            text: "Kelas 11",
            value: "Kelas 11",
        },
        {
            text: "Kelas 12",
            value: "Kelas 12",
        },
        {
            text: "Cicaheum - Eksploratif",
            value: "Cicaheum - Eksploratif",
        },
        {
            text: "Cicaheum - Gemar Aksara",
            value: "Cicaheum - Gemar Aksara",
        },
        {
            text: "Cicaheum - PAUD",
            value: "Cicaheum - PAUD",
        },
        {
            text: "Cicaheum - Kelas 1",
            value: "Cicaheum - Kelas 1",
        },
        {
            text: "Cicaheum - Kelas 2",
            value: "Cicaheum - Kelas 2",
        },
        {
            text: "Cicaheum - Kelas 3",
            value: "Cicaheum - Kelas 3",
        },
        {
            text: "Cicaheum - Kelas 4",
            value: "Cicaheum - Kelas 4",
        },
        {
            text: "Cicaheum - Kelas 5",
            value: "Cicaheum - Kelas 5",
        },
        {
            text: "Cicaheum - Kelas 6",
            value: "Cicaheum - Kelas 6",
        },
        {
            text: "Ciumbuleuit - SD II",
            value: "Ciumbuleuit - SD II",
        },
        {
            text: "Ciumbuleuit - SD III & IV",
            value: "Ciumbuleuit - SD III & IV",
        },
        {
            text: "Ciumbuleuit - SD V & VI",
            value: "Ciumbuleuit - SD V & VI",
        },
        {
            text: "Ciumbuleuit - SMP VII",
            value: "Ciumbuleuit - SMP VII",
        },
        {
            text: "Ciumbuleuit - SMP VIII",
            value: "Ciumbuleuit - SMP VIII",
        },
        {
            text: "Ciumbuleuit - SMP IX",
            value: "Ciumbuleuit - SMP IX",
        },
        {
            text: "Ciumbuleuit - SMK X",
            value: "Ciumbuleuit - SMK X",
        },
        {
            text: "Ciumbuleuit - SMK XI",
            value: "Ciumbuleuit - SMK XI",
        },
        {
            text: "Ciumbuleuit - SMK XII",
            value: "Ciumbuleuit - SMK XII",
        },
        {
            text: "Ciumbuleuit - SMA X IPA",
            value: "Ciumbuleuit - SMA X IPA",
        },
        {
            text: "Ciumbuleuit - SMA XI IPA",
            value: "Ciumbuleuit - SMA XI IPA",
        },
        {
            text: "Ciumbuleuit - SMA XII IPA",
            value: "Ciumbuleuit - SMA XII IPA",
        },
        {
            text: "Ciumbuleuit - SMA X IPS",
            value: "Ciumbuleuit - SMA X IPS",
        },
        {
            text: "Ciumbuleuit - SMA XI IPS",
            value: "Ciumbuleuit - SMA XI IPS",
        },
        {
            text: "Ciumbuleuit - SMA XII IPS",
            value: "Ciumbuleuit - SMA XII IPS",
        },
    ];

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
                    fontSize={{ base: "42", md: "54" }}
                >
                    Rumah{" "}
                    <span style={{ color: "#FEE56C" }} color="#FEE56C">
                        Belajar
                    </span>
                </Heading>

                <Flex flexDirection="column" paddingLeft="60px" gap={2}>
                    <Text
                        color={"white"}
                        fontFamily="livvic"
                        fontSize={21}
                        padding="10px 65px 0px 0px"
                        textAlign={{ base: "left", md: "right" }}
                    >
                        <b>Kamu kelas berapa?</b>
                    </Text>

                    <Stack
                        alignItems={{ base: "flex-start", md: "flex-end" }}
                        padding="0px 65px 0px 0px"
                    >
                        <Select
                            placeholder=""
                            bg="#FEE56C"
                            color="#500D7D"
                            fontFamily={"inter"}
                            rounded={20}
                            maxWidth={"150px"}
                            onChange={handleKelasChange}
                        >
                            {classSelectionItems.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.text}
                                </option>
                            ))}
                        </Select>
                    </Stack>
                </Flex>
            </Flex>
            <Box padding={{ base: "10", md: "20" }} minHeight="600px">
                <Image
                    src="static/images/neptune.svg"
                    position="absolute"
                    maxWidth="353px"
                    bottom="10%"
                    right="10%"
                    zIndex={-1}
                    alt={""}
                />

                <VStack gap={{ base: "5", md: "10" }}>
                    <Flex
                        flexWrap={"wrap"}
                        gap={{ base: "5", md: "10" }}
                        justifyContent={"center"}
                    >
                        {loading ? (
                            <Center>
                                <Image
                                    src="static/images/loading.svg"
                                    alt={"Loading..."}
                                />
                            </Center>
                        ) : (
                            matpel?.map((item) => (
                                <RumbelCard
                                    key={item.id_matpel}
                                    id_matpel={item.id_matpel}
                                    nama_matpel={item.nama_matpel}
                                    kelas={item.kelas}
                                    icon_src={item.icon_src}
                                />
                            ))
                        )}
                    </Flex>
                    <IconButton
                        variant="solid"
                        colorScheme={"whiteAlpha"}
                        borderRadius={"full"}
                        size={"lg"}
                        aria-label="Add"
                        icon={<AddIcon />}
                        onClick={onOpenAddMatpelModal}
                        display={userToken ? "undefined" : "none"}
                    />
                </VStack>
            </Box>

            {kelas ? (
                <AddMatpelModal
                    isOpen={isOpenAddMatpelModal}
                    onOpen={onOpenAddMatpelModal}
                    onClose={onCloseAddMatpelModal}
                    userToken={userToken}
                    kelas={kelas}
                />
            ) : (
                <Center h="20vh">
                    <Image
                        src="/static/images/loading.svg"
                        alt={"Loading..."}
                    />
                </Center>
            )}
        </>
    );
}

export default RumbelBox;
