import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import styles from './TextEditor.module.scss';

const TextEditor = ({
  id,
  field,
  text,

  form: { errors, handleBlur, touched, setFieldValue },
}) => {
  // const isFieldTouched = touched[field.name];

  console.log(field.value);
  console.log(field.name);

  useEffect(() => {
    if (!text) return;
    setFieldValue(id, text);
  }, [text, setFieldValue, id]);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],

      ['clean'],
    ],
  };

  return (
    <div className={styles.inputWrapper}>
      <ReactQuill
        theme="snow"
        modules={modules}
        placeholder="починайте писати свої думки тут..."
        value={field.value}
        onChange={field.onChange(field.name)}
      />
    </div>
  );
};

export default TextEditor;
