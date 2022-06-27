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

            children: [
                {
                    presenter: `${_xname}`,
                    gateway: {
                        xname: 'Binding',
                        props: {
                            binding: {
                            }
                        }
                    }
                }
            ],
        },
        ...props,
        ..._props
    }

    return (
        <>
          <Text>{name} {moduleName}</Text>
          <AutoLayout {...pDemoConfig} />
        </>
    )
}