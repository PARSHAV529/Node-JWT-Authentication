import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css';

export const MainNavigation = () => {
  return (
    <div className={classes.div}>
    
    <header className={classes.header}>
        <nav>
        <ul className={classes.list}>
                <li><NavLink className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              en to='/'>Home</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              en to='/Login'>Login</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              en to='/signup'>Sign UP</NavLink></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}
