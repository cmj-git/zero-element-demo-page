
import React from 'react';
import { ChakraProvider,Center,Flex} from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import Presenter from './Presenter';


export default function Index (props) {

   
  const { onItemClick,endpoint,...rest}=props;

  // const api =endpoint +'/lc/components/cart'

  //  let api ='/api/DomeCartListData'
   const api = '/api/DomeCartListData';

  const [data] = useTokenRequest({ api });

    
  /**
   * 页面配置
   */
  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Gridbox',
      props: {
        columns: 2
      },
      // container: 'PlainList'
      // container: 'SelectList',
      container: 'GroupedList',
      presenter: 'AutoCartSet',

      
    }
   
  };
  
      return (
          <Center bg='#ffffff'>
                  <AutoLayout {...config} data={data} onItemClick={onItemClick}  />
                        
          </Center>

  )
}