import clsx from 'clsx';
import styles from './ButtonSubmit.module.scss';

export const ButtonSubmit = ({ type, handlClick, nameButton, isActive }) => {
  return (
    <button
      type={type}
      // onClick={isActive ? handlerSubmitButton : null}
      onClick={handlClick}
      className={clsx(styles.button, !isActive && styles.inActiveButton)}
    >
      {nameButton}
    </button>
  );
};

export default ButtonSubmit;
