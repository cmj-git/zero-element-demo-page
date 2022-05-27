// import React from 'react';
// import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox'
// import Cart from 'zero-element-boot/lib/components/cart/Cart';
// import CartItemPlaceholder from '@/pages/CartItemPlaceholder';


// export default function TestPageCart(props){
//     return(
//         <Cart>
//             <Flexbox  align='center'>
//                 <CartItemPlaceholder />
//                 <CartItemPlaceholder />
//                 <CartItemPlaceholder />
//             </Flexbox>
//         </Cart>
//     )
// }


import React from 'react';
import { ChakraProvider,Center} from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';

// import layout from '../../layout';
import layout from '@/pages/TestCart/TestList/layout';


export default function Index (props) {

  const { data = [] } = props;

  /**
   * 页面配置
   */
  const config = {
    items: data.length > 0 ? data : [],
    layout: layout
  };

  const onJarItemClick = (item) => {
    //TODO
    console.log(item, ' === item')
  }
  console.log(data, ' === item')

  return (
    <Center>
      <ChakraProvider>
              <AutoLayout {...config} onItemClick={onJarItemClick} />
      </ChakraProvider>
    </Center>
  )
}