import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import { Flex, Text, Center } from '@chakra-ui/react'

/**
 *
 * 
 * @returns 
 */


export default function DomeCartList(props) {
    console.log('CartItemPlaceholder==', props)

    const { cart, fontSize, color, title,margin } = props

    const { selected } = cart

    console.log("xname===", cart)
    return (

        
        <Flex>
            <Cart margin='20px' linewidth='0'>
                <NamedCart cart={cart}>
                    <ItemPlaceholder indicate={selected} fill={cart.stroke}/>
                </NamedCart>
            </Cart>

                <Center>
                    <Text fontSize='3xl' color='#999ca1'>{cart.xname}</Text>
                </Center>
        </Flex>

    )
}