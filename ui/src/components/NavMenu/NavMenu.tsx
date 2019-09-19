import React from 'react';
import { Link } from 'react-router-dom';

import './NavMenu.css';

import { NavMenu as NavMenuModel } from '../../model/NavMenu';

interface NavMenuProps {
  menu: NavMenuModel;
}

const NavMenu: React.FC<NavMenuProps> = (props: NavMenuProps) => {
  const navMenu = props.menu;
  let children;

  if (navMenu.children && navMenu.children.length > 0) {
    children = <ul className="navLinks">
        {navMenu.children.map(child => <li><Link to={child.link}>{child.title}</Link></li>)}
      </ul>
  }
  else {
    children = null;
  }

  return (
    <div className="navMenu">
      <h2><Link to={navMenu.link}>{navMenu.title}</Link></h2>
      {children}
    </div>
  );
}

export default NavMenu;
