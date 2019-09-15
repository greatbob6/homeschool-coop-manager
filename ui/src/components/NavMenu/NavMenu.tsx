import React from 'react';
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
        {navMenu.children.map(child => <li><a href={child.link}>{child.title}</a></li>)}
      </ul>
  }
  else {
    children = null;
  }

  return (
    <div className="navMenu">
      <h2><a href={navMenu.link}>{navMenu.title}</a></h2>
      {children}
    </div>
  );
}

export default NavMenu;
