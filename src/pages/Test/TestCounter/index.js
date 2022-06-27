import React from 'react';
import PageCart from '@/components/PageCart';
import HCenter from '@/components/HCenter';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import Counter from '@/components/presenter/Counter';

export default function index(props) {
    return (
        <CssCart width='100px' hight='100px' >
            <Counter />
        </CssCart>
                  
    )
}
