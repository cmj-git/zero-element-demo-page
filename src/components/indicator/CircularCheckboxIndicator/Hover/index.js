import React from 'react';

// import checkXOn from '@/assets/check_on.svg';
// import StyleDate from '../index.less';


export default function Sekected(props) {

    const { children, ...defaultSelectedStyles } = props;

    const styles = {
        position: 'relative',
        margin: 'auto 10px auto 30px',
        ...defaultSelectedStyles
    }


    return (
        <>
                {
                    React.Children.map(children, child => (
                        child
                    ))
                }

          
        </>
    )
}
