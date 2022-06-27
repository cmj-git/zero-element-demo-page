import React from 'react';
import TagIndicator from '@/components/indicator/TagIndicator'
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import VStack from '@/components/layout/VStack'
import layoutImg from '@/assets/layout.svg'
import indicatorImg from '@/assets/indicator.svg'
import presenterImg from '@/assets/presenter.svg'
import gataway from '@/assets/gataway.svg'

import StyleDatas from './index.less'

export default function Index(props) {

    const { children } = props
    const style = {
        position: 'relative',
        width:'100%',
        height:'100%'
    }

    const styles = {
        width: '88%',
        height: '100%',
        border: '2px solid #0c89da',
        borderRadius: '3px',
        position: 'absolute'
    }
    return (
        <div style={style}>
            <div style={styles} >
                <div className={StyleDatas.Response}>
                    <VStack spacing={4}>
                    
                            <TagIndicator solid circle color='#0c89da' size='25px'>
                                <img  src={layoutImg}/>
                            </TagIndicator>

                            <TagIndicator solid circle color='#0c89da' size='25px'>
                               <img src={indicatorImg}/>
                            </TagIndicator>

                            <TagIndicator solid circle color='#0c89da' size='25px'>
                               <img src={presenterImg}/>
                            </TagIndicator>

                            <TagIndicator solid circle color='#0c89da' size='25px'>
                                   <img src={gataway}/>
                            </TagIndicator>
                    </VStack>
                   
                </div>
            </div>

                    { 
                        React.Children.map(children, child => (
                            child
                        ))
                    }

        </div>
    )
}