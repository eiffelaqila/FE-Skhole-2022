import {
    Center,
    Flex,
    HStack,
    Heading,
    IconButton,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import EditMatpelModal from "../components/rumah-belajar/matpel/EditMatpelModal";
import DeleteMatpelModal from "../components/rumah-belajar/matpel/DeleteMatpelModal";

export default function RumbelHeaderLayout({
    id_matpel,
    nama_matpel,
    kelas,
    icon_src,
    title,
    subtitle,
    color,
}: {
    id_matpel: string;
    nama_matpel: string;
    kelas: string;
    icon_src: string;
    title: string;
    subtitle: string;
    color?: string;
}) {
    const {
        isOpen: isOpenEditModal,
        onOpen: onOpenEditModal,
        onClose: onCloseEditModal,
    } = useDisclosure();
    const {
        isOpen: isOpenDeleteModal,
        onOpen: onOpenDeleteModal,
        onClose: onCloseDeleteModal,
    } = useDisclosure();
    const [userToken, setUserToken] = useState<any>(null);
    const { authCheck } = useAuth();

    useEffect(() => {
        const token = authCheck();
        if (token) {
            setUserToken(token);
        }
    }, []);

    return (
        <>
            <Center
                w="100vw"
                maxW="100%"
                h="40vh"
                css={`
                    background: url(/static/images/noise.png),
                        ${color ? color : "#471CA8"};
                    background-repeat: repeat;
                `}
            >
                <Flex
                    flexDirection={{ base: "column", md: "row" }}
                    alignItems={"center"}
                    gap={{ base: 5, md: 25 }}
                >
                    <VStack>
                        <Heading
                            fontSize={{
                                base: "36px",
                                sm: "52px",
                                md: "64px",
                                lg: "80px",
                            }}
                            color="white"
                        >
                            {title}
                        </Heading>
                        <Text
                            fontSize={{
                                base: "lg",
                                sm: "xl",
                                md: "2xl",
                                lg: "3xl",
                            }}
                            color="#FEE56C"
                            fontWeight="bold"
                        >
                            {subtitle}
                        </Text>
                    </VStack>

                    {userToken ? (
                        <HStack>
                            <IconButton
                                variant="solid"
                                colorScheme={"teal"}
                                borderRadius={"full"}
                                size={"lg"}
                                aria-label="Edit"
                                icon={<EditIcon />}
                                onClick={onOpenEditModal}
                            />
                            <IconButton
                                variant="solid"
                                colorScheme={"red"}
                                borderRadius={"full"}
                                size={"lg"}
                                aria-label="Delete"
                                icon={<DeleteIcon />}
                                onClick={onOpenDeleteModal}
                            />
                        </HStack>
                    ) : (
                        <></>
                    )}
                </Flex>
            </Center>

            <EditMatpelModal
                isOpen={isOpenEditModal}
                onOpen={onOpenEditModal}
                onClose={onCloseEditModal}
                userToken={userToken}
                id_matpel={id_matpel}
                nama_matpel={nama_matpel}
                kelas={kelas}
                icon_src={icon_src}
            />
            <DeleteMatpelModal
                isOpen={isOpenDeleteModal}
                onOpen={onOpenDeleteModal}
                onClose={onCloseDeleteModal}
                userToken={userToken}
                id_matpel={id_matpel}
            />
        </>
    );
}
