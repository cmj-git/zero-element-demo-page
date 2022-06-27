import React from 'react';
import { AutoLayout } from 'zero-element-boot';
import { Text, Flex,Box } from '@chakra-ui/react'

export default function ListItem(props) {


    const { moduleName,name,_xname,_props } = props;

    console.log('list item props == ', props)

    const pDemoConfig = {
        layout: {
            xname: 'Flexbox',
            props: {
                justify: 'center'
            },

        },
        ...props,
        ..._props
    }

    return (
        <>
          <AutoLayout {...pDemoConfig} />
        </>
    )
}