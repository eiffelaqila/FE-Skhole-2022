import React, { useEffect, useState } from "react";
import {
    Box,
    Image,
    Stack,
    Flex,
    Heading,
    Text,
    Select,
} from "@chakra-ui/react";
import Head from "next/head";

import Footer from "../layout/Footer";
import Jumbotron from "../components/Jumbotron";
import RumbelBox from "../components/rumah-belajar/RumbelBox";

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Box
                position="relative"
                minHeight="100vh"
                bgColor="#373360"
                transform="auto"
                css={`
                    background: url(/static/images/noise.png), #200655;
                    background-repeat: repeat;
                `}
            >
                <Jumbotron />
                <RumbelBox />
            </Box>
            <Footer />
        </>
    );
}
