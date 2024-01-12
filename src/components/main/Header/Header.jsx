import { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import Button from '../Button/Button';
import BurgerIcon from '../../Icons/Main/BurgerIcon';
import Logo from '../../Icons/Logo/Logo';
import Container from '@/components/main/Container/Container';
import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';
import styles from './Header.module.scss';

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu);

  const isDesktop = useMediaQuery({ minWidth: 1240 });

  return (
    <header>
      <Container>
        <div className={styles.contentWrapper}>
          <Logo />

          {!isDesktop ? (
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
