import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import styles from './TextEditor.module.scss';
const TextEditor = ({ id, field, text, label, form: { setFieldValue } }) => {
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
      ['link'],

      ['clean'],
    ],
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'color',
    'background',
    'align',
  ];
  return (
    <div className={styles.inputWrapper}>
      <p className={styles.inputLabel}>{label}</p>
      <ReactQuill
        theme="snow"
        modules={modules}
        placeholder="починайте писати свої думки тут..."
        value={field.value}
        onChange={field.onChange(field.name)}
        formats={formats}
      />
    </div>
  );
};

export default TextEditor;
