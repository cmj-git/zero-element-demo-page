import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import { Flex, Box } from '@chakra-ui/react'
import Counter from '@/components/presenter/Counter'
import { getEndpoint } from 'zero-element-boot/lib/components/config/common';

const endpoint = getEndpoint()

/**
 *
 * @returns 
 */


export default function index(props) {

    const { onRemark, id,viewCount, name = '【烧卖：原味】', suggestedPrice = '14.9', unit = '包', weight, cover ,callBackData } = props

    return (
        <Flex w='100%' h='' bg='' >
            <div style={{ margin: '12px 4px 12px 8px', width: '70px', height: '60px', borderRadius: '4px', backgroundImage: `url(${endpoint}${cover})`, backgroundSize: '100% 100%' }}>
            </div>
            <div style={{ margin: '4px', width: '100%', height: '60px' }}>
                <Flex>
                    <div style={{
                        display: 'flex', justifyContent: 'flex-start', height: '50%', fontWeight: 'bold', margin: '12px 0 auto 0', fontSize: '14px', alignItems: 'center', width: '80%'
                    }}>{name} 约{weight}g</div>
                     <div style={{
                        display: 'flex', justifyContent: 'flex-end',alignItems: 'center', height: '50%',  margin: '12px 16px auto 0', fontSize: '13px',color:'#b03931',  width: '30%'
                    }}>已团{viewCount}</div>
                </Flex>
                <Flex>
                    <div style={{
                        display: 'flex', justifyContent: 'flex-start', color: '#b03931', margin: '8px 4px -3px 6px', alignItems: 'center', fontSize: '14px', height: '', width: '60%',
                    }}>￥{suggestedPrice} /{unit}</div>

                    <div onClick={onRemark} style={{
                        display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '8px 0 0 4px',
                        fontSize: '14px', height: '26px', width: '100%',
                    }}><Counter productId={id} callBackData={callBackData} /></div>

                </Flex>
            </div>
        </Flex>
    )
}