import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const links = [
  'font',
  'colors',
  'buttons',
  'icons',
  'floating',
  'navbars',
  'lists',
  'badges',
  'grid'
];

const NavbarStyled = styled.nav.attrs({
  backgroundColor: props => props.bgColor || '#fff'
})`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`;
const NavList = styled.ul`
  display: flex;
  & a {
    text-decoration: none;
  }
`;
const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 2rem;
  &:hover {
    background-color: #c7c7c7;
  }
`;

const NavWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 56px;
`;

const NavContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  display: flex;
  align-items: center;
`;

const Logo = styled(NavLink)`
  color: #fff;
  font-size: 2.1rem;
  padding: 0;
`;

const Sidenav = styled.ul`
  display: ${props => (props.hideOnSmall ? 'none' : 'flex')};
`;

const CollapseBtn = styled(NavLink)``;

const DropDownBtn = styled(NavLink)``;

const DropdownList = styled.ul`
  background-color: #fff;
  margin: 0;
  display: none;
  min-width: 100px;
  overflow-y: auto;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
`;

const DropdownItem = styled.li`
  clear: both;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  min-height: 50px;
  line-height: 1.5rem;
  width: 100%;
  text-align: left;
`;

const DropdownLink = styled(NavLink)`
  font-size: 16px;
  color: #26a69a;
  display: block;
  line-height: 22px;
  padding: 14px 16px;
`;

export const NavbarNormal = props => {
  return (
    <NavbarStyled bgColor="lightsteelblue">
      <NavWrapper>
        <NavContainer>
          <Logo to="/">Logo</Logo>
          <Sidenav>
            <NavItem>First</NavItem>
            <NavItem>Second</NavItem>
          </Sidenav>
        </NavContainer>
      </NavWrapper>
    </NavbarStyled>
  );
};

export const NavbarElite = props => {
  return (
    <NavbarStyled bgColor="lightsteelblue">
      <NavWrapper>
        <NavContainer>
          <Logo to="/">Logo</Logo>
          <Sidenav>
            <NavItem>First</NavItem>
            <NavItem>
              <DropdownLink to="/">Extra</DropdownLink>
              <DropdownList>
                <DropdownItem>Drop 1</DropdownItem>
              </DropdownList>
            </NavItem>
          </Sidenav>
        </NavContainer>
      </NavWrapper>
    </NavbarStyled>
  );
};

export const Navbar = props => {
  const navItems = links.map(link => (
    <NavLink to={link}>
      <NavItem>{link}</NavItem>
    </NavLink>
  ));
  return (
    <NavbarStyled>
      <NavList>{navItems}</NavList>
    </NavbarStyled>
  );
};
