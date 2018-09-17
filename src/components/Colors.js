import React from 'react';
import { Paragraph } from './Typography';
import { Navbar } from './Navbar';
// Change the variables to change colors
// COLOR VARIABLES //
const primary = 'lightsteelblue';
const secondary = 'dodgerblue';
const tertiary = 'navy';

// BACKGROUND COLORS //
const primaryBg = 'lightsteelblue';
const secondaryBg = 'dodgerblue';
const tertiaryBg = 'navy';

const Colors = () => {
  return (
    <div>
      <Navbar />
      <Paragraph>Color Variables</Paragraph>
      <Paragraph color={primary}>Primary</Paragraph>
      <Paragraph color={secondary}>Secondary</Paragraph>
      <Paragraph color={tertiary}>Tertiary</Paragraph>
      <Paragraph>Font Color</Paragraph>
      <Paragraph>Black Text</Paragraph>
      <Paragraph color="white" bgColor="red">
        White Text
      </Paragraph>
      <Paragraph color="red">Red Text</Paragraph>
      <Paragraph>Background Color</Paragraph>
      <Paragraph bgColor={primaryBg}>Primary Background</Paragraph>
      <Paragraph bgColor={secondaryBg}>Secondary Background</Paragraph>
      <Paragraph bgColor={tertiaryBg}>Tertiary Background</Paragraph>
      <Paragraph bgColor="black" color={'white'}>
        Black Background
      </Paragraph>
      <Paragraph bgColor="white">White Background</Paragraph>
      <Paragraph bgColor="red">Red Background</Paragraph>
    </div>
  );
};

export default Colors;
