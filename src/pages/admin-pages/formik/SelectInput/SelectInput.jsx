import { useState, useEffect } from 'react';
import styles from './SelectInput.module.scss';
import Select from 'react-select';

const options = [
  { value: 'Саморозвиток', label: 'Саморозвиток' },
  { value: 'Мотивація', label: 'Мотивація' },
  { value: 'Відносини', label: 'Відносини' },
  { value: 'Діти', label: 'Діти' },
  { value: 'Підлітки', label: 'Підлітки' },
];
const SelectInput = ({
  id,
  field,
  text,
  label,
  form: { errors, handleBlur, touched, setFieldValue },
}) => {
  const isFieldTouched = touched[field.name];

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!text) return;
    setFieldValue(id, text);
  }, [text, setFieldValue, id]);

  console.log('field.value', field.value);

  const defaultValue = options => {
    const value = options.find(item => item.value === field.value);

    if (value) {
      return value;
    } else {
      return {};
    }
  };

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // useEffect(() => {
  //   if (isFieldTouched && valueLength >= 0) {
  //     setIsFocused(false);
  //   }
  //}, [isFieldTouched, valueLength]);

  // const getBorderColor = () => {
  //   if (valueLength > maxLength) {
  //     return styles.redBorder;
  //   }
  //   if (isFocused) {
  //     return styles.blueBorder;
  //   }
  //   if (valueLength === 0 && isFieldTouched) {
  //     return styles.redBorder;
  //   }
  //   if (valueLength > 0 && !isFocused) {
  //     return styles.greenBorder;
  //   } else {
  //     return styles.grayBorder;
  //   }
  // };

  return (
    <div className={styles.textAreaWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      {/* <textarea
        id={id}
        className={`${styles.textArea} ${getBorderColor()} ${getInputState()}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={() => setIsFocused(true)}
        {...field}
      />  */}

      <Select
        id={id}
        options={options}
        value={defaultValue(options, text)}
        onChange={value => setFieldValue(id, value.value)}
        styles={{
          container: baseStyles => ({
            ...baseStyles,
            width: '100%',
          }),
          control: baseStyles => ({
            ...baseStyles,
            borderRadius: '15px',
            border: '1px solid  #444',

            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: 18,
            fontWeight: 500,
          }),
          menu: baseStyles => ({
            ...baseStyles,

            borderRadius: '15px',
            color: '#000',
            fontFamily: 'Montserrat',
            fontSize: 18,
            fontWeight: 500,
            border: '1px solid  #444',
            overflow: 'hidden',
          }),

          singleValue: baseStyles => ({
            ...baseStyles,
            padding: '10px 24px',
            borderRadius: '15px',
          }),
        }}
        theme={theme => ({
          ...theme,

          colors: {
            ...theme.colors,
            borderRadius: 15,
            primary25: '',
            primary: '#314385',
          },
        })}
      />

      {errors?.[field.name] && (
        <div>
          {errors?.[field.name] && isFieldTouched && (
            <p className={styles.errorMessage}>{errors?.[field.name]}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
