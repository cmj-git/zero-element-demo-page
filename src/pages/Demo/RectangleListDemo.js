import React from 'react';

import { NamedList, NamedLayout, NamedCart } from "@/components";

const { RectangleItem } = require('@/presenter/composition')

export default function RectangleListDemo(props){

    /**
     * cart 
     * name: '', ( Cart, HoverShadowCart, HightlightCart)
     */

    const config = {
        items:[
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title111',  subTitle:'subTitle111',},
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title222',  subTitle:'subTitle222',},
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title333',  subTitle:'subTitle333',},
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title444',  subTitle:'subTitle444',},
          ],
        template:{
            layout: {
                name:'Flexbox',
                props: {
                    align: 'start', 
                    direction: 'row',
                    itemStyle:{
                        width: ''
                    }
                },
            },
            cart:{
                name: 'Rectangle',
                props: {
                },
            }
        }
        

    };

    return (
        <NamedList name='PlainList' {...config} >
            <NamedLayout>
                <NamedCart>
                    <RectangleItem />
                </NamedCart>
            </NamedLayout>
        </NamedList>
    )
}