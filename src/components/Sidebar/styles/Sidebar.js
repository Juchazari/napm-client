import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ReactTooltip from 'react-tooltip';

const CollapsedSidebarStyles = css`
  .logo, span { display: none; }
  svg { margin-right: 0px; }
`;

const NavItemStyles = css`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover { background-color: rgba(255, 255, 255, 0.1); }
`;

const MainSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: ${props => props.isExpanded ? '200px' : '52px'};
  height: 100%;
  // background-color: #2c2e33;
  background-color: #1e272e;
  color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
  svg {
    width: 1.25em;
    height: 1.25em;
    margin-right: 12px;
    cursor: pointer;
    user-select: none;
  }
  span { font-size: 15px; }
  ${({isExpanded}) => !isExpanded && CollapsedSidebarStyles}
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 2px solid #323338;
  .logo {
    width: 65px;
    cursor: default;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const NavItemLink = styled(NavLink)`
  ${NavItemStyles}
  &.active { background-color: rgba(255, 255, 255, 0.1); }
`;

const NavItem = styled.div`
  ${NavItemStyles}
`;

const ToolTip = styled(ReactTooltip)`
  font-size: 12px !important;
  padding: 5px 10px !important;
  background-color: #1e272e !important;
  &.place-right:after {
    border-right-color: #1e272e !important;
    border-right-style: solid !important;
  }
`;

export {MainSidebar, Header, Controls, NavItem, NavItemLink, ToolTip};