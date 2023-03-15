import React from "react";
import Head from "next/head";
import HeaderLayout from "../../layout/Header";
import { Box } from "@chakra-ui/react";
import { Heading, List, ListItem, OrderedList, Text, VStack, Container} from "@chakra-ui/layout";

function SectionTentangKami({ title="", content="" }: {title: string, content: string | React.ReactNode}) {
    return (
        <VStack as="section" spacing="4" alignItems="flex-start">
            <Heading size="3xl" color="#FEE56C">{title}</Heading>
            <Text fontSize="xl" color="white" textAlign="justify">{content}</Text>
        </VStack>
    )
}

function GambaranUmum() {
    return (
        <Container 
            as="main"
            maxW="container.lg"
            py="16"
        >
            <VStack 
                spacing={16}
                align="stretch"
            >
                <SectionTentangKami 
                    title="Apa itu Skhole?"
                    content="Skhole—ITB Mengajar merupakan Badan Semi Otonom (BSO) Kabinet KM ITB yang bergerak di bidang Pendidikan dengan berinteraksi dan bertanggung jawab kepada masyarakat dan bersifat nirlaba. Skhole—ITB Mengajar didirikan di Bandung, 12 November 2010 sebagai hasil peleburan antara Forum Kakak Asuh (FKA) dan Rumah Belajar (Rumbel) KM ITB. Skhole berasal dari kata skhole, scola, scolae atau schola dari bahasa Yunani. Keempatnya punya arti sama, yaitu “waktu luang yang digunakan secara khusus untuk belajar” atau “leisure devoted to learning”."
                />
                <SectionTentangKami 
                    title="Asas Skhole"
                    content={
                        <>
                            Asas Skhole-ITB Mengajar berlandaskan Pancasila, terdiri dari:
                            <List>
                                <ListItem>A. Spiritualitas</ListItem>
                                <ListItem>B. Moralitas</ListItem>
                                <ListItem>C. Kekeluargaan</ListItem>
                                <ListItem>D. Pewadahan dan Keorganisasian</ListItem>
                                <ListItem>E. Sosial Kemasyarakatan</ListItem>
                            </List>
                        </>
                    }
                />
                <SectionTentangKami 
                    title="Tujuan Skhole"
                    content="Tujuan Skhole—ITB Mengajar ialah mewujudkan sekolah besar terintegrasi sebagai wahana mahasiswa S1 ITB berkontribusi kepada masyarakat sekitar kampus ITB di bidang pendidikan."
                />
                <SectionTentangKami 
                    title="Fungsi Skhole"
                    content={
                        <List>
                            <ListItem>A. Skhole—ITB Mengajar berfungsi untuk memberikan pelayanan berupa kegiatan belajar mengajar kepada adik-adik yang berkegiatan di rumah belajar.</ListItem>
                            <ListItem>B. Skhole—ITB Mengajar berfungsi sebagai fasilitator, mediator, dan informan bagi mahasiswa ITB dan masyarakat dalam bidang pendidikan.</ListItem>
                        </List>
                    }
                />
            </VStack>
        </Container>
    )
}


export default function TentangKami() {
    return (
        <>
            <Head>
                <title>Tentang Kami - Skhole 2022</title>
            </Head>
            <HeaderLayout
                title="Tentang Kami"
                subtitle="“Mengenal lebih dalam tentang Skhole”"
            />
            <Box background="#200655" backgroundRepeat="repeat">
                <GambaranUmum />
            </Box>
        </>
    );
}
