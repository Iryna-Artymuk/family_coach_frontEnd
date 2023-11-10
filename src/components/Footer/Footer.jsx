import styles from './Footer.module.scss';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import SocialList from '../SocialList/SocialList';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <footer>
      <Container>
        <div className={styles.contentWrapper}>
          {windowWidth <= 767 && (
            <div className={styles.logoWrapper}>
              <Logo /> <SocialList />
            </div>
          )}
          {windowWidth >= 768 && <Logo />}
          <nav className={styles.navigationWrapper}>
            <ul className={styles.navList}>
              <li className={styles.navListLink}>Про мене</li>
              <li className={styles.navListLink}>Напрямки роботи</li>
              <li className={styles.navListLink}>Відгуки</li>
            </ul>
            <ul className={styles.navList}>
              <li>
                <NavLink
                  to="blog"
                  className={({ isActive }) => {
                    return clsx(
                      styles.navListLink,
                      isActive ? styles.active : ''
                    );
                  }}
                >
                  Блог
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/qualification"
                  className={({ isActive }) => {
                    return clsx(
                      styles.navListLink,
                      isActive ? styles.active : ''
                    );
                  }}
                >
                  Кваліфікація
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/price"
                  className={({ isActive }) => {
                    return clsx(
                      styles.navListLink,
                      isActive ? styles.active : ''
                    );
                  }}
                >
                  Послуги і ціни{' '}
                </NavLink>
              </li>
            </ul>
          </nav>
          {windowWidth >= 768 && <SocialList />}
        </div>
        <div className={styles.allRight}>
          <span>&#169; 2023 Жанна Барищук - всі права захищено </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
