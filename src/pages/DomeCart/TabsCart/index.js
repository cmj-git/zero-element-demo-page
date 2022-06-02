import React from 'react';
import ItemPlaceholder from '@/pages/ItemPlaceholder'

import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider } from '@chakra-ui/react'
import Sandbox from '@/pages/DomeCart/DomeCartList/Sandbox'
import PatternCart from '@/pages/DomeCart/PatternCart/Pattern/Sandbox'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox'





export default function TabsCart(props) {
    return (
        <ChakraProvider>
            
                <Tabs variant='soft-rounded' colorScheme='green'  align='center'size='lg'>
                    <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                    </TabList>

                    <TabPanels>

                        <TabPanel>
                            <Sandbox />
                        </TabPanel>

                        <TabPanel>
                            <PatternCart />
                        </TabPanel>

                    </TabPanels>
                </Tabs>
        </ChakraProvider>

    )

}




