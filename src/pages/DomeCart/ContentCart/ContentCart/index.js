
import React from 'react';
import { ChakraProvider,Center,Flex} from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';

// import layout from '../../layout';
import layout from '@/pages/DomeCart/ContentCart/ContentCart/layout';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';


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
    <ChakraProvider>
       <Center bg='#f4f3f2'>
               <AutoLayout {...config} onItemClick={onJarItemClick} />
        </Center>
    </ChakraProvider>

  )
}