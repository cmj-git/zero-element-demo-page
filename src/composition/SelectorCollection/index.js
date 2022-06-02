import React from 'react';
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import NamedSelector from '@/pages/DomeCart/NamedSelector'
import { ChakraProvider,Center,Flex,Box} from "@chakra-ui/react";
import NextIndicator from 'zero-element-boot/lib/components/indicator/NextIndicator'

 import Sandbox from '@/pages/DomeCart/DomeCartList/Sandbox'

import RightIconIndicatorDefault from '@/pages/DomeCart/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/pages/DomeCart/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/pages/DomeCart/RightIconIndicatorSelected';

import OutlineShaowSelectorDefault from '@/pages/DomeCart/OutlineShaowSelectorDefault';
import OutlineShaowSelectorHover from '@/pages/DomeCart/OutlineShaowSelectorHover';

import SimpleCart from '@/pages/DomeCart/SimpleCart';

import TitleContainer from '@/pages/DomeCart/TitleContainer'


import OutlineShaowSelector from '@/composition/SelectorCollection/OutlineShaowSelector'
import Select from '@/composition/SelectorCollection/Select'





export default function TestRight(props) {
  

     return (
        <>
 <SimpleCart fill='#F0F4F7' width=''padding='30px'marign='50px' shadow = '0 0px 10px rgba(0, 0, 0, 0.14)'> 
     <Box >
        <SimpleCart padding='0px'marign='30px'>
           <TitleContainer title='RightIconIndicator'  space='4px' fontWeight='bold'>
                <Select />
            </TitleContainer>
        </SimpleCart>

        <SimpleCart padding='0px'marign='30px'>
              <TitleContainer title='SimpleCart' space='4px' fontWeight='bold'>
                    <OutlineShaowSelector />
            </TitleContainer>
        </SimpleCart>
    </Box>
 </SimpleCart>
        </> 
    )

}

  






//  <NamedSelector defaultIndicator={RightIconIndicatorDefault} 
//                hoverIndicator={RightIconIndicatorHover}
//                selectedIndicator={RightIconIndicatorSelected} selected  > 
//     <ItemPlaceholder />
// </NamedSelector>   




//  <RightIconIndicatorDefault defaultHoverStyles >
//     <ItemPlaceholder />
// </RightIconIndicatorDefault>

// <RightIconIndicatorHover>
//     <ItemPlaceholder />
// </RightIconIndicatorHover>

// <RightIconIndicatorSelected>
//     <ItemPlaceholder />
// </RightIconIndicatorSelected>


// <RightIconIndicatorSelected>
//     <NextIndicator>
//     <ItemPlaceholder />
//     </NextIndicator>
// </RightIconIndicatorSelected>


// <RightIconIndicatorDefault>
//     <RightIconIndicatorHover>
//                 <ItemPlaceholder />
//     </RightIconIndicatorHover>
// </RightIconIndicatorDefault>