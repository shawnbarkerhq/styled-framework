import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './Typography';
import { Navbar } from './Navbar';
import { Button } from './Button';

const Buttons = () => {
  return (
    <div>
      <Navbar />
      <Paragraph>Buttons</Paragraph>
      <Button>Button</Button>
      <Button txtColor="green">Green Text Button</Button>
      <Button txtColor="white" bgColor="green">
        Green Text Button
      </Button>

      <hr />
      <Paragraph>Rounded Buttons</Paragraph>
      <Button roundNess="50px">Button</Button>
      <Button roundNess="50px" txtColor="green">
        Green Text Button
      </Button>
      <Button roundNess="50px" txtColor="white" bgColor="green">
        Green Text Button
      </Button>

      <hr />
      <Paragraph>Rounded Buttons with Shadow</Paragraph>
      <Button roundNess="50px" shadowOn>
        Button
      </Button>
      <Button roundNess="50px" txtColor="green" shadowOn>
        Green Text Button
      </Button>
      <Button roundNess="50px" txtColor="white" bgColor="green" shadowOn>
        Green Text Button
      </Button>
    </div>
  );
};

export default Buttons;
