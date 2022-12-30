import React from 'react'
import { Box, Center, Heading, Image } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';

export default function ComingSoon() {
    // Create a ref to store the text element
    const textRef = useRef<HTMLDivElement>(null);

    // Use state to store the current mouse position
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Update the mouse position when the mouse moves
    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
        setMousePos({ x: event.clientX, y: event.clientY });
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Use the ref and the mouse position to update the text element's position
    useEffect(() => {
        if (textRef.current) {
        const sensitivity = 0.1; // adjust this value to control the sensitivity
        const textEl = textRef.current;
        textEl.style.transform = `translate(${(mousePos.x - 750) * sensitivity}px, ${(mousePos.y - 100) * sensitivity}px)`;
        }
    }, [mousePos]);
    
    return (
        <>
            <Head>
                <title>Coming Soon - Skhole 2022</title>
            </Head>
            <Center
                minH="100vh"
                minW="100vw"
                bgImage='static/images/cs-background.svg'
                bgSize='cover'
                top={0}
                bottom={0}
                left={0}
                right={0}

                overflow='hidden'
            >
                <Heading 
                    color='white' 
                    size={{base: 'xl', md: '2xl', lg: '4xl'}} 
                    textShadow='0 0 20px #200655'
                    
                    position='absolute' 
                    zIndex='10'

                    ref={textRef}
                >
                    COMING SOON!
                </Heading>

                <Image
                    height={{base: '50vh', md: '65vh', xl: '80vh'}}
                    minW="100vw"
                    position='absolute'
                    zIndex='15'
                    objectFit='cover'
                    objectPosition='20% top'
                    src='static/images/cs-rocks.svg'
                    bottom={0}
                    left={0}
                />
                <Image 
                    h='100vh'
                    minW="100vw"
                    m='auto'
                    position='absolute'
                    objectFit='cover'
                    objectPosition='50% 40%'
                    zIndex='5'
                    src='static/images/cs-sun.svg'
                />
                <Image 
                    display={{base: 'none', sm: 'block'}}
                    h='auto'
                    minW='50px'
                    m='auto'
                    position='absolute'
                    zIndex='6'
                    src='static/images/cs-planet1.svg'
                    right='5'
                    top='20%'
                />
                <Image 
                    h='auto'
                    minW='50px'
                    m='auto'
                    position='absolute'
                    zIndex='7'
                    src='static/images/cs-planet2.svg'
                    left='5'
                    top='0'
                />
            </Center>
        </>
    )
}