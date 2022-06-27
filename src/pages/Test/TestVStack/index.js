import React from 'react'
import VStack from '@/components/layout/VStack'
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Flex, Text, Center } from '@chakra-ui/react'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import Gridbox from 'zero-element-boot/lib/components/layout/Gridbox';
import Wrap from 'zero-element-boot/lib/components/layout/Wrap';
import Container from 'zero-element-boot/lib/components/container/Container'
// import { Stack, HStack, VStack ,StackDivider} from '@chakra-ui/react'

export default function index(){
    return(
        // <CssCart width='720px' padding='10px' backgroundColor='#f8f9fa'>
        <Container>
                <Wrap>

                    <CssCart width='260px' margin='10px'>
                       <ItemPlaceholder bg='#ffffff' />
                    </CssCart>

                    <CssCart width='260px' margin='10px'>
                         <ItemPlaceholder bg='#ffffff' />
                    </CssCart> 

                    <CssCart width='260px' margin='10px'> 
                        <ItemPlaceholder bg='#ffffff' />
                    </CssCart>
                
                    <CssCart width='260px' margin='10px'>
                        <ItemPlaceholder bg='#ffffff' />
                    </CssCart>
                    
                    <CssCart width='260px' margin='10px'>
                        <ItemPlaceholder bg='#ffffff' />
                    </CssCart>
                    
                    <CssCart width='260px' margin='10px'>
                        <ItemPlaceholder bg='#ffffff' />
                    </CssCart>
                    
                    <CssCart width='260px' margin='10px'>
                        <ItemPlaceholder bg='#ffffff' />
                    </CssCart>
                    <CssCart width='260px' margin='10px'>
                        <ItemPlaceholder bg='#ffffff' />
                    </CssCart>
                </Wrap>
        </Container>

        //</CssCart> 


        // <CssCart width='1720px' padding='10px' backgroundColor='#f8f9fa'>
        //         <VStack divider={<StackDivider borderColor='gray.200' />}
        //             spacing={32}
        //             align='stretch'
        //              >
        //             <CssCart width='260px' margin='10px'>
        //             <ItemPlaceholder bg='#ffffff' />
        //             </CssCart>

        //             <CssCart width='260px' margin='10px'>
        //             <ItemPlaceholder bg='#ffffff' />
        //             </CssCart>

        //             <CssCart width='260px' margin='10px'>
        //             <ItemPlaceholder bg='#ffffff' />
        //             </CssCart> 

        //             <CssCart width='260px' margin='10px'> 
        //             <ItemPlaceholder bg='#ffffff' />
        //             </CssCart>

        //             <CssCart width='260px' margin='10px'>
        //             <ItemPlaceholder bg='#ffffff' />
        //             </CssCart>
        //         </VStack>
        // </CssCart>

    )
}