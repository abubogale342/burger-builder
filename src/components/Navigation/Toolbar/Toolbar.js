import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';
import classes from './Toolbar.module.css';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.drawerTogglerClick} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default Toolbar;
