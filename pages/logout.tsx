import React, { SyntheticEvent, useEffect, useState } from "react";
import {
    Box,
    Image,
    Stack,
    Flex,
    Heading,
    Text,
    Select,
    Center,
    useToast,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Link,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "../layout/Footer";
import useAuth from "../hooks/useAuth";

export default function Logout() {
    const { logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        logout();
        router.push("/");
    }, [logout, router]);
    return (
        <>
            <Head>
                <title>Logout</title>
            </Head>

            <Center
                position="relative"
                minHeight="100vh"
                bgColor="#373360"
                transform="auto"
                css={`
                    background: url(static/images/noise.png), #200655;
                    background-repeat: repeat;
                `}
            >
                <VStack align={"center"} gap={"10"}>
                    <Heading fontSize={"4xl"} color={"white"}>
                        Anda telah logout
                    </Heading>
                    <Box
                        rounded={"lg"}
                        bg={"white"}
                        boxShadow={"lg"}
                        p={8}
                        w={"60vw"}
                        maxW={"40rem"}
                    >
                        <Text fontSize="lg">
                            Anda akan segea dialihkan ke halaman utama sesaat
                            lagi. Jika belum, silahkan klik{" "}
                            <Link href="/">
                                <Text
                                    as="span"
                                    color="blue.300"
                                    textDecor="underline"
                                    cursor="pointer"
                                >
                                    link ini
                                </Text>
                            </Link>
                            .
                        </Text>
                    </Box>
                </VStack>
            </Center>
            <Footer />
        </>
    );
}
