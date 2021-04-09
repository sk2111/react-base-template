//libs
import React from 'react';
import { NavLink } from 'react-router-dom';
//styles
import styles from './Header.module.scss';
//constants
import { SUMMARY_ROUTE, TODOLIST_ROUTE } from '../../utilities/routes/route.path';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <NavLink  activeClassName={styles.activeNavLink} to={SUMMARY_ROUTE}>Summary</NavLink>
            <NavLink  activeClassName={styles.activeNavLink} to={TODOLIST_ROUTE}>Todolist</NavLink>
        </div>
    );
}


export default Header;