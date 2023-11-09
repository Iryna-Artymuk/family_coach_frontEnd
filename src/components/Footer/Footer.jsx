import styles from './Footer.module.scss';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import SocialList from '../SocialList/SocialList';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
              <li>Про мене</li>
              <li>Напрямки роботи</li>
              <li>Відгуки</li>
            </ul>
            <ul className={styles.navList}>
              <li>
                <Link to="blog">Блог</Link>
              </li>
              <li>Кваліфікація</li>
              <li>Послуги і ціни </li>
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
