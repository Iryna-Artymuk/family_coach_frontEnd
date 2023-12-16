import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import BurgerIcon from '../../Icons/Main/BurgerIcon';
import Logo from '../../Icons/Logo/Logo';
import Container from '@/components/main/Container/Container';
import BurgerMenu from './BurgerMenu';

import styles from './Header.module.scss';
import Navigation from './Navigation';

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu);
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
    <header>
      <Container>
        <div className={styles.contentWrapper}>
          <Logo />

          {windowWidth < 1240 ? (
            <Button type="button" burgerButton onClick={toggleBurgerMenu}>
              <BurgerIcon />
            </Button>
          ) : (
            <Navigation />
          )}
          <BurgerMenu
            toggleBurgerMenu={toggleBurgerMenu}
            showBurgerMenu={showBurgerMenu}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
