import React from 'react';
import { Flex } from '@chakra-ui/react'
import Cart from 'zero-element-boot/lib/components/cart/Cart';


export default function Sekected(props) {

    const { children, ...defaultSelectedStyles } = props;

    const styles = {
        position: 'relative',
        // border:'1px #ff0000 solid',
        margin: '4px 2px auto 30px',
        ...defaultSelectedStyles

    }


    return (
        <Flex>
            <div style={styles}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ced4da" class="bi bi-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                </svg>
            </div>
                {
                    React.Children.map(children, child => (
                        child
                    ))
                }
        </Flex>
    )
}
