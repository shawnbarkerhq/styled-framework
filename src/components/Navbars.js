import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './Typography';
import { Navbar, NavbarNormal, NavbarElite } from './Navbar';
import { Button } from './Button';

const Navbars = () => {
  return (
    <div>
      <Navbar />
      <Paragraph>Navbars</Paragraph>
      <NavbarNormal />
      <hr />
      <NavbarElite />
    </div>
  );
};

export default Navbars;
