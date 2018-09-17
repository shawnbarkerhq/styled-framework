import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Paragraph, SubHeading } from './Typography';
import { Navbar } from './Navbar';
import { Button } from './Button';

const List = styled.ul`
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  width: 50vh;
  padding: 0;
  > a {
    text-decoration: none;
  }
`;

const ListHeader = styled.li`
  background-color: lightsteelblue;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 20px;
`;

const ListItem = styled.li`
  background-color: #fff;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;
  list-style-type: none;
`;

const Badge = styled.span`
  min-width: 3rem;
  padding: 0 6px;
  margin-left: -44rem;
  text-align: center;
  font-size: 1rem;
  line-height: 22px;
  height: 22px;
  color: #757575;
  float: right;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

const NewBadge = styled(Badge)`
  font-weight: 300;
  font-size: 0.8rem;
  color: #fff;
  background-color: #26a69a;
  border-radius: 2px;
`;

const ListLink = styled(Link)`
  display: block;
  -webkit-transition: 0.25s;
  transition: 0.25s;
  color: #26a69a;
  background-color: #fff;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;
  list-style-type: none;
  &:not(.active):hover {
    background-color: #ddd;
  }
`;

const AvatarCard = styled(ListItem)`
  min-height: 84px;
  padding-left: 72px;
  position: relative;
`;
const SideIcon = styled(Link)``;

const items = ['First', 'Second'];

const itemList = items.map(item => (
  <Link to="/">
    <ListItem>{item}</ListItem>
  </Link>
));

const Lists = () => {
  return (
    <div>
      <Navbar />
      <Paragraph>Lists</Paragraph>
      <List>{itemList}</List>
      <hr />
      <Paragraph>Badges</Paragraph>
      <List>
        <ListLink to="/">First</ListLink>
        <ListLink to="/">
          Second
          <NewBadge>11</NewBadge>
        </ListLink>
        <ListLink to="/">
          Third
          <Badge>11</Badge>
        </ListLink>
      </List>
      <hr />
      <Paragraph>List with Header</Paragraph>
      <List>
        <ListHeader>Header</ListHeader>
        <ListLink to="/">First</ListLink>
        <ListLink to="/">
          Second
          <NewBadge>11</NewBadge>
        </ListLink>
        <ListLink to="/">
          Third
          <Badge>11</Badge>
        </ListLink>
      </List>
      <hr />
      <Paragraph>List with Header and Icons</Paragraph>
      <List>
        <ListHeader>Header</ListHeader>
        <ListLink to="/">First</ListLink>
        <ListLink to="/">Second</ListLink>
        <ListLink to="/">Third</ListLink>
      </List>
      <hr />
      <Paragraph>Contact Card</Paragraph>
      <List>
        <AvatarCard>
          <SubHeading>Karen Johnson</SubHeading>
          <Paragraph>karen@test.com</Paragraph>
          <Paragraph>555-555-5555</Paragraph>
        </AvatarCard>
      </List>
    </div>
  );
};

export default Lists;
