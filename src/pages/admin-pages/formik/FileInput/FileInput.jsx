import { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './FileInput.module.scss';

const FileInput = ({
  field,
  photo,
  form: { errors, setFieldValue },
  ...props
}) => {
  const [imagePreview, setImagePreview] = useState('');
  const fieldValue = field.value;

  useEffect(() => {
    if (!photo) return;
    setFieldValue('image', [new File([], photo, { type: 'for-url' })]);
  }, [photo, setFieldValue]);

  useEffect(() => {
    setImagePreview(fieldValue[0]?.name);
  }, [fieldValue]);

  const setFileToBase64 = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  const onDrop = async files => {
    setFieldValue('image', files);
    const file = files[0];
    setFileToBase64(file);
  };

  return (
    <div className={styles.wrapper}>
      <Dropzone
        onDrop={onDrop}
        multiple={false}
        maxSize={8000000000}
        id="dropzone"
        {...field}
        {...props}
      >
        {({ getRootProps, getInputProps }) => (
          <div className={styles.dropzone} {...getRootProps()}>
            <input {...getInputProps()} />
            {imagePreview ? (
              <div className={styles.imagePreview}>
                <img src={imagePreview} />
              </div>
            ) : null}
            {!imagePreview && (
              <div className={styles.innerWrapper}>
                <svg className={styles.icon}>
                  <use href={`${sprite}#${'icon-plus'}`} />
                </svg>

                <p>Перетягніть або натисніть тут, щоб завантажити файл</p>
              </div>
            )}
          </div>
        )}
      </Dropzone>
  
      { errors?.[ field.name ] && (
            <div className={styles.errorWrap}>
          <p className={ styles.errorMessage }>{ errors?.[ field.name ] }</p>
                </div>
        )}

    </div>
  );
};

export default FileInput;
