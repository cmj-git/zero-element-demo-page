import React from 'react';
import { AutoLayout } from 'zero-element-boot';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import ListItem from './listItem'

export default function index(props) {
  

  const { endpoint }=props;

  // const api =endpoint +'/lc/apps/app'

  const api = '/api/AutoPageList';

  const [data] = useTokenRequest({ api });
  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Flexbox',
      props: {
          align: 'start',
          direction: 'row',
          justify: 'center'
      },
      
  cart: {
    xname: 'Cart',
    props: {
      margin: '0',
      corner: 0,
      linewidth: '0',
      padding: '10px 25px',
      isOnHover: false
    }
  },

      container: 'PlainList'
    },
    ...props,
  };




  console.log(data,'==data');
  
      return (   
             <AutoLayout {...config}  >
                 <ListItem/>
             </AutoLayout>
                
  )
}