import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './Typography';
import { Navbar } from './Navbar';

const Row = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const Column = styled.div`
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
`;

const S1 = styled(Column)`
  width: 8.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
  background-color: grey;
`;

const S4 = styled(Column)`
  width: 33.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
  background-color: yellow;
`;

const S8 = styled(Column)`
  width: 66.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
  background-color: green;
`;

const S12 = styled(Column)`
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
  background-color: red;
`;

const Box = styled.div``;

const Grid = () => {
  return (
    <div>
      <Navbar />
      <Paragraph>Grid</Paragraph>
      <Row>
        <S1>1</S1>
        <S1>2</S1>
        <S1>3</S1>
        <S1>4</S1>
        <S1>5</S1>
        <S1>6</S1>
        <S1>7</S1>
        <S1>8</S1>
        <S1>9</S1>
        <S1>10</S1>
        <S1>11</S1>
        <S1>12</S1>

        <hr />

        <S4>4</S4>
        <S4>4</S4>
        <S4>4</S4>

        <hr />

        <S4>4</S4>
        <S8>8</S8>
      </Row>
    </div>
  );
};

export default Grid;
