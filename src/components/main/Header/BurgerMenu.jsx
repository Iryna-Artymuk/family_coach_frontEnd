import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import Navigation from './Navigation';
import CloseIcon from '../../Icons/Main/CloseIcon';
const BurgerMenu = ({ toggleBurgerMenu, showBurgerMenu }) => {
  return (
    <div
      className={clsx(
        styles.burgerMenuWrapper,
        showBurgerMenu ? '' : styles.hidden
      )}
    >
      <Button
        aria-label=" menu close button"
        tabIndex="0"
        type="button"
        burgerMenuCloseButton
        onClick={toggleBurgerMenu}
      >
        <CloseIcon />
      </Button>
      <Navigation toggleBurgerMenu={toggleBurgerMenu} />
      <a
        className={styles.writeMeLink}
        href="https://t.me/Zh_Bshch"
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={toggleBurgerMenu}
      >
        Напиши мені
      </a>
    </div>
  );
};

export default BurgerMenu;
