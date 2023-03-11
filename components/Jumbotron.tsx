import { Box, Center, Heading, Image, Text, Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

export default function Jumbotron() {
    return (
        <>
            <Center
                position="relative"
                overflow="hidden"
                height="40vh"
                borderBottomRadius={50}
                mx="auto"
                css={`
                    background: url(static/images/noise.png),
                        linear-gradient(180deg, #050038 0%, #0e2fb2 100%);
                    background-repeat: repeat;
                `}
            >
                {/* Text */}
                <Flex zIndex="10" direction="column" align="center">
                    <Heading
                        fontSize={{
                            base: "36px",
                            sm: "52px",
                            md: "64px",
                            lg: "80px",
                        }}
                        color="white"
                    >
                        Hai,{" "}
                        <span style={{ color: "#FEE56C" }}>Skholeans!</span>
                    </Heading>
                    <Text color="white">
                        Mari berjelajah di dunia skholeverse
                    </Text>
                </Flex>

                {/* Decoration */}
                <Box
                    position="absolute"
                    minWidth="400%"
                    minHeight="50%"
                    bottom="-30%"
                    transform="auto"
                    rotate="-15deg"
                    bgGradient="linear-gradient(180deg, #ECB6E7 0%, rgba(236, 182, 231, 0) 100%)"
                    mixBlendMode="lighten"
                    opacity="0.2"
                />
                <Image
                    src="static/images/neptune.svg"
                    position="absolute"
                    width={{ base: "300px", md: "50%" }}
                    maxWidth="500px"
                    top="15vh"
                    left="-100"
                    alt={""}
                />
                <Image
                    src="static/images/moon.svg"
                    position="absolute"
                    width={{ base: "40px", md: "5%" }}
                    maxWidth="50px"
                    top="20%"
                    right="10%"
                    alt={""}
                />
            </Center>
            <SearchBar />
        </>
    );
}
