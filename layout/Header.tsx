import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function HeaderLayout({
    title,
    subtitle,
    color,
}: {
    title: string;
    subtitle: string;
    color?: string;
}) {
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
            </Center>
        </>
    );
}
