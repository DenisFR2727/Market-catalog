import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import "./Sidebar.scss";

 const Sidebar = () => {
  return (
    <Menu>
      <NavLink to="/home"  className="nav-link">
                        Home
      </NavLink>
      <NavLink to="/tovars"  className="nav-link">
                        Tovars
      </NavLink>
      <NavLink to="/AddTovar"  className="nav-link">
                        Add New Tovar
      </NavLink>
      <NavLink to="/Basket"  className="nav-link">
        <div className="basket_length">
                        Basket
        </div>
      </NavLink>
    </Menu>
  );
};
export default Sidebar;