import { formatBytes } from '@/helpers/formatBytes';
import * as Yup from 'yup';

const sizeLimit = 1024 * 1024 * 3;

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

export const diplomaImageValidation = Yup.object().shape({
  image: Yup.mixed()
    .test(
      'is-value',
      'Додайте коректне зображення',
      value => value && value.length > 0
    )
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
    ),
});
