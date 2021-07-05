import React from 'react';
import s from './Navbar.module.css';

import { NavLink } from 'react-router-dom';
import SidebarContainer from './Sidebar/SidebarContainer';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
                <NavLink to='/profile' activeClassName={s.activeLink}><div>Profile</div></NavLink>
                <NavLink to='/dialogs' activeClassName={s.activeLink}><div>Messages</div></NavLink>
                <NavLink to='/news' activeClassName={s.activeLink}><div>News</div></NavLink>
                <NavLink to='/music' activeClassName={s.activeLink}><div>Music</div></NavLink>
                <NavLink to='/users' activeClassName={s.activeLink}><div>Find users</div></NavLink>
                <NavLink to='/settings' activeClassName={s.activeLink}><div>Settings</div></NavLink>

            <SidebarContainer />

        </nav>);
}

export default Navbar;