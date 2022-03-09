import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        HOME
      </a>
      <a className="menu-item" href="/WOMEN'S">
      WOMEN'S
      </a>
      <a className="menu-item" href="/ACCESSORIES">
      ACCESSORIES
      </a>
      <a className="menu-item" href="/SALE">
      SALE
      </a>
    </Menu>
  );
};
