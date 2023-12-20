import clsx from 'clsx';
import styles from './ButtonSubmit.module.scss';

export const ButtonSubmit = ({ handlerSubmitButton, nameButton, isActive }) => {
  return (
    <button
      type="submit"
      // onClick={isActive ? handlerSubmitButton : null}
      onClick={handlerSubmitButton}
      className={clsx(styles.button, !isActive && styles.inActiveButton)}
    >
      {nameButton}
    </button>
  );
};

export default ButtonSubmit;
