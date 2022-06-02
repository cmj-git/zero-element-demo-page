import React from 'react';
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import NamedSelector from '@/pages/DomeCart/NamedSelector'
import { ChakraProvider,Center,Flex,Box} from "@chakra-ui/react";
import NextIndicator from 'zero-element-boot/lib/components/indicator/NextIndicator'

 import Sandbox from '@/pages/DomeCart/DomeCartList/Sandbox'



// import RightIconIndicatorDefault from 'zero-element-boot/lib/components/indicator/RightIconIndicatorDefault';
// import RightIconIndicatorHover from 'zero-element-boot/lib/components/indicator/RightIconIndicatorHover';
// import RightIconIndicatorSelected from 'zero-element-boot/lib/components/indicator/RightIconIndicatorSelected';
import RightIconIndicatorDefault from '@/pages/DomeCart/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/pages/DomeCart/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/pages/DomeCart/RightIconIndicatorSelected';

import OutlineShaowSelectorDefault from '@/pages/DomeCart/OutlineShaowSelectorDefault';
import OutlineShaowSelectorHover from '@/pages/DomeCart/OutlineShaowSelectorHover';








export default function TestRight(props) {
  

     return (
        <>


<NamedSelector defaultIndicator={OutlineShaowSelectorDefault} 
                hoverIndicator={OutlineShaowSelectorHover} selected  > 
    <ItemPlaceholder />
 </NamedSelector> 

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