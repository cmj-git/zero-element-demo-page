import React, { useImperativeHandle, forwardRef } from 'react';

require('./index.less');

export default forwardRef(function Shape(props, ref) {

  /**
   * outline    线类型
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   */

  const { children, outline = 'solid', corner = '8px', fill = '#1ee', stroke = '#9bd', lineWidth = '2' } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-Shape`;
    }
  }));

  return React.Children.map(children, child => {
    return <div style={{ borderStyle:`${outline}`, borderRadius: `${corner}`, background: `${fill}`, borderColor:`${stroke}`, borderWidth:`${lineWidth}px` }} >
      {child}
    </div>
  })
})