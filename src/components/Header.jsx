import { Center, Button, ButtonGroup, Heading, Flex } from '@chakra-ui/react';


export default function HeaderBanner(props) {
    const { w } = props
    return (
        <Center 
            backgroundImage="url('src/assets/1325121.png')" 
            h='40vh' 
            color='white' 
            w={w} 
            flexDirection='column'
            alignItems='center'
            backgroundSize={'cover'}>
            <Heading fontWeight={100}>DOMINA EL TERRENO</Heading>
            <Flex flexWrap="wrap" gap={8} mt={5}>
                <Button colorScheme='transparent' variant={'outline'} borderRadius={0} _hover={{bg: "#fff" , color:"#000"}}>
                    VER DETALLES
                </Button>
                <Button colorScheme='transparent' variant={'outline'} borderRadius={0} _hover={{bg: "#fff" , color:"#000"}}>
                    VER VIDEO
                </Button>
            </Flex>
        </Center>
    );
}