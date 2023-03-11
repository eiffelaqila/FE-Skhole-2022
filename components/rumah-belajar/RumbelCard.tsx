import { SearchIcon } from "@chakra-ui/icons";
import {
    Box,
    Container,
    Center,
    Heading,
    Image,
    Stack,
    Text,
    Flex,
    Input,
    InputRightAddon,
    IconButton,
    InputGroup,
} from "@chakra-ui/react";
import Link from "next/link";

function RumbelCard({
    id_matpel,
    nama_matpel,
    kelas,
    icon_src,
}: {
    id_matpel: string;
    nama_matpel: string;
    kelas: string;
    icon_src: string;
}) {
    return (
        <>
            <Link href={`/rumah-belajar/${id_matpel}`}>
                <Flex
                    justifyContent={"center"}
                    flexDirection="column"
                    height={{ base: "150px", md: "250px" }}
                    width={{ base: "120px", md: "200px" }}
                    padding={3}
                    bg="white"
                    rounded={10}
                    gap={{ base: 2, md: 5 }}
                >
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        paddingTop={2}
                    >
                        <Image
                            h={{ base: "56px", md: "74px" }}
                            src={`${icon_src}`}
                            alt={"Icon Mata Pelajaran"}
                        />
                    </Flex>
                    <Flex
                        flexDirection="column"
                        gap={{ base: 0, md: 2 }}
                        alignItems={{ base: "center", md: "flex-start" }}
                        paddingLeft={{ base: 0, md: 2 }}
                    >
                        <Flex display={{ base: "none", md: "undefined" }}>
                            <Image src="static/images/Line.svg" alt={""} />
                        </Flex>
                        <Text
                            textAlign={{ base: "center", md: "left" }}
                            fontSize={{ base: "12px", md: "16px" }}
                            color={"#500D7D"}
                        >
                            <b> {nama_matpel} </b> <br />{" "}
                            <span style={{ color: "#000000" }}>{kelas}</span>
                        </Text>
                    </Flex>
                </Flex>
            </Link>
        </>
    );
}

export default RumbelCard;
