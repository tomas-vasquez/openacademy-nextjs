import React from "react";
import { Collapse, Nav } from "reactstrap";

const FrameCollapsable = ({ elems, isOpen }) => (
  <Collapse isOpen={isOpen}>
    <Nav type="vertical">{elems}</Nav>
  </Collapse>
);

export default FrameCollapsable;
