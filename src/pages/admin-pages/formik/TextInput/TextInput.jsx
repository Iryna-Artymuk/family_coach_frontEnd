import { useEffect, useState } from 'react';
import styles from './TextInput.module.scss';

const TextInput = ({
  id,
  field,
  nestedErrorText,
  nestedError,
  text,
  label,
  form: { errors, handleBlur, touched, setFieldValue },
  maxLength,
  showCharacterCount,
}) => {
  const isFieldTouched = touched[field.name];

  const valueLength = field.value?.length;

  const [isFocused, setIsFocused] = useState(false);

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

  const getInputState = () => {
    if (valueLength > maxLength) {
      return styles.error;
    } else if (valueLength > 0 && !isFocused) {
      return styles.entered;
    } else {
      return '';
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        className={`${styles.input} ${getBorderColor()} ${getInputState()}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={() => setIsFocused(true)}
        {...field}
      />
      <div className={styles.errorWrap}>
        {errors?.[field.name] && isFieldTouched && (
          <p className={styles.errorMessage}>{errors?.[field.name]}</p>
        )}
        <p className={styles.errorMessage}>{nestedError && nestedErrorText}</p>
      </div>
      {showCharacterCount && (
        <div className={styles.commentsWrapper}>
          <p
            className={`${styles.counterMessage} ${
              valueLength > maxLength ? styles.redText : ''
            }`}
          >
            {`${valueLength}/${maxLength}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
