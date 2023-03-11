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
    Grid,
    GridItem,
    Spacer,
} from "@chakra-ui/react";

function RumbacaCard({
    id_judul,
    nama_judul,
    gambar_src,
}: {
    id_judul: string;
    nama_judul: string;
    gambar_src: string;
}) {
    return (
        <>
            <a href={`/rumah-membaca/${id_judul}`}>
                <Flex
                    height={{ base: "250px" }}
                    width={{ base: "640px" }}
                    bg="white"
                    rounded={10}
                >
                    <Flex
                        flexDirection="column"
                        gap={{ base: 0, md: 2 }}
                        alignItems={{ base: "center", md: "flex-start" }}
                        paddingTop={{ base: "150px" }}
                        paddingLeft={10}
                    >
                        <Flex display={{ base: "none", md: "undefined" }}>
                            <Image src="static/images/Line.svg" alt={""} />
                        </Flex>
                        <Text
                            textAlign={{ base: "center", md: "left" }}
                            fontSize={{ base: "12px", md: "16px" }}
                            color={"#500D7D"}
                        >
                            <b> {nama_judul} </b> <br />{" "}
                            <span style={{ color: "#000000" }}>
                                jam yang lalu
                            </span>
                        </Text>
                    </Flex>
                    <Spacer />
                    <Box>
                        <Image
                            h={{ base: "250px" }}
                            src={`${gambar_src}`}
                            borderRightRadius="10"
                            alt={"Gambar Artikel"}
                        />
                    </Box>
                </Flex>
            </a>
        </>
    );
}

export default RumbacaCard;
