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
  const [isFocused, setIsFocused] = useState(false);
  const isFieldTouched = touched[field.name];

  console.log('isFieldTouched: ', isFieldTouched);
  console.log('errors: ', errors?.[field.name]);
  console.log('field.value', field.value);

  useEffect(() => {
    if (!text) return;
    setFieldValue(id, text);
  }, [text, setFieldValue, id]);

  const defaultValue = options => {
    const value = options.find(item => item.value === field.value);

    if (value) {
      return value;
    } else {
      return {};
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const getBorderColor = () => {
    if (errors?.[field.name] && isFieldTouched) {
      return '1px solid #bc0000';
    }
    if (!errors?.[field.name] && !isFocused) {
      !errors?.[field.name] === true;
      return '1px solid #00bc71';
    }
    if (isFocused) {
      return '1px solid  blue';
    } else {
      return '1px solid  gray';
    }
  };

  return (
    <div className={styles.textAreaWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>

      <Select
        id={id}
        options={options}
        value={defaultValue(options, text)}
        onChange={value => {
          setFieldValue(id, value.value);
          setIsFocused(false);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        styles={{
          container: baseStyles => ({
            ...baseStyles,
            width: '100%',
            // border: getBorderColor(),
          }),
          control: baseStyles => ({
            ...baseStyles,
            borderRadius: '15px',
            border: getBorderColor(),

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

      {errors && (
        <div>
          <p className={styles.errorMessage}>{errors?.[field.name]}</p>
        </div>
      )}
    </div>
  );
};

export default SelectInput;
