import styles from './Button.module.scss';

const Button = ({ children, type, onClick, add }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {add && <div> <IconAdd/>{children}</div>}
    </button>
  );
};

export default Button;
