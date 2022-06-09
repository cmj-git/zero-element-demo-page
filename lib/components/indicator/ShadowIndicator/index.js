import React from 'react';
export default function Index(props) {
  const {
    children,
    ...defaultHoverStyles
  } = props;
  const styles = {
    position: 'relative',
    borderColor: 'transparent',
    boxShadow: '0 0px 4px rgba(0, 0, 0, 0.1)',
    ...defaultHoverStyles
  };
  return /*#__PURE__*/React.createElement("div", {
    style: styles
  }, React.Children.map(children, child => child));
}