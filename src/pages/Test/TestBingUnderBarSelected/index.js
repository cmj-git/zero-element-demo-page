import React from 'react'
import BingUnderBarSelected from '@/components/indicator/BingUnderBarSelected'
import Selected from '@/components/indicator/BingUnderBarSelected/Selected'

import ItemPlaceholder from '@/pages/ItemPlaceholder'
import { Flex } from '@chakra-ui/react'
import SimpleCart from '@/pages/DomeCart/SimpleCart';



export default function index(){
    return(
     <Flex>
      
        <SimpleCart width='160px'height='230px' margin='10px'>
            <Selected fill='#000000' size='6px' direction='left'>
                <h1>11</h1>
            </Selected>
        </SimpleCart>
        
        <SimpleCart width='160px'height='230px' margin='10px'>
            <Selected fill='green' size='10px' direction='right'>
                <h1>11</h1>
            </Selected>
        </SimpleCart>

        <SimpleCart width='160px'height='230px'margin='10px'>
            <Selected >
                <h1>11</h1>
            </Selected>
        </SimpleCart>

       

       
</Flex>
    )
}