
import React from 'react';
import { ChakraProvider,Center,Flex} from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
import layout from './layout';
import Presenter from './Presenter';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';


export default function Index (props) {

    let api ='/api/DomeCartListData'

    const [data] = useTokenRequest({ api });

  /**
   * 页面配置
   */
  const config = {
    items: data.length > 0 ? data : [],
    layout: layout

  };

  return (
    <ChakraProvider>
       <Center bg='#f4f3f2'>
               <AutoLayout {...config} data={data}>
                    <Presenter />
               </AutoLayout>
        </Center>
    </ChakraProvider>

  )
}