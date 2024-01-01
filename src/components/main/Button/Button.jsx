import clsx from 'clsx';
import styles from './Button.module.scss';
const Button = ({
  type,
  onClick,
  children,
  burgerButton,
  burgerMenuCloseButton,
  buttonaddmore,
  formButton,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        burgerButton && styles.burgerButton,
        burgerMenuCloseButton && styles.burgerMenuCloseButton,
        buttonaddmore && styles.buttonAddMore,
        formButton && styles.formButton
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
