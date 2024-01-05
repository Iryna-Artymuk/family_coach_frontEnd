import { useEffect, useState } from 'react';
import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './PasswodInput.module.scss';

const PasswordInput = ({
  id,
  field,
  nestedErrorText,
  nestedError,
  text,
  label,
  form: { errors, handleBlur, touched, setFieldValue },
}) => {
  const isFieldTouched = touched[field.name];
  const valueLength = field.value?.length;

  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState('password-hide');

  const handleInputType = e => {
    e.preventDefault();
    setInputType(prev =>
      prev === 'password-show' ? 'password-hide' : 'password-show'
    );
  };

  useEffect(() => {
    if (!text) return;

    setFieldValue(id, text);
  }, [text, setFieldValue, id]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    if (isFieldTouched && valueLength >= 0) {
      setIsFocused(false);
    }
  }, [isFieldTouched, valueLength]);

  const getBorderColor = () => {
    if (errors?.[field.name] && isFieldTouched) {
      return styles.redBorder;
    }
    if (!errors?.[field.name] && !isFocused) {
      return styles.greenBorder;
    }
    if (isFocused) {
      return styles.blueBorder;
    } else {
      return styles.grayBorder;
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={id}
        type={inputType === 'password-hide' ? 'password' : 'text'}
        className={`${styles.input} ${getBorderColor()}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={() => setIsFocused(true)}
        {...field}
      />
      <button className={styles.icon} onClick={handleInputType}>
        {inputType === 'password-hide' ? (
          <svg>
            <use href={`${sprite}#${'view-hide'}`} />
          </svg>
        ) : (
          <svg>
            <use href={`${sprite}#${'view-show'}`} />
          </svg>
        )}
      </button>
      <div className={styles.errorWrap}>
        {errors?.[field.name] && isFieldTouched && (
          <p className={styles.errorMessage}>{errors?.[field.name]}</p>
        )}
        <p className={styles.errorMessage}>{nestedError && nestedErrorText}</p>
      </div>
    </div>
  );
};

export default PasswordInput;
