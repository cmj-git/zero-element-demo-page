import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import { Flex, Text, Center, Box } from '@chakra-ui/react'
import CheckBoxIndicatorCart from 'zero-element-boot/lib/components/indicator/CheckBoxIndicatorCart';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import SimpleCart from '@/pages/DomeCart/SimpleCart'




export default function PattemCart(props) {
    console.log('CartItemPlaceholder==', props)

    const { cart, fontSize, color, title, margin, } = props

    const { selected, content_fill } = cart

    console.log("xname===", cart)
    return (
        <Flex>
            <SimpleCart margin='30px'>
                <NamedCart cart={cart} >
                    <ItemPlaceholder indicate={selected} fill={content_fill} />
                </NamedCart>
            </SimpleCart>
            <Center>
                <Box>
                    <Text fontSize= "2xl"color= "#999ca1">{cart.xname}</Text>
                </Box>
            </Center>
        </Flex>

    )
}