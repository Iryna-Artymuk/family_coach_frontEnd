import { useState, useEffect } from 'react';
import styles from './TextArea.module.scss';

const TextArea = ({
  id,
  field,
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
    if (valueLength > maxLength) {
      return styles.redBorder;
    }
    if (isFocused) {
      return styles.blueBorder;
    }
    if (valueLength === 0 && isFieldTouched) {
      return styles.redBorder;
    }
    if (valueLength > 0 && !isFocused) {
      return styles.greenBorder;
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
    <div className={styles.textAreaWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <textarea
        id={id}
        className={`${styles.textArea} ${getBorderColor()} ${getInputState()}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={() => setIsFocused(true)}
        {...field}
      />
      {showCharacterCount && (
        <div className={styles.commentsWrapper}>
          {errors?.[field.name] && (
            <div className={styles.errorWrap}>
              {errors?.[field.name] && isFieldTouched && (
                <p className={styles.errorMessage}>{errors?.[field.name]}</p>
              )}
            </div>
          )}
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

export default TextArea;
