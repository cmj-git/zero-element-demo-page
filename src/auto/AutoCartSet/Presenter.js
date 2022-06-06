import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import { Flex,Center,Text } from '@chakra-ui/react'
import TitledContainer from '@/pages/DomeCart/TitledContainer/index'


/**
 * 
 * @returns 
 * 
 */


export default function DomeCartList(props) {
    console.log('CartItemPlaceholder==', props)

    const { cart } = props

    const { selected } = cart

    console.log("xname===", cart)
    return (
        
        <Flex>
            <Cart margin='20px' linewidth='0' >
                <TitledContainer title={cart.xname}  style={{textIndent:'1em',margin:'0',fontWeight:'bold'}} >
                    <NamedCart cart={cart}>
                        <ItemPlaceholder indicate={selected} fill={cart.stroke}/>
                    </NamedCart>
                 </TitledContainer>
            </Cart>
          
                {/* <Center>
                    <Text fontSize='3xl' color='#999ca1'></Text>
                </Center> */}
        </Flex>

    )
}