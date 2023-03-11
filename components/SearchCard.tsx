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

function SearchCard({
    id_matpel,
    nama_matpel,
    kelas,
}: {
    id_matpel: string;
    nama_matpel: string;
    kelas: string;
}) {
    return (
        <>
            <Link href={`/rumah-belajar/${id_matpel}`}>
                <Flex
                    flexDirection="column"
                    width={{ base: "300px", md: "600px" }}
                    p={5}
                    bg="white"
                    rounded={10}
                    gap={{ base: 2, md: 5 }}
                >
                    <Flex
                        flexDirection="column"
                        gap={{ base: 0, md: 2 }}
                        alignItems={{ base: "flex-start", md: "flex-start" }}
                        paddingLeft={{ base: 0, md: 2 }}
                    >
                        <Flex display={{ base: "none", md: "undefined" }}>
                            <Image src="static/images/Line.svg" alt={""} />
                        </Flex>
                        <Text
                            fontSize={{ base: "12px", md: "16px" }}
                            color={"#500D7D"}
                        >
                            <b> {nama_matpel} </b> <br />{" "}
                            <span style={{ color: "#000000" }}>
                                Kelas {kelas}
                            </span>
                        </Text>
                    </Flex>
                </Flex>
            </Link>
        </>
    );
}
export default SearchCard;
