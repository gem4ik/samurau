import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div >
        <NavLink to='/dialog' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
      </div>
      <div>
        <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
      </div>
      <div>
        <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Nav;