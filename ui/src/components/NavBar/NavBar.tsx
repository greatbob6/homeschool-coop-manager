import React from 'react';
import './NavBar.css';
import { NavMenu as NavMenuModel } from '../../model/NavMenu';
import NavMenu from '../NavMenu/NavMenu';


const NavBar: React.FC = () => {
  const navMenu : NavMenuModel[] = [
    { title: 'Classes', link: '/classes', children: [] }
  ];

  return (
    <div className="NavBar">
      {navMenu.map(menu =>
        <NavMenu key={menu.title} menu={menu} />
      )}
    </div>
  );
}

export default NavBar;
