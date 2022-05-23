import React from 'react';
import { Box,Tabs, Center,TabList, TabPanels, Tab, TabPanel  } from '@chakra-ui/react'
import { Butter, Clean, Pink } from 'zero-element-boot/lib/components/presenter/default'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox'
import PageCart from 'zero-element-boot/lib/components/cart/PageCart';
import Circle from 'zero-element-boot/lib/components/cart/Circle';
// import Cart from 'zero-element-boot/lib/components/cart/Cart';
import Rectangle from '@/pages/TestCart/Rectangle';
import ItemPlaceholder from '@/pages/ItemPlaceholder';




// import Blue from '@/pages/TestCart/blue';

export default function TestPageCart(props) {
    return (
        <PageCart  backgroundColor='#dadde1' width='800px'height='400px'>


 <ItemPlaceholder />

        </PageCart>
    )
}