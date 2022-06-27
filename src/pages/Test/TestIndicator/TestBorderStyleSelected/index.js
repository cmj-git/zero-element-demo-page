import React from 'react'
import Selected from '@/components/indicator/BorderStyleSelected/Selected'
import Default from '@/components/indicator/BorderStyleSelected'

import ItemPlaceholder from '@/pages/ItemPlaceholder'
import { Flex } from '@chakra-ui/react'
import SimpleCart from '@/pages/DomeCart/SimpleCart';

export default function index(){
    return(
     <Flex>
      
        <SimpleCart width='330px'height='120px' margin='10px'>
            <Default >
               <ItemPlaceholder size= {200} />
            </Default>
        </SimpleCart>
        <SimpleCart width='130px'height='120px' margin='10px'>
            <Selected >
                <h1>11</h1>
            </Selected>
        </SimpleCart>
        <SimpleCart width='230px'height='320px'margin='10px'>
            <Selected >
                <h1>11</h1>
            </Selected>
        </SimpleCart>

              {/* <svg  width='' height='48px'>
                        <circle cx="50%" cy="60%" r="10" stroke='#ff0000' stroke-width="2.6" fill="#ffffff"/>
                          <polyline points="30 70,40 80,56 65" stroke='#ff0000'stroke-width='3' fill="#ff0000" />
                    </svg>
                     */}
   {/* <svg >
          <circle cx="50%" cy="60%" r="10" stroke='#ff0000' stroke-width="2.6" fill="#ffffff"/>
          <polyline points="143,90 150,95 156,85" fill='none'stroke='black'stroke-width='2' />
    </svg> */}
</Flex>
    )
}