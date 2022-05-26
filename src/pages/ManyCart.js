import React from 'react';

import { AutoLayout } from 'zero-element-boot';


export default function ItemPlaceholderDemo(props) {

  // const { width='100px' } = props;

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
          align: 'center',
          direction: 'column',
          justify: 'center'
      },
      children: [
        {
        
         
        },
        {
          presenter: 'Holder',
         cart: {
            xname: 'Cart',
            props: {
              // padding: '16px',
              margin: '0',
              corner: 0,
              linewidth: '0',
              padding: '10px 25px',
              isOnHover: false
            }
          },
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                width: 'width'
              }
            }
          }
        },
        {
          presenter: 'Holder',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                width: 'width'
              }
            }
          }
        },
        {
          presenter: 'Holder',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                width: 'width'
              }
            }
          }
        },
      ]
    },
    ...props,
  };

  return ( <AutoLayout  {...config} />)

}