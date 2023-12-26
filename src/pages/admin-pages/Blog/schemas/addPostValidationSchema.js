import { formatBytes } from '@/helpers/formatBytes';
import * as Yup from 'yup';

const sizeLimit = 1024 * 1024 * 2;

const fileTypes = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/PNG',
  'for-url',
];

function isValidFileType(fileType) {
  return fileTypes.includes(fileType);
}

export const blogPostValidation = Yup.object().shape({
  postImage: Yup.mixed()
    .test('is-value', 'Додайте коректне зображення', value => {
      console.log('  value: ', value);
      return value && value.length > 0;
    })
    .test('is-image-from-db', 'Додайте зображення', value => {
      value && value[0]?.size === 0 && value[0]?.type === 'for-url';
      return true;
    })
    .test(
      'is-valid-type',
      'Зображення має бути в форматі .jpg, .png або .webp',
      value => isValidFileType(value && value[0]?.type)
    )
    .test(
      'is-valid-size',
      `Максимальний розмір зображення ${formatBytes(sizeLimit)}`,
      value => value && value[0]?.size <= sizeLimit
    )
    .required('Додайте зображення'),
  postCategory: Yup.string()
    .oneOf(
      ['Саморозвиток', 'Мотивація', 'Відносини', 'Діти', 'Підлітки'],
      'дозволені категорії Саморозвиток, Мотивація, Відносини, Діти ,Підлітки '
    )
    .required('Оберіть категорію'),
  title: Yup.string()
    .typeError(' ERROR:Введіть заголовок')
    .min(1)
    .max(50)
    .matches(
      /[а-яА-ЯЁёЇїІіЄєҐґ0-9.,;:!?-]+/g,
      'Введіть  заголовок літерами кирилиці'
    )
    .required('ERROR:Введіть заголовок'),
  description: Yup.string()
    .typeError(' ERROR:Введіть короткий опис про що стаття')
    .min(1)
    .max(300)
    .matches(
      /[а-яА-ЯЁёЇїІіЄєҐґ0-9.,;:!?-]+/g,
      'Введіть  опис літерами кирилиці'
    )
    .required('ERROR:Введіть короткий опис про що стаття'),
  post: Yup.string().required('ERROR: де ж стаття'),
});
