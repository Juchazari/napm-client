import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import {
  RiMenuLine,
  RiDashboardFill,
  RiSettings3Fill,
  RiLogoutBoxRFill,
  RiPieChartFill,
  RiNotification3Fill
} from 'react-icons/ri';
import { ReactComponent as Logo } from '../napm-logo-light.svg';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import './Sidebar.css';

const useStyles = makeStyles({
  arrow: {
    color: '#1e272e',
  },
  tooltip: {
    backgroundColor: '#1e272e'
  },
});

function Item({title, link, icon, ttActive}) {
  const classes = useStyles();
  return (
    <Tooltip title={title} disableHoverListener={ttActive} classes={classes} placement="right" arrow>
      <NavLink to={link} className="item" activeClassName="dash-active" exact>
        {icon}
        <span className="item-text">{title}</span>
      </NavLink>
    </Tooltip>
  );
}

function Sidebar({isExpanded, setIsExpanded}) {
  const classes = useStyles();
  let { url } = useRouteMatch();

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
      <div className="sidebar-header">
        <RiMenuLine onClick={handleToggler} className="sidebar-icon" />
        <Logo className="logo item-text" />
      </div>
      <div className="sidebar-items">
        <Item
          title="Home"
          link={`${url}`}
          icon={<RiDashboardFill className="sidebar-icon" />}
          ttActive={isExpanded ? true : false}
        />
        <Item
          title="Insights"
          link={`${url}/insights`}
          icon={<RiPieChartFill className="sidebar-icon" />}
          ttActive={isExpanded ? true : false}
        />
        <Item
          title="Inbox"
          link={`${url}/inbox`}
          icon={<RiNotification3Fill className="sidebar-icon" />}
          ttActive={isExpanded ? true : false}
        />
      </div>
      <div className="sidebar-controls sidebar-items">
        <Item
          title="Settings"
          link={`${url}/settings`}
          icon={<RiSettings3Fill className="sidebar-icon" />}
          ttActive={isExpanded ? true : false}
        />
        <Tooltip
          title="Log out"
          disableHoverListener={isExpanded ? true : false}
          classes={classes}
          placement="right"
          arrow
        >
          <div className="item logout">
            <RiLogoutBoxRFill className="sidebar-icon" />
            <span className="item-text">Log out</span>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default Sidebar;