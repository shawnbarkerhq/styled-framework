import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './Typography';
import { Navbar } from './Navbar';
import { Button } from './Button';

export const Icon = styled.svg`
  height: 10rem;
  width: 10rem;
  background: #eee;
`;

export const AirFreshener = styled.i``;

const Icons = () => {
  return (
    <div>
      <Navbar />
      <Paragraph>Icons</Paragraph>
    </div>
  );
};

export default Icons;
