// import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';

import styles from './Header.module.scss';
const Navigation = ({ toggleBurgerMenu }) => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
  return (
    <nav className={styles.navigationWrapper}>
      <ul className={styles.navList} onClick={toggleBurgerMenu}>
        <li>
          <HashLink
            className={styles.navListLink}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
              })
            }
            to="/#about"
          >
            Про мене
          </HashLink>
        </li>
        <li>
          <HashLink
            className={styles.navListLink}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }
            to="/#workAreas"
          >
            Напрямки роботи
          </HashLink>
        </li>
        <li>
          <HashLink
            className={styles.navListLink}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }
            to="/#feedback"
          >
            Відгуки
          </HashLink>
        </li>

        <li>
          <NavLink
            to="blog"
            state={{ from: backLinkHref }}
            className={({ isActive }) => {
              return clsx(styles.navListLink, isActive ? styles.active : '');
            }}
          >
            Блог
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/qualification"
            state={{ from: backLinkHref }}
            className={({ isActive }) => {
              return clsx(styles.navListLink, isActive ? styles.active : '');
            }}
          >
            Кваліфікація
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/price"
            state={{ from: backLinkHref }}
            className={({ isActive }) => {
              return clsx(styles.navListLink, isActive ? styles.active : '');
            }}
          >
            Послуги і ціни{' '}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
