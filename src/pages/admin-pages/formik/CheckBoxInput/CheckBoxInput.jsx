import styles from './CheckBoxInput.module.scss';

const CheckBoxInput = ({
  id,
  field: { value: formikValue },
  label,
  form: { setFieldValue },
  value,
}) => {
  const handleChange = () => {
    const index = formikValue.indexOf(value);
    if (index === -1) {
      formikValue.push(value);
    } else {
      formikValue.splice(index, 1);
    }
    setFieldValue(id, formikValue);
  };
  return (
    <div className={styles.checkBox}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={formikValue.indexOf(value) !== -1}
      />
      <span>{label}</span>
    </div>
  );
};

export default CheckBoxInput;
