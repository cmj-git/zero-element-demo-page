import React from 'react';

import Container from 'zero-element-boot/lib/components/container/Container';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';

export default function Wrap(props) {

  const { children, ...data } = props;

  return (
    <Container>
        <Flexbox align='start' direction='row' {...data}>
          {children}
        </Flexbox>
   </Container>
  )
}