import React from "react";
import Head from "next/head";
import HeaderLayout from "../../layout/Header";
import { Box, Card, CardBody } from "@chakra-ui/react";
import { Heading, List, ListItem, OrderedList, Text, VStack, Container, Grid, GridItem } from "@chakra-ui/layout";
import Image from "next/image";
import Kepsek from "assets/images/tentang-kami/kepsek.jpg"
import KepsekMulKam from "assets/images/tentang-kami/kepsek_mulkam.jpg"
import Sekjen from "assets/images/tentang-kami/sekjen.jpg"
import SekjenMulkam from "assets/images/tentang-kami/sekjen_mulkam.jpg"
import KabidBonbit from "assets/images/tentang-kami/kabid_bonbit.jpg"
import KabidCimbel from "assets/images/tentang-kami/kabid_cimbel.jpg"
import KabidCaheum from "assets/images/tentang-kami/kabid_caheum.jpg"
import KabidMedkom from "assets/images/tentang-kami/kabid_medkom.jpg"
import WaKabidMedkom from "assets/images/tentang-kami/wakabid_medkom.jpg"
import KabidEksternal from "assets/images/tentang-kami/kabid_eksternal.jpg"
import KabidMP from "assets/images/tentang-kami/kabid_mp.jpg"
import Sekretaris1 from "assets/images/tentang-kami/sekretaris2.jpg"
import Sekretaris2 from "assets/images/tentang-kami/sekretaris1.jpg"
import Bendahara1 from "assets/images/tentang-kami/bendahara1.jpg"
import Bendahara2 from "assets/images/tentang-kami/bendahara2.jpg"
import Bendahara3 from "assets/images/tentang-kami/bendahara3.jpg"
import Bendahara4 from "assets/images/tentang-kami/bendahara4.jpg"
import SekretarisMulkam from "assets/images/tentang-kami/sekretaris_mulkam.jpg"
import BendaharaMulkam from "assets/images/tentang-kami/bendahara_mulkam.jpeg"
import KadivMIMulkam from "assets/images/tentang-kami/kadiv_internal_mulkam.jpg"
import KadivRanca from "assets/images/tentang-kami/kadiv_rumbel_mulkam.jpg"
import KadivRelMasMulkam from "assets/images/tentang-kami/kadiv_relmas_mulkam.jpg"
import KadivIntraMulkam from "assets/images/tentang-kami/empty.png"
import KadivKaderMulkam from "assets/images/tentang-kami/empty.png"
import KadivPengajaranBonbit from "assets/images/tentang-kami/kadiv_pengajaran_bonbit.jpg"
import KadivRelmasBonbit from "assets/images/tentang-kami/kadiv_relmas_bonbit.jpg"
import SAPengajaranBonbit from "assets/images/tentang-kami/sa_pengajaran_bonbit.jpg"
import SARelmasBonbit from "assets/images/tentang-kami/sa_relmas_bonbit.jpg"
import KadivPengajaranCimbel from "assets/images/tentang-kami/kadiv_pengajaran_cimbel.jpg"
import KadivRelmasCimbel from "assets/images/tentang-kami/kadiv_relmas_cimbel.jpg"
import SARelmasCimbel from "assets/images/tentang-kami/sa_relmas_cimbel.jpg"
import KadivPengajaranCaheum from "assets/images/tentang-kami/kadiv_pengajaran_caheum.jpg"
import KadivRelmasCaheum from "assets/images/tentang-kami/kadiv_relmas_caheum.jpg"
import KadivPropa from "assets/images/tentang-kami/kadiv_propa.jpg"
import KadivIT from "assets/images/tentang-kami/kadiv_IT.jpg"
import KadivKreatif from "assets/images/tentang-kami/kadiv_kreatif.jpg"
import SAPropa from "assets/images/tentang-kami/sa_propa.jpg"
import SAIT from "assets/images/tentang-kami/sa_IT.jpg"
import WakadivKreatif from "assets/images/tentang-kami/wakadiv_kreatif.jpg"
import KadivInkam from "assets/images/tentang-kami/kadiv_inkam.jpg"
import KadivEkskam from "assets/images/tentang-kami/kadiv_ekskam.jpg"
import KadivKader from "assets/images/tentang-kami/kadiv_kaderisasi.jpeg"
import KadivMI from "assets/images/tentang-kami/kadiv_mi.jpg"
import SAKader from "assets/images/tentang-kami/empty.png"
import SAMI1 from "assets/images/tentang-kami/sa_mi1.jpg"
import SAMI2 from "assets/images/tentang-kami/empty.png"

function SectionTentangKami({ title="", content="", }: {title: string, content: string | React.ReactNode}) {
    return (
        <VStack as="section" spacing="4" alignItems="flex-start">
            <Heading size="3xl" color="#FEE56C">{title}</Heading>
            <Box fontSize="xl" color="white" textAlign="justify">{content}</Box>
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

function Personil({ nama, jabatan, gambar }: {nama: string, jabatan: string, gambar: any}) {
    return (
        <GridItem>
            <Card width="275px" mx="auto" border="none" boxShadow="none">
                <CardBody p="0">
                    <Box width="225px" mx="auto">
                        <Image src={gambar} alt=""/>
                    </Box>
                    <Heading color="white" size="md" textAlign="center" py={2}>{nama}</Heading>
                    <Text color="white" textAlign="center">{jabatan}</Text>
                </CardBody>
            </Card>
        </GridItem>
    )
}

function Organogram() {
    return (
        <Container maxW="container.xl" >
            <Heading mb={10} size="3xl" color="#FEE56C" textAlign="center">Organogram</Heading>
            <VStack spacing={20}>
                <Grid
                    templateColumns="repeat(auto-fit, 300px)" 
                    width="100%"
                    justifyContent="space-evenly"
                    >
                    <Personil nama="Raden M. Akmal B." jabatan="Kepala Sekolah" gambar={Kepsek} />
                    <Personil nama="Ardyanto Rizky Pratama" jabatan="Kepala Sekolah Multikampus" gambar={KepsekMulKam} />
                </Grid>
                <Grid
                    templateColumns="repeat(auto-fit, 300px)" 
                    width="100%"
                    justifyContent="space-evenly"
                    >
                    <Personil nama="M. Fathan Fikri M." jabatan="Sekretaris Jenderal" gambar={Sekjen} />
                    <Personil nama="Aswien Ahmad Irfani" jabatan="Sekretaris Jenderal Multikampus" gambar={SekjenMulkam} />
                    <Personil nama="Fatihah Jaza Aufa" jabatan="Kepala Bidang Rumbel Kebon Bibit" gambar={KabidBonbit} />
                    <Personil nama="Nabila Salma Nareswari" jabatan="Kepala Bidang Rumbel Cicaheum" gambar={KabidCaheum} />
                </Grid>
                <Grid
                    templateColumns="repeat(auto-fit, 300px)" 
                    width="100%"
                    justifyContent="space-evenly"
                    >
                    <Personil nama="Hana Fathiyah" jabatan="Kepala Bidang Rumbel Ciumbuleuit" gambar={KabidCimbel} />
                    <Personil nama="Alysha Putri Anggadinata" jabatan="Kepala Bidang Medkominfo" gambar={KabidMedkom} />
                    <Personil nama="Alvin" jabatan="Wakil Kepala Bidang Medkominfo" gambar={WaKabidMedkom} />
                </Grid>
                <Grid
                    templateColumns="repeat(auto-fit, 300px)" 
                    width="100%"
                    justifyContent="space-evenly"
                    >
                    <Personil nama="Rifky Wahyu Saputra" jabatan="Kepala Bidang Eksternal" gambar={KabidEksternal} />
                    <Personil nama="Salsabila Gitta Arifani" jabatan="Kepala Bidang Manajemen Personalia" gambar={KabidMP} />
                </Grid>
                <Heading size="xl" color="#FEE56C" textAlign="center">Bidang Kesekjenan</Heading>
                <VStack width="100%" spacing={20}>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Adelline Kania Setiyawan" jabatan="Sekretaris" gambar={Sekretaris1} />
                        <Personil nama="Amelia Rahma Putri" jabatan="Sekretaris" gambar={Sekretaris2} />
                    </Grid>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Finta Aulia Andiva" jabatan="Bendahara" gambar={Bendahara1} />
                        <Personil nama="M. Ihsan Driramanugraha" jabatan="Bendahara" gambar={Bendahara2} />
                        <Personil nama="Aqmarina Nazmi Maolana" jabatan="Bendahara" gambar={Bendahara3} />
                        <Personil nama="Tesalonika Angela Putri M." jabatan="Bendahara" gambar={Bendahara4} />
                    </Grid>
                </VStack>
                <Heading size="xl" color="#FEE56C" textAlign="center">Bidang Multikampus</Heading>
                <VStack width="100%" spacing={20}>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Kayla Divani" jabatan="Sekretaris Multikampus" gambar={SekretarisMulkam} />
                        <Personil nama="Nareswari Raissa N." jabatan="Bendahara Multikampus" gambar={BendaharaMulkam} />
                        <Personil nama="Agung Bagas Mahendra" jabatan="Kepala Divisi Manajemen Internal Multikampus" gambar={KadivMIMulkam} />
                        <Personil nama="Zaidah Tamimi Nikmah" jabatan="Kepala Divisi Rumbel Rancaekek" gambar={KadivRanca} />
                    </Grid>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Ruwita Sari Marpaung" jabatan="Kepala Divisi Relasi Masyarakat Multikampus" gambar={KadivRelMasMulkam} />
                        <Personil nama="Novyta Sari Hasibuan" jabatan="Kepala Divisi Intrakampus Multikampus" gambar={KadivIntraMulkam} />
                        <Personil nama="Muhammad Dafa Ghifari" jabatan="Ketua Divisi Kaderisasi Multikampus" gambar={KadivKaderMulkam} />
                    </Grid>
                </VStack>
                <Heading size="xl" color="#FEE56C" textAlign="center">Bidang Rumbel Kebon Bibit</Heading>
                <VStack width="100%" spacing={20}>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Iftihah Sudiono" jabatan="Kepala Divisi Pengajaran Kebon Bibit" gambar={KadivPengajaranBonbit} />
                        <Personil nama="Yosua Martona Ardian" jabatan="Staff Ahli Pengajaran Kebon Bibit" gambar={SAPengajaranBonbit} />
                        <Personil nama="Fasya Andinda Sukma" jabatan="Kepala Divisi Relasi Masyarakat Kebon Bibit" gambar={KadivRelmasBonbit} />
                        <Personil nama="Marsya Az-zahra" jabatan="Staff Ahli Relasi Masyarakat Kebon Bibit" gambar={SARelmasBonbit} />
                    </Grid>
                </VStack>
                <Heading size="xl" color="#FEE56C" textAlign="center">Bidang Rumbel Ciumbuleuit</Heading>
                <VStack width="100%" spacing={20}>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Isfahan Shah Lubis" jabatan="Kepala Divisi Pengajaran Ciumbuleuit" gambar={KadivPengajaranCimbel} />
                        <Personil nama="Julian Syaputra I." jabatan="Kepala Divisi Relasi Masyarakat Ciumbuleuit" gambar={KadivRelmasCimbel} />
                        <Personil nama="Jovinka Natalie Xeliem" jabatan="Staff Ahli Relasi Masyarakat Ciumbuleuit" gambar={SARelmasCimbel} />
                    </Grid>
                </VStack>
                <Heading size="xl" color="#FEE56C" textAlign="center">Bidang Rumbel Cicaheum</Heading>
                <VStack width="100%" spacing={20}>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Vanda Sekar Annisa" jabatan="Kepala Divisi Pengajaran Cicaheum" gambar={KadivPengajaranCaheum} />
                        <Personil nama="Khairani Khairunnisa" jabatan="Kepala Divisi Relasi Masyarakat Cicaheum" gambar={KadivRelmasCaheum} />
                    </Grid>
                </VStack>
                <Heading size="xl" color="#FEE56C" textAlign="center">Bidang Medkominfo</Heading>
                <VStack width="100%" spacing={20}>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Ruth Regina" jabatan="Kepala Divisi Propaganda" gambar={KadivPropa} />
                        <Personil nama="Eiffel Aqila Amarendra" jabatan="Kepala Divisi IT" gambar={KadivIT} />
                        <Personil nama="Kezia Christy Wibowo" jabatan="Kepala Divisi Kreatif" gambar={KadivKreatif} />
                    </Grid>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Eunike Mercy" jabatan="Staff Ahli Propaganda" gambar={SAPropa} />
                        <Personil nama="Natanael Dias" jabatan="Staff Ahli IT" gambar={SAIT} />
                        <Personil nama="Ariansyah" jabatan="Wakil Kepala Divisi Kreatif" gambar={WakadivKreatif} />
                    </Grid>
                </VStack>
                <Heading size="xl" color="#FEE56C" textAlign="center">Bidang Eksternal</Heading>
                <VStack width="100%" spacing={20}>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="A'isyah Nadhirazana P. M." jabatan="Kepala Divisi Ekstrakampus" gambar={KadivEkskam} />
                        <Personil nama="M. Rizhan Fateha" jabatan="Kepala Divisi Intrakampus" gambar={KadivInkam} />
                    </Grid>
                </VStack>
                <Heading size="xl" color="#FEE56C" textAlign="center">Bidang Manajemen Personalia</Heading>
                <VStack width="100%" spacing={20}>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Iqbal Baihaki" jabatan="Kepala Divisi Kaderisasi" gambar={KadivKader} />
                        <Personil nama="Billa Alfatika" jabatan="Kepala Divisi Manajemen Internal" gambar={KadivMI} />
                    </Grid>
                    <Grid
                        templateColumns="repeat(auto-fit, 300px)" 
                        width="100%"
                        justifyContent="space-evenly"
                        >
                        <Personil nama="Amalia Rahman" jabatan="Staff Ahli Kaderisasi" gambar={SAKader} />
                        <Personil nama="Syahna Alifya Saffanah" jabatan="Staff Ahli Manajemen Internal" gambar={SAMI1} />
                        <Personil nama="Tri Zakia Audia Malika" jabatan="Staff Ahli Manajemen Internal" gambar={SAMI2} />
                    </Grid>
                </VStack>
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
                <Organogram />
            </Box>
        </>
    );
}
