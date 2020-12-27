import React from "react";

const CustomLinkWrapper = React.forwardRef((props, ref) => (
  <a ref={ref} {...props}>
    {props.children}
  </a>
));

export default CustomLinkWrapper;
