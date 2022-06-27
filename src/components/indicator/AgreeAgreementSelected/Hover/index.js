import React from 'react';

import { Flex } from '@chakra-ui/react'
import Cart from 'zero-element-boot/lib/components/cart/Cart';


export default function Sekected(props) {

    const { children, ...defaultSelectedStyles } = props;

    const styles = {
        position: 'relative',
        margin: '0',
        ...defaultSelectedStyles
    }


    return (
        <Flex>
            <Cart  padding='0' margin='0' lineColor='transparent'>
                {
                    React.Children.map(children, child => (
                        child
                    ))
                }
            </Cart>

            
        </Flex>
    )
}
