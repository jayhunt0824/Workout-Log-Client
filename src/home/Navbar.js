import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Button,
} from "reactstrap";

const SiteBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">Workout Log</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <NavItem>
          <Button onClick={props.clickLogout}>Logout</Button>
        </NavItem>
      </Collapse>
    </Navbar>
  );
};

export default SiteBar;
