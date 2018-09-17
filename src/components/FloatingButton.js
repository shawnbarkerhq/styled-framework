import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Paragraph } from './Typography';
import { Navbar } from './Navbar';
import { Button } from './Button';

const FixedActionButton = styled.div`
  position: fixed;
  right: 23px;
  bottom: 23px;
  padding-top: 15px;
  margin-bottom: 0;
  z-index: 997;
  & > ul {
    visibility: visible;
    left: 0;
    right: 0;
    text-align: center;
    position: absolute;
    bottom: 64px;
    margin: 0;
    visibility: hidden;
    & li {
      margin-bottom: 15px;
    }
  }
`;

const FloatingBtn = styled(Link)`
  display: inline-block;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  background-color: #26a69a;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    background-color: #26a69a;
  }
  &:before {
    border-radius: 0;
  }
`;

const FloatingButton = () => {
  return (
    <div>
      <Navbar />
      <Paragraph>Floating Button</Paragraph>
      <FixedActionButton>
        <FloatingBtn to="/">Test</FloatingBtn>
      </FixedActionButton>
    </div>
  );
};

export default FloatingButton;
