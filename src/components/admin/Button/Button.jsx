import styles from './Button.module.scss';

const Button = ({ children, type, onClick, add }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
