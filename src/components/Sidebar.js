import React from 'react';
import styled from 'styled-components';
import { IconButton } from './Button';
import Icon from './Icon';

const SidebarNav = styled.nav`
  width: 56px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  background-color: #1c1a22;
  color: #ffffff;
  z-index: 9999;
`;

const Item = styled.div`
  position: relative;
  width: 56px;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

const Project = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #2e2b3a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &.active:before {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    width: 4px;
    height: 100%;
    border-radius: 0 2px 2px 0;
    background-color: #ffffff;
  }
`;

const Divider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;

  &:before {
    content: '';
    display: block;
    width: 32px;
    height: 2px;
    border-radius: 2px;
    background-color: #2e2b3a;
  }
`;

const AddButton = styled(IconButton)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2e2b3a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #353242;
  }
`;

function Sidebar() {
  return (
    <SidebarNav>
      <Item>
        <Project />
      </Item>
      <Item>
        <Project />
      </Item>
      <Item>
        <Project />
      </Item>
      <Divider />
      <Item>
        <AddButton onClick={() => alert("NEW PROJECT!")}>
          <Icon glyph="add" size="24" />
        </AddButton>
      </Item>
    </SidebarNav>
  );
}

export default Sidebar;